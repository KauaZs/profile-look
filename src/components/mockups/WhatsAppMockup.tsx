import React, { useState } from 'react';
import type { ImageAdjustments, UserProfileData } from '../../types';
import { AvatarRenderer } from '../AvatarRenderer';
import { 
  ArrowLeft, 
  MoreVertical, 
  Phone, 
  Video, 
  CheckCheck, 
  Mic, 
  Camera, 
  Search
} from 'lucide-react';

interface WhatsAppMockupProps {
  imageSrc: string;
  adjustments: ImageAdjustments;
  profile: UserProfileData;
}

export const WhatsAppMockup: React.FC<WhatsAppMockupProps> = ({
  imageSrc,
  adjustments,
  profile,
}) => {
  const [viewMode, setViewMode] = useState<'chat' | 'list' | 'viewer'>('chat');

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      {/* Switcher */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
          <button
            onClick={() => setViewMode('chat')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'chat' ? 'bg-[#00a884] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Chat Aberto
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'list' ? 'bg-[#00a884] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Lista de Conversas
          </button>
          <button
            onClick={() => setViewMode('viewer')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              viewMode === 'viewer' ? 'bg-[#00a884] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Foto em Destaque
          </button>
        </div>
      </div>

      {/* WhatsApp Frame */}
      <div
        className="w-full rounded-[36px] bg-[#111b21] text-slate-100 border-4 border-slate-800 shadow-2xl overflow-hidden font-sans select-none"
        style={{ minHeight: '560px' }}
      >
        {/* Android/iOS Status Bar */}
        <div className="pt-2 px-6 flex items-center justify-between text-xs text-slate-400 bg-[#202c33]">
          <span>15:10</span>
          <div className="flex items-center gap-2">
            <span>4G</span>
            <div className="w-4 h-2 border border-current rounded-xs" />
          </div>
        </div>

        {/* VIEW 1: CHAT ABERTO */}
        {viewMode === 'chat' && (
          <div className="flex flex-col h-[520px]">
            {/* Header */}
            <div className="px-3 py-2.5 bg-[#202c33] flex items-center justify-between text-white shadow">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5 cursor-pointer text-[#aebac1]" />
                <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={40} />
                <div className="leading-tight">
                  <div className="font-semibold text-sm">{profile.displayName}</div>
                  <div className="text-[11px] text-[#00a884]">online</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[#aebac1]">
                <Video className="w-4 h-4 cursor-pointer" />
                <Phone className="w-4 h-4 cursor-pointer" />
                <MoreVertical className="w-4 h-4 cursor-pointer" />
              </div>
            </div>

            {/* Chat conversation area with subtle doodle background */}
            <div className="flex-1 bg-[#0b141a] p-4 flex flex-col justify-end gap-3 text-xs">
              {/* Encrypted Notice */}
              <div className="self-center bg-[#182229] text-[#ffd279] text-[10px] py-1 px-3 rounded-lg text-center max-w-xs leading-normal shadow">
                🔒 As mensagens são protegidas com a criptografia de ponta a ponta.
              </div>

              {/* Message from Contact */}
              <div className="self-start bg-[#202c33] text-white p-2.5 rounded-xl rounded-tl-none max-w-[80%] shadow">
                <p>E aí! Gostei muito da foto nova de perfil, o corte circular ficou bem centralizado! 👏</p>
                <div className="text-[9px] text-[#8696a0] text-right mt-1">15:08</div>
              </div>

              {/* Message from User */}
              <div className="self-end bg-[#005c4b] text-white p-2.5 rounded-xl rounded-tr-none max-w-[80%] shadow">
                <p>Valeu! Ajustei certinho no Profile Look antes de colocar aqui! 🎯</p>
                <div className="text-[9px] text-[#8696a0] flex items-center justify-end gap-1 mt-1">
                  <span>15:09</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                </div>
              </div>
            </div>

            {/* Input Footer */}
            <div className="p-2 bg-[#202c33] flex items-center gap-2">
              <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-xs text-[#8696a0]">
                Mensagem
              </div>
              <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white cursor-pointer">
                <Mic className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: LISTA DE CONVERSAS */}
        {viewMode === 'list' && (
          <div>
            <div className="px-4 py-3 bg-[#202c33] flex items-center justify-between">
              <span className="font-bold text-lg text-[#00a884]">WhatsApp</span>
              <div className="flex items-center gap-4 text-[#aebac1]">
                <Camera className="w-4 h-4" />
                <Search className="w-4 h-4" />
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>

            {/* Chats tab row */}
            <div className="flex bg-[#202c33] text-[#8696a0] text-xs font-semibold border-b border-[#222d34]">
              <div className="py-2.5 px-6 border-b-2 border-[#00a884] text-[#00a884] flex-1 text-center">
                Conversas
              </div>
              <div className="py-2.5 px-6 flex-1 text-center">Atualizações</div>
              <div className="py-2.5 px-6 flex-1 text-center">Ligações</div>
            </div>

            {/* Chat Items */}
            <div className="divide-y divide-[#222d34]">
              {/* Highlighted item with user's avatar */}
              <div className="p-3.5 flex items-center gap-3 hover:bg-[#202c33] transition-colors cursor-pointer bg-[#202c33]/50">
                <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={48} />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="font-semibold text-sm text-white truncate">{profile.displayName}</span>
                    <span className="text-[10px] text-[#00a884] font-medium">15:09</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#8696a0] truncate">
                    <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb] shrink-0" />
                    <span className="truncate">Valeu! Ajustei certinho no Profile Look...</span>
                  </div>
                </div>
              </div>

              {/* Dummy chat item */}
              <div className="p-3.5 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-white">
                  GR
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="font-semibold text-sm text-white">Grupo da Família</span>
                    <span className="text-[10px] text-[#8696a0]">14:20</span>
                  </div>
                  <div className="text-xs text-[#8696a0] truncate">Mãe: Bom domingo a todos! ❤️</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: FULL VIEWER */}
        {viewMode === 'viewer' && (
          <div className="p-6 flex flex-col items-center justify-center h-[520px] bg-black">
            <div className="text-center mb-6">
              <h3 className="font-bold text-base text-white">{profile.displayName}</h3>
              <p className="text-xs text-[#8696a0] mt-1">{profile.bio || 'Disponível'}</p>
            </div>

            <div className="p-1 rounded-full bg-slate-800 shadow-2xl">
              <AvatarRenderer imageSrc={imageSrc} adjustments={adjustments} size={220} />
            </div>

            <div className="mt-8 text-xs text-[#8696a0] text-center max-w-xs">
              Esta é a visualização quando alguém clica na sua foto no WhatsApp para vê-la em tamanho maior.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
