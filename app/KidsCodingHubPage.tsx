"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import { absoluteSiteUrl, ENGLISH_PATH, sitePath } from "./site-config";

export type Language = "ar" | "en";

const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/fatma-nour-ai-trainer",
  facebook: "https://www.facebook.com/share/1H1iMvRMwR/",
  instagram: "https://www.instagram.com/fatma_nour1512/",
  github: "https://github.com/Fatoomnoour",
  youtube: "https://www.youtube.com/@fatmanour1512",
  blog: "https://www.kidscodinghub.it.com/",
};

const WHATSAPP_NUMBER = "201097430973";
const CONTACT_EMAIL = "fatmanour048@gmail.com";

const programs = [
  {
    ageAr: "5–7 سنوات",
    ageEn: "Ages 5–7",
    titleAr: "مستكشف ScratchJr",
    titleEn: "ScratchJr Explorer",
    introAr: "بداية هادئة لفهم التسلسل والحركة وصناعة قصة تفاعلية.",
    introEn: "A gentle first step into sequencing, motion, and interactive stories.",
    outcomeAr: "يفكر بالخطوات ويشرح فكرته بثقة",
    outcomeEn: "Think in steps and explain ideas with confidence",
    projectAr: "قصة أو لعبة قصيرة من صنع الطفل",
    projectEn: "A short story or game made by the learner",
    skills: ["Stories", "Motion", "Logic"],
    tone: "yellow",
    statusAr: "متاح حاليًا",
    statusEn: "Open in the next cohort",
    available: true,
  },
  {
    ageAr: "7–9 سنوات",
    ageEn: "Ages 7–9",
    titleAr: "Digital Storytellers",
    titleEn: "Digital Storytellers",
    introAr: "نبني Animation أو Mini Game من خيال الطفل إلى شاشة تفاعلية.",
    introEn: "Turn a child's imagination into an animation or a small interactive game.",
    outcomeAr: "يصمم المشاهد ويربط الأحداث بالتجربة",
    outcomeEn: "Design scenes and connect events to interaction",
    projectAr: "Animation أو Mini Game",
    projectEn: "An animation or mini game",
    skills: ["Animation", "Stories", "Events"],
    tone: "orange",
    statusAr: "قريبًا / قائمة انتظار",
    statusEn: "Coming soon / Waitlist",
    available: false,
  },
  {
    ageAr: "9–12 سنة",
    ageEn: "Ages 9–12",
    titleAr: "صانع ألعاب Scratch",
    titleEn: "Scratch Game Maker",
    introAr: "من فكرة على الورق إلى لعبة بشخصيات ونقاط وتحديات.",
    introEn: "From an idea on paper to a game with characters, scores, and challenges.",
    outcomeAr: "يستخدم الأحداث والشروط والتكرار ويصلح الأخطاء",
    outcomeEn: "Use events, conditions, loops, and debugging",
    projectAr: "لعبة كاملة من تصميم الطفل",
    projectEn: "A complete game designed by the learner",
    skills: ["Games", "Loops", "Creativity"],
    tone: "blue",
    statusAr: "قريبًا / قائمة انتظار",
    statusEn: "Coming soon / Waitlist",
    available: false,
  },
  {
    ageAr: "13–16 سنة",
    ageEn: "Ages 13–16",
    titleAr: "باني مشاريع Python",
    titleEn: "Python Project Builder",
    introAr: "نكتب كودًا حقيقيًا ونبني Quiz أو لعبة نصية أو أداة صغيرة.",
    introEn: "Write real code and build a quiz, text game, or useful mini tool.",
    outcomeAr: "ينظم الكود ويختبر فكرته ويشرح مشروعه",
    outcomeEn: "Organize code, test ideas, and explain a project",
    projectAr: "Quiz أو لعبة نصية أو أداة صغيرة",
    projectEn: "A quiz, text game, or useful mini tool",
    skills: ["Python", "Problem Solving", "Debugging"],
    tone: "mint",
    statusAr: "قريبًا / قائمة انتظار",
    statusEn: "Coming soon / Waitlist",
    available: false,
  },
];

const testimonials = [
  {
    quoteAr: "بصراحة كلها دورة ممتازة وممتعة.",
    quoteEn: "Honestly, the whole course was excellent and enjoyable.",
    labelAr: "تقييم متعلم",
    labelEn: "Learner feedback",
  },
  {
    quoteAr: "التفاعل مع المهندسة لأسلوبها المميز.",
    quoteEn: "The interaction and the instructor's distinctive style.",
    labelAr: "أكثر شيء أعجبني",
    labelEn: "Favorite part",
  },
  {
    quoteAr: "سهولة ووضوحه… والدرس ممتع 👍",
    quoteEn: "Clear, easy to follow, and the lesson was fun 👍",
    labelAr: "تجربة الحصة",
    labelEn: "Session experience",
  },
];

const feedbackImages = [
  { src: sitePath("/media/feedback-rating.png"), altAr: "نتيجة تقييم أسلوب الشرح: 100% ممتع وبسيط", altEn: "Teaching-style rating: 100% fun and easy" },
  { src: sitePath("/media/feedback-favorite.png"), altAr: "إجابات المتعلمين عن أكثر ما أعجبهم", altEn: "Learners' favorite parts of the session" },
  { src: sitePath("/media/feedback-session.png"), altAr: "إجابات عن أكثر شيء محبب في جلسات البرمجة", altEn: "Favorite elements in coding sessions" },
  { src: sitePath("/media/feedback-improve.png"), altAr: "مقترحات التحسين من المتعلمين", altEn: "Learner improvement suggestions" },
];

const videos = [
  {
    id: "v2EYOLtPU_Q",
    image: sitePath("/video-flappy.jpg"),
    titleAr: "اصنع Flappy Bird بـ ScratchJr",
    titleEn: "Build Flappy Bird with ScratchJr",
    tagAr: "مشروع لعبة • 6+",
    tagEn: "Game project • Ages 6+",
  },
  {
    id: "8akssInGkcA",
    image: sitePath("/video-plane.jpg"),
    titleAr: "كيف تجعل الطائرة تطير للأمام؟",
    titleEn: "How do you make an airplane fly forward?",
    tagAr: "حركة ومنظور",
    tagEn: "Motion & perspective",
  },
  {
    id: "8jsfC4ENGKo",
    image: sitePath("/video-moon.jpg"),
    titleAr: "مراحل القمر بمشروع برمجي",
    titleEn: "Code the phases of the moon",
    tagAr: "STEAM • برمجة وعلوم",
    tagEn: "STEAM • Coding & science",
  },
];

const articles = [
  {
    titleAr: "7 أخطاء شائعة يقع فيها الآباء عند تعليم أطفالهم البرمجة",
    titleEn: "7 common mistakes parents make when introducing coding",
    href: "https://www.kidscodinghub.it.com/2025/12/7.html",
  },
  {
    titleAr: "أفضل 5 تطبيقات لتعليم البرمجة للأطفال دون 8 سنوات",
    titleEn: "5 coding apps for children under eight",
    href: "https://www.kidscodinghub.it.com/2025/12/5-8.html",
  },
  {
    titleAr: "دليل المدرب الجديد: كيف تجهز أول حصة برمجة؟",
    titleEn: "New instructor guide: prepare your first coding session",
    href: "https://www.kidscodinghub.it.com/2025/11/blog-post_30.html",
  },
];

