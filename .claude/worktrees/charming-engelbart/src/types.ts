export interface Asset {
  id: string;
  type: 'video' | 'audio' | 'image' | 'web';
  title: string;
  description: string;
  thumbnail: string;
  url?: string;
  author: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface Agent {
  name: string;
  role: string;
  description: string;
}
