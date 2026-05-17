"use client";
import { useEffect, useRef } from "react";

const certifications = [
  { name: "Principles of Generative AI", issuer: "Infosys Springboard", date: "May 2026" },
  { name: "Artificial Intelligence Primer", issuer: "Infosys Springboard", date: "April 2026" },
  { name: "React JS Web Application Development", issuer: "BRVS Tech LLC", date: "2025" },
  { name: "Deep Learning Essentials", issuer: "L&T EduTech", date: "2024" },
  { name: "SQL Intermediate", issuer: "HackerRank", date: "2024" },
  { name: "Java Skill UP", issuer: "GeeksforGeeks", date: "2024" },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const tlLine: React.CSSProperties = { position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "rgba(180,80,220,0.18)" };
  const tlDot: React.CSSProperties = { position: "absolute", left: "-34px", top: "4px", width: "13px", height: "13px", borderRadius: "50%", background: "#c855f0", border: "2px solid #080810" };

  return (
    <section id="experience" ref={ref} className="section-shell" style={{ padding: "90px 7%", background: "var(--bg2)" }}>
      <div className="reveal" style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: ".6rem" }}>Experience</p>
        <h2 className="section-heading" style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, marginBottom: ".5rem" }}>My Journey</h2>
        <p style={{ color: "#9090b0" }}>Work history, education, and certifications.</p>
      </div>

      {/* Work + Education row */}
      <div className="reveal exp-top-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
        {/* Work */}
        <div>
          <p style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: "1.5rem" }}>Work Experience</p>
          <div style={{ position: "relative", paddingLeft: "28px" }}>
            <div style={tlLine} />
            <div style={{ position: "relative", paddingBottom: "2rem" }}>
              <div style={tlDot} />
              <p style={{ fontSize: ".78rem", color: "#c855f0", fontWeight: 500, marginBottom: "4px" }}>July 2025 · 1 Month</p>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: "2px" }}>React JS Developer Intern</h3>
              <p style={{ color: "#9090b0", fontSize: ".88rem", marginBottom: "10px" }}>BRVS Tech LLC · Remote</p>
              <ul style={{ paddingLeft: "1.2rem" }}>
                {[
                  "Architected a full-stack Campus Management System in React.js within a 4-week sprint",
                  "Implemented component-based UI with React state management and hooks",
                  "Designed local storage persistence for seamless SPA experience",
                  "Earned React JS Web Application Internship Certification",
                ].map((b) => (
                  <li key={b} style={{ color: "#9090b0", fontSize: ".87rem", marginBottom: "5px" }}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <p style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: "1.5rem" }}>Education</p>
          <div style={{ position: "relative", paddingLeft: "28px" }}>
            <div style={tlLine} />
            {[
              { date: "2023 – Present", title: "B.Tech in IT (AI & ML)", place: "GMR Institute of Technology, Rajam · CGPA: 9.50 / 10.0" },
              { date: "2021 – 2023", title: "Intermediate (MPC)", place: "Sri Chaitanya Junior College, Visakhapatnam · 92.2%" },
              { date: "2021", title: "SSC", place: "Sun Shine English Medium School, Nathavaram · 99.3%" },
            ].map((item, i) => (
              <div key={i} style={{ position: "relative", paddingBottom: "2rem" }}>
                <div style={tlDot} />
                <p style={{ fontSize: ".78rem", color: "#c855f0", fontWeight: 500, marginBottom: "4px" }}>{item.date}</p>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: "2px" }}>{item.title}</h3>
                <p style={{ color: "#9090b0", fontSize: ".88rem" }}>{item.place}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="reveal">
        <p style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: "1.5rem" }}>Certifications</p>
        <div className="cert-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
          {certifications.map((c) => (
            <div
              key={c.name}
              className="cert-card"
              style={{ background: "var(--card)", border: "1px solid rgba(180,80,220,0.18)", borderRadius: "12px", padding: "18px 20px", transition: "border-color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(200,85,240,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(180,80,220,0.18)")}
            >
              <p style={{ fontSize: ".72rem", color: "#9090b0", marginBottom: "4px" }}>{c.date}</p>
              <p className="cert-title" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: ".92rem", marginBottom: "4px" }}>{c.name}</p>
              <p style={{ fontSize: ".8rem", color: "#c855f0" }}>{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
