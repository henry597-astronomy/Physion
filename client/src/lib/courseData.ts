export const assets = {
  hero: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-1.webp",
  mechanics: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-2.webp",
  relativity: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-3.webp",
  quantum: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-4.webp",
  astrophysics: "/manus-storage/async-images/U3bZOyLnEKehWK5G8wnaw0/image-5.webp",
};

export type LessonSection = {
  heading: string;
  body: string;
  bullets?: string[];
  callout?: { label: string; text: string };
};

export type Lesson = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  level: string;
  duration: string;
  image: string;
  color: string;
  summary: string;
  objectives: string[];
  sections: LessonSection[];
  vocabulary: { term: string; definition: string }[];
  quiz: { question: string; options: string[]; answer: number; explanation: string };
  next?: string;
};

export const lessons: Lesson[] = [
  {
    slug: "foundations",
    number: "01",
    title: "How physics asks questions",
    subtitle: "Models, measurements, and the habit of testing ideas.",
    level: "Beginner",
    duration: "12 min",
    image: assets.mechanics,
    color: "ochre",
    summary: "Physics begins before equations. It begins with deciding what to observe, what to measure, and which simplified story might help us predict what happens next.",
    objectives: ["Distinguish an observation from an explanation", "Understand why physicists use models", "Recognize the role of measurement and uncertainty"],
    sections: [
      { heading: "A model is a useful simplification", body: "A physicist rarely tries to describe every detail of the world at once. Instead, they make a model: a deliberately simplified description that keeps the features relevant to a question. A map leaves out most of a city, but it can still help you find the train station.", callout: { label: "Plain version", text: "A good model is not a perfect copy. It is a useful tool for a particular question." } },
      { heading: "Observation is not the same as explanation", body: "You may observe that a dropped object speeds up as it falls. Saying that Earth’s gravity causes this acceleration is an explanation. The explanation becomes physics when it leads to predictions that measurements can check.", bullets: ["Observation: what a measuring instrument or person records.", "Hypothesis: a proposed explanation.", "Prediction: what the hypothesis says should happen next.", "Experiment: a controlled way to compare prediction and result."] },
      { heading: "Measurements have limits", body: "Every measurement has a resolution and a margin of uncertainty. That does not make measurement useless; it tells us how carefully to compare an idea with the world. Good science is honest about what the instruments can and cannot distinguish.", callout: { label: "Try it", text: "Time ten swings of a pendulum instead of one. Repeating a measurement can make a pattern easier to see." } },
    ],
    vocabulary: [{ term: "model", definition: "A simplified representation used to explain or predict something." }, { term: "measurement", definition: "A comparison between a quantity and a standard unit." }, { term: "uncertainty", definition: "A stated range describing how much a measurement could reasonably vary." }],
    quiz: { question: "What makes an explanation scientific?", options: ["It sounds intuitive", "It is old and widely repeated", "It makes testable predictions", "It uses complicated words"], answer: 2, explanation: "A scientific explanation earns trust by connecting to predictions that observations or experiments can check." },
    next: "mechanics",
  },
  {
    slug: "mechanics",
    number: "02",
    title: "Motion, forces, and energy",
    subtitle: "The everyday physics of carts, planets, and falling objects.",
    level: "Beginner",
    duration: "18 min",
    image: assets.mechanics,
    color: "rust",
    summary: "Classical mechanics gives us a practical language for describing how objects move and how interactions change that motion. It is the physics of bicycles, bridges, projectiles, and orbits.",
    objectives: ["Read position and velocity as descriptions of motion", "Explain how force changes motion", "Connect work and energy to real situations"],
    sections: [
      { heading: "Motion is change with a clock attached", body: "Position tells us where an object is. Velocity tells us how quickly its position is changing and in which direction. Acceleration tells us how velocity changes. A car moving at constant speed has velocity; a car braking has acceleration even while its speed is decreasing.", callout: { label: "Key distinction", text: "Speed is how fast. Velocity is how fast and which way." } },
      { heading: "Newton’s three ideas", body: "Newton’s laws can be read as a story about change. Objects resist changes in their motion. A net force produces acceleration, and a force is always part of an interaction between objects.", bullets: ["First law: without a net force, motion stays steady.", "Second law: more net force means more acceleration; more mass means less acceleration for the same force.", "Third law: interactions come in equal and opposite pairs."] },
      { heading: "Energy keeps the accounting honest", body: "Energy is not a mysterious substance hidden inside an object. It is a bookkeeping quantity that lets us track the capacity for change. Kinetic energy belongs to motion; gravitational potential energy belongs to position in a gravitational field.", callout: { label: "Useful picture", text: "A roller coaster trades height for speed, then speed for height again. The form changes while the total energy is accounted for." } },
    ],
    vocabulary: [{ term: "force", definition: "An interaction that can change an object’s motion." }, { term: "acceleration", definition: "The rate at which velocity changes." }, { term: "energy", definition: "A conserved quantity that tracks the capacity for change." }],
    quiz: { question: "If the same net force acts on two objects, which accelerates more?", options: ["The object with more mass", "The object with less mass", "Both always accelerate equally", "The object with more energy"], answer: 1, explanation: "For the same net force, the smaller mass has the larger acceleration. This is the core relationship in F = ma." },
    next: "relativity",
  },
  {
    slug: "relativity",
    number: "03",
    title: "Relativity: space, time, and gravity",
    subtitle: "Why the universe does not share one universal clock.",
    level: "Intermediate",
    duration: "20 min",
    image: assets.relativity,
    color: "violet",
    summary: "Relativity starts with a simple fact: measurements of space and time depend on how an observer moves. General relativity then goes further, describing gravity as the geometry of spacetime itself.",
    objectives: ["Understand the idea of a frame of reference", "Explain why light changes the rules of measurement", "Describe gravity as curved spacetime"],
    sections: [
      { heading: "There is no view from nowhere", body: "To describe an event, you need a frame of reference: a coordinate system and a clock. Two observers moving differently can disagree about distances and durations without either making a mistake. Relativity is a precise way to translate between their measurements.", callout: { label: "Mental experiment", text: "Imagine a light pulse bouncing between mirrors inside a moving train. Different observers trace different paths, but they still agree on the speed of light." } },
      { heading: "Special relativity", body: "Einstein’s special theory of relativity starts with two principles: the laws of physics are the same for all observers moving at constant velocity, and the speed of light in empty space is the same for all of them. Space and time adjust so both statements can remain true.", bullets: ["Moving clocks can run slower relative to another observer.", "Lengths along the direction of motion can contract.", "Events that seem simultaneous to one observer may not be simultaneous to another."] },
      { heading: "General relativity", body: "General relativity treats gravity not as an invisible pull but as the curvature of spacetime caused by mass and energy. Objects moving freely follow the straightest available paths through that curved geometry. Light follows those paths too, which is why gravity can bend starlight.", callout: { label: "Big idea", text: "Matter tells spacetime how to curve. Curved spacetime tells matter how to move." } },
    ],
    vocabulary: [{ term: "frame of reference", definition: "The coordinate system and clock used to describe events." }, { term: "spacetime", definition: "The combined four-dimensional structure of three space dimensions and time." }, { term: "time dilation", definition: "The difference in elapsed time measured by observers in different conditions of motion or gravity." }],
    quiz: { question: "In general relativity, what is gravity?", options: ["A pressure in empty space", "Curved spacetime", "A type of electromagnetic wave", "An illusion caused by friction"], answer: 1, explanation: "General relativity models gravity as the geometry of spacetime shaped by mass and energy." },
    next: "quantum",
  },
  {
    slug: "quantum",
    number: "04",
    title: "Quantum physics and probability",
    subtitle: "A precise theory for a world that is not made of tiny billiard balls.",
    level: "Intermediate",
    duration: "22 min",
    image: assets.quantum,
    color: "cyan",
    summary: "Quantum theory describes atoms, electrons, photons, and other small systems using states, amplitudes, and probabilities. It is strange because the underlying rules are unlike everyday objects, not because the theory is vague.",
    objectives: ["Explain why quantum outcomes are probabilistic", "Understand wave-particle duality as a limitation of everyday categories", "Describe uncertainty without treating it as measurement failure"],
    sections: [
      { heading: "The microscopic world is not a smaller everyday world", body: "A baseball can usually be described as having a definite position and velocity whether or not anyone looks. Quantum systems are described by a state that encodes possible outcomes. The state evolves smoothly, but a measurement produces one of the allowed results.", callout: { label: "Avoid this trap", text: "Quantum uncertainty is not simply ignorance about a tiny hidden object. It is built into the predictions of the theory." } },
      { heading: "Waves, particles, and experiments", body: "Light and matter can produce interference patterns, a wave-like behavior, and can also arrive in discrete detection events, a particle-like behavior. Which aspect becomes visible depends on the experiment. The lesson is not that particles secretly swap costumes; it is that classical categories are incomplete.", bullets: ["Interference records how possibilities combine.", "A detector records individual events.", "The pattern of many events can be predicted precisely."] },
      { heading: "Uncertainty is a relationship", body: "The uncertainty principle says certain pairs of quantities, such as position and momentum, cannot both have arbitrarily sharp values in one quantum state. This is not a flaw in a particular instrument. It is a structural feature of the theory.", callout: { label: "Practical legacy", text: "Quantum rules explain semiconductors, lasers, MRI machines, LEDs, and much of modern electronics." } },
    ],
    vocabulary: [{ term: "state", definition: "The mathematical description containing the possible outcomes for a quantum system." }, { term: "superposition", definition: "A combination of possible states that can interfere before measurement." }, { term: "quantum", definition: "A discrete packet or allowed amount of a physical quantity." }],
    quiz: { question: "What does a quantum probability distribution tell us?", options: ["Which outcome is guaranteed", "The chances of possible measurement outcomes", "The exact path of an electron", "That experiments are unreliable"], answer: 1, explanation: "Quantum theory gives precise probabilities for possible outcomes, even when one individual result cannot be predicted in advance." },
    next: "astrophysics",
  },
  {
    slug: "astrophysics",
    number: "05",
    title: "Stars, galaxies, and deep time",
    subtitle: "Using light and physics to read the history of the universe.",
    level: "Intermediate",
    duration: "20 min",
    image: assets.astrophysics,
    color: "blue",
    summary: "Astrophysics brings the earlier ideas together. Gravity builds structure, nuclear physics powers stars, relativity shapes extreme objects, and light carries information across immense distances.",
    objectives: ["Explain how stars shine and change", "Read a spectrum as evidence about matter and motion", "Connect astronomy to the history of the universe"],
    sections: [
      { heading: "Stars are long-lived balances", body: "A star is a sphere of hot plasma held together by gravity. In its core, nuclear fusion releases energy. The outward pressure from that energy can balance the inward pull of gravity for millions or billions of years. When the fuel and balance change, the star changes too.", callout: { label: "Scale check", text: "The Sun converts roughly four million tonnes of mass into energy every second, yet it has enough fuel to shine for billions of years." } },
      { heading: "Light is a messenger", body: "We cannot collect a piece of a distant star, but we can analyze its light. A spectrum contains bright and dark lines associated with particular atoms. The pattern reveals composition, temperature, motion, and sometimes magnetic fields.", bullets: ["Color and brightness provide clues about temperature and size.", "Spectral lines identify elements.", "Redshift and blueshift reveal motion along our line of sight."] },
      { heading: "Cosmic history", body: "Because light takes time to travel, distant astronomy is also a look into the past. The farther away a galaxy is, the earlier in cosmic history we see it. By combining observations with models, cosmologists reconstruct a universe that has expanded and evolved.", callout: { label: "The wide view", text: "The night sky is not a snapshot of one moment. It is a layered archive of different cosmic times." } },
    ],
    vocabulary: [{ term: "fusion", definition: "A nuclear process in which light nuclei combine and release energy." }, { term: "spectrum", definition: "The distribution of light by wavelength or frequency." }, { term: "redshift", definition: "A shift toward longer wavelengths often caused by an object moving away from us or by cosmic expansion." }],
    quiz: { question: "How can astronomers tell what elements are in a star?", options: ["By collecting star material", "By reading spectral lines in its light", "By measuring only its radius", "By listening for vibrations"], answer: 1, explanation: "Atoms leave characteristic patterns in starlight. Those spectral fingerprints reveal the star’s chemistry." },
  },
];

