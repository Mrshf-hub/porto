import { HERO_PORTRAIT_URL } from '../data/portfolio';
import type { NavSectionId } from '../utils/portfolioLogic';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onNavigate: (section: NavSectionId) => void;
}

const MENU_ITEMS: Array<{ id: NavSectionId; label: string }> = [
  { id: 'profile', label: 'START' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-svh w-full flex flex-col lg:flex-row items-center justify-center px-[5vw] pt-24 pb-12 lg:py-0 overflow-hidden"
    >
      {/* Left Crimson Pill Portrait Frame */}
      <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-[260px] h-[250px] sm:w-[320px] sm:h-[310px] lg:w-[clamp(260px,28vw,390px)] lg:h-[clamp(260px,28vw,380px)] rounded-full lg:rounded-l-none lg:rounded-r-full bg-gradient-to-br from-[#6E0D19] to-[#9E1324] shadow-[0_25px_60px_rgba(158,19,36,0.38),inset_0_0_40px_rgba(0,0,0,0.4)] overflow-hidden flex items-end justify-end z-10 mb-8 lg:mb-0 animate-pill-in group">
        <ResilientImage
          src={HERO_PORTRAIT_URL}
          alt="Potret Marsha Yoseline Fau"
          fallbackTitle="MARSHA Y. FAU"
          fallbackSubtitle="CREATIVE PORTFOLIO"
          fallbackVariant="crimson"
          className="w-full h-full object-cover object-top brightness-125 contrast-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Center-Right Title Block & Game-Style Vertical Menu */}
      <div className="lg:ml-[clamp(180px,20vw,280px)] text-center z-15 flex flex-col items-center animate-rise-in">
        <div className="flex items-baseline justify-center gap-3 sm:gap-5 flex-wrap">
          <h1 className="font-display text-[clamp(56px,8.8vw,136px)] text-[#D6DFE8] drop-shadow-[0_10px_40px_rgba(0,0,0,0.75)]">
            PORTFOLIO
          </h1>
          <span className="font-condensed font-light tracking-[0.04em] text-[clamp(40px,6.2vw,96px)] text-[#F4F7FB]/70 leading-none">
            2026
          </span>
        </div>

        <p className="mt-3 flex items-center justify-center gap-3 text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#F4F7FB]/70">
          <span className="w-3 h-[2px] bg-[#E11D48] inline-block" aria-hidden="true" />
          <span>VIDEO EDITOR · IT · E-SPORT OPERATOR</span>
        </p>

        <div className="mt-10 sm:mt-12 flex flex-col gap-3 items-center">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              className="group relative text-[#F4F7FB]/75 hover:text-white text-[13px] font-bold tracking-[0.26em] uppercase px-8 py-2.5 rounded-full transition-all duration-300 hover:bg-[#DCE8F5]/10 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC]"
            >
              <span
                aria-hidden="true"
                className="text-[#E11D48] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 mr-2 inline-block"
              >
                ▸
              </span>
              {item.label}
              <span
                aria-hidden="true"
                className="text-[#E11D48] opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ml-2 inline-block"
              >
                ◂
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
