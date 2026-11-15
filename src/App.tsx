import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Workflow,
  Layers3,
  MessageSquareText,
  CalendarDays,
  ChartNoAxesCombined,
  PlugZap,
  Bot,
  Menu,
  X,
  Check,
  MoveUpRight,
  Sparkles,
  CircleDot,
  ChevronRight,
  Linkedin,
  Mail,
  MapPin,
  Zap,
  MousePointer2,
} from 'lucide-react';

const WHATSAPP = 'https://wa.me/2347075246775';
const CALENDLY = 'https://calendly.com/emmanuelautomationhub/new-meeting';

const services = [
  {
    number: '01',
    icon: Workflow,
    title: 'CRM architecture',
    description:
      'A clear, dependable customer journey — from first enquiry to booked appointment and closed opportunity.',
    tags: ['GoHighLevel', 'HubSpot', 'Pipelines', 'Custom fields'],
  },
  {
    number: '02',
    icon: Zap,
    title: 'Workflow automation',
    description:
      'Thoughtful automations that handle repetitive work, keep conversations moving and reduce manual follow-up.',
    tags: ['Email & SMS', 'Lead routing', 'Nurture flows', 'Webhooks'],
  },
  {
    number: '03',
    icon: Layers3,
    title: 'Funnels & conversion journeys',
    description:
      'Landing pages, forms, surveys and booking experiences designed to make the next step obvious.',
    tags: ['Landing pages', 'Forms', 'Calendars', 'Checkout flows'],
  },
  {
    number: '04',
    icon: PlugZap,
    title: 'Integrations & connected systems',
    description:
      'Connect the tools your business already uses so information can move reliably between them.',
    tags: ['Zapier', 'Make', 'n8n', 'APIs & webhooks'],
  },
  {
    number: '05',
    icon: Bot,
    title: 'AI-assisted experiences',
    description:
      'Practical AI chat and voice experiences that support lead engagement and customer operations.',
    tags: ['AI chatbots', 'Voice AI', 'Vapi', 'Lead qualification'],
  },
  {
    number: '06',
    icon: ChartNoAxesCombined,
    title: 'Reporting & optimization',
    description:
      'Useful visibility into pipeline activity, campaign engagement and the work happening across your system.',
    tags: ['Dashboards', 'Campaign reporting', 'Pipeline visibility'],
  },
];

const steps = [
  [
    '01',
    'Understand the workflow',
    'We map how leads arrive, what happens next and where opportunities are being lost.',
  ],
  [
    '02',
    'Design the system',
    'I plan the CRM structure, automations and integrations around the way your team actually works.',
  ],
  [
    '03',
    'Build & connect',
    'The pages, pipelines and workflows are configured, connected and checked end to end.',
  ],
  [
    '04',
    'Test & refine',
    'We test real scenarios, fix gaps and leave you with a system your team can confidently use.',
  ],
];

