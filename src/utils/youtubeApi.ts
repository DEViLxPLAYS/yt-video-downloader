// YouTube webhook utilities for thumbnail download
// Make.com webhook integration

interface ThumbnailData {
  url: string;
  quality: string;
  resolution: string;
  width: number;
  height: number;
}

interface WebhookResponse {
  status: string;
  videoId: string;
  thumbnails: {
    default: string;
    highQuality: string;
    mediumQuality: string;
    standardQuality: string;
    maximumQuality: string;
  };
}

interface VideoData {
  title: string;
  thumbnails: ThumbnailData[];
  downloadLinks: never[]; // No video downloads from webhook
}

export const extractVideoId = (url: string): string | null => {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
};

// Webhook configuration
const WEBHOOK_URL = 'https://hook.us2.make.com/9dp1d3croow1xk1rrz8quz1knw1lbje7';

export const fetchThumbnails = async (url: string): Promise<VideoData> => {
  const videoId = extractVideoId(url);
  
  if (!videoId) {
    throw new Error('Invalid YouTube URL');
  }

  try {
    console.log('Sending request to webhook:', WEBHOOK_URL, { url });
    
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook request failed: ${response.status}`);
    }

    // Check if response is JSON or plain text
    const contentType = response.headers.get('content-type');
    console.log('Response content-type:', contentType);
    
    let data: WebhookResponse;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // Handle plain text response (like "Accepted")
      const textResponse = await response.text();
      console.log('Webhook text response:', textResponse);
      
      if (textResponse === 'Accepted') {
        // For now, create mock data since webhook just says "Accepted"
        const videoId = extractVideoId(url);
        data = {
          status: 'success',
          videoId: videoId || 'unknown',
          thumbnails: {
            default: `https://img.youtube.com/vi/${videoId}/default.jpg`,
            highQuality: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            mediumQuality: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            standardQuality: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
            maximumQuality: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
          }
        };
      } else {
        throw new Error(`Unexpected response: ${textResponse}`);
      }
    }
    
    if (data.status !== 'success') {
      throw new Error('Webhook returned unsuccessful status');
    }

    // Convert webhook response to our format
    const thumbnails: ThumbnailData[] = [
      {
        url: data.thumbnails.default,
        quality: 'Default',
        resolution: '120x90',
        width: 120,
        height: 90
      },
      {
        url: data.thumbnails.mediumQuality,
        quality: 'Medium',
        resolution: '320x180',
        width: 320,
        height: 180
      },
      {
        url: data.thumbnails.highQuality,
        quality: 'High',
        resolution: '480x360',
        width: 480,
        height: 360
      },
      {
        url: data.thumbnails.standardQuality,
        quality: 'Standard',
        resolution: '640x480',
        width: 640,
        height: 480
      },
      {
        url: data.thumbnails.maximumQuality,
        quality: 'Maximum',
        resolution: '1280x720',
        width: 1280,
        height: 720
      }
    ];

    return {
      title: `YouTube Video ${data.videoId}`,
      thumbnails,
      downloadLinks: [] // No video downloads from webhook
    };
  } catch (error) {
    console.error('Webhook Error:', error);
    throw new Error('Failed to fetch video data. Please try again.');
  }
};

// Helper function to download files
export const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};