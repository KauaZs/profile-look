import type { PresetAvatar, UserProfileData } from '../types';

export const PRESET_AVATARS: PresetAvatar[] = [
  {
    id: 'preset-1',
    name: 'Retrato Casual',
    category: 'Pessoa',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'preset-2',
    name: 'Estilo Urbano',
    category: 'Pessoa',
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'preset-3',
    name: 'Profissional / Tech',
    category: 'Profissional',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'preset-4',
    name: 'Ilustração 3D / Gamer',
    category: 'Avatar/3D',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'preset-5',
    name: 'Pet / Gatinho',
    category: 'Animais',
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
  },
];

export const DEFAULT_PROFILE: UserProfileData = {
  displayName: 'Kauã Victor',
  username: 'kauazs',
  bio: 'Criando coisas legais na internet ✨',
  location: 'São Paulo, Brasil',
  website: 'google.com',
  isVerified: true,
  openToWork: false,
  jobTitle: 'Product Designer & Frontend Engineer',
  company: 'Studio Digital',
  discordStatus: 'online',
  discordAboutMe: 'Explorando novas ideias de design e construindo aplicações que facilitam a vida. Café & Código ☕',
  customBannerColor: '#5865F2',
  customBannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  followersCount: '4.8k',
  followingCount: '342',
  postsCount: '87',
  likesCount: '42.1k',
};

export const PLATFORM_SPECS = {
  instagram: {
    name: 'Instagram',
    color: '#E1306C',
    recommendedSize: '320 x 320 px',
    shape: 'Círculo perfeito',
    description: 'Corte circular rígido. Atenção a cortes no queixo e topo do cabelo.',
  },
  twitter: {
    name: 'X (Twitter)',
    color: '#000000',
    recommendedSize: '400 x 400 px',
    shape: 'Círculo sobreposto no banner',
    description: 'Sobrepõe 50% no banner. Borda de 4px na cor de fundo do tema.',
  },
  discord: {
    name: 'Discord',
    color: '#5865F2',
    recommendedSize: '128 x 128 px (mínimo)',
    shape: 'Círculo com indicador de status',
    description: 'O canto inferior direito é parcialmente coberto pelo status dot.',
  },
  linkedin: {
    name: 'LinkedIn',
    color: '#0A66C2',
    recommendedSize: '400 x 400 px',
    shape: 'Círculo com moldura opcional',
    description: 'Foto corporativa com possibilidade de moldura #OpenToWork.',
  },
  tiktok: {
    name: 'TikTok',
    color: '#FE2C55',
    recommendedSize: '200 x 200 px',
    shape: 'Círculo central',
    description: 'Fica em destaque total no centro da tela mobile.',
  },
  whatsapp: {
    name: 'WhatsApp',
    color: '#25D366',
    recommendedSize: '500 x 500 px',
    shape: 'Círculo e miniaturas em lista',
    description: 'Círculo grande no perfil e pequenos ícones de 40px no chat.',
  },
  youtube: {
    name: 'YouTube',
    color: '#FF0000',
    recommendedSize: '800 x 800 px',
    shape: 'Círculo no canal e comentários',
    description: 'Aparece sob o banner do canal e em miniaturas nos comentários de vídeos.',
  },
};
