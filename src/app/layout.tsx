import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Profile Look • Simulador de Foto de Perfil em Redes Sociais',
  description: 'Simule o enquadramento exato da sua nova foto de perfil no Instagram, Twitter/X, Discord, LinkedIn, TikTok, WhatsApp e YouTube antes de publicar.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='10' r='4' fill='black'/><path d='M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6' fill='black'/></svg>",
  },
  openGraph: {
    title: 'Profile Look • Simulador de Foto de Perfil em Redes Sociais',
    description: 'Simule o enquadramento exato da sua nova foto de perfil no Instagram, Twitter/X, Discord, LinkedIn, TikTok, WhatsApp e YouTube antes de publicar.',
    url: 'https://github.com/KauaZs/profile-look',
    siteName: 'Profile Look',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-[#090a0c] text-zinc-100 antialiased selection:bg-zinc-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
