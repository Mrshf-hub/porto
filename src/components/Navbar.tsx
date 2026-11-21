import type { NavSectionId } from '../utils/portfolioLogic';

interface NavbarProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
}

const NAV_ITEMS: Array<{ id: NavSectionId; label: string }> = [
  { id: 'profile', label: 'PROFIL' },
  { id: 'projects', label: 'PROJECT' },
  { id: 'contact', label: 'CONTACT PERSON' },
];

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  return (
    <>
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('hero');
        }}
        aria-label="Marsha Yoseline Fau Home"
        className="fixed top-6 left-[4vw] z-50 hidden sm:flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC] rounded-xl"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
          aria-hidden="true"
        >
          <rect
            width="100"
            height="100"
            rx="20"
            fill="#0A1624"
            stroke="rgba(220, 232, 245, 0.22)"
            strokeWidth="3"
          />
          <path
            d="M26 74V26L42 50L58 26V74"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68 30H82M68 48H78"
            stroke="#E11D48"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </a>

      <nav
        aria-label="Navigasi Utama"
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 px-1.5 py-1.5 rounded-full bg-[#0A1420]/80 backdrop-blur-md border border-[#DCE8F5]/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-w-[calc(100vw-24px)]"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`whitespace-nowrap shrink-0 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] px-3 sm:px-5 py-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3FC] ${
                isActive
                  ? 'bg-[#DCE8F5] text-[#060A10] shadow-[0_0_20px_rgba(220,232,245,0.4)]'
                  : 'text-[#F4F7FB]/70 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </>
  );
}
