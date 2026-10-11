import React, { useState } from 'react';
import type { ImageAdjustments, UserProfileData } from '../../types';
import { AvatarRenderer } from '../AvatarRenderer';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  ThumbsUp, 
  MessageSquare, 
  Repeat2, 
  Send, 
  MoreHorizontal,
  Pencil
} from 'lucide-react';

interface LinkedInMockupProps {
  imageSrc: string;
  adjustments: ImageAdjustments;
  profile: UserProfileData;
  onProfileChange?: (profile: UserProfileData) => void;
}

export const LinkedInMockup: React.FC<LinkedInMockupProps> = ({
  imageSrc,
  adjustments,
  profile,
  onProfileChange,
}) => {
  const [viewMode, setViewMode] = useState<'profile' | 'feed'>('profile');

  const toggleOpenToWork = () => {
    if (onProfileChange) {
      onProfileChange({ ...profile, openToWork: !profile.openToWork });
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      {/* Top Controls */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
          <button
            onClick={() => setViewMode('profile')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'profile' ? 'bg-[#0a66c2] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Perfil Corporativo
          </button>
          <button
            onClick={() => setViewMode('feed')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'feed' ? 'bg-[#0a66c2] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Publicação no Feed
          </button>
        </div>

        {/* Quick Toggle #OpenToWork */}
        <button
          onClick={toggleOpenToWork}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
            profile.openToWork
              ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-400'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <span>Moldura #OpenToWork:</span>
          <span className={profile.openToWork ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
            {profile.openToWork ? 'Ativa' : 'Desativada'}
          </span>
        </button>
      </div>

      {/* Main LinkedIn Card (Light professional style) */}
      <div className="w-full rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 overflow-hidden font-sans select-none">
        {viewMode === 'profile' && (
          <div>
            {/* Banner Header */}
            <div className="w-full h-32 sm:h-40 bg-gradient-to-r from-[#004182] via-[#0077b5] to-[#70b5f9] relative">
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 text-slate-700 flex items-center justify-center cursor-pointer shadow">
                <Pencil className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Profile Info Container */}
            <div className="px-5 pb-5 relative">
              {/* Overlapping Avatar with white border & optional #OpenToWork */}
              <div className="flex justify-between items-end -mt-16 sm:-mt-20 mb-3">
                <div className="p-1 rounded-full bg-white shadow-md inline-block">
                  <AvatarRenderer
                    imageSrc={imageSrc}
                    adjustments={adjustments}
                    size={124}
                    showOpenToWork={profile.openToWork}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-600 flex items-center justify-center cursor-pointer">
                    <Pencil className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Names & Headline */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h2 className="text-xl font-bold text-slate-900">{profile.displayName}</h2>
                  <span className="text-xs text-slate-500">(Ele/Dele)</span>
                  <ShieldCheck className="w-4 h-4 text-[#0a66c2] fill-sky-100" />
                </div>

                <p className="text-sm text-slate-700 font-medium leading-snug">
                  {profile.jobTitle || 'Product Designer & Frontend Engineer'} | Apaixonado por tecnologia & inovação
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" /> {profile.company || 'Tech Studio'}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> {profile.location || 'São Paulo, Brasil'}
                  </span>
                  <span>·</span>
                  <span className="text-[#0a66c2] font-semibold hover:underline cursor-pointer">
                    Informações de contato
                  </span>
                </div>

                <div className="text-xs text-[#0a66c2] font-semibold pt-1">
                  Mais de 500 conexões
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <button className="px-4 py-1.5 rounded-full bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-semibold transition-colors shadow-sm">
                  Tenho interesse em...
                </button>
                <button className="px-4 py-1.5 rounded-full border border-[#0a66c2] text-[#0a66c2] hover:bg-sky-50 text-xs font-semibold transition-colors">
                  Adicionar seção do perfil
                </button>
                <button className="px-3 py-1.5 rounded-full border border-slate-400 text-slate-600 hover:bg-slate-100 text-xs font-semibold">
                  Mais
                </button>
              </div>

              {/* Open to Work Card Snippet */}
              {profile.openToWork && (
                <div className="mt-4 p-3 bg-sky-50/70 border border-sky-200 rounded-xl text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 flex items-center justify-between">
                    <span>Aberto a trabalho</span>
                    <Pencil className="w-3 h-3 text-slate-500 cursor-pointer" />
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Cargos de Designer, Desenvolvedor Frontend · Presencial ou Remoto
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* FEED POST VIEW */}
        {viewMode === 'feed' && (
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AvatarRenderer
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  size={48}
                  showOpenToWork={profile.openToWork}
                />
                <div>
                  <div className="font-bold text-xs text-slate-900 flex items-center gap-1">
                    <span>{profile.displayName}</span>
                    <span className="text-slate-400 font-normal">· 1º</span>
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1">{profile.jobTitle}</div>
                  <div className="text-[10px] text-slate-400">1 h · 🌐</div>
                </div>
              </div>
              <MoreHorizontal className="w-4 h-4 text-slate-500 cursor-pointer" />
            </div>

            <p className="text-xs text-slate-800 leading-relaxed">
              Muito feliz em compartilhar a atualização do meu perfil profissional com foco nas melhores práticas de presença digital! O enquadramento circular profissional no LinkedIn faz toda a diferença em conexões e processos seletivos. 🚀
            </p>

            <div className="border border-slate-200 rounded-xl overflow-hidden aspect-video bg-slate-100">
              <img src={imageSrc} alt="Post content" className="w-full h-full object-cover" />
            </div>

            {/* Social reactions bar */}
            <div className="flex items-center justify-between border-t border-slate-200 pt-2 text-slate-500 text-xs font-semibold">
              <button className="flex items-center gap-1.5 py-1 px-2 rounded hover:bg-slate-100 transition-colors">
                <ThumbsUp className="w-4 h-4" /> Gostei
              </button>
              <button className="flex items-center gap-1.5 py-1 px-2 rounded hover:bg-slate-100 transition-colors">
                <MessageSquare className="w-4 h-4" /> Comentar
              </button>
              <button className="flex items-center gap-1.5 py-1 px-2 rounded hover:bg-slate-100 transition-colors">
                <Repeat2 className="w-4 h-4" /> Compartilhar
              </button>
              <button className="flex items-center gap-1.5 py-1 px-2 rounded hover:bg-slate-100 transition-colors">
                <Send className="w-4 h-4" /> Enviar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
