"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  { title: "Languages", tags: ["Python", "JavaScript", "Java", "SQL"] },
  { title: "Frontend", tags: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend & APIs", tags: ["FastAPI", "REST APIs", "SPA Architecture"] },
  { title: "AI / ML", tags: ["Scikit-Learn", "TensorFlow", "VGG16", "CNN", "OpenAI API", "Deep Learning"] },
  { title: "Generative AI", tags: ["GAN", "Prompt Engineering", "GPT Embeddings", "RAG", "LLM Integration"] },
  { title: "Databases", tags: ["MySQL", "SQLite", "Local Storage"] },
  { title: "Tools", tags: ["Git", "GitHub", "VS Code"] },
  { title: "Core CS", tags: ["DSA", "OOP", "DBMS", "OS"] },
];

export default function Skills() {
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
    <section id="skills" ref={ref} className="section-shell" style={{ padding: "90px 7%", background: "var(--bg2)" }}>
      <div className="reveal" style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: ".6rem" }}>Skills</p>
        <h2 className="section-heading" style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, marginBottom: ".5rem" }}>Tech Stack</h2>
        <p style={{ color: "#9090b0" }}>Technologies I work with across the full development lifecycle.</p>
      </div>

      <div className="reveal skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }}>
        {skillGroups.map((g) => (
          <div key={g.title} className="skills-card" style={{ background: "var(--card)", border: "1px solid rgba(180,80,220,0.18)", borderRadius: "12px", padding: "22px" }}>
            <p style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: "14px" }}>{g.title}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {g.tags.map((t) => (
                <span key={t} style={{ background: "rgba(180,60,240,0.13)", border: "1px solid rgba(200,85,240,0.3)", borderRadius: "999px", padding: "5px 13px", fontSize: ".8rem" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
