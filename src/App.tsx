import './App.css'

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="William Brandi home">WB<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="https://www.linkedin.com/in/william-brandi-7132a7206/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Self-taught developer · Aberdeen, Maryland</p>
          <h1>Building useful things<br /><em>from the ground up.</em></h1>
          <p className="hero-intro">I'm William Brandi, a self-taught web, app, and software developer. I started learning in 2018 and have been building real projects since 2021.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See what I build <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="https://www.linkedin.com/in/william-brandi-7132a7206/" target="_blank" rel="noreferrer">View LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-number">01</div>
          <div className="mark-label">BUILD / PLAY / REPEAT</div>
        </div>
      </section>

      <section className="signal-bar" aria-label="Portfolio highlights">
        <span>Founder / lead developer at RNDM Junk</span>
        <span>Open to on-site and remote opportunities</span>
        <span className="signal-arrow" aria-hidden="true">↘</span>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Small ideas,<br /><em>made real.</em></h2>
          <p className="section-note">I learn by building: practical websites, apps, and experiments that keep getting better.</p>
        </div>
        <div className="project-grid">
          <article className="project-card project-card-featured">
            <div className="project-visual visual-lumen"><span className="visual-orb" /><span className="visual-word">RNDM JUNK LLC</span><span className="visual-caption">A business built around curiosity.</span></div>
            <div className="project-meta"><div><p className="project-type">Founder / lead developer · 2020 - present</p><h3>RNDM Junk</h3></div><span className="project-link" aria-hidden="true">↗</span></div>
            <p className="project-description">My ongoing business and development project. I own and maintain its web presence while using it as a place to explore ideas, solve problems, and keep shipping.</p>
          </article>
          <article className="project-card">
            <div className="project-visual visual-arc"><span className="arc-line" /><span className="arc-line arc-line-two" /><span className="visual-caption">Always another side quest.</span></div>
            <div className="project-meta"><div><p className="project-type">Web / app development · 2021 - present</p><h3>Independent builds</h3></div><span className="project-link" aria-hidden="true">↗</span></div>
            <p className="project-description">A growing collection of personal web and app projects, built to practice, test, and turn new ideas into working software.</p>
          </article>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading experience-heading">
          <p className="eyebrow">Experience</p>
          <h2>Work ethic with<br /><em>technical range.</em></h2>
          <p className="section-note">Experience across development, customer service, sales, warehouse operations, and maintenance.</p>
        </div>
        <div className="experience-list">
          <article className="experience-item experience-current"><span className="experience-date">2026 - present</span><div><h3>Small Format Merchandiser</h3><p>Pepsi-Cola Bottling Company of Havre de Grace</p><span className="experience-tag">Cold storage · Customer satisfaction</span></div></article>
          <article className="experience-item"><span className="experience-date">2020 - present</span><div><h3>Founder / Lead Developer</h3><p>RNDM Junk LLC</p><span className="experience-tag">C# · HTML5 · Web development</span></div></article>
          <article className="experience-item"><span className="experience-date">2024 - 2026</span><div><h3>Warehouse Associate</h3><p>Wayfair</p><span className="experience-tag">Operations · Reliability</span></div></article>
          <article className="experience-item"><span className="experience-date">2023 - 2024</span><div><h3>Commission Sales Associate</h3><p>AT&amp;T</p><span className="experience-tag">Sales · Customer service</span></div></article>
          <article className="experience-item"><span className="experience-date">2021 - 2023</span><div><h3>Associate</h3><p>Amazon</p><span className="experience-tag">Maintenance · Operations</span></div></article>
          <article className="experience-item"><span className="experience-date">2021 - 2023</span><div><h3>Assistant Manager</h3><p>Domino's Pizza</p><span className="experience-tag">Management · Operations</span></div></article>
          <article className="experience-item"><span className="experience-date">2019 - 2020</span><div><h3>Manager</h3><p>Dunkin' Brands</p><span className="experience-tag">Management</span></div></article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-stamp" aria-hidden="true"><span>BUILDING</span><strong>WB</strong><span>SINCE '21</span></div>
        <div className="about-copy"><p className="eyebrow">A little context</p><h2>Curious by default.<br /><em>Ready for the next challenge.</em></h2><p>I'm a self-taught developer who likes learning by doing. Whether I'm working on a web page, an app, or a completely unexpected side quest, I bring persistence, practical problem solving, and a willingness to go the extra mile.</p><a className="text-link" href="https://www.linkedin.com/in/william-brandi-7132a7206/" target="_blank" rel="noreferrer">Start a conversation <span aria-hidden="true">↗</span></a></div>
        <div className="capabilities"><p className="eyebrow">Core toolkit</p><ul><li><span>01</span> JavaScript</li><li><span>02</span> C#</li><li><span>03</span> HTML5</li><li><span>04</span> Firebase / Cloudflare</li><li><span>05</span> Testing and mobile apps</li></ul></div>
      </section>

      <footer className="site-footer"><span>William Brandi © 2026</span><span>Built with curiosity and a little stubbornness.</span><a href="https://www.linkedin.com/in/william-brandi-7132a7206/" target="_blank" rel="noreferrer">LinkedIn ↗</a></footer>
    </main>
  )
}

export default App
