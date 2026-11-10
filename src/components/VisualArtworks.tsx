import React from 'react';

export function AcademicArtwork() {
  return (
    <svg
      className="visual-artwork w-full h-full object-cover"
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Academic Milestone Photography Visual Artwork"
    >
      <defs>
        <linearGradient id="grad-academic-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="55%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#090d16" />
        </linearGradient>
        <radialGradient id="grad-flare" cx="78%" cy="22%" r="55%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.42" />
          <stop offset="45%" stop-color="#38bdf8" stop-opacity="0.14" />
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="grad-sash" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.4" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#grad-academic-bg)" />
      <rect width="400" height="500" fill="url(#grad-flare)" />
      {/* Bokeh circles */}
      <circle cx="310" cy="110" r="46" fill="#fbbf24" fillOpacity="0.12" />
      <circle cx="275" cy="85" r="26" fill="#fde68a" fillOpacity="0.15" />
      <circle cx="85" cy="145" r="38" fill="#38bdf8" fillOpacity="0.09" />
      <circle cx="65" cy="310" r="52" fill="#38bdf8" fillOpacity="0.06" />
      <circle cx="345" cy="275" r="34" fill="#fbbf24" fillOpacity="0.08" />
      {/* Background Architectural Columns */}
      <rect x="42" y="60" width="18" height="390" fill="#ffffff" fillOpacity="0.03" />
      <rect x="340" y="60" width="18" height="390" fill="#ffffff" fillOpacity="0.04" />
      {/* Graduate silhouette */}
      <polygon points="200,132 132,158 200,182 268,158" fill="#18181b" stroke="#fbbf24" strokeWidth="1.2" strokeOpacity="0.6" />
      <rect x="166" y="172" width="68" height="18" rx="4" fill="#1e293b" />
      <path d="M200 156 Q242 165 248 205" stroke="#fbbf24" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="248" cy="207" r="3.5" fill="#fbbf24" />
      <circle cx="200" cy="214" r="28" fill="#1e293b" stroke="#fde68a" strokeWidth="1.2" strokeOpacity="0.45" />
      <path d="M105 460 C112 315 148 265 200 265 C252 265 288 315 295 460 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.35" />
      <path d="M158 272 L200 375 L242 272 L222 267 L200 330 L178 267 Z" fill="url(#grad-sash)" />
      <rect x="172" y="368" width="68" height="16" rx="8" transform="rotate(-14 206 376)" fill="#f8fafc" fillOpacity="0.85" />
      <rect x="198" y="365" width="12" height="16" transform="rotate(-14 204 373)" fill="#ef4444" fillOpacity="0.85" />
      {/* Focus reticle */}
      <path d="M155 175 H145 V185 M245 175 H255 V185 M155 255 H145 V245 M245 255 H255 V245" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
      <circle cx="200" cy="215" r="2" fill="#38bdf8" fillOpacity="0.8" />
    </svg>
  );
}

