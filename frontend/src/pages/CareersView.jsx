import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { jobsData } from '../data/jobsData'
import Icon from '../components/ui/Icon'

const filters = ['All', 'Engineering', 'Design', 'Support & Success', 'Sales']

const cultureItems = [
    {
        icon: 'trophy',
        iconClass: 'w-11 h-11 rounded-xl bg-navy-900 text-white flex items-center justify-center mb-4',
        title: '25+ Years Leadership',
        description: 'Work with a profitable, stable, domain-leading product company founded in 2001—built for long-term impact.',
    },
    {
        icon: 'globe',
        iconClass: 'w-11 h-11 rounded-xl bg-crimson-600 text-white flex items-center justify-center mb-4',
        title: 'Real-World Scale',
        description: 'Your code directly powers thousands of iconic hotels, pubs, microbreweries, and clubs across India.',
    },
    {
        icon: 'users',
        iconClass: 'w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4',
        title: 'Collaborative Team',
        description: 'Flat hierarchy, direct mentorship from senior architects, and ownership over features from day one.',
    },
    {
        icon: 'laptop',
        iconClass: 'w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-4',
        title: 'Hybrid Flexibility',
        description: 'Modern Jeevan Bima Nagar HQ in Bengaluru paired with flexible hybrid schedules and learning budgets.',
    },
]

export default function CareersView() {
    const { navigateTo, scrollToSection, openApplyModal } = useApp()
    const [activeFilter, setActiveFilter] = useState('All')
    const [expandedJobs, setExpandedJobs] = useState({})

    const filteredJobs = activeFilter === 'All'
        ? jobsData
        : jobsData.filter((job) => job.department === activeFilter)

    const toggleJobDetails = (id) => {
        setExpandedJobs((previous) => ({ ...previous, [id]: !previous[id] }))
    }

    return (
        <main id="view-careers" className="view-fade pt-[60px] sm:pt-[68px]">

            {/* Careers Hero Banner */}
            <section className="relative bg-navy-900 text-white pt-14 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
                <div className="absolute -top-24 right-0 w-96 h-96 bg-crimson-600/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>We're Hiring in Bengaluru</span>
                    </div>
                    <h1 className="font-display font-extrabold text-3xl sm:text-5xl xl:text-6xl tracking-tight max-w-4xl mx-auto leading-[1.12]">
                        Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-500 to-amber-300">Hospitality Tech</span> in Bengaluru
                    </h1>
                    <p className="mt-4 sm:mt-5 text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                        Join a passionate team of engineers, designers, and domain experts crafting mission-critical cloud &amp; hybrid software used by thousands of hotels, restaurants, and clubs every single day.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5 max-w-md sm:max-w-none mx-auto">
                        <button
                            type="button"
                            onClick={() => scrollToSection('open-positions')}
                            className="px-7 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white text-sm sm:text-base font-semibold shadow-glow transition-all flex items-center justify-center gap-2"
                        >
                            <span>View Open Positions ({jobsData.length})</span>
                            <Icon name="arrow-down" className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => navigateTo('home')}
                            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm sm:text-base font-semibold transition-all"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </section>

            {/* Company Culture Highlights */}
            <section className="py-14 sm:py-20 bg-white border-b border-slate-200/70">
                <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-crimson-600">Life at LUCID</span>
                        <h2 className="mt-2 font-display font-extrabold text-2xl sm:text-3xl text-navy-900">Why Engineers &amp; Creators Love Working Here</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {cultureItems.map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-crimson-200 transition-colors">
                                <div className={item.iconClass}>
                                    <Icon name={item.icon} className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-lg text-navy-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filterable Open Positions */}
            <section id="open-positions" className="py-14 sm:py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-10">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-crimson-600">Open Positions</span>
                            <h2 className="mt-1.5 font-display font-extrabold text-2xl sm:text-3xl text-navy-900">Find Your Next Role at LUCID</h2>
                        </div>

                        {/* Department Filter Pills (Horizontally scrollable on small screens) */}
                        <div className="flex overflow-x-auto sm:flex-wrap gap-2 pb-1 sm:pb-0 no-scrollbar">
                            {filters.map((filter) => {
                                const active = activeFilter === filter
                                return (
                                    <button
                                        key={filter}
                                        type="button"
                                        onClick={() => setActiveFilter(filter)}
                                        data-dept={filter}
                                        className={`job-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${active ? 'bg-navy-900 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:border-navy-900'}`}
                                    >
                                        {filter === 'All' ? `All (${jobsData.length})` : filter}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Job Cards Container */}
                    <div id="jobs-list" className="space-y-4">
                        {filteredJobs.map((job) => {
                            const expanded = Boolean(expandedJobs[job.id])
                            return (
                                <div key={job.id} className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-soft hover:border-crimson-200 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="space-y-2">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="px-2.5 py-0.5 rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold">{job.department}</span>
                                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                                    <Icon name="map-pin" className="w-3.5 h-3.5 text-crimson-500" /> {job.location}
                                                </span>
                                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                                    <Icon name="briefcase" className="w-3.5 h-3.5 text-slate-400" /> {job.experience} • {job.type}
                                                </span>
                                            </div>
                                            <h3 className="font-display font-bold text-lg sm:text-xl text-navy-900">{job.title}</h3>
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {job.tags.map((tag) => (
                                                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">{tag}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2.5 shrink-0 pt-2 md:pt-0">
                                            <button
                                                type="button"
                                                onClick={() => toggleJobDetails(job.id)}
                                                className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs sm:text-sm font-semibold transition-colors"
                                            >
                                                Details
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => openApplyModal(job.title)}
                                                className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        id={`job-details-${job.id}`}
                                        className={`mt-5 pt-5 border-t border-slate-100 space-y-3 text-sm text-slate-600 view-fade ${expanded ? '' : 'hidden'}`}
                                    >
                                        <p className="leading-relaxed">{job.summary}</p>
                                        <div>
                                            <p className="font-semibold text-navy-900 mb-2">Key Responsibilities:</p>
                                            <ul className="space-y-1.5 list-disc list-inside">
                                                {job.responsibilities.map((responsibility) => (
                                                    <li key={responsibility}>{responsibility}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </main>
    )
}
