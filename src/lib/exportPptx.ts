'use client';

import {
  PROFILE_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
  TIMELINE_DATA,
} from '@/data/portfolioData';

export async function exportPortfolioPptx() {
  // Dynamically import pptxgenjs so it runs cleanly on the client
  const pptxgen = (await import('pptxgenjs')).default;
  const pres = new pptxgen();

  // Set presentation properties
  pres.title = `${PROFILE_DATA.name} — Web CV & Presentation`;
  pres.subject = 'Executive Portfolio & Technical Showcase';
  pres.author = PROFILE_DATA.name;
  pres.company = 'FOTONIC / Universitas Lampung';

  // Presentation layout: 16:9 widescreen
  pres.layout = 'LAYOUT_16x9';

  // Emerald Theme Color Constants
  const BG_COLOR = '04120B';
  const CARD_BG = '071F14';
  const CARD_BORDER = '10B981';
  const TEXT_PRIMARY = 'F4F4F5';
  const TEXT_MUTED = '94A3B8';
  const ACCENT_EMERALD = '10B981';
  const ACCENT_MINT = '34D399';

  // Helper to add standard slide background and header watermark
  const initSlide = () => {
    const slide = pres.addSlide();
    slide.background = { color: BG_COLOR };

    // Watermark branding at bottom right
    slide.addText(`efremalvin.dev • ${PROFILE_DATA.name}`, {
      x: 8.5,
      y: 7.1,
      w: 4.5,
      h: 0.3,
      fontSize: 9,
      fontFace: 'Arial',
      color: '475569',
      align: 'right',
    });

    return slide;
  };

  // ==========================================
  // SLIDE 1: COVER / TITLE SLIDE
  // ==========================================
  const slide1 = initSlide();

  // Accent pill
  slide1.addShape(pres.ShapeType.roundRect, {
    x: 1.0,
    y: 1.8,
    w: 3.8,
    h: 0.45,
    fill: { color: '064E3B' },
    line: { color: ACCENT_EMERALD, width: 1 },
    rectRadius: 0.2,
  });
  slide1.addText('PORTFOLIO & EXECUTIVE PRESENTATION', {
    x: 1.1,
    y: 1.85,
    w: 3.6,
    h: 0.35,
    fontSize: 10,
    fontFace: 'Arial',
    color: ACCENT_MINT,
    bold: true,
  });

  // Name
  slide1.addText(PROFILE_DATA.name, {
    x: 1.0,
    y: 2.5,
    w: 11.0,
    h: 1.0,
    fontSize: 40,
    fontFace: 'Arial',
    bold: true,
    color: TEXT_PRIMARY,
  });

  // Headline
  slide1.addText(PROFILE_DATA.headline, {
    x: 1.0,
    y: 3.6,
    w: 11.0,
    h: 0.6,
    fontSize: 18,
    fontFace: 'Arial',
    color: ACCENT_MINT,
  });

  // Summary box
  slide1.addText(
    `${PROFILE_DATA.educationAffiliation}\n${PROFILE_DATA.location} • Status: ${PROFILE_DATA.status}`,
    {
      x: 1.0,
      y: 4.5,
      w: 11.0,
      h: 0.8,
      fontSize: 12,
      fontFace: 'Arial',
      color: TEXT_MUTED,
      lineSpacing: 18,
    }
  );

  // Quick action links
  slide1.addText(
    `GitHub: github.com/${PROFILE_DATA.githubUsername}   |   Email: ${PROFILE_DATA.email}`,
    {
      x: 1.0,
      y: 5.6,
      w: 11.0,
      h: 0.4,
      fontSize: 11,
      fontFace: 'Arial',
      color: ACCENT_EMERALD,
    }
  );

  // ==========================================
  // SLIDE 2: EXECUTIVE SUMMARY & CREATIVE VISION
  // ==========================================
  const slide2 = initSlide();

  slide2.addText('01 / CREATIVE VISION & PROFILE', {
    x: 1.0,
    y: 0.8,
    w: 11.0,
    h: 0.4,
    fontSize: 11,
    fontFace: 'Arial',
    color: ACCENT_EMERALD,
    bold: true,
  });

  slide2.addText('Menjembatani Software Engineering & Visual Production', {
    x: 1.0,
    y: 1.3,
    w: 11.0,
    h: 0.7,
    fontSize: 24,
    fontFace: 'Arial',
    bold: true,
    color: TEXT_PRIMARY,
  });

  // Bio card
  slide2.addShape(pres.ShapeType.roundRect, {
    x: 1.0,
    y: 2.2,
    w: 11.3,
    h: 2.0,
    fill: { color: CARD_BG },
    line: { color: '064E3B', width: 1 },
    rectRadius: 0.15,
  });

  slide2.addText(PROFILE_DATA.bio, {
    x: 1.3,
    y: 2.5,
    w: 10.7,
    h: 1.4,
    fontSize: 13,
    fontFace: 'Arial',
    color: TEXT_PRIMARY,
    lineSpacing: 22,
  });

  // 3 Strategic Pillars
  const pillars = [
    {
      title: 'Python & Web Automation',
      desc: 'Pengembangan tools automasi sortir, cloud proofing, dan antarmuka web interaktif.',
    },
    {
      title: 'Local Media Pipeline',
      desc: 'Transkoding video dan pencocokan RAW instan bertenaga akselerasi GPU lokal.',
    },
    {
      title: 'N-Log Cinema Color Grading',
      desc: 'Pipeline color grading DaVinci Resolve dengan skin-tone natural berstandar industri.',
    },
  ];

  pillars.forEach((p, idx) => {
    const xPos = 1.0 + idx * 3.9;
    slide2.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: 4.5,
      w: 3.5,
      h: 2.0,
      fill: { color: '0B291C' },
      line: { color: CARD_BORDER, width: 1 },
      rectRadius: 0.15,
    });
    slide2.addText(p.title, {
      x: xPos + 0.2,
      y: 4.7,
      w: 3.1,
      h: 0.4,
      fontSize: 13,
      fontFace: 'Arial',
      bold: true,
      color: ACCENT_MINT,
    });
    slide2.addText(p.desc, {
      x: xPos + 0.2,
      y: 5.2,
      w: 3.1,
      h: 1.1,
      fontSize: 11,
      fontFace: 'Arial',
      color: TEXT_MUTED,
      lineSpacing: 16,
    });
  });

  // ==========================================
  // SLIDE 3: TECHNICAL & AUTOMATION PROJECTS
  // ==========================================
  const slide3 = initSlide();

  slide3.addText('02 / ENGINEERING SHOWCASE', {
    x: 1.0,
    y: 0.8,
    w: 11.0,
    h: 0.4,
    fontSize: 11,
    fontFace: 'Arial',
    color: ACCENT_EMERALD,
    bold: true,
  });

  slide3.addText('Technical & Automation Projects', {
    x: 1.0,
    y: 1.3,
    w: 11.0,
    h: 0.7,
    fontSize: 24,
    fontFace: 'Arial',
    bold: true,
    color: TEXT_PRIMARY,
  });

  PROJECTS_DATA.forEach((proj, idx) => {
    const xPos = 1.0 + idx * 3.9;
    slide3.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: 2.2,
      w: 3.6,
      h: 4.4,
      fill: { color: CARD_BG },
      line: { color: '064E3B', width: 1 },
      rectRadius: 0.15,
    });

    slide3.addText(proj.badge.toUpperCase(), {
      x: xPos + 0.25,
      y: 2.4,
      w: 3.1,
      h: 0.3,
      fontSize: 9,
      fontFace: 'Arial',
      color: ACCENT_EMERALD,
      bold: true,
    });

    slide3.addText(proj.title, {
      x: xPos + 0.25,
      y: 2.75,
      w: 3.1,
      h: 0.65,
      fontSize: 14,
      fontFace: 'Arial',
      bold: true,
      color: TEXT_PRIMARY,
    });

    slide3.addText(proj.description, {
      x: xPos + 0.25,
      y: 3.45,
      w: 3.1,
      h: 1.2,
      fontSize: 10,
      fontFace: 'Arial',
      color: TEXT_MUTED,
      lineSpacing: 15,
    });

    // Highlights
    slide3.addText(
      proj.highlights.map((h) => `• ${h}`).join('\n'),
      {
        x: xPos + 0.25,
        y: 4.75,
        w: 3.1,
        h: 1.1,
        fontSize: 9,
        fontFace: 'Arial',
        color: TEXT_PRIMARY,
        lineSpacing: 13,
      }
    );

    // Tech stack pill
    slide3.addText(proj.stack.join(' • '), {
      x: xPos + 0.25,
      y: 5.95,
      w: 3.1,
      h: 0.4,
      fontSize: 9,
      fontFace: 'Arial',
      color: ACCENT_MINT,
      bold: true,
    });
  });

  // ==========================================
  // SLIDE 4: COMMERCIAL VISUAL PRODUCTION (FOTONIC)
  // ==========================================
  const slide4 = initSlide();

  slide4.addText('03 / COMMERCIAL MEDIA PRODUCTION', {
    x: 1.0,
    y: 0.8,
    w: 11.0,
    h: 0.4,
    fontSize: 11,
    fontFace: 'Arial',
    color: ACCENT_EMERALD,
    bold: true,
  });

  slide4.addText('FOTONIC Showcase (FremNett Project)', {
    x: 1.0,
    y: 1.3,
    w: 11.0,
    h: 0.7,
    fontSize: 24,
    fontFace: 'Arial',
    bold: true,
    color: TEXT_PRIMARY,
  });

  // Overview box
  slide4.addShape(pres.ShapeType.roundRect, {
    x: 1.0,
    y: 2.2,
    w: 11.3,
    h: 1.4,
    fill: { color: CARD_BG },
    line: { color: '064E3B', width: 1 },
    rectRadius: 0.15,
  });

  slide4.addText(
    'FOUNDER & LEAD MEDIA — Dokumentasi komersial wisuda, seminar proposal (sempro), seminar hasil (semhas), dan komprehensif mahasiswa Universitas Lampung. Mengintegrasikan optik mirrorless dengan software alur kerja mandiri.',
    {
      x: 1.25,
      y: 2.45,
      w: 10.8,
      h: 0.9,
      fontSize: 11,
      fontFace: 'Arial',
      color: TEXT_PRIMARY,
      lineSpacing: 18,
    }
  );

  // 3 Showcase Cards with Metadata
  const visualCards = [
    {
      title: 'Academic Milestone',
      ratio: 'NEF 14-Bit Portrait',
      exif: '85mm f/1.8 Z • 1/1000s • ISO 160',
      desc: 'Isolasi subjek tajam dengan transisi bokeh halus dan skin-tone natural di lingkungan kampus Unila.',
    },
    {
      title: 'Low-Light / Astro',
      ratio: 'Dual-Gain ISO Long Exposure',
      exif: '20mm f/1.8 Z • 15.0s • ISO 3200',
      desc: 'Dynamic range tinggi pada kondisi minim cahaya dengan kontrol chroma noise presisi.',
    },
    {
      title: 'Graded Still (N-Log)',
      ratio: '10-Bit Rec.709 DaVinci CST',
      exif: '35mm f/1.8 Z • 1/50s (180°) • ISO 800',
      desc: 'Transformasi ruang warna N-Log ke Rec.709 dengan roll-off highlight sinematik dan separasi warna kaya.',
    },
  ];

  visualCards.forEach((card, idx) => {
    const xPos = 1.0 + idx * 3.9;
    slide4.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: 3.9,
      w: 3.6,
      h: 2.7,
      fill: { color: '071F14' },
      line: { color: CARD_BORDER, width: 1 },
      rectRadius: 0.15,
    });

    slide4.addText(card.title, {
      x: xPos + 0.25,
      y: 4.1,
      w: 3.1,
      h: 0.4,
      fontSize: 13,
      fontFace: 'Arial',
      bold: true,
      color: ACCENT_MINT,
    });

    slide4.addText(card.ratio, {
      x: xPos + 0.25,
      y: 4.5,
      w: 3.1,
      h: 0.3,
      fontSize: 9,
      fontFace: 'Arial',
      color: ACCENT_EMERALD,
    });

    slide4.addText(card.desc, {
      x: xPos + 0.25,
      y: 4.85,
      w: 3.1,
      h: 0.9,
      fontSize: 10,
      fontFace: 'Arial',
      color: TEXT_MUTED,
      lineSpacing: 14,
    });

    slide4.addText(card.exif, {
      x: xPos + 0.25,
      y: 5.85,
      w: 3.1,
      h: 0.4,
      fontSize: 9,
      fontFace: 'Arial',
      color: TEXT_PRIMARY,
      bold: true,
    });
  });

  // ==========================================
  // SLIDE 5: SKILLS & TOOLING MATRIX
  // ==========================================
  const slide5 = initSlide();

  slide5.addText('04 / CAPABILITIES & ECOSYSTEM', {
    x: 1.0,
    y: 0.8,
    w: 11.0,
    h: 0.4,
    fontSize: 11,
    fontFace: 'Arial',
    color: ACCENT_EMERALD,
    bold: true,
  });

  slide5.addText('Skills & Tooling Matrix', {
    x: 1.0,
    y: 1.3,
    w: 11.0,
    h: 0.7,
    fontSize: 24,
    fontFace: 'Arial',
    bold: true,
    color: TEXT_PRIMARY,
  });

  SKILLS_DATA.forEach((cluster, idx) => {
    const xPos = 1.0 + idx * 3.9;
    slide5.addShape(pres.ShapeType.roundRect, {
      x: xPos,
      y: 2.3,
      w: 3.6,
      h: 4.3,
      fill: { color: CARD_BG },
      line: { color: '064E3B', width: 1 },
      rectRadius: 0.15,
    });

    slide5.addText(cluster.category, {
      x: xPos + 0.3,
      y: 2.6,
      w: 3.0,
      h: 0.4,
      fontSize: 15,
      fontFace: 'Arial',
      bold: true,
      color: ACCENT_MINT,
    });

    slide5.addText(cluster.countLabel, {
      x: xPos + 0.3,
      y: 3.05,
      w: 3.0,
      h: 0.3,
      fontSize: 9,
      fontFace: 'Arial',
      color: ACCENT_EMERALD,
    });

    slide5.addText(
      cluster.skills.map((s) => `•  ${s}`).join('\n\n'),
      {
        x: xPos + 0.3,
        y: 3.5,
        w: 3.0,
        h: 2.8,
        fontSize: 11,
        fontFace: 'Arial',
        color: TEXT_PRIMARY,
        lineSpacing: 18,
      }
    );
  });

  // ==========================================
  // SLIDE 6: TIMELINE & CONTACT
  // ==========================================
  const slide6 = initSlide();

  slide6.addText('05 / TIMELINE & COLLABORATION', {
    x: 1.0,
    y: 0.8,
    w: 11.0,
    h: 0.4,
    fontSize: 11,
    fontFace: 'Arial',
    color: ACCENT_EMERALD,
    bold: true,
  });

  slide6.addText('Experience, Education & Contact', {
    x: 1.0,
    y: 1.3,
    w: 11.0,
    h: 0.7,
    fontSize: 24,
    fontFace: 'Arial',
    bold: true,
    color: TEXT_PRIMARY,
  });

  // Timeline entries
  TIMELINE_DATA.forEach((item, idx) => {
    const yPos = 2.2 + idx * 1.25;
    slide6.addShape(pres.ShapeType.ellipse, {
      x: 1.0,
      y: yPos + 0.05,
      w: 0.18,
      h: 0.18,
      fill: { color: idx === 0 ? ACCENT_EMERALD : '334155' },
      line: { color: ACCENT_MINT, width: 1 },
    });

    slide6.addText(`${item.title}  (${item.period})`, {
      x: 1.35,
      y: yPos,
      w: 9.0,
      h: 0.35,
      fontSize: 12,
      fontFace: 'Arial',
      bold: true,
      color: TEXT_PRIMARY,
    });

    slide6.addText(`${item.organization} — ${item.description}`, {
      x: 1.35,
      y: yPos + 0.35,
      w: 10.5,
      h: 0.65,
      fontSize: 10,
      fontFace: 'Arial',
      color: TEXT_MUTED,
      lineSpacing: 14,
    });
  });

  // Final Contact Banner
  slide6.addShape(pres.ShapeType.roundRect, {
    x: 1.0,
    y: 5.9,
    w: 11.3,
    h: 0.9,
    fill: { color: '071F14' },
    line: { color: ACCENT_EMERALD, width: 1 },
    rectRadius: 0.15,
  });

  slide6.addText(
    `Hubungi untuk Proyek Dev & Visual:  Email: ${PROFILE_DATA.email}   |   GitHub: @${PROFILE_DATA.githubUsername}   |   ${PROFILE_DATA.location}`,
    {
      x: 1.2,
      y: 6.15,
      w: 10.9,
      h: 0.4,
      fontSize: 11,
      fontFace: 'Arial',
      color: ACCENT_MINT,
      bold: true,
    }
  );

  // Trigger download in browser
  const filename = `${PROFILE_DATA.name.replace(/\s+/g, '_')}_Portfolio_Presentation.pptx`;
  await pres.writeFile({ fileName: filename });
}
