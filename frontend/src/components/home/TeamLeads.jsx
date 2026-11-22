import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { TEAM_LEADS } from '../../data/aboutData'
import Icon from '../ui/Icon'

export default function TeamLeads() {
  const [activeTab, setActiveTab] = useState('all')

  const departments = [
    { key: 'all', label: 'All Leadership' },
    { key: 'tech', label: 'Engineering & Tech' },
    { key: 'product', label: 'Product & Design' },
    { key: 'solutions', label: 'Hospitality Ops' },
  ]

  const filteredLeads = TEAM_LEADS.filter((lead) => {
    if (activeTab === 'tech') return lead.id === 'rajesh-r' || lead.id === 'sneha-k'
    if (activeTab === 'product') return lead.id === 'ananya-s'
    if (activeTab === 'solutions') return lead.id === 'vikram-r'
    return true
  })

  return (
    <section id="team-leads" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70 relative overflow-hidden">
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-crimson-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-bold uppercase tracking-widest mb-3">
              <Icon name="users" className="w-3.5 h-3.5" />
              Leadership & Domain Leads
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-navy-900 tracking-tight">
              The minds driving <span className="text-crimson-600">LUCID</span> forward
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Our multidisciplinary leads unite seasoned hospitality operators, distributed systems engineers, and product designers dedicated to crafting rock-solid software for hotels, restaurants, and clubs.
            </p>
          </div>

          {/* Quick Department Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept.key}
                type="button"
                onClick={() => setActiveTab(dept.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === dept.key
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-navy-900'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredLeads.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-soft hover:shadow-navy-lg hover:border-crimson-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden"
            >
              {/* Card Top / Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Graceful fallback to UI avatar
                    e.currentTarget.onerror = null
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      member.name
                    )}&background=0A192F&color=fff&size=512&bold=true`
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Experience / Role Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-navy-900/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white shadow-sm border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse" />
                    {member.badge}
                  </span>
                </div>

                {/* Social Quick Link */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn profile`}
                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-crimson-600 hover:text-white text-navy-900 flex items-center justify-center shadow-sm backdrop-blur-sm transition-all duration-200 transform translate-y-1 group-hover:translate-y-0"
                  >
                    <FaLinkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-navy-900 hover:text-white text-navy-900 flex items-center justify-center shadow-sm backdrop-blur-sm transition-all duration-200 transform translate-y-1 group-hover:translate-y-0"
                  >
                    <Icon name="mail" className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Department pill at bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <span className="text-[11px] font-medium text-slate-200 drop-shadow-sm flex items-center gap-1 truncate">
                    <Icon name="building-2" className="w-3 h-3 text-crimson-400 shrink-0" />
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-display font-bold text-lg text-navy-900 group-hover:text-crimson-600 transition-colors tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-crimson-600 tracking-wider uppercase mt-1">
                    {member.position}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Skill / Focus Area Tags */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-medium text-slate-600 group-hover:border-slate-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout / Join Us Strip */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 shadow-navy-lg">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-crimson-600/20 text-crimson-400 border border-crimson-500/30 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <Icon name="briefcase" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg">Want to build the future of hospitality tech?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                We are always looking for passionate engineers, architects, and hospitality specialists to join our Bengaluru office.
              </p>
            </div>
          </div>
          <a
            href="mailto:careers@luciditsolutions.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-glow transition-all whitespace-nowrap shrink-0"
          >
            <span>Explore Careers</span>
            <Icon name="arrow-right" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
