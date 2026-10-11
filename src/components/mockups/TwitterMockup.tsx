import React, { useState } from 'react';
import type { ImageAdjustments, UserProfileData } from '../../types';
import { AvatarRenderer } from '../AvatarRenderer';
import { 
  Calendar, 
  MapPin, 
  Link2, 
  MessageCircle, 
  Repeat2, 
  Heart, 
  Bookmark, 
  Share, 
  ArrowLeft, 
  MoreHorizontal,
  CheckCircle2,
  BarChart2
} from 'lucide-react';

interface TwitterMockupProps {
  imageSrc: string;
  adjustments: ImageAdjustments;
  profile: UserProfileData;
}

export const TwitterMockup: React.FC<TwitterMockupProps> = ({
  imageSrc,
  adjustments,
  profile,
}) => {
  const [theme, setTheme] = useState<'lightsOut' | 'dim' | 'light'>('lightsOut');
  const [viewMode, setViewMode] = useState<'profile' | 'tweet'>('profile');

  const getThemeClasses = () => {
    switch (theme) {
      case 'dim':
        return {
          bg: 'bg-[#15202b] text-slate-100',
          border: 'border-[#38444d]',
          headerBg: 'bg-[#15202b]/80',
          subtext: 'text-[#8b98a5]',
          buttonBg: 'bg-white text-black hover:bg-slate-200',
          cardBg: 'bg-[#1e2732]',
        };
      case 'light':
        return {
          bg: 'bg-white text-black',
          border: 'border-slate-200',
          headerBg: 'bg-white/80',
          subtext: 'text-slate-500',
          buttonBg: 'bg-black text-white hover:bg-slate-800',
          cardBg: 'bg-slate-100',
        };
      default:
        return {
          bg: 'bg-black text-white',
          border: 'border-[#2f3336]',
          headerBg: 'bg-black/80',
          subtext: 'text-[#71767b]',
          buttonBg: 'bg-white text-black hover:bg-slate-200',
          cardBg: 'bg-[#16181c]',
        };
    }
  };

  const themeStyles = getThemeClasses();

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      {/* View & Theme Switches */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
          <button
            onClick={() => setViewMode('profile')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'profile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Perfil Completo
          </button>
          <button
            onClick={() => setViewMode('tweet')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'tweet' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Post no Feed (Tweet)
          </button>
        </div>

        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
          <button
            onClick={() => setTheme('lightsOut')}
            className={`px-2 py-1 rounded-lg ${theme === 'lightsOut' ? 'bg-black text-white font-semibold' : 'text-slate-400'}`}
          >
            Preto
          </button>
          <button
            onClick={() => setTheme('dim')}
            className={`px-2 py-1 rounded-lg ${theme === 'dim' ? 'bg-[#15202b] text-white font-semibold' : 'text-slate-400'}`}
          >
            Dim
          </button>
          <button
            onClick={() => setTheme('light')}
            className={`px-2 py-1 rounded-lg ${theme === 'light' ? 'bg-white text-black font-semibold' : 'text-slate-400'}`}
          >
            Claro
          </button>
        </div>
      </div>

      {/* Main Twitter Mockup Window */}
      <div
        className={`w-full rounded-2xl border ${themeStyles.border} shadow-2xl overflow-hidden transition-colors duration-200 ${themeStyles.bg}`}
      >
        {/* Top Navbar */}
        <div className={`sticky top-0 z-20 px-4 py-2 flex items-center gap-6 backdrop-blur-md ${themeStyles.headerBg} border-b ${themeStyles.border}`}>
          <ArrowLeft className="w-5 h-5 cursor-pointer" />
          <div>
            <div className="font-bold text-sm flex items-center gap-1">
              <span>{profile.displayName}</span>
              {profile.isVerified && (
                <CheckCircle2 className="w-4 h-4 fill-[#1d9bf0] text-black inline-block" />
              )}
            </div>
            <div className={`text-xs ${themeStyles.subtext}`}>{profile.postsCount} posts</div>
          </div>
        </div>

        {viewMode === 'profile' && (
          <div>
            {/* Header Banner */}
            <div className="w-full h-36 sm:h-44 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 relative">
              {profile.customBannerImage && (
                <img
                  src={profile.customBannerImage}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Avatar & Edit Profile Button Row */}
            <div className="px-4 relative flex justify-between items-end pb-3">
              {/* Overlapping Avatar */}
              <div className="-mt-16 sm:-mt-20 relative">
                <div className={`p-1 rounded-full ${themeStyles.bg}`}>
                  <AvatarRenderer
                    imageSrc={imageSrc}
                    adjustments={adjustments}
                    size={116}
                    className="border-2 border-transparent"
                  />
                </div>
              </div>

              {/* Edit Profile Button */}
              <button
                className={`px-4 py-1.5 rounded-full font-bold text-xs border ${themeStyles.border} ${themeStyles.buttonBg} transition-colors`}
              >
                Editar perfil
              </button>
            </div>

            {/* Profile Info */}
            <div className="px-4 space-y-3">
              <div>
                <div className="font-extrabold text-lg flex items-center gap-1">
                  <span>{profile.displayName}</span>
                  {profile.isVerified && (
                    <CheckCircle2 className="w-4 h-4 fill-[#1d9bf0] text-black inline-block" />
                  )}
                </div>
                <div className={`text-xs ${themeStyles.subtext}`}>@{profile.username}</div>
              </div>

              <p className="text-xs leading-relaxed whitespace-pre-line">
                {profile.bio}
              </p>

              <div className={`flex flex-wrap items-center gap-y-1 gap-x-4 text-xs ${themeStyles.subtext}`}>
                {profile.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {profile.location}
                  </span>
                )}
                {profile.website && (
                  <span className="flex items-center gap-1 text-[#1d9bf0]">
                    <Link2 className="w-3.5 h-3.5" />
                    {profile.website}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Ingressou em Outubro 2021
                </span>
              </div>

              {/* Follow Stats */}
              <div className="flex items-center gap-4 text-xs pt-1">
                <span>
                  <strong className="font-bold">{profile.followingCount}</strong>{' '}
                  <span className={themeStyles.subtext}>Seguindo</span>
                </span>
                <span>
                  <strong className="font-bold">{profile.followersCount}</strong>{' '}
                  <span className={themeStyles.subtext}>Seguidores</span>
                </span>
              </div>
            </div>

            {/* Profile Tabs */}
            <div className={`flex border-b ${themeStyles.border} mt-4 font-semibold text-xs`}>
              <div className="flex-1 py-3 text-center border-b-4 border-[#1d9bf0]">
                Posts
              </div>
              <div className={`flex-1 py-3 text-center ${themeStyles.subtext}`}>
                Respostas
              </div>
              <div className={`flex-1 py-3 text-center ${themeStyles.subtext}`}>
                Destaques
              </div>
              <div className={`flex-1 py-3 text-center ${themeStyles.subtext}`}>
                Mídia
              </div>
            </div>

            {/* Pinned Tweet Sample */}
            <div className={`p-4 border-b ${themeStyles.border} flex gap-3`}>
              <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={40} />
              <div className="flex-1 text-xs">
                <div className="flex items-center gap-1">
                  <span className="font-bold">{profile.displayName}</span>
                  {profile.isVerified && (
                    <CheckCircle2 className="w-3.5 h-3.5 fill-[#1d9bf0] text-black inline-block" />
                  )}
                  <span className={themeStyles.subtext}>@{profile.username} · 1h</span>
                </div>
                <p className="mt-1 leading-relaxed">
                  Testando a nova foto de perfil aqui no X! O enquadramento circular precisa ficar no ponto certo. 🎯📸
                </p>
                <div className={`flex justify-between items-center mt-3 text-xs ${themeStyles.subtext} max-w-sm`}>
                  <span className="flex items-center gap-1 hover:text-[#1d9bf0] cursor-pointer">
                    <MessageCircle className="w-4 h-4" /> 14
                  </span>
                  <span className="flex items-center gap-1 hover:text-emerald-500 cursor-pointer">
                    <Repeat2 className="w-4 h-4" /> 8
                  </span>
                  <span className="flex items-center gap-1 hover:text-rose-500 cursor-pointer">
                    <Heart className="w-4 h-4" /> 67
                  </span>
                  <span className="flex items-center gap-1 hover:text-[#1d9bf0] cursor-pointer">
                    <BarChart2 className="w-4 h-4" /> 1.2k
                  </span>
                  <span className="flex items-center gap-1 hover:text-[#1d9bf0] cursor-pointer">
                    <Bookmark className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FEED TWEET VIEW */}
        {viewMode === 'tweet' && (
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={48} />
                <div>
                  <div className="font-bold text-sm flex items-center gap-1">
                    <span>{profile.displayName}</span>
                    {profile.isVerified && (
                      <CheckCircle2 className="w-3.5 h-3.5 fill-[#1d9bf0] text-black inline-block" />
                    )}
                  </div>
                  <div className={`text-xs ${themeStyles.subtext}`}>@{profile.username}</div>
                </div>
              </div>
              <MoreHorizontal className={`w-5 h-5 ${themeStyles.subtext} cursor-pointer`} />
            </div>

            <p className="text-sm leading-relaxed">
              Dica: a miniatura do X nos tweets tem 40px a 48px de diâmetro. Veja como os detalhes do seu rosto ou logo se comportam neste tamanho reduzido! 🔍
            </p>

            {/* Tweet image with same photo */}
            <div className={`rounded-2xl overflow-hidden border ${themeStyles.border} aspect-video relative`}>
              <img src={imageSrc} alt="Post content" className="w-full h-full object-cover" />
            </div>

            <div className={`text-xs ${themeStyles.subtext} border-b ${themeStyles.border} pb-3`}>
              15:42 · 4 de Outubro de 2026 · <span className="text-white font-semibold">4.280</span> Visualizações
            </div>

            <div className={`flex justify-around items-center pt-1 ${themeStyles.subtext}`}>
              <MessageCircle className="w-4 h-4 hover:text-[#1d9bf0] cursor-pointer" />
              <Repeat2 className="w-4 h-4 hover:text-emerald-500 cursor-pointer" />
              <Heart className="w-4 h-4 hover:text-rose-500 cursor-pointer" />
              <Bookmark className="w-4 h-4 hover:text-[#1d9bf0] cursor-pointer" />
              <Share className="w-4 h-4 hover:text-[#1d9bf0] cursor-pointer" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
