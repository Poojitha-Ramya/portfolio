'use client';

const btnGhost = {
  padding: "12px 22px",
  borderRadius: "8px",
  fontSize: "0.95rem",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
  background: "transparent",
  color: "#f0eeff",
  border: "1px solid rgba(255,255,255,0.2)",
  transition: "background 0.2s, transform 0.2s, border-color 0.2s, color 0.2s",
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        paddingTop: "clamp(92px, 12vh, 132px)",
        paddingBottom: "clamp(72px, 10vh, 120px)",
        paddingLeft: "clamp(16px, 4vw, 7%)",
        paddingRight: "clamp(16px, 4vw, 7%)",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "clip",
        background: "linear-gradient(135deg, rgba(200,85,240,0.05) 0%, rgba(8,8,16,0) 100%)",
      }}
    >
      <div
        className="hero-chip"
        style={{
          display: "inline-block",
          padding: "10px 18px",
          borderRadius: "50px",
          border: "1.5px solid #c855f0",
          color: "#c855f0",
          fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
          fontWeight: 500,
          marginBottom: "clamp(1.4rem, 4vw, 3rem)",
          animation: "fadeUp 0.6s ease 0s both",
          backdropFilter: "blur(10px)",
          background: "rgba(180, 60, 240, 0.1)",
          maxWidth: "100%",
        }}
      >
        ● Open to Opportunities
      </div>

      <div
        className="hero-title-wrap"
        style={{
          animation: "fadeUp 0.6s ease 0.1s both",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontSize: "clamp(2.6rem, 7.8vw, 6.2rem)",
            fontWeight: 900,
            color: "#ffffff",
            margin: "0",
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            fontFamily: "'Syne', sans-serif",
            wordBreak: "keep-all",
            overflowWrap: "normal",
          }}
        >
          Chipurupalli
        </h1>
        <h1
          className="hero-title hero-title-accent"
          style={{
            fontSize: "clamp(2.6rem, 7.8vw, 6.2rem)",
            fontWeight: 900,
            color: "#d946ef",
            margin: "0",
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            fontFamily: "'Syne', sans-serif",
            marginBottom: "clamp(1rem, 3vw, 1.5rem)",
            wordBreak: "keep-all",
            overflowWrap: "normal",
          }}
        >
          Poojitha Ramya
        </h1>
      </div>

      <p
        className="hero-subtitle"
        style={{
          fontSize: "clamp(1rem, 2.3vw, 1.4rem)",
          color: "rgba(240,238,255,0.9)",
          fontWeight: 500,
          marginBottom: "1rem",
          animation: "fadeUp 0.6s ease 0.15s both",
          maxWidth: "100%",
        }}
      >
        AI/ML Engineer & Full Stack Developer
      </p>

      <p
        className="hero-description"
        style={{
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          color: "rgba(240,238,255,0.7)",
          marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
          maxWidth: "min(100%, 760px)",
          lineHeight: 1.7,
          animation: "fadeUp 0.6s ease 0.2s both",
        }}
      >
        Building intelligent systems at the intersection of deep learning, LLMs, and production-grade web applications.
      </p>

      <div
        className="hero-cta-group"
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "920px",
          animation: "fadeUp 0.7s ease 0.3s both",
        }}
      >
        <a
          href="#projects"
          className="hero-cta-btn hero-cta-primary"
          style={{
            padding: "12px 26px",
            borderRadius: "12px",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: "pointer",
            textDecoration: "none",
            background: "#c855f0",
            color: "#fff",
            border: "1px solid transparent",
            transition: "background 0.2s, transform 0.2s, border-color 0.2s",
            minHeight: "46px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "fit-content",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#e040fb";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#c855f0";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="hero-cta-btn"
          style={btnGhost}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#c855f0";
            e.currentTarget.style.color = "#c855f0";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.color = "#f0eeff";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Contact Me
        </a>

        <a
          href="/Poojitha_Ramya_Cover_Letter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta-btn"
          style={btnGhost}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#c855f0";
            e.currentTarget.style.color = "#c855f0";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.color = "#f0eeff";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          View CoverLetter
        </a>

        <a
          href="/Poojitha_Ramya_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta-btn"
          style={btnGhost}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#c855f0";
            e.currentTarget.style.color = "#c855f0";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.color = "#f0eeff";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Resume
        </a>
      </div>
    </section>
  );
}