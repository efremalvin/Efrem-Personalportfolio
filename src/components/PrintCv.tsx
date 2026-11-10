import { PROFILE_DATA, PROJECTS_DATA, SKILLS_DATA, TIMELINE_DATA } from '@/data/portfolioData';

/**
 * Lembar CV ringkas 1 halaman A4. Seluruh isi diambil dari portfolioData.ts,
 * hanya tampil saat print / "Simpan sebagai PDF" (lihat .print-cv di globals.css).
 */
export function PrintCv() {
  return (
    <section
      className="print-cv bg-white text-slate-900 text-[10.5px] leading-snug"
      style={{ padding: '14mm 15mm' }}
      aria-hidden="true"
    >
      <header className="flex items-center gap-4 border-b-2 border-emerald-700 pb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PROFILE_DATA.avatarUrl} alt="" className="w-20 h-20 rounded-full object-cover border-2 border-emerald-700" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-emerald-900">{PROFILE_DATA.name}</h1>
          <p className="text-[12px] font-semibold text-emerald-700">{PROFILE_DATA.headline}</p>
          <p className="text-slate-600 mt-1">
            {PROFILE_DATA.location} · {PROFILE_DATA.educationAffiliation}
          </p>
          <p className="text-slate-700 mt-1">
            {PROFILE_DATA.email} · WA {PROFILE_DATA.whatsappNumber} · github.com/{PROFILE_DATA.githubUsername}
          </p>
        </div>
      </header>

      <Block title="Profil">
        <p className="text-slate-700">{PROFILE_DATA.bio}</p>
      </Block>

      <Block title="Proyek Teknis">
        <ul className="space-y-1.5">
          {PROJECTS_DATA.map((p) => (
            <li key={p.id}>
              <span className="font-semibold">{p.title}</span>{' '}
              <span className="text-emerald-700">({p.stack.join(', ')})</span>
              <div className="text-slate-600">{p.description}</div>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Pengalaman & Pendidikan">
        <ul className="space-y-1.5">
          {TIMELINE_DATA.map((t) => (
            <li key={t.title}>
              <div className="flex justify-between gap-3">
                <span className="font-semibold">{t.title}</span>
                <span className="text-slate-500 shrink-0">{t.period}</span>
              </div>
              <div className="text-slate-600">{t.organization}</div>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Skills & Tooling">
        <ul className="space-y-1">
          {SKILLS_DATA.map((c) => (
            <li key={c.category}>
              <span className="font-semibold">{c.category}:</span>{' '}
              <span className="text-slate-700">{c.skills.join(' · ')}</span>
            </li>
          ))}
        </ul>
      </Block>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-3.5">
      <h2 className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 border-b border-emerald-200 pb-0.5 mb-1.5">
        {title}
      </h2>
      {children}
    </div>
  );
}
