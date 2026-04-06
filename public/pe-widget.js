/**
 * PE Voice Widget — Assistant vocal IA de Paul-Emile
 * Widget autonome utilisant Gemini Live (WebSocket temps réel)
 * Usage : <script src="pe-widget.js"></script>
 */
(function () {
  "use strict";

  // ============ CONFIG ============
  const API_KEY = "AIzaSyB9htjN-eUD9EBxVeGvK5eBQZVomf4U3H4";
  const MODEL = "gemini-3.1-flash-live-preview";
  const VOICE = "Puck";

  // ============ SYSTEM INSTRUCTION ============
  const SYSTEM_INSTRUCTION = `Tu es l'assistant vocal IA de Paul-Emile, freelance AI Creative Strategist basé en France.

Tu parles toujours en français. Tu tutoies ton interlocuteur de manière amicale et professionnelle.

TON RÔLE :
Tu es là pour accueillir les visiteurs du portfolio de Paul-Emile, répondre à leurs questions sur ses services, et les orienter vers le formulaire de contact s'ils sont intéressés.

QUI EST PAUL-EMILE :
Paul-Emile est un freelance spécialisé dans l'IA appliquée au business. Il propose 4 types de services :

1. CRÉATION DE SITES WEB — Landing pages, sites vitrines, sites e-commerce. Design moderne, responsive, optimisés pour la conversion.

2. PRODUCTION VIDÉO UGC PAR IA — Vidéos publicitaires hyper-réalistes générées par IA pour Meta Ads et réseaux sociaux. Il utilise Sora, Kling, Seedance, Veo 3 pour la vidéo, ElevenLabs pour les voix off, et CapCut pour le montage.

3. AUTOMATISATION IA — Création d'agents IA vocaux (comme toi !), workflows automatisés avec n8n, OpenClaw, Paperclip, intégrations API OpenAI et Anthropic pour PME. L'objectif : éliminer les tâches répétitives et gagner du temps.

4. SAAS & MICRO-SAAS — Conception et développement de produits SaaS et micro-SaaS propulsés par l'IA. De l'idée au produit prêt à scaler.

PROOF POINT PRINCIPAL :
Une campagne Meta Ads avec 19% de CTR (taux de clic) à seulement 0.08€ de CPC (coût par clic). C'est exceptionnel — la moyenne du marché est autour de 1-2% de CTR.

COMMENT TU DOIS RÉPONDRE :
- Sois concis : 2-3 phrases maximum par réponse. C'est une conversation vocale, pas un monologue.
- Sois chaleureux et enthousiaste, mais professionnel.
- Si quelqu'un demande un devis ou veut travailler avec Paul-Emile, oriente-le vers le formulaire de contact en bas de la page ou vers l'email contact@paul-emile.com.
- Tu peux parler des outils et technologies que Paul-Emile maîtrise : React, Next.js, Tailwind, Node.js, les APIs OpenAI et Claude, Sora, Kling, ElevenLabs, n8n, etc.
- Si on te pose des questions hors sujet (politique, sport, etc.), ramène poliment la conversation vers les services de Paul-Emile.

EXEMPLES DE QUESTIONS QUE TU PEUX RECEVOIR :
- "C'est quoi les services proposés ?" → Présente les 4 piliers.
- "Combien ça coûte un site ?" → "Ça dépend du projet ! Landing page, vitrine, e-commerce... Le mieux c'est de décrire ton besoin dans le formulaire de contact et Paul-Emile te fera un devis personnalisé."
- "C'est quoi l'UGC par IA ?" → Explique le concept de vidéos publicitaires générées par IA.
- "Vous faites des agents vocaux ?" → "Exactement, tu es en train de parler à l'un d'eux ! Paul-Emile crée des agents IA vocaux comme moi pour automatiser l'accueil client, la prise de RDV, le support..."

PHRASE D'OUVERTURE :
"Salut ! Je suis l'assistant IA de Paul-Emile. Tu veux en savoir plus sur ses services ? Sites web, vidéos UGC par IA, automatisations, ou SaaS — je suis là pour répondre à toutes tes questions !"`;

  // ============ STATE ============
  const state = {
    ws: null,
    audioStreamer: null,
    audioPlayer: null,
    isConnected: false,
    isRecording: false,
  };

  // ============ INJECT CSS ============
  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      #pe-widget-btn {
        position: fixed;
        bottom: 28px;
        right: 28px;
        z-index: 99999;
        display: flex;
        align-items: center;
        gap: 10px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: #fff;
        border: none;
        border-radius: 50px;
        padding: 16px 28px;
        font-size: 1rem;
        font-weight: 600;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        cursor: pointer;
        box-shadow: 0 4px 24px rgba(99,102,241,0.4);
        transition: all 0.3s ease;
        animation: pe-pulse 2.5s infinite;
      }
      #pe-widget-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 32px rgba(99,102,241,0.6);
      }
      #pe-widget-btn.pe-hidden { display: none; }
      @keyframes pe-pulse {
        0%,100% { box-shadow: 0 4px 24px rgba(99,102,241,0.4); }
        50% { box-shadow: 0 4px 40px rgba(99,102,241,0.7), 0 0 60px rgba(99,102,241,0.2); }
      }

      #pe-overlay {
        position: fixed;
        bottom: 100px;
        right: 28px;
        width: 340px;
        background: #111;
        border: 1px solid #2d2457;
        border-radius: 20px;
        box-shadow: 0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.1);
        z-index: 100000;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        opacity: 0;
        pointer-events: none;
        transform: translateY(16px) scale(0.97);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      #pe-overlay.pe-active {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0) scale(1);
      }

      .pe-box-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 16px;
        border-bottom: 1px solid #1a1a1a;
      }
      .pe-orb-wrap {
        position: relative;
        width: 40px; height: 40px;
        flex-shrink: 0;
      }
      .pe-orb {
        width: 40px; height: 40px;
        border-radius: 50%;
        background: radial-gradient(circle at 40% 40%, #1a1a3a, #0a0a1a);
        border: 2px solid #333;
        transition: all 0.4s ease;
      }
      .pe-orb.connecting {
        border-color: #ffc107;
        animation: pe-orb-pulse 1.5s ease-in-out infinite;
      }
      .pe-orb.listening {
        border-color: #8b5cf6;
        box-shadow: 0 0 12px rgba(139,92,246,0.5);
        animation: pe-orb-breathe 2.5s ease-in-out infinite;
      }
      .pe-orb.speaking {
        border-color: #6366f1;
        box-shadow: 0 0 18px rgba(99,102,241,0.7);
        animation: pe-orb-speak 0.5s ease-in-out infinite;
      }
      @keyframes pe-orb-pulse {
        0%,100% { opacity: 0.6; transform: scale(1); }
        50%     { opacity: 1;   transform: scale(1.08); }
      }
      @keyframes pe-orb-breathe {
        0%,100% { transform: scale(1); }
        50%     { transform: scale(1.06); }
      }
      @keyframes pe-orb-speak {
        0%,100% { transform: scale(1); }
        50%     { transform: scale(1.12); }
      }

      .pe-box-title { flex: 1; }
      .pe-label {
        font-size: 0.85rem;
        font-weight: 700;
        color: #8b5cf6;
        letter-spacing: 2px;
        display: block;
      }
      .pe-status {
        font-size: 0.75rem;
        color: #555;
        margin-top: 1px;
        display: block;
        min-height: 14px;
      }
      .pe-close-btn {
        background: none;
        border: none;
        color: #555;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 4px;
        line-height: 1;
        transition: color 0.2s;
      }
      .pe-close-btn:hover { color: #e53935; }

      .pe-transcripts {
        padding: 14px 16px;
        min-height: 100px;
        max-height: 220px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .pe-transcripts::-webkit-scrollbar { width: 4px; }
      .pe-transcripts::-webkit-scrollbar-track { background: transparent; }
      .pe-transcripts::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }

      .pe-msg {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .pe-msg-label {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #444;
      }
      .pe-msg-text {
        font-size: 0.88rem;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 12px;
        max-width: 90%;
      }
      .pe-msg.you .pe-msg-text {
        background: #1a1a1a;
        color: #ccc;
        border-radius: 12px 12px 4px 12px;
        align-self: flex-end;
      }
      .pe-msg.you { align-items: flex-end; }
      .pe-msg.bot .pe-msg-text {
        background: rgba(99,102,241,0.08);
        color: #a78bfa;
        border: 1px solid rgba(99,102,241,0.15);
        border-radius: 12px 12px 12px 4px;
        align-self: flex-start;
      }

      .pe-box-footer {
        padding: 12px 16px;
        border-top: 1px solid #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }
      .pe-mic-hint {
        font-size: 0.75rem;
        color: #444;
      }
      .pe-hangup {
        background: #e53935;
        color: #fff;
        border: none;
        border-radius: 50px;
        padding: 8px 18px;
        font-size: 0.85rem;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s;
      }
      .pe-hangup:hover {
        background: #c62828;
        box-shadow: 0 2px 12px rgba(229,57,53,0.4);
      }
      .pe-phone-down {
        display: inline-block;
        transform: rotate(135deg);
      }

      @media (max-width: 600px) {
        #pe-widget-btn { bottom: 20px; right: 16px; padding: 13px 20px; font-size: 0.9rem; }
        #pe-overlay { right: 10px; left: 10px; width: auto; bottom: 90px; }
      }
    `;
    document.head.appendChild(style);
  }

  // ============ INJECT HTML ============
  function injectHTML() {
    const btn = document.createElement("button");
    btn.id = "pe-widget-btn";
    btn.innerHTML = '<span style="font-size:1.3rem">🎙</span> Parler à l\'assistant';
    document.body.appendChild(btn);

    const overlay = document.createElement("div");
    overlay.id = "pe-overlay";
    overlay.innerHTML = `
      <div class="pe-box-header">
        <div class="pe-orb-wrap">
          <div class="pe-orb" id="pe-orb"></div>
        </div>
        <div class="pe-box-title">
          <span class="pe-label">PAUL-EMILE IA</span>
          <span class="pe-status" id="pe-status">Connexion en cours...</span>
        </div>
        <button class="pe-close-btn" id="pe-hangup">&times;</button>
      </div>
      <div class="pe-transcripts" id="pe-transcripts"></div>
      <div class="pe-box-footer">
        <span class="pe-mic-hint" id="pe-mic-hint">🎙 Micro actif</span>
        <button class="pe-hangup" id="pe-hangup2">
          <span class="pe-phone-down">📞</span> Raccrocher
        </button>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  // ============ DOM REFS ============
  let $btn, $overlay, $orb, $status, $transcripts, $hangup, $hangup2, $micHint;
  let currentBotMsg = null;

  function initRefs() {
    $btn         = document.getElementById("pe-widget-btn");
    $overlay     = document.getElementById("pe-overlay");
    $orb         = document.getElementById("pe-orb");
    $status      = document.getElementById("pe-status");
    $transcripts = document.getElementById("pe-transcripts");
    $hangup      = document.getElementById("pe-hangup");
    $hangup2     = document.getElementById("pe-hangup2");
    $micHint     = document.getElementById("pe-mic-hint");
  }

  function addMessage(role, text, replace = false) {
    if (role === "bot") {
      if (replace && currentBotMsg) {
        currentBotMsg.querySelector(".pe-msg-text").textContent = text;
      } else {
        const msg = document.createElement("div");
        msg.className = "pe-msg bot";
        msg.innerHTML = '<span class="pe-msg-label">Assistant</span><span class="pe-msg-text">' + escapeHtml(text) + '</span>';
        $transcripts.appendChild(msg);
        currentBotMsg = msg;
      }
    } else {
      currentBotMsg = null;
      const msg = document.createElement("div");
      msg.className = "pe-msg you";
      msg.innerHTML = '<span class="pe-msg-label">Vous</span><span class="pe-msg-text">' + escapeHtml(text) + '</span>';
      $transcripts.appendChild(msg);
    }
    $transcripts.scrollTop = $transcripts.scrollHeight;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ============ AUDIO STREAMER (Micro → PCM16 16kHz → base64) ============
  class AudioStreamer {
    constructor(onData) {
      this.onData = onData;
      this.ctx = null; this.stream = null;
      this.source = null; this.proc = null;
      this.active = false;
    }

    async start() {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: { sampleRate: 16000, channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });
      this.ctx = new AudioContext({ sampleRate: 16000 });
      this.source = this.ctx.createMediaStreamSource(this.stream);
      this.proc = this.ctx.createScriptProcessor(4096, 1, 1);
      this.proc.onaudioprocess = (e) => {
        if (!this.active) return;
        const f32 = e.inputBuffer.getChannelData(0);
        const i16 = new Int16Array(f32.length);
        for (let i = 0; i < f32.length; i++) {
          const s = Math.max(-1, Math.min(1, f32[i]));
          i16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
        }
        const bytes = new Uint8Array(i16.buffer);
        let bin = "";
        for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
        this.onData(btoa(bin));
      };
      this.source.connect(this.proc);
      this.proc.connect(this.ctx.destination);
      this.active = true;
    }

    stop() {
      this.active = false;
      if (this.proc)   { this.proc.disconnect();   this.proc = null; }
      if (this.source) { this.source.disconnect();  this.source = null; }
      if (this.stream) { this.stream.getTracks().forEach((t) => t.stop()); this.stream = null; }
      if (this.ctx)    { this.ctx.close();          this.ctx = null; }
    }
  }

  // ============ AUDIO PLAYER (base64 PCM16 24kHz → speakers) ============
  class AudioPlayer {
    constructor() {
      this.ctx = null; this.gain = null;
      this.nextStartTime = 0;
      this.sources = []; this.playing = false;
    }

    init() {
      if (this.ctx) return;
      this.ctx = new AudioContext({ sampleRate: 24000 });
      this.gain = this.ctx.createGain();
      this.gain.gain.value = 1.0;
      this.gain.connect(this.ctx.destination);
      this.nextStartTime = 0;
    }

    add(b64) {
      this.init();
      if (this.ctx.state === "suspended") this.ctx.resume();
      const bin = atob(b64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const i16 = new Int16Array(bytes.buffer);
      const f32 = new Float32Array(i16.length);
      for (let i = 0; i < i16.length; i++) f32[i] = i16[i] / 32768;
      const buf = this.ctx.createBuffer(1, f32.length, 24000);
      buf.getChannelData(0).set(f32);
      const src = this.ctx.createBufferSource();
      src.buffer = buf;
      src.connect(this.gain);
      const now = this.ctx.currentTime;
      const startAt = Math.max(now, this.nextStartTime);
      src.start(startAt);
      this.nextStartTime = startAt + buf.duration;
      this.sources.push(src);
      src.onended = () => { this.sources = this.sources.filter((s) => s !== src); };
      this.playing = true;
    }

    interrupt() {
      for (const src of this.sources) { try { src.stop(); } catch(e) { /* ignore */ } }
      this.sources = []; this.nextStartTime = 0; this.playing = false;
    }
  }

  // ============ GEMINI WEBSOCKET ============
  function connectGemini(token) {
    const url = "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent?key=" + token;
    const ws = new WebSocket(url);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        setup: {
          model: "models/" + MODEL,
          generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICE } } },
          },
          systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        },
      }));
    };

    ws.onmessage = async (event) => {
      let data;
      if (event.data instanceof Blob) {
        try { data = JSON.parse(await event.data.text()); } catch(e) { return; }
      } else {
        try { data = JSON.parse(event.data); } catch(e) { return; }
      }

      if (data.setupComplete) {
        state.isConnected = true;
        $orb.className = "pe-orb speaking";
        $status.textContent = "L'assistant parle...";
        $micHint.textContent = "🎙 Micro actif";
        ws.send(JSON.stringify({
          realtimeInput: { text: "Présente-toi avec ta phrase d'accroche." }
        }));
        startMic();
        return;
      }

      const sc = data.serverContent;
      if (!sc) return;

      if (sc.interrupted) {
        state.audioPlayer.interrupt();
        $orb.className = "pe-orb listening";
        $status.textContent = "L'assistant vous écoute...";
      }

      if (sc.modelTurn && sc.modelTurn.parts) {
        for (const p of sc.modelTurn.parts) {
          if (p.inlineData) {
            $orb.className = "pe-orb speaking";
            $status.textContent = "L'assistant parle...";
            state.audioPlayer.add(p.inlineData.data);
          }
        }
      }

      if (sc.inputTranscription && sc.inputTranscription.text) {
        addMessage("you", sc.inputTranscription.text);
      }
      if (sc.outputTranscription && sc.outputTranscription.text) {
        const prev = currentBotMsg ? currentBotMsg.querySelector(".pe-msg-text").textContent : "";
        addMessage("bot", prev + sc.outputTranscription.text, !!currentBotMsg);
      }

      if (sc.turnComplete) {
        $orb.className = "pe-orb listening";
        $status.textContent = "L'assistant vous écoute...";
        currentBotMsg = null;
      }
    };

    ws.onerror = (err) => {
      console.error("PE Widget WS error:", err);
      $status.textContent = "Erreur de connexion";
    };

    ws.onclose = (event) => {
      console.log("PE Widget WS closed:", event.code, event.reason);
      if (state.isConnected) disconnect();
    };

    return ws;
  }

  // ============ MIC ============
  async function startMic() {
    state.audioStreamer = new AudioStreamer((b64) => {
      if (state.ws && state.ws.readyState === WebSocket.OPEN) {
        state.ws.send(JSON.stringify({
          realtimeInput: { audio: { data: b64, mimeType: "audio/pcm" } },
        }));
      }
    });
    await state.audioStreamer.start();
    state.isRecording = true;
  }

  // ============ CONNECT / DISCONNECT ============
  async function connect() {
    try {
      $overlay.classList.add("pe-active");
      $btn.classList.add("pe-hidden");
      $orb.className = "pe-orb connecting";
      $status.textContent = "Connexion en cours...";
      state.audioPlayer = new AudioPlayer();
      state.audioPlayer.init();
      state.ws = connectGemini(API_KEY);
    } catch (err) {
      console.error("PE Widget connect error:", err);
      $status.textContent = "Erreur : " + err.message;
      setTimeout(disconnect, 3000);
    }
  }

  function disconnect() {
    if (state.audioStreamer) { state.audioStreamer.stop(); state.audioStreamer = null; }
    if (state.ws) {
      try { state.ws.send(JSON.stringify({ realtimeInput: { audioStreamEnd: true } })); } catch(e) { /* ignore */ }
      state.ws.close();
      state.ws = null;
    }
    if (state.audioPlayer) { state.audioPlayer.interrupt(); state.audioPlayer = null; }
    state.isConnected = false;
    state.isRecording = false;
    $overlay.classList.remove("pe-active");
    $btn.classList.remove("pe-hidden");
    $orb.className = "pe-orb";
    $status.textContent = "";
    $transcripts.innerHTML = "";
    currentBotMsg = null;
  }

  // ============ INIT ============
  function init() {
    injectStyles();
    injectHTML();
    initRefs();
    $btn.addEventListener("click", connect);
    $hangup.addEventListener("click", disconnect);
    $hangup2.addEventListener("click", disconnect);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
