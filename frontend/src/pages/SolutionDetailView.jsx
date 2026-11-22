import { useApp } from '../context/AppContext'
import { solutionsData } from '../data/solutionsData'
import Icon from '../components/ui/Icon'

const DETAIL_KEYS = ['pms', 'pos', 'club']
const FEATURE_ICONS = ['check-circle-2', 'sparkles', 'shield-check', 'layers']

function SolutionImage({ src, alt, className = '', ...props }) {
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={className}
      decoding="async"
      onError={(event) => {
        event.currentTarget.style.opacity = '0'
      }}
    />
  )
}

export default function SolutionDetailView() {
  const { solutionKey, navigateTo, openDemoModal, openChatWithPrompt, openSolutionDetail } = useApp()
  const sol = solutionsData[solutionKey]

  if (!sol || !sol.image) {
    return (
      <main id="view-solution" className="view-fade pt-[60px] sm:pt-[68px]">
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="font-display font-extrabold text-3xl text-navy-900">Solution not found</h1>
          <button
            type="button"
            onClick={() => navigateTo('home', 'solutions')}
            className="mt-6 rounded-xl bg-crimson-600 px-5 py-3 text-sm font-semibold text-white hover:bg-crimson-700"
          >
            Back to all solutions
          </button>
        </div>
      </main>
    )
  }

  const otherSolutions = DETAIL_KEYS.filter((key) => key !== solutionKey).map((key) => ({
    key,
    sol: solutionsData[key],
  }))

  return (
    <main id="view-solution" className="view-fade pt-[60px] sm:pt-[68px]">
      {/* Image Hero */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-navy-950 text-white">
        <SolutionImage
          src={sol.image}
          alt={sol.imageAlt}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>

        <div className="relative mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <button
            type="button"
            onClick={() => navigateTo('home', 'solutions')}
            className="mb-7 inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-white"
          >
            <Icon name="arrow-right" className="h-3.5 w-3.5 rotate-180" />
            <span>All solutions</span>
          </button>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-crimson-300">
              <Icon name="sparkles" className="h-3.5 w-3.5" />
              {sol.badge}
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {sol.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
              {sol.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openDemoModal(sol.demoValue)}
                className="inline-flex items-center gap-2 rounded-xl bg-crimson-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-crimson-700 hover:shadow-glow"
              >
                <span>Book a Free Demo</span>
                <Icon name="arrow-right" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15"
              >
                <Icon name="phone-call" className="h-4 w-4" />
                <span>Talk to Sales</span>
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Icon name="award" className="h-4 w-4 text-crimson-400" />
                25+ years of domain focus
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="headset" className="h-4 w-4 text-crimson-400" />
                24/7 Bengaluru support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Image Collage */}
      <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[1440px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-bold uppercase tracking-widest mb-4">
              Overview
            </span>
            <h2 className="font-display font-extrabold text-2xl text-navy-900 tracking-tight sm:text-4xl">
              Built around the way your team actually works
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              {sol.detailIntro}
            </p>
            <ul className="mt-7 space-y-3.5">
              {sol.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => openChatWithPrompt(`Tell me more about ${sol.title}`)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-slate-200"
            >
              <Icon name="sparkles" className="h-4 w-4 text-crimson-600" />
              Ask AI About This
            </button>
          </div>

          <div className="relative lg:pl-8">
            <div className="h-[320px] overflow-hidden rounded-3xl bg-navy-900 shadow-navy-lg sm:h-[420px]">
              <SolutionImage
                src={sol.image}
                alt={sol.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-2 hidden h-40 w-40 overflow-hidden rounded-2xl border-4 border-white bg-slate-200 shadow-xl sm:block lg:-left-8">
              <SolutionImage
                src={sol.gallery[0].src}
                alt={sol.gallery[0].alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold uppercase tracking-widest mb-3">
              Key Capabilities
            </span>
            <h2 className="font-display font-extrabold text-2xl text-navy-900 tracking-tight sm:text-4xl">
              Everything you need, in one connected suite
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sol.features.map((feature, index) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-crimson-200"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Icon name={FEATURE_ICONS[index % FEATURE_ICONS.length]} className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-crimson-600/20 blur-3xl pointer-events-none"></div>
        <div className="relative mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-crimson-500/15 text-crimson-300 text-xs font-bold uppercase tracking-widest mb-3">
              Why LUCID
            </span>
            <h2 className="font-display font-extrabold text-2xl tracking-tight sm:text-4xl">
              Outcomes your team will feel every day
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {sol.outcomes.map((outcome) => (
              <div key={outcome.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-crimson-600 text-white">
                  <Icon name={outcome.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg">{outcome.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{outcome.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {sol.highlights.map((highlight) => (
              <div key={highlight.label} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{highlight.label}</p>
                <p className="mt-1.5 font-display font-bold text-sm text-white sm:text-base">{highlight.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-bold uppercase tracking-widest mb-3">
              A Closer Look
            </span>
            <h2 className="font-display font-extrabold text-2xl text-navy-900 tracking-tight sm:text-4xl">
              Designed for real hospitality floors
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {sol.gallery.map((item) => (
              <div key={item.src} className="group overflow-hidden rounded-3xl bg-slate-200 shadow-soft">
                <SolutionImage
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
                />
                <div className="bg-slate-50 px-5 py-4 text-sm font-semibold text-navy-900">{item.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore + Final CTA */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[1440px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-7 text-white sm:p-9">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-crimson-600/25 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <h2 className="font-display font-extrabold text-2xl tracking-tight sm:text-3xl">
                See {sol.title} on your own property
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                We will map your workflows and show you exactly how LUCID fits your operation. No generic slides — just your property, your team and your questions.
              </p>
              <button
                type="button"
                onClick={() => openDemoModal(sol.demoValue)}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-crimson-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-700"
              >
                <span>Book a Free Demo</span>
                <Icon name="arrow-right" className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9">
            <h3 className="font-display font-extrabold text-xl text-navy-900 sm:text-2xl">Explore other solutions</h3>
            <div className="mt-6 space-y-3">
              {otherSolutions.map(({ key, sol: other }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => openSolutionDetail(key)}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200/80 p-3 text-left transition-all hover:border-crimson-200 hover:bg-slate-50"
                >
                  <div className="h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-200">
                    <SolutionImage
                      src={other.image}
                      alt={other.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display font-bold text-sm text-navy-900">{other.title}</p>
                    <p className="mt-1 line-clamp-1 text-xs text-slate-500">{other.badge}</p>
                  </div>
                  <Icon name="arrow-right" className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-crimson-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
