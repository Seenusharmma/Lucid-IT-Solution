import { useState } from 'react'
import Icon from '../ui/Icon'
import { faqsData } from '../../data/faqsData'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx))
  }

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-navy-900 text-xs font-bold uppercase tracking-widest mb-3">Frequently Asked Questions</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-navy-900 tracking-tight">
            Everything You Need to Know
          </h2>
        </div>

        <div id="faq-container" className="space-y-3.5">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/50 overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${idx}`}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="font-display font-bold text-navy-900 text-sm sm:text-base">{faq.q}</span>
                  <span
                    id={`faq-icon-${idx}`}
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200${isOpen ? ' rotate-180 bg-crimson-50 text-crimson-600 border-crimson-200' : ''}`}
                  >
                    <Icon name="chevron-down" className="w-4 h-4" />
                  </span>
                </button>
                <div
                  id={`faq-body-${idx}`}
                  className={`px-5 sm:px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white${isOpen ? '' : ' hidden'}`}
                >
                  {faq.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
