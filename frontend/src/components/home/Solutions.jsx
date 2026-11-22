import Icon from '../ui/Icon'
import { useApp } from '../../context/AppContext'
import { solutionsData } from '../../data/solutionsData'

const TABS = [
  { key: 'pms', icon: 'building-2', label: 'Hotel Management (PMS)' },
  { key: 'pos', icon: 'utensils', label: 'Restaurant POS & ERP' },
  { key: 'club', icon: 'crown', label: 'LUCID Club ERP' },
  { key: 'foodcourt', icon: 'store', label: 'Food Court Software' }
]

export default function Solutions() {
  const { solutionKey, setSolutionKey, openDemoModal, openChatWithPrompt, openSolutionDetail } = useApp()
  const activeKey = solutionsData[solutionKey] ? solutionKey : 'pms'
  const sol = solutionsData[activeKey]

  const handleBookDemo = () => {
    if (['pms', 'pos', 'club'].includes(activeKey)) {
      openSolutionDetail(activeKey)
    } else {
      openDemoModal(sol.demoValue)
    }
  }

  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-bold uppercase tracking-widest mb-3">Our Product Suite</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-navy-900 tracking-tight">
            Purpose-Built Software for Every Hospitality Vertical
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-lg">
            Modular, scalable, and deeply integrated. Choose the exact suite tailored for your property and expand seamlessly as your brand grows.
          </p>
        </div>

        {/* Interactive Solution Tabs (Scrollable on narrow mobile, wrapped/centered on larger screens) */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 pb-2 sm:pb-0 no-scrollbar">
          {TABS.map((tab) => {
            const isActive = activeKey === tab.key
            return (
              <button
                type="button"
                key={tab.key}
                id={`sol-tab-${tab.key}`}
                onClick={() => setSolutionKey(tab.key)}
                className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shrink-0 ${isActive ? 'bg-navy-900 text-white shadow-md' : 'bg-white text-slate-600 hover:text-navy-900 border border-slate-200'}`}
              >
                <Icon name={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Solution Showcase Panel */}
        <div id="solution-panel" className="bg-white rounded-3xl border border-slate-200/80 shadow-soft p-5 sm:p-10 lg:p-12 transition-all">
          <div key={activeKey} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center view-fade">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-bold uppercase tracking-wider">
                {sol.badge}
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-3xl text-navy-900">
                {sol.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {sol.subtitle}
              </p>
              <ul className="space-y-3 pt-1">
                {sol.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="check" className="w-3.5 h-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={handleBookDemo} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Book a Free Demo</span>
                  <Icon name="arrow-right" className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => openChatWithPrompt(`Tell me more about ${sol.title}`)} className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 text-sm font-semibold transition-all flex items-center justify-center gap-2">
                  <Icon name="sparkles" className="w-4 h-4 text-crimson-600" />
                  <span>Ask AI About This</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              {sol.image ? (
                <div className="relative h-[300px] overflow-hidden rounded-2xl bg-navy-900 shadow-navy-lg sm:h-[380px]">
                  <img
                    src={sol.image}
                    alt={sol.imageAlt}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => { event.currentTarget.style.opacity = '0' }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-crimson-300">{sol.badge}</p>
                    <h4 className="mt-1.5 font-display font-bold text-lg text-white sm:text-xl">{sol.title}</h4>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {sol.highlights.map((h) => (
                        <div key={h.label} className="rounded-xl border border-white/15 bg-white/10 p-2.5 backdrop-blur-sm">
                          <p className="text-[9px] font-bold uppercase tracking-wider text-slate-300">{h.label}</p>
                          <p className="mt-1 text-[11px] font-bold leading-tight text-white">{h.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-navy-900 text-white p-5 sm:p-7 relative overflow-hidden shadow-navy-lg">
                  <div className="absolute -right-12 -bottom-12 w-44 h-44 bg-crimson-600/25 rounded-full blur-2xl"></div>
                  <div className="relative z-10 space-y-4 sm:space-y-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Architecture Highlights</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold">Enterprise Ready</span>
                    </div>
                    <div className="space-y-3">
                      {sol.highlights.map((h) => (
                        <div key={h.label} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                          <span className="text-xs text-slate-400 font-medium">{h.label}</span>
                          <span className="text-xs sm:text-sm font-display font-bold text-white text-right">{h.val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-1 flex items-center gap-2.5 text-xs text-slate-300">
                      <Icon name="shield-check" className="w-4 h-4 text-crimson-400 shrink-0" />
                      <span>Backed by 24/7 Bengaluru Engineering Support</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
