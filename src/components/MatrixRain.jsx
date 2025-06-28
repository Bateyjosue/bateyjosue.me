import React, { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const MatrixRain = () => {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("")

    const fontSize = 10
    const columns = canvas.width / fontSize

    const drops = []
    for(let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    function draw() {
      // Different background colors for light/dark mode
      ctx.fillStyle = isDark ? 'rgba(10, 10, 10, 0.04)' : 'rgba(249, 250, 251, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Different text colors for light/dark mode
      ctx.fillStyle = isDark ? '#00ff41' : '#3b82f6'
      ctx.font = fontSize + 'px monospace'

      for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20 z-0"
    />
  )
}

export default MatrixRain