// App.js
import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import { 
  FaInstagram, 
  FaYoutube, 
  FaPinterest, 
  FaArtstation, 
  FaItchIo, 
  FaCoffee 
} from 'react-icons/fa';

// Görseller
const iconCoffe = '/assets/icon-coffe.png';
const iconCode = '/assets/icon-code.png';
const iconKrita = '/assets/icon-krita.png';

const userData = {
  name: "Yawnie",
  title: "Designer · Developer · Founder",
  class: "Creator / Builder",
  level: 19,
  exp: "5,640 / 10,000",
  hp: 100,
  stats: { 
    Coding: 84, 
    Design: 95, 
    Creativity: 99, 
    Chaos: 99, 
    Curious: 100 
  },
  skills: [
    "UI/UX Design", 
    "Frontend Development", 
    "Branding & Identity", 
    "Art & Software development"
  ],
  tools: [
    { name: "VS Code", icon: iconCode },
    { name: "Figma", icon: iconKrita },
    { name: "Coffee", icon: iconCoffe }
  ],
  currentQuest: "Building multiple passive-income projects",
  projects: [
    { 
      id: 1,
      title: "Sleepy Pie Bakery", 
      desc: "Main platform & ecosystem for my digital bakery.", 
      tags: "Web Design · Development",
      category: "Websites",
      img: "/assets/sleepy-pie-bakery.png",
      alt: "Sleepy Pie Bakery - Main platform and ecosystem for digital bakery"
    },
    { 
      id: 2,
      title: "Cooky's Capybara Cafe", 
      desc: "Cute capybara cafe app with cozy vibes.", 
      tags: "App",
      category: "App",
      img: "/assets/cooky-capybara-cafe.png",
      alt: "Cooky's Capybara Cafe - Cute capybara cafe mobile app"
    },
    { 
      id: 3,
      title: "Lunaspis", 
      desc: "Pixel art fight game with mystical moon theme.", 
      tags: "Game Development",
      category: "Games",
      img: "/assets/lunaspis-game.png",
      alt: "Lunaspis - Pixel art fight game with mystical moon theme"
    },
  ]
};

