import { FaLinkedin } from 'react-icons/fa'
import Icon from '../ui/Icon'
import useFounderInteractions from '../../hooks/useFounderInteractions'
import { FOUNDER } from '../../data/aboutData'

export default function Founder() {
  const stageRef = useFounderInteractions()

  return (
    <section id="founder" className="py-16 sm:py-20 lg:py-28 bg-navy-950 text-white overflow-hidden rounded-b-2xl">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Founder Photo */}
          <div ref={stageRef} className="founder-photo-stage founder-reveal relative order-2 lg:order-1 mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] outline-none" tabIndex={0} aria-label="Portrait of Pradeep C S">
            <div className="founder-glow absolute -inset-8 rounded-full opacity-60 blur-2xl pointer-events-none"></div>
            <div className="absolute -inset-3 rounded-full border border-white/10 pointer-events-none"></div>
            <div className="absolute -inset-6 rounded-full border border-dashed border-white/5 pointer-events-none"></div>
            <img
              src={FOUNDER.image}
              alt={`${FOUNDER.name}, ${FOUNDER.role} of LUCID IT SOLUTIONS PVT LTD`}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="founder-photo relative z-10 w-full h-full object-cover rounded-full border-2 border-white/20 shadow-navy-lg"
            />
            <div className="founder-badge absolute -bottom-3 left-1/2 z-20 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-crimson-600 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow">
              <Icon name="badge-check" className="w-3.5 h-3.5" />
              Founder & Director
            </div>
          </div>

          {/* Founder Details */}
          <div className="founder-reveal order-1 lg:order-2 text-center lg:text-left" style={{ transitionDelay: '120ms' }}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-crimson-500/15 text-crimson-300 text-xs font-bold uppercase tracking-[0.18em] mb-4">
              <Icon name="user" className="w-3.5 h-3.5" />
              The Founder
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Meet <span className="text-crimson-400">{FOUNDER.name}</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base font-semibold text-white/90">
              {FOUNDER.role}, {FOUNDER.company}
            </p>
            <div className="mt-6 h-px w-16 bg-crimson-500 mx-auto lg:mx-0"></div>
            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl mx-auto lg:mx-0">
              {FOUNDER.fullBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5">
              <span className="founder-chip px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">Hotel PMS</span>
              <span className="founder-chip px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">Restaurant POS</span>
              <span className="founder-chip px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">Club ERP</span>
            </div>
            <a
              href={FOUNDER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-crimson-600 border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all"
            >
              <FaLinkedin className="w-4 h-4" aria-hidden="true" />
              <span>View LinkedIn Profile</span>
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
