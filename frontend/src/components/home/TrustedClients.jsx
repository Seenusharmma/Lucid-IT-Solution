import { Fragment, useState } from 'react'
import Icon from '../ui/Icon'
import { clientBrands } from '../../data/clientBrands'
import useClientCarousel from '../../hooks/useClientCarousel'

const FILTERS = [
  { key: 'All', label: 'All Brands (15)' },
  { key: 'Hotel', label: 'Hotels & Resorts' },
  { key: 'Restaurant', label: 'Restaurants' },
  { key: 'Club', label: 'Clubs' }
]

const getTagColor = (category) => {
  if (category === 'Hotel') return 'bg-blue-50 text-blue-700 border-blue-100'
  if (category === 'Restaurant') return 'bg-crimson-50 text-crimson-700 border-crimson-100'
  return 'bg-amber-50 text-amber-800 border-amber-100'
}

export default function TrustedClients() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? clientBrands : clientBrands.filter((brand) => brand.category === filter)
  const trackRef = useClientCarousel(filter, list.length)

  // Repeat small filtered sets more often so the loop always fills the viewport.
  const repeats = list.length <= 3 ? 6 : 3

  return (
    <section id="trusted-clients" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Filter Toggle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-bold uppercase tracking-[0.18em] mb-3">
            <Icon name="shield-check" className="w-3.5 h-3.5" />
            <span>Proven Across India</span>
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-900 tracking-tight">
            Trusted by thousands of Hotels, Restaurants and Clubs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From iconic heritage hotels and fine-dining chains to premier social clubs—leading hospitality brands run on LUCID every day.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex items-center justify-center flex-wrap gap-2">
            {FILTERS.map((item) => {
              const isActive = filter === item.key
              return (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => setFilter(item.key)}
                  data-client-filter={item.key}
                  className={`client-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${isActive ? 'bg-navy-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900'}`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Continuously scrolling client logo carousel (right-to-left) */}
        <div
          ref={trackRef}
          id="client-logos-grid"
          tabIndex={0}
          aria-label="Client brands carousel, scrolling continuously; swipe or use arrow keys to browse"
          className="flex gap-5 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar pb-2 cursor-grab active:cursor-grabbing select-none outline-none focus-visible:ring-2 focus-visible:ring-crimson-500/40 rounded-2xl"
        >
          {Array.from({ length: repeats }, (_, setIndex) => (
            <Fragment key={setIndex}>
              {list.map((brand) => (
                <div
                  key={`${setIndex}-${brand.name}`}
                  aria-hidden={setIndex > 0}
                  className="client-badge-card group shrink-0 w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.6rem)] flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl hover:bg-slate-50/90 transition-all duration-300"
                >
                  <div className="client-circle w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white shadow-soft transition-all duration-300 overflow-hidden p-1" dangerouslySetInnerHTML={{ __html: brand.svg }}></div>
                  <p className="mt-3 font-display font-bold text-xs sm:text-sm text-navy-900 leading-snug line-clamp-1">{brand.name}</p>
                  <span className={`mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTagColor(brand.category)} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    {brand.category}
                  </span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
        <p className="mt-2 text-center text-[11px] font-medium text-slate-400 sm:hidden">Swipe to explore all brands &rarr;</p>
      </div>
    </section>
  )
}