const categories = ["All", "Websites", "App", "Brands", "Games", "Other"];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? userData.projects 
    : userData.projects.filter(p => p.category === activeCategory);

  return (
    <HelmetProvider>
      <div className="creator-page">
        {/* SEO Meta Etiketleri */}
        <Helmet>
          <html lang="tr" />
          <title>Yawnie | Sleepy Pie Bakery - Dreamy Digital Spaces & Cute Things</title>
          <meta name="description" content="Yawnie's portfolio - UI/UX Designer & Frontend Developer. Building dreamy digital spaces, cute pixel art, game interfaces and cozy apps." />
          <meta name="keywords" content="portfolio, ui/ux design, frontend development, pixel art, game ui, game development, app design, sleepy pie bakery, yawnie, capybara cafe, lunaspis" />
          <meta name="author" content="Yawnie" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Yawnie | Sleepy Pie Bakery" />
          <meta property="og:description" content="Dreamy digital spaces, cute pixel art, game interfaces and cozy apps by Yawnie." />
          <meta property="og:image" content="https://sleepypiebakery.art/assets/portfolio-banner.png" />
          <meta property="og:url" content="https://sleepypiebakery.art" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Sleepy Pie Bakery" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Yawnie | Sleepy Pie Bakery" />
          <meta name="twitter:description" content="Dreamy digital spaces, cute pixel art, game interfaces and cozy apps by Yawnie." />
          <meta name="twitter:image" content="https://sleepypiebakery.art/assets/portfolio-banner.png" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://sleepypiebakery.art" />
          
          {/* Schema.org - Kişi */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Yawnie",
                "jobTitle": "UI/UX Designer & Frontend Developer",
                "url": "https://sleepypiebakery.art",
                "sameAs": [
                  "https://www.instagram.com/yawn.pie",
                  "https://www.youtube.com/@yawn.pi3",
                  "https://yawnpie.itch.io",
                  "https://www.artstation.com/yawniepie",
                  "https://www.pinterest.com/yawnpie"
                ],
                "description": "Designer & Developer creating dreamy digital spaces, cute pixel art and cozy apps.",
                "image": "https://sleepypiebakery.art/assets/wizard-yawn.png"
              }
            `}
          </script>
          
          {/* Schema.org - Projeler */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Featured Projects",
                "description": "Some of my favorite things I built.",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "CreativeWork",
                      "name": "Sleepy Pie Bakery",
                      "description": "Main platform & ecosystem for my digital bakery.",
                      "url": "https://sleepypiebakery.art"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "CreativeWork",
                      "name": "Cooky's Capybara Cafe",
                      "description": "Cute capybara cafe app with cozy vibes."
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "CreativeWork",
                      "name": "Lunaspis",
                      "description": "Pixel art fight game with mystical moon theme."
                    }
                  }
                ]
              }
            `}
          </script>
        </Helmet>

        {/* HERO */}
        <section className="creator-hero">
          <div className="hero-banner">
            <img 
              src="/assets/portfolio-banner.png" 
              alt="Yawnie portfolio banner - Dreamy digital spaces and cute things" 
              className="banner-image"
              loading="lazy"
              width="1200"
              height="450"
            />
            <div className="hero-note-wrapper">
              <div className="hero-note">
                <div className="tape tape-left"></div>
                <div className="tape tape-right"></div>
                <h1>Hi, I'm {userData.name}!</h1>
                <p className="hero-tagline">I build dreamy digital spaces and cute things.</p>
                <p className="hero-roles">
                  <span>{userData.title}</span>
                </p>
                <p className="hero-desc">
                  I turn ideas into real products, websites and experiences that make people smile.
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary">View Projects</button>
                  <button className="btn-secondary">My Playground</button>
                  <button className="btn-secondary">My Portfolio</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section">
          <div className="about-wrapper">
            {/* Wizard - Sol */}
            <div className="about-left">
              <div className="wizard-card">
                <img 
                  src="/assets/wizard-yawn.png" 
                  alt="Yawnie - Sleepy Pie Bakery mascot wizard character" 
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              {/* EXP Bar - Wizard altı */}
              <div className="wizard-exp-bar">
                <span>EXP {userData.exp}</span>
                <div className="wizard-bar-track">
                  <div className="wizard-bar-fill" style={{ width: '56%' }}></div>
                </div>
              </div>
            </div>

            {/* Tüm Kartlar - Sağ */}
            <div className="about-right">
              <div className="about-content">
                {/* ABOUT ME */}
                <div className="about-me-section">
                  <h2 className="section-title">✨ ABOUT ME</h2>
                  <div className="about-me-grid">
                    <div className="about-me-item">
                      <span className="label">CLASS</span>
                      <p className="value">{userData.class}</p>
                    </div>
                    <div className="about-me-item">
                      <span className="label">LEVEL</span>
                      <p className="value">{userData.level}</p>
                    </div>
                  </div>
                </div>

                {/* SKILLS */}
                <div className="skills-section">
                  <h2 className="section-title">⚡ SKILLS</h2>
                  <ul className="skills-list">
                    {userData.skills.map((skill, i) => (
                      <li key={i}>✦ {skill}</li>
                    ))}
                  </ul>
                </div>

                {/* TOOLS + CURRENT QUEST */}
                <div className="tools-section">
                  <h2 className="section-title">🛠️ FAVORITE TOOLS</h2>
                  <div className="tools-icons">
                    {userData.tools.map((tool, i) => (
                      <div key={i} className="tool-item">
                        <img 
                          src={tool.icon} 
                          alt={tool.name} 
                          loading="lazy"
                          width="40"
                          height="40"
                        />
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="current-quest">
                    <h3>📌 CURRENT QUEST</h3>
                    <p>{userData.currentQuest}</p>
                  </div>
                </div>

                {/* STATUS */}
                <div className="status-section">
                  <h2 className="section-title">📊 STATUS</h2>
                  <p className="hp-text">❤️ HP (Health) {userData.hp}</p>
                  {Object.entries(userData.stats).map(([stat, value]) => (
                    <div key={stat} className="stat-row">
                      <span className="stat-label">{stat}</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: `${value}%` }}></div>
                      </div>
                      <span className="stat-value">{value}</span>
                    </div>
                  ))}
                  <p className="quote">🌸 Saving the world one cute project at a time...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section">
          <div className="projects-container">
            <h2>🌟 FEATURED PROJECTS</h2>
            <p className="projects-subtitle">Some of my favorite things I built.</p>
            
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="project-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="project-card notion-card">
                  <div className="project-thumbnail">
                    <img 
                      src={project.img} 
                      alt={project.alt || project.title} 
                      loading="lazy"
                      width="800"
                      height="800"
                      decoding="async"
                    />
                    <span className="project-category">{project.category}</span>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.desc || "Coming soon..."}</p>
                    <span className="project-tags">{project.tags}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="creator-footer">
          <div className="footer-container">
            <div className="footer-banner-left">
              <img 
                src="/assets/footer-banner.png" 
                alt="Sleepy Pie Bakery footer banner" 
                loading="lazy"
                width="1200"
                height="300"
              />
            </div>
            
            <div className="footer-card-right">
              <div className="footer-card">
                <p className="footer-quote">
                  "I don't like building ordinary products. I like building worlds people remember."
                </p>
                
                <div className="footer-social">
                  <a href="https://www.artstation.com/yawniepie" aria-label="Artstation"><FaArtstation /></a>
                  <a href="https://www.youtube.com/@yawn.pi3" aria-label="YouTube"><FaYoutube /></a>
                  <a href="https://yawnpie.itch.io" aria-label="Itch.io"><FaItchIo /></a>
                  <a href="https://www.instagram.com/yawn.pie" aria-label="Instagram"><FaInstagram /></a>
                  <a href="https://www.pinterest.com/yawnpie" aria-label="Pinterest"><FaPinterest /></a>
                </div>
                
                <div className="footer-links">
                  <span><FaCoffee /> Coffee</span>
                  <span>My Portfolio</span>
                  <span>About Me</span>
                  <span>Status</span>
                  <span>Featured Projects</span>
                </div>
                
                <div className="footer-meta">
                  <p>✨ Thanks for stopping by! I'm Yawnie!</p>
                  <p className="footer-extra">
                    More in the oven... Game Assets Pack · Interactive Story · Mobile App UI · And more!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;