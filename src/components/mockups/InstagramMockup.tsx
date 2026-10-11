import React, { useState } from 'react';
import type { ImageAdjustments, UserProfileData } from '../../types';
import { AvatarRenderer } from '../AvatarRenderer';
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreHorizontal, 
  Grid, 
  Film, 
  UserSquare2, 
  Moon, 
  Sun,
  Plus,
  ChevronDown,
  Menu,
  CheckCircle2
} from 'lucide-react';

interface InstagramMockupProps {
  imageSrc: string;
  adjustments: ImageAdjustments;
  profile: UserProfileData;
}

export const InstagramMockup: React.FC<InstagramMockupProps> = ({
  imageSrc,
  adjustments,
  profile,
}) => {
  const [viewMode, setViewMode] = useState<'profile' | 'story' | 'feed'>('profile');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const themeBg = isDarkMode ? 'bg-black text-white' : 'bg-white text-black';
  const themeBorder = isDarkMode ? 'border-neutral-800' : 'border-neutral-200';
  const themeSubtext = isDarkMode ? 'text-neutral-400' : 'text-neutral-500';
  const themeCard = isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100';

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* Sub-navigation and Theme Toggle */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
          <button
            onClick={() => setViewMode('profile')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'profile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Perfil
          </button>
          <button
            onClick={() => setViewMode('story')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'story' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Stories
          </button>
          <button
            onClick={() => setViewMode('feed')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'feed' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Post do Feed
          </button>
        </div>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
        >
          {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-400" />}
          <span>{isDarkMode ? 'Claro' : 'Escuro'}</span>
        </button>
      </div>

      {/* Mockup Frame (iPhone aesthetic) */}
      <div
        className={`w-full rounded-[40px] border-4 border-neutral-700/60 shadow-2xl overflow-hidden transition-colors duration-200 ${themeBg}`}
        style={{ minHeight: '620px' }}
      >
        {/* iOS Dynamic Island / Notch bar */}
        <div className="pt-3 px-7 flex items-center justify-between text-xs font-semibold select-none">
          <span>9:41</span>
          <div className="w-20 h-4 bg-black rounded-full" />
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>5G</span>
            <div className="w-5 h-2.5 border border-current rounded-sm p-0.5 flex items-center">
              <div className="w-full h-full bg-current rounded-xs" />
            </div>
          </div>
        </div>

        {/* VIEW 1: PROFILE */}
        {viewMode === 'profile' && (
          <div className="p-4 pt-2">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight">{profile.username}</span>
                {profile.isVerified && (
                  <CheckCircle2 className="w-4 h-4 fill-sky-500 text-black inline-block" />
                )}
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-center gap-4">
                <Plus className="w-5 h-5 cursor-pointer" />
                <Menu className="w-5 h-5 cursor-pointer" />
              </div>
            </div>

            {/* Avatar & Stats Row */}
            <div className="flex items-center justify-between gap-4 mt-2">
              {/* Instagram Story Gradient Ring around Avatar */}
              <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600">
                <div className={`p-0.5 rounded-full ${themeBg}`}>
                  <AvatarRenderer
                    imageSrc={imageSrc}
                    adjustments={adjustments}
                    size={80}
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 border-2 border-black flex items-center justify-center">
                  <Plus className="w-2.5 h-2.5" />
                </div>
              </div>

              {/* Counts */}
              <div className="flex-1 flex justify-around text-center">
                <div>
                  <div className="font-bold text-sm">{profile.postsCount}</div>
                  <div className={`text-xs ${themeSubtext}`}>publicações</div>
                </div>
                <div>
                  <div className="font-bold text-sm">{profile.followersCount}</div>
                  <div className={`text-xs ${themeSubtext}`}>seguidores</div>
                </div>
                <div>
                  <div className="font-bold text-sm">{profile.followingCount}</div>
                  <div className={`text-xs ${themeSubtext}`}>seguindo</div>
                </div>
              </div>
            </div>

            {/* Name and Bio */}
            <div className="mt-3 text-xs leading-relaxed">
              <div className="font-bold text-sm">{profile.displayName}</div>
              <div className="whitespace-pre-line mt-0.5 text-neutral-300 dark:text-neutral-200">
                {profile.bio}
              </div>
              {profile.website && (
                <div className="text-sky-500 font-medium mt-0.5 flex items-center gap-1">
                  🔗 {profile.website}
                </div>
              )}
            </div>

            {/* Profile Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-3.5">
              <button className={`py-1.5 px-3 rounded-lg text-xs font-semibold text-center ${themeCard}`}>
                Editar perfil
              </button>
              <button className={`py-1.5 px-3 rounded-lg text-xs font-semibold text-center ${themeCard}`}>
                Compartilhar perfil
              </button>
            </div>

            {/* Story Highlights */}
            <div className="flex gap-4 mt-4 overflow-x-hidden pb-2">
              {['Destaque 1', 'Viagens', 'Trabalho'].map((name, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div className={`w-14 h-14 rounded-full p-0.5 border ${themeBorder} flex items-center justify-center`}>
                    <div className={`w-full h-full rounded-full ${themeCard} flex items-center justify-center text-[10px]`}>
                      ★
                    </div>
                  </div>
                  <span className={`text-[10px] ${themeSubtext}`}>{name}</span>
                </div>
              ))}
            </div>

            {/* Feed Tabs */}
            <div className={`border-t ${themeBorder} mt-2 flex justify-around`}>
              <div className="py-2.5 border-b-2 border-current px-6">
                <Grid className="w-4 h-4" />
              </div>
              <div className={`py-2.5 px-6 ${themeSubtext}`}>
                <Film className="w-4 h-4" />
              </div>
              <div className={`py-2.5 px-6 ${themeSubtext}`}>
                <UserSquare2 className="w-4 h-4" />
              </div>
            </div>

            {/* Photos Grid preview */}
            <div className="grid grid-cols-3 gap-0.5 mt-0.5">
              <div className="aspect-square bg-neutral-800 relative group overflow-hidden">
                <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size="100%" shape="square" />
              </div>
              <div className="aspect-square bg-neutral-700" />
              <div className="aspect-square bg-neutral-800" />
            </div>
          </div>
        )}

        {/* VIEW 2: STORY PREVIEW */}
        {viewMode === 'story' && (
          <div className="p-6 flex flex-col items-center justify-center text-center h-[540px]">
            <div className="relative mb-4">
              <div className="p-1 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 animate-pulse">
                <div className={`p-1 rounded-full ${themeBg}`}>
                  <AvatarRenderer
                    imageSrc={imageSrc}
                    adjustments={adjustments}
                    size={110}
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow">
                AO VIVO
              </div>
            </div>

            <div className="font-bold text-sm flex items-center gap-1">
              <span>{profile.displayName}</span>
              {profile.isVerified && (
                <CheckCircle2 className="w-3.5 h-3.5 fill-sky-500 text-black inline-block" />
              )}
            </div>
            <div className={`text-xs ${themeSubtext} mt-0.5`}>@{profile.username}</div>

            <div className="mt-8 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 max-w-xs text-xs text-neutral-300 leading-relaxed">
              <p className="font-semibold text-white mb-1">Como as pessoas veem no Story</p>
              O anel do Instagram corta as bordas externas do avatar em um círculo perfeito com 3px de espaçamento interno.
            </div>
          </div>
        )}

        {/* VIEW 3: FEED POST */}
        {viewMode === 'feed' && (
          <div className="flex flex-col">
            {/* Post Header */}
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2.5">
                <div className="p-0.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600">
                  <AvatarRenderer
                    imageSrc={imageSrc}
                    adjustments={adjustments}
                    size={36}
                  />
                </div>
                <div>
                  <div className="font-bold text-xs flex items-center gap-1">
                    <span>{profile.username}</span>
                    {profile.isVerified && (
                      <CheckCircle2 className="w-3 h-3 fill-sky-500 text-black inline-block" />
                    )}
                  </div>
                  <div className={`text-[10px] ${themeSubtext}`}>{profile.location || 'São Paulo, Brasil'}</div>
                </div>
              </div>
              <MoreHorizontal className="w-4 h-4 cursor-pointer" />
            </div>

            {/* Post Image */}
            <div className="w-full aspect-square bg-neutral-800 overflow-hidden">
              <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size="100%" shape="square" />
            </div>

            {/* Post Actions */}
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <Heart className="w-5 h-5 cursor-pointer hover:text-rose-500 transition-colors" />
                  <MessageCircle className="w-5 h-5 cursor-pointer" />
                  <Send className="w-5 h-5 cursor-pointer" />
                </div>
                <Bookmark className="w-5 h-5 cursor-pointer" />
              </div>

              <div className="font-bold text-xs mb-1">
                {profile.likesCount} curtidas
              </div>

              <div className="text-xs">
                <span className="font-bold mr-1.5">{profile.username}</span>
                <span>Nova foto de perfil atualizada! O que acharam? ✨🔥</span>
              </div>

              <div className={`text-[10px] ${themeSubtext} mt-1.5 uppercase`}>
                Há 2 horas
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
