import { ArrowLeft, ArrowRight, Check, CheckCircle2, Lightbulb } from "lucide-react";
import { Link, useParams } from "wouter";
import { CourseSidebar } from "@/components/CourseSidebar";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getLesson, lessons } from "@/lib/courseData";
import { useProgress } from "@/lib/progress";

export default function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const lesson = getLesson(slug);
  const { isComplete, markComplete } = useProgress();
  if (!lesson) return <div className="not-found-page"><SiteHeader /><h1>Lesson not found</h1><Link href="/learn">Back to course</Link></div>;
  const nextLesson = lesson.next ? lessons.find((item) => item.slug === lesson.next) : undefined;
  const complete = isComplete(lesson.slug);
  return <div className="app-frame"><SiteHeader /><div className="lesson-layout"><CourseSidebar activeSlug={lesson.slug} /><main className="lesson-main"><div className="lesson-breadcrumb"><Link href="/learn"><ArrowLeft size={14} /> Course map</Link><span>/</span><span>Lesson {lesson.number}</span></div><header className="lesson-header"><div><div className="lesson-meta"><span>Lesson {lesson.number}</span><span>{lesson.level}</span><span>{lesson.duration}</span></div><h1>{lesson.title}</h1><p className="lesson-subtitle">{lesson.subtitle}</p><p className="lesson-summary-large">{lesson.summary}</p></div><div className="lesson-cover"><img src={lesson.image} alt="" /><span>Concept image · {lesson.title}</span></div></header><section className="objectives"><div className="objectives-label">By the end, you should be able to</div><div className="objectives-list">{lesson.objectives.map((objective) => <span key={objective}><Check size={15} /> {objective}</span>)}</div></section><div className="lesson-content">{lesson.sections.map((section, index) => <section className="lesson-section" key={section.heading}><div className="lesson-section-number">{String(index + 1).padStart(2, "0")}</div><div><h2>{section.heading}</h2><p>{section.body}</p>{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}{section.callout && <div className="lesson-callout"><Lightbulb size={18} /><div><span>{section.callout.label}</span><p>{section.callout.text}</p></div></div>}</div></section>)}</div><section className="vocabulary-section"><div><span className="section-index">Vocabulary</span><h2>Words to keep.</h2></div><div className="vocabulary-list">{lesson.vocabulary.map((item) => <div key={item.term}><strong>{item.term}</strong><p>{item.definition}</p></div>)}</div></section><div className="lesson-completion"><button className="complete-button" onClick={() => markComplete(lesson.slug)}>{complete ? "Lesson completed" : "Mark lesson complete"} {complete ? <Check size={15} /> : <CheckCircle2 size={15} />}</button></div>{nextLesson && <Link href={`/learn/${nextLesson.slug}`} className="next-lesson"><span><small>Next lesson</small><strong>{nextLesson.number} · {nextLesson.title}</strong></span><ArrowRight size={20} /></Link>}</main></div><SiteFooter /></div>;
}