const technicalProof = [
  {
    title: "Coding Explorers",
    textAr: "تجربة تعليمية تفاعلية للأطفال",
    textEn: "An interactive learning experience for kids",
    href: "https://github.com/Fatoomnoour/Coding-Explorers",
  },
  {
    title: "DP-700 Interactive Simulator",
    textAr: "منصة عربية متقدمة للتعلم التفاعلي",
    textEn: "An advanced Arabic interactive-learning platform",
    href: "https://fatoomnoour.github.io/dp700/",
  },
  {
    title: "PharmStock AI Platform",
    textAr: "حل بيانات وذكاء اصطناعي متكامل",
    textEn: "An end-to-end data and AI solution",
    href: "https://github.com/Fatoomnoour/pharmstock-ai-data-platform",
  },
];

const faqs = [
  {
    qAr: "هل يحتاج الطفل إلى خبرة سابقة؟",
    qEn: "Does my child need prior experience?",
    aAr: "لا. نبدأ من المستوى الحقيقي للطفل، ونقترح الأداة والمشروع المناسبين لعمره واهتمامه.",
    aEn: "No. We start from the learner's real level and suggest the right tool and project for their age and interests.",
  },
  {
    qAr: "هل الجلسات Live أم Recorded؟",
    qEn: "Are the sessions live or recorded?",
    aAr: "البرنامج الأساسي Live أونلاين. وتتوفر مواد قصيرة للمراجعة بين اللقاءات، وليست بديلًا عن الجلسة المباشرة.",
    aEn: "The core program is live online. Short review materials are shared between sessions and do not replace the live lesson.",
  },
  {
    qAr: "كم جلسة في الشهر؟",
    qEn: "How many sessions are there each month?",
    aAr: "8 جلسات كل شهر، بمعدل جلستين أسبوعيًا، لمدة 3 أشهر و24 جلسة إجمالًا.",
    aEn: "There are 8 sessions each month, usually two sessions per week, for 3 months and 24 sessions in total.",
  },
  {
    qAr: "ماذا ينجز الطفل في نهاية الأشهر الثلاثة؟",
    qEn: "What will my child complete after three months?",
    aAr: "يصل الطفل إلى مشروع نهائي قابل للعرض والشرح: لعبة أو قصة تفاعلية أو مشروع Python بحسب المسار.",
    aEn: "The learner completes a presentable, explainable final project: a game, interactive story, or Python project depending on the track.",
  },
  {
    qAr: "ماذا يحدث عند الغياب؟",
    qEn: "What happens if a learner misses a session?",
    aAr: "نرسل مواد المراجعة ونوضح ما يجب تعويضه، وتُناقش أي جلسة تعويض حسب المجموعة والموعد المتاح.",
    aEn: "We share review material and explain what to catch up on. A make-up session can be discussed based on the group and schedule.",
  },
  {
    qAr: "ما الأجهزة المطلوبة؟",
    qEn: "What devices are required?",
    aAr: "يحتاج الطفل إلى جهاز كمبيوتر أو لابتوب واتصال إنترنت مستقر، مع كاميرا وميكروفون للجلسة المباشرة.",
    aEn: "A computer or laptop, stable internet, and a camera and microphone for live sessions are required.",
  },
  {
    qAr: "كيف يتم الدفع؟",
    qEn: "How does payment work?",
    aAr: "بعد اختبار المسار ومعرفة الدولة والموعد، نرسل تفاصيل الدفع وسياسة الحضور والاسترداد بوضوح قبل تأكيد المقعد.",
    aEn: "After the path check and confirming country and schedule, we send payment, attendance, and refund details before confirming a place.",
  },
  {
    qAr: "هل يمكن الدفع على دفعات؟",
    qEn: "Can I pay in installments?",
    aAr: "نعم، يمكن دفع البرنامج كاملًا أو على ثلاث دفعات شهرية محددة، وتُرسل التفاصيل حسب الدولة والعملة.",
    aEn: "Yes. The program can be paid in full or in three specified monthly installments; details depend on country and currency.",
  },
  {
    qAr: "متى يتم تأكيد المقعد؟",
    qEn: "When is the place confirmed?",
    aAr: "لا يتم تأكيد المقعد إلا بعد الاتفاق على المسار والموعد ووصول الدفع والتحقق منه.",
    aEn: "A place is confirmed only after the track and schedule are agreed and payment is received and verified.",
  },
  {
    qAr: "هل يمكن تصميم برنامج للمدرسة؟",
    qEn: "Can you design a program for a school?",
    aAr: "نعم. يمكن تصميم ورشة أو برنامج للمدارس والأكاديميات حسب الأعمار والعدد والهدف والوقت المتاح.",
    aEn: "Yes. Workshops and programs can be tailored for schools and academies around age, group size, goals, and time.",
  },
];

type QuizAnswer = {
  age: string;
  interest: string;
  experience: string;
};

type OrgBrief = {
  type: string;
  age: string;
  size: string;
};

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "logo-crop compact" : "logo-crop"} aria-hidden="true">
      <img src={sitePath("/media/kids-coding-hub-logo.png")} alt="" width="1024" height="1024" />
    </span>
  );
}

