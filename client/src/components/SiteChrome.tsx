import { BookOpen, Home, Menu, Orbit, Settings as SettingsIcon, Users, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/learn", label: "Courses", icon: BookOpen },
  { href: "/scientists", label: "Biographies", icon: Users },
  { href: "/settings", label: "Settings", icon: SettingsIcon },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header-clean"><div className="header-inner"><Link href="/" className="wordmark" onClick={close}><span className="wordmark-symbol"><Orbit size={17} /></span><span>Ethio<span className="brand-cosmos">Cosmos</span></span></Link><button className="mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">{open ? <X size={19} /> : <Menu size={19} />}</button><nav className={`site-nav-clean ${open ? "open" : ""}`}>{navItems.slice(1).map(({ href, label, icon: Icon }) => <Link key={href} href={href} onClick={close}><Icon size={14} /> {label}</Link>)}<Link href="/learn/foundations" className="header-action" onClick={close}><BookOpen size={14} /> Start learning</Link></nav></div></header>;
}

export function MobileTaskbar() { return <nav className="mobile-taskbar" aria-label="Primary navigation">{navItems.map(({ href, label, icon: Icon }) => <Link key={href} href={href}><Icon size={18} /><span>{label}</span></Link>)}</nav>; }

export function SiteFooter() { return <><footer className="site-footer-clean"><div className="footer-inner-clean"><span>Cosmic Path</span><span>A clear starting point for learning physics.</span><span>Built for curious beginners.</span></div></footer><MobileTaskbar /></>; }
