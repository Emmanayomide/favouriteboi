import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, Workflow, Layers, CalendarDays, Plug, Bot, BarChart3, Linkedin, Mail, MessageCircle, ExternalLink, CheckCircle2, ArrowDownRight, MoveUpRight, Zap, Target, Route, Gauge, Sparkles } from 'lucide-react';

const WHATSAPP = 'https://wa.me/2347075246775';
const EMAIL = 'mailto:emmanayomide27@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/emmanuel-ayomide-2a2111414';
const UPWORK = 'https://www.upwork.com/freelancers/~0177763eb9f5b6498c';
const CALENDLY = 'https://calendly.com/emmanuelautomationhub/new-meeting';
const asset = (name: string) => \`\${import.meta.env.BASE_URL}assets/\${name}\`;

const capabilities = [
  { n:'01', icon:Workflow, title:'CRM foundations', text:'A clear home for every contact, conversation and opportunity.', detail:'GoHighLevel setup · Pipelines · Contact structure' },
  { n:'02', icon:Zap, title:'Follow-up that moves', text:'Thoughtful automations that keep leads from going quiet.', detail:'Email & SMS · Lead routing · Reminders' },
  { n:'03', icon:Route, title:'Connected journeys', text:'Forms, funnels, calendars and tools working together.', detail:'Funnels · Booking · Integrations' },
  { n:'04', icon:Gauge, title:'Visibility & control', text:'A more useful view of activity, progress and next steps.', detail:'Campaigns · Reporting · Optimisation' },
];

const projects = [
  { image:'workflow-dashboard.webp', type:'CRM & AUTOMATION', title:'GoHighLevel CRM ecosystem', text:'A connected CRM environment with lead-generation workflows, appointment processes, live chat and review campaign components.', tags:['GoHighLevel','CRM setup','Automation'], size:'project-wide' },
  { image:'neogadget-store.webp', type:'WEB EXPERIENCE', title:'NeoGadget e-commerce', text:'A technology retail website concept with product-led sections, promotional content and a structured shopping experience.', tags:['Website design','E-commerce','UX'], size:'' },
  { image:'emmy-car-hub.webp', type:'WEB EXPERIENCE', title:'Emmy Car Hub', text:'An automotive website concept organised around vehicle discovery, dealership information and customer enquiries.', tags:['Website design','Automotive','Lead capture'], size:'' },
];

const tools = ['GoHighLevel','Make.com','Zapier','n8n','Vapi','Twilio','Mailgun','Stripe','HubSpot','Salesforce','WordPress'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', business:'', message:'' });
  const [error, setError] = useState('');
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -48px 0px' });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email and project details.');
      return;
    }
    const message = ['Hello Emmanuel, I would like to discuss a project.','','Name: '+form.name,'Email: '+form.email,'Business: '+(form.business || 'Not specified'),'Project: '+form.message].join('\\n');
    setError('');
    window.open(WHATSAPP + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  }

  return <div className="site-shell home-motion" id="home">
    <div className="top-note"><span className="status-dot" /> Available for CRM and automation projects <span className="top-separator">·</span> Nigeria · Remote worldwide</div>
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-symbol">EA<span>.</span></span><span><strong>EMMANUEL AYOMIDE</strong><small>CRM & BUSINESS AUTOMATION</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
        <a href="#home" onClick={closeMenu}>Home</a><a href="/favouriteboi/about/" onClick={closeMenu}>About</a><a href="#capabilities" onClick={closeMenu}>Expertise</a><a href="#projects" onClick={closeMenu}>Work</a><a href="/favouriteboi/testimonials/" onClick={closeMenu}>Feedback</a><a className="nav-contact" href="/favouriteboi/contact/" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero-v3">
        <div className="hero-v3-grid" aria-hidden="true"></div>
        <div className="hero-v3-inner wrap">
          <div className="hero-v3-copy">
            <p className="eyebrow light-eyebrow" data-reveal>CRM STRATEGY · SYSTEMS · AUTOMATION</p>
            <h1 data-reveal style={{'--reveal-delay':'100ms'} as React.CSSProperties}>Make every part of your <em>customer journey</em> work together.</h1>
            <p className="hero-v3-intro" data-reveal style={{'--reveal-delay':'220ms'} as React.CSSProperties}>I design and build connected CRM and automation systems that help businesses capture enquiries, follow up consistently and manage the work behind every customer relationship.</p>
            <div className="hero-v3-actions" data-reveal style={{'--reveal-delay':'340ms'} as React.CSSProperties}><a className="button primary light-button" href={WHATSAPP} target="_blank" rel="noreferrer">Discuss a project <ArrowUpRight size={17}/></a><a className="text-link light-link" href="#projects">Explore selected work <ArrowDownRight size={16}/></a></div>
            <div className="hero-v3-foot" data-reveal style={{'--reveal-delay':'460ms'} as React.CSSProperties}><span><i/> INDEPENDENT SPECIALIST</span><span>GOHIGHLEVEL-FOCUSED</span><span>REMOTE · WORLDWIDE</span></div>
          </div>
          <div className="hero-art" data-reveal style={{'--reveal-delay':'260ms'} as React.CSSProperties} aria-label="Illustration of connected business systems">
            <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
            <div className="art-label art-label-top">THE CONNECTED BUSINESS</div>
            <div className="art-core"><span className="core-glow"></span><Workflow size={36}/><b>ONE SYSTEM</b><small>Connected by design</small></div>
            <div className="art-node node-a"><span><Target size={18}/></span><b>Capture</b><small>New enquiries</small></div>
            <div className="art-node node-b"><span><Layers size={18}/></span><b>Organise</b><small>CRM & pipeline</small></div>
            <div className="art-node node-c"><span><Zap size={18}/></span><b>Automate</b><small>Follow-up</small></div>
            <div className="art-node node-d"><span><CalendarDays size={18}/></span><b>Convert</b><small>Booking & handoff</small></div>
            <div className="art-connector con-a"></div><div className="art-connector con-b"></div><div className="art-connector con-c"></div><div className="art-connector con-d"></div>
            <div className="art-label art-label-bottom">FROM FIRST TOUCH TO NEXT ACTION <span>↗</span></div>
          </div>
        </div>
        <div className="hero-bottom-line"><span>01 — 05</span><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span></div>
      </section>

      <section className="problem-band">
        <div className="wrap problem-grid">
          <div className="problem-title" data-reveal><p className="eyebrow">THE OPERATIONAL GAP</p><h2>Good leads deserve <span>better systems.</span></h2></div>
          <div className="problem-copy" data-reveal style={{'--reveal-delay':'140ms'} as React.CSSProperties}><p>Enquiries arrive from different places. Follow-ups depend on memory. Customer information gets scattered across tools.</p><p>I bring those moving parts into a clearer process—so your team can spend less time chasing admin and more time moving conversations forward.</p></div>
          <div className="problem-stamp" data-reveal style={{'--reveal-delay':'260ms'} as React.CSSProperties}><Sparkles size={20}/><span>CLARITY<br/>THROUGH<br/>CONNECTION</span></div>
        </div>
      </section>

      <section className="section-v3 capabilities-section" id="capabilities">
        <div className="wrap">
          <div className="section-head-v3" data-reveal><div><p className="eyebrow">01 / WHAT I BUILD</p><h2>Connected systems for <em>the whole journey.</em></h2></div><p>Not disconnected tools. A considered setup where each part supports the next.</p></div>
          <div className="capability-list">
            {capabilities.map((item,i) => { const Icon=item.icon; return <article className="capability-row" key={item.n} data-reveal style={{'--reveal-delay':(i*100)+'ms'} as React.CSSProperties}><span className="cap-number">{item.n}</span><span className="cap-icon"><Icon size={23}/></span><div className="cap-main"><h3>{item.title}</h3><p>{item.text}</p></div><div className="cap-detail">{item.detail}</div><ArrowUpRight className="cap-arrow" size={20}/></article>; })}
          </div>
          <div className="capability-link" data-reveal><a className="text-link" href="/favouriteboi/services/">Explore all services <ArrowUpRight size={16}/></a></div>
        </div>
      </section>

      <section className="process-section">
        <div className="wrap">
          <div className="section-head-v3 process-heading" data-reveal><div><p className="eyebrow light-eyebrow">02 / HOW I WORK</p><h2>From a messy process <em>to a working system.</em></h2></div><p>Every build starts with understanding how the business works today—not forcing it into a generic template.</p></div>
          <div className="process-track">
            {[['01','Discover','Understand the goal, tools and current workflow.'],['02','Structure','Map the customer journey and system logic.'],['03','Build','Configure the CRM, automations and connections.'],['04','Test','Check triggers, messages, handoffs and edge cases.'],['05','Refine','Make practical adjustments for day-to-day use.']].map((step,i)=><div className="process-step" key={step[0]} data-reveal style={{'--reveal-delay':(i*110)+'ms'} as React.CSSProperties}><div className="process-dot"><span>{step[0]}</span></div><h3>{step[1]}</h3><p>{step[2]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-v3 projects-section" id="projects">
        <div className="wrap">
          <div className="section-head-v3" data-reveal><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Built with intention. <em>Designed to work.</em></h2></div><p>A selection of CRM implementation and web design examples. Each reflects a different part of my work.</p></div>
          <div className="project-grid-v3">
            {projects.map((project,i)=><article className={'project-v3 '+project.size} key={project.title} data-reveal style={{'--reveal-delay':(i*130)+'ms'} as React.CSSProperties}><a className="project-visual" href={asset(project.image)} target="_blank" rel="noreferrer"><img src={asset(project.image)} alt={project.title+' project screenshot'}/><span className="image-open"><MoveUpRight size={19}/></span></a><div className="project-v3-info"><div className="project-type">{project.type}<span>0{i+1}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}
          </div>
          <div className="projects-foot" data-reveal><span>SELECTED PROJECT EXAMPLES · MORE DETAILS ON REQUEST</span><a className="text-link" href="/favouriteboi/portfolio/">View project gallery <ArrowUpRight size={16}/></a></div>
        </div>
      </section>

      <section className="about-v3">
        <div className="wrap about-v3-grid">
          <div className="about-v3-image" data-reveal><img src={asset('emmanuel-ayomide-headshot.webp')} alt="Emmanuel Ayomide"/><div className="portrait-caption"><span>EMMANUEL AYOMIDE</span><small>CRM & BUSINESS AUTOMATION SPECIALIST</small></div></div>
          <div className="about-v3-copy" data-reveal style={{'--reveal-delay':'140ms'} as React.CSSProperties}><p className="eyebrow">04 / THE PERSON BEHIND THE SYSTEMS</p><h2>Hands-on thinking.<br/><em>Practical execution.</em></h2><p>I'm Emmanuel, an independent CRM & Business Automation Specialist focused on making business processes easier to manage through thoughtful systems and automation.</p><p>My work is centred on GoHighLevel, supported by integrations and tools that help different parts of a customer journey work together. I value clear communication, careful testing and solutions that make sense for the people using them.</p><div className="about-v3-links"><a href="/favouriteboi/about/">More about me <ArrowUpRight size={15}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13}/></a><a href={UPWORK} target="_blank" rel="noreferrer">Upwork <ExternalLink size={13}/></a></div></div>
        </div>
      </section>

      <section className="tools-section"><div className="wrap tools-v3"><div data-reveal><p className="eyebrow">05 / THE TOOLKIT</p><h2>The right tools.<br/><em>Connected thoughtfully.</em></h2></div><div className="tools-v3-list" data-reveal style={{'--reveal-delay':'140ms'} as React.CSSProperties}>{tools.map((tool,i)=><span key={tool} style={{'--reveal-delay':(i*35)+'ms'} as React.CSSProperties}>{tool}</span>)}</div></div></section>

      <section className="closing-section" id="contact"><div className="closing-orb" aria-hidden="true"></div><div className="wrap closing-inner" data-reveal><p className="eyebrow light-eyebrow">HAVE A PROCESS TO IMPROVE?</p><h2>Let's make your<br/><em>systems work together.</em></h2><p>Tell me what you're trying to organise, automate or connect. We can start with the problem and work towards the right setup.</p><div className="closing-actions"><a className="button primary light-button" href={WHATSAPP} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={17}/></a><a className="closing-email" href={EMAIL}>Or email me <ArrowUpRight size={14}/></a></div></div></section>
    </main>

    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-symbol">EA<span>.</span></span><span><strong>EMMANUEL AYOMIDE</strong><small>CRM & BUSINESS AUTOMATION</small></span></a><p>Practical CRM systems. Thoughtful automation.</p><div className="footer-social"><a href={LINKEDIN} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin/></a><a href={UPWORK} aria-label="Upwork" target="_blank" rel="noreferrer"><ExternalLink/></a><a href={WHATSAPP} aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle/></a><a href={EMAIL} aria-label="Email"><Mail/></a></div><small>© 2026 Emmanuel Ayomide</small></div></footer>
  </div>;
}
export default App;
