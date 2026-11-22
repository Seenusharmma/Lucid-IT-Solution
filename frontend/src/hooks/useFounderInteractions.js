import { useEffect, useRef } from 'react'

/**
 * Scroll reveal and mouse-reactive tilt/glow for the founder portrait.
 * Returns the ref to attach to the `.founder-photo-stage` element.
 */
export default function useFounderInteractions() {
  const stageRef = useRef(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return undefined

    const section = stage.closest('section')
    const reveals = section ? section.querySelectorAll('.founder-reveal') : []

    let observer = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.2 })
      reveals.forEach((el) => observer.observe(el))
    } else {
      reveals.forEach((el) => el.classList.add('is-visible'))
    }

    const resetStage = () => {
      stage.classList.remove('is-hovered')
      stage.style.setProperty('--tilt-x', '0deg')
      stage.style.setProperty('--tilt-y', '0deg')
      stage.style.setProperty('--glow-x', '50%')
      stage.style.setProperty('--glow-y', '50%')
    }

    const handlePointerEnter = (event) => {
      if (event.pointerType === 'mouse') stage.classList.add('is-hovered')
    }

    const handlePointerMove = (event) => {
      if (event.pointerType !== 'mouse') return
      const rect = stage.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const px = (event.clientX - rect.left) / rect.width
      const py = (event.clientY - rect.top) / rect.height
      stage.style.setProperty('--tilt-y', `${((px - 0.5) * 12).toFixed(2)}deg`)
      stage.style.setProperty('--tilt-x', `${((0.5 - py) * 12).toFixed(2)}deg`)
      stage.style.setProperty('--glow-x', `${(px * 100).toFixed(1)}%`)
      stage.style.setProperty('--glow-y', `${(py * 100).toFixed(1)}%`)
    }

    let pointerAttached = false
    const attachPointer = () => {
      if (pointerAttached) return
      stage.addEventListener('pointerenter', handlePointerEnter)
      stage.addEventListener('pointermove', handlePointerMove)
      stage.addEventListener('pointerleave', resetStage)
      stage.addEventListener('blur', resetStage)
      pointerAttached = true
    }
    const detachPointer = () => {
      if (!pointerAttached) return
      stage.removeEventListener('pointerenter', handlePointerEnter)
      stage.removeEventListener('pointermove', handlePointerMove)
      stage.removeEventListener('pointerleave', resetStage)
      stage.removeEventListener('blur', resetStage)
      pointerAttached = false
    }

    const motionQuery = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null

    const syncMotionPreference = () => {
      if (motionQuery && motionQuery.matches) {
        detachPointer()
        resetStage()
      } else {
        attachPointer()
      }
    }

    syncMotionPreference()
    if (motionQuery) {
      if (motionQuery.addEventListener) motionQuery.addEventListener('change', syncMotionPreference)
      else if (motionQuery.addListener) motionQuery.addListener(syncMotionPreference)
    }

    return () => {
      if (observer) observer.disconnect()
      detachPointer()
      resetStage()
      if (motionQuery) {
        if (motionQuery.removeEventListener) motionQuery.removeEventListener('change', syncMotionPreference)
        else if (motionQuery.removeListener) motionQuery.removeListener(syncMotionPreference)
      }
    }
  }, [])

  return stageRef
}
