import Icon from '../ui/Icon'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">Client Stories</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-navy-900 tracking-tight">
            Long-Term Partnerships Built on Reliability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Testimonial 1: Ajay Pai */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                "We have been associated with LUCID IT Solutions for over <strong>17 years</strong> across our hotels and restaurants. Their software is remarkably stable, adapts to our growing multi-property requirements, and their support team is always proactive and dependable."
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-navy-900 text-white font-display font-bold flex items-center justify-center text-sm shrink-0">AP</div>
              <div>
                <p className="font-display font-bold text-navy-900 text-sm">Ajay Pai</p>
                <p className="text-xs text-slate-500">Managing Director, Pai Group of Hotels</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2: Vartika Arora */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                "Running a high-volume resto-bar like Boho demands fast billing, smooth Android captain ordering, and tight inventory control. LUCID gave us all of that with zero downtime during peak weekend rushes. Truly a game-changer for our operations."
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-crimson-600 text-white font-display font-bold flex items-center justify-center text-sm shrink-0">VA</div>
              <div>
                <p className="font-display font-bold text-navy-900 text-sm">Vartika Arora</p>
                <p className="text-xs text-slate-500">Owner, Boho</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3: Rajesh Rajaram */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
                <Icon name="star" className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                "What sets LUCID apart is their deep understanding of hospitality accounting and backend ERP. From automated aggregator orders to real-time owner reports on mobile, everything works seamlessly with stellar 24/7 customer support."
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-emerald-600 text-white font-display font-bold flex items-center justify-center text-sm shrink-0">RR</div>
              <div>
                <p className="font-display font-bold text-navy-900 text-sm">Rajesh Rajaram</p>
                <p className="text-xs text-slate-500">Hospitality Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
