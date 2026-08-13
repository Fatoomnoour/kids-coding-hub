import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSE_LEVELS, getCourseLevel } from "../../../course-data";
import { absoluteSiteUrl, ENGLISH_PATH, sitePath } from "../../../site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return COURSE_LEVELS.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseLevel(slug);
  if (!course) return {};
  const path = `${ENGLISH_PATH}courses/${course.slug}/`;
  const title = `${course.titleEn} | Coding Classes for Kids ${course.ageEn.replace("Ages ", "")}`;
  const description = `${course.titleEn}: a 3-month, 24-live-session coding level for ${course.ageEn.toLowerCase()}. Final project: ${course.projectEn}.`;
  return {
    title,
    description,
    alternates: { canonical: absoluteSiteUrl(path), languages: { ar: absoluteSiteUrl(`/courses/${course.slug}/`), en: absoluteSiteUrl(path) } },
    openGraph: { type: "website", url: absoluteSiteUrl(path), title, description, locale: "en_US", images: [{ url: absoluteSiteUrl("/media/kids-coding-hub-og.jpg"), width: 1200, height: 630, alt: course.titleEn }] },
    twitter: { card: "summary_large_image", title, description, images: [absoluteSiteUrl("/media/kids-coding-hub-og.jpg")] },
  };
}

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function CheckIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.4 17 19 7" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" /></svg>; }

