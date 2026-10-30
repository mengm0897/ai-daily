import { createRoot } from 'react-dom/client'
import { HeroAurora, HeroTitle } from './HeroIsland'
import './island.css'

function mount() {
  const auroraHost = document.getElementById('hero-aurora')
  const titleHost = document.getElementById('hero-title')

  if (auroraHost) {
    auroraHost.replaceChildren()
    createRoot(auroraHost).render(<HeroAurora />)
  }

  if (titleHost) {
    const text = titleHost.getAttribute('data-text') || titleHost.textContent?.trim() || 'AI Daily'
    titleHost.replaceChildren()
    createRoot(titleHost).render(<HeroTitle text={text} />)
  }

  document.documentElement.classList.add('hero-react-ready')
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount)
} else {
  mount()
}
