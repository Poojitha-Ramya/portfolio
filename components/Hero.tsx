'use client';

const btnGhost = {
  padding: "12px 26px",
  borderRadius: "8px",
  fontSize: "0.9rem",
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
      style={{
        paddingTop: "120px",
        paddingBottom: "100px",
        paddingLeft: "7%",
        paddingRight: "7%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, rgba(200,85,240,0.05) 0%, rgba(8,8,16,0) 100%)",
      }}
    >
      {/* Open to Opportunities Badge */}
      <div
        style={{
          display: "inline-block",
          padding: "10px 20px",
          borderRadius: "50px",
          border: "1.5px solid #c855f0",
          color: "#c855f0",
          fontSize: "0.95rem",
          fontWeight: 500,
          marginBottom: "3rem",
          animation: "fadeUp 0.6s ease 0s both",
        }}
      >
        ● Open to Opportunities
      </div>

      {/* Hero Title - Full Name */}
      <div
        style={{
          animation: "fadeUp 0.6s ease 0.1s both",
        }}
      >
        <h1
          style={{
            fontSize: "5.5rem",
            fontWeight: 900,
            color: "#ffffff",
            margin: "0",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Chipurupalli
        </h1>
        <h1
          style={{
            fontSize: "5.5rem",
            fontWeight: 900,
            color: "#d946ef",
            margin: "0",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            fontFamily: "'Syne', sans-serif",
            marginBottom: "1.5rem",
          }}
        >
          Poojitha Ramya
        </h1>
      </div>

      {/* Hero Subtitle */}
      <p
        style={{
          fontSize: "1.4rem",
          color: "rgba(240,238,255,0.9)",
          fontWeight: 500,
          marginBottom: "1.5rem",
          animation: "fadeUp 0.6s ease 0.15s both",
        }}
      >
        AI/ML Engineer & Full Stack Developer
      </p>

      {/* Hero Description */}
      <p
        style={{
          fontSize: "1.1rem",
          color: "rgba(240,238,255,0.7)",
          marginBottom: "2.5rem",
          maxWidth: "750px",
          lineHeight: 1.6,
          animation: "fadeUp 0.6s ease 0.2s both",
        }}
      >
        Building intelligent systems at the intersection of deep learning, LLMs, and production-grade web applications.
      </p>

      {/* CTA Buttons */}
      <div
        className="hero-cta-group"
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          animation: "fadeUp 0.7s ease 0.3s both",
        }}
      >
  <a
    href="#projects"
    className="hero-cta-btn"
    style={{
      padding: "12px 26px",
      borderRadius: "8px",
      fontSize: "0.9rem",
      fontWeight: 500,
      cursor: "pointer",
      textDecoration: "none",
      background: "#c855f0",
      color: "#fff",
      border: "1px solid transparent",
      transition: "background 0.2s, transform 0.2s",
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
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
      e.currentTarget.style.color = "#f0eeff";
    }}
  >
    Contact Me
  </a>

  {/* Cover Letter PDF */}
  <a
    href="/Poojitha_Ramya_Cover_Letter.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-cta-btn"
    style={btnGhost}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "#c855f0";
      e.currentTarget.style.color = "#c855f0";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
      e.currentTarget.style.color = "#f0eeff";
    }}
  >
    View CoverLetter
  </a>

  {/* Resume PDF */}
  <a
    href="/Poojitha_Ramya_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-cta-btn"
    style={btnGhost}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "#c855f0";
      e.currentTarget.style.color = "#c855f0";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
      e.currentTarget.style.color = "#f0eeff";
    }}
  >
    Resume
  </a>
      </div>
    </section>
  );
}