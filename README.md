# Profile Look 🎯

> **Simule e ajuste sua nova foto de perfil na interface exata de cada rede social antes de publicar.**

Sabe quando você quer trocar a foto de perfil nas redes sociais e a adaptação automática simplesmente corta o topo da sua cabeça, seu queixo ou o detalhe de um logotipo? Aí você tem que desfazer e voltar para a foto antiga.

O **Profile Look** resolve esse problema simulando a UI exata de cada plataforma em tempo real, permitindo ajustar zoom, posição, rotação e espelhamento com precisão cirúrgica antes de fazer o upload.

---

## ✨ Funcionalidades

- **📱 Interfaces Fiéis em Tempo Real**:
  - **Instagram**: Perfil com anel de stories degradê, tela de Stories em destaque e post no Feed.
  - **X (Twitter)**: Avatar sobreposto ao banner com borda de 4px, posts no feed e temas (*Lights Out*, *Dim* e *Claro*).
  - **Discord**: Card de perfil popout com indicador de status (*Online*, *Ausente*, *Ocupado*, *Invisível* cobrindo o canto) e visualização de mensagens no canal de texto.
  - **LinkedIn**: Foto corporativa sobreposta com toggle dinâmico da moldura oficial **#OpenToWork** e post de feed.
  - **TikTok**: Perfil vertical mobile com foto centralizada, contador de seguidores/curtidas e grade de vídeos.
  - **WhatsApp**: Cabeçalho de conversa aberta com status *online*, lista de conversas e foto em destaque.
  - **YouTube**: Avatar no canal sob o banner e miniatura em comentários de vídeos.
  - **Multi-View (Todas as Redes)**: Visualização simultânea em 6 redes para garantir que o mesmo corte funcione em todas.

- **🎛️ Ajustes de Enquadramento**:
  - **Arrastar e Posicionar**: Ajuste livre nos eixos X e Y.
  - **Zoom Suave**: Controle fino de 0.5x até 3.0x (ou use a roda do mouse).
  - **Rotação & Espelhamento**: Rotação livre de -180° a +180°, atalho de giro em 90° e inversão horizontal.
  - **Cor de Fundo**: Paleta para preenchimento de imagens com transparência (PNGs/vetores).

- **⚡ Entrada Rápida de Imagens**:
  - Cole qualquer imagem instantaneamente com <kbd>Ctrl+V</kbd>.
  - Arraste e solte arquivos direto no navegador.
  - Presets de teste inclusos para testes imediatos.

- **🔒 100% Privado e Seguro**:
  - Nenhum arquivo é enviado para servidores externos.
  - Todo o processamento, recorte e renderização são executados via HTML5 Canvas localmente na sua máquina.

- **📥 Exportação com 1 Clique**:
  - Baixe a imagem final já recortada na resolução ideal para a rede escolhida.

---

## 🛠️ Tecnologias

- **[Next.js (App Router)](https://nextjs.org/)**
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Lucide Icons](https://lucide.dev/)**

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn/pnpm

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/KauaZs/profile-look.git
   cd profile-look
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Acesse no seu navegador:
   ```
   http://localhost:3000
   ```

5. **Para gerar e rodar a build de produção:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css       # Estilos globais e Tailwind directives
│   ├── layout.tsx        # Root layout com SEO metadata e fontes
│   └── page.tsx          # Página principal do Profile Look
├── components/
│   ├── icons/            # SVGs das marcas (Instagram, X, Discord, GitHub, etc.)
│   ├── mockups/          # UIs pixel-perfect de cada rede social
│   │   ├── DiscordMockup.tsx
│   │   ├── InstagramMockup.tsx
│   │   ├── LinkedInMockup.tsx
│   │   ├── MatrixOverview.tsx
│   │   ├── TikTokMockup.tsx
│   │   ├── TwitterMockup.tsx
│   │   ├── WhatsAppMockup.tsx
│   │   └── YouTubeMockup.tsx
│   ├── AvatarRenderer.tsx # Renderizador de imagem transformada (zoom, pan, rotação)
│   ├── Header.tsx        # Barra de navegação e exportação
│   ├── NetworkSelector.tsx # Seletor de abas das redes
│   └── PhotoEditor.tsx   # Painel de ajustes de foto e perfil
├── constants/
│   └── presets.ts        # Presets de fotos e especificações das plataformas
├── types/
│   └── index.ts          # Definições de tipos TypeScript
└── utils/
    └── imageExport.ts    # Funções de renderização Canvas e download
```

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

Desenvolvido por **[Kauã](https://github.com/KauaZs)** • Repositório: [KauaZs/profile-look](https://github.com/KauaZs/profile-look)