export default async function EnglishCoursePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseLevel(slug);
  if (!course) notFound();
  const path = `${ENGLISH_PATH}courses/${course.slug}/`;
  const courseUrl = absoluteSiteUrl(path);
  const whatsappMessage = `Hello Fatma, I would like to know whether the “${course.titleEn}” level is suitable for my child.\n\nAge: …\nPrevious experience: …\nCountry/city: …\nPreferred session time: …\n\nI would like to confirm the right level and the registration step.`;
  const whatsappUrl = `https://wa.me/201097430973?text=${encodeURIComponent(whatsappMessage)}`;
  const relatedCourses = COURSE_LEVELS.filter((item) => item.slug !== course.slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Course", "@id": `${courseUrl}#course`, name: course.titleEn, description: `${course.descriptionEn} This level lasts 3 months and includes 24 live sessions.`, url: courseUrl, inLanguage: "en", timeRequired: "P3M", educationalLevel: "Beginner to intermediate", teaches: course.skillsEn, provider: { "@type": "EducationalOrganization", name: "Kids Coding Hub", url: absoluteSiteUrl("/") }, coursePrerequisites: "Starting level is confirmed after a short check or parent conversation." },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Kids Coding Hub", item: absoluteSiteUrl(ENGLISH_PATH) }, { "@type": "ListItem", position: 2, name: "Learning levels", item: absoluteSiteUrl(`${ENGLISH_PATH}#programs`) }, { "@type": "ListItem", position: 3, name: course.titleEn, item: courseUrl }] },
      { "@type": "FAQPage", mainEntity: course.faqsEn.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) },
    ],
  };

  return (
    <main className={`course-page course-tone-${course.order}`} dir="ltr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="course-topbar">
        <a href={sitePath(ENGLISH_PATH)} className="course-brand" aria-label="Kids Coding Hub — home"><img src={sitePath("/media/kids-coding-hub-logo.png")} width="1536" height="1024" alt="Kids Coding Hub" /></a>
        <nav aria-label="Page navigation"><a href="#journey">Journey</a><a href="#tools">Skills</a><a href="#parents">For parents</a><a href="#faq">Questions</a></nav>
        <a className="course-top-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Ask about this level</a>
      </header>
      <section className="course-hero">
        <div className="course-hero-copy">
          <div className="course-breadcrumb"><a href={sitePath(ENGLISH_PATH)}>Home</a><span>/</span><a href={sitePath(`${ENGLISH_PATH}#programs`)}>Levels</a><span>/</span><b>{course.titleEn}</b></div>
          <span className={`course-status ${course.available ? "open" : "waitlist"}`}>{course.statusEn}</span>
          <p className="course-eyebrow">{course.eyebrowEn}</p><h1>{course.titleEn}</h1><p className="course-lead">{course.descriptionEn}</p>
          <div className="course-actions"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="course-button primary">Request a level assessment <ArrowIcon /></a><a href="#journey" className="course-button ghost">See the learning journey</a></div>
          <p className="course-hero-note"><CheckIcon />{course.heroNoteEn}</p>
        </div>
        <aside className="course-project-card" aria-label="Level information"><div className="course-project-orbit orbit-one" /><div className="course-project-orbit orbit-two" /><span>Project at the end of the level</span><div className="course-project-window"><i /><i /><i /><b>{course.toolEn}</b><em>{course.projectEn}</em><small>{course.outcomeEn}</small></div><div className="course-project-caption"><span>{course.ageEn}</span><b>A project learners build and explain</b></div></aside>
      </section>
      <section className="course-stat-band" aria-label="Course facts"><div><b>3</b><span>Months per level</span></div><div><b>24</b><span>Live sessions</span></div><div><b>8</b><span>Sessions each month</span></div><div><b>5–8</b><span>Learners per group</span></div></section>
      <section className="course-section course-intro" id="overview"><div className="course-section-heading"><span>Why this level?</span><h2>The goal is not to memorise a tool. It is to use it to build something the learner understands.</h2></div><div className="course-outcome-card"><small>By the end of the level</small><b>{course.outcomeEn}</b><p>We start from the learner’s age and experience, then support progress until the project is a concrete result they can share.</p></div></section>
      <section className="course-section course-skills-section" id="skills"><div className="course-section-heading"><span>What will they learn?</span><h2>Practical skills that grow inside one clear project.</h2></div><div className="course-skills-grid">{course.skillsEn.map((skill, index) => <article key={skill}><span>0{index + 1}</span><b>{skill}</b><p>{index === 0 ? "Turn an idea into simple, testable steps." : index === 1 ? "Add details that make a project feel alive and engaging." : index === 2 ? "Connect parts so they work together in a clear way." : "Observe, improve, and learn without fearing mistakes."}</p></article>)}</div></section>
      <section className="course-section course-tools-section" id="tools"><div className="course-section-heading centered"><span>Skills and tools</span><h2>What will the learner use, and what will they create from each part?</h2><p>We make the tool, purpose, practice, and outcome clear so families know what learning looks like beyond broad course labels.</p></div><div className="course-tools-table-wrap"><table className="course-tools-table"><thead><tr><th>Area</th><th>Tool</th><th>Live-session practice</th><th>Outcome</th></tr></thead><tbody>{course.toolRows.map((row) => <tr key={row.areaEn}><td><b>{row.areaEn}</b></td><td>{row.toolEn}</td><td>{row.practiceEn}</td><td><span>{row.outcomeEn}</span></td></tr>)}</tbody></table></div><p className="course-tools-note"><CheckIcon />The content adapts to learner pace and experience; we do not add complexity before the current practice is understood.</p></section>
      <section className="course-section course-journey" id="journey"><div className="course-section-heading centered"><span>The 3-month map</span><h2>Every month has a clear goal, and every session moves the learner toward a finished project.</h2><p>24 live sessions across three stages, with practice, review, and continuous development.</p></div><div className="course-months">{course.monthsEn.map((month, index) => <article key={month.label}><div className="course-month-marker"><b>0{index + 1}</b><i /></div><small>{month.label}</small><h3>{month.title}</h3><p>{month.text}</p></article>)}</div></section>
      <section className="course-final-project"><div><span>A concrete outcome</span><h2>{course.projectEn}</h2><p>At the end of a level, learners do not only receive a certificate. They present a working project and explain their idea.</p></div><div className="course-project-ticket"><small>Demo Day</small><b>Build · Test · Share</b><span>End-of-level project</span></div></section>
      <section className="course-section course-parent-section" id="parents"><div className="course-parent-card"><span>For parents</span><h2>Know what is happening, what is improving, and what comes next.</h2><p>Follow-up is not generic messaging. We clarify the starting point, level outcome, and final project, then review readiness before progression.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="course-text-link">Talk to Fatma about your learner’s level <ArrowIcon /></a></div><div className="course-parent-list">{course.parentEn.map((item, index) => <div key={item}><span><CheckIcon /></span><p>{item}</p><b>0{index + 1}</b></div>)}</div></section>
      <section className="course-section course-faq-section" id="faq"><div className="course-section-heading"><span>Questions before enrolling</span><h2>Clear answers to help you decide.</h2></div><div className="course-faq-list">{course.faqsEn.map((item, index) => <details key={item.q} open={index === 0}><summary>{item.q}<i>+</i></summary><p>{item.a}</p></details>)}</div><div className="course-faq-cta"><div><span>Still comparing levels?</span><b>Send the learner’s age, experience, and preferred time, and we will confirm the suitable level and available group before you book.</b></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="course-button primary">Ask Fatma now <ArrowIcon /></a></div></section>
      <section className="course-related-section"><div className="course-section-heading"><span>Other levels</span><h2>Start where your learner is ready—not where the content is hardest.</h2></div><div className="course-related-grid">{relatedCourses.map((item) => <a key={item.slug} href={sitePath(`${ENGLISH_PATH}courses/${item.slug}/`)}><span>{item.ageEn}</span><b>{item.titleEn}</b><p>{item.projectEn}</p><ArrowIcon /></a>)}</div></section>
      <section className="course-bottom-cta"><div><span>A clear first step, without pressure</span><h2>Share your learner’s age and interests, and we will confirm the right level before any enrolment.</h2><p>Ask Fatma about the available group, a suitable schedule, and the registration process.</p></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="course-button light">Request a level assessment <ArrowIcon /></a></section>
      <footer className="course-footer"><a href={sitePath(ENGLISH_PATH)}>← Back to Kids Coding Hub</a><span>© 2026 Kids Coding Hub</span></footer>
    </main>
  );
}
