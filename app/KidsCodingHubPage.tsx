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
    introAr: "أول خطوة ممتعة لفهم التسلسل والحركة وصناعة قصة تفاعلية.",
    introEn: "A playful first step into sequencing, motion, and interactive stories.",
    outcomeAr: "يفكر بالخطوات ويشرح فكرته بثقة",
    outcomeEn: "Think in steps and explain ideas with confidence",
    projectAr: "قصة أو لعبة قصيرة من صنع الطفل",
    projectEn: "A short story or game made by the learner",
    skills: ["Stories", "Motion", "Logic"],
    tone: "yellow",
  },
  {
    ageAr: "8–11 سنة",
    ageEn: "Ages 8–11",
    titleAr: "صانع ألعاب Scratch",
    titleEn: "Scratch Game Maker",
    introAr: "من فكرة على الورق إلى لعبة تعمل ويمكن مشاركتها مع العائلة.",
    introEn: "From an idea on paper to a working game worth sharing.",
    outcomeAr: "يستخدم الأحداث والشروط والتكرار",
    outcomeEn: "Use events, conditions, and loops",
    projectAr: "لعبة كاملة بشخصيات ونقاط وتحديات",
    projectEn: "A complete game with characters, scores, and challenges",
    skills: ["Games", "Loops", "Creativity"],
    tone: "orange",
  },
  {
    ageAr: "11–14 سنة",
    ageEn: "Ages 11–14",
    titleAr: "باني مشاريع Python",
    titleEn: "Python Project Builder",
    introAr: "انتقال من البرمجة المرئية إلى كتابة كود حقيقي بمشروعات واضحة.",
    introEn: "Move from visual blocks to real code through clear projects.",
    outcomeAr: "يكتب كودًا وينظمه ويحل أخطاءه",
    outcomeEn: "Write, organize, and debug real code",
    projectAr: "لعبة نصية أو أداة ذكية صغيرة",
    projectEn: "A text game or a useful mini tool",
    skills: ["Python", "Problem Solving", "Debugging"],
    tone: "blue",
  },
  {
    ageAr: "12–16 سنة",
    ageEn: "Ages 12–16",
    titleAr: "مختبر Python والـAI",
    titleEn: "Python & AI Lab",
    introAr: "تجارب مبسطة تربط البيانات والذكاء الاصطناعي بمشكلات من الواقع.",
    introEn: "Friendly experiments connecting data and AI to real-world problems.",
    outcomeAr: "يفهم كيف تعمل النماذج ويستخدمها بوعي",
    outcomeEn: "Understand how models work and use them responsibly",
    projectAr: "تطبيق بيانات أو نموذج AI مبسط",
    projectEn: "A data app or an approachable AI prototype",
    skills: ["AI", "Data", "Responsible Tech"],
    tone: "mint",
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
    qAr: "هل يحتاج طفلي إلى خبرة سابقة؟",
    qEn: "Does my child need prior experience?",
    aAr: "لا. نبدأ من مستوى الطفل الحالي، ونستخدم اللعب والمشروعات قبل الانتقال إلى مفاهيم أكثر تقدّمًا.",
    aEn: "No. We start at the learner's current level and use play and projects before introducing more advanced ideas.",
  },
  {
    qAr: "هل التدريب أونلاين أم حضوري؟",
    qEn: "Is training online or in person?",
    aAr: "المسارات الفردية والجماعية متاحة أونلاين. ويمكن الاتفاق على ورش حضورية للمدارس والأكاديميات حسب الموقع والجدول.",
    aEn: "Individual and small-group tracks are available online. In-person workshops can be arranged with schools and academies by location and schedule.",
  },
  {
    qAr: "كيف أعرف المسار المناسب؟",
    qEn: "How do I choose the right track?",
    aAr: "استخدمي اختبار المسار المجاني في الصفحة؛ يستغرق أقل من دقيقة ويعطيك نقطة بداية مقترحة يمكن مناقشتها قبل الحجز.",
    aEn: "Use the free path finder on this page. It takes under a minute and gives you a suggested starting point to discuss before booking.",
  },
  {
    qAr: "ماذا ينجز الطفل في نهاية المسار؟",
    qEn: "What will my child complete?",
    aAr: "ينتهي كل مسار بمشروع يعمل ويمكن للطفل شرحه ومشاركته؛ قصة أو لعبة أو برنامج Python أو تجربة AI حسب المستوى.",
    aEn: "Every track ends with a working project the learner can explain and share—a story, game, Python program, or AI experiment depending on level.",
  },
  {
    qAr: "هل يمكن تصميم برنامج خاص لمدرسة أو Summer Camp؟",
    qEn: "Can you design a school or summer-camp program?",
    aAr: "نعم. يُصمم البرنامج حسب الأعمار والعدد والساعات وأهداف الجهة، مع خطة محتوى ومخرجات قابلة للقياس.",
    aEn: "Yes. Programs are tailored to age, group size, duration, and organizational goals, with a clear curriculum and measurable outcomes.",
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
    const ids = ["home", "paths", "programs", "method", "results", "schools", "about", "content", "faq"];
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
        ["النتائج", "results"],
        ["للمدارس", "schools"],
        ["عن فاطمة", "about"],
      ]
    : [
        ["Programs", "programs"],
        ["Method", "method"],
        ["Results", "results"],
        ["For schools", "schools"],
        ["About Fatma", "about"],
      ];

  const parentMessage = ar
    ? "مرحبًا أستاذة فاطمة، أريد معرفة المسار المناسب لطفلي.\nالعمر: __\nالخبرة السابقة: __\nالدولة: __"
    : "Hello Fatma, I would like to find the right learning path for my child.\nAge: __\nPrevious experience: __\nCountry: __";

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
        sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.youtube, SOCIAL.blog],
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
        sameAs: [SOCIAL.linkedin, SOCIAL.github, SOCIAL.instagram, SOCIAL.facebook, SOCIAL.youtube],
        knowsAbout: ["Scratch", "Python", "Artificial Intelligence", "Data Engineering", "Curriculum Design"],
      },
      {
        "@type": "WebSite",
        "@id": absoluteSiteUrl("/#website"),
        name: "Kids Coding Hub",
        url: absoluteSiteUrl("/"),
        inLanguage: ["ar", "en"],
        publisher: { "@id": absoluteSiteUrl("/#organization") },
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
                {ar ? "في Kids Coding Hub يتعلم الطفل Scratch وPython والذكاء الاصطناعي بطريقة بسيطة، عملية، وقائمة على المشروعات—مع فاطمة نور، مدربة برمجة وAI بخبرة أكثر من 4 سنوات." : "At Kids Coding Hub, children learn Scratch, Python, and AI through clear, hands-on, project-based learning with Fatma Nour, a coding and AI instructor with 4+ years of experience."}
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#path-finder" onClick={() => trackLead("hero_parent")}>{ar ? "اكتشفي المسار المناسب" : "Find the right path"}<ArrowIcon /></a>
                <a className="button secondary" href="#schools" onClick={() => trackLead("hero_organization")}>{ar ? "برنامج لمدرستك" : "Program for your school"}</a>
              </div>
              <p className="microcopy"><CheckIcon />{ar ? "اختبار مجاني • أقل من دقيقة • بدون تسجيل" : "Free • Under one minute • No signup"}</p>
              <div className="hero-proof" aria-label={ar ? "مؤشرات الثقة" : "Trust signals"}>
                <div><b>+4</b><span>{ar ? "سنوات خبرة" : "Years teaching"}</span></div>
                <div><b>18K+</b><span>{ar ? "مجتمع مهني" : "Professional community"}</span></div>
                <div><b>100%</b><span>{ar ? "شرح ممتع وبسيط*" : "Fun & clear teaching*"}</span></div>
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
                <h3>{ar ? program.titleAr : program.titleEn}</h3>
                <p>{ar ? program.introAr : program.introEn}</p>
                <div className="program-detail"><small>{ar ? "ما سيتقنه" : "Core outcome"}</small><b>{ar ? program.outcomeAr : program.outcomeEn}</b></div>
                <div className="program-detail"><small>{ar ? "المشروع النهائي" : "Final project"}</small><b>{ar ? program.projectAr : program.projectEn}</b></div>
                <div className="skill-list">{program.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                <a href="#path-finder">{ar ? "اختاري هذا المسار" : "Explore this path"}<ArrowIcon /></a>
              </article>
            ))}
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
          <div><span>{ar ? "الخطوة الأولى لا تحتاج قرارًا كبيرًا" : "The first step does not need to feel big"}</span><h2 id="contact-title">{ar ? "ابدئي باختبار دقيقة، أو أخبرينا عن طفلك." : "Start with a one-minute check, or tell us about your learner."}</h2><p>{ar ? "سنحدد معًا البداية الأنسب بدون ضغط أو وعود مبالغ فيها." : "We will choose a sensible starting point together—without pressure or exaggerated promises."}</p></div>
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
