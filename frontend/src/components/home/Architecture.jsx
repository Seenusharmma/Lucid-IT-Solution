import Icon from '../ui/Icon'

export default function Architecture() {
  return (
    <section id="architecture" className="py-16 sm:py-20 lg:py-28 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold uppercase tracking-widest mb-3">Why LUCID Architecture</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-navy-900 tracking-tight">
              Engineered for Zero Downtime &amp; Complete Operational Control
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base">
            Built from 25+ years of real hospitality floor experience—delivering rock-solid reliability across Cloud, Hybrid, and On-Premise deployments.
          </p>
        </div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">

          {/* Bento Card 1: Enterprise-Wide ERP (Large) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-navy-900 text-white p-6 sm:p-9 relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-crimson-600/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-crimson-600 flex items-center justify-center mb-5 shadow-glow">
                  <Icon name="layers" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-3xl mb-3">True Enterprise-Wide ERP</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  Go far beyond standalone POS or PMS. LUCID unifies Front Desk, Billing, Recipe Costing, Central Kitchen Inventory, Procurement, Payroll, and Financial Accounting in one cohesive platform.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-slate-200">Multi-Property Control</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-slate-200">Recipe &amp; Pilferage Control</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-slate-200">GST &amp; Financial Accounting</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Flexible Deployment */}
          <div className="md:col-span-3 lg:col-span-2 rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-crimson-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Icon name="cloud-cog" className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-navy-900 mb-2.5">Hybrid, Cloud or On-Premise</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Never lose a bill when Wi-Fi drops. Our <strong>Hybrid architecture</strong> runs seamlessly offline on your local server and auto-syncs to the cloud—or choose pure Cloud SaaS or On-Premise.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Icon name="check-circle-2" className="w-4 h-4" />
              <span>Zero Internet Dependency</span>
            </div>
          </div>

          {/* Bento Card 3: Owner's Mobile App */}
          <div className="md:col-span-3 lg:col-span-2 rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-crimson-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                <Icon name="smartphone" className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-navy-900 mb-2.5">Owner's Mobile App</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Monitor live occupancy, outlet-wise operations, active tables, void/discount alerts, and daily MIS dashboards right from your smartphone anywhere in the world.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-navy-900">
              <Icon name="trending-up" className="w-4 h-4 text-amber-600" />
              <span>Real-Time Executive Analytics</span>
            </div>
          </div>

          {/* Bento Card 4: Powerful Integrations */}
          <div className="md:col-span-3 lg:col-span-2 rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:border-crimson-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                <Icon name="plug-zap" className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-navy-900 mb-2.5">Powerful Integrations</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ready connectors for Swiggy, Zomato, OTA Channel Managers, UPI/Card Payment Gateways, CRM Loyalty engines, Door Locks, and Tally Accounting.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-blue-700">
              <Icon name="link" className="w-4 h-4" />
              <span>50+ Ecosystem Integrations</span>
            </div>
          </div>

          {/* Bento Card 5: 24/7 Superior Support */}
          <div className="md:col-span-3 lg:col-span-2 rounded-3xl bg-gradient-to-br from-crimson-600 to-crimson-700 text-white p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                <Icon name="shield-check" className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl mb-2.5">24/7 Superior Support</h3>
              <p className="text-crimson-100 text-sm leading-relaxed">
                Hospitality never sleeps, and neither does our support desk. Get direct access to experienced Bengaluru-based support engineers 24 hours a day, 365 days a year.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/20 flex items-center gap-2 text-xs font-semibold text-white">
              <Icon name="phone-call" className="w-4 h-4" />
              <span>+91 80 4241 1000</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
