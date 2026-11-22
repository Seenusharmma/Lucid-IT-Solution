import { useApp } from '../../context/AppContext'

export default function CtaBanner() {
  const { openDemoModal, scrollToSection } = useApp()

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 text-white p-7 sm:p-12 lg:p-14 relative overflow-hidden shadow-navy-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-crimson-600/25 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 text-center lg:text-left max-w-2xl">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-3">
              Ready to modernize your hospitality operations?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
              Schedule a personalized walkthrough with our Bengaluru product specialists and see LUCID tailored for your property.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto">
            <button
              type="button"
              onClick={openDemoModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white text-sm sm:text-base font-semibold shadow-glow transition-all whitespace-nowrap"
            >
              Book a Free Demo
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm sm:text-base font-semibold transition-all whitespace-nowrap"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
