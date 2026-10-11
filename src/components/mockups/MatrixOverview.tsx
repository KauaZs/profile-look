import React from 'react';
import type { ImageAdjustments, UserProfileData, SocialPlatform } from '../../types';
import { AvatarRenderer } from '../AvatarRenderer';
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import {
  InstagramIcon,
  TwitterXIcon,
  DiscordIcon,
  LinkedInIcon,
  TikTokIcon,
  WhatsAppIcon,
} from '../icons/BrandIcons';

interface MatrixOverviewProps {
  imageSrc: string;
  adjustments: ImageAdjustments;
  profile: UserProfileData;
  onSelectPlatform: (platform: SocialPlatform) => void;
}

export const MatrixOverview: React.FC<MatrixOverviewProps> = ({
  imageSrc,
  adjustments,
  profile,
  onSelectPlatform,
}) => {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
        <span className="text-xs font-medium text-zinc-300">
          Visão Geral em Todas as Redes
        </span>
        <span className="text-[11px] text-zinc-500 font-mono">
          Clique em qualquer card para abrir
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* 1. INSTAGRAM */}
        <div
          onClick={() => onSelectPlatform('instagram')}
          className="group bg-black border border-zinc-800 rounded-xl p-3.5 cursor-pointer hover:border-zinc-600 transition-colors flex flex-col justify-between"
        >
          <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
            <div className="flex items-center gap-1.5">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
              <span className="font-medium text-xs text-zinc-200">Instagram</span>
            </div>
            <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </div>

          <div className="py-3 flex items-center gap-3">
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600">
              <div className="p-0.5 rounded-full bg-black">
                <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={54} />
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-medium text-xs text-white truncate flex items-center gap-1">
                <span>{profile.displayName}</span>
                {profile.isVerified && <CheckCircle2 className="w-3 h-3 fill-sky-500 text-black shrink-0" />}
              </div>
              <div className="text-[11px] text-zinc-500 truncate">@{profile.username}</div>
            </div>
          </div>

          <div className="text-[10px] text-zinc-500 flex items-center justify-between pt-2 border-t border-zinc-900">
            <span>Corte circular</span>
            <span className="text-zinc-400 group-hover:text-white flex items-center gap-0.5">
              Ver <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>

        {/* 2. X / TWITTER */}
        <div
          onClick={() => onSelectPlatform('twitter')}
          className="group bg-black border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-600 transition-colors flex flex-col justify-between"
        >
          <div className="h-10 bg-zinc-900 relative p-2 flex justify-between items-start border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <TwitterXIcon className="w-3.5 h-3.5 text-zinc-300" />
              <span className="font-medium text-xs text-zinc-200">X (Twitter)</span>
            </div>
            <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-300" />
          </div>

          <div className="px-3 pb-3 -mt-5">
            <div className="p-0.5 rounded-full bg-black inline-block">
              <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={48} />
            </div>

            <div className="mt-1">
              <div className="font-medium text-xs text-white flex items-center gap-1">
                <span>{profile.displayName}</span>
                {profile.isVerified && <CheckCircle2 className="w-3 h-3 fill-[#1d9bf0] text-black" />}
              </div>
              <div className="text-[11px] text-zinc-500">@{profile.username}</div>
            </div>
          </div>

          <div className="px-3 py-1.5 bg-zinc-950 text-[10px] text-zinc-500 flex items-center justify-between border-t border-zinc-900">
            <span>Com banner</span>
            <span className="text-zinc-400 group-hover:text-white flex items-center gap-0.5">
              Ver <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>

        {/* 3. DISCORD */}
        <div
          onClick={() => onSelectPlatform('discord')}
          className="group bg-[#232428] border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-600 transition-colors flex flex-col justify-between"
        >
          <div className="h-10 bg-[#5865F2] relative p-2 flex justify-between items-start">
            <div className="flex items-center gap-1.5">
              <DiscordIcon className="w-3.5 h-3.5 text-white" />
              <span className="font-medium text-xs text-white">Discord</span>
            </div>
            <ExternalLink className="w-3 h-3 text-white/80 group-hover:text-white" />
          </div>

          <div className="px-3 pb-3 -mt-5">
            <div className="relative inline-block">
              <div className="p-0.5 rounded-full bg-[#232428]">
                <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={48} />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#23a55a] border-2 border-[#232428]" />
            </div>

            <div className="mt-1">
              <div className="font-medium text-xs text-white">{profile.displayName}</div>
              <div className="text-[11px] text-[#b5bac1]">{profile.username.toLowerCase()}</div>
            </div>
          </div>

          <div className="px-3 py-1.5 bg-[#1e1f22] text-[10px] text-zinc-400 flex items-center justify-between border-t border-zinc-800">
            <span>Com status dot</span>
            <span className="text-zinc-400 group-hover:text-white flex items-center gap-0.5">
              Ver <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>

        {/* 4. LINKEDIN */}
        <div
          onClick={() => onSelectPlatform('linkedin')}
          className="group bg-white text-zinc-900 border border-zinc-200 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-400 transition-colors flex flex-col justify-between"
        >
          <div className="h-10 bg-[#0a66c2] relative p-2 flex justify-between items-start">
            <div className="flex items-center gap-1.5">
              <LinkedInIcon className="w-3.5 h-3.5 text-white" />
              <span className="font-medium text-xs text-white">LinkedIn</span>
            </div>
            <ExternalLink className="w-3 h-3 text-white/80 group-hover:text-white" />
          </div>

          <div className="px-3 pb-3 -mt-5">
            <div className="p-0.5 rounded-full bg-white shadow-sm inline-block">
              <AvatarRenderer
                imageSrc={imageSrc}
                adjustments={adjustments}
                size={48}
                showOpenToWork={profile.openToWork}
              />
            </div>

            <div className="mt-1">
              <div className="font-medium text-xs text-zinc-900 truncate">{profile.displayName}</div>
              <div className="text-[11px] text-zinc-500 truncate">{profile.jobTitle || 'Profissional'}</div>
            </div>
          </div>

          <div className="px-3 py-1.5 bg-zinc-50 text-[10px] text-zinc-500 flex items-center justify-between border-t border-zinc-100">
            <span>{profile.openToWork ? 'Com #OpenToWork' : 'Profissional'}</span>
            <span className="text-blue-600 group-hover:text-blue-800 flex items-center gap-0.5">
              Ver <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>

        {/* 5. TIKTOK */}
        <div
          onClick={() => onSelectPlatform('tiktok')}
          className="group bg-black border border-zinc-800 rounded-xl p-3.5 cursor-pointer hover:border-zinc-600 transition-colors flex flex-col justify-between"
        >
          <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
            <div className="flex items-center gap-1.5">
              <TikTokIcon className="w-3.5 h-3.5 text-rose-500" />
              <span className="font-medium text-xs text-zinc-200">TikTok</span>
            </div>
            <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-300" />
          </div>

          <div className="py-2.5 flex flex-col items-center text-center">
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#00f2fe] to-[#fe0979]">
              <div className="p-0.5 rounded-full bg-black">
                <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={50} />
              </div>
            </div>
            <div className="font-medium text-xs text-white mt-1.5">@{profile.username}</div>
          </div>

          <div className="text-[10px] text-zinc-500 flex items-center justify-between pt-2 border-t border-zinc-900">
            <span>Central</span>
            <span className="text-zinc-400 group-hover:text-white flex items-center gap-0.5">
              Ver <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>

        {/* 6. WHATSAPP */}
        <div
          onClick={() => onSelectPlatform('whatsapp')}
          className="group bg-[#111b21] border border-zinc-800 rounded-xl p-3.5 cursor-pointer hover:border-zinc-600 transition-colors flex flex-col justify-between"
        >
          <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
            <div className="flex items-center gap-1.5">
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium text-xs text-zinc-200">WhatsApp</span>
            </div>
            <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-300" />
          </div>

          <div className="py-2.5 flex items-center gap-3">
            <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={48} />
            <div className="min-w-0">
              <div className="font-medium text-xs text-white truncate">{profile.displayName}</div>
              <div className="text-[10px] text-emerald-400 font-medium">online</div>
            </div>
          </div>

          <div className="text-[10px] text-zinc-500 flex items-center justify-between pt-2 border-t border-zinc-900">
            <span>Chat e lista</span>
            <span className="text-zinc-400 group-hover:text-white flex items-center gap-0.5">
              Ver <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
