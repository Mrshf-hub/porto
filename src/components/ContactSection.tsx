import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import {
  CONTACT_LINKS,
  MILESTONES,
  STUDIO_AVATAR_URL,
} from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

function ContactIcon({ id }: { id: string }) {
  if (id === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (id === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
    </svg>
  );
}

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-svh w-full px-[6vw] pt-28 pb-10 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center relative z-10">
        {/* Left Column: Circular Portrait, Contact Stack & Milestones */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-7">
            <div className="text-center">
              <div className="w-[172px] h-[172px] rounded-full border-[3px] border-[#DCE8F5]/25 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65),0_0_30px_rgba(56,189,248,0.15)] mb-3 group bg-[#07121E]">
                <ResilientImage
                  src={STUDIO_AVATAR_URL}
                  alt="Marsha Yoseline Fau Creative Studio"
                  fallbackTitle="MF"
                  fallbackSubtitle="STUDIO 2026"
                  fallbackVariant="studio"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-white">
                MARSHA YOSELINE FAU
              </div>
              <div className="text-[11px] text-[#F4F7FB]/70 tracking-[0.08em] mt-0.5">
                IT-PLN · 2026
              </div>
            </div>

            <div className="flex-1 min-w-[240px]">
              <h2 className="font-display text-[28px] text-white mb-4">CONTACT ME</h2>
              <div className="flex flex-col gap-3">
                {CONTACT_LINKS.map((item) => (
                  <div key={item.id} className="flex items-center gap-2.5 flex-wrap">
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-3.5 text-[#F4F7FB] hover:translate-x-1 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC] rounded-full pr-2"
                    >
                      <span className="w-9 h-9 rounded-full bg-[#F4F7FB] text-[#05080D] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.35)] shrink-0">
                        <ContactIcon id={item.id} />
                      </span>
                      <span className="text-xs font-bold tracking-[0.08em] text-[#F4F7FB] group-hover:text-[#7DD3FC] transition-colors">
                        {item.handle}
                      </span>
                    </a>

                    {item.copyValue && (
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(item.copyValue!)}
                        aria-label="Salin alamat email"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DCE8F5]/10 hover:bg-[#DCE8F5]/20 border border-[#DCE8F5]/15 text-[10px] font-bold tracking-[0.08em] uppercase text-[#7DD3FC] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC]"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3 h-3" aria-hidden="true" />
                            <span>Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" aria-hidden="true" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mini Milestone Archive */}
          <div className="flex flex-wrap gap-4 mt-9">
            {MILESTONES.map((milestone) => (
              <div
                key={milestone.title}
                className="w-full sm:w-[225px] rounded-xl p-4 bg-[#08121E]/75 border border-[#DCE8F5]/15 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              >
                <div className="font-condensed text-[11px] font-bold tracking-[0.12em] text-[#7DD3FC] mb-1">
                  {milestone.badge}
                </div>
                <div className="text-xs font-extrabold text-white mb-1 tracking-[0.04em]">
                  {milestone.title}
                </div>
                <div className="text-[11px] text-[#F4F7FB]/70 leading-snug">
                  {milestone.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: "THANK YOU 2026" Display */}
        <div className="text-center relative py-4 flex flex-col items-center gap-2">
          <h2 className="font-display text-[clamp(52px,7.2vw,106px)] leading-[0.94] text-[#D6DFE8] drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] select-none">
            THANK YOU
          </h2>
          <div className="font-display text-[clamp(52px,7.2vw,106px)] leading-[0.94] text-[#D6DFE8] drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] select-none">
            2026
          </div>
        </div>
      </div>

      {/* Decorative Corner Motif positioned cleanly above footer bar */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-[2vw] bottom-16 w-[clamp(220px,24vw,340px)] pointer-events-none opacity-80 z-0"
      >
        <svg
          viewBox="0 0 420 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
        >
          <path
            d="M25 255 C 120 190, 235 235, 395 115"
            stroke="rgba(220,232,245,0.35)"
            strokeWidth="44"
            strokeLinecap="round"
          />
          <path
            d="M25 255 C 120 190, 235 235, 395 115"
            stroke="#07121E"
            strokeWidth="32"
            strokeLinecap="round"
          />
          <circle cx="70" cy="228" r="3.2" fill="#38BDF8" />
          <circle cx="115" cy="206" r="3.2" fill="#38BDF8" />
          <circle cx="160" cy="198" r="3.2" fill="#38BDF8" />
          <circle cx="205" cy="203" r="3.2" fill="#38BDF8" />
          <circle cx="250" cy="192" r="3.2" fill="#38BDF8" />
          <circle cx="295" cy="170" r="3.2" fill="#38BDF8" />
          <circle cx="340" cy="144" r="3.2" fill="#38BDF8" />

          <g transform="translate(185, 162) rotate(-14)">
            <rect
              width="142"
              height="88"
              rx="10"
              fill="#0A1624"
              stroke="rgba(220,232,245,0.45)"
              strokeWidth="2"
            />
            <rect
              x="12"
              y="10"
              width="118"
              height="46"
              rx="5"
              fill="#0E2034"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth="1.5"
            />
            <rect
              x="28"
              y="21"
              width="86"
              height="24"
              rx="4"
              fill="#05080D"
              stroke="rgba(220,232,245,0.25)"
              strokeWidth="1"
            />
            <circle cx="48" cy="33" r="9" fill="none" stroke="#DCE8F5" strokeWidth="2" />
            <circle cx="48" cy="33" r="3" fill="#38BDF8" />
            <circle cx="94" cy="33" r="9" fill="none" stroke="#DCE8F5" strokeWidth="2" />
            <circle cx="94" cy="33" r="3" fill="#38BDF8" />
            <path d="M57 33 H85" stroke="rgba(220,232,245,0.35)" strokeWidth="1.5" />
            <rect
              x="34"
              y="66"
              width="74"
              height="14"
              rx="3"
              fill="#05080D"
              stroke="rgba(220,232,245,0.25)"
              strokeWidth="1"
            />
          </g>

          <g transform="translate(230, 18)">
            <g transform="translate(42, 16) rotate(36)">
              <rect
                x="0"
                y="0"
                width="13"
                height="120"
                rx="5"
                fill="#1E293B"
                stroke="rgba(220,232,245,0.6)"
                strokeWidth="1.5"
              />
              <rect x="3" y="16" width="7" height="32" rx="2" fill="#38BDF8" opacity="0.45" />
              <path d="M0 120 L6.5 140 L13 120 Z" fill="#E11D48" />
              <circle cx="6.5" cy="141" r="3.5" fill="#38BDF8" />
            </g>
            <path
              d="M128 84 C 110 72, 92 78, 80 92 L 66 108 C 60 114, 64 124, 73 122 L 94 114 L 116 128 C 128 134, 144 124, 148 108 Z"
              fill="#0E2034"
              stroke="rgba(220,232,245,0.45)"
              strokeWidth="2"
            />
            <path
              d="M96 92 C 88 86, 78 90, 74 98"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Bottom Footer Bar */}
      <footer className="relative z-10 w-full max-w-[1200px] mx-auto pt-6 mt-12 border-t border-[#DCE8F5]/15 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-[#F4F7FB]/50 text-center">
        <div>© 2026 MARSHA YOSELINE FAU — ALL RIGHTS RESERVED</div>
        <div>INFORMATICS IT-PLN · VIDEO &amp; MUSIC EDITOR · CREATIVE TECH</div>
      </footer>
    </section>
  );
}
