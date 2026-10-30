import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroAurora, HeroTitle } from './HeroIsland'
import './island.css'
import './demo.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="demo-page">
      <header className="demo-chrome">
        <span className="demo-wordmark">AI Daily</span>
        <span className="demo-note">Hero preview · Soft Aurora + BlurText</span>
      </header>
      <div className="demo-shell">
        <header className="hero demo-hero">
          <div id="hero-aurora" className="hero-aurora" aria-hidden="true">
            <HeroAurora />
          </div>
          <div className="hero-inner">
            <span className="badge">每日精选</span>
            <div className="hero-title-mount">
              <HeroTitle text="AI Daily" />
            </div>
            <p className="lead">面向非技术读者的 AI 日报</p>
            <p className="sub">本地预览 · 未上线</p>
            <p className="hero-stats">Soft Aurora lightMode · BlurText fog purple</p>
          </div>
        </header>
      </div>
    </div>
  </StrictMode>
)
