import React, { useRef, useState, useEffect } from 'react';
import { 
  ZoomIn, 
  RotateCcw, 
  RotateCw, 
  FlipHorizontal, 
  Upload, 
  RefreshCw, 
  SlidersHorizontal,
  User,
  CheckCircle2,
  Briefcase
} from 'lucide-react';
import type { ImageAdjustments, UserProfileData, SocialPlatform } from '../types';
import { PRESET_AVATARS } from '../constants/presets';

interface PhotoEditorProps {
  imageSrc: string;
  onImageChange: (newSrc: string) => void;
  adjustments: ImageAdjustments;
  onAdjustmentsChange: (newAdjustments: ImageAdjustments) => void;
  profile: UserProfileData;
  onProfileChange: (newProfile: UserProfileData) => void;
  currentPlatform: SocialPlatform;
}

export const PhotoEditor: React.FC<PhotoEditorProps> = ({
  imageSrc,
  onImageChange,
  adjustments,
  onAdjustmentsChange,
  profile,
  onProfileChange,
  currentPlatform,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<'ajustes' | 'perfil'>('ajustes');

  // Handle paste from clipboard anywhere
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files.length > 0) {
        const file = e.clipboardData.files[0];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target?.result) {
              onImageChange(event.target.result as string);
              resetAdjustments();
            }
          };
          reader.readAsDataURL(file);
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [onImageChange]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageChange(event.target.result as string);
          resetAdjustments();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetAdjustments = () => {
    onAdjustmentsChange({
      zoom: 1,
      x: 0,
      y: 0,
      rotation: 0,
      flipHorizontal: false,
      backgroundColor: '#000000',
    });
  };

  const bgColors = ['#000000', '#ffffff', '#18181b', '#3b82f6'];

  return (
    <div className="w-full bg-[#121316] border border-zinc-800 rounded-xl p-4 flex flex-col gap-4">
      {/* Switcher: Ajustes vs Perfil */}
      <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800 text-xs">
        <button
          onClick={() => setActiveTab('ajustes')}
          className={`flex-1 py-1.5 px-3 rounded-md font-medium transition-colors flex items-center justify-center gap-1.5 ${
            activeTab === 'ajustes' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Ajustes da foto</span>
        </button>
        <button
          onClick={() => setActiveTab('perfil')}
          className={`flex-1 py-1.5 px-3 rounded-md font-medium transition-colors flex items-center justify-center gap-1.5 ${
            activeTab === 'perfil' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Dados do perfil</span>
        </button>
      </div>

      {activeTab === 'ajustes' && (
        <div className="space-y-4">
          {/* Current photo & upload */}
          <div>
            <span className="text-[11px] font-medium text-zinc-400 block mb-2">Foto atual</span>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg overflow-hidden border border-zinc-700 shrink-0 bg-black">
                <img src={imageSrc} alt="Preview" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 flex flex-col gap-1.5">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-1.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-200 text-xs font-medium border border-zinc-700/80 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Escolher imagem</span>
                </button>
                <span className="text-[10px] text-zinc-500">Ou cole com Ctrl+V</span>
              </div>
            </div>
          </div>

          {/* Quick presets */}
          <div>
            <span className="text-[11px] font-medium text-zinc-400 block mb-1.5">Exemplos rápidos</span>
            <div className="grid grid-cols-5 gap-1.5">
              {PRESET_AVATARS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    onImageChange(preset.url);
                    resetAdjustments();
                  }}
                  title={preset.name}
                  className={`relative rounded-md overflow-hidden aspect-square border transition-all ${
                    imageSrc === preset.url ? 'border-white ring-1 ring-white' : 'border-zinc-800 hover:border-zinc-600 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={preset.url} alt={preset.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <hr className="border-zinc-800" />

          {/* Sliders */}
          <div className="space-y-3">
            {/* Zoom Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-zinc-300 font-medium flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5 text-zinc-400" /> Zoom
                </span>
                <span className="text-zinc-400 font-mono text-[11px]">
                  {Math.round(adjustments.zoom * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.05"
                value={adjustments.zoom}
                onChange={(e) => onAdjustmentsChange({ ...adjustments, zoom: parseFloat(e.target.value) })}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            {/* Position X Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-zinc-300 font-medium">Posição Horizontal (X)</span>
                <span className="text-zinc-400 font-mono text-[11px]">{Math.round(adjustments.x)}%</span>
              </div>
              <input
                type="range"
                min="-60"
                max="60"
                step="1"
                value={adjustments.x}
                onChange={(e) => onAdjustmentsChange({ ...adjustments, x: parseFloat(e.target.value) })}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            {/* Position Y Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-zinc-300 font-medium">Posição Vertical (Y)</span>
                <span className="text-zinc-400 font-mono text-[11px]">{Math.round(adjustments.y)}%</span>
              </div>
              <input
                type="range"
                min="-60"
                max="60"
                step="1"
                value={adjustments.y}
                onChange={(e) => onAdjustmentsChange({ ...adjustments, y: parseFloat(e.target.value) })}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            {/* Rotation Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-zinc-300 font-medium flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-zinc-400" /> Rotação
                </span>
                <span className="text-zinc-400 font-mono text-[11px]">{adjustments.rotation}°</span>
              </div>
              <input
                type="range"
                min="-180"
                max="180"
                step="1"
                value={adjustments.rotation}
                onChange={(e) => onAdjustmentsChange({ ...adjustments, rotation: parseInt(e.target.value) })}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>
          </div>

          {/* Quick tool buttons */}
          <div className="flex items-center gap-1.5 pt-1">
            <button
              onClick={() => onAdjustmentsChange({ ...adjustments, flipHorizontal: !adjustments.flipHorizontal })}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border text-xs transition-colors ${
                adjustments.flipHorizontal ? 'bg-zinc-800 border-zinc-600 text-white' : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'
              }`}
              title="Espelhar Horizontalmente"
            >
              <FlipHorizontal className="w-3.5 h-3.5" />
              <span>Espelhar</span>
            </button>

            <button
              onClick={() => onAdjustmentsChange({ ...adjustments, rotation: (adjustments.rotation + 90) % 360 })}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white text-xs transition-colors"
              title="Girar 90 graus"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>+90°</span>
            </button>

            <button
              onClick={resetAdjustments}
              className="py-1.5 px-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white text-xs transition-colors"
              title="Resetar enquadramento"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Background color */}
          <div className="pt-1">
            <span className="text-[11px] font-medium text-zinc-400 block mb-1.5">Fundo (se houver transparência)</span>
            <div className="flex items-center gap-2">
              {bgColors.map((color) => (
                <button
                  key={color}
                  onClick={() => onAdjustmentsChange({ ...adjustments, backgroundColor: color })}
                  className={`w-5 h-5 rounded-full border transition-transform ${
                    adjustments.backgroundColor === color ? 'border-white scale-110 ring-1 ring-white/50' : 'border-zinc-700'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
              <input
                type="color"
                value={adjustments.backgroundColor}
                onChange={(e) => onAdjustmentsChange({ ...adjustments, backgroundColor: e.target.value })}
                className="w-5 h-5 rounded-full cursor-pointer bg-transparent border-0 p-0"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'perfil' && (
        <div className="space-y-3 text-xs">
          <div>
            <label className="block text-[11px] text-zinc-400 mb-1">Nome</label>
            <input
              type="text"
              value={profile.displayName}
              onChange={(e) => onProfileChange({ ...profile, displayName: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-zinc-100 focus:outline-none focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-[11px] text-zinc-400 mb-1">@usuário</label>
            <input
              type="text"
              value={profile.username}
              onChange={(e) => onProfileChange({ ...profile, username: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-zinc-100 focus:outline-none focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-[11px] text-zinc-400 mb-1">Biografia</label>
            <textarea
              rows={2}
              value={profile.bio}
              onChange={(e) => onProfileChange({ ...profile, bio: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-zinc-100 focus:outline-none focus:border-zinc-500 resize-none"
            />
          </div>

          {/* Toggles */}
          <div className="pt-2 border-t border-zinc-800 space-y-2">
            <button
              onClick={() => onProfileChange({ ...profile, isVerified: !profile.isVerified })}
              className={`w-full flex items-center justify-between p-2 rounded-lg border text-xs transition-colors ${
                profile.isVerified ? 'bg-zinc-850 border-zinc-700 text-white' : 'border-zinc-800 bg-zinc-900 text-zinc-400'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Selo verificado
              </span>
              <span className="text-[11px] text-zinc-500">{profile.isVerified ? 'Sim' : 'Não'}</span>
            </button>

            {(currentPlatform === 'linkedin' || currentPlatform === 'all') && (
              <button
                onClick={() => onProfileChange({ ...profile, openToWork: !profile.openToWork })}
                className={`w-full flex items-center justify-between p-2 rounded-lg border text-xs transition-colors ${
                  profile.openToWork ? 'bg-zinc-850 border-zinc-700 text-white' : 'border-zinc-800 bg-zinc-900 text-zinc-400'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-400" /> Moldura #OpenToWork
                </span>
                <span className="text-[11px] text-zinc-500">{profile.openToWork ? 'Ativa' : 'Desativada'}</span>
              </button>
            )}

            {(currentPlatform === 'discord' || currentPlatform === 'all') && (
              <div className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-between">
                <span className="text-zinc-400 text-[11px]">Status Discord:</span>
                <div className="flex items-center gap-1.5">
                  {(['online', 'idle', 'dnd', 'offline'] as const).map((st) => {
                    const colorMap = {
                      online: 'bg-emerald-500',
                      idle: 'bg-amber-500',
                      dnd: 'bg-rose-500',
                      offline: 'bg-zinc-500',
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
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