const tools = [
  'GoHighLevel',
  'HubSpot',
  'Zapier',
  'Make',
  'n8n',
  'Twilio',
  'Mailgun',
  'Stripe',
  'Vapi',
  'Webhooks',
  'API integrations',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });
  const [formError, setFormError] = useState('');

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError('Please complete your name, email and project message.');
      return;
    }
    const body = [
      'Hello Emmanuel, I would like to discuss a project.',
      '',
      'Name: ' + form.name,
      'Email: ' + form.email,
      'Business: ' + (form.business || 'Not specified'),
      'Project: ' + form.message,
    ].join('\n');
    setFormError('');
    window.open(
      WHATSAPP + '?text=' + encodeURIComponent(body),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="availability-dot" /> Available for select CRM &
        automation projects <span className="announcement-divider">/</span>{' '}
        Abuja, Nigeria · Working worldwide
      </div>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Emmanuel Ayomide home"
        >
          <span className="brand-mark">
            EA<span>.</span>
          </span>
          <span className="brand-copy">
            <strong>EMMANUEL AYOMIDE</strong>
            <small>CRM & BUSINESS AUTOMATION</small>
          </span>
        </a>
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={menuOpen ? 'main-nav is-open' : 'main-nav'}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={closeMenu}>
            What I do
          </a>
          <a href="#work" onClick={closeMenu}>
            Selected work
          </a>
          <a href="#process" onClick={closeMenu}>
            My approach
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> SYSTEMS THAT MOVE BUSINESS
              FORWARD
            </div>
            <h1>
              Less manual work.
              <br />
              <span>More room to grow.</span>
            </h1>
            <p className="hero-lede">
              As a GoHighLevel expert and CRM automation specialist, I help
              businesses and agencies configure their CRM, build reliable
              workflows and connect lead capture, follow-up and booking.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                Discuss a project <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#work">
                Explore my work <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatar">EA</div>
              <div>
                <strong>CRM strategy meets practical execution.</strong>
                <span>GoHighLevel · Automation · Integrations</span>
              </div>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Illustrative CRM automation workflow dashboard"
          >
            <div className="visual-topline">
              <span>
                <i /> SYSTEM OVERVIEW
              </span>
              <span>LIVE WORKFLOW / 001</span>
            </div>
            <div className="visual-heading">
              <div>
                <small>LEAD MANAGEMENT SYSTEM</small>
                <h3>From enquiry to opportunity.</h3>
              </div>
              <span className="visual-status">
                <CircleDot size={12} /> Connected
              </span>
            </div>
            <div className="workflow-canvas">
              <div className="flow-node node-source">
                <span className="node-icon">
                  <MousePointer2 size={17} />
                </span>
                <div>
                  <small>TRIGGER</small>
                  <strong>New lead captured</strong>
                  <em>Form submission</em>
                </div>
                <span className="node-check">
                  <Check size={12} />
                </span>
              </div>
              <div className="flow-connector">
                <span />
              </div>
              <div className="flow-node">
                <span className="node-icon purple">
                  <Layers3 size={17} />
                </span>
                <div>
                  <small>CRM ACTION</small>
                  <strong>Contact organized</strong>
                  <em>Tag · Pipeline · Owner</em>
                </div>
                <span className="node-check">
                  <Check size={12} />
                </span>
              </div>
              <div className="flow-connector">
                <span />
              </div>
              <div className="flow-node">
                <span className="node-icon green">
                  <MessageSquareText size={17} />
                </span>
                <div>
                  <small>FOLLOW-UP</small>
                  <strong>Instant response sent</strong>
                  <em>Email / SMS sequence</em>
                </div>
                <span className="node-check">
                  <Check size={12} />
                </span>
              </div>
              <div className="flow-connector">
                <span />
              </div>
              <div className="flow-node node-end">
                <span className="node-icon orange">
                  <CalendarDays size={17} />
                </span>
                <div>
                  <small>NEXT STEP</small>
                  <strong>Appointment booked</strong>
                  <em>Calendar & reminders</em>
                </div>
                <span className="node-check">
                  <Check size={12} />
                </span>
              </div>
            </div>
            <div className="visual-footer">
              <span>
                <span className="mini-pulse" /> AUTOMATION LOGIC
              </span>
              <span>DESIGNED AROUND YOUR BUSINESS</span>
            </div>
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
          </div>
          <div className="hero-bottom">
            <span>01 / 04</span>
            <span className="hero-bottom-line" />
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={15} />
          </div>
        </section>

        <section className="trust-strip">
          <div className="section-wrap trust-inner">
            <span className="trust-label">TOOLS I WORK WITH</span>
            <div className="tool-marquee">
              {tools.map(tool => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="services">
          <div className="section-kicker">01 — CAPABILITIES</div>
          <div className="section-heading-row">
            <div>
              <h2>
                Good systems make
                <br />
                <span>great work repeatable.</span>
              </h2>
            </div>
            <p>
              Technology should remove friction, not create more of it. I bring
              your customer journey, tools and daily processes into one
              connected operation.
            </p>
          </div>
          <div className="services-grid">
            {services.map(item => {
              const Icon = item.icon;
              return (
                <article className="service-card" key={item.number}>
                  <div className="service-top">
                    <span>{item.number} / 06</span>
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-list">
                    {item.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap section-block">
            <div className="section-kicker">02 — SELECTED WORK</div>
            <div className="section-heading-row">
              <div>
                <h2>
                  Built around real
                  <br />
                  <span>business needs.</span>
                </h2>
              </div>
              <p>
                A look at selected CRM, funnel and campaign work. I share the
                scope clearly and keep project outcomes grounded in what was
                actually delivered and measured.
              </p>
            </div>
            <div className="portfolio-work-grid">
              <article className="portfolio-work-card">
                <div className="portfolio-work-image">
                  <img src="/favouriteboi/assets/booking-experience.png" alt="Screenshot of a service booking page with calendar scheduling" />
                </div>
                <div className="portfolio-work-copy">
                  <span>BOOKING EXPERIENCE / CALENDAR SETUP</span>
                  <h3>Appointment booking journey</h3>
                  <p>A service page and scheduling experience that gives visitors a clear next step, captures appointment requests and connects booking with the wider follow-up process.</p>
                  <div className="tag-list"><span>Landing pages</span><span>Calendars</span><span>Forms</span></div>
                </div>
              </article>
              <article className="portfolio-work-card">
                <div className="portfolio-work-image">
                  <img src="/favouriteboi/assets/lead-followup-workflow.png" alt="Screenshot of a GoHighLevel workflow with form trigger, tagging, notification and email steps" />
                </div>
                <div className="portfolio-work-copy">
                  <span>GOHIGHLEVEL / WORKFLOW AUTOMATION</span>
                  <h3>Lead response and follow-up</h3>
                  <p>A workflow built around a form submission, with contact tagging, internal notifications, timed steps and email follow-up to help teams respond consistently.</p>
                  <div className="tag-list"><span>GoHighLevel</span><span>Email automation</span><span>Lead management</span></div>
                </div>
              </article>
            </div>
            <div className="work-scope-note">Selected implementation snapshots. Project scope and responsibilities are described accurately and can be discussed during discovery.</div>  </article>
            <div className="work-footnote">
              <span>MORE PROJECTS ARE SHARED DURING DISCOVERY</span>
              <span>SELECTED EXPERIENCE / 2026</span>
            </div>
          </div>
        </section>

        <section
          className="section-wrap section-block process-section"
          id="process"
        >
          <div className="section-kicker">03 — HOW I WORK</div>
          <div className="section-heading-row">
            <div>
              <h2>
                Clear thinking.
                <br />
                <span>Careful execution.</span>
              </h2>
            </div>
            <p>
              No unnecessary complexity. Every build starts with the business
              process and ends with a system that has been checked against real
              use cases.
            </p>
          </div>
          <div className="process-list">
            {steps.map(([number, title, description]) => (
              <div className="process-row" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ChevronRight size={18} />
              </div>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-inner">
            <div className="about-art">
              <img className="about-photo" src="/favouriteboi/assets/emmanuel-headshot.jpg" alt="Portrait of Emmanuel Ayomide" />
              <div className="about-photo-shade" />
              <div className="about-art-caption">
                <span>EMMANUEL AYOMIDE</span>
                <span>ABUJA, NIGERIA / WORLDWIDE</span>
              </div>
            </div>
            <div className="about-copy">
              <div className="section-kicker">04 — A LITTLE ABOUT ME</div>
              <h2>
                I make the moving parts
                <br />
                <span>work together.</span>
              </h2>
              <p>
                I'm Emmanuel Ayomide, a CRM and business automation specialist
                focused on building practical systems for growing businesses.
              </p>
              <p>
                My work brings together CRM configuration, customer journeys,
                workflow automation, funnels and integrations. I care about the
                details behind a smooth experience: the right data, the right
                trigger, the right message and a clear next step.
              </p>
              <p>
                Whether you're setting up a CRM for the first time or improving
                an existing process, I aim to make the technology useful,
                understandable and easier to manage.
              </p>
              <a
                className="text-link about-link"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                Let's talk through your workflow <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-top">
            <div className="section-kicker">05 — START A CONVERSATION</div>
            <span className="contact-index">
              HAVE A PROCESS TO IMPROVE? / 2026
            </span>
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <h2>
                Let's make work
                <br />
                <span>flow better.</span>
              </h2>
              <p>
                Tell me what you're trying to improve. We can start with a
                conversation about your current process and where automation
                could help.
              </p>
              <div className="contact-details">
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <MessageSquareText size={17} /> WhatsApp{' '}
                  <ArrowUpRight size={14} />
                </a>
                <a href={CALENDLY} target="_blank" rel="noreferrer">
                  <CalendarDays size={17} /> Book a discovery call{' '}
                  <ArrowUpRight size={14} />
                </a>
                <span>
                  <MapPin size={17} /> Abuja, Nigeria · Remote worldwide
                </span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>PROJECT ENQUIRY</span>
                <span>01 — 04</span>
              </div>
              <label>
                Your name
                <input
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="How should I address you?"
                  required
                />
              </label>
              <label>
                Email address
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label>
                Business / company <span className="optional">(optional)</span>
                <input
                  value={form.business}
                  onChange={e => setForm({ ...form, business: e.target.value })}
                  placeholder="Your business name"
                />
              </label>
              <label>
                What would you like to improve?
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me a little about the workflow, CRM or automation you need..."
                  rows={4}
                  required
                />
              </label>
              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}
              <button
                className="button button-primary form-submit"
                type="submit"
              >
                Send project enquiry <ArrowUpRight size={17} />
              </button>
              <p className="form-disclaimer">
                Your message opens in WhatsApp so we can continue the
                conversation there.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              EA<span>.</span>
            </span>
            <span className="brand-copy">
              <strong>EMMANUEL AYOMIDE</strong>
              <small>CRM & BUSINESS AUTOMATION</small>
            </span>
          </a>
          <span className="footer-note">
            Thoughtful systems. Better business flow.
          </span>
          <div className="footer-links">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              WHATSAPP <ArrowUpRight size={12} />
            </a>
            <a href={CALENDLY} target="_blank" rel="noreferrer">
              CALENDLY <ArrowUpRight size={12} />
            </a>
          </div>
          <span className="copyright">© 2026 EMMANUEL AYOMIDE</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
