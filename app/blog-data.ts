export type BlogSection = {
  headingAr: string;
  headingEn: string;
  paragraphsAr: string[];
  paragraphsEn: string[];
  pointsAr?: string[];
  pointsEn?: string[];
};

export type BlogPost = {
  slug: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  categoryAr: string;
  categoryEn: string;
  publishedAt: string;
  updatedAt: string;
  readTimeAr: string;
  readTimeEn: string;
  keywordsAr: string[];
  keywordsEn: string[];
  relatedCourseSlug: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "right-age-to-start-coding",
    titleAr: "ما هو العمر المناسب لتعليم البرمجة للأطفال؟ دليل من 6 إلى 18+",
    titleEn: "What Is the Right Age to Start Coding? A Parent Guide from 6 to 18+",
    excerptAr: "لا توجد بداية واحدة تناسب كل طفل. هذا الدليل يشرح كيف نختار الأداة والمشروع حسب العمر والاهتمام والخبرة السابقة.",
    excerptEn: "There is no single starting point for every learner. This guide explains how to choose a tool and project around age, interests, and experience.",
    categoryAr: "دليل ولي الأمر",
    categoryEn: "Parent guide",
    publishedAt: "2026-08-14",
    updatedAt: "2026-08-14",
    readTimeAr: "5 دقائق",
    readTimeEn: "5 min read",
    keywordsAr: ["تعليم البرمجة للأطفال", "السن المناسب لتعلم البرمجة للأطفال", "كورس برمجة للأطفال"],
    keywordsEn: ["coding classes for kids", "right age to start coding", "online coding for children"],
    relatedCourseSlug: "scratchjr-6-8",
    sections: [
      {
        headingAr: "ابدئي بالجاهزية لا برقم العمر فقط",
        headingEn: "Start with readiness, not age alone",
        paragraphsAr: [
          "العمر يساعدنا على اختيار نقطة بداية تقريبية، لكنه لا يحدد وحده ما يستطيع الطفل صنعه. الأهم أن نعرف هل يحب القصص أو الألعاب أو حل الألغاز، وهل يستطيع اتباع خطوات قصيرة وتجربة النتيجة مرة أخرى.",
          "في Kids Coding Hub نستخدم محادثة قصيرة أو اختبار مسار قبل التسجيل. بهذه الطريقة لا يبدأ الطفل بأداة أصعب من اللازم، ولا يشعر الطفل الأكبر أن المحتوى طفولي بالنسبة إليه.",
        ],
        paragraphsEn: [
          "Age gives us a useful starting range, but it does not decide what a learner can create. We also look at whether they enjoy stories, games, or puzzles and whether they can follow short steps and try again.",
          "At Kids Coding Hub, a short conversation or path finder comes before enrolment. This keeps a younger learner from starting with an overwhelming tool and keeps an older learner from receiving content that feels too simple.",
        ],
      },
      {
        headingAr: "خريطة عملية حسب المرحلة",
        headingEn: "A practical map by stage",
        paragraphsAr: [
          "من 6 إلى 8 سنوات، تكون البداية البصرية مثل ScratchJr مناسبة غالبًا؛ يصنع الطفل قصة أو لعبة قصيرة باستخدام المشاهد والحركة والتسلسل. من 8 إلى 10 سنوات، يمكن توسيع الفكرة إلى Animation أو Mini Game وربط الأحداث بتفاعل واضح.",
          "من 10 إلى 13 سنة، يبدأ Scratch في إظهار منطق الألعاب: الأحداث والشروط والتكرار والنقاط وتصحيح الأخطاء. ومن 14 إلى 18+ سنة، يستطيع المتعلم الانتقال تدريجيًا إلى Python وكتابة برنامج صغير يمكنه شرحه وتطويره.",
        ],
        paragraphsEn: [
          "From ages 6–8, a visual tool such as ScratchJr is often a gentle fit: the learner builds a short story or game with scenes, movement, and sequencing. From 8–10, the idea can grow into an animation or mini game with clear interactions.",
          "From 10–13, Scratch can make game logic visible through events, conditions, loops, scores, and debugging. From 14–18+, learners can move toward Python and write a small program they can explain and improve.",
        ],
        pointsAr: ["قصة أو لعبة قصيرة بدل شرح طويل", "أداة تتناسب مع قدرة الطفل على التركيز", "مشروع نهائي يمكن عرضه وشرحه"],
        pointsEn: ["A short story or game instead of a long lecture", "A tool that fits the learner’s attention and independence", "A final project they can show and explain"],
      },
      {
        headingAr: "السؤال الأهم: ماذا سيصنع الطفل؟",
        headingEn: "The most useful question: what will they make?",
        paragraphsAr: [
          "بدل سؤال: ما اللغة الأشهر؟ اسألي: ما المشروع الذي سيحمّس طفلي؟ المشروع الواضح يحول التعلم من مشاهدة إلى تجربة، ويعطي ولي الأمر طريقة ملموسة لملاحظة التقدم.",
          "إذا لم تكوني متأكدة من البداية، أرسلي العمر والخبرة وما يحب الطفل أن يصنعه. سنقترح Level مناسبًا قبل التسجيل، مع مدة مستقلة 3 أشهر و24 جلسة Live ومخرج نهائي واضح.",
        ],
        paragraphsEn: [
          "Instead of asking which language is most popular, ask which project will make your learner curious. A clear project turns learning from watching into doing and gives parents something concrete to notice.",
          "If you are unsure where to begin, share the learner’s age, experience, and what they would like to make. We will suggest a suitable level before enrolment, with a focused 3-month, 24-live-session journey and a clear final outcome.",
        ],
      },
    ],
  },
  {
    slug: "scratchjr-vs-scratch",
    titleAr: "ScratchJr أم Scratch؟ كيف تختارين البداية المناسبة لطفلك؟",
    titleEn: "ScratchJr vs Scratch: Choosing the Right First Coding Tool",
    excerptAr: "مقارنة بسيطة تساعدك على فهم الفرق بين ScratchJr وScratch، ومتى يكون الانتقال بينهما منطقيًا.",
    excerptEn: "A clear comparison of ScratchJr and Scratch, including when moving from one to the other makes sense.",
    categoryAr: "اختيار الأداة",
    categoryEn: "Choosing a tool",
    publishedAt: "2026-08-14",
    updatedAt: "2026-08-14",
    readTimeAr: "6 دقائق",
    readTimeEn: "6 min read",
    keywordsAr: ["ScratchJr أم Scratch", "تعليم Scratch للأطفال", "ScratchJr للأطفال بالعربي"],
    keywordsEn: ["ScratchJr vs Scratch", "Scratch coding for kids", "ScratchJr classes"],
    relatedCourseSlug: "scratch-game-maker-10-13",
    sections: [
      {
        headingAr: "ما الفرق الأساسي؟",
        headingEn: "What is the main difference?",
        paragraphsAr: [
          "كلاهما يعتمد على Blocks بدل كتابة كود طويل، لكن ScratchJr أبسط بصريًا ومصمم لبناء أول فهم للتسلسل والحركة والمشهد. Scratch يضيف مساحة أكبر للشخصيات والأحداث والشروط والتكرار والتفاعل.",
          "لا يعني هذا أن Scratch أفضل دائمًا. الأداة الأفضل هي التي تجعل الطفل يفهم ما يفعله ويستطيع تغيير النتيجة بنفسه.",
        ],
        paragraphsEn: [
          "Both tools use blocks instead of long text-based code, but ScratchJr is more visual and focused on first ideas such as sequencing, motion, and scenes. Scratch adds more room for characters, events, conditions, loops, and interaction.",
          "That does not make Scratch automatically better. The right tool is the one that helps the learner understand what they are doing and change the result independently.",
        ],
      },
      {
        headingAr: "متى تختارين ScratchJr؟",
        headingEn: "When is ScratchJr a good fit?",
        paragraphsAr: [
          "اختاري ScratchJr عندما يكون الطفل في بداية رحلته، ويستمتع بالقصص أو الرسم أو تحريك الشخصيات، ويحتاج إلى واجهة قليلة التفاصيل. الهدف الأول ليس حفظ أسماء Blocks، بل تحويل فكرة البداية والحدث والنهاية إلى قصة تعمل.",
          "بعد ذلك يمكن إضافة الصوت والتفاعل البسيط، ثم عرض المشروع أمام الأسرة. هذه النتيجة الصغيرة تبني الثقة قبل زيادة التعقيد.",
        ],
        paragraphsEn: [
          "ScratchJr is a good fit when a learner is new to coding, enjoys stories or drawing, and benefits from an interface with fewer details. The first goal is not memorising block names; it is turning a beginning, event, and ending into a working story.",
          "Sound and simple interaction can come next, followed by sharing the project with the family. That small result builds confidence before complexity increases.",
        ],
      },
      {
        headingAr: "متى يكون Scratch مناسبًا؟",
        headingEn: "When is Scratch a good fit?",
        paragraphsAr: [
          "يكون Scratch مناسبًا عندما يستطيع الطفل متابعة أكثر من خطوة، ويريد بناء لعبة أو Animation فيها نقاط وتحديات أو قواعد واضحة. هنا يبدأ التفكير في الأحداث والشروط والتكرار وتصحيح الأخطاء بشكل أوضح.",
          "إذا كان الطفل قد جرّب ScratchJr وفهم التسلسل والحركة، يمكن أن يكون الانتقال طبيعيًا. وإذا بدأ Scratch مباشرة، نخفف البداية ونبني مشروعًا صغيرًا بدل تقديم كل الأدوات في جلسة واحدة.",
        ],
        paragraphsEn: [
          "Scratch is a good fit when a learner can follow several steps and wants to build a game or animation with scores, challenges, or clear rules. Events, conditions, loops, and debugging become more visible here.",
          "If the learner has tried ScratchJr and understands sequencing and movement, the transition can be natural. If they start with Scratch directly, we keep the first project small instead of introducing every feature at once.",
        ],
      },
    ],
  },
  {
    slug: "questions-before-online-coding-course",
    titleAr: "7 أسئلة قبل حجز كورس برمجة أونلاين لطفلك",
    titleEn: "7 Questions to Ask Before Booking an Online Coding Class for Your Child",
    excerptAr: "قائمة عملية تساعد ولي الأمر على مقارنة المناهج، الجلسات، المشروع النهائي، والمتابعة قبل الدفع.",
    excerptEn: "A practical checklist for comparing curriculum, sessions, final projects, and parent follow-up before payment.",
    categoryAr: "قبل الحجز",
    categoryEn: "Before booking",
    readTimeAr: "7 دقائق",
    readTimeEn: "7 min read",
    publishedAt: "2026-08-14",
    updatedAt: "2026-08-14",
    keywordsAr: ["كورس برمجة للأطفال أونلاين", "أسئلة قبل حجز كورس برمجة", "حصص برمجة للأطفال"],
    keywordsEn: ["online coding class for kids", "questions before booking coding classes", "coding lessons for children"],
    relatedCourseSlug: "python-project-builder-14-18",
    sections: [
      {
        headingAr: "1–2: هل المستوى مناسب؟ وهل الجلسات Live؟",
        headingEn: "1–2: Is the level suitable, and are sessions live?",
        paragraphsAr: [
          "اسألي كيف يتم تحديد نقطة البداية، وهل يعتمد الاختيار على العمر وحده أم على الخبرة والاهتمام أيضًا. المنهج الجيد لا يفترض أن كل الأطفال في المجموعة يعرفون الشيء نفسه.",
          "اسألي كذلك عن شكل الجلسة. في Kids Coding Hub كل Level مستقل مدته 3 أشهر ويضم 24 جلسة Live، مع مراجعة ومشروع نهائي؛ المواد المسجلة إن وجدت تكون للمراجعة وليست بديلًا عن التفاعل.",
        ],
        paragraphsEn: [
          "Ask how the starting point is decided. Does the provider use age alone, or also experience and interests? A thoughtful curriculum does not assume every learner in a group knows the same things.",
          "Ask how sessions work as well. At Kids Coding Hub, each level is an independent 3-month journey with 24 live sessions, review, and a final project; any recorded material is for review rather than a replacement for interaction.",
        ],
      },
      {
        headingAr: "3–5: ما الذي سيطبقه الطفل؟ وكيف ستعرفين أنه يتقدم؟",
        headingEn: "3–5: What will they practise, and how will progress be visible?",
        paragraphsAr: [
          "اطلبي أمثلة على المهارات والأدوات والمشروع النهائي. عبارة «يتعلم البرمجة» واسعة، بينما «يبني قصة من ثلاثة مشاهد» أو «ينهي Quiz صغيرًا باستخدام Python» نتيجة يمكن فهمها ومشاركتها.",
          "اسألي عن حجم المجموعة، الجهاز المطلوب، وطريقة التعامل مع الخطأ أو الغياب. هذه التفاصيل تؤثر في تجربة الطفل أكثر من اسم الأداة وحده.",
        ],
        paragraphsEn: [
          "Ask for examples of skills, tools, and the final project. ‘Learns coding’ is broad; ‘builds a three-scene story’ or ‘finishes a small Python quiz’ is concrete and shareable.",
          "Also ask about group size, device requirements, and what happens when a learner gets stuck or misses a session. These details often shape the experience more than the tool name itself.",
        ],
      },
      {
        headingAr: "6–7: ماذا يحدث بعد الحجز؟",
        headingEn: "6–7: What happens after booking?",
        paragraphsAr: [
          "قبل الدفع، يجب أن تعرفي الموعد، العملة، سياسة الحضور والاسترداد، وما الذي يحدث إذا احتاج الطفل إلى Level مختلف. الوضوح قبل المقعد يحمي توقعات الأسرة والمدرب معًا.",
          "في النهاية، اختاري مسارًا يستطيع الطفل أن يصنع داخله شيئًا يخصه. أرسلي العمر والدولة والخبرة والوقت المناسب، وسنساعدك على تحديد البداية قبل التسجيل.",
        ],
        paragraphsEn: [
          "Before payment, you should know the schedule, currency, attendance and refund policy, and what happens if a learner needs a different level. Clarity before the place is confirmed protects both family and instructor expectations.",
          "Finally, choose a path where the learner can create something personal. Share the age, country, experience, and preferred time, and we will help confirm the starting point before enrolment.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
