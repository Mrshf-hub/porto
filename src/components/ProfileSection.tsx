import { useState } from 'react';
import {
  EDUCATION_LIST,
  EXPERIENCE_LIST,
  PROFILE_BIO,
  PROFILE_CUTOUT_URL,
  SOFTWARE_SKILLS,
  TECHNICAL_SKILLS,
} from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

const EMBER_POSITIONS = [
  { left: '18%', duration: '4.8s', delay: '0.3s', size: 'w-1 h-1', bg: '#F59E0B' },
  { left: '32%', duration: '6.2s', delay: '1.2s', size: 'w-1.5 h-1.5', bg: '#F59E0B' },
  { left: '52%', duration: '5.5s', delay: '2.1s', size: 'w-1 h-1', bg: '#FB7185' },
  { left: '68%', duration: '7.1s', delay: '0.8s', size: 'w-1 h-1', bg: '#F59E0B' },
  { left: '84%', duration: '5.9s', delay: '1.7s', size: 'w-1 h-1', bg: '#F59E0B' },
  { left: '42%', duration: '6.5s', delay: '2.8s', size: 'w-1 h-1', bg: '#F59E0B' },
];

export function ProfileSection() {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(SOFTWARE_SKILLS[0]!.id);
  const activeSkill =
    SOFTWARE_SKILLS.find((skill) => skill.id === selectedSkillId) ?? SOFTWARE_SKILLS[0]!;

  return (
    <section
      id="profile"
      className="min-h-screen w-full px-[6vw] pt-28 pb-24 flex items-center justify-center"
    >
      <div className="max-w-[1220px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-[clamp(36px,5vw,76px)] items-center">
        {/* Left Column: Portrait Stage with Atmospheric Backlight & Embers */}
        <div className="text-center relative">
          <div className="text-xs font-bold tracking-[0.25em] text-[#F4F7FB]/70 uppercase mb-2">
            HELLO, I AM
          </div>
          <h2 className="font-display text-[clamp(30px,3.4vw,46px)] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] mb-7 text-balance leading-[0.98]">
            MARSHA YOSELINE FAU
          </h2>

          <div className="relative max-w-[380px] mx-auto">
            <div
              aria-hidden="true"
              className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-[18%] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(32,135,185,0.45)_0%,transparent_70%)] blur-[28px] z-0 pointer-events-none"
            />
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-[#DCE8F5]/10 bg-[#07121E]">
              <ResilientImage
                src={PROFILE_CUTOUT_URL}
                alt="Marsha Yoseline Fau"
                fallbackTitle="MARSHA YOSELINE FAU"
                fallbackSubtitle="TEKNIK INFORMATIKA IT-PLN"
                fallbackVariant="studio"
                className="w-full h-full object-cover object-top portrait-mask"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl"
            >
              {EMBER_POSITIONS.map((ember, index) => (
                <span
                  key={index}
                  className={`ember ${ember.size}`}
                  style={{
                    left: ember.left,
                    animationDuration: ember.duration,
                    animationDelay: ember.delay,
                    background: ember.bg,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Software Skills, Education & Experience */}
        <div className="flex flex-col">
          <h2 className="font-display text-[30px] tracking-[0.03em] text-white mb-3">
            ABOUT ME
          </h2>
          <p className="text-[14px] leading-[1.75] text-[#F4F7FB]/75 max-w-[62ch] mb-6">
            {PROFILE_BIO}
          </p>

          <h3 className="font-display text-2xl text-white mt-2 mb-3">SOFTWARE SKILLS</h3>
          <div className="flex flex-wrap gap-3 mb-3" role="group" aria-label="Software Skills">
            {SOFTWARE_SKILLS.map((skill) => {
              const isSelected = skill.id === activeSkill.id;
              return (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => setSelectedSkillId(skill.id)}
                  aria-pressed={isSelected}
                  title={`${skill.name}: ${skill.description}`}
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center font-extrabold text-sm tracking-[0.02em] shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC] ${
                    skill.gradientClass
                  } ${
                    isSelected
                      ? '-translate-y-1 scale-105 ring-2 ring-[#7DD3FC]/70 shadow-[0_12px_28px_rgba(0,0,0,0.6)]'
                      : 'hover:-translate-y-1 hover:scale-105 opacity-90 hover:opacity-100'
                  }`}
                >
                  {skill.code}
                </button>
              );
            })}
          </div>
          <p
            data-testid="active-skill-detail"
            className="text-xs text-[#7DD3FC] font-medium mb-7 min-h-[20px]"
          >
            <span className="font-bold text-white">{activeSkill.name}</span>
            <span aria-hidden="true" className="mx-2 text-white/40">
              ·
            </span>
            <span className="text-[#F4F7FB]/75">{activeSkill.description}</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-1">
            {/* Education & Technical Hardware */}
            <div>
              <h3 className="font-display text-xl text-[#D6DFE8] mb-4">EDUCATION</h3>
              <div className="space-y-4">
                {EDUCATION_LIST.map((edu) => (
                  <div
                    key={edu.title}
                    className="pb-3 border-b border-[#DCE8F5]/10 last:border-b-0"
                  >
                    <div className="font-condensed text-xs font-bold text-[#7DD3FC] tracking-[0.1em] uppercase">
                      {edu.period}
                    </div>
                    <div className="text-[13px] font-bold text-[#F4F7FB] mt-0.5">
                      {edu.title}
                    </div>
                    <div className="text-xs text-[#F4F7FB]/65 mt-0.5 leading-relaxed">
                      {edu.description}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-xl text-[#D6DFE8] mt-7 mb-3">
                TECHNICAL &amp; HARDWARE
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-semibold text-[#F4F7FB]/80">
                {TECHNICAL_SKILLS.map((skill, index) => (
                  <span key={skill} className="whitespace-nowrap inline-flex items-center">
                    {skill}
                    {index < TECHNICAL_SKILLS.length - 1 && (
                      <span aria-hidden="true" className="ml-3 text-[#7DD3FC]/50">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-display text-xl text-[#D6DFE8] mb-4">EXPERIENCE</h3>
              <div className="space-y-4">
                {EXPERIENCE_LIST.map((exp) => (
                  <div
                    key={exp.title}
                    className="pb-3 border-b border-[#DCE8F5]/10 last:border-b-0"
                  >
                    <div className="font-condensed text-xs font-bold text-[#7DD3FC] tracking-[0.1em] uppercase">
                      {exp.period}
                    </div>
                    <div className="text-[13px] font-bold text-[#F4F7FB] mt-0.5">
                      {exp.title}
                    </div>
                    <div className="text-xs text-[#F4F7FB]/65 mt-0.5 leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
