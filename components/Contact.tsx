"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formspreeEndpoint = "https://formspree.io/f/xdabzpdj";

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!formspreeEndpoint) {
      setSubmitStatus("error");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send form");
      }

      setForm({ name: "", email: "", message: "" });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--card)",
    border: "1px solid rgba(180,80,220,0.18)",
    borderRadius: "8px",
    padding: "13px 16px",
    color: "#f0eeff",
    fontFamily: "DM Sans, sans-serif",
    fontSize: ".9rem",
    outline: "none",
    width: "100%",
    transition: "border-color .2s",
  };

  const contactItems = [
    { icon: "✉", label: "Email", value: "chpujitaramya@gmail.com", href: "mailto:chpujitaramya@gmail.com", bg: "rgba(200,85,240,0.15)", color: "#c855f0" },
    { icon: "in", label: "LinkedIn", value: "linkedin.com/in/pujita-ramya-ch", href: "https://linkedin.com/in/pujita-ramya-ch", bg: "rgba(10,102,194,0.2)", color: "#4a9ef1" },
    { icon: "GH", label: "GitHub", value: "github.com/Poojitha-Ramya", href: "https://github.com/Poojitha-Ramya", bg: "rgba(200,85,240,0.1)", color: "#c855f0" },
    { icon: "📞", label: "Phone", value: "7013103439", href: "#", bg: "rgba(244,114,182,0.12)", color: "#f472b6" },
  ];

  return (
    <section id="contact" ref={ref} className="section-shell" style={{ padding: "90px 7%", background: "var(--bg)" }}>
      <div className="reveal" style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", color: "#c855f0", textTransform: "uppercase", marginBottom: ".6rem" }}>Contact</p>
        <h2 className="section-heading" style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, marginBottom: ".5rem" }}>Get In Touch</h2>
        <p style={{ color: "#9090b0" }}>Open to internships, full-time roles, and interesting collaborations.</p>
      </div>

      <div className="reveal contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
          {contactItems.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-link-item"
              style={{ display: "flex", alignItems: "center", gap: "14px", background: "var(--card)", border: "1px solid rgba(180,80,220,0.18)", borderRadius: "10px", padding: "16px 20px", textDecoration: "none", color: "#f0eeff", transition: "border-color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#c855f0")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(180,80,220,0.18)")}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".8rem", fontWeight: 700, background: c.bg, color: c.color, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: ".75rem", color: "#9090b0", marginBottom: "2px" }}>{c.label}</div>
                <div style={{ fontSize: ".88rem" }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="contact-form" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input className="contact-input" style={inputStyle} type="text" name="name" placeholder="Your Name" value={form.name} required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "#c855f0")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(180,80,220,0.18)")}
          />
          <input className="contact-input" style={inputStyle} type="email" name="email" placeholder="your@email.com" value={form.email} required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "#c855f0")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(180,80,220,0.18)")}
          />
          <textarea
            className="contact-input contact-textarea"
            style={{ ...inputStyle, height: "120px", resize: "none" }}
            name="message"
            placeholder="I'd love to connect about..."
            value={form.message}
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            onFocus={(e) => (e.target.style.borderColor = "#c855f0")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(180,80,220,0.18)")}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="contact-submit-btn"
            style={{ background: "#c855f0", color: "#fff", border: "none", borderRadius: "8px", padding: "14px", fontSize: ".95rem", fontWeight: 500, cursor: "pointer", transition: "background .2s, transform .2s", fontFamily: "DM Sans, sans-serif" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#e040fb"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#c855f0"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submitStatus === "success" && (
            <p style={{ color: "#8cf2b8", fontSize: ".85rem", marginTop: ".2rem" }}>
              Message sent successfully.
            </p>
          )}
          {submitStatus === "error" && (
            <p style={{ color: "#f7a4c5", fontSize: ".85rem", marginTop: ".2rem" }}>
              Unable to send message. Please verify NEXT_PUBLIC_FORMSPREE_ID and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
