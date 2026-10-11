import React, { useState } from 'react';
import type { ImageAdjustments, UserProfileData } from '../../types';
import { AvatarRenderer } from '../AvatarRenderer';
import { 
  Plus, 
  Share2, 
  Grid, 
  Lock, 
  Bookmark, 
  Heart, 
  CheckCircle2, 
  ChevronDown, 
  ArrowLeft,
  Bell
} from 'lucide-react';

interface TikTokMockupProps {
  imageSrc: string;
  adjustments: ImageAdjustments;
  profile: UserProfileData;
}

export const TikTokMockup: React.FC<TikTokMockupProps> = ({
  imageSrc,
  adjustments,
  profile,
}) => {
  const [activeTab, setActiveTab] = useState<'videos' | 'locked' | 'saved' | 'liked'>('videos');

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      {/* Frame */}
      <div
        className="w-full rounded-[40px] bg-black text-white border-4 border-neutral-800 shadow-2xl overflow-hidden font-sans select-none"
        style={{ minHeight: '620px' }}
      >
        {/* iOS Top Bar */}
        <div className="pt-3 px-6 flex items-center justify-between text-xs font-semibold">
          <span>9:41</span>
          <div className="w-16 h-3 bg-neutral-900 rounded-full" />
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-4 h-2 border border-current rounded-xs" />
          </div>
        </div>

        {/* Top TikTok Navigation Bar */}
        <div className="px-4 py-2 flex items-center justify-between">
          <ArrowLeft className="w-5 h-5 cursor-pointer" />
          <div className="flex items-center gap-1 font-bold text-sm">
            <span>{profile.displayName}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 cursor-pointer" />
            <Share2 className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Centered Avatar Area */}
        <div className="flex flex-col items-center pt-3 px-4">
          <div className="relative">
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#00f2fe] via-white to-[#fe0979]">
              <div className="p-0.5 rounded-full bg-black">
                <AvatarRenderer
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  size={96}
                />
              </div>
            </div>

            {/* Little Red Add Story Plus Icon */}
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#fe2c55] border-2 border-black flex items-center justify-center text-white cursor-pointer shadow">
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          {/* User Handle */}
          <div className="mt-2.5 text-center">
            <div className="font-semibold text-sm flex items-center justify-center gap-1">
              <span>@{profile.username}</span>
              {profile.isVerified && (
                <CheckCircle2 className="w-3.5 h-3.5 fill-[#20d5ec] text-black inline-block" />
              )}
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-7 mt-3 text-center">
            <div>
              <div className="font-bold text-base">{profile.followingCount}</div>
              <div className="text-[11px] text-neutral-400">Seguindo</div>
            </div>
            <div className="h-4 w-[1px] bg-neutral-800" />
            <div>
              <div className="font-bold text-base">{profile.followersCount}</div>
              <div className="text-[11px] text-neutral-400">Seguidores</div>
            </div>
            <div className="h-4 w-[1px] bg-neutral-800" />
            <div>
              <div className="font-bold text-base">{profile.likesCount}</div>
              <div className="text-[11px] text-neutral-400">Curtidas</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 mt-3.5 w-full max-w-xs justify-center">
            <button className="flex-1 py-2 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold transition-colors">
              Editar perfil
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold transition-colors">
              Compartilhar
            </button>
          </div>

          {/* Bio text */}
          <div className="mt-3 text-center text-xs text-neutral-200 leading-relaxed max-w-xs whitespace-pre-line">
            {profile.bio}
          </div>

          {/* Video Tabs */}
          <div className="flex items-center justify-around w-full border-b border-neutral-800 mt-4 text-neutral-500">
            <button
              onClick={() => setActiveTab('videos')}
              className={`py-2.5 flex-1 flex justify-center border-b-2 transition-colors ${
                activeTab === 'videos' ? 'border-white text-white' : 'border-transparent'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('locked')}
              className={`py-2.5 flex-1 flex justify-center border-b-2 transition-colors ${
                activeTab === 'locked' ? 'border-white text-white' : 'border-transparent'
              }`}
            >
              <Lock className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`py-2.5 flex-1 flex justify-center border-b-2 transition-colors ${
                activeTab === 'saved' ? 'border-white text-white' : 'border-transparent'
              }`}
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('liked')}
              className={`py-2.5 flex-1 flex justify-center border-b-2 transition-colors ${
                activeTab === 'liked' ? 'border-white text-white' : 'border-transparent'
              }`}
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {/* Video Grid Mockup */}
          <div className="grid grid-cols-3 gap-0.5 w-full mt-0.5 pb-6">
            <div className="aspect-[3/4] bg-neutral-900 relative flex items-end p-1.5 overflow-hidden">
              <img src={imageSrc} alt="Video 1" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <span className="text-[10px] text-white flex items-center gap-0.5 z-10 font-bold">
                ▶ 14.2k
              </span>
            </div>
            <div className="aspect-[3/4] bg-neutral-800 relative flex items-end p-1.5">
              <span className="text-[10px] text-white flex items-center gap-0.5 z-10 font-bold">
                ▶ 8.9k
              </span>
            </div>
            <div className="aspect-[3/4] bg-neutral-900 relative flex items-end p-1.5">
              <span className="text-[10px] text-white flex items-center gap-0.5 z-10 font-bold">
                ▶ 32.1k
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
