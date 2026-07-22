import { ENGLISH_PATH, sitePath } from "./site-config";

export default function NotFound() {
  const homeUrl = sitePath("/");
  const englishUrl = sitePath(ENGLISH_PATH);
  const redirectEnglish = `(() => {
    const path = window.location.pathname.replace(/\\/+$/, "");
    if (path.endsWith("/en")) window.location.replace(${JSON.stringify(englishUrl)});
  })();`;

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        background: "#f7fbff",
        color: "#102a43",
        textAlign: "center",
      }}
    >
      <script dangerouslySetInnerHTML={{ __html: redirectEnglish }} />
      <div>
        <p style={{ fontWeight: 800, color: "#087f62" }}>Kids Coding Hub</p>
        <h1 style={{ fontSize: "clamp(2rem, 8vw, 4rem)", margin: "8px 0" }}>404</h1>
        <p>الصفحة غير موجودة — Page not found.</p>
        <a
          href={homeUrl}
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 20px",
            borderRadius: "999px",
            background: "#087f62",
            color: "white",
            textDecoration: "none",
            fontWeight: 800,
          }}
        >
          العودة إلى الرئيسية · Back home
        </a>
      </div>
    </main>
  );
}
