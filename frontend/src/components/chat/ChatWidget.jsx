import { useCallback, useEffect, useRef, useState } from 'react'
import { useApp } from '../../context/AppContext'
import Icon from '../ui/Icon'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`

const SYSTEM_INSTRUCTION = `You are the official AI Assistant for LUCID IT Solutions Pvt. Ltd. (lucidits.com) and this modern website redesign project.
Be helpful, concise, friendly, and professional (use short paragraphs or bullet points).

You are an expert on 3 core areas:
1. LUCID IT Solutions Pvt. Ltd. (Founded 2001, HQ in Bengaluru: #L-152, 7th Main, 8th Cross Rd, LIC Colony, Jeevan Bima Nagar, Bengaluru 560075; Support: +91 80 4241 1000; Sales: +91 98441 70386; Email: connect@lucidits.com):
   - Products:
     * Hotel Management Software (PMS): Channel Manager, Booking Engine, Front Desk, Housekeeping, Back-Office Accounting.
     * Restaurant POS & ERP: For restaurants, pubs, microbreweries, QSRs & chains; Swiggy/Zomato integrations, Android Captain Ordering, CRM & Loyalty, Recipe Costing & Accounting.
     * LUCID Club ERP: Membership management, RFID smart cards, Member Mobile App, Restaurant/Bar, Rooms, Subscriptions.
     * Food Court Software: Pre-paid smart cards, QR food ordering app, centralized vendor revenue sharing, high-speed POS.
   - Deployment Models: Hybrid (works 100% offline on local LAN with zero internet dependency + auto-syncs to cloud), Cloud SaaS, or On-Premise.
   - Trusted Clients: Pai Group of Hotels, Nandhana Palace, IntelliStay Hotels, Ebony Restaurant, WelcomHeritage Panjim Inn, Nagarjuna Andhra Style, Mango Hotels, Gufha, Hotel Jubilee Ridge, ASEAN On The Edge, Hotel Le Roi, Bangalore Heritage Club, BerryGroup Hotels, Shiv Sagar Veg. Restaurant, and Monarch.
   - Note: Custom quotes are tailored per property via "Book a Free Demo" or "Contact Sales" (we do not publish flat pricing on the website).

2. Open Careers at LUCID (Bengaluru):
   - 6 open full-time roles: Full Stack Developer (MERN/Next.js), UI/UX Designer, React Native Mobile Developer, Application Support Engineer, QA Automation/Test Engineer, and Regional Sales Executive (Hospitality SaaS).
   - Users can click "Careers" in the navbar to filter roles and apply with their resume directly.

3. This Website Redesign Project:
   - Built as a modern 2026 enterprise SaaS redesign of the legacy lucidits.com website for a frontend/product engineering interview showcase.
   - Key UX/UI upgrades: Elevated brand palette (Deep Navy #0A192F & LUCID Crimson #E63946), fully responsive mobile-to-4K layout with a slide-over mobile drawer, interactive Hospitality Command Center preview, a 15-brand filterable circular client logo showcase with crisp custom SVGs, tabbed product suite, Bento-grid architecture showcase, a brand-new dedicated Careers portal (missing on the original site), interactive Demo & Job Application modals, and this Gemini-powered AI project assistant.`

const welcomeText = "Hello! I'm the **LUCID AI Assistant**. Ask me anything about LUCID's hospitality software (PMS, POS, Club ERP), open Bengaluru careers, or the UX/UI improvements made in this website redesign!"
const clearedText = "Chat cleared! How can I help you with LUCID's hospitality solutions, Bengaluru careers, or this website redesign?"

const quickPrompts = [
    { label: 'LUCID POS & ERP', text: 'Tell me about LUCID POS & ERP' },
    { label: 'Hybrid Architecture', text: 'How does Hybrid mode work?' },
    { label: 'Open Careers', text: 'What roles are open in Careers?' },
    { label: 'Redesign Highlights', text: 'What improved in this redesign?' },
]

function getFallbackReply(query) {
    const q = query.toLowerCase()
    if (q.includes('hybrid') || q.includes('offline')) {
        return "**LUCID Hybrid Mode** gives you the best of both worlds:\n* Runs locally on your property's LAN server so billing, KOTs, and check-ins never stop even if the internet drops.\n* Automatically syncs real-time reports and backups to the cloud, powering the Owner's Mobile App."
    }
    if (q.includes('career') || q.includes('role') || q.includes('job') || q.includes('hiring')) {
        return "We currently have **6 open roles in Bengaluru**:\n* Full Stack Developer (MERN / Next.js)\n* UI/UX Designer\n* React Native Mobile Developer\n* Application Support Engineer\n* QA Automation / Test Engineer\n* Regional Sales Executive (Hospitality SaaS)\n\nClick **Careers** in the navigation menu to explore details and apply!"
    }
    if (q.includes('redesign') || q.includes('improv') || q.includes('project')) {
        return "This **2026 SaaS Redesign** elevates the legacy lucidits.com site with:\n* **Modern Visual Hierarchy**: Deep Navy (#0A192F) & Crimson (#E63946) brand palette, glassmorphic navigation, and full mobile-to-4K responsiveness.\n* **15-Brand Client Showcase**: Filterable circular logo showcase featuring Pai Group, Nandhana Palace, WelcomHeritage, Ebony, Monarch, and more.\n* **Interactive Product Suite**: Live Hospitality Command Center preview & tabbed solution explorer.\n* **Brand-New Careers Portal**: Filterable Bengaluru jobs portal with an interactive resume application modal.\n* **AI Assistant**: Embedded Gemini-powered chatbot for instant product & project Q&A."
    }
    return "**LUCID IT Solutions** (est. 2001, Bengaluru) provides end-to-end Cloud, Hybrid & On-Premise software for **Hotels (PMS)**, **Restaurants & Microbreweries (POS & ERP)**, **Membership Clubs (Club ERP)**, and **Food Courts**—backed by 24/7 support (+91 80 4241 1000). Click **Book a Free Demo** to schedule a tailored walkthrough!"
}

async function callGeminiWithBackoff(payload, retries = 3) {
    const delays = [1000, 2000, 4000]
    for (let i = 0; i <= retries; i++) {
        try {
            const response = await fetch(GEMINI_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            if (response.ok) {
                const data = await response.json()
                const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
                if (reply) return reply
            }
            if (i < retries) {
                await new Promise((res) => setTimeout(res, delays[i]))
            }
        } catch {
            if (i < retries) {
                await new Promise((res) => setTimeout(res, delays[i]))
            }
        }
    }
    return null
}

function renderInline(text, keyPrefix) {
    return String(text).split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
        if (/^\*\*[^*]+\*\*$/.test(part)) {
            return (
                <strong key={`${keyPrefix}-bold-${index}`} className="font-semibold text-navy-900">
                    {part.slice(2, -2)}
                </strong>
            )
        }
        return <span key={`${keyPrefix}-text-${index}`}>{part}</span>
    })
}

function FormattedMessage({ text }) {
    return (
        <>
            {String(text).split('\n').map((line, index) => {
                const bullet = line.match(/^\s*(?:\*|-)\s+(.*)$/)
                if (bullet) {
                    return (
                        <div key={`line-${index}`} className="flex items-start gap-1.5 mt-1">
                            <span className="text-crimson-600 font-bold">•</span>
                            <span>{renderInline(bullet[1], `line-${index}`)}</span>
                        </div>
                    )
                }
                if (line.trim() === '') {
                    return <div key={`line-${index}`} className="h-2" />
                }
                return <div key={`line-${index}`}>{renderInline(line, `line-${index}`)}</div>
            })}
        </>
    )
}

export default function ChatWidget() {
    const context = useApp()
    const { chatOpen, setChatOpen } = context
    const chatPrompt = context.chatPrompt
    const [messages, setMessages] = useState([{ id: 'welcome', role: 'model', text: welcomeText }])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const historyRef = useRef([])
    const loadingRef = useRef(false)
    const messagesRef = useRef(null)
    const inputRef = useRef(null)
    const idRef = useRef(0)
    const lastPromptRef = useRef(null)

    const nextId = () => `msg-${++idRef.current}`

    const sendMessage = useCallback(async (rawText) => {
        const text = String(rawText || '').trim()
        if (!text || loadingRef.current) return

        setInput('')
        setMessages((previous) => [...previous, { id: nextId(), role: 'user', text }])

        const history = [...historyRef.current, { role: 'user', parts: [{ text }] }]
        historyRef.current = history
        loadingRef.current = true
        setLoading(true)

        let aiReply = null
        if (apiKey) {
            aiReply = await callGeminiWithBackoff({
                contents: history,
                systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
            })
        }

        const finalReply = aiReply || getFallbackReply(text)
        historyRef.current = [...historyRef.current, { role: 'model', parts: [{ text: finalReply }] }]
        setMessages((previous) => [...previous, { id: nextId(), role: 'model', text: finalReply }])

        loadingRef.current = false
        setLoading(false)
        inputRef.current?.focus()
    }, [])

    useEffect(() => {
        if (chatOpen) inputRef.current?.focus()
    }, [chatOpen])

    useEffect(() => {
        const container = messagesRef.current
        if (container) container.scrollTop = container.scrollHeight
    }, [messages, loading, chatOpen])

    useEffect(() => {
        const promptText = typeof chatPrompt === 'string'
            ? chatPrompt
            : (chatPrompt?.text || chatPrompt?.prompt || '')
        if (!promptText) return

        const signature = typeof chatPrompt === 'object' && chatPrompt !== null
            ? `${promptText}::${chatPrompt.id ?? chatPrompt.timestamp ?? ''}`
            : promptText
        if (lastPromptRef.current === signature) return

        lastPromptRef.current = signature
        setChatOpen(true)
        sendMessage(promptText)
    }, [chatPrompt, setChatOpen, sendMessage])

    const resetChat = () => {
        historyRef.current = []
        setMessages([{ id: nextId(), role: 'model', text: clearedText }])
    }

    return (
        <div className="fixed bottom-4 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end">

            {/* Responsive Chat Drawer */}
            <div
                id="ai-chat-drawer"
                className={`${chatOpen ? '' : 'hidden '}mb-3 w-[calc(100vw-1.5rem)] sm:w-[400px] h-[520px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden view-fade`}
            >

                {/* Chat Header */}
                <div className="bg-navy-900 px-4 sm:px-5 py-3.5 sm:py-4 text-white flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-crimson-500 to-crimson-700 flex items-center justify-center shadow-glow relative shrink-0">
                            <Icon name="sparkles" className="w-5 h-5 text-white" />
                            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-navy-900"></span>
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-sm leading-tight">LUCID AI Assistant</h4>
                            <p className="text-[11px] text-slate-300">Products • Careers • Redesign Info</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={resetChat}
                            title="Clear Chat"
                            className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        >
                            <Icon name="rotate-ccw" className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setChatOpen(false)}
                            title="Close"
                            className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        >
                            <Icon name="x" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Messages Container */}
                <div id="chat-messages" ref={messagesRef} className="flex-1 overflow-y-auto custom-scroll p-3.5 sm:p-4 space-y-3.5 bg-slate-50/70">
                    {messages.map((message) => (
                        message.role === 'user' ? (
                            <div key={message.id} className="flex justify-end">
                                <div className="max-w-[82%] bg-navy-900 text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-xs sm:text-sm shadow-sm leading-relaxed">
                                    {message.text}
                                </div>
                            </div>
                        ) : (
                            <div key={message.id} className="flex items-start gap-2.5">
                                <div className="w-7 h-7 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                                    <Icon name="bot" className="w-4 h-4" />
                                </div>
                                <div className="max-w-[85%] bg-white border border-slate-200/80 rounded-2xl rounded-tl-sm px-3.5 py-3 text-xs sm:text-sm text-slate-700 shadow-sm leading-relaxed">
                                    <FormattedMessage text={message.text} />
                                </div>
                            </div>
                        )
                    ))}

                    {loading && (
                        <div className="flex items-start gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <Icon name="bot" className="w-4 h-4" />
                            </div>
                            <div className="bg-white border border-slate-200/80 rounded-2xl rounded-tl-sm px-4 py-3.5 shadow-sm flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-crimson-500 typing-dot"></span>
                                <span className="w-2 h-2 rounded-full bg-crimson-500 typing-dot"></span>
                                <span className="w-2 h-2 rounded-full bg-crimson-500 typing-dot"></span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Prompt Chips */}
                <div className="px-3.5 py-2 bg-white border-t border-slate-100 flex overflow-x-auto sm:flex-wrap gap-1.5 shrink-0 no-scrollbar">
                    {quickPrompts.map((prompt) => (
                        <button
                            key={prompt.label}
                            type="button"
                            onClick={() => sendMessage(prompt.text)}
                            className="px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-crimson-50 hover:text-crimson-700 text-[11px] font-medium text-slate-700 transition-colors border border-slate-200/60 whitespace-nowrap"
                        >
                            {prompt.label}
                        </button>
                    ))}
                </div>

                {/* Chat Input Form */}
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        sendMessage(input)
                    }}
                    className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
                >
                    <input
                        id="chat-input"
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Ask about LUCID, careers, or redesign..."
                        autoComplete="off"
                        className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl bg-slate-100 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:bg-white transition-all"
                    />
                    <button
                        id="chat-send-btn"
                        type="submit"
                        disabled={loading}
                        className="p-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white shadow-sm transition-all disabled:opacity-50 shrink-0"
                        aria-label="Send message"
                    >
                        <Icon name="send" className="w-4 h-4" />
                    </button>
                </form>
            </div>

            {/* Floating Action Button + Tooltip */}
            <div className="flex items-center gap-2.5 group">
                <button
                    type="button"
                    onClick={() => setChatOpen(!chatOpen)}
                    className="w-13 h-13 sm:w-14 sm:h-14 p-3.5 rounded-2xl bg-gradient-to-br from-crimson-600 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white shadow-xl hover:shadow-glow flex items-center justify-center transition-all duration-200 active:scale-95 relative"
                    aria-label="Toggle AI Assistant"
                >
                    <Icon id="chat-fab-icon" name="message-square-text" className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse"></span>
                </button>
            </div>
        </div>
    )
}
