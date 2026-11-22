import { useEffect, useRef, useState } from 'react'
import { useApp } from '../../context/AppContext'
import Icon from '../ui/Icon'

const defaultRole = 'Full Stack Developer'

export default function ApplyModal() {
    const { applyModal = { open: false, role: null }, closeApplyModal } = useApp()
    const [submitted, setSubmitted] = useState(false)
    const [resumeName, setResumeName] = useState('Click to upload your resume')
    const formRef = useRef(null)
    const role = applyModal.role || defaultRole

    useEffect(() => {
        if (!applyModal.open) return undefined
        document.body.classList.add('overflow-hidden')
        return () => document.body.classList.remove('overflow-hidden')
    }, [applyModal.open])

    const handleResumeChange = (event) => {
        const file = event.target.files && event.target.files[0]
        setResumeName(file ? `Selected: ${file.name}` : 'Click to upload your resume')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <div
            id="apply-modal"
            onClick={(event) => {
                if (event.target === event.currentTarget) closeApplyModal()
            }}
            className={`fixed inset-0 z-50 items-center justify-center p-3 sm:p-4 bg-navy-950/70 backdrop-blur-sm ${applyModal.open ? 'flex' : 'hidden'}`}
        >
            <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto custom-scroll shadow-2xl border border-slate-200 view-fade">
                <div className="bg-navy-900 px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-white sticky top-0 z-10">
                    <div className="pr-2">
                        <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">Applying For</span>
                        <h3 id="apply-role-title" className="font-display font-bold text-base sm:text-xl mt-0.5">{role}</h3>
                    </div>
                    <button
                        type="button"
                        onClick={closeApplyModal}
                        className="p-2 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                        aria-label="Close modal"
                    >
                        <Icon name="x" className="w-5 h-5" />
                    </button>
                </div>

                {/* Application Form */}
                <form
                    id="apply-form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className={`p-5 sm:p-6 space-y-4 ${submitted ? 'hidden' : ''}`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                            <input type="text" required placeholder="Your full name" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-crimson-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                            <input type="email" required placeholder="you@email.com" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-crimson-500 outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Portfolio / GitHub / LinkedIn URL *</label>
                        <input type="url" required placeholder="https://github.com/yourusername" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-crimson-500 outline-none" />
                    </div>

                    {/* Resume File Picker UI */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Resume / CV (PDF or DOCX) *</label>
                        <label htmlFor="resume-upload" className="flex flex-col items-center justify-center w-full p-5 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 hover:bg-slate-100 hover:border-crimson-400 cursor-pointer transition-all text-center">
                            <Icon name="upload-cloud" className="w-7 h-7 text-crimson-600 mb-2" />
                            <span id="resume-filename" className="text-xs font-semibold text-navy-900 break-all">{resumeName}</span>
                            <span className="text-[11px] text-slate-500 mt-0.5">PDF, DOC, DOCX up to 5MB</span>
                            <input
                                id="resume-upload"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                required
                                onChange={handleResumeChange}
                                className="hidden"
                            />
                        </label>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Cover Note</label>
                        <textarea rows="3" placeholder="Tell us briefly why you'd like to build hospitality tech at LUCID..." className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-crimson-500 outline-none resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm shadow-md transition-all">
                        Submit Application
                    </button>
                </form>

                {/* Success View */}
                <div id="apply-success" className={`p-7 sm:p-8 text-center space-y-4 ${submitted ? '' : 'hidden'}`}>
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <Icon name="party-popper" className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-bold text-2xl text-navy-900">Application Submitted!</h4>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                        We've received your application for <strong id="apply-success-role" className="text-navy-900">{role}</strong>. Our Talent Acquisition team in Bengaluru will review your profile and connect shortly.
                    </p>
                    <button
                        type="button"
                        onClick={closeApplyModal}
                        className="px-6 py-2.5 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-colors"
                    >
                        Back to Careers
                    </button>
                </div>
            </div>
        </div>
    )
}