export type Scientist = {
  slug: string;
  name: string;
  dates: string;
  field: string;
  mark: string;
  color: string;
  image: string;
  headline: string;
  summary: string;
  biography: string[];
  contributions: string[];
  relatedLesson: string;
};

export const scientists: Scientist[] = [
  { slug: "galileo-galilei", name: "Galileo Galilei", dates: "1564–1642", field: "Astronomy · Mechanics", mark: "GG", color: "ochre", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff/lossy-page1-330px-Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff.jpg", headline: "He made observation an argument.", summary: "Galileo helped turn motion and astronomy into subjects where careful observation could challenge inherited authority.", biography: ["Galileo was born in Pisa and worked across mathematics, astronomy, and natural philosophy. He studied falling bodies and the motion of projectiles, looking for regular patterns beneath messy everyday events.", "After improving the telescope, he observed mountains on the Moon, phases of Venus, and moons orbiting Jupiter. Those observations made it harder to imagine Earth as the unmoving center of every celestial motion.", "His work did not instantly create modern physics. It created a new standard: when an idea and an observation disagree, the observation deserves a closer look."], contributions: ["Early quantitative studies of falling motion", "Telescopic observations that supported a Sun-centered model", "A model of inquiry based on experiment and measurement"], relatedLesson: "foundations" },
  { slug: "isaac-newton", name: "Isaac Newton", dates: "1643–1727", field: "Mechanics · Optics", mark: "IN", color: "rust", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/330px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg", headline: "He connected the apple to the Moon.", summary: "Newton showed that the same mathematical rules could describe motion on Earth and motion in the heavens.", biography: ["Newton’s work brought together ideas about motion, force, and gravity in a system that could make precise predictions. His laws of motion describe how forces change movement, while universal gravitation describes the attraction between masses.", "He also investigated light and color, showing that white light can be separated into a spectrum. The combination of mechanics, mathematics, and experiment made his work unusually powerful.", "Newtonian mechanics is not the final word in every situation, but it remains an extraordinarily useful approximation for ordinary speeds, sizes, and gravitational fields."], contributions: ["Three laws of motion", "Universal law of gravitation", "Foundational work in calculus and optics"], relatedLesson: "mechanics" },
  { slug: "albert-einstein", name: "Albert Einstein", dates: "1879–1955", field: "Relativity · Quantum theory", mark: "AE", color: "violet", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/330px-Albert_Einstein_Head_cleaned.jpg", headline: "He asked what an observer would see.", summary: "Einstein changed physics by treating light, motion, and gravity as questions about the structure of space and time.", biography: ["In 1905, Einstein published a series of papers that reshaped physics. He explained Brownian motion, proposed the light quantum for the photoelectric effect, and introduced special relativity.", "Special relativity made the speed of light central and showed that measurements of space and time depend on the observer’s motion. A decade later, general relativity described gravity as curved spacetime.", "Einstein also remained deeply engaged with quantum theory, even while questioning some of its philosophical implications. His career is a reminder that a scientist can help build a theory and still argue with its interpretation."], contributions: ["Special and general relativity", "Light quanta and the photoelectric effect", "Mass–energy equivalence"], relatedLesson: "relativity" },
  { slug: "emmy-noether", name: "Emmy Noether", dates: "1882–1935", field: "Mathematics · Theoretical physics", mark: "EN", color: "cyan", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Emmy_Noether_%283x4_cropped%29.jpg/330px-Emmy_Noether_%283x4_cropped%29.jpg", headline: "She found the hidden bookkeeping rules.", summary: "Noether revealed that every continuous symmetry in a physical theory corresponds to a conservation law.", biography: ["Noether worked at the intersection of abstract algebra and mathematical physics. In a period when women were often denied formal academic positions, she built a body of work that changed both subjects.", "Her theorem connects symmetry to conservation. If the laws of physics do not change when we shift time forward, energy is conserved. If they do not change when we shift position, momentum is conserved.", "The theorem is one of the clearest examples of a deep idea becoming a practical tool. It helps physicists decide which quantities should remain constant in mechanics, relativity, and field theory."], contributions: ["Noether’s theorem", "Major advances in abstract algebra", "A foundational bridge between symmetry and conservation"], relatedLesson: "mechanics" },
  { slug: "marie-curie", name: "Marie Curie", dates: "1867–1934", field: "Radioactivity · Chemistry", mark: "MC", color: "blue", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/330px-Marie_Curie_c._1920s.jpg", headline: "She followed the evidence into the invisible.", summary: "Curie’s work on radioactivity opened a new view of matter and made careful persistence a scientific method in its own right.", biography: ["Born Maria Skłodowska in Warsaw, Curie moved to Paris to study science. She and Pierre Curie investigated the strange radiation emitted by uranium ores and discovered the elements polonium and radium.", "Her measurements showed that radioactivity came from atoms themselves, not from a chemical arrangement of atoms. That was a profound clue that atoms were not indivisible after all.", "Curie won Nobel Prizes in both Physics and Chemistry. During World War I, she also helped develop mobile X-ray units, bringing scientific knowledge into medical practice."], contributions: ["Research establishing radioactivity as an atomic phenomenon", "Discovery of polonium and radium", "Practical medical use of mobile radiography"], relatedLesson: "quantum" },
  { slug: "vera-rubin", name: "Vera Rubin", dates: "1928–2016", field: "Astronomy · Cosmology", mark: "VR", color: "pink", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Vera_Rubin_with_antique_globes.jpg/330px-Vera_Rubin_with_antique_globes.jpg", headline: "She made the invisible count.", summary: "Rubin’s measurements of galaxy rotation provided some of the strongest evidence that most matter in galaxies is dark and unseen.", biography: ["Rubin became interested in astronomy as a child and later faced repeated barriers in a field that did not readily make room for women. Her work combined patient observation with a willingness to follow an unexpected result.", "When Rubin measured how stars orbit within spiral galaxies, she found that the outer stars moved much faster than visible matter alone could explain. The simplest conclusion was that galaxies contain much more mass than we can see.", "Dark matter remains an open question about what the universe is made of. Rubin’s work shows how a careful measurement can open a problem that lasts for generations."], contributions: ["Galaxy rotation measurements", "Evidence for dark matter in spiral galaxies", "A lasting example of observational persistence"], relatedLesson: "astrophysics" },
];

export function getLesson(slug?: string) { return lessons.find((lesson) => lesson.slug === slug); }
export function getScientist(slug?: string) { return scientists.find((scientist) => scientist.slug === slug); }
