export const assets = {
  hero: "/assets/hero.jpg",
  mechanics: "/assets/mechanics.jpg",
  relativity: "/assets/relativity.png",
  quantum: "/assets/quantum.png",
  astrophysics: "/assets/astrophysics.jpg",
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

const lessonExtensions: Record<string, LessonSection[]> = {
  foundations: [
    { heading: "Why idealizations help", body: "A model can be useful even when nobody expects it to describe every detail. Treating a rolling ball as a point, ignoring air resistance, or assuming a clock is perfect lets us isolate one relationship at a time. The simplification is not a lie; it is a controlled question about which effects matter most." },
    { heading: "From repeatable pattern to law", body: "A physical law is not merely a sentence that sounds true. It is a compact relationship that survives repeated tests across different conditions. When a model fails, scientists do not simply discard the data. They ask which assumption broke, what new variable matters, and whether a broader model can include the old one as a special case." },
  ],
  mechanics: [
    { heading: "Coordinate systems make motion readable", body: "Before calculating a trajectory, a physicist chooses an origin, a direction, and a clock. The same train can be described as moving relative to a platform or as nearly stationary relative to a passenger. The numbers change with the frame, but the physical event does not. Choosing coordinates carefully prevents a surprising amount of confusion." },
    { heading: "Orbits are falling with a sideways miss", body: "An orbit is not the absence of gravity. A satellite is continually falling toward a planet while moving sideways fast enough that the surface curves away beneath it. Changing the launch speed changes the path: a low speed makes the object return, a higher speed produces an ellipse, and a sufficiently high speed can escape the planet altogether." },
  ],
  relativity: [
    { heading: "Why light sets the limit", body: "The speed of light is not simply the speed of a fast vehicle. It is the conversion factor that links measurements of distance and time in spacetime. If two observers must both measure the same light speed, then their rulers and clocks cannot remain related by the ordinary Galilean rules at high relative speeds." },
    { heading: "Tests in the real universe", body: "Relativity is tested in situations ranging from atomic clocks flown on aircraft to the timing of satellite navigation and the motion of Mercury. Gravitational lensing, binary pulsars, and gravitational-wave detectors extend those tests into stronger fields. The theory is powerful because it makes quantitative predictions, not because it is a poetic picture of gravity." },
  ],
  quantum: [
    { heading: "Amplitudes are the working language", body: "Quantum theory does not assign ordinary probabilities directly to every possible history. It assigns amplitudes, which can be positive, negative, or complex. When alternatives are indistinguishable, their amplitudes combine before probabilities are calculated. This is why interference can make some outcomes more likely and others less likely." },
    { heading: "From laboratory result to technology", body: "The quantum description becomes practical when many particles are controlled together. Semiconductor bands determine how transistors conduct, stimulated emission makes lasers possible, and nuclear magnetic resonance uses quantum energy levels to produce medical images. The strange mathematics is not separate from engineering; it is the reason the devices work." },
  ],
  astrophysics: [
    { heading: "How stars are born and die", body: "Stars form when gravity gathers cold gas and dust into denser clumps. As a clump contracts, its center heats until nuclear fusion can begin. A star’s mass controls its temperature, lifetime, and final fate: smaller stars fade slowly, while massive stars can end in supernovae and leave neutron stars or black holes." },
    { heading: "Evidence across enormous distances", body: "Astronomers combine brightness, spectra, timing, and motion because no single observation answers every question. A faint shift in a spectral line can reveal a planet’s orbit; a sudden burst can signal a stellar explosion; a precise pattern in the cosmic microwave background can constrain the age and composition of the universe. Astrophysics is the art of extracting physical evidence from light." },
  ],
};

lessons.forEach((lesson) => lesson.sections.push(...(lessonExtensions[lesson.slug] ?? [])));

const deepLessonSections: Record<string, LessonSection[]> = {
  foundations: [
    { heading: "The cycle of scientific reasoning", body: "A useful investigation moves through a cycle rather than a straight line. A puzzling observation leads to a question; a model makes the question precise; a prediction tells us what evidence would count; and a measurement tests the prediction. Results then modify the next question. This is why science can progress without beginning with perfect certainty: each careful comparison narrows the space of possible explanations." },
    { heading: "Variables, controls, and fair tests", body: "When an experiment changes several things at once, it becomes difficult to know what caused the result. Scientists therefore identify variables, hold some conditions steady, and change one factor deliberately. A control is not necessarily a second identical experiment; it is a comparison that reveals what would happen without the effect being studied. Good experimental design turns vague impressions into interpretable evidence." },
    { heading: "Units are part of the reasoning", body: "A number without a unit is not yet a physical measurement. Metres, seconds, kilograms, and kelvin tell us what kind of quantity is being discussed and allow results from different experiments to be compared. Unit analysis can even expose mistakes before an experiment is repeated. If an equation claims that a distance equals a time, something in the reasoning is missing." },
    { heading: "Uncertainty is information", body: "Reporting a measurement as 2.0 seconds communicates more than reporting 2 seconds: it suggests a different resolution and a different level of confidence. Random variation can often be reduced by repeated trials, while systematic error requires checking the instrument or method. A mature scientific claim includes both a best estimate and a clear account of how much that estimate could be wrong." },
    { heading: "When models disagree", body: "Two models can make similar predictions in familiar situations and separate only under extreme conditions. Newtonian mechanics and relativity are a classic example: for ordinary speeds, their predictions are almost identical, but near the speed of light they diverge. A newer theory does not erase every useful result from an older one; it explains where the older approximation works and where it must be replaced." },
  ],
  mechanics: [
    { heading: "Position, velocity, and acceleration as a story", body: "A graph of position against time tells a different story from a graph of velocity against time. A straight position graph can mean constant velocity, while a curved position graph signals acceleration. Reading these graphs is more than a mathematical exercise: it lets us reconstruct what a vehicle, ball, or planet has been doing without watching every moment directly." },
    { heading: "Forces are interactions, not ingredients", body: "It is tempting to say that an object contains a force, but forces arise from interactions. A hand pushes a book, Earth attracts a falling object, and a surface pushes back on a resting box. Drawing a free-body diagram makes each interaction explicit. The diagram is a compact argument: if a force has been omitted, the predicted motion may be wrong even when the algebra is perfect." },
    { heading: "Friction and the everyday world", body: "Friction is not one universal force with one universal formula. Static friction prevents a shoe from slipping, kinetic friction acts while surfaces slide, and fluid drag depends on shape and speed. These effects dissipate organized mechanical energy into microscopic motion and heat. Ignoring them can make a calculation cleaner, but adding them back is essential when predicting braking distances, fuel use, or the motion of a falling object." },
    { heading: "Momentum and collisions", body: "Momentum is the product of mass and velocity, and in an isolated system the total momentum remains constant. This principle explains why a cannon recoils, why a rocket can accelerate in empty space, and why a collision can be analyzed even when the detailed contact forces are complicated. Energy may change form during impact, but momentum gives a reliable account of the overall motion." },
    { heading: "Energy methods simplify complicated motion", body: "Force-based calculations follow motion step by step. Energy methods often let us compare the beginning and end of a process without tracking every intermediate detail. A skier’s speed at the bottom depends on the height lost, the work done against friction, and the initial energy. The method is especially powerful when the path is curved or when the force changes with position." },
  ],
  relativity: [
    { heading: "The train-and-platform problem", body: "Imagine a flash at the center of a moving train. A passenger can see the light reach both ends at the same time, while an observer on the platform can see one end move toward the flash and the other move away. If both observers measure the same light speed, they cannot also agree on simultaneity. Relativity begins by taking that disagreement seriously rather than hiding it inside an assumption." },
    { heading: "Time dilation is not a clock defect", body: "A moving clock does not run slowly because its mechanism is damaged. Any physical process, including an atomic transition, follows the geometry of spacetime. Different observers divide spacetime into space and time differently, so the elapsed time along their paths can differ. The effect is tiny at everyday speeds but measurable with precision clocks and important for satellite navigation." },
    { heading: "Mass and energy are connected", body: "The expression E = mc² says that mass contributes to the energy of a system. Because c² is enormous, a small amount of mass corresponds to a large amount of energy. Nuclear reactions release energy when the products have slightly less mass than the starting materials. The missing mass has not vanished; it has become kinetic energy, radiation, or heat." },
    { heading: "Gravity changes the rate of time", body: "General relativity predicts that clocks deeper in a gravitational field tick more slowly relative to clocks farther away. This is another form of time dilation, but its cause is spacetime geometry rather than relative motion. The effect has been measured on Earth and must be included in global positioning systems. A navigation signal is useful only when its timing is modeled with relativistic accuracy." },
    { heading: "Black holes and horizons", body: "A black hole is not a cosmic vacuum cleaner. Far from the horizon, its gravity is described by the same rules as the gravity of any other object with the same mass. The event horizon is a boundary in spacetime: once an object crosses it, every future-directed path leads inward. The dramatic behavior comes from the geometry of possible paths, not from a new kind of force." },
  ],
  quantum: [
    { heading: "The double-slit experiment", body: "When individual electrons pass through two narrow slits, the final screen builds an interference pattern over time. Each electron arrives as a localized detection, yet the distribution of many detections depends on both slits being available. If the experiment records which slit was used, the interference changes. The result shows that quantum predictions concern the whole experimental arrangement, not a tiny classical path hidden inside it." },
    { heading: "Measurement and the state", body: "A quantum state is a tool for predicting the possible results of measurements. Before a measurement, the state can encode several outcomes with different amplitudes. The apparatus is not merely revealing a prewritten classical answer; it is participating in a physical interaction that selects a result and leaves a record. Different measurements ask different questions and can disturb the conditions needed for another question." },
    { heading: "Entanglement is a correlation", body: "Entangled systems are described by one joint state even when the parts are far apart. Measuring one part changes what can be predicted about the other, but this does not allow useful information to travel faster than light. The correlations are stronger than classical shared instructions can reproduce, which is why entanglement is important in both the foundations of physics and emerging quantum technologies." },
    { heading: "Why atoms have stable sizes", body: "In a classical picture, an orbiting electron would continually radiate energy and spiral into the nucleus. Quantum mechanics replaces that picture with allowed stationary states. An electron can occupy a stable energy level and can move between levels by absorbing or emitting a photon with a precise energy. Atomic spectra are therefore not decorative colors; they are evidence for quantized structure." },
    { heading: "Probability does not mean imprecision", body: "A quantum experiment can be probabilistic for one event and extraordinarily precise across many events. The theory predicts the distribution of outcomes, the interference pattern, and the average values of observables with remarkable accuracy. This distinction matters: uncertainty about an individual result is compatible with strong, testable regularities in a large collection of results." },
  ],
  astrophysics: [
    { heading: "Reading a star’s spectrum", body: "When starlight is spread into a spectrum, atoms leave narrow absorption or emission lines. Each element has a characteristic set of allowed transitions, so the lines act like fingerprints. Their strengths indicate temperature and abundance, while their displacement reveals motion along the line of sight. With spectroscopy, astronomers can measure the chemistry and dynamics of objects they can never visit." },
    { heading: "The life cycle of a star", body: "A star’s mass is the main control knob for its life. Low-mass stars consume fuel slowly and can remain stable for extremely long times. Massive stars burn hotter and faster, build heavier elements in their cores, and can end in violent explosions. The remnants of those explosions enrich space with elements that later become part of planets, atmospheres, and living organisms." },
    { heading: "Galaxies as evolving systems", body: "A galaxy is not just a collection of stars. Gas, dust, dark matter, magnetic fields, and stellar explosions interact across enormous scales. Spiral arms can compress gas and trigger star formation, while feedback from young stars and black holes can heat or expel gas. Observing galaxies at different distances lets astronomers compare stages in their evolution rather than watching one galaxy for billions of years." },
    { heading: "Evidence for dark matter", body: "Visible stars and gas do not provide enough gravity to explain the speeds of stars in many galaxies or the way galaxy clusters bend background light. The dark-matter hypothesis is a model that connects several observations, not an image of an unseen substance. Scientists continue to test its particle properties, gravitational effects, and alternatives because the evidence points to a real gap in our understanding." },
    { heading: "Expansion and cosmic background light", body: "The universe expands, so light from distant galaxies is stretched toward longer wavelengths. The cosmic microwave background is relic radiation released when the early universe became transparent. Its tiny temperature variations contain information about the density of matter, the geometry of space, and the seeds from which later galaxies grew. Cosmology connects these faint patterns to a physical history of the universe." },
  ],
};

lessons.forEach((lesson) => lesson.sections.push(...(deepLessonSections[lesson.slug] ?? [])));

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
  { slug: "richard-feynman", name: "Richard Feynman", dates: "1918–1988", field: "Quantum electrodynamics · Particle physics", mark: "RF", color: "violet", image: "https://thumb.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/330px-Richard_Feynman_Nobel.jpg", headline: "He made difficult physics feel alive.", summary: "Feynman reshaped quantum electrodynamics and became known for explaining hard ideas with unusual clarity, curiosity, and humor.", biography: ["Feynman studied physics at MIT and Princeton before joining the wartime project at Los Alamos. After the war, he returned to fundamental questions about how light and matter interact.", "His path-integral formulation gives a way to calculate quantum amplitudes by considering many possible histories. His diagrammatic notation for particle interactions became a practical language used across particle physics.", "Feynman shared the 1965 Nobel Prize in Physics for work in quantum electrodynamics. He also served on the commission that investigated the Space Shuttle Challenger disaster, insisting that evidence and simple demonstrations should guide conclusions."], contributions: ["Quantum electrodynamics", "Feynman diagrams for particle interactions", "Path-integral formulation of quantum mechanics"], relatedLesson: "quantum" },
  { slug: "stephen-hawking", name: "Stephen Hawking", dates: "1942–2018", field: "Cosmology · Black holes", mark: "SH", color: "cyan", image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg", headline: "He asked what black holes can reveal.", summary: "Hawking connected general relativity, quantum theory, and thermodynamics to show that black holes are not completely black.", biography: ["Hawking studied cosmology at Cambridge and worked on the mathematical consequences of Einstein’s theory of general relativity. His research with Roger Penrose showed how singularities can arise in gravitational collapse and in cosmological models.", "In the 1970s, Hawking calculated that quantum effects near an event horizon allow black holes to emit thermal radiation. This result, now called Hawking radiation, links gravity, quantum theory, and the laws of thermodynamics.", "After being diagnosed with motor neurone disease as a young adult, Hawking continued research and became one of the world’s best-known science communicators. His career helped make black holes and cosmology part of public scientific culture."], contributions: ["Hawking radiation", "Theorems about gravitational singularities", "Work on black-hole thermodynamics and cosmology"], relatedLesson: "astrophysics" },
  { slug: "james-clerk-maxwell", name: "James Clerk Maxwell", dates: "1831–1879", field: "Electromagnetism · Kinetic theory", mark: "JM", color: "gold", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/James-Clerk-Maxwell-1831-1879.jpg/330px-James-Clerk-Maxwell-1831-1879.jpg", headline: "He showed that light is an electromagnetic wave.", summary: "Maxwell unified electricity, magnetism, and optics into a single mathematical theory of fields.", biography: ["Maxwell was a Scottish physicist and mathematician whose work ranged from the stability of Saturn’s rings to the kinetic theory of gases. He was especially interested in finding mathematical structure beneath apparently separate phenomena.", "His equations describe how electric and magnetic fields are produced and how they change. From those equations, Maxwell showed that disturbances in the fields can travel as waves at the speed of light.", "The implication was profound: visible light is one part of a larger electromagnetic spectrum. Radio, microwaves, infrared, ultraviolet, X-rays, and gamma rays are all related forms of electromagnetic radiation."], contributions: ["Maxwell’s equations", "Electromagnetic theory of light", "Statistical and kinetic theory of gases"], relatedLesson: "foundations" },
  { slug: "michael-faraday", name: "Michael Faraday", dates: "1791–1867", field: "Electromagnetism · Experimental physics", mark: "MF", color: "pink", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Michael_Faraday_sitting_crop.jpg/330px-Michael_Faraday_sitting_crop.jpg", headline: "He turned invisible fields into experiments.", summary: "Faraday discovered electromagnetic induction and introduced the field concept that later became central to Maxwell’s theory.", biography: ["Faraday was born into a poor family in London and began his scientific career as a bookbinder’s apprentice. His access to books and lectures helped him become an extraordinarily skilled experimental investigator.", "He discovered that a changing magnetic environment can produce an electric current. This principle of electromagnetic induction underlies generators, transformers, and much of modern electrical technology.", "Faraday also developed the idea that forces are carried through fields in space rather than acting instantly at a distance. Maxwell later translated many of Faraday’s experimental insights into mathematics."], contributions: ["Electromagnetic induction", "Foundations of electric motors and generators", "Field concept in physics and electrochemistry"], relatedLesson: "foundations" },
  { slug: "max-planck", name: "Max Planck", dates: "1858–1947", field: "Quantum theory · Thermodynamics", mark: "MP", color: "ochre", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Max_Planck_by_Hugo_Erfurth_1938cr_-_restoration1.jpg/330px-Max_Planck_by_Hugo_Erfurth_1938cr_-_restoration1.jpg", headline: "He opened the door to the quantum world.", summary: "Planck introduced the idea that energy is exchanged in discrete packets, a step that helped launch modern quantum physics.", biography: ["Planck studied thermodynamics and the problem of how hot objects emit light. Classical physics predicted an unrealistic amount of high-frequency radiation, a problem later called the ultraviolet catastrophe.", "In 1900, Planck proposed that oscillators in matter exchange energy in discrete amounts proportional to their frequency. He introduced the constant that now bears his name, although he initially treated the idea as a mathematical device.", "The quantum hypothesis became one of the foundations of twentieth-century physics. It influenced Einstein’s explanation of the photoelectric effect and the later theories of atoms, matter, and radiation."], contributions: ["Planck’s constant", "The quantum hypothesis", "Work in thermodynamics and black-body radiation"], relatedLesson: "quantum" },
];

const biographyExtensions: Record<string, string[]> = {
  "galileo-galilei": [
    "Galileo’s early work on motion used inclined planes and carefully timed experiments to slow a fall down enough to measure. The apparatus was simple, but the reasoning was important: a phenomenon that seemed too fast and irregular could be transformed into a controlled comparison.",
    "He argued that a falling body does not move with a constant speed. Its speed changes in a regular way, and the distance covered grows with the square of elapsed time. This relationship helped establish mathematics as a language for physical change.",
    "Galileo’s telescope was not powerful by modern standards, yet its use was revolutionary because it turned the heavens into an observational laboratory. The Moon had a surface, the Sun had spots, and Jupiter had its own moons.",
    "His support for heliocentrism placed him in conflict with religious and political authorities. The episode is historically complicated, but it clearly shows that scientific ideas are shaped by institutions, evidence, communication, and the limits placed on public debate.",
    "Galileo’s lasting importance is not only that some of his conclusions were correct. He helped establish a style of inquiry in which idealized experiments, measurement, geometry, and observation work together to challenge assumptions inherited from tradition.",
  ],
  "isaac-newton": [
    "Newton’s Principia was difficult to read because it expressed natural philosophy through geometry and precise definitions. It separated concepts such as mass, quantity of motion, force, and absolute time, giving later scientists a structured vocabulary for mechanics.",
    "Universal gravitation was powerful because it connected terrestrial and celestial phenomena. The same inverse-square relationship could describe an object falling near Earth, the Moon’s orbit, and the paths of planets around the Sun.",
    "Newton also carried out experiments with prisms. He showed that a prism does not create colors from white light; it separates colors that were already present. This work changed the study of optics and influenced later spectroscopy.",
    "His career included arguments with other mathematicians and natural philosophers, especially over priority and method. The disputes remind us that scientific progress is not free of ambition or conflict; ideas still have to be judged by their explanatory and predictive power.",
    "Newtonian mechanics later became the foundation for engineering, astronomy, and much of the industrial world. Relativity and quantum mechanics set limits on it, but within those limits the theory remains one of the most useful approximations ever developed.",
  ],
  "albert-einstein": [
    "Einstein’s 1905 papers were remarkable because they addressed different problems with a common habit: identify the assumptions hidden in a familiar theory and ask what the evidence actually requires. He moved between thought experiments, statistical reasoning, and mathematical reformulation.",
    "His explanation of Brownian motion gave molecular theory a measurable consequence. The irregular motion of pollen grains in water could be related to invisible impacts from atoms and molecules, helping establish that microscopic matter was not merely a convenient fiction.",
    "The photoelectric effect revealed that light can transfer energy in discrete packets. Einstein’s proposal helped explain why increasing light intensity does not always eject electrons, while increasing frequency can. The result later earned him the Nobel Prize in Physics.",
    "General relativity required years of difficult mathematical work and changed the meaning of gravity. The theory predicts the bending of light, the precession of Mercury’s orbit, gravitational time dilation, black holes, and ripples in spacetime.",
    "Einstein’s public image sometimes hides the collaborative and argumentative nature of his work. He corresponded widely, debated quantum mechanics with Bohr and others, and continued to search for a deeper unified description even when the physics community moved in other directions.",
  ],
  "emmy-noether": [
    "Noether’s work became possible through collaboration with mathematicians and physicists who recognized that the emerging theories of relativity and field physics needed a new mathematical language. Her theorems gave that language a structural center rather than a collection of isolated tricks.",
    "A symmetry means that a transformation leaves the relevant physics unchanged. Moving an experiment from one place to another, starting it at a later time, or rotating the whole setup can leave the laws unchanged. Noether showed that such regularities have measurable consequences.",
    "Her theorem is especially important because conservation laws are often introduced as facts to memorize. Noether’s result explains why energy, momentum, and angular momentum appear so consistently: they arise from the symmetries built into our descriptions of nature.",
    "Noether also transformed abstract algebra. Her work on ideals, rings, and chain conditions influenced mathematics far beyond physics, making her a central figure in twentieth-century algebra as well as theoretical physics.",
    "She faced institutional barriers throughout her career, including periods when she taught without a formal salary or title. Students and colleagues remembered her generosity and intensity in the classroom, where she treated difficult mathematics as a shared problem rather than a display of authority.",
  ],
  "marie-curie": [
    "Curie began by comparing the strength of radiation from different minerals. The careful regularity of the measurements suggested that the radiation was an atomic property, not simply a feature of one chemical compound. This was a bold conclusion from an initially puzzling effect.",
    "She developed laborious methods for processing large quantities of pitchblende residue. The work involved repeated crushing, dissolving, filtering, heating, and measuring. The discovery of new elements was therefore not a single dramatic moment but the result of sustained experimental discipline.",
    "Curie’s research helped change the concept of the atom. Atoms could emit energy, transform into other elements, and reveal internal structure. Radioactivity became a bridge between chemistry, physics, medicine, and the later study of nuclear processes.",
    "Her scientific life was affected by grief, public scrutiny, sexism, and the demands of managing a laboratory. Yet she continued to publish, teach, and build research institutions. Her example broadened the imagined role of women in experimental science.",
    "The benefits and dangers of radioactivity are part of Curie’s legacy. The same discoveries that enabled new medical treatments also exposed researchers to radiation before its risks were understood. Scientific progress must therefore include safety, ethics, and responsibility alongside discovery.",
  ],
  "vera-rubin": [
    "Rubin’s work depended on precise measurements of faint galaxies and on comparing the motion of stars at different distances from a galactic center. The outer regions should have slowed if visible matter were the whole story. Instead, their speeds remained unexpectedly high.",
    "The result became known through years of observations rather than one decisive photograph. Rubin and her collaborators learned to separate the motion of a galaxy from the motion of Earth, calibrate instruments, and compare rotation curves across many systems.",
    "Dark matter is inferred through gravity. It does not need to absorb or emit light in order to affect the paths of stars and the bending of background galaxies. That makes the problem difficult: the evidence is strong, but the substance itself remains elusive.",
    "Rubin also advocated for young scientists and for wider participation in astronomy. She understood that a field changes not only when a new measurement appears, but also when more people are able to ask questions and gain access to instruments.",
    "Her legacy is a model of observational patience. When a result conflicts with a popular expectation, the correct response is neither to dismiss it immediately nor to celebrate it without checking. It is to measure again, compare broadly, and let the pattern earn its meaning.",
  ],
  "richard-feynman": [
    "Feynman’s interest in quantum electrodynamics centered on a practical problem: how to calculate the interaction between charged particles and light without producing meaningless infinities. Renormalization provided a disciplined way to connect the theory’s calculations with measurable quantities.",
    "A Feynman diagram is not a literal photograph of particles moving along a tiny track. It is a bookkeeping device for terms in a calculation. The visual language is powerful because it organizes complicated mathematical contributions into recognizable interaction patterns.",
    "His path-integral picture offers a different way to understand quantum behavior. Instead of selecting one classical path, the calculation combines contributions from many possible paths. In the classical limit, paths near the stationary-action path reinforce one another and the familiar trajectory emerges.",
    "Feynman was also an influential teacher. His lectures emphasized physical intuition, dimensional reasoning, and the courage to say when an explanation was incomplete. He used simple demonstrations not to replace mathematics, but to expose where an argument depended on an untested assumption.",
    "His role on the Challenger investigation showed the same attitude. A small piece of rubber placed in ice water demonstrated how cold could affect an O-ring. The experiment was simple, public, and persuasive because it connected an abstract failure to a physical mechanism.",
  ],
  "stephen-hawking": [
    "Hawking’s early work examined the mathematical behavior of spacetime near singularities. With Roger Penrose, he showed that under broad conditions general relativity predicts regions where the theory’s description becomes incomplete, including the origin of the expanding universe.",
    "The insight behind Hawking radiation comes from quantum fields in curved spacetime. What one observer calls a vacuum is not always the same as what another observer detects as particles. Near a horizon, this difference allows a black hole to have a temperature.",
    "Black-hole thermodynamics creates a deep puzzle because the amount of information that can be associated with a black hole seems related to the area of its horizon rather than its volume. This idea helped motivate later research into holography and quantum gravity.",
    "Hawking’s public writing translated difficult concepts without pretending they were simple. He used the history of the universe, the behavior of time, and the fate of black holes to invite readers into questions that remain active research problems.",
    "His scientific career also changed public assumptions about disability and intellectual work. With extensive assistance and adaptive technology, he continued to lecture, write, collaborate, and participate in public life for decades after his diagnosis.",
  ],
  "james-clerk-maxwell": [
    "Maxwell’s electromagnetic theory replaced a collection of separate experimental laws with a unified field description. Electric charge produces an electric field, moving charge produces magnetic effects, and changing fields can generate one another and travel through space.",
    "The speed predicted for electromagnetic waves matched the measured speed of light. Maxwell therefore argued that optics was not an independent subject but part of electromagnetism. This prediction later opened the door to radio communication and the wider electromagnetic spectrum.",
    "He also contributed to statistical mechanics by describing gases in terms of distributions of molecular speeds. Individual molecules move too quickly and randomly to track one by one, but statistical patterns allow pressure, temperature, and diffusion to be calculated.",
    "Maxwell used physical models as well as equations. Some of his mechanical analogies were later replaced, but they helped him reason about invisible fields before the mathematics was fully settled. The ability to move between picture and equation was one of his strengths.",
    "Modern communications, radar, medical imaging, wireless networks, and optical technology all rely on Maxwell’s field theory. His work is a reminder that a mathematical unification can remain useful long after the original motivating experiments have changed.",
  ],
  "michael-faraday": [
    "Faraday’s experiments established a two-way relationship between electricity and magnetism. A current could produce rotation, and a changing magnetic environment could produce current. These results showed that the effects were not isolated curiosities but parts of a connected physical system.",
    "His electric motor experiments transformed abstract forces into visible motion. Later generators reversed the arrangement: mechanical motion through a magnetic field produces electrical current. The principle remains central to power stations, wind turbines, and regenerative braking.",
    "Faraday’s concept of lines of force gave physical meaning to what had often been treated as action at a distance. A field could be represented as something with structure throughout space, capable of storing energy and changing over time.",
    "He also made major contributions to chemistry, including work on electrolysis and the relationship between the amount of material transformed and the quantity of electricity passed through a solution. His laws connected microscopic ions to measurable laboratory quantities.",
    "Faraday had little formal mathematical education, but his experimental imagination was extraordinary. Maxwell later showed that Faraday’s field ideas could be expressed mathematically. The partnership between experimental insight and mathematical theory became a model for modern electromagnetism.",
  ],
  "max-planck": [
    "Planck approached black-body radiation through thermodynamics, trying to understand how energy is distributed among oscillators in matter. Classical reasoning worked at some wavelengths but failed badly at short wavelengths, where it predicted an impossible runaway of emitted energy.",
    "The constant h sets the scale of quantum effects. For everyday objects, the packets are so small that energy appears continuous. For atoms and photons, the scale becomes visible. This is why the classical world can feel smooth even though its foundation is quantized.",
    "Planck did not immediately see his hypothesis as a complete new mechanics. Einstein took the quantum idea further by applying it to light, and later Bohr, Heisenberg, Schrödinger, and others built theories of atoms and matter around the growing evidence.",
    "His scientific life was marked by both achievement and tragedy. He continued working through political upheaval and personal loss, while defending the value of science and education during a period in which German institutions were being damaged by dictatorship and war.",
    "Planck’s legacy is therefore both technical and historical. A small change in how energy is counted opened an entirely new description of nature, while his life shows how scientific institutions and human lives are affected by events far beyond the laboratory.",
  ],
};

scientists.forEach((scientist) => scientist.biography.push(...(biographyExtensions[scientist.slug] ?? [])));

export function getLesson(slug?: string) { return lessons.find((lesson) => lesson.slug === slug); }
export function getScientist(slug?: string) { return scientists.find((scientist) => scientist.slug === slug); }
