# Diário do Motorista: como publicar e instalar

O app é uma pasta com 9 arquivos. Ele precisa ficar num endereço **https** para poder ser instalado no celular. O jeito gratuito mais simples é o **GitHub Pages**: você faz isso uma vez só, em uns 10 minutos.

## Parte 1: publicar (você, uma vez, no computador)

1. Crie uma conta grátis em **github.com** (se ainda não tiver).
2. No canto superior direito, clique em **+** → **New repository**.
   - Repository name: `diario-motorista`
   - Marque **Public**
   - Clique em **Create repository**.
3. Na página que abrir, clique no link **uploading an existing file**.
4. Descompacte o `.zip` e **arraste os arquivos** (não a pasta) para a área de envio:
   `index.html`, `manifest.webmanifest`, `sw.js`, `icone-192.png`, `icone-512.png`, `icone-maskable-512.png`, `apple-touch-icon.png`, `favicon.png` (este guia é opcional).
   Clique em **Commit changes**.
5. Vá em **Settings** → **Pages** (menu da esquerda).
   Em *Build and deployment* → *Source*: **Deploy from a branch** · Branch: **main** · pasta **/ (root)** → **Save**.
6. Espere de 1 a 2 minutos e recarregue a página. Vai aparecer o endereço:
   **`https://SEU-USUARIO.github.io/diario-motorista/`**
   Abra para conferir. Esse é o link que você manda para o motorista.

> O repositório fica público, mas só o **código** fica lá. Os lançamentos do motorista **nunca** vão para o GitHub: ficam só no celular dele.

## Parte 2: instalar (o motorista, no celular)

Mande o link pelo WhatsApp e peça para ele **abrir no navegador**, não dentro do WhatsApp (toque nos ⋮ → "Abrir no navegador").

**Android (Chrome):** em alguns segundos aparece o aviso **"Instalar app"**. Se não aparecer: ⋮ → **Instalar app** (ou "Adicionar à tela inicial").

**iPhone:** abra no **Safari** → toque em **Compartilhar** (o quadrado com a seta) → **Adicionar à Tela de Início**.

Depois disso, o ícone **"Diário"** fica na tela inicial e o app abre em tela cheia, mesmo sem internet.

## Parte 3: backup (o motorista, uma vez por semana)

**Ajustes → Salvar backup.** No Android, abre a tela de compartilhar: é só mandar o arquivo para ele mesmo no WhatsApp ou salvar no Google Drive.
Para recuperar num celular novo: instalar o app → **Ajustes → Restaurar backup** → escolher o arquivo.
O app avisa no topo quando faz 7 dias ou mais sem backup.

## Para publicar uma versão nova do app

1. No repositório: **Add file → Upload files**, envie o `index.html` novo → **Commit changes**.
2. No `sw.js`, troque `VERSAO` (ex.: `diario-v1.0.0` → `diario-v1.1.0`) e envie também.
3. Na próxima vez que o motorista abrir o app com internet, ele recebe a versão nova. **Os dados não são afetados.**
