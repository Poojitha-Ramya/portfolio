"use client";
import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about" ref={ref} className="section-shell" style={{ padding: "90px 7%", background: "var(--bg)" }}>
      <div className="reveal" style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: ".6rem" }}>About</p>
        <h2 className="section-heading" style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, marginBottom: ".5rem" }}>Who I Am</h2>
        <p style={{ color: "#9090b0", maxWidth: "540px" }}>AI/ML engineer specializing in machine learning models and data-driven solutions, focused on solving real-world problems through intelligent systems.</p>
      </div>

      {/* Stats */}
      <div className="reveal about-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { num: "9.5", lbl: "CGPA / 10.0" },
          { num: "1", lbl: "Published Paper" },
          { num: "4+", lbl: "AI Projects Built" },
          { num: "6+", lbl: "Certifications" },
        ].map((s) => (
          <div key={s.lbl} className="about-stat-card" style={{ background: "var(--card)", border: "1px solid rgba(180,80,220,0.18)", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: "2.2rem", fontWeight: 800, color: "#c855f0" }}>{s.num}</div>
            <div style={{ color: "#9090b0", fontSize: ".82rem", marginTop: "4px" }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Background */}
      <div className="reveal about-bg-card" style={{ background: "var(--card)", border: "1px solid rgba(180,80,220,0.18)", borderRadius: "14px", padding: "28px 32px" }}>
        <p style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: "1rem" }}>Background</p>
        <p style={{ color: "#9090b0", lineHeight: 1.8, marginBottom: "1rem" }}>
          I am a final-year B.Tech (AI &amp; ML) student at GMR Institute of Technology with a 9.50 CGPA. I build production-quality AI and full-stack applications — from LLM-powered recommendation engines using OpenAI GPT embeddings and vector search, to deep learning classifiers like a Distracted Driver Detection system using fine-tuned VGG16.
        </p>
        <p style={{ color: "#9090b0", lineHeight: 1.8 }}>
          I have also published a research paper on GAN-based text-to-animation conversion, bridging generative AI with NLP and computer vision. I hold certifications in Generative AI and Artificial Intelligence from Infosys Springboard, and I bring a full-stack skill set across Python, React.js, FastAPI, and SQL.
        </p>
      </div>
    </section>
  );
}
