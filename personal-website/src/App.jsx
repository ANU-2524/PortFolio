import React, { useEffect, useState, useRef } from "react";
import "./App.css"
export default function AnuSoniPortfolio() {
  const [theme, setTheme] = useState("light");
  const [modalProject, setModalProject] = useState(null);
  const heroButtonRef = useRef(null);
  

  useEffect(() => {
    const css = `
    :root{
      --bg: #0f1724;
      --card: rgba(255,255,255,0.06);
      --accent: #7c3aed; /* purplish */
      --accent-2: #6ee7b7; /* mint */
      --glass: rgba(255,255,255,0.04);
      --glass-2: rgba(255,255,255,0.06);
      --text: #e6eef8;
      --muted: #9fb0c8;
      --glass-border: rgba(255,255,255,0.06);
    }
    [data-theme="light"]{
      --bg: linear-gradient(180deg, #f7f8fb 0%, #eef2ff 100%);
      --card: rgba(10,10,12,0.03);
      --text: #071022;
      --muted: #334155;
      --glass: rgba(255,255,255,0.7);
      --glass-2: rgba(255,255,255,0.85);
      --glass-border: rgba(16,24,40,0.06);
    }

    *{box-sizing:border-box}
    html,body,#root{height:100%;}
    body{
      margin:0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background: var(--bg);
      color:var(--text);
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }

    /* page layout */
    .site{min-height:100vh;display:flex;flex-direction:column;gap:48px;padding:48px;position:relative;overflow-x:hidden}

    /* floating blobs background */
    .blobs{position:fixed;inset:0;z-index:0;pointer-events:none}
    .blob{position:absolute;filter:blur(60px);opacity:0.85;mix-blend-mode:screen}
    .blob.b1{width:420px;height:420px;background:radial-gradient(circle at 30% 30%, #7c3aed, transparent 50%);left:-80px;top:-120px}
    .blob.b2{width:380px;height:380px;background:radial-gradient(circle at 70% 70%, #06b6d4, transparent 45%);right:-100px;top:30%}
    .blob.b3{width:260px;height:260px;background:radial-gradient(circle at 50% 40%, #f97316, transparent 45%);left:50%;top:65%;transform:translateX(-50%)}

    /* header / nav */
    header{display:flex;justify-content:space-between;align-items:center;gap:16px;position:relative;z-index:5}
    .logo{display:flex;align-items:center;gap:12px}
    .logo .mark{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#7c3aed,#6ee7b7);display:flex;align-items:center;justify-content:center;font-weight:700;color:white}
    .logo h1{font-size:14px;margin:0}

    .nav-actions{display:flex;align-items:center;gap:12px}
    .btn{background:linear-gradient(90deg,var(--accent),var(--accent-2));border:none;padding:10px 14px;border-radius:12px;color:#071022;font-weight:600;cursor:pointer;box-shadow:0 6px 18px rgba(124,58,237,0.18);transition:transform .18s ease,box-shadow .18s}
    .btn:active{transform:translateY(1px)}
    .ghost{background:transparent;border:1px solid var(--glass-border);padding:8px 12px;border-radius:12px;color:var(--text);cursor:pointer}

    /* hero */
    .hero{display:grid;grid-template-columns:1fr 420px;gap:36px;align-items:center;padding:28px;border-radius:20px;background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);backdrop-filter:blur(6px);border:1px solid var(--glass-border);position:relative;z-index:3}
    .hero .intro{max-width:780px}
    .eyebrow{display:inline-flex;gap:8px;align-items:center;background:linear-gradient(90deg,rgba(255,255,255,0.03),transparent);padding:6px 10px;border-radius:999px;font-weight:600;color:var(--muted);font-size:13px}
    .title{font-size:40px;line-height:1.02;margin:16px 0 8px}
    .subtitle{font-size:18px;color:var(--muted);margin-bottom:18px}

    .hero .cta-row{display:flex;gap:12px;align-items:center}
    .email-pill{background:rgba(0,0,0,0.25);padding:10px 12px;border-radius:999px;color:var(--text);font-weight:600;border:1px solid var(--glass-border)}

    /* preview card */
    .preview-card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:18px;border-radius:16px;border:1px solid var(--glass-border);backdrop-filter:blur(6px)}
    .device-mock{width:100%;height:260px;border-radius:12px;background:linear-gradient(180deg,#071022, #0b1220);position:relative;overflow:hidden;box-shadow:0 8px 40px rgba(2,6,23,0.6)}
    .code-lines{position:absolute;inset:20px;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono";font-size:12px;color:#cbd5e1;opacity:0.9}

    /* sections */
    section{padding:28px;border-radius:18px;background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent);border:1px solid var(--glass-border);backdrop-filter:blur(6px);}

    .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}

    /* tech stack */
    .chips{display:flex;flex-wrap:wrap;gap:10px}
    .chip{padding:8px 10px;border-radius:12px;background:var(--card);font-weight:600;color:var(--text);border:1px solid rgba(255,255,255,0.03)}

    /* projects */
    .projects{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .card{padding:18px;border-radius:14px;background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);border:1px solid var(--glass-border);cursor:pointer;transition:transform .2s ease,box-shadow .2s}
    .card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(2,6,23,0.55)}
    .card .tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
    .tag{font-size:12px;padding:6px 8px;border-radius:999px;background:rgba(255,255,255,0.03)}

    /* project modal */
    .modal{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(3,6,23,0.6);z-index:40}
    .modal-card{max-width:920px;width:92%;padding:24px;border-radius:14px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border:1px solid var(--glass-border)}

    /* footer */
    footer{display:flex;justify-content:space-between;align-items:center;gap:12px}

    /* small screens */
    @media (max-width:980px){
      .hero{grid-template-columns:1fr;}
      .projects,.grid-3{grid-template-columns:repeat(1,1fr)}
      .logo h1{display:none}
      .blobs{display:none}
      .site{padding:20px}
    }

    /* micro-animations */
    @keyframes floaty{0%{transform:translateY(0)}50%{transform:translateY(-16px)}100%{transform:translateY(0)}}
    .blob{animation:floaty 9s ease-in-out infinite}

    /* subtle pulse on hero CTA */
    @keyframes pulse{0%{box-shadow:0 6px 18px rgba(124,58,237,0.08)}50%{box-shadow:0 18px 60px rgba(124,58,237,0.12)}100%{box-shadow:0 6px 18px rgba(124,58,237,0.08)}}
    .btn-cta{animation:pulse 6s infinite}

    /* interactive card tilt */
    .tilt{transform-style:preserve-3d;transition:transform .18s ease}

    `;

    const style = document.createElement("style");
    style.setAttribute("data-owner","anu-portfolio");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

const projects = [
  {
    title: "JustCoding",
    github: "https://github.com/ANU-2524/JustCoding",
    demo: "https://just-coding-theta.vercel.app/",
    description: "An interactive hub where coders practice, share, and grow together — code meets community.",
  },
  {
    title: "SnapSendSmile",
    github: "https://github.com/ANU-2524/Snap-Send-Smile",
    demo: "https://snap-send-smile.vercel.app/",
    description: "Capture a moment, send it in a snap, and spread smiles instantly — simple, fast, joyful.",
  },
  {
    title: "DSA Instructor",
    github: "https://github.com/ANU-2524/DSA-Instructor",
    demo: "https://onlydsa.netlify.app/",
    description: "Your personal AI mentor for mastering Data Structures & Algorithms — learn by doing.",
  },
  {
    title: "MindSpirit",
    github: "https://github.com/ANU-2524/MindSpirit",
    demo: "https://mind-spirit.netlify.app/",
    description: "A mindful space that blends productivity with peace — focus your tasks, free your mind.",
  },
  {
    title: "Weather App",
    github: "https://github.com/ANU-2524/Weather-App-Python",
    demo: "#",
    description: "Real-time weather insights with a clean, minimal interface — powered by Python.",
  },
  {
    title: "CollabNerds - CAPSTONE PROJECT",
    github: "https://github.com/kalviumcommunity/S_84_ANU_CAPSTONE_CollabNerds",
    demo: "https://glowing-melba-4fb0ac.netlify.app/",
    description: "A collaborative playground where developers connect, build, and innovate together.",
  },
];

  function openModal(p) {
    setModalProject(p);
  }
  function closeModal() {
    setModalProject(null);
  }

  // tilt mouse effect for cards
  function handleTilt(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    const tiltX = dy * -6; // tilt strength
    const tiltY = dx * 8;
    el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(8px)`;
  }
  function resetTilt(e) {
    e.currentTarget.style.transform = `none`;
  }

  return (
    <div className="site" style={{zIndex:1}}>
      <div className="blobs" aria-hidden>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
      </div>

<header>
  <div className="logo">
    <div className="mark">AS</div>
    <div>
      <h1>Anu</h1>
      <div style={{ color: 'var(--muted)' }}>B.Tech CSE — Developer</div>
    </div>
  </div>

  <div className="nav-actions">
    {/* Toggle Theme */}
    <button
      className="theme-toggle"
      onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
      title="Toggle Theme"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>

    {/* Resume Button */}
    <a
      href="../public/ANU.docx"
      target="_blank"
      rel="noopener noreferrer"
      className="btn resume-btn"
    >
      📄 Resume
    </a>

    {/* Get in Touch Button */}
    <a
      href="#contact"
      className="btn contact-btn"
      ref={heroButtonRef}
    >
      ✉️ Get in Touch
    </a>
  </div>

  <style jsx>{`
    .nav-actions {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }

    .theme-toggle {
      background: transparent;
      border: 1px solid var(--muted);
      padding: 0.4rem 0.8rem;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
    }

    .theme-toggle:hover {
      background: var(--muted);
      color: var(--bg);
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: 0.3s ease-in-out;
    }

    .resume-btn {
      background: linear-gradient(45deg, #7b2ff7, #f107a3);
      color: white;
    }
    .resume-btn:hover {
      transform: translateY(-2px) scale(1.05);
    }

    .contact-btn {
      background: linear-gradient(45deg, #00c6ff, #0072ff);
      color: white;
    }
    .contact-btn:hover {
      transform: translateY(-2px) scale(1.05);
    }
  `}</style>
</header>



      <main style={{display:'grid',gap:20}}>
        <section className="hero">
          <div className="intro">
              <div className="hero-photo">
    <img
      src="/MyPic.png"
      alt="Anu Soni"
      className="big-profile-photo"
    />
  </div>
            <div className="eyebrow">Hi, I’m Anu — B.Tech CSE</div>
            <h2 className="title">I build intuitive web apps and AI-powered solutions to make coding less frustrating — and more fun.</h2>
            <p className="subtitle">Developer • Innovator • Collaborator
              <br />Projects like JustCode, SnapSendSmile, and CollabNerds bring code to life — and people closer together.</p>
            <div className="cta-row">
              <a className="btn btn-cta" href="#projects">See Projects</a>
              <div className="email-pill">📬 anusoni25.2006@gmail.com</div>
            </div>

            <div style={{marginTop:22}}>
              <strong>Quick facts:</strong>
              <ul style={{marginTop:8,color:'var(--muted)'}}>
                <li>Passionate Computer Science student at Chitkara University.</li>
                <li>Enjoys badminton, non-fiction books, and LeetCode practice.</li>
              </ul>
            </div>
          </div>

<div className="preview-card">
  <div className="device-mock">
    <div className="code-snippet">
      <pre>
        <code>
{`// 🚀 JustCode — Your AI Coding Buddy
function explain(code) {
  if (!code) {
    return "⚠️ Please provide some code!";
  }
  // 🤖 Let GPT work its magic...
  return GPT.explain(code)
    .then(res => res + " ✨")
    .catch(err => "❌ Oops: " + err);
}

`}
        </code>
        <span className="cursor"></span>
      </pre>
    </div>
  </div>
</div>

        </section>

        <section id="about">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h3 style={{margin:0}}>About Me</h3>
            <div style={{color:'var(--muted)'}}>B.Tech CSE • Chitkara University</div>
          </div>
          <div style={{marginTop:12,color:'var(--muted)'}}>
            I am a passionate Computer Science student who loves transforming ideas into elegant code and meaningful user experiences. I design AI tools, build collaborative platforms, and obsess over making developer workflows delightful.
          </div>
        </section>

        <section>
          <h3 style={{marginTop:0}}>Tech Stack & Skills</h3>
          <div className="grid-3" style={{marginTop:12}}>
            <div className="card">
              <h4>Languages & Frameworks</h4>
              <div className="chips" style={{marginTop:12}}>
                <div className="chip">JavaScript</div>
                <div className="chip">React.js</div>
                <div className="chip">Node.js</div>
                <div className="chip">Express.js</div>
                <div className="chip">Python</div>
                <div className="chip">Java</div>
                <div className="chip">C++</div>
              </div>
            </div>
            <div className="card">
              <h4>Databases & Tools</h4>
              <div className="chips" style={{marginTop:12}}>
                <div className="chip">MongoDB</div>
                <div className="chip">Firebase</div>
                <div className="chip">Socket.IO</div>
                <div className="chip">JWT</div>
              </div>
            </div>
            <div className="card">
              <h4>Tools & Platform</h4>
              <div className="chips" style={{marginTop:12}}>
                <div className="chip">Render</div>
                <div className="chip">Netlify</div>
                <div className="chip">Postman</div>
                <div className="chip">Figma</div>
                 <div className="chip">Vercel</div>
                  <div className="chip">Linux</div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h3 style={{margin:0}}>Featured Projects</h3>
            <div style={{color:'var(--muted)'}}>Selected highlights — click a card to view details</div>
          </div>

          <div className="projects" style={{ marginTop: 16 }}>
  {projects.map((p) => (
    <div
      key={p.title}
      className="card tilt"
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      onClick={() => openModal(p)}
      role="button"
      tabIndex={0}
    >
      <h4 style={{ margin: 0 }}>{p.title}</h4>
      <div style={{ color: "var(--muted)", marginTop: 8 }}>
        {p.description}
      </div>


      {/* GitHub & Live Demo buttons */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <a
          className="ghost"
          href={p.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub
        </a>
        <a
          className="ghost"
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          Live Demo
        </a>
      </div>
    </div>
  ))}
</div>

        </section>

        <section id="other-projects">
          <h3 style={{marginTop:0}}>Other Projects & Tools</h3>
          <div style={{marginTop:10,color:'var(--muted)'}}>
            <ul>
              <li>DSA Instructor — AI-powered chatbot for learning DSA. Live demo available.</li>
              <li>MindSpirit — Minimalist task manager focused on mindfulness and simplicity.</li>
              <li>Truth or Dare, Weather App (Python), and smaller utilities.</li>
            </ul>
          </div>
        </section>

<section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
  <h3 style={{
    marginTop: 0,
    fontSize: '2.2rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  }}>
    <span style={{ display: 'inline-block', animation: 'floatIcon 2s infinite ease-in-out' }}>📫</span>
    Let’s Connect
  </h3>

  <div style={{
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
    marginTop: 20,
    padding: '25px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
    backdropFilter: 'blur(15px)',
    border: '1px solid var(--glass-border)',
    boxShadow: '0 10px 35px rgba(0,0,0,0.2)',
    animation: 'fadeInUp 0.8s ease-out'
  }}>
    {/* Left side */}
    <div style={{ flex: 1, minWidth: 260 }}>
      <p style={{ color: 'var(--muted)', fontSize: '1.15rem', lineHeight: '1.6' }}>
        Whether you want to collaborate, share ideas, or just say <span style={{ color: 'var(--accent)', fontWeight: 600 }}>hello</span> 👋 — I’m always happy to chat.  
        Expect a reply within 24 hours.
      </p>
      <div style={{ marginTop: 15 }}>
        <strong style={{ fontSize: '1.1rem' }}>Email : </strong>
        <div style={{
          marginTop: 8,
          display: 'inline-block',
          padding: '8px 14px',
          background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
          color: '#4f4d4dff',
          borderRadius: '20px',
          fontWeight: 500,
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
          anusoni25.2006@gmail.com
        </div>
      </div>
    </div>

    {/* Right side - Form */}
    <form
      style={{ flex: 1, minWidth: 260 }}
      onSubmit={(e) => {
        e.preventDefault();
        alert('✅ Message sent! I’ll get back to you soon.');
      }}
    >
      <label style={{ display: 'block', fontWeight: 700 }}>Your Email : </label>
      <input
        required
        type="email"
        placeholder="you@example.com"
        style={{
          width: '100%',
          padding: 12,
          borderRadius: 12,
          border: '1px solid var(--glass-border)',
          marginTop: 8,
          background: 'rgba(255,255,255,0.08)',
          color: 'var(--text)',
          outline: 'none',
          transition: 'border 0.3s ease'
        }}
        onFocus={(e) => (e.target.style.border = '1px solid var(--accent)')}
        onBlur={(e) => (e.target.style.border = '1px solid var(--glass-border)')}
      />

      <label style={{ display: 'block', fontWeight: 700, marginTop: 12 }}>Message : </label>
      <textarea
        required
        rows={4}
        placeholder="Hi Anu — I’d love to collaborate on..."
        style={{
          width: '100%',
          padding: 12,
          borderRadius: 12,
          border: '1px solid var(--glass-border)',
          marginTop: 8,
          background: 'rgba(255,255,255,0.08)',
          color: 'var(--text)',
          resize: 'none',
          outline: 'none',
          transition: 'border 0.3s ease'
        }}
        onFocus={(e) => (e.target.style.border = '1px solid var(--accent)')}
        onBlur={(e) => (e.target.style.border = '1px solid var(--glass-border)')}
      />

      <button
        className="btn"
        style={{
          marginTop: 14,
          width: '100%',
          padding: '12px',
          borderRadius: 12,
          background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
          color: '#4b4747ff',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
        }}
      >
        Send Message
      </button>
    </form>
  </div>

  <style>
    {`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes floatIcon {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
    `}
  </style>
</section>


      </main>

      <footer>
        <div style={{color:'var(--muted)'}}>Made with ❤️ by Anu !...</div>
        <div style={{display:'flex',gap:12}}>
          <a className="ghost" href="https://github.com/ANU-2524" target="_blank" rel="noreferrer">GitHub</a>
          <a className="ghost" href="https://www.linkedin.com/in/anu--soni/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>

      {/* modal */}
{modalProject && (
  <div className="modal" onClick={closeModal} role="dialog">
    <div
      className="modal-card"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>{modalProject.title}</h3>
      </div>
      <p style={{ color: "var(--muted)" }}>
        {modalProject.description}
      </p>

      {/* Links */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <a
          className="btn"
          href={modalProject.demo}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <a
          className="ghost"
          href={modalProject.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <button className="ghost" onClick={closeModal}>
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
}
