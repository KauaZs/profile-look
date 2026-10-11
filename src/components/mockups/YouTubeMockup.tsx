import React, { useState } from 'react';
import type { ImageAdjustments, UserProfileData } from '../../types';
import { AvatarRenderer } from '../AvatarRenderer';
import { 
  Bell, 
  Search, 
  ThumbsUp, 
  ThumbsDown, 
  CheckCircle2
} from 'lucide-react';

interface YouTubeMockupProps {
  imageSrc: string;
  adjustments: ImageAdjustments;
  profile: UserProfileData;
}

export const YouTubeMockup: React.FC<YouTubeMockupProps> = ({
  imageSrc,
  adjustments,
  profile,
}) => {
  const [viewMode, setViewMode] = useState<'channel' | 'comment'>('channel');

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      {/* Switcher */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
          <button
            onClick={() => setViewMode('channel')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'channel' ? 'bg-[#ff0000] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Página do Canal
          </button>
          <button
            onClick={() => setViewMode('comment')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'comment' ? 'bg-[#ff0000] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Comentário em Vídeo
          </button>
        </div>
      </div>

      {/* YouTube Window */}
      <div className="w-full rounded-2xl bg-[#0f0f0f] text-white shadow-2xl border border-neutral-800 overflow-hidden font-sans select-none">
        {/* Top Navbar */}
        <div className="px-4 py-2.5 bg-[#0f0f0f] border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-1 font-bold text-base tracking-tight">
            <span className="w-6 h-4 bg-[#ff0000] rounded-md flex items-center justify-center text-[10px] text-white font-black">
              ▶
            </span>
            <span>YouTube</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-300">
            <Search className="w-4 h-4 cursor-pointer" />
            <Bell className="w-4 h-4 cursor-pointer" />
            <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={28} />
          </div>
        </div>

        {/* VIEW 1: CHANNEL */}
        {viewMode === 'channel' && (
          <div>
            {/* Channel Banner */}
            <div className="w-full h-28 sm:h-36 bg-gradient-to-r from-red-900 via-neutral-900 to-indigo-950 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            {/* Channel Info */}
            <div className="p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <AvatarRenderer
                imageSrc={imageSrc}
                adjustments={adjustments}
                size={84}
                className="shadow-xl"
              />

              <div className="flex-1 text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <h2 className="text-xl font-bold">{profile.displayName}</h2>
                  {profile.isVerified && (
                    <CheckCircle2 className="w-4 h-4 fill-neutral-400 text-black inline-block" />
                  )}
                </div>

                <div className="text-xs text-neutral-400 flex flex-wrap justify-center sm:justify-start items-center gap-2">
                  <span>@{profile.username}</span>
                  <span>•</span>
                  <span>{profile.followersCount} inscritos</span>
                  <span>•</span>
                  <span>42 vídeos</span>
                </div>

                <p className="text-xs text-neutral-300 line-clamp-1 max-w-md pt-1">
                  {profile.bio}
                </p>

                <div className="pt-2 flex items-center justify-center sm:justify-start gap-2">
                  <button className="px-4 py-2 rounded-full bg-white hover:bg-neutral-200 text-black text-xs font-semibold transition-colors">
                    Personalizar canal
                  </button>
                  <button className="px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors">
                    Gerenciar vídeos
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-neutral-800 px-4 text-xs font-semibold text-neutral-400">
              <div className="py-2.5 border-b-2 border-white text-white px-3">Início</div>
              <div className="py-2.5 px-3">Vídeos</div>
              <div className="py-2.5 px-3">Shorts</div>
              <div className="py-2.5 px-3">Playlists</div>
              <div className="py-2.5 px-3">Comunidade</div>
            </div>

            {/* Video preview row */}
            <div className="p-4 grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="aspect-video bg-neutral-800 rounded-xl overflow-hidden relative">
                  <img src={imageSrc} alt="Thumbnail" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 bg-black/80 px-1 rounded text-[10px] font-bold">12:34</span>
                </div>
                <div className="text-xs font-semibold line-clamp-2">
                  Como escolher e cortar sua foto de perfil perfeita para todas as redes!
                </div>
                <div className="text-[10px] text-neutral-400">3,4 mil visualizações • há 3 dias</div>
              </div>

              <div className="space-y-2">
                <div className="aspect-video bg-neutral-800 rounded-xl overflow-hidden relative">
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
                    ▶
                  </div>
                  <span className="absolute bottom-1 right-1 bg-black/80 px-1 rounded text-[10px] font-bold">08:15</span>
                </div>
                <div className="text-xs font-semibold line-clamp-2">
                  Setup de iluminação para fotos de perfil profissionais em casa
                </div>
                <div className="text-[10px] text-neutral-400">8,9 mil visualizações • há 1 semana</div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: COMMENT */}
        {viewMode === 'comment' && (
          <div className="p-4 space-y-4">
            <h3 className="font-bold text-sm text-neutral-300">Comentários (128)</h3>

            <div className="flex items-start gap-3">
              <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={40} />
              <div className="flex-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">@{profile.username}</span>
                  <span className="text-[10px] text-neutral-400">há 2 horas</span>
                </div>
                <p className="text-neutral-200 mt-1 leading-relaxed">
                  Excelente conteúdo! Testando aqui como a miniatura de avatar se comporta nos comentários do YouTube. Ficou bem visível e nítido mesmo em 40px! 👍
                </p>
                <div className="flex items-center gap-4 mt-2 text-neutral-400">
                  <span className="flex items-center gap-1 cursor-pointer hover:text-white">
                    <ThumbsUp className="w-3.5 h-3.5" /> 24
                  </span>
                  <ThumbsDown className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                  <span className="cursor-pointer hover:text-white font-semibold text-[11px]">Responder</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