function ExternalLink({ href, children, className = "", label }: { href: string; children: React.ReactNode; className?: string; label?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function trackLead(source: string) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
  analyticsWindow.gtag?.("event", "generate_lead", { lead_source: source });
}

function getQuizResult(answer: QuizAnswer, ar: boolean) {
  if (answer.age === "5-7") {
    return {
      title: ar ? "مستكشف ScratchJr" : "ScratchJr Explorer",
      text: ar ? "أفضل بداية لطفلك هي القصص والحركة والتسلسل؛ يتعلم المنطق دون أن يشعر أنه أمام درس معقد." : "The best start is stories, motion, and sequencing—building logic without making it feel complicated.",
      project: ar ? "المشروع المقترح: قصة تفاعلية أو لعبة قصيرة." : "Suggested project: an interactive story or mini game.",
    };
  }
  if (answer.age === "8-10" || (answer.age === "11-13" && answer.experience === "blocks")) {
    return {
      title: ar ? "صانع ألعاب Scratch" : "Scratch Game Maker",
      text: ar ? "هذا المسار يحوّل حب اللعب إلى تفكير منطقي وتصميم شخصيات وقواعد وتحديات." : "This path turns a love of games into logic, character design, rules, and challenges.",
      project: ar ? "المشروع المقترح: لعبة نقاط ومستويات من تصميم الطفل." : "Suggested project: a score-and-level game designed by the learner.",
    };
  }
  if (answer.age === "14+" || answer.interest === "ai" || answer.experience === "python") {
    return {
      title: ar ? "مختبر Python والـAI" : "Python & AI Lab",
      text: ar ? "البداية الأنسب هي كود Python حقيقي ثم تجارب بيانات وذكاء اصطناعي مبسطة ومسؤولة." : "The best fit is real Python code followed by approachable, responsible data and AI experiments.",
      project: ar ? "المشروع المقترح: تطبيق بيانات أو نموذج AI مبسط." : "Suggested project: a data app or an approachable AI prototype.",
    };
  }
  return {
    title: ar ? "باني مشاريع Python" : "Python Project Builder",
    text: ar ? "طفلك جاهز للانتقال من الفكرة إلى كتابة كود حقيقي وحل الأخطاء خطوة بخطوة." : "Your learner is ready to move from ideas to real code and step-by-step debugging.",
    project: ar ? "المشروع المقترح: لعبة نصية أو أداة ذكية صغيرة." : "Suggested project: a text game or a useful mini tool.",
  };
}

export default function KidsCodingHubPage({ language }: { language: Language }) {
  const ar = language === "ar";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<QuizAnswer>({ age: "", interest: "", experience: "" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [orgBrief, setOrgBrief] = useState<OrgBrief>({ type: "school", age: "8-11", size: "10-20" });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = ar ? "rtl" : "ltr";
  }, [language, ar]);

  useEffect(() => {
    const ids = ["home", "paths", "programs", "method", "parents", "registration", "results", "schools", "about", "content", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0.05, 0.25, 0.55] },
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((current) => current === null ? null : (current + 1) % feedbackImages.length);
      if (event.key === "ArrowLeft") setLightbox((current) => current === null ? null : (current - 1 + feedbackImages.length) % feedbackImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const quizComplete = Boolean(quizAnswer.age && quizAnswer.interest && quizAnswer.experience);
  const quizResult = useMemo(() => getQuizResult(quizAnswer, ar), [quizAnswer, ar]);

  const quizOptions = [
    {
      key: "age" as const,
      question: ar ? "كم عمر طفلك؟" : "How old is your learner?",
      hint: ar ? "نختار الأدوات وطريقة الشرح حسب المرحلة العمرية." : "We adapt tools and teaching style to the learner's stage.",
      options: [
        ["5-7", ar ? "5–7 سنوات" : "Ages 5–7"],
        ["8-10", ar ? "8–10 سنوات" : "Ages 8–10"],
        ["11-13", ar ? "11–13 سنة" : "Ages 11–13"],
        ["14+", ar ? "14 سنة فأكثر" : "Ages 14+"],
      ],
    },
    {
      key: "interest" as const,
      question: ar ? "ما الذي يحمّسه أكثر؟" : "What excites them most?",
      hint: ar ? "الاهتمام الطبيعي يجعل أول مشروع أكثر نجاحًا." : "Natural curiosity makes the first project more successful.",
      options: [
        ["games", ar ? "الألعاب والقصص" : "Games & stories"],
        ["challenges", ar ? "الألغاز والتحديات" : "Puzzles & challenges"],
        ["ai", ar ? "التطبيقات والذكاء الاصطناعي" : "Apps & AI"],
        ["unsure", ar ? "لسنا متأكدين بعد" : "Not sure yet"],
      ],
    },
    {
      key: "experience" as const,
      question: ar ? "ما خبرته السابقة؟" : "What is their current experience?",
      hint: ar ? "لا توجد إجابة أفضل؛ نبدأ من مكانه الحقيقي." : "There is no better answer—we start where they are.",
      options: [
        ["none", ar ? "أول مرة" : "First time"],
        ["blocks", ar ? "جرّب Scratch أو Blocks" : "Tried Scratch or blocks"],
        ["python", ar ? "كتب بعض Python" : "Wrote some Python"],
        ["regular", ar ? "يتعلم بانتظام" : "Learning regularly"],
      ],
    },
  ];

  const nav = ar
    ? [
        ["المسارات", "programs"],
        ["طريقتنا", "method"],
        ["الآباء", "parents"],
        ["المدونة", "content"],
        ["النتائج", "results"],
        ["للمدارس", "schools"],
        ["عن فاطمة", "about"],
      ]
    : [
        ["Programs", "programs"],
        ["Method", "method"],
        ["For parents", "parents"],
        ["Blog", "content"],
        ["Results", "results"],
        ["For schools", "schools"],
        ["About Fatma", "about"],
      ];

  const parentMessage = ar
    ? "أهلًا فاطمة، أريد معرفة المسار المناسب لطفلي.\nالعمر: …\nالدولة: …\nالخبرة السابقة: …\nالاهتمام: …\nالوقت المناسب: …"
    : "Hello Fatma, I would like to find the right learning path for my child.\nAge: …\nCountry: …\nPrevious experience: …\nInterest: …\nPreferred time: …";

  const schoolMessage = ar
    ? "مرحبًا أستاذة فاطمة، نحن [اسم الجهة] في [الدولة] ونرغب في مناقشة برنامج برمجة أو AI للفئة العمرية [__] وعدد [__] متعلمًا."
    : "Hello Fatma, we are [organization] in [country] and would like to discuss a coding or AI program for ages [__] and [__] learners.";

  const orgMessage = ar
    ? `مرحبًا أستاذة فاطمة، أريد مقترحًا مبدئيًا لبرنامج Kids Coding Hub.\nنوع الجهة: ${orgBrief.type}\nالفئة العمرية: ${orgBrief.age}\nالعدد التقريبي: ${orgBrief.size}\nالدولة/المدينة: __\nالموعد المتوقع: __`
    : `Hello Fatma, I would like an initial Kids Coding Hub program proposal.\nOrganization type: ${orgBrief.type}\nAge group: ${orgBrief.age}\nApproximate group size: ${orgBrief.size}\nCountry/city: __\nPreferred date: __`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": absoluteSiteUrl("/#organization"),
        name: "Kids Coding Hub",
        alternateName: "كيدز كودينج هب",
        url: absoluteSiteUrl(ar ? "/" : ENGLISH_PATH),
        logo: absoluteSiteUrl("/media/kids-coding-hub-logo.png"),
        founder: { "@id": absoluteSiteUrl("/#fatma-nour") },
        sameAs: [SOCIAL.linkedin, SOCIAL.github, SOCIAL.youtube, SOCIAL.blog],
        areaServed: ["Egypt", "Saudi Arabia", "United Arab Emirates", "Gulf Cooperation Council"],
        knowsAbout: ["ScratchJr", "Scratch", "Python", "Artificial Intelligence", "Coding for kids", "STEAM education"],
      },
      {
        "@type": "Person",
        "@id": absoluteSiteUrl("/#fatma-nour"),
        name: "Fatma Nour",
        alternateName: "فاطمة نور",
        image: absoluteSiteUrl("/media/fatma-nour.jpg"),
        jobTitle: "Founder & Coding and AI Instructor",
        worksFor: { "@id": absoluteSiteUrl("/#organization") },
        sameAs: [SOCIAL.linkedin, SOCIAL.github, SOCIAL.instagram, SOCIAL.youtube],
        knowsAbout: ["Scratch", "Python", "Artificial Intelligence", "Data Engineering", "Curriculum Design"],
      },
      {
        "@type": "Course",
        "@id": absoluteSiteUrl("/#core-program"),
        name: ar ? "برنامج Kids Coding Hub الأساسي" : "Kids Coding Hub Core Program",
        description: ar ? "برنامج عربي عملي لمدة 3 أشهر و24 جلسة Live لبناء مشروع برمجي مناسب لعمر الطفل ومستواه." : "A practical 3-month, 24-live-session program for building a coding project suited to the learner's age and level.",
        provider: { "@id": absoluteSiteUrl("/#organization") },
        educationalLevel: "Beginner to intermediate",
        teaches: ["ScratchJr", "Scratch", "Python", "Project-based learning"],
        timeRequired: "P3M",
        inLanguage: ["ar", "en"],
      },
      {
        "@type": "WebSite",
        "@id": absoluteSiteUrl("/#website"),
        name: "Kids Coding Hub",
        url: absoluteSiteUrl("/"),
        inLanguage: ["ar", "en"],
        publisher: { "@id": absoluteSiteUrl("/#organization") },
      },
      {
        "@type": "FAQPage",
        "@id": absoluteSiteUrl("/#faq"),
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: ar ? faq.qAr : faq.qEn,
          acceptedAnswer: { "@type": "Answer", text: ar ? faq.aAr : faq.aEn },
        })),
      },
    ],
  };

  return (
    <div className="kch-site" dir={ar ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#main-content">{ar ? "تخطي إلى المحتوى" : "Skip to content"}</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href={`${sitePath(ar ? "/" : ENGLISH_PATH)}#home`} aria-label={ar ? "Kids Coding Hub — الرئيسية" : "Kids Coding Hub — Home"}>
            <Logo compact />
            <span className="brand-type"><b>Kids Coding Hub</b><small>{ar ? "نتعلّم • نبني • نشارك" : "Learn • Build • Share"}</small></span>
          </a>

          <nav className="desktop-nav" aria-label={ar ? "التنقل الرئيسي" : "Main navigation"}>
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} aria-current={activeSection === id ? "page" : undefined}>{label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="language-link" href={sitePath(ar ? ENGLISH_PATH : "/")} hrefLang={ar ? "en" : "ar"}>{ar ? "EN" : "عربي"}</a>
            <a className="header-cta" href="#path-finder">{ar ? "اختبار المسار" : "Find a path"}</a>
            <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={ar ? "فتح القائمة" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label={ar ? "قائمة الهاتف" : "Mobile navigation"}>
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href="#path-finder" onClick={() => setMenuOpen(false)}>{ar ? "اختبار المسار المجاني" : "Free path finder"}</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-shape shape-one" aria-hidden="true" />
          <div className="hero-shape shape-two" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow"><i />{ar ? "برمجة وذكاء اصطناعي للأطفال • أونلاين" : "Coding & AI for kids • Live online"}</span>
              <h1 id="hero-title">
                {ar ? <>من فضول طفلك…<br />إلى <span>أول مشروع</span><br />يصنعه بنفسه.</> : <>From curiosity…<br />to a <span>first project</span><br />they build themselves.</>}
              </h1>
              <p className="hero-description">
                {ar ? "برنامج عربي عملي لمدة 3 أشهر و24 جلسة Live، يساعد الطفل على بناء لعبة أو قصة تفاعلية أو مشروع Python مناسب لعمره ومستواه، مع متابعة واضحة لولي الأمر." : "A practical 3-month Arabic-first program with 24 live sessions, helping each learner build a game, interactive story, or Python project suited to their age and level—with clear parent follow-up."}
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#path-finder" onClick={() => trackLead("hero_parent")}>{ar ? "اكتشفي المسار المناسب" : "Find the right path"}<ArrowIcon /></a>
                <a className="button secondary" href={waLink(parentMessage)} target="_blank" rel="noreferrer" onClick={() => trackLead("hero_whatsapp")}>{ar ? "تحدثي مع فاطمة على WhatsApp" : "Talk to Fatma on WhatsApp"}</a>
              </div>
              <p className="microcopy"><CheckIcon />{ar ? "اختبار مجاني • أقل من دقيقة • بدون تسجيل" : "Free • Under one minute • No signup"}</p>
              <div className="hero-proof" aria-label={ar ? "تفاصيل البرنامج" : "Program details"}>
                <div><b>3</b><span>{ar ? "أشهر" : "Months"}</span></div>
                <div><b>24</b><span>{ar ? "جلسة Live" : "Live sessions"}</span></div>
                <div><b>5–8</b><span>{ar ? "طلاب في المجموعة" : "Learners per group"}</span></div>
                <div><b>1</b><span>{ar ? "مشروع نهائي" : "Final project"}</span></div>
              </div>
            </div>

            <div className="hero-visual" aria-label={ar ? "فاطمة نور، مؤسسة Kids Coding Hub" : "Fatma Nour, founder of Kids Coding Hub"}>
              <div className="photo-dots" aria-hidden="true" />
              <div className="photo-frame">
                <img src={sitePath("/media/fatma-nour.jpg")} width="720" height="1280" alt={ar ? "فاطمة نور، مدربة البرمجة والذكاء الاصطناعي للأطفال" : "Fatma Nour, coding and AI instructor for kids"} fetchPriority="high" />
                <div className="photo-caption"><span>{ar ? "معك خطوة بخطوة" : "With you, step by step"}</span><b>Fatma Nour</b></div>
              </div>
              <div className="hero-logo-card"><Logo /><span>{ar ? "تعليم يصنع ثقة ومشروعًا حقيقيًا" : "Learning that builds confidence and a real project"}</span></div>
              <div className="floating-badge badge-age"><b>5–16</b><span>{ar ? "سنة" : "years"}</span></div>
              <div className="floating-badge badge-project"><span>✓</span><b>{ar ? "Project-Based" : "Project-Based"}</b></div>
            </div>
          </div>
          <p className="survey-note">* {ar ? "بحسب 5 ردود في استبيان تجربة تعليمية تجريبية." : "Based on five responses in a pilot learning-experience survey."}</p>
        </section>

        <section className="audience-section" id="paths" aria-labelledby="paths-title">
          <div className="section-intro centered">
            <span className="section-kicker">{ar ? "ابدأ من هدفك" : "Start with your goal"}</span>
            <h2 id="paths-title">{ar ? "طريق واضح لكل زائر" : "A clear next step for every visitor"}</h2>
            <p>{ar ? "اختاري المسار الأقرب لك وسنصل إلى الخطوة المناسبة مباشرة." : "Choose what best describes you and go straight to the right next step."}</p>
          </div>
          <div className="audience-grid">
            <a className="audience-card parent-card" href="#path-finder">
              <span className="audience-icon">01</span>
              <div><small>{ar ? "أنا وليّ أمر" : "I'm a parent"}</small><h3>{ar ? "أريد بداية مناسبة لطفلي" : "I want the right start for my child"}</h3><p>{ar ? "اختبار دقيقة يرشّح المسار والمشروع الأول." : "A one-minute check suggests a path and first project."}</p></div>
              <ArrowIcon />
            </a>
            <a className="audience-card school-card" href="#schools">
              <span className="audience-icon">02</span>
              <div><small>{ar ? "أنا مدرسة أو أكاديمية" : "I'm a school or academy"}</small><h3>{ar ? "أريد ورشة أو برنامجًا متكاملًا" : "I need a workshop or complete program"}</h3><p>{ar ? "من تحديد الهدف إلى خطة المحتوى وقياس النتائج." : "From goals and curriculum to delivery and outcomes."}</p></div>
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="programs-section" id="programs" aria-labelledby="programs-title">
          <div className="section-intro split">
            <div><span className="section-kicker">{ar ? "مسارات التعلّم" : "Learning paths"}</span><h2 id="programs-title">{ar ? "كل عمر له أداة، تحدٍ، ومشروع يناسبه." : "The right tool, challenge, and project for every age."}</h2></div>
            <p>{ar ? "جلسات مباشرة أونلاين، فردية أو في مجموعة صغيرة. مدة الخطة وعدد اللقاءات يُحددان بعد تقييم المستوى والهدف." : "Live online sessions, one-to-one or in a small group. Track length and session count are set after a level and goal check."}</p>
          </div>
          <div className="program-grid">
            {programs.map((program, index) => (
              <article className={`program-card ${program.tone}`} key={program.titleEn}>
                <div className="program-top"><span>{ar ? program.ageAr : program.ageEn}</span><b>0{index + 1}</b></div>
                <span className={`program-status ${program.available ? "available" : "waitlist"}`}>{ar ? program.statusAr : program.statusEn}</span>
                <h3>{ar ? program.titleAr : program.titleEn}</h3>
                <p>{ar ? program.introAr : program.introEn}</p>
                <div className="program-detail"><small>{ar ? "ما سيتقنه" : "Core outcome"}</small><b>{ar ? program.outcomeAr : program.outcomeEn}</b></div>
                <div className="program-detail"><small>{ar ? "المشروع النهائي" : "Final project"}</small><b>{ar ? program.projectAr : program.projectEn}</b></div>
                <div className="skill-list">{program.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                <a href="#path-finder">{ar ? "أريد معرفة إن كان هذا المسار مناسبًا لطفلي" : "Check whether this path fits my child"}<ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="program-plan-section" id="program-plan" aria-labelledby="program-plan-title">
          <div className="section-intro centered narrow">
            <span className="section-kicker">{ar ? "البرنامج الأساسي" : "The core program"}</span>
            <h2 id="program-plan-title">{ar ? "رحلة واضحة من أول فكرة إلى مشروع نهائي." : "A clear journey from first idea to final project."}</h2>
            <p>{ar ? "8 جلسات كل شهر، بمعدل جلستين أسبوعيًا. الجلسات Live، وتوجد مواد قصيرة للمراجعة بين اللقاءات." : "Eight sessions each month, usually two sessions per week. Sessions are live, with short review materials between meetings."}</p>
          </div>
          <div className="program-plan-grid">
            <article><span>01</span><small>{ar ? "الشهر الأول — Explore" : "Month 1 — Explore"}</small><h3>{ar ? "نفهم الأداة والمنطق" : "Understand the tool and logic"}</h3><p>{ar ? "التسلسل، الحركة، الأحداث، والتفاعل عبر Mini Project." : "Sequencing, motion, events, and interaction through a mini project."}</p></article>
            <article><span>02</span><small>{ar ? "الشهر الثاني — Build" : "Month 2 — Build"}</small><h3>{ar ? "نبني النسخة الأولى" : "Build the first version"}</h3><p>{ar ? "التكرار، الشروط، المتغيرات، التصميم، وDebugging." : "Loops, conditions, variables, design, and debugging."}</p></article>
            <article><span>03</span><small>{ar ? "الشهر الثالث — Create" : "Month 3 — Create"}</small><h3>{ar ? "نختبر ونشارك" : "Test and share"}</h3><p>{ar ? "تطوير المشروع، الاختبار، العرض، وPortfolio في Demo Day." : "Develop, test, present, and build a portfolio in Demo Day."}</p></article>
          </div>
        </section>

        <section className="finder-section" id="path-finder" aria-labelledby="finder-title">
          <div className="finder-intro">
            <span className="section-kicker light">{ar ? "اختبار المسار المجاني" : "Free path finder"}</span>
            <h2 id="finder-title">{ar ? "ما المسار البرمجي الأنسب لطفلك؟" : "Which coding path fits your learner?"}</h2>
            <p>{ar ? "3 أسئلة قصيرة، ثم توصية واضحة ومشروع أول مقترح. لا نطلب بريدًا أو تسجيلًا." : "Three quick questions, then a clear recommendation and suggested first project. No email or signup."}</p>
            <div className="finder-benefits"><span><CheckIcon />{ar ? "أقل من دقيقة" : "Under one minute"}</span><span><CheckIcon />{ar ? "نتيجة فورية" : "Instant result"}</span><span><CheckIcon />{ar ? "يمكن مناقشتها قبل الحجز" : "Discuss before booking"}</span></div>
          </div>
          <div className="quiz-card">
            {!quizComplete || quizStep < 3 ? (
              <>
                <div className="quiz-head"><span>{ar ? `السؤال ${quizStep + 1} من 3` : `Question ${quizStep + 1} of 3`}</span><div className="quiz-progress"><i style={{ width: `${((quizStep + 1) / 3) * 100}%` }} /></div></div>
                <div className="quiz-question"><h3>{quizOptions[quizStep].question}</h3><p>{quizOptions[quizStep].hint}</p></div>
                <div className="quiz-options">
                  {quizOptions[quizStep].options.map(([value, label]) => {
                    const key = quizOptions[quizStep].key;
                    const selected = quizAnswer[key] === value;
                    return <button key={value} type="button" className={selected ? "selected" : ""} aria-pressed={selected} onClick={() => setQuizAnswer((answer) => ({ ...answer, [key]: value }))}><span>{label}</span><i>{selected ? "✓" : ""}</i></button>;
                  })}
                </div>
                <div className="quiz-actions">
                  <button type="button" className="quiz-back" disabled={quizStep === 0} onClick={() => setQuizStep((step) => Math.max(0, step - 1))}>{ar ? "السابق" : "Back"}</button>
                  <button type="button" className="quiz-next" disabled={!quizAnswer[quizOptions[quizStep].key]} onClick={() => setQuizStep((step) => Math.min(3, step + 1))}>{quizStep === 2 ? (ar ? "اعرض النتيجة" : "Show result") : (ar ? "التالي" : "Next")}<ArrowIcon /></button>
                </div>
              </>
            ) : (
              <div className="quiz-result" aria-live="polite">
                <span className="result-icon">✓</span><small>{ar ? "المسار المقترح" : "Suggested path"}</small><h3>{quizResult.title}</h3><p>{quizResult.text}</p><b>{quizResult.project}</b>
                <a className="button primary" href={waLink(`${ar ? "مرحبًا أستاذة فاطمة، أكملت اختبار Kids Coding Hub وكانت النتيجة" : "Hello Fatma, I completed the Kids Coding Hub path finder and my result was"}: ${quizResult.title}.\n${ar ? "العمر" : "Age"}: ${quizAnswer.age}\n${ar ? "الاهتمام" : "Interest"}: ${quizAnswer.interest}\n${ar ? "الخبرة" : "Experience"}: ${quizAnswer.experience}\n${ar ? "أريد معرفة الخطوة التالية." : "I would like to know the next step."}`)} target="_blank" rel="noreferrer" onClick={() => trackLead("quiz_result")}>{ar ? "ناقشي النتيجة على WhatsApp" : "Discuss on WhatsApp"}<ArrowIcon /></a>
                <button type="button" className="restart-quiz" onClick={() => { setQuizAnswer({ age: "", interest: "", experience: "" }); setQuizStep(0); }}>{ar ? "إعادة الاختبار" : "Start again"}</button>
              </div>
            )}
          </div>
        </section>

        <section className="method-section" id="method" aria-labelledby="method-title">
          <div className="method-visual">
            <div className="method-board">
              <span className="board-label">Kids Coding Hub Method</span>
              <div className="code-line"><i /><b>{ar ? "فكرة" : "Idea"}</b><span>→</span><i /><b>{ar ? "تجربة" : "Try"}</b><span>→</span><i /><b>{ar ? "مشروع" : "Build"}</b></div>
              <div className="board-project"><span>when 🚩 clicked</span><span>forever</span><span className="indent">move 10 steps</span></div>
              <div className="board-sticker">{ar ? "أنا عملتها!" : "I built it!"} ✨</div>
            </div>
          </div>
          <div className="method-copy">
            <span className="section-kicker">{ar ? "طريقتنا في التعليم" : "How we teach"}</span>
            <h2 id="method-title">{ar ? "لا نشرح الكود فقط؛ نبني طريقة تفكير وثقة." : "We do more than explain code—we build thinking and confidence."}</h2>
            <div className="method-list">
              <div><span>01</span><p><b>{ar ? "نفهم من خلال قصة" : "Understand through a story"}</b>{ar ? " نربط المفهوم بموقف قريب من عالم الطفل." : " We connect each concept to something familiar."}</p></div>
              <div><span>02</span><p><b>{ar ? "نجرب بأيدينا" : "Learn by doing"}</b>{ar ? " كل جزء من الشرح يتبعه تطبيق يراه الطفل يعمل." : " Every explanation is followed by something learners can make work."}</p></div>
              <div><span>03</span><p><b>{ar ? "نحوّل الخطأ إلى اكتشاف" : "Turn mistakes into discovery"}</b>{ar ? " الطفل يختبر ويصحّح بدل الخوف من الإجابة الخاطئة." : " Learners test and debug instead of fearing wrong answers."}</p></div>
              <div><span>04</span><p><b>{ar ? "ننهي بمشروع يُشارك" : "Finish with something to share"}</b>{ar ? " الإنجاز الحقيقي شيء يعمل ويستطيع الطفل شرحه." : " Real progress is a working project learners can explain."}</p></div>
            </div>
          </div>
        </section>

        <section className="parent-benefits-section" id="parents" aria-labelledby="parents-title">
          <div className="section-intro split">
            <div><span className="section-kicker">{ar ? "للآباء والأمهات" : "For parents"}</span><h2 id="parents-title">{ar ? "تعرفين ماذا يحدث بعد كل جلسة." : "Know what happens after every session."}</h2></div>
            <p>{ar ? "الطفل هو المتعلم، لكن ولي الأمر شريك في الرحلة. لذلك نوضح المخرجات والمتابعة والخطوة التالية دون وعود مبالغ فيها." : "The child is the learner, but the parent is a partner in the journey. We make outcomes, follow-up, and next steps clear without exaggerated promises."}</p>
          </div>
          <div className="parent-benefits-table" role="table" aria-label={ar ? "ما يحصل عليه الطالب والأسرة" : "What the learner and family receive"}>
            <div className="parent-benefit-row table-head" role="row"><b>{ar ? "ما يحصل عليه الطالب والأسرة" : "What the learner and family receive"}</b><b>{ar ? "التفاصيل" : "Details"}</b></div>
            <div className="parent-benefit-row" role="row"><b>{ar ? "24 جلسة Live" : "24 live sessions"}</b><span>{ar ? "8 جلسات شهريًا لمدة 3 أشهر" : "8 sessions per month for 3 months"}</span></div>
            <div className="parent-benefit-row" role="row"><b>{ar ? "مجموعة صغيرة" : "Small group"}</b><span>{ar ? "5–8 طلاب متقاربين في العمر والمستوى" : "5–8 learners close in age and level"}</span></div>
            <div className="parent-benefit-row" role="row"><b>{ar ? "مواد مراجعة" : "Review material"}</b><span>{ar ? "فيديوهات قصيرة أو ملفات بعد الجلسات" : "Short videos or files after sessions"}</span></div>
            <div className="parent-benefit-row" role="row"><b>{ar ? "مشروع نهائي" : "Final project"}</b><span>{ar ? "نتيجة ملموسة قابلة للعرض والشرح" : "A tangible result that can be shown and explained"}</span></div>
            <div className="parent-benefit-row" role="row"><b>{ar ? "متابعة ودعم" : "Follow-up and support"}</b><span>{ar ? "ملاحظة بعد الجلسة، تقرير تقدم شهري، وتواصل مع ولي الأمر عبر WhatsApp" : "Post-session notes, a monthly progress update, and WhatsApp parent communication"}</span></div>
          </div>
        </section>

        <section className="registration-section" id="registration" aria-labelledby="registration-title">
          <div className="registration-card">
            <span className="section-kicker light">{ar ? "التسجيل والدفع" : "Registration & payment"}</span>
            <h2 id="registration-title">{ar ? "تفاصيل التسجيل والدفع تُرسل لكِ بوضوح قبل تأكيد المقعد." : "Registration and payment details are shared clearly before a place is confirmed."}</h2>
            <p>{ar ? "بعد اختبار المسار ومعرفة الدولة والموعد المناسب، نرسل لكِ تفاصيل البرنامج، طريقة التحويل المتاحة، وسياسة الحضور والاسترداد. يمكن دفع البرنامج كاملًا أو على ثلاث دفعات شهرية محددة. لا يتم تأكيد المقعد إلا بعد وصول الدفع والتحقق منه." : "After the path check and confirming country and schedule, we send the program details, available payment method, and attendance and refund policy. You can pay in full or in three specified monthly installments. A place is confirmed only after payment is received and verified."}</p>
            <div className="registration-actions"><a className="button primary" href={waLink(parentMessage)} target="_blank" rel="noreferrer" onClick={() => trackLead("registration_details")}>{ar ? "اطلبي تفاصيل التسجيل" : "Request registration details"}<ArrowIcon /></a><a className="text-cta light" href={waLink(parentMessage)} target="_blank" rel="noreferrer">{ar ? "تحدثي مع فاطمة" : "Talk to Fatma"}<ArrowIcon /></a></div>
            <small>{ar ? "لا نعرض سعرًا عامًا لأن المسار والعملة والموعد يختلفون حسب الدولة والمستوى." : "We do not publish a general price because track, currency, and schedule vary by country and level."}</small>
          </div>
        </section>

        <section className="results-section" id="results" aria-labelledby="results-title">
          <div className="section-intro centered narrow">
            <span className="section-kicker">{ar ? "صوت المتعلمين" : "Learner voice"}</span>
            <h2 id="results-title">{ar ? "دليل صغير، حقيقي، ونقدّمه بوضوح." : "Small, real proof—shared transparently."}</h2>
            <p>{ar ? "هذه النتائج من استبيان تجربة تعليمية تجريبية شمل 5 ردود. سنستمر في إضافة نتائج ومشروعات موثقة مع نمو المجتمع." : "These results come from a pilot learning-experience survey with five responses. We will continue adding verified outcomes and projects as the community grows."}</p>
          </div>
          <div className="result-metrics">
            <div className="metric-card"><span>100%</span><b>{ar ? "اختاروا «ممتع وبسيط»" : "Chose “fun and easy”"}</b><small>{ar ? "5 من 5 ردود" : "5 out of 5 responses"}</small></div>
            <div className="metric-card accent"><span>5/5</span><b>{ar ? "لم يطلبوا تغييرًا جوهريًا" : "No major change requested"}</b><small>{ar ? "في سؤال التحسين" : "In the improvement question"}</small></div>
            <div className="metric-card"><span>4</span><b>{ar ? "عناصر تكررت في الإعجاب" : "Repeated strengths"}</b><small>{ar ? "سهولة • تفاعل • متعة • أفكار" : "Clarity • interaction • fun • ideas"}</small></div>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item, index) => <blockquote key={index}><span>“</span><p>{ar ? item.quoteAr : item.quoteEn}</p><footer>{ar ? item.labelAr : item.labelEn}</footer></blockquote>)}
          </div>
          <details className="evidence-panel">
            <summary>{ar ? "شاهد صور نتائج الاستبيان الأصلية" : "View the original survey screenshots"}<span>+</span></summary>
            <div className="evidence-grid">
              {feedbackImages.map((item, index) => <button type="button" key={item.src} onClick={() => setLightbox(index)}><img src={item.src} width="623" height="274" alt={ar ? item.altAr : item.altEn} loading="lazy" /><span>{ar ? "تكبير الصورة" : "Enlarge"}</span></button>)}
            </div>
          </details>
        </section>

        <section className="schools-section" id="schools" aria-labelledby="schools-title">
          <div className="schools-copy">
            <span className="section-kicker light">{ar ? "للمدارس والأكاديميات والمجتمعات" : "For schools, academies & communities"}</span>
            <h2 id="schools-title">{ar ? "برنامج قابل للتنفيذ، وليس مجرد عرض جميل." : "A program built to run—not just a polished presentation."}</h2>
            <p>{ar ? "أصمّم ورشة واحدة أو مسارًا متكاملًا يناسب الأعمار والوقت والهدف، مع أنشطة تطبيقية ومشروع نهائي وطريقة واضحة لقياس التقدم." : "I design a single workshop or a complete track around age, time, and goals—with hands-on activities, a final project, and a clear way to measure progress."}</p>
            <div className="school-services">
              <span><CheckIcon />After-School Clubs</span><span><CheckIcon />Summer Camps</span><span><CheckIcon />Scratch / Python / AI</span><span><CheckIcon />Train-the-Trainer</span>
            </div>
            <a className="text-cta light" href={waLink(schoolMessage)} target="_blank" rel="noreferrer" onClick={() => trackLead("school_section")}>{ar ? "تواصلي مباشرة مع فاطمة" : "Talk directly with Fatma"}<ArrowIcon /></a>
          </div>
          <div className="brief-card">
            <div className="brief-head"><small>{ar ? "طلب مقترح مبدئي" : "Request an initial proposal"}</small><b>{ar ? "3 اختيارات فقط" : "Only three choices"}</b></div>
            <label>{ar ? "نوع الجهة" : "Organization type"}<select value={orgBrief.type} onChange={(event) => setOrgBrief((brief) => ({ ...brief, type: event.target.value }))}><option value="school">{ar ? "مدرسة" : "School"}</option><option value="academy">{ar ? "أكاديمية" : "Academy"}</option><option value="community">{ar ? "مبادرة أو مجتمع" : "Community"}</option><option value="company">{ar ? "شركة" : "Company"}</option></select></label>
            <label>{ar ? "الفئة العمرية" : "Age group"}<select value={orgBrief.age} onChange={(event) => setOrgBrief((brief) => ({ ...brief, age: event.target.value }))}><option value="5-7">5–7</option><option value="8-11">8–11</option><option value="11-14">11–14</option><option value="12-16">12–16</option><option value="mixed">{ar ? "أعمار متنوعة" : "Mixed ages"}</option></select></label>
            <label>{ar ? "العدد التقريبي" : "Approximate group size"}<select value={orgBrief.size} onChange={(event) => setOrgBrief((brief) => ({ ...brief, size: event.target.value }))}><option value="under-10">{ar ? "أقل من 10" : "Under 10"}</option><option value="10-20">10–20</option><option value="21-40">21–40</option><option value="40+">40+</option></select></label>
            <a className="button mint" href={waLink(orgMessage)} target="_blank" rel="noreferrer" onClick={() => trackLead("organization_brief")}>{ar ? "اطلب عرضًا فنيًا وماليًا" : "Request a technical & commercial proposal"}<ArrowIcon /></a>
            <p>{ar ? "ستفتح رسالة جاهزة؛ أضيفي اسم الجهة والمدينة والموعد قبل الإرسال." : "A prepared message will open. Add your organization, location, and date before sending."}</p>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-photo">
            <img src={sitePath("/media/fatma-nour.jpg")} width="720" height="1280" alt={ar ? "فاطمة نور، مؤسسة Kids Coding Hub" : "Fatma Nour, founder of Kids Coding Hub"} loading="lazy" />
            <div className="founder-tag"><span>{ar ? "المؤسسة والمدربة" : "Founder & instructor"}</span><b>Fatma Nour</b></div>
          </div>
          <div className="about-copy">
            <span className="section-kicker">{ar ? "من يقف خلف Kids Coding Hub؟" : "Who is behind Kids Coding Hub?"}</span>
            <h2 id="about-title">{ar ? "أنا فاطمة نور؛ أجمع بين خبرة التعليم وبناء التقنية." : "I'm Fatma Nour—combining teaching experience with real technical practice."}</h2>
            <p>{ar ? "مدربة برمجة وذكاء اصطناعي للأطفال والمبتدئين، ومهندسة بيانات تصمّم منصات تعلم تفاعلية. هدفي أن يشعر الطفل أن التقنية مساحة يفهمها ويصنع داخلها، لا شيئًا يستهلكه فقط." : "I am a coding and AI instructor for kids and beginners, and a data engineer who builds interactive learning products. My goal is for children to see technology as something they can understand and create—not only consume."}</p>
            <div className="founder-facts"><div><b>+4</b><span>{ar ? "سنوات في التعليم العملي" : "Years in hands-on teaching"}</span></div><div><b>18K+</b><span>{ar ? "متابع في المجتمع المهني" : "Professional community"}</span></div><div><b>AR / EN</b><span>{ar ? "تعليم عربي ومصطلحات عالمية" : "Arabic-first, globally relevant"}</span></div></div>
            <p className="availability-note">
              <span aria-hidden="true" />
              {ar
                ? "من مصر • متاحة للتدريب عن بُعد، والتعاون مع جهات الخليج، والانتقال للفرصة المناسبة"
                : "Based in Egypt • Available for remote delivery, GCC partnerships, and relocation"}
            </p>
            <div className="social-row">
              <ExternalLink href={SOCIAL.linkedin}>LinkedIn</ExternalLink><ExternalLink href={SOCIAL.instagram}>Instagram</ExternalLink><ExternalLink href={SOCIAL.facebook}>Facebook</ExternalLink><ExternalLink href={SOCIAL.youtube}>YouTube</ExternalLink><a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
            </div>
            <div className="tech-proof">
              <div className="tech-proof-head"><span>{ar ? "خبرة تقنية تدعم تجربة التعلّم" : "Technical work behind the learning"}</span><ExternalLink href={SOCIAL.github}>{ar ? "كل المشاريع" : "All projects"}<ArrowIcon /></ExternalLink></div>
              {technicalProof.map((project) => <ExternalLink href={project.href} key={project.title}><div><b>{project.title}</b><span>{ar ? project.textAr : project.textEn}</span></div><ArrowIcon /></ExternalLink>)}
            </div>
          </div>
        </section>

        <section className="content-section" id="content" aria-labelledby="content-title">
          <div className="section-intro split">
            <div><span className="section-kicker">{ar ? "تعلّم مجانًا" : "Learn for free"}</span><h2 id="content-title">{ar ? "شاهدي الفكرة، ثم جرّبيها مع طفلك." : "Watch the idea, then try it with your learner."}</h2></div>
            <p>{ar ? "فيديوهات عملية للأطفال، ومقالات تساعد أولياء الأمور والمدربين على اختيار بداية صحيحة." : "Practical videos for kids and useful guides that help parents and instructors choose a thoughtful start."}</p>
          </div>
          <div className="content-grid">
            <div className="video-column">
              <div className="content-channel"><Logo compact /><div><span>YouTube</span><b>@fatmanour1512</b></div><ExternalLink href={SOCIAL.youtube}>{ar ? "زيارة القناة" : "Visit channel"}<ArrowIcon /></ExternalLink></div>
              {videos.map((video) => <ExternalLink className="video-card" href={`https://www.youtube.com/watch?v=${video.id}`} key={video.id}><div className="video-thumb"><img src={video.image} alt="" width="480" height="270" loading="lazy" /><span>▶</span></div><div><small>{ar ? video.tagAr : video.tagEn}</small><h3>{ar ? video.titleAr : video.titleEn}</h3></div></ExternalLink>)}
            </div>
            <div className="blog-column">
              <div className="blog-logo"><Logo /><span>{ar ? "معرفة تساعدك على اتخاذ قرار أفضل" : "Guidance for better learning decisions"}</span></div>
              <div className="article-list">{articles.map((article, index) => <ExternalLink href={article.href} key={article.href}><span>0{index + 1}</span><h3>{ar ? article.titleAr : article.titleEn}</h3><ArrowIcon /></ExternalLink>)}</div>
              <ExternalLink className="text-cta" href={SOCIAL.blog}>{ar ? "اقرئي المزيد في المدونة" : "Read more on the blog"}<ArrowIcon /></ExternalLink>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-intro"><span className="section-kicker">{ar ? "أسئلة قبل البداية" : "Questions before starting"}</span><h2 id="faq-title">{ar ? "إجابات واضحة تساعدك على القرار." : "Clear answers to help you decide."}</h2><p>{ar ? "لو لم تجدي إجابتك، أرسلي العمر والهدف وسأساعدك في اختيار نقطة البداية." : "If your question is not here, share the age and goal and I will help you choose a starting point."}</p><a className="text-cta" href={waLink(parentMessage)} target="_blank" rel="noreferrer">{ar ? "اسألي فاطمة" : "Ask Fatma"}<ArrowIcon /></a></div>
          <div className="faq-list">{faqs.map((faq, index) => <details key={faq.qEn} open={index === 0}><summary><span>{ar ? faq.qAr : faq.qEn}</span><i>+</i></summary><p>{ar ? faq.aAr : faq.aEn}</p></details>)}</div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="contact-title">
          <div className="final-logo"><Logo /></div>
          <div><span>{ar ? "خطوة واضحة بدون ضغط" : "A clear next step without pressure"}</span><h2 id="contact-title">{ar ? "لا يحتاج طفلك إلى بداية مثالية؛ يحتاج إلى مشروع مناسب وخطوة واضحة." : "Your child does not need a perfect start; they need the right project and a clear next step."}</h2><p>{ar ? "أرسلي العمر والدولة وما يحب طفلك أن يصنعه، وسنقترح المسار الأول المناسب." : "Share the age, country, and what your child would like to make, and we will suggest a suitable first path."}</p></div>
          <div className="final-actions"><a className="button primary" href="#path-finder">{ar ? "اختبار المسار" : "Find a path"}<ArrowIcon /></a><a className="button secondary" href={waLink(parentMessage)} target="_blank" rel="noreferrer" onClick={() => trackLead("final_parent")}>WhatsApp</a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><a className="brand" href={sitePath(ar ? "/" : ENGLISH_PATH)}><Logo compact /><span className="brand-type"><b>Kids Coding Hub</b><small>{ar ? "نتعلّم • نبني • نشارك" : "Learn • Build • Share"}</small></span></a><p>{ar ? "تعليم برمجة وذكاء اصطناعي قائم على المشروعات للأطفال من 5 إلى 16 سنة." : "Project-based coding and AI learning for ages 5 to 16."}</p></div>
          <div className="footer-nav"><b>{ar ? "استكشف" : "Explore"}</b><a href="#programs">{ar ? "المسارات" : "Programs"}</a><a href="#path-finder">{ar ? "اختبار المسار" : "Path finder"}</a><a href="#schools">{ar ? "للمدارس" : "For schools"}</a><a href="#about">{ar ? "عن فاطمة" : "About Fatma"}</a></div>
          <div className="footer-nav"><b>{ar ? "تابعنا" : "Follow"}</b><ExternalLink href={SOCIAL.instagram}>Instagram</ExternalLink><ExternalLink href={SOCIAL.facebook}>Facebook</ExternalLink><ExternalLink href={SOCIAL.youtube}>YouTube</ExternalLink><ExternalLink href={SOCIAL.linkedin}>LinkedIn</ExternalLink></div>
          <div className="footer-contact"><b>{ar ? "جاهزة للبداية؟" : "Ready to begin?"}</b><p>{ar ? "أرسلي العمر والهدف والدولة." : "Share the age, goal, and country."}</p><a href={waLink(parentMessage)} target="_blank" rel="noreferrer">WhatsApp<ArrowIcon /></a></div>
        </div>
        <div className="footer-bottom"><p>© 2026 Kids Coding Hub — {ar ? "أسسته وتقدمه فاطمة نور." : "Founded and led by Fatma Nour."}</p><div><ExternalLink href={SOCIAL.blog}>{ar ? "المدونة" : "Blog"}</ExternalLink><ExternalLink href={SOCIAL.github}>GitHub</ExternalLink></div></div>
      </footer>

      <a className="floating-whatsapp" href={waLink(parentMessage)} target="_blank" rel="noreferrer" aria-label={ar ? "تواصلي عبر WhatsApp" : "Chat on WhatsApp"} onClick={() => trackLead("floating_whatsapp")}><span>WA</span><b>{ar ? "اسألي عن المسار" : "Ask about a path"}</b></a>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={ar ? "صور نتائج الاستبيان" : "Survey screenshots"} onClick={() => setLightbox(null)}>
          <button className="lightbox-close" type="button" onClick={() => setLightbox(null)} aria-label={ar ? "إغلاق" : "Close"}>×</button>
          <button className="lightbox-nav previous" type="button" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox - 1 + feedbackImages.length) % feedbackImages.length); }} aria-label={ar ? "الصورة السابقة" : "Previous image"}>‹</button>
          <img src={feedbackImages[lightbox].src} width="623" height="274" alt={ar ? feedbackImages[lightbox].altAr : feedbackImages[lightbox].altEn} onClick={(event) => event.stopPropagation()} />
          <button className="lightbox-nav next" type="button" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox + 1) % feedbackImages.length); }} aria-label={ar ? "الصورة التالية" : "Next image"}>›</button>
        </div>
      )}
    </div>
  );
}
