import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { AppContext } from './context/AppContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ChatWidget from './components/chat/ChatWidget'
import LucidLoader from './components/ui/LucidLoader'
import PageLoader from './components/ui/PageLoader'

const HomeView = lazy(() => import('./pages/HomeView'))
const AboutView = lazy(() => import('./pages/AboutView'))
const CareersView = lazy(() => import('./pages/CareersView'))
const ContactView = lazy(() => import('./pages/ContactView'))
const SolutionDetailView = lazy(() => import('./pages/SolutionDetailView'))
const DemoModal = lazy(() => import('./components/modals/DemoModal'))
const ApplyModal = lazy(() => import('./components/modals/ApplyModal'))

export default function App() {
  const [booting, setBooting] = useState(true)
  const [view, setView] = useState('home')
  const [activeNav, setActiveNav] = useState('home')
  const [demoModal, setDemoModal] = useState({ open: false, preselect: null })
  const [applyModal, setApplyModal] = useState({ open: false, role: '' })
  const [demoSession, setDemoSession] = useState(0)
  const [applySession, setApplySession] = useState(0)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatPrompt, setChatPrompt] = useState(null)
  const [solutionKey, setSolutionKey] = useState('pms')

  const handleLoaderComplete = useCallback(() => setBooting(false), [])

  useEffect(() => {
    if (!booting) return undefined
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [booting])

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id)
    if (!element) return
    const offset = 76
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }, [])

  const navigateTo = useCallback((nextView, sectionId = null) => {
    if (nextView && nextView !== 'home') {
      setView(nextView)
      setActiveNav(nextView)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setView('home')
    setActiveNav(sectionId || 'home')
    if (sectionId) {
      window.setTimeout(() => scrollToSection(sectionId), 60)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [scrollToSection])

  const openDemoModal = useCallback((preselect = null) => {
    setDemoSession((previous) => previous + 1)
    setDemoModal({ open: true, preselect })
  }, [])

  const closeDemoModal = useCallback(() => {
    setDemoModal((previous) => ({ ...previous, open: false }))
  }, [])

  const openApplyModal = useCallback((role) => {
    setApplySession((previous) => previous + 1)
    setApplyModal({ open: true, role })
  }, [])

  const closeApplyModal = useCallback(() => {
    setApplyModal((previous) => ({ ...previous, open: false }))
  }, [])

  const openChatWithPrompt = useCallback((prompt) => {
    setChatPrompt({ text: prompt, id: Date.now() })
    setChatOpen(true)
  }, [])

  const openSolutionDetail = useCallback((key) => {
    setSolutionKey(key)
    setView('solution')
    setActiveNav('solutions')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const contextValue = useMemo(() => ({
    view,
    activeNav,
    navigateTo,
    scrollToSection,
    openDemoModal,
    closeDemoModal,
    openApplyModal,
    closeApplyModal,
    demoModal,
    applyModal,
    chatOpen,
    setChatOpen,
    chatPrompt,
    openChatWithPrompt,
    openSolutionDetail,
    solutionKey,
    setSolutionKey,
  }), [
    view,
    activeNav,
    navigateTo,
    scrollToSection,
    openDemoModal,
    closeDemoModal,
    openApplyModal,
    closeApplyModal,
    demoModal,
    applyModal,
    chatOpen,
    chatPrompt,
    openChatWithPrompt,
    openSolutionDetail,
    solutionKey,
  ])

  return (
    <AppContext.Provider value={contextValue}>
      {booting && <LucidLoader duration={1500} onComplete={handleLoaderComplete} />}
      <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-crimson-600 selection:text-white overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          {view === 'careers' ? (
            <CareersView />
          ) : view === 'about' ? (
            <AboutView />
          ) : view === 'contact' ? (
            <ContactView />
          ) : view === 'solution' ? (
            <SolutionDetailView />
          ) : (
            <HomeView />
          )}
        </Suspense>
        <Footer />
        {demoModal.open && (
          <Suspense fallback={null}>
            <DemoModal key={demoSession} />
          </Suspense>
        )}
        {applyModal.open && (
          <Suspense fallback={null}>
            <ApplyModal key={applySession} />
          </Suspense>
        )}
        <ChatWidget />
      </div>
    </AppContext.Provider>
  )
}
