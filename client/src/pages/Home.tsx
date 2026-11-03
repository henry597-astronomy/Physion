import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleHelp,
  Compass,
  Flame,
  Lightbulb,
  Menu,
  Orbit,
  Play,
  RotateCcw,
  Sparkles,
  Telescope,
  X,
  Zap,
} from "lucide-react";

const assets = {
  hero: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-1.webp",
  classical: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-2.webp",
  relativity: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-3.webp",
  quantum: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-4.webp",
  astrophysics: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-5.webp",
};

type Lesson = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  analogy: string;
  keyIdea: string;
  image: string;
  color: string;
  terms: string[];
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const lessons: Lesson[] = [
  {
    id: "foundations",
    number: "01",
    eyebrow: "Start here",
    title: "The universe has patterns",
    shortTitle: "Foundations",
    summary:
      "Physics is the art of noticing patterns in how things change. Before we meet equations, we learn to ask better questions: What changes? What stays the same? How could we test it?",
    analogy:
      "Think of physics as learning the grammar of reality. A ball, a beam of light, and a galaxy speak different dialects—but they still use ideas like change, energy, and cause and effect.",
    keyIdea: "A model is a useful story about the world—not the world itself.",
    image: assets.classical,
    color: "amber",
    terms: ["model", "observation", "measurement", "cause & effect"],
    question: "Which question is most useful to a physicist?",
    options: ["Is this idea beautiful?", "What pattern can we test?", "Who first thought of it?", "Can I memorize the formula?"],
    answer: 1,
    explanation: "Exactly. Physics grows when a pattern can be compared with an observation or experiment.",
  },
  {
    id: "classical",
    number: "02",
    eyebrow: "Zoom in",
    title: "Motion, forces & the everyday world",
    shortTitle: "Classical mechanics",
    summary:
      "Classical mechanics describes the motion of familiar things: a skateboard, a moon, a swinging pendulum. It connects motion to forces and gives us a reliable first language for predicting what happens next.",
    analogy:
      "Push a shopping cart and it speeds up. Push a full one and it resists more. Newton’s laws turn that everyday feeling into a precise relationship between force, mass, and acceleration.",
    keyIdea: "Force is a change-maker: it changes an object's motion.",
    image: assets.classical,
    color: "orange",
    terms: ["motion", "force", "mass", "energy"],
    question: "If the same force pushes two objects, which one accelerates more?",
    options: ["The object with more mass", "They always accelerate equally", "The object with less mass", "The object moving slower"],
    answer: 2,
    explanation: "Right. With the same push, the smaller mass changes its motion more easily.",
  },
  {
    id: "relativity",
    number: "03",
    eyebrow: "Change the frame",
    title: "Space, time & the speed limit",
    shortTitle: "Relativity",
    summary:
      "Relativity asks what measurements look like when observers move differently or gravity gets strong. Space and time are not a rigid stage; they are woven together and can stretch, bend, and disagree between observers.",
    analogy:
      "Imagine two people timing a train from different platforms. Their measurements can differ, yet both can be right—because motion changes how space and time divide up the same event.",
    keyIdea: "The speed of light is constant; space and time do the adapting.",
    image: assets.relativity,
    color: "violet",
    terms: ["frame of reference", "spacetime", "gravity", "light"],
    question: "What does general relativity describe gravity as?",
    options: ["A hidden rope", "A force that ignores motion", "Curved spacetime", "A kind of sound"],
    answer: 2,
    explanation: "Yes. Massive objects curve spacetime, and other objects follow those curves.",
  },
  {
    id: "quantum",
    number: "04",
    eyebrow: "Go small",
    title: "Nature at its most surprising",
    shortTitle: "Quantum physics",
    summary:
      "At the scale of atoms and particles, nature is described by probabilities, waves, and discrete packets of energy. Quantum physics is not magic; it is a precise framework for a world that refuses to behave like tiny billiard balls.",
    analogy:
      "A quantum object is less like a marble with a hidden address and more like a set of possibilities. An experiment changes which question is being asked—and what can be known next.",
    keyIdea: "Probability is not a lack of knowledge; it is part of the model.",
    image: assets.quantum,
    color: "cyan",
    terms: ["probability", "wavefunction", "uncertainty", "quantum"],
    question: "In a quantum description, a probability cloud represents…",
    options: ["A tiny weather system", "Possible measurement outcomes", "A particle's paint", "An invisible planet"],
    answer: 1,
    explanation: "Exactly. The cloud maps the chances of different outcomes when we measure.",
  },
  {
    id: "astrophysics",
    number: "05",
    eyebrow: "Look up",
    title: "Stars, galaxies & deep time",
    shortTitle: "Astrophysics",
    summary:
      "Astrophysics applies the whole toolkit to the sky. We use light as a messenger to infer what stars are made of, how galaxies grow, and how the universe has changed across billions of years.",
    analogy:
      "A spectrum is a star’s barcode. Split starlight into its colors and tiny missing lines reveal the atoms in the star, its temperature, and even whether it is moving toward or away from us.",
    keyIdea: "Astronomy is seeing; astrophysics is explaining what we see.",
    image: assets.astrophysics,
    color: "blue",
    terms: ["star", "spectrum", "galaxy", "cosmology"],
    question: "How can a distant star tell us what it is made of?",
    options: ["We collect its atoms", "We read patterns in its light", "We ask the star", "We compare its size only"],
    answer: 1,
    explanation: "Correct. Atoms leave distinctive fingerprints in the spectrum of starlight.",
  },
];

