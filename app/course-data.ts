export type CourseLevel = {
  slug: string;
  order: number;
  statusAr: string;
  statusEn: string;
  available: boolean;
  ageAr: string;
  ageEn: string;
  titleAr: string;
  titleEn: string;
  eyebrowAr: string;
  eyebrowEn: string;
  descriptionAr: string;
  descriptionEn: string;
  toolAr: string;
  toolEn: string;
  projectAr: string;
  projectEn: string;
  outcomeAr: string;
  outcomeEn: string;
  heroNoteAr: string;
  heroNoteEn: string;
  skillsAr: string[];
  skillsEn: string[];
  parentAr: string[];
  parentEn: string[];
  monthsAr: Array<{ label: string; title: string; text: string }>;
  monthsEn: Array<{ label: string; title: string; text: string }>;
  faqsAr: Array<{ q: string; a: string }>;
  faqsEn: Array<{ q: string; a: string }>;
};

export const COURSE_LEVELS: CourseLevel[] = [
  {
    slug: "scratchjr-6-8",
    order: 1,
    statusAr: "متاح حاليًا",
    statusEn: "Open in the next cohort",
    available: true,
    ageAr: "6–8 سنوات",
    ageEn: "Ages 6–8",
    titleAr: "مستكشف ScratchJr",
    titleEn: "ScratchJr Explorer",
    eyebrowAr: "Level 01 • البداية المرحة",
    eyebrowEn: "Level 01 • A playful first start",
    descriptionAr: "Level عملي للأطفال في بداية رحلتهم مع البرمجة. نستخدم القصص والحركة والشخصيات ليتحول فضول الطفل إلى أول مشروع يعمل بيده.",
    descriptionEn: "A hands-on first level for young learners. Stories, motion, and characters turn curiosity into a first project they can build and explain.",
    toolAr: "ScratchJr",
    toolEn: "ScratchJr",
    projectAr: "قصة تفاعلية أو لعبة قصيرة من تصميم الطفل",
    projectEn: "An interactive story or a short game designed by the learner",
    outcomeAr: "يفكر بالخطوات ويشرح كيف تتحرك الفكرة من قصة إلى مشروع",
    outcomeEn: "Think in steps and explain how an idea turns from a story into a project",
    heroNoteAr: "لا يحتاج الطفل إلى خبرة أو قراءة كود طويلة؛ نبدأ بالسحب والإفلات والتجربة.",
    heroNoteEn: "No previous experience or long code reading is needed; learners begin with drag, drop, and discovery.",
    skillsAr: ["التسلسل والمنطق", "الحركة والشخصيات", "الأحداث والتفاعل", "شرح الفكرة بثقة"],
    skillsEn: ["Sequencing and logic", "Motion and characters", "Events and interaction", "Explaining ideas with confidence"],
    parentAr: ["ملخص واضح لما جربه الطفل بعد الجلسة", "مشروع صغير يتطور أسبوعًا بعد أسبوع", "مراجعة مناسبة قبل اقتراح Level التالي"],
    parentEn: ["A clear note on what the learner tried after each session", "A small project that grows week by week", "A suitability review before the next level is suggested"],
    monthsAr: [
      { label: "الشهر الأول", title: "أتعرف وأحرك", text: "نبني أول مشاهد للقصة ونتعرف على الحركة والترتيب." },
      { label: "الشهر الثاني", title: "أجرب وأربط", text: "نضيف أحداثًا وصوتًا وخيارات بسيطة تجعل المشروع يتفاعل." },
      { label: "الشهر الثالث", title: "أصنع وأشارك", text: "نطور القصة أو اللعبة ونجهز الطفل لعرضها وشرح فكرته." },
    ],
    monthsEn: [
      { label: "Month 1", title: "Meet and move", text: "Build the first scenes and explore movement and order." },
      { label: "Month 2", title: "Try and connect", text: "Add events, sound, and simple choices that make the project respond." },
      { label: "Month 3", title: "Create and share", text: "Develop the story or game and prepare the learner to show and explain it." },
    ],
    faqsAr: [
      { q: "هل يحتاج طفلي إلى خبرة سابقة؟", a: "لا. هذا الـ Level مصمم كبداية عملية، ونبدأ من الأدوات البصرية والتجربة خطوة بخطوة." },
      { q: "ما الجهاز المناسب؟", a: "يفضل Tablet أو جهاز كمبيوتر مناسب للأداة، مع إنترنت مستقر وكاميرا وميكروفون للجلسة المباشرة." },
      { q: "ما الذي سيعرضه الطفل في النهاية؟", a: "قصة تفاعلية أو لعبة قصيرة يستطيع الطفل تشغيلها وشرح فكرته فيها." },
    ],
    faqsEn: [
      { q: "Does my child need experience?", a: "No. This level is designed as a practical first step with visual tools and guided discovery." },
      { q: "Which device is suitable?", a: "A tablet or computer suitable for the tool, stable internet, camera, and microphone for live sessions." },
      { q: "What will my child show at the end?", a: "An interactive story or a short game the learner can run and explain." },
    ],
  },
  {
    slug: "digital-storytellers-8-10",
    order: 2,
    statusAr: "قائمة انتظار",
    statusEn: "Join the waitlist",
    available: false,
    ageAr: "8–10 سنوات",
    ageEn: "Ages 8–10",
    titleAr: "Digital Storytellers",
    titleEn: "Digital Storytellers",
    eyebrowAr: "Level 02 • قصص تتحرك وتتفاعل",
    eyebrowEn: "Level 02 • Stories that move and respond",
    descriptionAr: "Level للأطفال الذين يحبون الشخصيات والخيال وصنع شيء يمكن مشاركته. ننتقل من مشهد واحد إلى Animation أو Mini Game له بداية وتحدٍ ونهاية.",
    descriptionEn: "A level for learners who love characters, imagination, and shareable creations. One scene grows into an animation or mini game with a beginning, challenge, and ending.",
    toolAr: "Blocks & Story Design",
    toolEn: "Blocks & Story Design",
    projectAr: "Animation أو Mini Game من فكرة الطفل",
    projectEn: "An animation or mini game from the learner’s own idea",
    outcomeAr: "يصمم المشاهد ويربط الأحداث بتجربة يفهمها اللاعب أو المشاهد",
    outcomeEn: "Design scenes and connect events into an experience a player or viewer can understand",
    heroNoteAr: "نبدأ بفكرة يحبها الطفل، ثم نتعلم كيف نرتب المشاهد والتحديات بدل القفز مباشرة إلى كود معقد.",
    heroNoteEn: "We start with an idea the learner cares about, then organise scenes and challenges before moving toward more complex code.",
    skillsAr: ["تصميم مشهد", "الأحداث والتوقيت", "الشخصيات والحوار", "تجربة المستخدم البسيطة"],
    skillsEn: ["Scene design", "Events and timing", "Characters and dialogue", "Simple user experience"],
    parentAr: ["خريطة مختصرة لفكرة المشروع", "رؤية كيف يتطور من مشهد إلى تجربة", "تأكيد الاستعداد للـ Level الذي يليه"],
    parentEn: ["A concise map of the project idea", "Visibility into how scenes become an experience", "Confirmation of readiness for the next level"],
    monthsAr: [
      { label: "الشهر الأول", title: "فكرة وشخصيات", text: "نحول فكرة الطفل إلى بداية واضحة وشخصيات ومشاهد." },
      { label: "الشهر الثاني", title: "تفاعل وتحديات", text: "نضيف أحداثًا وتوقيتًا وخيارات أو نقاطًا بسيطة." },
      { label: "الشهر الثالث", title: "قصة تُعرض", text: "نختبر التجربة ونصقل التفاصيل ونقدم المشروع." },
    ],
    monthsEn: [
      { label: "Month 1", title: "Idea and characters", text: "Turn the learner’s idea into a clear beginning, characters, and scenes." },
      { label: "Month 2", title: "Interaction and challenge", text: "Add events, timing, and simple choices or points." },
      { label: "Month 3", title: "A story to show", text: "Test the experience, refine details, and present the project." },
    ],
    faqsAr: [
      { q: "هل هذا Level مناسب بعد ScratchJr؟", a: "غالبًا نعم إذا كان الطفل مستعدًا لمشاهد أكثر وتفاعل أوسع. نؤكد ذلك باختبار قصير." },
      { q: "هل كل الأطفال يصنعون نفس المشروع؟", a: "لا. يوجد هيكل تعليمي مشترك، لكن الفكرة والشخصيات والتفاصيل تنطلق من خيال كل طفل." },
      { q: "هل المستوى متاح الآن؟", a: "يمكن التسجيل في قائمة الانتظار، وسنتواصل عند فتح المجموعة المناسبة." },
    ],
    faqsEn: [
      { q: "Is this level suitable after ScratchJr?", a: "Usually yes when the learner is ready for richer scenes and interaction. We confirm this with a short check." },
      { q: "Do all learners make the same project?", a: "No. The learning structure is shared, but each learner develops their own idea, characters, and details." },
      { q: "Is this level open now?", a: "You can join the waitlist, and we will contact you when a suitable group opens." },
    ],
  },
  {
    slug: "scratch-game-maker-10-13",
    order: 3,
    statusAr: "قائمة انتظار",
    statusEn: "Join the waitlist",
    available: false,
    ageAr: "10–13 سنة",
    ageEn: "Ages 10–13",
    titleAr: "صانع ألعاب Scratch",
    titleEn: "Scratch Game Maker",
    eyebrowAr: "Level 03 • من الفكرة إلى لعبة حقيقية",
    eyebrowEn: "Level 03 • From an idea to a real game",
    descriptionAr: "Level يبني عقلية صانع الألعاب: نخطط للتحدي، نبرمج الحركة والنقاط، ونتعلم أن الاختبار وإصلاح الأخطاء جزء من صناعة لعبة ممتعة.",
    descriptionEn: "A level that builds a game-maker mindset: plan a challenge, program movement and scores, and learn that testing and debugging are part of making a fun game.",
    toolAr: "Scratch Game Design",
    toolEn: "Scratch Game Design",
    projectAr: "لعبة كاملة بشخصيات ونقاط وتحديات",
    projectEn: "A complete game with characters, scores, and challenges",
    outcomeAr: "يستخدم الأحداث والشروط والتكرار ويصلح الأخطاء بطريقة منظمة",
    outcomeEn: "Use events, conditions, and loops while debugging in an organised way",
    heroNoteAr: "هذا ليس مجرد لعب بـ Scratch؛ الطفل يبني نظام لعبة، يختبره، ثم يشرح قراراته البرمجية.",
    heroNoteEn: "This is more than playing with Scratch; learners build a game system, test it, and explain their coding decisions.",
    skillsAr: ["Loops والتكرار", "الشروط والقرارات", "النقاط والمراحل", "Debugging والتجربة"],
    skillsEn: ["Loops and repetition", "Conditions and choices", "Scores and stages", "Debugging and testing"],
    parentAr: ["مراحل واضحة من فكرة اللعبة إلى النسخة النهائية", "مشروع قابل للعب والمشاركة", "ملخص مهارات يفيد في اختيار Python لاحقًا"],
    parentEn: ["Clear stages from a game idea to a final version", "A playable and shareable project", "A skills summary that supports a later Python decision"],
    monthsAr: [
      { label: "الشهر الأول", title: "أصمم التحدي", text: "نحدد الهدف والشخصيات وحركة اللاعب وقواعد اللعبة." },
      { label: "الشهر الثاني", title: "أبرمج اللعب", text: "نضيف الشروط والنقاط والمراحل والتغذية الراجعة." },
      { label: "الشهر الثالث", title: "أختبر وأطلق", text: "نصلح الأخطاء ونوازن التحدي ونقدم اللعبة." },
    ],
    monthsEn: [
      { label: "Month 1", title: "Design the challenge", text: "Define goals, characters, player movement, and game rules." },
      { label: "Month 2", title: "Program play", text: "Add conditions, scores, stages, and feedback." },
      { label: "Month 3", title: "Test and launch", text: "Debug, balance the challenge, and present the game." },
    ],
    faqsAr: [
      { q: "هل يحتاج الطفل إلى إنهاء Level سابق؟", a: "ليس بالضرورة. ننظر إلى خبرته الحالية وقدرته على فهم الأحداث والتجربة قبل ترشيح هذا Level." },
      { q: "هل يتعلم الطفل Debugging فعلًا؟", a: "نعم. كل مشروع يتضمن اختبارًا وأخطاء متوقعة، ونتعلم كيف نقرأ المشكلة ونصلحها بهدوء." },
      { q: "ما المشروع النهائي؟", a: "لعبة بشخصيات ونقاط وتحديات يمكن تشغيلها وشرح منطقها." },
    ],
    faqsEn: [
      { q: "Must the learner complete a previous level?", a: "Not necessarily. We look at current experience and readiness for events and testing before recommending this level." },
      { q: "Does the learner really learn debugging?", a: "Yes. Every project includes testing and expected errors, so learners practise reading a problem and fixing it calmly." },
      { q: "What is the final project?", a: "A game with characters, scores, and challenges that can be played and explained." },
    ],
  },
  {
    slug: "python-project-builder-14-18",
    order: 4,
    statusAr: "قائمة انتظار",
    statusEn: "Join the waitlist",
    available: false,
    ageAr: "14–18+ سنة",
    ageEn: "Ages 14–18+",
    titleAr: "باني مشاريع Python",
    titleEn: "Python Project Builder",
    eyebrowAr: "Level 04 • كود حقيقي ومشاريع قابلة للتطوير",
    eyebrowEn: "Level 04 • Real code and expandable projects",
    descriptionAr: "Level للمراهقين الذين يريدون الانتقال من الفكرة إلى كود واضح ومنظم. نكتب Python عمليًا، نختبره، ونبني مشروعًا يمكن شرحه وتطويره بعد انتهاء المستوى.",
    descriptionEn: "A level for teens ready to move from ideas to clear, organised code. Learners write practical Python, test it, and build a project they can explain and expand after the level.",
    toolAr: "Python",
    toolEn: "Python",
    projectAr: "Quiz أو لعبة نصية أو أداة صغيرة تحل مشكلة",
    projectEn: "A quiz, text game, or small tool that solves a problem",
    outcomeAr: "ينظم الكود ويستخدم الدوال والشروط والتكرار ويشرح قراراته التقنية",
    outcomeEn: "Organise code, use functions, conditions, and loops, and explain technical decisions",
    heroNoteAr: "نبدأ من مستوى الطالب الحقيقي؛ لا نفترض أن الجميع جاهز لنفس السرعة أو نفس نوع المشروع.",
    heroNoteEn: "We start from the learner’s real level; we do not assume everyone is ready for the same pace or the same project type.",
    skillsAr: ["Python syntax", "الدوال والمنطق", "البيانات البسيطة", "اختبار الكود وDebugging"],
    skillsEn: ["Python syntax", "Functions and logic", "Simple data handling", "Testing and debugging"],
    parentAr: ["وضوح في نقطة البداية والهدف", "مشروع مناسب للـ Portfolio الأول", "توصية بالخطوة التالية: Python متقدم أو Web أو AI"],
    parentEn: ["Clarity on starting point and goal", "A project suitable for a first portfolio", "A next-step recommendation: advanced Python, web, or AI"],
    monthsAr: [
      { label: "الشهر الأول", title: "أقرأ وأكتب كودًا", text: "نتعرف على المتغيرات والشروط والتكرار من خلال مسائل صغيرة." },
      { label: "الشهر الثاني", title: "أبني منطق المشروع", text: "نستخدم الدوال ونجرب تقسيم المشكلة إلى أجزاء قابلة للاختبار." },
      { label: "الشهر الثالث", title: "أنهي وأشرح", text: "نكمل المشروع وننظف الكود ونشرح ما الذي يعمل ولماذا." },
    ],
    monthsEn: [
      { label: "Month 1", title: "Read and write code", text: "Explore variables, conditions, and loops through small problems." },
      { label: "Month 2", title: "Build project logic", text: "Use functions and break a problem into testable pieces." },
      { label: "Month 3", title: "Finish and explain", text: "Complete the project, clean the code, and explain what works and why." },
    ],
    faqsAr: [
      { q: "هل يجب أن يكون الطالب متقنًا لـ Scratch؟", a: "ليس شرطًا. نحدد نقطة البداية من خلال اختبار قصير وخبرة الطالب الحالية." },
      { q: "هل يحتاج إلى جهاز قوي؟", a: "يكفي Laptop أو Computer مناسب واتصال إنترنت مستقر للجلسات والعمل على المشاريع." },
      { q: "إلى أين يمكن أن ينتقل بعد هذا الـ Level؟", a: "بحسب مشروعه واهتمامه، قد يكون المسار التالي Python متقدم أو تطوير Web أو تطبيقات AI." },
    ],
    faqsEn: [
      { q: "Must the learner master Scratch first?", a: "No. We identify the starting point through a short check and the learner’s current experience." },
      { q: "Do they need a powerful device?", a: "A suitable laptop or computer and stable internet are enough for live sessions and project work." },
      { q: "What can come after this level?", a: "Depending on the project and interest, the next step could be advanced Python, web development, or AI applications." },
    ],
  },
];

export function getCourseLevel(slug: string) {
  return COURSE_LEVELS.find((course) => course.slug === slug);
}