export function AstroArtwork() {
  return (
    <svg
      className="visual-artwork w-full h-full object-cover"
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Low-Light and Astrophotography Visual Artwork"
    >
      <defs>
        <linearGradient id="grad-astro-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#030712" />
          <stop offset="55%" stop-color="#0c192c" />
          <stop offset="85%" stop-color="#0f2942" />
          <stop offset="100%" stop-color="#090d16" />
        </linearGradient>
        <radialGradient id="grad-milkyway" cx="55%" cy="38%" r="60%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.32" />
          <stop offset="45%" stop-color="#818cf8" stop-opacity="0.14" />
          <stop offset="100%" stop-color="#030712" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#grad-astro-sky)" />
      <ellipse cx="210" cy="195" rx="220" ry="75" transform="rotate(-32 210 195)" fill="url(#grad-milkyway)" />
      <g fill="#f8fafc">
        <circle cx="48" cy="58" r="1.2" opacity="0.9" />
        <circle cx="95" cy="42" r="0.8" opacity="0.6" />
        <circle cx="142" cy="78" r="1.5" opacity="0.95" />
        <circle cx="215" cy="52" r="1.1" opacity="0.75" />
        <circle cx="284" cy="66" r="1.6" opacity="0.9" />
        <circle cx="348" cy="44" r="1.0" opacity="0.7" />
        <circle cx="318" cy="118" r="1.4" opacity="0.85" />
        <circle cx="255" cy="142" r="1.8" fill="#bae6fd" opacity="0.95" />
        <circle cx="188" cy="168" r="1.2" opacity="0.85" />
        <circle cx="122" cy="205" r="1.6" fill="#7dd3fc" opacity="0.9" />
        <circle cx="76" cy="248" r="1.1" opacity="0.7" />
        <circle cx="235" cy="195" r="1.3" opacity="0.8" />
        <circle cx="164" cy="122" r="1.0" opacity="0.65" />
        <circle cx="295" cy="185" r="0.9" opacity="0.6" />
        <circle cx="352" cy="212" r="1.3" opacity="0.75" />
      </g>
      <polyline points="122,205 188,168 255,142 318,118 284,66" fill="none" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.45" />
      <path d="M0 385 L58 348 L115 366 L185 322 L258 356 L325 332 L400 362 L400 500 L0 500 Z" fill="#070b12" />
      <path d="M0 412 L92 382 L175 402 L268 370 L345 395 L400 380 L400 500 L0 500 Z" fill="#04070c" />
      <circle cx="185" cy="308" r="4" fill="#38bdf8" fillOpacity="0.9" />
      <path d="M185 312 L178 324 M185 312 L192 324 M185 312 L185 324" stroke="#94a3b8" strokeWidth="1.3" />
    </svg>
  );
}

export function GradedArtwork() {
  return (
    <svg
      className="visual-artwork w-full h-full object-cover"
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="N-Log Graded Still Split Visual Artwork"
    >
      <defs>
        <linearGradient id="grad-cinema-graded" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06283d" />
          <stop offset="50%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#451a03" />
        </linearGradient>
        <linearGradient id="grad-nlog-flat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3f4652" />
          <stop offset="100%" stop-color="#272b33" />
        </linearGradient>
        <clipPath id="clip-left-log">
          <rect x="0" y="0" width="165" height="500" />
        </clipPath>
      </defs>
      <rect width="400" height="500" fill="url(#grad-cinema-graded)" />
      <circle cx="265" cy="195" r="95" fill="#f59e0b" fillOpacity="0.22" />
      <circle cx="160" cy="240" r="110" fill="#06b6d4" fillOpacity="0.14" />
      <g clipPath="url(#clip-left-log)">
        <rect width="400" height="500" fill="url(#grad-nlog-flat)" />
        <circle cx="265" cy="195" r="95" fill="#a1a1aa" fillOpacity="0.2" />
      </g>
      <rect x="0" y="0" width="400" height="54" fill="#05070b" />
      <rect x="0" y="446" width="400" height="54" fill="#05070b" />
      <polygon points="260,54 120,446 360,446" fill="#fbbf24" fillOpacity="0.07" />
      <circle cx="220" cy="225" r="34" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.2" strokeOpacity="0.5" />
      <path d="M155 446 C162 325 186 276 220 276 C254 276 278 325 285 446 Z" fill="#090d16" />
      <line x1="165" y1="54" x2="165" y2="446" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
      <rect x="18" y="68" width="76" height="18" rx="3" fill="#090d16" fillOpacity="0.75" />
      <text x="26" y="80" fill="#a1a1aa" fontFamily="monospace" fontSize="9">N-LOG FLAT</text>
      <rect x="282" y="68" width="98" height="18" rx="3" fill="#090d16" fillOpacity="0.75" />
      <text x="290" y="80" fill="#38bdf8" fontFamily="monospace" fontSize="9">GRADED REC.709</text>
      <path d="M24 415 Q85 375 155 405 T285 365 T375 390" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.65" />
      <path d="M24 425 Q95 395 165 415 T295 380 T375 402" fill="none" stroke="#f59e0b" strokeWidth="1.1" strokeOpacity="0.55" />
    </svg>
  );
}
