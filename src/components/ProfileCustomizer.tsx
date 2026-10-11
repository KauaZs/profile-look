import React from 'react';
import type { UserProfileData, SocialPlatform } from '../types';
import { User, AtSign, FileText, CheckCircle2, Briefcase } from 'lucide-react';

interface ProfileCustomizerProps {
  profile: UserProfileData;
  onProfileChange: (newProfile: UserProfileData) => void;
  currentPlatform: SocialPlatform;
}

export const ProfileCustomizer: React.FC<ProfileCustomizerProps> = ({
  profile,
  onProfileChange,
  currentPlatform,
}) => {
  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-indigo-400" />
          <h3 className="font-semibold text-sm text-slate-100">Dados do Perfil Simulado</h3>
        </div>
        <span className="text-[11px] text-slate-500">Personalize para ver com o seu perfil</span>
      </div>

      <div className="space-y-3.5">
        {/* Name and Handle */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
              <User className="w-3 h-3 text-slate-500" /> Nome de Exibição
            </label>
            <input
              type="text"
              value={profile.displayName}
              onChange={(e) => onProfileChange({ ...profile, displayName: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
              placeholder="Ex: Seu Nome"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
              <AtSign className="w-3 h-3 text-slate-500" /> @Usuário
            </label>
            <input
              type="text"
              value={profile.username}
              onChange={(e) => onProfileChange({ ...profile, username: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
              placeholder="seunome"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
            <FileText className="w-3 h-3 text-slate-500" /> Biografia
          </label>
          <textarea
            rows={2}
            value={profile.bio}
            onChange={(e) => onProfileChange({ ...profile, bio: e.target.value })}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-indigo-500 resize-none"
            placeholder="Biografia do seu perfil..."
          />
        </div>

        {/* Platform specific toggles */}
        <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-2.5">
          {/* Verified Checkmark */}
          <button
            onClick={() => onProfileChange({ ...profile, isVerified: !profile.isVerified })}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border transition-all ${
              profile.isVerified
                ? 'bg-sky-500/10 border-sky-500/40 text-sky-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Selo Verificado</span>
          </button>

          {/* LinkedIn Open to Work */}
          {(currentPlatform === 'linkedin' || currentPlatform === 'all') && (
            <button
              onClick={() => onProfileChange({ ...profile, openToWork: !profile.openToWork })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border transition-all ${
                profile.openToWork
                  ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Moldura #OpenToWork</span>
            </button>
          )}

          {/* Discord Status Selector */}
          {(currentPlatform === 'discord' || currentPlatform === 'all') && (
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1">
              <span className="text-[11px] text-slate-400">Status Discord:</span>
              {(['online', 'idle', 'dnd', 'offline'] as const).map((st) => {
                const colorMap = {
                  online: 'bg-emerald-500',
                  idle: 'bg-amber-500',
                  dnd: 'bg-rose-500',
                  offline: 'bg-slate-400',
                };
                return (
                  <button
                    key={st}
                    onClick={() => onProfileChange({ ...profile, discordStatus: st })}
                    className={`w-3.5 h-3.5 rounded-full ${colorMap[st]} transition-transform ${
                      profile.discordStatus === st ? 'scale-125 ring-2 ring-white/50' : 'opacity-40 hover:opacity-100'
                    }`}
                    title={st.toUpperCase()}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
