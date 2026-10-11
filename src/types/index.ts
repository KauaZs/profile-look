export type SocialPlatform = 
  | 'instagram' 
  | 'twitter' 
  | 'discord' 
  | 'linkedin' 
  | 'tiktok' 
  | 'whatsapp'
  | 'youtube'
  | 'all';

export type DiscordStatus = 'online' | 'idle' | 'dnd' | 'offline';

export interface ImageAdjustments {
  zoom: number; // 0.5 to 3
  x: number; // offset in px or %
  y: number; // offset in px or %
  rotation: number; // in degrees
  flipHorizontal: boolean;
  backgroundColor: string;
}

export interface UserProfileData {
  displayName: string;
  username: string;
  bio: string;
  location?: string;
  website?: string;
  // Specific toggles
  isVerified: boolean;
  // LinkedIn specific
  openToWork: boolean;
  jobTitle: string;
  company: string;
  // Discord specific
  discordStatus: DiscordStatus;
  discordAboutMe: string;
  customBannerColor: string;
  customBannerImage?: string;
  // Counts
  followersCount: string;
  followingCount: string;
  postsCount: string;
  likesCount: string;
}

export interface PresetAvatar {
  id: string;
  name: string;
  url: string;
  category: string;
}