const sideQuests = [
  { title: "Thermodynamics", kicker: "Heat has a direction", icon: Flame, tone: "coral" },
  { title: "Electromagnetism", kicker: "Light is a field in motion", icon: Zap, tone: "gold" },
  { title: "Particle physics", kicker: "The small pieces have families", icon: Sparkles, tone: "mint" },
  { title: "Cosmology", kicker: "The universe has a history", icon: Orbit, tone: "lilac" },
];

const scientists = [
  {
    name: "Galileo Galilei",
    dates: "1564—1642",
    mark: "GG",
    color: "amber",
    line: "Look for yourself.",
    bio: "Galileo used careful observation and experiments with motion to challenge old assumptions. His telescope made the sky feel physical, changing what evidence could mean.",
    link: "Foundations + mechanics",
  },
  {
    name: "Isaac Newton",
    dates: "1643—1727",
    mark: "IN",
    color: "orange",
    line: "Nature is a system.",
    bio: "Newton connected falling apples and orbiting moons with the same laws. His mechanics and gravity showed how a few powerful ideas can travel across scales.",
    link: "Classical mechanics",
  },
  {
    name: "Albert Einstein",
    dates: "1879—1955",
    mark: "AE",
    color: "violet",
    line: "Question the frame.",
    bio: "Einstein rethought space, time, gravity, and light. His work shows that progress sometimes begins by taking a familiar question seriously enough to turn it around.",
    link: "Relativity",
  },
  {
    name: "Emmy Noether",
    dates: "1882—1935",
    mark: "EN",
    color: "cyan",
    line: "Symmetry leaves a trace.",
    bio: "Noether revealed a deep bridge between symmetry and conservation laws. Her theorem quietly powers much of modern physics, from mechanics to field theory.",
    link: "The hidden rules",
  },
  {
    name: "Marie Curie",
    dates: "1867—1934",
    mark: "MC",
    color: "blue",
    line: "Stay with the evidence.",
    bio: "Curie’s patient work on radioactivity opened a new window into matter and energy. She also changed who could be seen as a builder of scientific knowledge.",
    link: "Matter + energy",
  },
  {
    name: "Vera Rubin",
    dates: "1928—2016",
    mark: "VR",
    color: "pink",
    line: "The missing can matter.",
    bio: "Rubin’s careful measurements of galaxy rotation helped reveal evidence for dark matter. Her story is a reminder that invisible ingredients can leave visible fingerprints.",
    link: "Astrophysics",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [activeLessonId, setActiveLessonId] = useState("foundations");
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [quizChoice, setQuizChoice] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("cosmic-path-progress");
      const savedActive = window.localStorage.getItem("cosmic-path-active");
      if (saved) setCompleted(JSON.parse(saved));
      if (savedActive && lessons.some((lesson) => lesson.id === savedActive)) setActiveLessonId(savedActive);
    } catch {
      // Progress is a convenience; the lesson remains usable if storage is unavailable.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("cosmic-path-progress", JSON.stringify(completed));
      window.localStorage.setItem("cosmic-path-active", activeLessonId);
    } catch {
      // Ignore storage failures.
    }
  }, [completed, activeLessonId]);

  const activeLesson = useMemo(
    () => lessons.find((lesson) => lesson.id === activeLessonId) ?? lessons[0],
    [activeLessonId],
  );
  const completedCount = lessons.filter((lesson) => completed[lesson.id]).length;
  const progress = Math.round((completedCount / lessons.length) * 100);
  const activeIndex = lessons.findIndex((lesson) => lesson.id === activeLessonId);

  const openLesson = (id: string) => {
    setActiveLessonId(id);
    setQuizChoice(null);
    setMenuOpen(false);
    window.setTimeout(() => scrollToId("lesson-studio"), 60);
  };

  const markComplete = () => {
    setCompleted((current) => ({ ...current, [activeLesson.id]: true }));
  };

  const resetProgress = () => {
    setCompleted({});
    setActiveLessonId("foundations");
    setQuizChoice(null);
  };

  return (
    <div className="cosmic-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cosmic Path home">
          <span className="brand-mark"><Orbit size={17} strokeWidth={1.8} /></span>
          <span>cosmic<span>path</span></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#journey" onClick={() => setMenuOpen(false)}>The journey</a>
          <a href="#topics" onClick={() => setMenuOpen(false)}>Topic map</a>
          <a href="#scientists" onClick={() => setMenuOpen(false)}>Great minds</a>
          <a className="nav-cta" href="#lesson-studio" onClick={() => setMenuOpen(false)}>Open lesson <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <img className="hero-image" src={assets.hero} alt="A visual journey from everyday motion to galaxies" />
          <div className="hero-wash" />
          <div className="hero-content content-wrap">
            <div className="hero-copy">
              <p className="eyebrow light"><span className="eyebrow-dot" /> A visual field guide to reality</p>
              <h1>Start with<br /><em>why.</em> End with<br />the cosmos.</h1>
              <p className="hero-intro">A gentle route through the ideas that explain falling apples, strange particles, bent spacetime, and everything we can see in the night sky.</p>
              <div className="hero-actions">
                <button className="button button-light" onClick={() => scrollToId("journey")}><Play size={15} fill="currentColor" /> Begin the journey</button>
                <button className="text-link light-link" onClick={() => scrollToId("topics")}><Compass size={16} /> Browse the map</button>
              </div>
            </div>
            <aside className="hero-note">
              <span className="note-label">A note for beginners</span>
              <p>You do not need to be “a math person” to start. We build the intuition first, then let the equations arrive when they have something to say.</p>
              <span className="note-sign">— your future self</span>
            </aside>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><ArrowDownRight size={15} /></div>
        </section>

        <section className="intro-strip">
          <div className="content-wrap intro-grid">
            <div className="section-kicker"><span>00</span><span className="line" /><span>orientation</span></div>
            <div>
              <p className="lede">Physics is not a wall of formulas. It is a way of asking <em>what is really happening?</em></p>
              <p className="muted-copy">Cosmic Path takes the long view: start with motion you can feel, follow the rules into the invisible, then look back up with new eyes.</p>
            </div>
            <div className="mini-stat"><strong>{completedCount}<span>/</span>{lessons.length}</strong><span>lessons complete</span></div>
          </div>
        </section>

        <section id="journey" className="journey-section section-pad">
          <div className="content-wrap">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-dot dark" /> Your route through reality</p>
                <h2>Five turns.<br /><em>One connected story.</em></h2>
              </div>
              <div className="heading-aside">
                <p>Each stop is short enough for a coffee break, but connected enough to change how the next idea lands.</p>
                <button className="text-link" onClick={resetProgress}><RotateCcw size={14} /> Reset progress</button>
              </div>
            </div>

            <div className="progress-panel">
              <div className="progress-topline"><span>YOUR FIELD NOTES</span><span>{progress}% complete</span></div>
              <div className="progress-track"><span style={{ width: `${Math.max(progress, 3)}%` }} /></div>
              <div className="progress-caption"><span>{completedCount === 0 ? "The first idea is waiting." : `${completedCount} idea${completedCount === 1 ? "" : "s"} in your toolkit.`}</span><span>{completedCount < lessons.length ? `Next: ${lessons[activeIndex + 1]?.shortTitle ?? "review"}` : "All core stops visited"}</span></div>
            </div>

            <div className="journey-list">
              {lessons.map((lesson, index) => {
                const isActive = lesson.id === activeLessonId;
                const isComplete = completed[lesson.id];
                return (
                  <button key={lesson.id} className={`journey-item ${isActive ? "active" : ""} ${isComplete ? "complete" : ""}`} onClick={() => openLesson(lesson.id)}>
                    <span className="journey-number">{isComplete ? <Check size={15} /> : lesson.number}</span>
                    <span className="journey-copy"><span className="journey-eyebrow">{lesson.eyebrow}</span><strong>{lesson.shortTitle}</strong><span>{lesson.title}</span></span>
                    <span className="journey-status">{isComplete ? "visited" : index === 0 ? "start here" : "next stop"}</span>
                    <ChevronRight className="journey-arrow" size={18} />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="topics" className="topics-section section-pad dark-section">
          <div className="content-wrap">
            <div className="section-heading split-heading dark-heading">
              <div>
                <p className="eyebrow light"><span className="eyebrow-dot" /> The topic map</p>
                <h2>The big ideas,<br /><em>without the fog.</em></h2>
              </div>
              <p className="heading-aside light-copy">The core path gives you a spine. These side quests add the connective tissue—the ideas that make physics feel like one landscape instead of separate subjects.</p>
            </div>
            <div className="topic-grid">
              <article className="topic-feature">
                <img src={assets.classical} alt="Pendulum and motion trajectories" />
                <div className="topic-overlay"><span>core path · 02</span><h3>Motion is a story<br />with a cause.</h3><button onClick={() => openLesson("classical")}>Explore mechanics <ArrowUpRight size={15} /></button></div>
              </article>
              <article className="topic-feature topic-feature-tall">
                <img src={assets.quantum} alt="Quantum probability cloud visual" />
                <div className="topic-overlay"><span>core path · 04</span><h3>Possibility<br />has a shape.</h3><button onClick={() => openLesson("quantum")}>Meet the quantum <ArrowUpRight size={15} /></button></div>
              </article>
              <article className="topic-feature topic-feature-wide">
                <img src={assets.relativity} alt="Spacetime fabric bending around a sphere" />
                <div className="topic-overlay"><span>core path · 03</span><h3>Space and time<br />can flex.</h3><button onClick={() => openLesson("relativity")}>Bend the frame <ArrowUpRight size={15} /></button></div>
              </article>
            </div>
            <div className="side-quests">
              {sideQuests.map(({ title, kicker, icon: Icon, tone }) => (
                <button key={title} className={`side-quest ${tone}`} onClick={() => scrollToId("lesson-studio")}><span className="side-quest-icon"><Icon size={17} /></span><span><strong>{title}</strong><small>{kicker}</small></span><ArrowUpRight size={15} /></button>
              ))}
            </div>
          </div>
        </section>

        <section id="lesson-studio" className="studio-section section-pad">
          <div className="content-wrap">
            <div className="studio-label"><span>LESSON STUDIO</span><span className="studio-line" /><span>LIVE · {String(activeIndex + 1).padStart(2, "0")} / {lessons.length}</span></div>
            <div className="studio-layout">
              <aside className="studio-rail">
                <p className="rail-title">Choose a stop</p>
                {lessons.map((lesson) => <button key={lesson.id} className={`rail-item ${lesson.id === activeLessonId ? "active" : ""}`} onClick={() => { setActiveLessonId(lesson.id); setQuizChoice(null); }}><span>{lesson.number}</span><strong>{lesson.shortTitle}</strong>{completed[lesson.id] && <Check size={14} />}</button>)}
                <div className="rail-tip"><Lightbulb size={17} /><p><strong>Good to know</strong><br />The best pace is the one that lets the idea stick.</p></div>
              </aside>
              <article className={`lesson-card ${activeLesson.color}`}>
                <div className="lesson-card-top"><span>{activeLesson.eyebrow} · {activeLesson.number}</span><span className="lesson-time"><Telescope size={14} /> 6 min read</span></div>
                <div className="lesson-card-grid">
                  <div className="lesson-copy">
                    <h2>{activeLesson.title}</h2>
                    <p className="lesson-summary">{activeLesson.summary}</p>
                    <div className="analogy"><span className="analogy-label">Try this picture</span><p>{activeLesson.analogy}</p></div>
                    <div className="term-row">{activeLesson.terms.map((term) => <span key={term}>{term}</span>)}</div>
                  </div>
                  <div className="lesson-visual"><img src={activeLesson.image} alt="Conceptual visual for the current lesson" /><span className="visual-caption">An intuition to carry forward <ArrowUpRight size={13} /></span></div>
                </div>
                <div className="key-idea"><span><Sparkles size={16} /> Key idea</span><strong>{activeLesson.keyIdea}</strong></div>
                <div className="lesson-footer"><button className={`button button-dark ${completed[activeLesson.id] ? "is-complete" : ""}`} onClick={markComplete}>{completed[activeLesson.id] ? <><Check size={15} /> Lesson complete</> : <>Mark as understood <Check size={15} /></>}</button><span>Next up: {lessons[activeIndex + 1]?.shortTitle ?? "revisit any stop"}</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="quiz-section section-pad">
          <div className="content-wrap quiz-grid">
            <div className="quiz-intro"><p className="eyebrow"><span className="eyebrow-dot dark" /> A gentle check-in</p><h2>See what<br /><em>clicked.</em></h2><p>Not a test. Just a small mirror for your mental model. Choose the answer that feels most true, then read the why.</p><div className="quiz-stamp"><CircleHelp size={17} /><span>low pressure<br /><strong>high signal</strong></span></div></div>
            <div className={`quiz-card ${quizChoice !== null ? "answered" : ""}`}>
              <div className="quiz-card-top"><span>CHECK {activeLesson.number}</span><span>{quizChoice === null ? "choose one" : quizChoice === activeLesson.answer ? "you got it" : "keep exploring"}</span></div>
              <h3>{activeLesson.question}</h3>
              <div className="answer-list">{activeLesson.options.map((option, index) => { const isSelected = quizChoice === index; const isCorrect = index === activeLesson.answer; return <button key={option} className={`answer-option ${isSelected ? "selected" : ""} ${quizChoice !== null && isCorrect ? "correct" : ""} ${quizChoice !== null && isSelected && !isCorrect ? "incorrect" : ""}`} onClick={() => setQuizChoice(index)}><span className="answer-letter">{String.fromCharCode(65 + index)}</span><span>{option}</span>{quizChoice !== null && isCorrect && <Check size={16} />}</button>; })}</div>
              {quizChoice !== null && <div className={`quiz-feedback ${quizChoice === activeLesson.answer ? "good" : "try-again"}`}><span>{quizChoice === activeLesson.answer ? "Nice." : "Not quite."}</span><p>{activeLesson.explanation}</p></div>}
              {quizChoice !== null && <button className="text-link" onClick={() => setQuizChoice(null)}>Try again <RotateCcw size={14} /></button>}
            </div>
          </div>
        </section>

        <section id="scientists" className="scientists-section section-pad dark-section">
          <div className="content-wrap">
            <div className="section-heading split-heading dark-heading">
              <div><p className="eyebrow light"><span className="eyebrow-dot" /> The people behind the ideas</p><h2>Great minds.<br /><em>Human questions.</em></h2></div>
              <p className="heading-aside light-copy">Science is not a list of lone geniuses. It is a relay of questions, arguments, instruments, mistakes, and stubborn curiosity.</p>
            </div>
            <div className="scientist-grid">{scientists.map((scientist) => <article className="scientist-card" key={scientist.name}><div className={`scientist-mark ${scientist.color}`}><span>{scientist.mark}</span><div className="orbit-ring" /></div><div className="scientist-meta"><span>{scientist.dates}</span><span>{scientist.link}</span></div><h3>{scientist.name}</h3><p className="scientist-line">“{scientist.line}”</p><p>{scientist.bio}</p><button onClick={() => scrollToId("lesson-studio")}>Follow the idea <ChevronRight size={15} /></button></article>)}</div>
          </div>
        </section>

        <section className="closing-section section-pad">
          <div className="content-wrap closing-wrap"><div className="closing-orbit"><Orbit size={34} strokeWidth={1.2} /><span>keep wondering</span></div><div><p className="eyebrow"><span className="eyebrow-dot dark" /> Your next question is enough</p><h2>There is always<br /><em>more to notice.</em></h2><p className="closing-copy">Return when you are ready. The path remembers where you paused, and the universe will still be here—being strange in exactly the right ways.</p><button className="button button-dark" onClick={() => scrollToId("journey")}>Continue exploring <ArrowUpRight size={15} /></button></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="content-wrap footer-inner"><a className="brand" href="#top"><span className="brand-mark"><Orbit size={17} strokeWidth={1.8} /></span><span>cosmic<span>path</span></span></a><span>A beginner’s field guide to reality.</span><span className="footer-note">Made for curious humans · 2026</span></div></footer>
    </div>
  );
}
