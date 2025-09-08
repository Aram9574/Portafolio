"use client";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function AOSProvider() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true })
  }, [])
  return null
}

