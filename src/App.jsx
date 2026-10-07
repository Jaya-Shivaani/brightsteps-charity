import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown, BookOpen, Apple, HeartPulse, Home, ArrowRight, Instagram, Facebook, Linkedin, Check } from 'lucide-react'

/* Drop your photos in /public/images using these names. A soft placeholder shows until they exist. */
const U = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`
/* Free-licence Unsplash photos (Unsplash License). Swap for your own by editing these URLs or using /public/images. */
const IMG = {
  hero: U('1542810634-71277d95dcbb') + '&w=1200',   // Yannis H – children learning outdoors
  maya: U('1631947430066-48c30d57b943') + '&w=1200', // Quỳnh Lê Mạnh – girl with a book
  read: U('1767356326735-2da0a10cf1f0') + '&w=1000', // Arthur Tseng – child reading
  meal: U('1728494049079-c262d3facee0') + '&w=1000', // freetime Jam – children sharing a meal
}

/* Shows the real photo if /public/images/<file> exists, otherwise the built-in illustration. */
function Photo({ src, alt, className = '', art }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={`photo ${className}`} role="img" aria-label={alt}>
      {art}
      {ok && <img src={src} alt="" loading="lazy" onError={() => setOk(false)} />}
    </div>
  )
}

const skin = '#C68A5E', hair = '#2B2420'

function HeroArt() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="500" fill="#DDEFF8" />
      <circle cx="318" cy="96" r="46" fill="#9FC5F4" />
      <path d="M0 330 Q110 250 220 320 T400 300 V500 H0Z" fill="#BFE5DF" />
      <path d="M0 390 Q140 320 260 385 T400 370 V500 H0Z" fill="#9FD6CE" />
      <g fill="#fff" opacity=".9"><ellipse cx="90" cy="110" rx="46" ry="14" /><ellipse cx="125" cy="98" rx="30" ry="12" /></g>
      {/* school building */}
      <rect x="40" y="250" width="110" height="80" fill="#C9DFF0" /><path d="M32 252 L95 205 L158 252Z" fill="#2B7FD0" />
      <rect x="82" y="282" width="26" height="48" fill="#8A5A3C" /><rect x="52" y="268" width="18" height="18" fill="#DDEFF8" /><rect x="120" y="268" width="18" height="18" fill="#DDEFF8" />
      {/* child */}
      <path d="M130 500 V400 Q130 350 200 348 Q270 350 270 400 V500Z" fill="#4B8FE8" />
      <rect x="184" y="318" width="32" height="40" fill={skin} />
      <circle cx="200" cy="282" r="50" fill={skin} />
      <path d="M150 276 Q146 222 200 226 Q256 222 250 276 Q236 250 200 252 Q166 250 150 276Z" fill={hair} />
      <circle cx="182" cy="288" r="5" fill={hair} /><circle cx="218" cy="288" r="5" fill={hair} />
      <path d="M182 308 Q200 326 218 308" stroke="#8A4B35" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="168" cy="304" r="8" fill="#E8A184" opacity=".6" /><circle cx="232" cy="304" r="8" fill="#E8A184" opacity=".6" />
      {/* open book */}
      <path d="M110 430 L200 410 L290 430 V480 L200 462 L110 480Z" fill="#fff" />
      <path d="M200 410 V462" stroke="#6CC4C0" strokeWidth="4" />
      <g stroke="#CFD8DC" strokeWidth="3"><path d="M128 440 L186 428M128 454 L186 442M214 428 L272 440M214 442 L272 454" /></g>
      <ellipse cx="112" cy="436" rx="14" ry="12" fill={skin} /><ellipse cx="288" cy="436" rx="14" ry="12" fill={skin} />
    </svg>
  )
}

function StoryArt() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="480" height="360" fill="#EAF3FC" />
      <rect x="40" y="40" width="140" height="120" fill="#DDEFF8" stroke="#fff" strokeWidth="8" />
      <path d="M110 40 V160 M40 100 H180" stroke="#fff" strokeWidth="6" />
      <circle cx="140" cy="76" r="14" fill="#9FC5F4" />
      <rect x="330" y="50" width="110" height="14" fill="#8A5A3C" /><rect x="340" y="20" width="12" height="30" fill="#6CC4C0" /><rect x="356" y="26" width="12" height="24" fill="#2B7FD0" /><rect x="372" y="14" width="12" height="36" fill="#4B8FE8" />
      <rect y="300" width="480" height="60" fill="#D4E5F2" />
      {/* girl */}
      <path d="M190 300 V240 Q190 206 250 204 Q310 206 310 240 V300Z" fill="#6CC4C0" />
      <rect x="236" y="182" width="28" height="30" fill={skin} />
      <circle cx="250" cy="150" r="42" fill={skin} />
      <path d="M206 150 Q200 104 250 106 Q300 104 294 150 Q286 128 250 128 Q214 128 206 150Z" fill={hair} />
      <circle cx="206" cy="170" r="14" fill={hair} /><circle cx="294" cy="170" r="14" fill={hair} />
      <circle cx="234" cy="156" r="4.5" fill={hair} /><circle cx="266" cy="156" r="4.5" fill={hair} />
      <path d="M236 174 Q250 188 264 174" stroke="#8A4B35" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* desk, books */}
      <rect x="120" y="256" width="260" height="14" fill="#8A5A3C" /><rect x="136" y="270" width="10" height="46" fill="#6B4630" /><rect x="354" y="270" width="10" height="46" fill="#6B4630" />
      <path d="M190 256 L250 244 L310 256 V232 L250 220 L190 232Z" fill="#fff" /><path d="M250 220 V244" stroke="#2B7FD0" strokeWidth="3" />
      <rect x="320" y="236" width="50" height="10" fill="#2B7FD0" /><rect x="324" y="226" width="42" height="10" fill="#4B8FE8" /><rect x="136" y="244" width="8" height="12" fill="#2B7FD0" />
    </svg>
  )
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`}>{children}</div>
}

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="BrightSteps home">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect x="2" y="17" width="6" height="8" fill="#6CC4C0" />
        <rect x="11" y="11" width="6" height="14" fill="#4B8FE8" />
        <rect x="20" y="4" width="6" height="21" fill="#2B7FD0" />
      </svg>
      <span>BrightSteps</span>
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Our Work', '#work'], ['Our Impact', '#impact'], ['Stories', '#stories']]
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Logo />
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([t, h]) => <a key={t} href={h} onClick={() => setOpen(false)}>{t}</a>)}
        </nav>
        <div className="nav-right">
          <button className="lang" type="button">EN <ChevronDown size={14} /></button>
          <a href="#donate" className="btn btn-primary btn-sm">Donate</a>
          <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container hero-grid">
        <div>
          <p className="label">Children · Education · Hope</p>
          <h1>Every child deserves a chance to dream.</h1>
          <p className="lead">Your support helps children access education, nutritious food, healthcare and the opportunities they need to build a brighter future.</p>
          <div className="btn-row">
            <a href="#donate" className="btn btn-primary">Donate Now <ArrowRight size={18} /></a>
            <a href="#work" className="btn btn-ghost">See Our Work</a>
          </div>
          <ul className="chips">
            <li><Check size={16} /> Secure giving</li><li><Check size={16} /> Transparent impact</li><li><Check size={16} /> Every amount helps</li>
          </ul>
        </div>
        <div className="hero-media">
          <Photo src={IMG.hero} alt="Children learning together outdoors" className="hero-photo" art={<HeroArt />} />
          <div className="hero-stat"><strong>12,000+</strong><span>Children supported</span></div>
        </div>
      </div>
    </section>
  )
}

