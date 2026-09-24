import { createElement, type MouseEvent } from 'react'
import './App.css'

const linkedInUrl = 'https://www.linkedin.com/in/william-brandi-7132a7206/'
const contactEmail = 'william@rndmdevs.com'

const experience = [
  { date: 'Jun 2026 - present', role: 'Small Format Merchandiser', company: 'Pepsi-Cola Bottling Company of Havre de Grace', tag: 'Cold storage · Customer satisfaction', description: 'Full-time on-site role centered on cold storage, merchandising, and customer satisfaction.' },
  { date: 'Jul 2020 - present', role: 'Founder / Lead Developer', company: 'RNDM Junk LLC', tag: 'C# · HTML5 · Web development', description: 'Own and maintain a small-business web development venture, building and updating its online presence.' },
  { date: 'Aug 2024 - Jun 2026', role: 'Warehouse Associate', company: 'Wayfair', tag: 'Operations · Reliability', description: 'Full-time on-site warehouse role contributing to dependable day-to-day operations.', details: ['Performed route quality checks and verified product weight for safe delivery planning.', 'Coordinated communication between teams to support seamless delivery.', 'Unloaded inbound trailers, quality-checked products, and assembled and protected furniture for shipment.'] },
  { date: 'Feb 2023 - Jun 2024', role: 'Commission Sales Associate', company: 'AT&T', tag: 'Sales · Customer service', description: 'Customer-facing sales role focused on communication, product conversations, and service.', details: ['Managed the sales cycle from lead processing through conversion and closing.', 'Built customer and community relationships while working toward sales targets.', 'Trained new employees on customer service, cash handling, and organization strategies.'] },
  { date: 'Jun 2021 - Dec 2023', role: 'Associate', company: 'Amazon', tag: 'Maintenance · Operations', description: 'Seasonal associate role with maintenance and operational responsibilities.', details: ['Loaded, unloaded, and moved material between storage and production areas.', 'Used warehouse equipment including pallet jacks and shrink-wrap tools.', 'Helped train new employees in safe practices and warehouse procedures.'] },
  { date: 'Dec 2021 - Jan 2023', role: 'Assistant Manager', company: "Domino's Pizza", tag: 'Management · Operations', description: 'Full-time on-site assistant management role supporting daily operations.', details: ['Monitored cash intake and deposit records to improve accuracy and reduce discrepancies.', 'Assisted customers, completed inventory counts, and supported day-to-day operations.', 'Helped maintain performance, quality, and service expectations.'] },
  { date: 'Sep 2019 - Apr 2020', role: 'Manager', company: "Dunkin' Brands", tag: 'Management', description: 'Full-time management role in a customer-facing operations environment.', details: ['Conducted performance evaluations and provided constructive employee feedback.', 'Created schedules, monitored call-outs, and established team priorities.', 'Opened and closed the location while monitoring shifts and operational performance.'] },
]

const skills = ['JavaScript', 'C#', 'HTML5', 'Firebase', 'Cloudflare', 'Software testing', 'Mobile application development', 'Quality assurance', 'Process improvement', 'Data analysis', 'Cash handling', 'New hire training', 'Sales expertise']
const education = 'GED · MY GED at Online · September 2021'

