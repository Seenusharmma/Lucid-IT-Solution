import { useEffect, useState } from 'react'
import { useApp } from '../../context/AppContext'
import Icon from '../ui/Icon'

const solutionOptions = [
    'Hotel Management (PMS)',
    'Restaurant POS & ERP',
    'LUCID Club ERP',
    'Food Court Software',
]

const preselectMap = {
    pms: 'Hotel Management (PMS)',
    pos: 'Restaurant POS & ERP',
    club: 'LUCID Club ERP',
    foodcourt: 'Food Court Software',
}

const initialForm = {
    fullName: '',
    phone: '',
    email: '',
    property: '',
    deployment: 'Hybrid (Online + Offline)',
}

function resolvePreselect(preselect) {
    if (!preselect) return solutionOptions[0]
    if (preselectMap[preselect]) return preselectMap[preselect]
    if (solutionOptions.includes(preselect)) return preselect
    return solutionOptions[0]
}

export default function DemoModal() {
    const { demoModal = { open: false, preselect: null }, closeDemoModal } = useApp()
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState(initialForm)
    const [solution, setSolution] = useState(() => resolvePreselect(demoModal.preselect))

    useEffect(() => {
        if (!demoModal.open) return undefined
        document.body.classList.add('overflow-hidden')
        return () => document.body.classList.remove('overflow-hidden')
    }, [demoModal.open])

    const handleChange = (field) => (event) => {
        setForm((previous) => ({ ...previous, [field]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <div
            id="demo-modal"
            onClick={(event) => {
                if (event.target === event.currentTarget) closeDemoModal()
            }}
            className={`fixed inset-0 z-50 items-center justify-center p-3 sm:p-4 bg-navy-950/70 backdrop-blur-sm ${demoModal.open ? 'flex' : 'hidden'}`}
        >
            <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto custom-scroll shadow-2xl border border-slate-200 view-fade">
                <div className="bg-navy-900 px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-white sticky top-0 z-10">
                    <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl">Book a Free Personalized Demo</h3>
                        <p className="text-xs text-slate-300 mt-0.5">See how LUCID streamlines your hospitality operations</p>
                    </div>
                    <button
                        type="button"
                        onClick={closeDemoModal}
                        className="p-2 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <Icon name="x" className="w-5 h-5" />
                    </button>
                </div>

                {/* Form View */}
                <form
                    id="demo-form"
                    onSubmit={handleSubmit}
                    className={`p-5 sm:p-6 space-y-4 ${submitted ? 'hidden' : ''}`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                            <input
                                type="text"
                                required
                                value={form.fullName}
                                onChange={handleChange('fullName')}
                                placeholder="e.g., Arjun Mehta"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                            <input
                                type="tel"
                                required
                                value={form.phone}
                                onChange={handleChange('phone')}
                                placeholder="+91 98XXX XXXXX"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 outline-none"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email *</label>
                            <input
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange('email')}
                                placeholder="name@hotel.com"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Property / Business Name *</label>
                            <input
                                type="text"
                                required
                                value={form.property}
                                onChange={handleChange('property')}
                                placeholder="e.g., Grand Heritage Hotel"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 outline-none"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Solution of Interest</label>
                            <select
                                id="demo-solution-select"
                                value={solution}
                                onChange={(event) => setSolution(event.target.value)}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-crimson-500 outline-none"
                            >
                                {solutionOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Preferred Deployment</label>
                            <select
                                value={form.deployment}
                                onChange={handleChange('deployment')}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-crimson-500 outline-none"
                            >
                                <option>Hybrid (Online + Offline)</option>
                                <option>Cloud SaaS</option>
                                <option>On-Premise</option>
                                <option>Not Sure — Advise Me</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="w-full py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm shadow-md transition-all">
                        Request Free Demo
                    </button>
                </form>

                {/* Success Confirmation View */}
                <div id="demo-success" className={`p-7 sm:p-8 text-center space-y-4 ${submitted ? '' : 'hidden'}`}>
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <Icon name="check-circle-2" className="w-9 h-9" />
                    </div>
                    <h4 className="font-display font-bold text-2xl text-navy-900">Demo Request Received!</h4>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                        Thank you! Our hospitality solutions specialist in Bengaluru will reach out within 2 business hours to confirm your personalized walkthrough.
                    </p>
                    <button
                        type="button"
                        onClick={closeDemoModal}
                        className="px-6 py-2.5 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-colors"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}
