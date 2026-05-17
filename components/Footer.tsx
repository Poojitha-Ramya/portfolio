export default function Footer() {
  return (
    <footer className="site-footer" style={{ textAlign: "center", padding: "clamp(22px, 4vw, 30px) clamp(16px, 7vw, 7%)", borderTop: "1px solid rgba(180,80,220,0.18)", color: "#9090b0", fontSize: "clamp(.8rem, 2vw, .85rem)", lineHeight: 1.6 }}>
      <p>© {new Date().getFullYear()} Chipurupalli Poojitha Ramya · Built with ♥ · AI/ML &amp; Full Stack Developer</p>
    </footer>
  );
}
