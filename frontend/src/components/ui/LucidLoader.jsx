import { useEffect, useState } from 'react'

/**
 * LucidLoader - Minimal rotating logo loader
 *
 * @param {Object} props
 * @param {Function} [props.onComplete] - Callback fired when duration finishes
 * @param {number} [props.duration=1900] - Total duration in milliseconds
 * @param {boolean} [props.fullScreen=true] - Full-screen overlay or contained block
 */
export default function LucidLoader({
  onComplete,
  // duration = 1900,
  duration = 9100,
  fullScreen = true,
}) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    let exitTimer

    const timer = setTimeout(() => {
      setIsExiting(true)
      exitTimer = setTimeout(() => {
        onComplete?.()
      }, 300)
    }, duration)

    return () => {
      clearTimeout(timer)
      if (exitTimer) clearTimeout(exitTimer)
    }
  }, [duration, onComplete])

  const containerClasses = fullScreen
    ? `fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`
    : `relative w-full min-h-[70vh] flex items-center justify-center bg-white transition-opacity duration-300 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`

  return (
    <div
      role="status"
      aria-label="Loading"
      className={containerClasses}
    >
      <img
        src="/Lucid.jpg"
        alt="LUCID IT Solutions"
        className="w-24 h-24 object-contain animate-spin rounded-full"
      />
    </div>
  )
}