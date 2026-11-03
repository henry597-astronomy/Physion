import { Search } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { lessons } from "@/lib/courseData";

export default function Glossary() { const terms = lessons.flatMap((lesson) => lesson.vocabulary).filter((term, index, list) => list.findIndex((item) => item.term === term.term) === index).sort((a, b) => a.term.localeCompare(b.term)); return <div className="app-frame"><SiteHeader /><main className="page-main glossary-page"><div className="page-heading compact"><div><p className="page-kicker"><Search size={14} /> Reference</p><h1>A small glossary<br /><em>for big ideas.</em></h1><p className="page-lead">A first-pass dictionary for the words that appear again and again as physics moves from everyday motion to the structure of the universe.</p></div></div><div className="glossary-list">{terms.map((term) => <article key={term.term}><h2>{term.term}</h2><p>{term.definition}</p></article>)}</div></main><SiteFooter /></div>; }
