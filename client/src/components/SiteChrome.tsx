import { BookOpen, Menu, Orbit, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header-clean">
      <div className="header-inner">
        <Link href="/" className="wordmark" onClick={close}>
          <span className="wordmark-symbol"><Orbit size={17} /></span>
          <span>cosmic path</span>
        </Link>
        <button className="mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={`site-nav-clean ${open ? "open" : ""}`}>
          <Link href="/learn" onClick={close}>Course</Link>
          <Link href="/scientists" onClick={close}>Scientists</Link>
          <Link href="/glossary" onClick={close}>Glossary</Link>
          <Link href="/learn/foundations" className="header-action" onClick={close}><BookOpen size={14} /> Start learning</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer-clean"><div className="footer-inner-clean"><span>Cosmic Path</span><span>A field guide to the ideas that explain the universe.</span><span>Built for curious beginners.</span></div></footer>;
}
