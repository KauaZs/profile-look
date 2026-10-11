import React from 'react';
import type { SocialPlatform } from '../types';
import { LayoutGrid } from 'lucide-react';
import { 
  InstagramIcon, 
  TwitterXIcon, 
  DiscordIcon, 
  LinkedInIcon, 
  TikTokIcon, 
  WhatsAppIcon, 
  YouTubeIcon 
} from './icons/BrandIcons';

interface NetworkSelectorProps {
  selectedPlatform: SocialPlatform;
  onSelectPlatform: (platform: SocialPlatform) => void;
}

export const NetworkSelector: React.FC<NetworkSelectorProps> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  const networks: { id: SocialPlatform; label: string; icon: React.ReactNode }[] = [
    {
      id: 'instagram',
      label: 'Instagram',
      icon: <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />,
    },
    {
      id: 'twitter',
      label: 'X (Twitter)',
      icon: <TwitterXIcon className="w-3.5 h-3.5 text-zinc-300" />,
    },
    {
      id: 'discord',
      label: 'Discord',
      icon: <DiscordIcon className="w-3.5 h-3.5 text-indigo-400" />,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: <LinkedInIcon className="w-3.5 h-3.5 text-sky-400" />,
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      icon: <TikTokIcon className="w-3.5 h-3.5 text-rose-400" />,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />,
    },
    {
      id: 'youtube',
      label: 'YouTube',
      icon: <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />,
    },
    {
      id: 'all',
      label: 'Todas',
      icon: <LayoutGrid className="w-3.5 h-3.5 text-zinc-400" />,
    },
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar border-b border-zinc-800/80 bg-[#0c0d0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1 py-1.5 min-w-max">
        {networks.map((net) => {
          const isSelected = selectedPlatform === net.id;
          return (
            <button
              key={net.id}
              onClick={() => onSelectPlatform(net.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-colors ${
                isSelected
                  ? 'bg-zinc-800 text-white font-medium'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <span>{net.icon}</span>
              <span>{net.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
