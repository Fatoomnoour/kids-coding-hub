import AnalyticsLink from "./AnalyticsLink";
import { BLOG_POSTS, type BlogPost } from "./blog-data";
import { ENGLISH_PATH, sitePath } from "./site-config";

type Language = "ar" | "en";

function postPath(post: BlogPost, language: Language) {
  return sitePath(`${language === "ar" ? "/blog/" : `${ENGLISH_PATH}blog/`}${post.slug}/`);
}

function whatsappUrl(language: Language) {
  const message = language === "ar"
    ? "مرحبًا أستاذة فاطمة، قرأت مقال Kids Coding Hub وأرغب في معرفة المستوى المناسب لطفلي. العمر: … الدولة/المدينة: … الخبرة: …"
    : "Hello Fatma, I read a Kids Coding Hub article and would like to know the right level for my child. Age: … Country/city: … Experience: …";
  return `https://wa.me/201097430973?text=${encodeURIComponent(message)}`;
}

export function BlogIndex({ language }: { language: Language }) {
  const ar = language === "ar";
  return (
    <main className="blog-page" dir={ar ? "rtl" : "ltr"}>
      <header className="blog-topbar">
        <a href={sitePath(ar ? "/" : ENGLISH_PATH)} className="blog-brand"><img src={sitePath("/media/kids-coding-hub-logo.png")} width="1536" height="1024" alt="Kids Coding Hub" /></a>
        <nav aria-label={ar ? "تنقل المدونة" : "Blog navigation"}>
          <a href={sitePath(ar ? "/#programs" : `${ENGLISH_PATH}#programs`)}>{ar ? "المستويات" : "Levels"}</a>
          <a href={sitePath(ar ? "/#path-finder" : `${ENGLISH_PATH}#path-finder`)}>{ar ? "اختبار المسار" : "Path finder"}</a>
          <a href={sitePath(ar ? "/#results" : `${ENGLISH_PATH}#results`)}>{ar ? "النتائج" : "Results"}</a>
        </nav>
        <a className="blog-language" href={sitePath(ar ? `${ENGLISH_PATH}blog/` : "/blog/")}>{ar ? "EN" : "عربي"}</a>
      </header>
      <section className="blog-hero">
        <span className="blog-kicker">{ar ? "مدونة Kids Coding Hub" : "Kids Coding Hub journal"}</span>
        <h1>{ar ? "أفكار تساعدك على اختيار بداية صحيحة." : "Practical ideas for choosing a thoughtful start."}</h1>
        <p>{ar ? "أدلة قصيرة من واقع تعليم البرمجة للأطفال: العمر، الأداة، المشروع، والأسئلة التي تستحق إجابة قبل الحجز." : "Short, practical guides from teaching coding to children: age, tools, projects, and the questions worth answering before booking."}</p>
      </section>
      <section className="blog-index-section" aria-labelledby="blog-index-title">
        <div className="blog-section-heading"><span>{ar ? "اختاري سؤالًا" : "Choose a question"}</span><h2 id="blog-index-title">{ar ? "محتوى مفيد للأهل، لا حشو للكلمات." : "Useful for parents, not keyword filler."}</h2></div>
        <div className="blog-card-grid">
          {BLOG_POSTS.map((post, index) => (
            <a className="blog-card" key={post.slug} href={postPath(post, language)}>
              <span className="blog-card-number">0{index + 1}</span>
              <small>{ar ? post.categoryAr : post.categoryEn} · {ar ? post.readTimeAr : post.readTimeEn}</small>
              <h2>{ar ? post.titleAr : post.titleEn}</h2>
              <p>{ar ? post.excerptAr : post.excerptEn}</p>
              <b>{ar ? "اقرئي المقال" : "Read the article"} <span aria-hidden="true">↗</span></b>
            </a>
          ))}
        </div>
      </section>
      <section className="blog-index-cta">
        <div><span>{ar ? "لم تجدي الإجابة؟" : "Still deciding?"}</span><h2>{ar ? "أرسلي عمر الطفل واهتمامه، وسنساعدك في اختيار الـLevel." : "Share the learner’s age and interests, and we will help confirm the right level."}</h2></div>
        <AnalyticsLink href={whatsappUrl(language)} source="blog_index_cta" params={{ page_language: language }} className="blog-cta-button">{ar ? "اسألي فاطمة" : "Ask Fatma"}</AnalyticsLink>
      </section>
      <footer className="blog-footer"><a href={sitePath(ar ? "/" : ENGLISH_PATH)}>{ar ? "← العودة إلى Kids Coding Hub" : "← Back to Kids Coding Hub"}</a><span>© 2026 Kids Coding Hub</span></footer>
    </main>
  );
}

