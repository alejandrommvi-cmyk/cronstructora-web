'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const x = useSpring(mouseX, { damping: 28, stiffness: 350 })
  const y = useSpring(mouseY, { damping: 28, stiffness: 350 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }
    const onLeave = () => setVisible(false)

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button')) setHovering(true)
    }
    const onExit = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button')) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onExit)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onExit)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] hidden lg:block rounded-full"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{
        opacity: visible ? 1 : 0,
        width: hovering ? 36 : 8,
        height: hovering ? 36 : 8,
        backgroundColor: hovering ? 'transparent' : '#F5A623',
        border: hovering ? '1.5px solid rgba(245,166,35,0.7)' : '1.5px solid transparent',
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}