function App() {
  const downloadResume = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const renderer = await import('@react-pdf/renderer')
    const h = createElement
    const pdfStyles = renderer.StyleSheet.create({
      page: { padding: 42, color: '#171916', fontFamily: 'Helvetica' },
      header: { borderBottom: '2 solid #171916', paddingBottom: 16, marginBottom: 22 },
      name: { fontSize: 28, fontFamily: 'Helvetica-Bold' },
      title: { fontSize: 11, color: '#4d534c', marginTop: 6 },
      contact: { fontSize: 8, color: '#4d534c', marginTop: 10 },
      columns: { flexDirection: 'row', gap: 24 },
      left: { width: '34%' },
      right: { width: '66%' },
      heading: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#5d655c', marginBottom: 8, letterSpacing: 1 },
      paragraph: { fontSize: 9, color: '#4d534c', lineHeight: 1.5, marginBottom: 20 },
      skill: { fontSize: 9, color: '#4d534c', marginBottom: 6 },
      job: { marginBottom: 12 },
      role: { fontSize: 10, fontFamily: 'Helvetica-Bold' },
      company: { fontSize: 8, color: '#5d655c', marginTop: 3 },
      detail: { fontSize: 8, color: '#4d534c', lineHeight: 1.35, marginTop: 3 },
    })
    const profileColumn = h(renderer.View, { style: pdfStyles.left }, h(renderer.Text, { style: pdfStyles.heading }, 'PROFILE'), h(renderer.Text, { style: pdfStyles.paragraph }, 'Self-taught developer learning since 2018 and building since 2021. Founder and lead developer of RNDM Junk LLC, creating practical web and app experiences with persistence, creativity, and a willingness to solve the next problem.'), h(renderer.Text, { style: pdfStyles.heading }, 'SKILLS'), ...skills.map((skill) => h(renderer.Text, { style: pdfStyles.skill, key: `pdf-${skill}` }, skill)))
    const experienceColumn = h(renderer.View, { style: pdfStyles.right }, h(renderer.Text, { style: pdfStyles.heading }, 'EXPERIENCE'), ...experience.map((job) => h(renderer.View, { style: pdfStyles.job, key: `pdf-job-${job.company}-${job.role}` }, h(renderer.Text, { style: pdfStyles.role }, job.role), h(renderer.Text, { style: pdfStyles.company }, `${job.company}  |  ${job.date}`), h(renderer.Text, { style: pdfStyles.detail }, job.description), ...(job.details ?? []).slice(0, 3).map((detail) => h(renderer.Text, { style: pdfStyles.detail, key: detail }, `• ${detail}`)))))
              {experience.map((job) => <article className="experience-item" key={`${job.company}-${job.role}`}><span className="experience-date">{job.date}</span><div><h3>{job.role}</h3><p>{job.company}</p><p className="experience-description">{job.description}</p>{job.details && <ul className="experience-details">{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}<span className="experience-tag">{job.tag}</span></div></article>)}
      <div className="resume-grid"><div><h3>Profile</h3><p>Self-taught developer learning since 2018 and building since 2021. Founder and lead developer of RNDM Junk LLC, combining technical problem solving with customer-focused communication and outreach.</p><h3>Target roles</h3><p>Technical Developer · Web Developer · Software Developer · Customer-Facing Technology · Sales / Customer Outreach</p><h3>Skills</h3><p>{skills.join(' · ')}</p><h3>Education</h3><p>{education}</p></div><div><h3>Experience</h3><div className="resume-jobs">{experience.map((job) => <div className="resume-job" key={`resume-${job.company}-${job.role}`}><strong>{job.role}</strong><span>{job.company} · {job.date}</span><small>{job.description}</small></div>)}</div></div></div>
    const header = h(renderer.View, { style: pdfStyles.header }, h(renderer.Text, { style: pdfStyles.name }, 'William Brandi'), h(renderer.Text, { style: pdfStyles.title }, 'Technical Developer · Web Development · Customer Outreach'), h(renderer.Text, { style: pdfStyles.contact }, `${contactEmail}  |  Aberdeen, Maryland  |  linkedin.com/in/william-brandi-7132a7206`))
    const resumeDocument = h(renderer.Document, { title: 'William Brandi Resume', author: 'William Brandi' }, h(renderer.Page, { size: 'LETTER', style: pdfStyles.page }, header, h(renderer.View, { style: pdfStyles.columns }, profileColumn, experienceColumn)))
    const resumeBlob = await renderer.pdf(resumeDocument).toBlob()
    const downloadUrl = URL.createObjectURL(resumeBlob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = 'William-Brandi-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="William Brandi home">WB<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="nav-contact" href="#resume" onClick={downloadResume}>Download resume <span aria-hidden="true">↓</span></a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Technical developer · Aberdeen, Maryland</p>
          <h1>Building useful things<br /><em>people can connect with.</em></h1>
          <p className="hero-intro">I'm William Brandi, a self-taught web, app, and software developer interested in technical development, customer-focused technology, and the next problem worth solving.</p>
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
            <div className="project-visual visual-lumen"><img className="project-screenshot" src="/rndm-junk-home.png" alt="RNDM Development website homepage" /><span className="visual-word">RNDM JUNK LLC</span><span className="visual-caption">A business built around curiosity.</span></div>
            <div className="project-meta"><div><p className="project-type">Founder / lead developer · 2020 - present</p><h3>RNDM Junk</h3></div><a className="project-link" href="https://rndmjunk.com/" target="_blank" rel="noreferrer" aria-label="Visit RNDM Development website">↗</a></div>
            <p className="project-description">A small-business web development venture built to help clients establish a professional online presence while keeping creative control. I own the product direction, build the web experience, and maintain the site over time.</p>
            <div className="project-details"><span>Web development</span><span>Performance optimization</span><span>Creative design</span><span>HTML5 · C# · JavaScript</span></div>
            <div className="project-gallery"><img src="/rndm-junk-about.png" alt="RNDM Development about page" /><img src="/rndm-junk-services.png" alt="RNDM Development services page" /><img src="/rndm-junk-contact.png" alt="RNDM Development contact page" /></div>
            <div className="project-actions"><a href="https://rndmjunk.com/" target="_blank" rel="noreferrer">View live site <span aria-hidden="true">↗</span></a><a href="https://github.com/RNDMJUNKLLC" target="_blank" rel="noreferrer">View GitHub <span aria-hidden="true">↗</span></a></div>
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
          {experience.map((job) => <article className="experience-item" key={`${job.company}-${job.role}`}><span className="experience-date">{job.date}</span><div><h3>{job.role}</h3><p>{job.company}</p><p className="experience-description">{job.description}</p>{job.details && <ul className="experience-details">{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}<span className="experience-tag">{job.tag}</span></div></article>)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-stamp" aria-hidden="true"><span>BUILDING</span><strong>WB</strong><span>SINCE '21</span></div>
        <div className="about-copy"><p className="eyebrow">A little context</p><h2>Curious by default.<br /><em>Ready for the next challenge.</em></h2><p>I'm a self-taught developer who likes learning by doing. Whether I'm working on a web page, an app, or a completely unexpected side quest, I bring persistence, practical problem solving, and a willingness to go the extra mile.</p><a className="text-link" href={`mailto:${contactEmail}`}>Start a conversation <span aria-hidden="true">↗</span></a></div>
        <div className="capabilities"><p className="eyebrow">Core toolkit</p><ul>{skills.slice(0, 5).map((skill, index) => <li key={skill}><span>0{index + 1}</span> {skill}</li>)}</ul></div>
      </section>

      <section className="resume-section" id="resume" aria-label="Printable resume">
        <div className="resume-header"><div><p className="resume-kicker">Resume · Updated 2026</p><h2>William Brandi</h2><p>Technical Developer · Web Development · Customer Outreach</p></div><div className="resume-contact"><a href={`mailto:${contactEmail}`}>{contactEmail}</a><a href={linkedInUrl} target="_blank" rel="noreferrer">linkedin.com/in/william-brandi-7132a7206</a><span>Aberdeen, Maryland</span></div></div>
        <div className="resume-grid"><div><h3>Profile</h3><p>Self-taught developer learning since 2018 and building since 2021. Founder and lead developer of RNDM Junk LLC, combining technical problem solving with customer-focused communication and outreach.</p><h3>Target roles</h3><p>Technical Developer · Web Developer · Software Developer · Customer-Facing Technology · Sales / Customer Outreach</p><h3>Skills</h3><p>{skills.join(' · ')}</p></div><div><h3>Experience</h3><div className="resume-jobs">{experience.map((job) => <div className="resume-job" key={`resume-${job.company}-${job.role}`}><strong>{job.role}</strong><span>{job.company} · {job.date}</span></div>)}</div></div></div>
      </section>

      <section className="contact-section" id="contact">
        <div><p className="eyebrow">Open to the next opportunity</p><h2>Have a problem<br /><em>worth solving?</em></h2></div>
        <div className="contact-details"><p>For development roles, collaborations, or a good side quest, reach out directly.</p><a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail} <span aria-hidden="true">↗</span></a><div className="contact-links"><a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://rndmjunk.com/" target="_blank" rel="noreferrer">RNDM Junk <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <footer className="site-footer"><span>William Brandi © 2026</span><span>Built with curiosity and a little stubbornness.</span><a href="https://www.linkedin.com/in/william-brandi-7132a7206/" target="_blank" rel="noreferrer">LinkedIn ↗</a></footer>
    </main>
  )
}

export default App
