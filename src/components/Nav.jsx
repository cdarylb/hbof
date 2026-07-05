import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Contact', href: '#contact' },
]

const S = {
  nav: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'background 0.3s, border-color 0.3s',
    background: scrolled ? 'color-mix(in srgb, var(--color-gray-950) 90%, transparent)' : 'transparent',
    borderBottom: `1px solid ${scrolled ? 'var(--color-gray-800)' : 'transparent'}`,
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
  }),
  inner: {
    maxWidth: 1152, margin: '0 auto', padding: '0 32px',
    height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  logo: {
    fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em',
    color: 'var(--color-gray-25)', textDecoration: 'none',
  },
  link: {
    fontSize: 14, fontWeight: 400, color: 'var(--color-gray-500)',
    textDecoration: 'none', transition: 'color 0.15s',
  },
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      style={S.nav(scrolled)}
    >
      <div style={S.inner}>
        <a href="#" style={S.logo}>Hector Beaufrère</a>

        <ul className="hidden sm:flex" style={{ gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href} style={S.link}
                onMouseEnter={e => e.target.style.color = 'var(--color-gray-25)'}
                onMouseLeave={e => e.target.style.color = 'var(--color-gray-500)'}
              >{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
