export type ToolRow = {
  areaAr: string;
  areaEn: string;
  toolAr: string;
  toolEn: string;
  practiceAr: string;
  practiceEn: string;
  outcomeAr: string;
  outcomeEn: string;
};

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
  toolRows: ToolRow[];
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
    toolRows: [
      { areaAr: "القصص والمشاهد", areaEn: "Stories and scenes", toolAr: "ScratchJr على Tablet أو جهاز مناسب", toolEn: "ScratchJr on a tablet or suitable device", practiceAr: "اختيار الشخصيات والخلفية وترتيب مشهدين أو أكثر", practiceEn: "Choose characters and backdrops, then sequence two or more scenes", outcomeAr: "خريطة قصة بسيطة قابلة للتنفيذ", outcomeEn: "A simple story map ready to build" },
      { areaAr: "الأوامر البصرية", areaEn: "Visual commands", toolAr: "Blocks السحب والإفلات", toolEn: "Drag-and-drop blocks", practiceAr: "ترتيب أوامر الحركة والاتجاه والتكرار", practiceEn: "Sequence movement, direction, and repetition blocks", outcomeAr: "شخصية تتحرك وفق خطوات منطقية", outcomeEn: "A character that moves through logical steps" },
      { areaAr: "التفاعل والصوت", areaEn: "Interaction and sound", toolAr: "أحداث ScratchJr والصوت المسجل", toolEn: "ScratchJr events and recorded sound", practiceAr: "ربط الضغط أو بداية المشهد بحركة وصوت أو حوار", practiceEn: "Connect a tap or scene start to movement, sound, or dialogue", outcomeAr: "مشهد يستجيب لتفاعل الطفل أو المشاهد", outcomeEn: "A scene that responds to learner or viewer interaction" },
      { areaAr: "عرض الفكرة", areaEn: "Presenting an idea", toolAr: "ورقة تخطيط مبسطة أو Story Cards", toolEn: "Simple planning sheet or story cards", practiceAr: "رسم البداية والحدث والنهاية ثم شرح ما صنعه", practiceEn: "Sketch the beginning, event, and ending, then explain the creation", outcomeAr: "عرض قصير وواثق للمشروع", outcomeEn: "A short, confident project presentation" },
    ],
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
      { q: "هل يحتاج طفلي إلى خبرة سابقة أو أن يعرف القراءة جيدًا؟", a: "لا. هذا الـ Level مصمم كبداية بصرية وعملية. نبدأ بالسحب والإفلات والقصص والحركة، ثم نراعي عمر الطفل وخبرته في أول محادثة قبل تأكيد المجموعة." },
      { q: "كيف أتأكد أن هذا هو الـ Level المناسب وليس أصعب من اللازم؟", a: "أرسلي عمر الطفل وما يحبه وخبرته إن وجدت عبر WhatsApp. نراجع نقطة البداية باختبار قصير أو محادثة، ثم نؤكد المستوى المناسب قبل التسجيل." },
      { q: "ما الجهاز المطلوب للجلسات؟", a: "يفضل Tablet أو جهاز كمبيوتر مناسب للأداة، مع إنترنت مستقر وكاميرا وميكروفون للجلسة المباشرة. قبل تأكيد المقعد نوضح معك الجهاز الأنسب." },
      { q: "ماذا يصنع الطفل في النهاية؟", a: "ينهي الطفل قصة تفاعلية أو لعبة قصيرة تعمل، ثم يعرضها ويشرح كيف رتّب الفكرة والحركة والتفاعل. هذا هو ناتج الـ Level، وليس مجرد حضور جلسات." },
      { q: "متى تبدأ المجموعة وما تكلفة الـ Level؟", a: "لأن الموعد والعملة والمجموعة المناسبة تختلف حسب الدولة وعدد المقاعد المتاحة، أرسلي العمر والدولة والوقت المناسب وسنرسل لكِ التفاصيل المتاحة وخطوة الحجز بوضوح." },
    ],
    faqsEn: [
      { q: "Does my child need experience or strong reading skills?", a: "No. This level is a visual, practical first step. We begin with drag-and-drop stories and movement, then consider age and experience before confirming a group." },
      { q: "How do I know this is the right level and not too difficult?", a: "Send your learner’s age, interests, and any prior experience on WhatsApp. A short check or conversation confirms the right starting level before enrolment." },
      { q: "Which device is suitable?", a: "A tablet or computer suitable for the tool, stable internet, camera, and microphone are preferred for live sessions. We confirm the practical setup before the seat is confirmed." },
      { q: "What will my child create at the end?", a: "A working interactive story or short game that the learner can present and explain. The result is a tangible project—not only session attendance." },
      { q: "When does the group start and what is the level fee?", a: "Group timing, currency, and available seats depend on country and the suitable cohort. Send the learner’s age, country, and preferred time and we will share the available details clearly." },
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
    toolAr: "Scratch + Story Design",
    toolEn: "Scratch + Story Design",
    projectAr: "Animation أو Mini Game من فكرة الطفل",
    projectEn: "An animation or mini game from the learner’s own idea",
    outcomeAr: "يصمم المشاهد ويربط الأحداث بتجربة يفهمها اللاعب أو المشاهد",
    outcomeEn: "Design scenes and connect events into an experience a player or viewer can understand",
    heroNoteAr: "نبدأ بفكرة يحبها الطفل، ثم نتعلم كيف نرتب المشاهد والتحديات بدل القفز مباشرة إلى كود معقد.",
    heroNoteEn: "We start with an idea the learner cares about, then organise scenes and challenges before moving toward more complex code.",
    skillsAr: ["تصميم مشهد", "الأحداث والتوقيت", "الشخصيات والحوار", "تجربة المستخدم البسيطة"],
    skillsEn: ["Scene design", "Events and timing", "Characters and dialogue", "Simple user experience"],
    toolRows: [
      { areaAr: "تخطيط القصة", areaEn: "Story planning", toolAr: "Storyboard وIdea Cards", toolEn: "Storyboard and idea cards", practiceAr: "تحويل الفكرة إلى بداية وتحدٍ ونهاية وشخصيات", practiceEn: "Turn an idea into a beginning, challenge, ending, and characters", outcomeAr: "خريطة تجربة قبل بدء البرمجة", outcomeEn: "An experience map before coding begins" },
      { areaAr: "البرمجة بالبلوكات", areaEn: "Block coding", toolAr: "Scratch Editor", toolEn: "Scratch Editor", practiceAr: "بناء المشاهد وربط الأحداث وحركة الشخصيات", practiceEn: "Build scenes and connect events with character movement", outcomeAr: "Animation أو لعبة صغيرة ذات تدفق واضح", outcomeEn: "An animation or mini game with a clear flow" },
      { areaAr: "الحوار والتوقيت", areaEn: "Dialogue and timing", toolAr: "Looks, Sound, Events", toolEn: "Looks, Sound, Events", practiceAr: "ضبط الحوار والصوت والتوقيت بحيث يفهم المستخدم ما يحدث", practiceEn: "Coordinate dialogue, sound, and timing so users understand what is happening", outcomeAr: "مشاهد أكثر حيوية وترابطًا", outcomeEn: "More lively, connected scenes" },
      { areaAr: "اختبار التجربة", areaEn: "Experience testing", toolAr: "قائمة اختبار مبسطة", toolEn: "Simple test checklist", practiceAr: "تجربة المشروع مع زميل وملاحظة ما يحتاج إلى توضيح", practiceEn: "Try the project with a peer and note what needs clarification", outcomeAr: "تحسين واحد واضح قبل العرض", outcomeEn: "One clear improvement before presenting" },
    ],
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
      { q: "هل هذا الـ Level مناسب بعد ScratchJr؟", a: "غالبًا نعم إذا كان الطفل مستعدًا لمشاهد أكثر وتفاعل أوسع. نؤكد ذلك برسالة قصيرة عن عمره وخبرته أو باختبار مستوى بسيط قبل الحجز." },
      { q: "هل كل الأطفال يصنعون نفس المشروع؟", a: "لا. يوجد هيكل تعليمي مشترك، لكن الفكرة والشخصيات والتفاصيل تنطلق من خيال كل طفل. لذلك تكون النتيجة شخصية ويمكن للطفل شرحها بثقة." },
      { q: "ماذا يحدث بعد الانضمام إلى قائمة الانتظار؟", a: "نراجع العمر والوقت والدولة، ثم نتواصل عند فتح مجموعة متقاربة في المستوى. لا يتطلب الانضمام للقائمة التزامًا بالدفع قبل أن نشاركك التفاصيل." },
      { q: "كيف أعرف أن طفلي يتقدم فعلًا؟", a: "سترين انتقال الفكرة من Storyboard إلى مشاهد وتفاعل ثم مشروع قابل للتجربة. كما نوضح هدف الـ Level ومشروع نهايته قبل البداية." },
      { q: "ما الذي أرسله الآن لأعرف الموعد والتكلفة؟", a: "أرسلي عمر الطفل والدولة والمدينة والوقت المناسب للجلسات. سنرد بالمجموعة المتاحة وخطوة الحجز المناسبة بدل إرسال معلومات عامة لا تناسب حالتك." },
    ],
    faqsEn: [
      { q: "Is this level suitable after ScratchJr?", a: "Usually yes when the learner is ready for richer scenes and interaction. A short message about age and experience, or a quick level check, confirms it before booking." },
      { q: "Do all learners make the same project?", a: "No. The learning structure is shared, but each learner develops their own idea, characters, and details, resulting in a project they can explain confidently." },
      { q: "What happens after joining the waitlist?", a: "We review age, location, and timing, then contact you when a suitable group opens. Joining the list does not require payment before you receive the relevant details." },
      { q: "How will I know my child is progressing?", a: "You will see the idea move from storyboard to scenes and interaction, then to a project people can try. The level outcome and final project are clear before starting." },
      { q: "What should I send to ask about timing and fees?", a: "Send the learner’s age, country or city, and preferred session time. We will reply with the available group and the relevant booking step rather than generic information." },
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
    toolRows: [
      { areaAr: "تصميم اللعبة", areaEn: "Game design", toolAr: "Game Design Canvas", toolEn: "Game design canvas", practiceAr: "تحديد الهدف واللاعب والعقبات وقواعد الفوز أو الخسارة", practiceEn: "Define the goal, player, obstacles, and win-or-lose rules", outcomeAr: "خطة لعبة يمكن اختبارها", outcomeEn: "A game plan ready to test" },
      { areaAr: "منطق اللعبة", areaEn: "Game logic", toolAr: "Scratch Editor", toolEn: "Scratch Editor", practiceAr: "بناء الحركة والأحداث والشروط والتكرار", practiceEn: "Build movement, events, conditions, and repetition", outcomeAr: "لعبة تستجيب لقرارات اللاعب", outcomeEn: "A game that responds to player choices" },
      { areaAr: "النقاط والمراحل", areaEn: "Scores and stages", toolAr: "Variables وBroadcasts", toolEn: "Variables and broadcasts", practiceAr: "إضافة نقاط أو عداد ومراحل وتغذية راجعة", practiceEn: "Add points or counters, levels, and feedback", outcomeAr: "تقدم واضح داخل اللعبة", outcomeEn: "Clear in-game progression" },
      { areaAr: "الاختبار والإصلاح", areaEn: "Testing and debugging", toolAr: "Bug Log وقائمة اختبار", toolEn: "Bug log and test checklist", practiceAr: "تسجيل الخطأ وإعادة إنتاجه وتجربة إصلاح واحد في كل مرة", practiceEn: "Record an issue, reproduce it, and test one fix at a time", outcomeAr: "نسخة أكثر توازنًا واستقرارًا", outcomeEn: "A more balanced, stable version" },
    ],
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
      { q: "هل يحتاج الطفل إلى إنهاء Level سابق؟", a: "ليس بالضرورة. ننظر إلى خبرته الحالية وقدرته على فهم الأحداث والتجربة قبل ترشيح هذا الـ Level. أرسلي ما سبق له تجربته وسنقترح البداية الصحيحة." },
      { q: "هل يتعلم الطفل Debugging فعلًا أم فقط يصنع لعبة؟", a: "نعم. كل مشروع يتضمن اختبارًا وأخطاء متوقعة، ونتعلم كيف نلاحظ المشكلة ونكررها ونختبر إصلاحًا بطريقة هادئة ومنظمة." },
      { q: "هل اللعبة النهائية يمكن مشاركتها؟", a: "نعم. ينتهي الطفل بلعبة قابلة للعب والعرض، مع شخصيات ونقاط وتحديات، ويستطيع شرح قواعدها وقراراته البرمجية." },
      { q: "كيف تضمنون أن الطفل لا يضيع وسط مجموعة متقدمة؟", a: "نرتب المجموعة حسب العمر والخبرة قدر الإمكان، ونؤكد مستوى البداية قبل التسجيل. لا نضع جميع الأطفال في نفس نقطة الانطلاق لمجرد أن العمر متقارب." },
      { q: "كيف أحصل على تفاصيل المقعد والتكلفة؟", a: "أرسلي العمر والدولة والوقت الأنسب، وسنوضح المجموعة المتاحة وطريقة التسجيل والدفع قبل أي التزام." },
    ],
    faqsEn: [
      { q: "Must the learner complete a previous level?", a: "Not necessarily. We look at current experience and readiness for events and testing before recommending this level. Send what they have tried and we will suggest the right start." },
      { q: "Does the learner really learn debugging, or only make a game?", a: "Yes. Every project includes testing and expected errors, so learners practise spotting a problem, reproducing it, and testing a calm, structured fix." },
      { q: "Can the final game be shared?", a: "Yes. Learners finish with a playable, presentable game with characters, scores, and challenges, and can explain its rules and coding choices." },
      { q: "How do you avoid placing a learner in a group that is too advanced?", a: "We group by age and experience where possible and confirm the starting level before enrolment. Learners do not start at the same point simply because their ages are close." },
      { q: "How can I ask about seats and fees?", a: "Send the learner’s age, country, and preferred time. We will clarify the available group, enrolment process, and payment approach before any commitment." },
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
    toolAr: "Python 3 + محرر كود مناسب للمبتدئين",
    toolEn: "Python 3 + a beginner-friendly code editor",
    projectAr: "Quiz أو لعبة نصية أو أداة صغيرة تحل مشكلة",
    projectEn: "A quiz, text game, or small tool that solves a problem",
    outcomeAr: "ينظم الكود ويستخدم الدوال والشروط والتكرار ويشرح قراراته التقنية",
    outcomeEn: "Organise code, use functions, conditions, and loops, and explain technical decisions",
    heroNoteAr: "نبدأ من مستوى الطالب الحقيقي؛ لا نفترض أن الجميع جاهز لنفس السرعة أو نفس نوع المشروع.",
    heroNoteEn: "We start from the learner’s real level; we do not assume everyone is ready for the same pace or the same project type.",
    skillsAr: ["Python syntax", "الدوال والمنطق", "البيانات البسيطة", "اختبار الكود وDebugging"],
    skillsEn: ["Python syntax", "Functions and logic", "Simple data handling", "Testing and debugging"],
    toolRows: [
      { areaAr: "بيئة كتابة الكود", areaEn: "Coding environment", toolAr: "Python 3 ومحرر مناسب للمبتدئين", toolEn: "Python 3 and a beginner-friendly editor", practiceAr: "كتابة وتشغيل ملفات Python وقراءة المخرجات", practiceEn: "Write and run Python files, then read the output", outcomeAr: "برنامج صغير يعمل من أول جلسات المستوى", outcomeEn: "A small working program from the first sessions" },
      { areaAr: "منطق البرنامج", areaEn: "Program logic", toolAr: "Variables, input/output, conditions, loops", toolEn: "Variables, input/output, conditions, loops", practiceAr: "تحويل سؤال أو مشكلة إلى خطوات وحالات متعددة", practiceEn: "Turn a question or problem into steps and different cases", outcomeAr: "برنامج يختار استجابة مناسبة بدل طباعة نص ثابت", outcomeEn: "A program that makes an appropriate choice instead of printing fixed text" },
      { areaAr: "تنظيم الكود", areaEn: "Code organisation", toolAr: "Functions وملفات مشروع مرتبة", toolEn: "Functions and organised project files", practiceAr: "تقسيم المشروع إلى أجزاء صغيرة قابلة للاختبار", practiceEn: "Split a project into smaller testable parts", outcomeAr: "كود أوضح وأسهل للتعديل", outcomeEn: "Clearer code that is easier to improve" },
      { areaAr: "اختبار وتوثيق", areaEn: "Testing and documentation", toolAr: "Test cases وREADME مبسط", toolEn: "Test cases and a simple README", practiceAr: "تجربة حالات صحيحة وخاطئة ثم شرح طريقة التشغيل", practiceEn: "Try valid and invalid cases, then explain how to run the project", outcomeAr: "مشروع أول قابل للعرض ضمن Portfolio مبتدئ", outcomeEn: "A first project suitable for a beginner portfolio" },
    ],
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
      { q: "هل يجب أن يكون الطالب متقنًا لـ Scratch قبل Python؟", a: "ليس شرطًا. نحدد نقطة البداية من خلال اختبار قصير وخبرة الطالب الحالية. الأهم أن يكون مستعدًا لتجربة كود نصي وحل مشكلات خطوة بخطوة." },
      { q: "هل يحتاج إلى جهاز قوي أو تثبيت برامج معقدة؟", a: "يكفي Laptop أو Computer مناسب واتصال إنترنت مستقر. نحدد مع الطالب بيئة كود مناسبة للمبتدئين قبل البداية، ولا نطلب إعدادات معقدة دون دعم." },
      { q: "ما الذي يضيفه هذا الـ Level إلى Portfolio الطالب؟", a: "ينتهي الطالب بمشروع يعمل مثل Quiz أو لعبة نصية أو أداة صغيرة، مع كود منظم وشرح مبسط لطريقة تشغيله وما المشكلة التي يحلها." },
      { q: "كيف تساعدونه إذا اختلفت خبرة الطلاب داخل المجموعة؟", a: "نبدأ بتأكيد المستوى، ثم نعطي تحديات توسعية للطالب الأسرع ودعمًا منظمًا للطالب الذي يحتاج مزيدًا من التدريب. الهدف هو مشروع مفهوم، لا سباق في إنهاء الدروس." },
      { q: "كيف أسأل عن الموعد والرسوم قبل التسجيل؟", a: "أرسلي العمر والخبرة الحالية والدولة والوقت المناسب. سنوضح المجموعة المتاحة وطريقة الدفع والتسجيل قبل أن تقرري الحجز." },
    ],
    faqsEn: [
      { q: "Must the learner master Scratch before Python?", a: "No. We identify the right starting point through a short check and current experience. What matters is readiness to try text-based code and solve problems step by step." },
      { q: "Do they need a powerful computer or complicated setup?", a: "A suitable laptop or computer and stable internet are enough. We confirm a beginner-friendly coding environment before the level starts and do not require complex setup without support." },
      { q: "What does this level add to the learner’s portfolio?", a: "Learners finish with a working project such as a quiz, text game, or small tool, plus organised code and a simple explanation of how it runs and what it solves." },
      { q: "How do you support different experience levels in one group?", a: "We confirm the starting level, then offer extension challenges to faster learners and structured support to learners who need more practice. The goal is an understood project—not a race through lessons." },
      { q: "How can I ask about timing and fees before enrolment?", a: "Send the learner’s age, current experience, country, and preferred time. We will explain the available group, payment approach, and registration step before you decide to book." },
    ],
  },
];

export function getCourseLevel(slug: string) {
  return COURSE_LEVELS.find((course) => course.slug === slug);
}
