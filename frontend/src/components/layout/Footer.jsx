import { useApp } from '../../context/AppContext'
import { CONTACT } from '../../data/contactData'
import Icon from '../ui/Icon'

const solutionLinks = [
    { label: 'Hotel PMS', key: 'pms' },
    { label: 'Restaurant POS & ERP', key: 'pos' },
    { label: 'LUCID Club ERP', key: 'club' },
    { label: 'Food Court Software', key: 'foodcourt' },
]

const companyLinks = [
    { label: 'Home', target: { view: 'home' } },
    { label: 'About LUCID', target: { view: 'about' } },
    { label: 'Contact Us', target: { view: 'contact' } },
    { label: 'Our Clients', target: { view: 'home', sectionId: 'trusted-clients' } },
    { label: 'FAQs', target: { view: 'home', sectionId: 'faq' } },
]

export default function Footer() {
    const { navigateTo, openDemoModal, setSolutionKey } = useApp()

    const handleSolution = (key) => {
        navigateTo('home', 'solutions')
        setSolutionKey(key)
    }

    const handleCompany = (target) => {
        if (target.sectionId) {
            navigateTo(target.view, target.sectionId)
        } else {
            navigateTo(target.view)
        }
    }

    return (
        <footer id="contact" className="bg-navy-950 text-slate-300 border-t border-white/10">
            <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

                    {/* Brand & About */}
                    <div className="sm:col-span-2 lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-2.5">
                            <img src="/Lucid.jpg" alt="" className="w-9 h-9 rounded-xl object-cover" />
                            <div className="flex flex-col leading-none">
                                <span className="font-display font-extrabold text-xl tracking-tight text-white">LUCID</span>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">IT Solutions Pvt. Ltd.</span>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                            Empowering hotels, resorts, restaurants, microbreweries, membership clubs, and food courts with reliable Cloud, Hybrid &amp; On-Premise hospitality ERP software since 2001.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => openDemoModal()}
                                className="px-4 py-2.5 rounded-lg bg-crimson-600 hover:bg-crimson-700 text-white text-xs font-semibold transition-colors"
                            >
                                Book a Free Demo
                            </button>
                            <button
                                type="button"
                                onClick={() => navigateTo('careers')}
                                className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
                            >
                                Join Our Team
                            </button>
                        </div>
                    </div>

                    {/* Solutions Links */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">Solutions</h4>
                        <ul className="space-y-2.5 text-sm">
                            {solutionLinks.map((link) => (
                                <li key={link.key}>
                                    <button type="button" onClick={() => handleSolution(link.key)} className="hover:text-crimson-400 transition-colors">{link.label}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2.5 text-sm">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <button type="button" onClick={() => handleCompany(link.target)} className="hover:text-crimson-400 transition-colors">{link.label}</button>
                                </li>
                            ))}
                            <li>
                                <button type="button" onClick={() => navigateTo('careers')} className="hover:text-crimson-400 transition-colors inline-flex items-center gap-1.5">
                                    <span>Careers</span>
                                    <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 rounded">Hiring</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Bengaluru HQ Contact Info */}
                    <div className="sm:col-span-2 lg:col-span-4 space-y-3.5">
                        <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">Bengaluru Headquarters</h4>
                        <div className="space-y-3 text-sm text-slate-400">
                            <div className="flex items-start gap-3">
                                <Icon name="map-pin" className="w-4 h-4 text-crimson-500 shrink-0 mt-1" />
                                <span>{CONTACT.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon name="headset" className="w-4 h-4 text-crimson-500 shrink-0" />
                                <span>24/7 Support: <a href={CONTACT.supportHref} className="text-white hover:text-crimson-400 font-medium">{CONTACT.supportPhone}</a></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon name="phone" className="w-4 h-4 text-crimson-500 shrink-0" />
                                <span>Contact Sales: <a href={CONTACT.salesHref} className="text-white hover:text-crimson-400 font-medium">{CONTACT.salesPhone}</a></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon name="mail" className="w-4 h-4 text-crimson-500 shrink-0" />
                                <span>Email: <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-crimson-400 font-medium">{CONTACT.email}</a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
                    <p>© 2026 LUCID IT Solutions Pvt. Ltd. All rights reserved.</p>
                    <p>Modern Enterprise SaaS Redesign • Crafted for Hospitality Excellence</p>
                </div>
            </div>
        </footer>
    )
}
