import { useState } from 'react';
import { ArrowUpRight, Menu, X, Workflow, Layers, CalendarDays, Plug, Bot, BarChart3, Linkedin, Mail, MessageCircle, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

const WHATSAPP = 'https://wa.me/2347075246775';
const EMAIL = 'mailto:emmanayomide27@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/emmanuel-ayomide-2';
const UPWORK = 'https://www.upwork.com/freelancers/~0177763eb9f5b6498c';
const CALENDLY = 'https://calendly.com/emmanuelautomationhub/new-meeting';

const services = [
  { icon: Workflow, title: 'GoHighLevel CRM setup', text: 'Configure a CRM that reflects how your business handles enquiries, customers and opportunities.', points: ['Pipelines and opportunity stages', 'Tags, custom fields and contact organization', 'Calendars, forms and user permissions'] },
  { icon: Layers, title: 'Funnels and lead capture', text: 'Create clear journeys that turn interest into enquiries, bookings and conversations.', points: ['Landing pages and funnel pages', 'Forms, surveys and booking pages', 'Lead source and campaign connections'] },
  { icon: CalendarDays, title: 'Workflow automation', text: 'Reduce repetitive admin with dependable follow-up and internal processes.', points: ['Email and SMS sequences', 'Missed-call text-back and reminders', 'Lead routing, alerts and nurture workflows'] },
  { icon: Plug, title: 'Integrations and migration', text: 'Connect your CRM with the tools your team already uses and move data carefully.', points: ['Make, Zapier, n8n and webhooks', 'Stripe, Twilio and Mailgun connections', 'CRM migration and data organization'] },
  { icon: Bot, title: 'AI chat and voice workflows', text: 'Add practical AI support to lead engagement and customer communication.', points: ['AI chat assistants', 'Vapi voice integrations', 'Lead qualification and handoff flows'] },
  { icon: BarChart3, title: 'Campaigns and reporting', text: 'Make campaign activity and pipeline progress easier to understand.', points: ['Email campaign setup', 'Engagement and pipeline reporting', 'Workflow review and optimization'] },
];

const tools = ['GoHighLevel', 'Make.com', 'Zapier', 'n8n', 'Vapi', 'Twilio', 'Mailgun', 'Stripe', 'HubSpot', 'Salesforce', 'WordPress'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' });
  const [error, setError] = useState('');
  const closeMenu = () => setMenuOpen(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email and project details.');
      return;
    }
    const message = ['Hello Emmanuel, I would like to discuss a project.', '', 'Name: ' + form.name, 'Email: ' + form.email, 'Business: ' + (form.business || 'Not specified'), 'Project: ' + form.message].join('\n');
    setError('');
    window.open(WHATSAPP + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  }

  return <div className="site-shell">
    <div className="top-note"><span className="status-dot" /> Available for CRM and automation projects <span className="top-separator">·</span> Abuja, Nigeria · Remote worldwide</div>
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-symbol">EA<span>.</span></span><span><strong>EMMANUEL AYOMIDE</strong><small>CRM & BUSINESS AUTOMATION</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
        <a href="/favouriteboi/">Home</a><a href="/favouriteboi/about/">About</a><a href="/favouriteboi/services/">Services</a><a href="/favouriteboi/portfolio/">Portfolio</a><a href="/favouriteboi/testimonials/">Testimonials</a><a className="nav-contact" href="/favouriteboi/contact/">Contact <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">CRM & BUSINESS AUTOMATION SPECIALIST</p>
          <h1>Make your business systems <span>work better together.</span></h1>
          <p className="hero-intro">I help businesses and agencies set up GoHighLevel, organize customer journeys, automate follow-up and connect the tools behind their daily operations.</p>
          <div className="hero-actions"><a className="button primary" href={WHATSAPP} target="_blank" rel="noreferrer">Discuss a project <ArrowUpRight size={17}/></a><a className="button secondary" href="#projects">View selected work</a></div>
          <div className="hero-meta"><span><CheckCircle2 size={16}/> GoHighLevel CRM</span><span><CheckCircle2 size={16}/> Workflow automation</span><span><CheckCircle2 size={16}/> Funnels & integrations</span></div>
        </div>
        <aside className="hero-aside"><p className="aside-label">WHAT I HELP WITH</p><div className="aside-line"><span>01</span><strong>Capture and organize leads</strong></div><div className="aside-line"><span>02</span><strong>Automate timely follow-up</strong></div><div className="aside-line"><span>03</span><strong>Connect your business tools</strong></div><div className="aside-line"><span>04</span><strong>Improve visibility and handoffs</strong></div><p className="aside-foot">Practical systems, built around the way your business works.</p></aside>
      </section>

      <section className="trust-band"><div className="wrap trust-content"><span className="eyebrow">TOOLS & PLATFORMS</span><div className="tool-list">{tools.map(tool => <span key={tool}>{tool}</span>)}</div></div></section>

      <section className="section wrap" id="about">
        <div className="section-head"><div><p className="eyebrow">01 / ABOUT</p><h2>Technology should make work <span>easier to manage.</span></h2></div><p className="section-summary">I bring CRM configuration, automation and connected tools together to create smoother customer journeys and more dependable operations.</p></div>
        <div className="about-layout"><div className="about-portrait"><img src={`${import.meta.env.BASE_URL}assets/emmanuel-ayomide-headshot.jpg?v=4`} alt="Portrait of Emmanuel Ayomide"/></div><div className="about-facts"><div className="fact"><span>01</span><strong>CRM-first thinking</strong><p>Structure customer data and pipelines so teams can see what needs attention.</p></div><div className="fact"><span>02</span><strong>Practical automation</strong><p>Build workflows around real processes, with clear triggers, actions and handoffs.</p></div><div className="fact"><span>03</span><strong>Connected operations</strong><p>Bring forms, calendars, communication tools and integrations into one working system.</p></div></div>
          <div className="about-copy"><p>I'm Emmanuel Ayomide, a CRM and Business Automation Specialist focused on helping growing businesses and agencies get more from their systems.</p><p>My work includes GoHighLevel CRM setup, pipeline configuration, workflow automation, funnels, landing pages, booking systems, email marketing and integrations. I also work with tools such as Make.com, Vapi, Twilio, Mailgun, Stripe, HubSpot and Salesforce.</p><p>I approach each project by understanding the existing process first, then building and testing a solution that is clear, useful and manageable after handover.</p><div className="about-links"><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a><a href={UPWORK} target="_blank" rel="noreferrer">Upwork profile <ExternalLink size={13}/></a></div></div>
        </div>
      </section>

      <section className="section services-section" id="services"><div className="wrap"><div className="section-head"><div><p className="eyebrow">02 / SERVICES</p><h2>Systems built around <span>business needs.</span></h2></div><p className="section-summary">Support across the customer journey, from first enquiry through follow-up, booking and reporting.</p></div><div className="services-grid">{services.map((service, i) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="service-top"><span>0{i + 1}</span><Icon size={22}/></div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.points.map(point => <li key={point}>{point}</li>)}</ul></article>; })}</div></div></section>

      <section className="section wrap" id="projects"><div className="section-head"><div><p className="eyebrow">03 / SELECTED PROJECT</p><h2>Work you can <span>look at closely.</span></h2></div><p className="section-summary">A genuine GoHighLevel workflow screenshot from my implementation work. More project examples will be added as the portfolio is updated.</p></div>
        <article className="project-card"><div className="project-image"><img src="/favouriteboi/assets/lead-followup-workflow.png" alt="GoHighLevel workflow builder showing a form submission trigger, contact tagging, internal notification, wait steps and email follow-up"/></div><div className="project-details"><p className="eyebrow">GOHIGHLEVEL / WORKFLOW AUTOMATION</p><h3>Lead response and follow-up workflow</h3><p>A workflow configured around a form submission, with contact tagging, internal notifications, timed steps and email follow-up. The structure helps keep lead handling consistent after an enquiry is received.</p><div className="project-tags"><span>Form trigger</span><span>Contact tagging</span><span>Internal alerts</span><span>Email follow-up</span></div><div className="project-caption">Implementation screenshot · GoHighLevel workflow builder</div></div></article>
        <p className="project-note">Additional project screenshots and case studies will be added as they are prepared. No illustrative mockups or unrelated stock visuals are used here.</p>
      </section>

      <section className="section testimonials-section" id="testimonials"><div className="wrap testimonial-inner"><div><p className="eyebrow">04 / TESTIMONIALS</p><h2>Client feedback, <span>in the right place.</span></h2><p className="testimonial-copy">You can view the feedback published on my Upwork profile. I’m keeping this section linked to the original platform rather than reproducing reviews that aren't displayed here yet.</p></div><a className="button primary" href={UPWORK} target="_blank" rel="noreferrer">View Upwork feedback <ArrowUpRight size={17}/></a></div></section>

      <section className="section wrap contact-section" id="contact"><div className="section-head"><div><p className="eyebrow">05 / CONTACT</p><h2>Tell me what needs <span>to work better.</span></h2></div><p className="section-summary">Share a little about your business and the CRM, workflow or customer process you want to improve.</p></div><div className="contact-layout"><div className="contact-info"><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle/> <span><strong>WhatsApp</strong><small>Start a conversation</small></span><ArrowUpRight/></a><a href={EMAIL}><Mail/> <span><strong>Email</strong><small>Send a project enquiry</small></span><ArrowUpRight/></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin/> <span><strong>LinkedIn</strong><small>Connect professionally</small></span><ArrowUpRight/></a><a href={UPWORK} target="_blank" rel="noreferrer"><ExternalLink/> <span><strong>Upwork</strong><small>Profile and client feedback</small></span><ArrowUpRight/></a><a href={CALENDLY} target="_blank" rel="noreferrer"><CalendarDays/> <span><strong>Book a call</strong><small>Choose a convenient time</small></span><ArrowUpRight/></a><div className="location"><MapPin/><span>Abuja, Nigeria · Working remotely worldwide</span></div></div>
        <form className="contact-form" onSubmit={submit}><h3>Project enquiry</h3><p>Complete the details and continue the conversation on WhatsApp.</p><label>Your name<input value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Your name" required/></label><label>Email address<input type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@company.com" required/></label><label>Business / company <span>(optional)</span><input value={form.business} onChange={e => setForm({...form, business:e.target.value})} placeholder="Business name"/></label><label>What do you need help with?<textarea rows={4} value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell me about the CRM, workflow or project..." required/></label>{error && <p className="form-error">{error}</p>}<button className="button primary" type="submit">Continue to WhatsApp <ArrowUpRight size={16}/></button></form></div></section>
    </main>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-symbol">EA<span>.</span></span><span><strong>EMMANUEL AYOMIDE</strong><small>CRM & BUSINESS AUTOMATION</small></span></a><p>Practical CRM systems. Thoughtful automation.</p><div className="footer-social"><a href={LINKEDIN} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin/></a><a href={UPWORK} aria-label="Upwork" target="_blank" rel="noreferrer"><ExternalLink/></a><a href={WHATSAPP} aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle/></a><a href={EMAIL} aria-label="Email"><Mail/></a></div><small>© 2026 Emmanuel Ayomide</small></div></footer>
  </div>;
}
export default App;
