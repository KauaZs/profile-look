import React, { useState } from 'react';
import type { ImageAdjustments, UserProfileData, DiscordStatus } from '../../types';
import { AvatarRenderer } from '../AvatarRenderer';
import { 
  Sparkles, 
  Smile, 
  Hash, 
  Calendar
} from 'lucide-react';

interface DiscordMockupProps {
  imageSrc: string;
  adjustments: ImageAdjustments;
  profile: UserProfileData;
}

export const DiscordMockup: React.FC<DiscordMockupProps> = ({
  imageSrc,
  adjustments,
  profile,
}) => {
  const [viewMode, setViewMode] = useState<'profile' | 'chat'>('profile');
  const [currentStatus, setCurrentStatus] = useState<DiscordStatus>(profile.discordStatus || 'online');

  // Status dot helper
  const renderStatusDot = (size: 'large' | 'small') => {
    const sizeClasses = size === 'large' ? 'w-7 h-7 -bottom-1 -right-1 border-[4px]' : 'w-3.5 h-3.5 -bottom-0.5 -right-0.5 border-[2px]';
    
    switch (currentStatus) {
      case 'idle':
        return (
          <div className={`absolute ${sizeClasses} rounded-full bg-[#f0b232] border-[#232428] flex items-center justify-center`}>
            <div className="w-2 h-2 rounded-full bg-[#232428] -translate-x-0.5 -translate-y-0.5" />
          </div>
        );
      case 'dnd':
        return (
          <div className={`absolute ${sizeClasses} rounded-full bg-[#f23f43] border-[#232428] flex items-center justify-center`}>
            <div className="w-2 h-0.5 bg-[#232428]" />
          </div>
        );
      case 'offline':
        return (
          <div className={`absolute ${sizeClasses} rounded-full bg-[#80848e] border-[#232428] flex items-center justify-center`}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#232428]" />
          </div>
        );
      default:
        return (
          <div className={`absolute ${sizeClasses} rounded-full bg-[#23a55a] border-[#232428]`} />
        );
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      {/* View Switcher & Status Bar */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
          <button
            onClick={() => setViewMode('profile')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'profile' ? 'bg-[#5865F2] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Card de Perfil
          </button>
          <button
            onClick={() => setViewMode('chat')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'chat' ? 'bg-[#5865F2] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Canal de Texto
          </button>
        </div>

        {/* Quick Status toggle */}
        <div className="flex items-center gap-1 bg-[#1e1f22] p-1 rounded-xl border border-slate-800">
          {(['online', 'idle', 'dnd', 'offline'] as DiscordStatus[]).map((st) => (
            <button
              key={st}
              onClick={() => setCurrentStatus(st)}
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform ${
                currentStatus === st ? 'scale-110 ring-2 ring-white/50' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  st === 'online' ? 'bg-[#23a55a]' :
                  st === 'idle' ? 'bg-[#f0b232]' :
                  st === 'dnd' ? 'bg-[#f23f43]' : 'bg-[#80848e]'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* DISCORD CARD VIEW */}
      {viewMode === 'profile' && (
        <div className="w-full rounded-2xl bg-[#232428] text-white shadow-2xl overflow-hidden border border-slate-800 font-sans select-none">
          {/* Banner */}
          <div
            className="w-full h-28 relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            style={{ backgroundColor: profile.customBannerColor }}
          >
            {/* Nitro badge icon */}
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#f47b67]" />
              <span>NITRO</span>
            </div>
          </div>

          {/* Profile Header & Overlapping Avatar */}
          <div className="px-4 relative pb-4">
            {/* Avatar with Status indicator */}
            <div className="-mt-12 relative inline-block">
              <div className="p-1.5 rounded-full bg-[#232428]">
                <AvatarRenderer
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  size={84}
                  className="rounded-full"
                />
              </div>
              {renderStatusDot('large')}
            </div>

            {/* Badges Box */}
            <div className="absolute top-3 right-4 flex items-center gap-1.5 bg-[#111214] p-1.5 rounded-lg border border-white/5">
              {/* Discord Badges */}
              <div className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold" title="HypeSquad Bravery">
                🛡️
              </div>
              <div className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs" title="Nitro Subscriber">
                💎
              </div>
              <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs" title="Active Developer">
                ⚡
              </div>
            </div>

            {/* Names Card */}
            <div className="mt-3 bg-[#111214] p-3.5 rounded-xl border border-white/5 space-y-3">
              <div>
                <div className="font-bold text-base text-white">{profile.displayName}</div>
                <div className="text-xs text-[#b5bac1] font-medium flex items-center gap-1">
                  <span>{profile.username.toLowerCase()}</span>
                  <span className="text-[10px] bg-[#2b2d31] px-1 rounded text-[#949ba4]">ele/dele</span>
                </div>
              </div>

              {/* Status text */}
              <div className="text-xs text-[#dbdee1] flex items-center gap-2 border-b border-[#35363c] pb-2.5">
                <Smile className="w-3.5 h-3.5 text-[#949ba4]" />
                <span>Ouvindo música e codando...</span>
              </div>

              {/* About Me */}
              <div>
                <div className="text-[11px] font-bold text-[#b5bac1] uppercase tracking-wider mb-1">
                  Sobre mim
                </div>
                <p className="text-xs text-[#dbdee1] leading-relaxed whitespace-pre-line">
                  {profile.discordAboutMe || profile.bio}
                </p>
              </div>

              {/* Member Since */}
              <div>
                <div className="text-[11px] font-bold text-[#b5bac1] uppercase tracking-wider mb-1">
                  Membro do Discord desde
                </div>
                <div className="text-xs text-[#dbdee1] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#949ba4]" />
                  <span>14 de mai. de 2018</span>
                </div>
              </div>

              {/* Roles */}
              <div>
                <div className="text-[11px] font-bold text-[#b5bac1] uppercase tracking-wider mb-1.5">
                  Cargos
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#2b2d31] text-[11px] text-[#dbdee1] border border-white/5 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Admin
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#2b2d31] text-[11px] text-[#dbdee1] border border-white/5 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" /> Developer
                  </span>
                </div>
              </div>

              {/* Message Input */}
              <div className="pt-1">
                <div className="w-full bg-[#2b2d31] rounded-lg px-3 py-2 text-xs text-[#949ba4] flex items-center justify-between">
                  <span>Conversar com @{profile.username.toLowerCase()}</span>
                  <Smile className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DISCORD CHAT VIEW */}
      {viewMode === 'chat' && (
        <div className="w-full rounded-2xl bg-[#313338] text-white shadow-2xl overflow-hidden border border-slate-800 font-sans select-none">
          {/* Channel Header */}
          <div className="px-4 py-3 bg-[#2b2d31] border-b border-[#1f2023] flex items-center gap-2">
            <Hash className="w-5 h-5 text-[#80848e]" />
            <span className="font-bold text-sm">geral</span>
            <span className="text-xs text-[#949ba4] border-l border-white/10 pl-2">Bate-papo da comunidade</span>
          </div>

          {/* Messages stream */}
          <div className="p-4 space-y-4">
            {/* User message */}
            <div className="flex items-start gap-4 hover:bg-[#2b2d31]/40 -mx-4 px-4 py-1.5 transition-colors">
              <div className="relative">
                <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={40} />
                {renderStatusDot('small')}
              </div>
              <div className="flex-1 text-xs">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-[#f2f3f5] hover:underline cursor-pointer">
                    {profile.displayName}
                  </span>
                  <span className="text-[10px] text-[#949ba4]">Hoje às 15:08</span>
                </div>
                <p className="text-[#dbdee1] mt-0.5 leading-relaxed">
                  Fala pessoal! Mudei minha foto de perfil aqui no Discord. Reparem como o pontinho de status verde cobre o canto inferior direito. Ficou bem enquadrado?
                </p>
              </div>
            </div>

            {/* Friend response */}
            <div className="flex items-start gap-4 -mx-4 px-4 py-1.5">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs">
                JD
              </div>
              <div className="flex-1 text-xs">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-emerald-400">Lucas DEV</span>
                  <span className="text-[10px] text-[#949ba4]">Hoje às 15:09</span>
                </div>
                <p className="text-[#dbdee1] mt-0.5">
                  Ficou perfeito man! Não cortou seu rosto nem o detalhe de fundo! 🔥
                </p>
              </div>
            </div>
          </div>

          {/* Chat text bar */}
          <div className="p-4 bg-[#313338]">
            <div className="bg-[#383a40] rounded-lg px-4 py-2.5 text-xs text-[#949ba4] flex items-center justify-between">
              <span>Conversar em #geral</span>
              <div className="flex items-center gap-2">
                <Smile className="w-4 h-4 cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
