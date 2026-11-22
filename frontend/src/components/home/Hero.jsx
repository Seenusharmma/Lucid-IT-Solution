import { useState } from 'react'
import Icon from '../ui/Icon'
import { useApp } from '../../context/AppContext'
import { dashboardData } from '../../data/dashboardData'

const MODES = [
  { key: 'hotel', label: 'Hotel PMS' },
  { key: 'pos', label: 'Restaurant POS' },
  { key: 'club', label: 'Club ERP' }
]

export default function Hero() {
  const { openDemoModal, scrollToSection } = useApp()
  const [mode, setMode] = useState('hotel')
  const data = dashboardData[mode]

  return (
    <section id="top" className="relative bg-navy-900 text-white overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] rounded-full bg-crimson-600/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full bg-blue-500/15 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-center">

          {/* Left Copy Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-center lg:text-left">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl xl:text-6xl leading-[1.12] tracking-tight text-white">
              Complete Software Solutions for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-500 via-red-400 to-amber-300">Hospitality Industry</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              End-to-end <strong className="text-white font-semibold">Cloud, Hybrid &amp; On-Premise</strong> enterprise software engineered for Hotels &amp; Resorts, Restaurants &amp; RestoBars, Membership Clubs, and Food Courts.
            </p>

            {/* Dual Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button type="button" onClick={() => openDemoModal()} className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-glow transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                <span>Book a Free Demo</span>
                <Icon name="calendar-check" className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => scrollToSection('solutions')} className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2">
                <span>Explore Solutions</span>
                <Icon name="chevron-down" className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                  <Icon name="award" className="w-4 h-4" />
                </div>
                <span className="font-medium">25+ Years Innovation</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-crimson-600/20 text-crimson-400 flex items-center justify-center shrink-0">
                  <Icon name="headset" className="w-4 h-4" />
                </div>
                <span className="font-medium">24/7 Expert Support</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <Icon name="wifi-off" className="w-4 h-4" />
                </div>
                <span className="font-medium">Online &amp; Offline Sync</span>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Interactive Live Hospitality Command Center */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl glass-dark p-3.5 sm:p-6 shadow-navy-lg border border-white/15">
              {/* Top Window Bar + Responsive Module Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-crimson-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="ml-1.5 text-xs font-semibold text-slate-200 tracking-wide truncate">LUCID Command Center</span>
                </div>
                <div className="flex overflow-x-auto no-scrollbar bg-navy-950/80 p-1 rounded-lg border border-white/10 text-xs gap-1">
                  {MODES.map((item) => {
                    const isActive = mode === item.key
                    return (
                      <button
                        type="button"
                        key={item.key}
                        id={`dash-btn-${item.key}`}
                        onClick={() => setMode(item.key)}
                        className={`px-2.5 py-1.5 rounded-md whitespace-nowrap transition-all flex-1 sm:flex-none ${isActive ? 'bg-crimson-600 text-white font-semibold' : 'font-medium text-slate-400 hover:text-white'}`}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Sync Status Bar */}
              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] sm:text-xs">
                <div className="flex items-center gap-2 text-emerald-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span id="dash-sync-text">{data.sync}</span>
                </div>
                <span className="text-slate-400 font-mono text-[10px] sm:text-xs">0ms Failover</span>
              </div>

              {/* Live KPI Cards Grid (Compact on Mobile, Spacious on Desktop) */}
              <div className="mt-3.5 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p id="dash-kpi1-label" className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold truncate">{data.kpi1.label}</p>
                  <p id="dash-kpi1-val" className="mt-1 font-display font-bold text-base sm:text-2xl text-white">{data.kpi1.val}</p>
                  <span id="dash-kpi1-sub" className="block text-[10px] sm:text-[11px] text-emerald-400 font-medium truncate">{data.kpi1.sub}</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p id="dash-kpi2-label" className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold truncate">{data.kpi2.label}</p>
                  <p id="dash-kpi2-val" className="mt-1 font-display font-bold text-base sm:text-2xl text-white">{data.kpi2.val}</p>
                  <span id="dash-kpi2-sub" className="block text-[10px] sm:text-[11px] text-amber-300 font-medium truncate">{data.kpi2.sub}</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p id="dash-kpi3-label" className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold truncate">{data.kpi3.label}</p>
                  <p id="dash-kpi3-val" className="mt-1 font-display font-bold text-base sm:text-2xl text-white">{data.kpi3.val}</p>
                  <span id="dash-kpi3-sub" className="block text-[10px] sm:text-[11px] text-emerald-400 font-medium truncate">{data.kpi3.sub}</span>
                </div>
              </div>

              {/* Mini Activity Chart & Real-Time Feed */}
              <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-12 gap-3">
                {/* Bar Chart */}
                <div className="sm:col-span-5 p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-300">Hourly Throughput</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-emerald-300 font-semibold">Live</span>
                  </div>
                  <div id="dash-bars" className="flex items-end justify-between gap-1.5 h-20 sm:h-24 pt-2">
                    {data.bars.map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <div
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-t-md ${i === data.bars.length - 1 ? 'bg-crimson-500' : 'bg-white/25 hover:bg-crimson-400'} transition-all duration-500`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Live Feed */}
                <div className="sm:col-span-7 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-300">Real-Time Operations</span>
                    <Icon name="activity" className="w-3.5 h-3.5 text-crimson-500" />
                  </div>
                  <div id="dash-feed" className="space-y-2 text-xs">
                    {data.feed.map((item, i) => (
                      <div key={i} className="flex items-center justify-between gap-2 p-2 rounded-lg bg-navy-950/60 border border-white/5">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className={`w-6 h-6 rounded-md ${item.badge} flex items-center justify-center shrink-0`}>
                            <Icon name={item.icon} className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-slate-200 truncate text-[11px] sm:text-xs">{item.text}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
