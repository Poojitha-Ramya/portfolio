"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    icon: "🤖",
    title: "AI-Powered Internship Recommendation Platform",
    desc: "Full-stack LLM application that parses uploaded resumes and uses OpenAI GPT embeddings with vector-based semantic matching to rank internships by relevance — beyond simple keyword search using RAG principles.",
    tags: ["React", "FastAPI", "OpenAI API", "Python", "Vector Embeddings"],
    github: "https://github.com/Poojitha-Ramya",
  },
  {
    icon: "🚗",
    title: "Distracted Driver Detection System",
    desc: "Real-time computer vision classifier using pre-trained VGG16 and CNN-based feature extraction to categorize driver behaviour as safe or distracted. Applied transfer learning for robust binary classification.",
    tags: ["Python", "VGG16", "CNN", "Transfer Learning", "Deep Learning"],
    github: "https://github.com/Poojitha-Ramya",
  },
  {
    icon: "🎓",
    title: "Campus Management System",
    desc: "Smart campus administration platform for managing students, faculty, and courses using React.js with fully responsive SPA design and local storage persistence layer — built during BRVS Tech internship.",
    tags: ["React.js", "Local Storage", "SPA", "JavaScript"],
    github: "https://github.com/Poojitha-Ramya",
  },
  {
    icon: "🎨",
    title: "GAN Text-to-Animation (Research)",
    desc: "Published research proposing a GAN-based pipeline to automatically convert social media text into animated visual sequences — a novel cross-modal generative AI application bridging NLP and computer vision.",
    tags: ["Python", "GAN", "NLP", "Computer Vision", "Deep Learning"],
    github: "https://github.com/Poojitha-Ramya",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="section-shell" style={{ padding: "90px 7%", background: "var(--bg)" }}>
      <div className="reveal" style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: ".6rem" }}>Projects</p>
        <h2 className="section-heading" style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, marginBottom: ".5rem" }}>What I&apos;ve Built</h2>
        <p style={{ color: "#9090b0" }}>Production-style applications spanning AI, ML, and full-stack development.</p>
      </div>

      <div className="reveal projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
        {projects.map((p) => (
          <div
            key={p.title}
            className="projects-card"
            style={{ background: "var(--card)", border: "1px solid rgba(180,80,220,0.18)", borderRadius: "14px", padding: "26px", transition: "border-color .2s, transform .2s", cursor: "default" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(200,85,240,0.5)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(180,80,220,0.18)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
              <span style={{ fontSize: "1.6rem" }}>{p.icon}</span>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-github-btn"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "#9090b0", padding: "5px 12px", borderRadius: "6px", fontSize: ".78rem", textDecoration: "none", transition: "color .2s, border-color .2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#c855f0"; e.currentTarget.style.borderColor = "#c855f0"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#9090b0"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                GitHub
              </a>
            </div>
            <h3 className="project-title" style={{ fontFamily: "Syne, sans-serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px" }}>{p.title}</h3>
            <p style={{ color: "#9090b0", fontSize: ".88rem", marginBottom: "14px", lineHeight: 1.65 }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {p.tags.map((t) => (
                <span key={t} style={{ background: "rgba(180,60,240,0.13)", border: "1px solid rgba(200,85,240,0.3)", borderRadius: "999px", padding: "4px 11px", fontSize: ".78rem" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
