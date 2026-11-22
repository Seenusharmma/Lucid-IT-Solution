import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { ABOUT_PRODUCTS, ABOUT_STATS, ABOUT_VALUES } from '../data/aboutData'
import { solutionsData } from '../data/solutionsData'
import Icon from '../components/ui/Icon'
import Founder from '../components/home/Founder'
import TeamLeads from '../components/home/TeamLeads'
import CtaBanner from '../components/home/CtaBanner'
import LucidLoader from '../components/ui/LucidLoader'

export default function AboutView() {
  const [isLoading, setIsLoading] = useState(true)
  const { setSolutionKey, navigateTo } = useApp()

  const openProduct = (key) => {
    setSolutionKey(key)
    navigateTo('home', 'solutions')
  }

  if (isLoading) {
    return (
      <LucidLoader
        onComplete={() => setIsLoading(false)}
        duration={1800}
        subtitle="Exploring LUCID Team & Heritage"
      />
    )
  }

  return (
    <main id="view-about" className="view-fade pt-[60px] sm:pt-[68px]">
      {/* Founder Spotlight - shown first on the About page only */}
      <Founder />

      {/* Impact Stats */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {ABOUT_STATS.map((stat) => (
              <div key={stat.label} className="text-center p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-11 h-11 mx-auto rounded-xl bg-navy-900 text-white flex items-center justify-center mb-4">
                  <Icon name={stat.icon} className="w-5 h-5" />
                </div>
                <p className="font-display font-extrabold text-2xl sm:text-4xl text-navy-900">{stat.value}</p>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story + Products */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-bold uppercase tracking-widest mb-3">
                Our Story
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-navy-900 tracking-tight">
                Two decades of solving the problems hospitality teams actually face
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  LUCID began with a clear observation: hotels, restaurants and clubs were being asked to stitch together disconnected tools for billing, reservations, inventory and accounting. The result was downtime, manual reconciliation and frustrated teams.
                </p>
                <p>
                  We built one connected platform instead. Today LUCID unifies the front desk, restaurant floor, club membership and back office — while running reliably on local networks, in the cloud, or both.
                </p>
                <p>
                  Our Bengaluru headquarters brings together engineers, designers and hospitality domain specialists who stay close to customers long after go-live. That combination of product depth and 24/7 support is why leading brands have trusted LUCID for 17 years and more.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-crimson-600 mb-4">What we build</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_PRODUCTS.map((product) => {
                  const solution = solutionsData[product.key]
                  return (
                    <button
                      key={product.key}
                      type="button"
                      onClick={() => openProduct(product.key)}
                      className="group text-left p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:border-crimson-300 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-navy-900 text-white flex items-center justify-center mb-4 group-hover:bg-crimson-600 transition-colors">
                        <Icon name={product.icon} className="w-5 h-5" />
                      </div>
                      <p className="font-display font-bold text-navy-900 text-sm sm:text-base">{product.label}</p>
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">{solution.subtitle}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-crimson-600">
                        Explore solution
                        <Icon name="arrow-right" className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leads */}
      <TeamLeads />

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold uppercase tracking-widest mb-3">
              What Drives Us
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-navy-900 tracking-tight">
              Principles behind every LUCID release
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ABOUT_VALUES.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:border-crimson-200 transition-colors">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${value.tone}`}>
                  <Icon name={value.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
