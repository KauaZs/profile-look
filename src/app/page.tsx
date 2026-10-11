'use client';

import { useState } from 'react';
import type { SocialPlatform, ImageAdjustments, UserProfileData } from '../types';
import { PRESET_AVATARS, DEFAULT_PROFILE, PLATFORM_SPECS } from '../constants/presets';
import { Header } from '../components/Header';
import { NetworkSelector } from '../components/NetworkSelector';
import { PhotoEditor } from '../components/PhotoEditor';
import { InstagramMockup } from '../components/mockups/InstagramMockup';
import { TwitterMockup } from '../components/mockups/TwitterMockup';
import { DiscordMockup } from '../components/mockups/DiscordMockup';
import { LinkedInMockup } from '../components/mockups/LinkedInMockup';
import { TikTokMockup } from '../components/mockups/TikTokMockup';
import { WhatsAppMockup } from '../components/mockups/WhatsAppMockup';
import { YouTubeMockup } from '../components/mockups/YouTubeMockup';
import { MatrixOverview } from '../components/mockups/MatrixOverview';
import { generateCroppedImage, downloadDataUrl } from '../utils/imageExport';
import { GitHubIcon } from '../components/icons/BrandIcons';

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string>(PRESET_AVATARS[0].url);
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatform>('instagram');
  const [adjustments, setAdjustments] = useState<ImageAdjustments>({
    zoom: 1,
    x: 0,
    y: 0,
    rotation: 0,
    flipHorizontal: false,
    backgroundColor: '#000000',
  });
  const [profile, setProfile] = useState<UserProfileData>(DEFAULT_PROFILE);
  const [isExporting, setIsExporting] = useState(false);

  const handleQuickDownload = async () => {
    try {
      setIsExporting(true);
      const dataUrl = await generateCroppedImage(imageSrc, adjustments, 800, false);
      downloadDataUrl(dataUrl, `profilelook-${selectedPlatform}.png`);
    } catch (err) {
      console.error('Erro ao baixar:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const currentSpec = selectedPlatform !== 'all' ? PLATFORM_SPECS[selectedPlatform] : null;

  return (
    <div className="min-h-screen bg-[#090a0c] text-zinc-100 flex flex-col font-sans">
      {/* Minimal Header */}
      <Header onQuickDownload={handleQuickDownload} isExporting={isExporting} />

      {/* Network Tabs */}
      <NetworkSelector
        selectedPlatform={selectedPlatform}
        onSelectPlatform={setSelectedPlatform}
      />

      {/* Main Studio Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Compact Controls */}
          <div className="lg:col-span-4">
            <PhotoEditor
              imageSrc={imageSrc}
              onImageChange={setImageSrc}
              adjustments={adjustments}
              onAdjustmentsChange={setAdjustments}
              profile={profile}
              onProfileChange={setProfile}
              currentPlatform={selectedPlatform}
            />
          </div>

          {/* Right Column: Clean Mockup Stage */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {/* Subtle Spec Tag */}
            {currentSpec && (
              <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-zinc-200">{currentSpec.name}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400">{currentSpec.description}</span>
                </div>
                <div className="font-mono text-[11px] text-zinc-500 hidden sm:block">
                  Recomendado: {currentSpec.recommendedSize}
                </div>
              </div>
            )}

            {/* Stage */}
            <div className="w-full bg-[#0e1013] border border-zinc-800/80 rounded-2xl p-4 sm:p-8 flex items-center justify-center min-h-[580px]">
              {selectedPlatform === 'all' && (
                <MatrixOverview
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  profile={profile}
                  onSelectPlatform={setSelectedPlatform}
                />
              )}

              {selectedPlatform === 'instagram' && (
                <InstagramMockup
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  profile={profile}
                />
              )}

              {selectedPlatform === 'twitter' && (
                <TwitterMockup
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  profile={profile}
                />
              )}

              {selectedPlatform === 'discord' && (
                <DiscordMockup
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  profile={profile}
                />
              )}

              {selectedPlatform === 'linkedin' && (
                <LinkedInMockup
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  profile={profile}
                  onProfileChange={setProfile}
                />
              )}

              {selectedPlatform === 'tiktok' && (
                <TikTokMockup
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  profile={profile}
                />
              )}

              {selectedPlatform === 'whatsapp' && (
                <WhatsAppMockup
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  profile={profile}
                />
              )}

              {selectedPlatform === 'youtube' && (
                <YouTubeMockup
                  imageSrc={imageSrc}
                  adjustments={adjustments}
                  profile={profile}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Clean, quiet footer */}
      <footer className="border-t border-zinc-900 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <p>profile look • preview do seu perfil</p>
          <a
            href="https://github.com/KauaZs/profile-look"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>KauaZs/profile-look</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