const AMOUNTS = [
  [500, 'Learning materials'], [1000, 'Nutritious meals'],
  [2500, 'Healthcare support'], [5000, 'Education & essential care'],
]

function Donation() {
  const [amount, setAmount] = useState(1000)
  const [custom, setCustom] = useState('')
  const [freq, setFreq] = useState('once')
  const [thanks, setThanks] = useState(false)
  const final = amount === 'custom' ? Number(custom) : amount
  const valid = final > 0
  const donate = () => { if (valid) { setThanks(true); setTimeout(() => setThanks(false), 3500) } }
  return (
    <section className="section donation" id="donate">
      <div className="container narrow">
        <Reveal>
          <h2>Your support can change a child's tomorrow.</h2>
          <p className="lead center">Choose how you would like to help.</p>
          <div className="card-box">
            <div className="toggle" role="tablist">
              {[['once', 'Give Once'], ['monthly', 'Give Monthly']].map(([k, t]) => (
                <button key={k} role="tab" aria-selected={freq === k} className={freq === k ? 'active' : ''} onClick={() => setFreq(k)}>{t}</button>
              ))}
            </div>
            <div className="amounts">
              {AMOUNTS.map(([v, d]) => (
                <button key={v} className={`amount ${amount === v ? 'selected' : ''}`} onClick={() => setAmount(v)} aria-pressed={amount === v}>
                  <strong>₹{v.toLocaleString('en-IN')}</strong><span>{d}</span>
                </button>
              ))}
              <button className={`amount custom ${amount === 'custom' ? 'selected' : ''}`} onClick={() => setAmount('custom')} aria-pressed={amount === 'custom'}>
                <strong>Custom Amount</strong>
                {amount === 'custom'
                  ? <input type="number" min="1" inputMode="numeric" autoFocus placeholder="₹ Enter amount" value={custom} onChange={e => setCustom(e.target.value)} onClick={e => e.stopPropagation()} />
                  : <span>Choose your own</span>}
              </button>
            </div>
            <button className="btn btn-primary btn-block" onClick={donate} disabled={!valid}>
              Donate Now{valid && ` · ₹${final.toLocaleString('en-IN')}${freq === 'monthly' ? '/month' : ''}`}
            </button>
            {thanks && <p className="thanks" role="status"><Check size={16} /> Thank you! This is a demo, so no payment was made.</p>}
            <p className="trust">Secure giving · Transparent impact · Every contribution matters</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Counter({ to, suffix = 'K+' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = t => { const p = Math.min((t - t0) / 1200, 1); setN(Math.round(to * p)); if (p < 1) requestAnimationFrame(tick) }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{n}{suffix}</span>
}

function Impact() {
  const stats = [[12, 'Children Supported'], [35, 'Learning Resources Provided'], [18, 'Meals Supported'], [4, 'Healthcare Interventions']]
  return (
    <section className="section impact" id="impact">
      <div className="container">
        <Reveal>
          <h2 className="center">Together, we are creating brighter futures.</h2>
          <div className="stats">
            {stats.map(([n, l]) => <div key={l}><strong><Counter to={n} /></strong><span>{l}</span></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function HowWeHelp() {
  const items = [
    [BookOpen, 'Education', 'Helping children access learning opportunities and educational resources.'],
    [Apple, 'Nutrition', 'Supporting nutritious meals and healthy development.'],
    [HeartPulse, 'Healthcare', 'Helping children access essential medical care.'],
    [Home, 'Safe Futures', 'Supporting safe environments and opportunities for children.'],
  ]
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <h2>How we help</h2>
          <div className="help-grid">
            {items.map(([Icon, t, d]) => (
              <article key={t} className="help">
                <span className="ico"><Icon size={26} strokeWidth={1.6} /></span>
                <h3>{t}</h3><p>{d}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Gallery() {
  const items = [[IMG.read, 'Education', 'A child reading a book in a library'], [IMG.meal, 'Nutrition', 'Children sharing a meal'], [IMG.hero, 'Learning together', 'Children learning together outdoors']]
  return (
    <section className="section gallery">
      <div className="container">
        <Reveal>
          <h2 className="center">Small steps, real change.</h2>
          <p className="lead center">Books, meals and a place to learn: the everyday things that help a child grow.</p>
          <div className="gallery-grid">
            {items.map(([src, t, alt]) => (
              <figure key={t}><Photo src={src} alt={alt} className="gal-photo" /><figcaption>{t}</figcaption></figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ChildStory() {
  return (
    <section className="section story" id="stories">
      <div className="container">
        <Reveal>
          <h2 className="center">Every child has a story.</h2>
          <div className="story-grid">
            <Photo src={IMG.maya} alt="A girl sitting on the grass holding a book" className="story-photo" art={<StoryArt />} />
            <div>
              <h3>Meet Maya</h3>
              <blockquote>Maya loves learning and dreams of becoming a teacher. With access to learning materials and continued support, she can focus on her education and build towards that dream.</blockquote>
              <a href="#stories" className="link">Read Her Story <ArrowRight size={16} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function DonationImpact() {
  /* Illustrative split for the demo only. Replace with real figures. */
  const rows = [
    ['Education', 'Learning materials and educational support.', 45],
    ['Health & Nutrition', 'Healthcare and nutritious meals.', 35],
    ['Safe Communities', 'Safe spaces and essential support.', 20],
  ]
  return (
    <section className="section">
      <div className="container narrow">
        <Reveal>
          <h2>Where your support makes a difference.</h2>
          <div className="bars">
            {rows.map(([t, d, p]) => (
              <div key={t} className="bar-row">
                <div className="bar-head"><h3>{t}</h3><span>{p}%</span></div>
                <div className="bar"><i style={{ width: `${p}%` }} /></div>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="note">Illustrative allocation shown for design purposes.</p>
        </Reveal>
      </div>
    </section>
  )
}

function GlobalSection() {
  return (
    <section className="section global bg-photo" style={{ '--bg-img': `url(${IMG.hero})` }}>
      <div className="container narrow center">
        <Reveal>
          <h2>Every child deserves the same opportunity to thrive.</h2>
          <p className="lead center">From education to essential care, we believe every child should have the opportunity to learn, grow and dream.</p>
        </Reveal>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="section cta bg-photo" style={{ '--bg-img': `url(${IMG.meal})` }}>
      <div className="container narrow center">
        <Reveal>
          <h2>Help build a brighter future for a child.</h2>
          <p className="lead center">Your contribution today can provide education, care and opportunity where it is needed most.</p>
          <a href="#donate" className="btn btn-primary">Donate Today <ArrowRight size={18} /></a>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  const links = ['About', 'Our Work', 'Impact', 'Stories', 'Contact', 'Donate']
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Logo /><p>Every child deserves a chance to dream.</p><div className="contact-details"><strong>Jaya Shivaani</strong><a href="tel:9489106280">Contact: 9489106280</a><a href="mailto:jayashivaani2005@gmail.com">Email: jayashivaani2005@gmail.com</a></div></div>
        <ul>{links.map(l => <li key={l}><a href="#top">{l}</a></li>)}</ul>
        <div className="foot-right">
          <div className="social">
            {[[Instagram, 'Instagram'], [Facebook, 'Facebook'], [Linkedin, 'LinkedIn']].map(([I, n]) => <a key={n} href="#top" aria-label={n}><I size={20} /></a>)}
          </div>
          <button className="lang" type="button">English <ChevronDown size={14} /></button>
        </div>
      </div>
      <div className="container copy"><span>© 2026 BrightSteps. All rights reserved.</span><span>Photos: Yannis H, Quỳnh Lê Mạnh, Arthur Tseng, freetime Jam via Unsplash</span></div>
    </footer>
  )
}

export default function App() {
  return (
    <div id="top">
      <Navbar /><main>
        <Hero /><Donation /><Impact /><Gallery /><HowWeHelp /><ChildStory /><DonationImpact /><GlobalSection /><FinalCTA />
      </main><Footer />
    </div>
  )
}
