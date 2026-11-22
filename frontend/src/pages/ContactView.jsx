import { useApp } from '../context/AppContext'
import { CONTACT } from '../data/contactData'
import Icon from '../components/ui/Icon'

const channels = [
    {
        icon: 'phone-call',
        title: 'Contact Sales',
        value: CONTACT.salesPhone,
        href: CONTACT.salesHref,
        note: 'Talk to our team about demos, pricing and implementation.',
        tone: 'bg-crimson-600',
    },
    {
        icon: 'headset',
        title: '24/7 Customer Support',
        value: CONTACT.supportPhone,
        href: CONTACT.supportHref,
        note: 'Round-the-clock help for live properties and existing clients.',
        tone: 'bg-navy-900',
    },
    {
        icon: 'mail',
        title: 'Email Us',
        value: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
        note: 'Send your requirements and we will reply within one business day.',
        tone: 'bg-emerald-600',
    },
]

export default function ContactView() {
    const { openDemoModal, openChatWithPrompt } = useApp()

    return (
        <main id="view-contact" className="view-fade pt-[60px] sm:pt-[68px]">
            {/* Contact Hero */}
            <section className="relative bg-navy-900 text-white pt-14 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
                <div className="absolute -top-28 -right-28 w-[420px] h-[420px] bg-crimson-600/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-32 -left-24 w-[380px] h-[380px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-crimson-500/15 text-crimson-300 text-xs font-bold uppercase tracking-[0.18em] mb-5">
                        <Icon name="phone-call" className="w-3.5 h-3.5" />
                        Contact Us
                    </span>
                    <h1 className="font-display font-extrabold text-3xl sm:text-5xl xl:text-6xl leading-[1.12] tracking-tight">
                        Let&apos;s talk about{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-500 via-red-400 to-amber-300">
                            your property
                        </span>
                    </h1>
                    <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Whether you run a hotel, restaurant, club or food court, our Bengaluru team is ready to walk you through LUCID and help you choose the right setup.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href={CONTACT.salesHref}
                            className="inline-flex items-center gap-2 rounded-xl bg-crimson-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-crimson-700 hover:shadow-glow transition-all"
                        >
                            <Icon name="phone-call" className="w-4 h-4" />
                            <span>Call {CONTACT.salesPhone}</span>
                        </a>
                        <button
                            type="button"
                            onClick={() => openDemoModal()}
                            className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-all"
                        >
                            <Icon name="calendar-check" className="w-4 h-4" />
                            <span>Book a Free Demo</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Channels */}
            <section className="py-14 sm:py-16 bg-white">
                <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {channels.map((channel) => (
                            <a
                                key={channel.title}
                                href={channel.href}
                                className="group p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-crimson-300 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 ${channel.tone}`}>
                                    <Icon name={channel.icon} className="w-5 h-5" />
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{channel.title}</p>
                                <p className="mt-2 font-display font-extrabold text-xl sm:text-2xl text-navy-900 group-hover:text-crimson-600 transition-colors">
                                    {channel.value}
                                </p>
                                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{channel.note}</p>
                                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-crimson-600">
                                    Get in touch
                                    <Icon name="arrow-right" className="w-3.5 h-3.5" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo + Visit */}
            <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
                <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        <div className="p-7 sm:p-9 rounded-3xl bg-navy-900 text-white relative overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-crimson-600/20 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative">
                                <span className="inline-block px-3.5 py-1 rounded-full bg-crimson-500/15 text-crimson-300 text-xs font-bold uppercase tracking-widest mb-4">
                                    See It In Action
                                </span>
                                <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                                    Book a guided walkthrough
                                </h2>
                                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
                                    We will map your front desk, restaurant or club workflows to LUCID and show you exactly how the platform fits your property.
                                </p>
                                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                                    {[
                                        'A tailored demo for your property type',
                                        'Cloud, Hybrid or On-Premise guidance',
                                        'Implementation and support Q&A',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2.5">
                                            <Icon name="check-circle-2" className="w-4 h-4 text-crimson-400 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <button
                                        type="button"
                                        onClick={() => openDemoModal()}
                                        className="inline-flex items-center gap-2 rounded-xl bg-crimson-600 px-5 py-3 text-sm font-semibold text-white hover:bg-crimson-700 transition-colors"
                                    >
                                        <span>Book a Free Demo</span>
                                        <Icon name="arrow-right" className="w-4 h-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => openChatWithPrompt('I would like to book a LUCID demo for my property.')}
                                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                                    >
                                        <Icon name="message-square-text" className="w-4 h-4" />
                                        <span>Ask LUCID AI</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-soft flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-xl bg-crimson-50 text-crimson-600 flex items-center justify-center mb-5">
                                <Icon name="map-pin" className="w-5 h-5" />
                            </div>
                            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-900 tracking-tight">
                                Visit our Bengaluru headquarters
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                                {CONTACT.address}
                            </p>
                            <div className="mt-7 space-y-3 text-sm">
                                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                                    <Icon name="headset" className="w-4 h-4 text-crimson-600 shrink-0" />
                                    <span className="text-slate-600">
                                        Support:{' '}
                                        <a href={CONTACT.supportHref} className="font-semibold text-navy-900 hover:text-crimson-600">
                                            {CONTACT.supportPhone}
                                        </a>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                                    <Icon name="mail" className="w-4 h-4 text-crimson-600 shrink-0" />
                                    <span className="text-slate-600">
                                        Email:{' '}
                                        <a href={`mailto:${CONTACT.email}`} className="font-semibold text-navy-900 hover:text-crimson-600">
                                            {CONTACT.email}
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100">
                                <iframe
                                    title="LUCID Bengaluru headquarters on Google Maps"
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&z=15&output=embed`}
                                    className="h-64 w-full sm:h-72"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson-600 hover:text-crimson-700"
                            >
                                <Icon name="map-pin" className="w-4 h-4" />
                                <span>Get directions</span>
                                <Icon name="arrow-right" className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
