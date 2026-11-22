import { useEffect, useState } from 'react'
import { useApp } from '../../context/AppContext'
import { CONTACT } from '../../data/contactData'
import Icon from '../ui/Icon'

const desktopLinks = [
    { key: 'about', label: 'About', navigate: () => ({ view: 'about' }) },
    { key: 'careers', label: 'Careers', navigate: () => ({ view: 'careers' }) },
    { key: 'contact', label: 'Contact', navigate: () => ({ view: 'contact' }) },
]

export default function Navbar() {
    const { view, activeNav, navigateTo, openDemoModal } = useApp()
    const [drawerOpen, setDrawerOpen] = useState(false)

    useEffect(() => {
        if (!drawerOpen) return undefined
        document.body.classList.add('overflow-hidden')
        return () => document.body.classList.remove('overflow-hidden')
    }, [drawerOpen])

    const closeDrawer = () => setDrawerOpen(false)
    const currentNav = view === 'home' ? activeNav : view

    const handleNavigate = (target) => {
        if (target.sectionId) {
            navigateTo(target.view, target.sectionId)
        } else {
            navigateTo(target.view)
        }
    }

    const navLinkClass = (key, extra = '') => [
        'nav-link px-4 py-1.5 rounded-full text-sm font-medium hover:text-navy-900 transition-all',
        currentNav === key ? 'bg-white text-navy-900 shadow-sm' : 'text-slate-600',
        extra,
    ].join(' ')

    return (
        <>
            <header id="navbar" className="fixed top-0 inset-x-0 z-40 glass-nav border-b border-slate-200/80 transition-all duration-300">
                <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-3 sm:py-3.5">
                        {/* Brand Logo */}
                        <a
                            href="#top"
                            onClick={(event) => {
                                event.preventDefault()
                                navigateTo('home')
                            }}
                            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
                        >
                            <img
                                src="/Lucid.jpg"
                                alt=""
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="flex flex-col leading-none">
                                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-crimson-600">LUCID</span>
                                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-900/70">IT Solutions</span>
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200/70">
                            {desktopLinks.map((link) => (
                                <button
                                    key={link.key}
                                    type="button"
                                    onClick={() => handleNavigate(link.navigate())}
                                    data-nav={link.key}
                                    className={navLinkClass(link.key, link.key === 'careers' || link.key === 'contact' ? 'flex items-center gap-1.5' : '')}
                                >
                                    {link.key === 'contact' && (
                                        <Icon name="phone-call" className="w-3.5 h-3.5 text-crimson-600" />
                                    )}
                                    {link.label}
                                    {link.key === 'careers' && (
                                        <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 rounded-full">Hiring</span>
                                    )}
                                </button>
                            ))}
                        </nav>

                        {/* Desktop Right Actions */}
                        <div className="hidden lg:flex items-center gap-3 shrink-0">
                            <a href={CONTACT.salesHref} className="text-sm font-medium text-slate-600 hover:text-navy-900 flex items-center gap-1.5 px-2 transition-colors">
                                <Icon name="phone" className="w-4 h-4 text-crimson-600" />
                                <span>{CONTACT.salesPhone}</span>
                            </a>
                            <button
                                type="button"
                                onClick={() => openDemoModal()}
                                className="px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white text-sm font-semibold shadow-md hover:shadow-glow transition-all duration-200 flex items-center gap-2 active:scale-[0.98]"
                            >
                                <span>Book a Free Demo</span>
                                <Icon name="arrow-right" className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden items-center gap-2">
                            <button
                                type="button"
                                onClick={() => openDemoModal()}
                                className="px-3.5 py-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white text-xs font-semibold shadow-sm active:scale-95 transition-all"
                            >
                                Free Demo
                            </button>
                            <button
                                id="mobile-menu-btn"
                                type="button"
                                onClick={() => setDrawerOpen(true)}
                                className="p-2.5 rounded-xl text-navy-900 hover:bg-slate-100 border border-slate-200/70 focus:outline-none"
                                aria-label="Open Navigation Menu"
                            >
                                <Icon name="menu" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Slide-Over Navigation Drawer */}
            <div
                id="mobile-drawer-overlay"
                onClick={closeDrawer}
                className={`fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />
            <aside
                id="mobile-drawer"
                className={`fixed top-0 right-0 z-50 h-full w-[85vw] max-w-[340px] bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col lg:hidden ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Drawer Header */}
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/Lucid.jpg" alt="" className="w-8 h-8 rounded-lg object-cover" />
                        <span className="font-display font-extrabold text-lg text-crimson-600">LUCID</span>
                    </div>
                    <button
                        type="button"
                        onClick={closeDrawer}
                        className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-navy-900"
                        aria-label="Close Menu"
                    >
                        <Icon name="x" className="w-5 h-5" />
                    </button>
                </div>

                {/* Drawer Links */}
                <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
                    <button type="button" onClick={() => { handleNavigate({ view: 'about' }); closeDrawer() }} className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold text-navy-900 hover:bg-slate-100 transition-colors">
                        <Icon name="building-2" className="w-4 h-4 text-crimson-600" />
                        <span>About</span>
                    </button>
                    <button type="button" onClick={() => { handleNavigate({ view: 'careers' }); closeDrawer() }} className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-navy-900 bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-100 transition-colors">
                        <span className="flex items-center gap-3">
                            <Icon name="briefcase" className="w-4 h-4 text-emerald-600" />
                            <span>Careers</span>
                        </span>
                        <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-100 text-emerald-700 rounded-full">6 Open</span>
                    </button>
                    <button type="button" onClick={() => { handleNavigate({ view: 'contact' }); closeDrawer() }} className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-navy-900 hover:bg-slate-100 transition-colors">
                        <span className="flex items-center gap-3">
                            <Icon name="phone-call" className="w-4 h-4 text-crimson-600" />
                            <span>Contact</span>
                        </span>
                        <span className="text-xs font-medium text-slate-500">{CONTACT.salesPhone}</span>
                    </button>
                </div>

                {/* Drawer Bottom CTA */}
                <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50">
                    <button
                        type="button"
                        onClick={() => { closeDrawer(); openDemoModal() }}
                        className="w-full py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2"
                    >
                        <span>Book a Free Demo</span>
                        <Icon name="arrow-right" className="w-4 h-4" />
                    </button>
                    <a href={CONTACT.supportHref} className="w-full py-2.5 rounded-xl bg-white border border-slate-200 text-navy-900 text-xs font-semibold flex items-center justify-center gap-2">
                        <Icon name="headset" className="w-3.5 h-3.5 text-crimson-600" />
                        <span>24/7 Support: {CONTACT.supportPhone}</span>
                    </a>
                </div>
            </aside>
        </>
    )
}