export function BlogPostView({ post, language }: { post: BlogPost; language: Language }) {
  const ar = language === "ar";
  const relatedCoursePath = sitePath(`${ar ? "/courses/" : `${ENGLISH_PATH}courses/`}${post.relatedCourseSlug}/`);
  return (
    <main className="blog-page blog-post-page" dir={ar ? "rtl" : "ltr"}>
      <header className="blog-topbar">
        <a href={sitePath(ar ? "/" : ENGLISH_PATH)} className="blog-brand"><img src={sitePath("/media/kids-coding-hub-logo.png")} width="1536" height="1024" alt="Kids Coding Hub" /></a>
        <nav aria-label={ar ? "تنقل المقال" : "Article navigation"}><a href={sitePath(ar ? "/blog/" : `${ENGLISH_PATH}blog/`)}>{ar ? "كل المقالات" : "All articles"}</a><a href={relatedCoursePath}>{ar ? "المستوى المرتبط" : "Related level"}</a></nav>
        <a className="blog-language" href={sitePath(ar ? `${ENGLISH_PATH}blog/${post.slug}/` : `/blog/${post.slug}/`)}>{ar ? "EN" : "عربي"}</a>
      </header>
      <article className="blog-article">
        <div className="blog-breadcrumb"><a href={sitePath(ar ? "/" : ENGLISH_PATH)}>{ar ? "الرئيسية" : "Home"}</a><span>/</span><a href={sitePath(ar ? "/blog/" : `${ENGLISH_PATH}blog/`)}>{ar ? "المدونة" : "Blog"}</a><span>/</span><b>{ar ? post.categoryAr : post.categoryEn}</b></div>
        <header className="blog-article-header">
          <span className="blog-kicker">{ar ? post.categoryAr : post.categoryEn}</span>
          <h1>{ar ? post.titleAr : post.titleEn}</h1>
          <p>{ar ? post.excerptAr : post.excerptEn}</p>
          <div className="blog-article-meta"><span>{ar ? `نُشر في ${post.publishedAt}` : `Published ${post.publishedAt}`}</span><span>{ar ? post.readTimeAr : post.readTimeEn}</span><span>Fatma Nour</span></div>
        </header>
        <div className="blog-article-body">
          {post.sections.map((section) => (
            <section key={section.headingEn}>
              <h2>{ar ? section.headingAr : section.headingEn}</h2>
              {(ar ? section.paragraphsAr : section.paragraphsEn).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {(ar ? section.pointsAr : section.pointsEn) ? <ul>{(ar ? section.pointsAr : section.pointsEn)?.map((point) => <li key={point}>{point}</li>)}</ul> : null}
            </section>
          ))}
        </div>
        <aside className="blog-article-next"><span>{ar ? "الخطوة التالية" : "Next step"}</span><h2>{ar ? "هل تريدين معرفة المستوى الأنسب؟" : "Want to confirm the right level?"}</h2><p>{ar ? "شاهدي تفاصيل المستوى المرتبط أو أرسلي بيانات الطفل قبل التسجيل." : "View the related level or share the learner’s details before enrolment."}</p><div><a className="blog-secondary-button" href={relatedCoursePath}>{ar ? "شاهدي المستوى" : "View the level"}</a><AnalyticsLink href={whatsappUrl(language)} source="blog_article_cta" params={{ page_language: language, article_slug: post.slug, course_slug: post.relatedCourseSlug }} className="blog-cta-button">{ar ? "اسألي فاطمة" : "Ask Fatma"}</AnalyticsLink></div></aside>
      </article>
      <footer className="blog-footer"><a href={sitePath(ar ? "/blog/" : `${ENGLISH_PATH}blog/`)}>{ar ? "← كل المقالات" : "← All articles"}</a><span>© 2026 Kids Coding Hub</span></footer>
    </main>
  );
}
