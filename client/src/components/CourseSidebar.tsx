import { Check, ChevronRight, Circle } from "lucide-react";
import { Link } from "wouter";
import { lessons } from "@/lib/courseData";
import { useProgress } from "@/lib/progress";

export function CourseSidebar({ activeSlug }: { activeSlug: string }) {
  const { completed } = useProgress();
  return (
    <aside className="course-sidebar">
      <div className="sidebar-kicker">Course map</div>
      <h2>From first questions<br />to the cosmos.</h2>
      <div className="sidebar-progress"><span style={{ width: `${Math.max(8, (completed.length / lessons.length) * 100)}%` }} /></div>
      <p className="sidebar-progress-label">{completed.length} of {lessons.length} lessons complete</p>
      <nav className="lesson-nav" aria-label="Course lessons">
        {lessons.map((lesson) => {
          const active = lesson.slug === activeSlug;
          const done = completed.includes(lesson.slug);
          return <Link key={lesson.slug} href={`/learn/${lesson.slug}`} className={`lesson-nav-item ${active ? "active" : ""}`}><span className="lesson-nav-number">{done ? <Check size={13} /> : <Circle size={10} />}</span><span><strong>{lesson.number} · {lesson.title}</strong><small>{lesson.duration} · {lesson.level}</small></span>{active && <ChevronRight size={15} />}</Link>;
        })}
      </nav>
      <div className="sidebar-note"><span>Field note</span><p>There is no required pace. Understanding one idea well is progress.</p></div>
    </aside>
  );
}
