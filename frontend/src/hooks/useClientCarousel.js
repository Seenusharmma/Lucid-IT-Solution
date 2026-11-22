import { useEffect, useRef } from 'react'

const SCROLL_SPEED = 36 // pixels per second

/**
 * Continuously scrolling, swipeable client logo carousel.
 * The track must contain the same set of cards repeated at least twice;
 * one set width is measured and used as the seamless loop point.
 */
export default function useClientCarousel(filter, itemCount) {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track || !itemCount) return undefined

    let animationFrame = null
    let lastTime = 0
    let loopWidth = 0
    let resizeObserver = null
    let isDragging = false
    let didDrag = false
    let startX = 0
    let startScroll = 0

    track.scrollLeft = 0

    const measure = () => {
      const children = track.children
      const first = children[0]
      const nextSet = children[itemCount]

      if (first && nextSet) {
        loopWidth = nextSet.offsetLeft - first.offsetLeft
      } else {
        const card = track.querySelector('.client-badge-card')
        const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0
        loopWidth = card ? (card.offsetWidth + gap) * itemCount : 0
      }
    }

    const getStep = () => {
      const card = track.querySelector('.client-badge-card')
      const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0
      return card ? card.offsetWidth + gap : track.clientWidth * 0.8
    }

    const scrollByCard = (direction) => {
      track.scrollBy({ left: direction * getStep(), behavior: 'smooth' })
    }

    const shouldScroll = () => !isDragging && !document.hidden

    const tick = (time) => {
      const delta = lastTime ? Math.min(time - lastTime, 64) : 0
      lastTime = time

      if (shouldScroll() && loopWidth > 0) {
        let next = track.scrollLeft + (delta / 1000) * SCROLL_SPEED
        if (next >= loopWidth) next -= loopWidth
        track.scrollLeft = next
      }

      animationFrame = requestAnimationFrame(tick)
    }

    const resetDrag = () => {
      if (!isDragging) return
      isDragging = false
      track.classList.remove('dragging')
    }

    const handlePointerDown = (event) => {
      isDragging = true
      if (event.pointerType !== 'mouse' || event.button !== 0) return
      didDrag = false
      startX = event.clientX
      startScroll = track.scrollLeft
      track.classList.add('dragging')
    }

    const handlePointerMove = (event) => {
      if (!isDragging || event.pointerType !== 'mouse') return
      const delta = event.clientX - startX
      if (Math.abs(delta) > 4) didDrag = true
      track.scrollLeft = startScroll - delta
      event.preventDefault()
    }

    const handleClick = (event) => {
      if (!didDrag) return
      event.preventDefault()
      event.stopPropagation()
      didDrag = false
    }

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollByCard(1)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollByCard(-1)
      }
    }

    const handlePointerLeave = resetDrag
    const handleVisibility = () => { lastTime = 0 }

    track.addEventListener('pointerleave', handlePointerLeave)
    track.addEventListener('pointerdown', handlePointerDown)
    track.addEventListener('pointermove', handlePointerMove)
    track.addEventListener('pointerup', resetDrag)
    track.addEventListener('pointercancel', resetDrag)
    track.addEventListener('click', handleClick, true)
    track.addEventListener('keydown', handleKeyDown)
    document.addEventListener('visibilitychange', handleVisibility)

    measure()
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(measure)
      resizeObserver.observe(track)
    } else {
      window.addEventListener('resize', measure)
    }

    animationFrame = requestAnimationFrame(tick)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
      if (resizeObserver) resizeObserver.disconnect()
      window.removeEventListener('resize', measure)
      track.removeEventListener('pointerleave', handlePointerLeave)
      track.removeEventListener('pointerdown', handlePointerDown)
      track.removeEventListener('pointermove', handlePointerMove)
      track.removeEventListener('pointerup', resetDrag)
      track.removeEventListener('pointercancel', resetDrag)
      track.removeEventListener('click', handleClick, true)
      track.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [filter, itemCount])

  return trackRef
}
