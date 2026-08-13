import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSE_LEVELS, getCourseLevel } from "../../course-data";
import { absoluteSiteUrl, ENGLISH_PATH, sitePath } from "../../site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return COURSE_LEVELS.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseLevel(slug);
  if (!course) return {};
  const path = `/courses/${course.slug}/`;
  const title = `${course.titleAr} | كورس برمجة للأطفال ${course.ageAr}`;
  const description = `${course.titleAr}: Level عملي للأطفال ${course.ageAr} لمدة 3 أشهر و24 جلسة Live. ${course.projectAr}.`;
  return {
    title,
    description,
    alternates: { canonical: absoluteSiteUrl(path), languages: { ar: absoluteSiteUrl(path), en: absoluteSiteUrl(`${ENGLISH_PATH}courses/${course.slug}/`) } },
    openGraph: {
      type: "website",
      url: absoluteSiteUrl(path),
      title,
      description,
      locale: "ar_EG",
      images: [{ url: absoluteSiteUrl("/media/kids-coding-hub-og.jpg"), width: 1200, height: 630, alt: course.titleAr }],
    },
    twitter: { card: "summary_large_image", title, description, images: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")] },
  };
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.4 17 19 7" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default async function CoursePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseLevel(slug);
  if (!course) notFound();

  const whatsappMessage = `مرحبًا أستاذة فاطمة، أرغب في معرفة هل Level «${course.titleAr}» مناسب لطفلي.\n\nالعمر: …\nالخبرة السابقة: …\nالدولة/المدينة: …\nالوقت المناسب للجلسات: …\n\nأرغب في تأكيد المستوى وخطوة التسجيل.`;
  const whatsappUrl = `https://wa.me/201097430973?text=${encodeURIComponent(whatsappMessage)}`;
  const courseUrl = absoluteSiteUrl(`/courses/${course.slug}/`);
  const relatedCourses = COURSE_LEVELS.filter((item) => item.slug !== course.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${courseUrl}#course`,
        name: course.titleAr,
        alternateName: course.titleEn,
        description: `${course.descriptionAr} مدة الـ Level 3 أشهر و24 جلسة Live.`,
        url: courseUrl,
        inLanguage: ["ar", "en"],
        timeRequired: "P3M",
        educationalLevel: "Beginner to intermediate",
        teaches: course.skillsAr,
        provider: { "@type": "EducationalOrganization", name: "Kids Coding Hub", url: absoluteSiteUrl("/") },
        coursePrerequisites: "يتم تأكيد مستوى البداية بعد اختبار قصير أو محادثة مع ولي الأمر.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Kids Coding Hub", item: absoluteSiteUrl("/") },
          { "@type": "ListItem", position: 2, name: "المستويات", item: absoluteSiteUrl("/#programs") },
          { "@type": "ListItem", position: 3, name: course.titleAr, item: courseUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: course.faqsAr.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      },
    ],
  };

  return (
    <main className={`course-page course-tone-${course.order}`} dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="course-topbar">
        <a href={sitePath("/")} className="course-brand" aria-label="Kids Coding Hub — الرئيسية"><img src={sitePath("/media/kids-coding-hub-logo.png")} width="1536" height="1024" alt="Kids Coding Hub" /></a>
        <nav aria-label="التنقل داخل الصفحة"><a href="#journey">الرحلة</a><a href="#tools">المهارات</a><a href="#parents">للآباء</a><a href="#faq">الأسئلة</a></nav>
        <a className="course-top-cta" href={whatsappUrl} target="_blank" rel="noreferrer">اسألي عن الـ Level</a>
      </header>

      <section className="course-hero">
        <div className="course-hero-copy">
          <div className="course-breadcrumb"><a href={sitePath("/")}>الرئيسية</a><span>/</span><a href={sitePath("/#programs")}>المستويات</a><span>/</span><b>{course.titleAr}</b></div>
          <span className={`course-status ${course.available ? "open" : "waitlist"}`}>{course.statusAr}</span>
          <p className="course-eyebrow">{course.eyebrowAr}</p>
          <h1>{course.titleAr}</h1>
          <p className="course-lead">{course.descriptionAr}</p>
          <div className="course-actions"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="course-button primary">اطلبي تقييم المستوى <ArrowIcon /></a><a href="#journey" className="course-button ghost">شاهدي ما سيتعلمه طفلك</a></div>
          <p className="course-hero-note"><CheckIcon />{course.heroNoteAr}</p>
        </div>
        <aside className="course-project-card" aria-label="معلومات المستوى">
          <div className="course-project-orbit orbit-one" /><div className="course-project-orbit orbit-two" />
          <span>المشروع في نهاية الـ Level</span>
          <div className="course-project-window"><i /><i /><i /><b>{course.toolAr}</b><em>{course.projectAr}</em><small>{course.outcomeAr}</small></div>
          <div className="course-project-caption"><span>{course.ageAr}</span><b>مشروع يصنعه الطفل ويشرحه بنفسه</b></div>
        </aside>
      </section>

      <section className="course-stat-band" aria-label="تفاصيل المستوى">
        <div><b>3</b><span>أشهر لكل Level</span></div>
        <div><b>24</b><span>جلسة Live</span></div>
        <div><b>8</b><span>جلسات شهريًا</span></div>
        <div><b>5–8</b><span>طلاب في المجموعة</span></div>
      </section>

      <section className="course-section course-intro" id="overview">
        <div className="course-section-heading"><span>لماذا هذا الـ Level؟</span><h2>ليس هدفنا أن يحفظ الطفل الأداة؛ بل أن يستخدمها ليصنع شيئًا يفهمه.</h2></div>
        <div className="course-outcome-card"><small>بنهاية الـ Level</small><b>{course.outcomeAr}</b><p>نبدأ من عمر الطفل وخبرته، ثم نتابع التقدم حتى يصبح المشروع نتيجة ملموسة يمكن مشاركتها مع الأسرة.</p></div>
      </section>

      <section className="course-section course-skills-section" id="skills">
        <div className="course-section-heading"><span>ما الذي سيتعلمه؟</span><h2>مهارات عملية تتراكم داخل مشروع واحد واضح.</h2></div>
        <div className="course-skills-grid">{course.skillsAr.map((skill, index) => <article key={skill}><span>0{index + 1}</span><b>{skill}</b><p>{index === 0 ? "نحوّل الفكرة إلى خطوات بسيطة قابلة للتجربة." : index === 1 ? "نضيف تفاصيل تجعل المشروع حيًا وممتعًا." : index === 2 ? "نربط الأجزاء لتعمل معًا بشكل مفهوم." : "نتعلم الملاحظة والتحسين بدل الخوف من الخطأ."}</p></article>)}</div>
      </section>

      <section className="course-section course-tools-section" id="tools">
        <div className="course-section-heading centered"><span>المهارات والأدوات</span><h2>ماذا سيستخدم الطفل؟ وما الذي سيخرج به من كل جزء؟</h2><p>نشرح الأداة والغرض والتطبيق العملي بوضوح، حتى تعرفي ما الذي يتعلمه طفلك بعيدًا عن العناوين العامة.</p></div>
        <div className="course-tools-table-wrap">
          <table className="course-tools-table">
            <thead><tr><th>المجال</th><th>الأداة</th><th>تطبيق عملي داخل الجلسات</th><th>الناتج</th></tr></thead>
            <tbody>{course.toolRows.map((row) => <tr key={row.areaAr}><td><b>{row.areaAr}</b></td><td>{row.toolAr}</td><td>{row.practiceAr}</td><td><span>{row.outcomeAr}</span></td></tr>)}</tbody>
          </table>
        </div>
        <p className="course-tools-note"><CheckIcon />المحتوى يتدرج حسب سرعة الطفل وخبرته؛ لا ننتقل إلى التعقيد قبل أن يصبح التطبيق الحالي مفهومًا.</p>
      </section>

      <section className="course-section course-journey" id="journey">
        <div className="course-section-heading centered"><span>خريطة الـ 3 أشهر</span><h2>كل شهر له هدف واضح، وكل جلسة تقرّب الطفل من مشروعه.</h2><p>24 جلسة Live موزعة على 3 مراحل، مع تطبيق ومراجعة وتطوير مستمر.</p></div>
        <div className="course-months">{course.monthsAr.map((month, index) => <article key={month.label}><div className="course-month-marker"><b>0{index + 1}</b><i /></div><small>{month.label}</small><h3>{month.title}</h3><p>{month.text}</p></article>)}</div>
      </section>

      <section className="course-final-project">
        <div><span>النتيجة الملموسة</span><h2>{course.projectAr}</h2><p>في نهاية المستوى لا يستلم الطفل شهادة فقط؛ بل يقدّم مشروعًا يعمل، ويستطيع شرحه ومشاركة فكرته.</p></div>
        <div className="course-project-ticket"><small>Demo Day</small><b>Build · Test · Share</b><span>مشروع نهاية الـ Level</span></div>
      </section>

      <section className="course-section course-parent-section" id="parents">
        <div className="course-parent-card"><span>للآباء والأمهات</span><h2>تعرفين ما الذي يحدث، وما الذي سيتحسن، وما هي الخطوة التالية.</h2><p>المتابعة ليست رسائل عامة. نوضح نقطة البداية وهدف الـ Level ومشروع النهاية، ثم نراجع الجاهزية قبل الانتقال.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="course-text-link">تحدثي مع فاطمة عن مستوى طفلك <ArrowIcon /></a></div>
        <div className="course-parent-list">{course.parentAr.map((item, index) => <div key={item}><span><CheckIcon /></span><p>{item}</p><b>0{index + 1}</b></div>)}</div>
      </section>

      <section className="course-section course-faq-section" id="faq">
        <div className="course-section-heading"><span>أسئلة قبل التسجيل</span><h2>إجابات مباشرة تساعدك على اتخاذ القرار.</h2></div>
        <div className="course-faq-list">{course.faqsAr.map((item, index) => <details key={item.q} open={index === 0}><summary>{item.q}<i>+</i></summary><p>{item.a}</p></details>)}</div>
        <div className="course-faq-cta"><div><span>ما زلتِ تقارنين بين المستويات؟</span><b>أرسلي العمر والخبرة والوقت المناسب، وسنؤكد لكِ الـ Level والمجموعة المتاحة قبل الحجز.</b></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="course-button primary">اسألي فاطمة الآن <ArrowIcon /></a></div>
      </section>

      <section className="course-related-section">
        <div className="course-section-heading"><span>مستويات أخرى</span><h2>ابدئي بالمكان المناسب لطفلك، لا بالمكان الأكثر صعوبة.</h2></div>
        <div className="course-related-grid">{relatedCourses.map((item) => <a key={item.slug} href={sitePath(`/courses/${item.slug}/`)}><span>{item.ageAr}</span><b>{item.titleAr}</b><p>{item.projectAr}</p><ArrowIcon /></a>)}</div>
      </section>

      <section className="course-bottom-cta">
        <div><span>خطوة أولى بدون ضغط</span><h2>أرسلي عمر طفلك واهتمامه، وسنؤكد الـ Level المناسب قبل أي تسجيل.</h2><p>يمكنكِ سؤال فاطمة عن المجموعة المتاحة، الموعد المناسب، وطريقة التسجيل.</p></div>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="course-button light">اطلبي تقييم المستوى <ArrowIcon /></a>
      </section>

      <footer className="course-footer"><a href={sitePath("/")}>← العودة إلى Kids Coding Hub</a><span>© 2026 Kids Coding Hub</span></footer>
    </main>
  );
}
