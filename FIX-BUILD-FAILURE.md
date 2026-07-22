# إصلاح فشل Build في GitHub Pages

سبب الخطأ أن بيئة GitHub صدّرت الصفحة الإنجليزية مباشرة باسم
`out/en.html`، بينما النسخة السابقة من الـWorkflow كانت تبحث أولًا عن
`out/en/index.html` وتتوقف بخطأ.

التحديث الجديد يتعامل تلقائيًا مع الشكلين، ثم يتأكد من وجود `en.html` قبل
رفع الموقع.

## التثبيت

1. انسخي مجلد `.github` من ملف الإصلاح إلى داخل مجلد مشروعك الحالي.
2. وافقي على **Replace the file in the destination**.
3. شغّلي الأوامر التالية من داخل المشروع:

```bat
git add .github/workflows/deploy-pages.yml
git commit -m "Fix GitHub Pages English build"
git push
```

4. انتظري علامة النجاح الخضراء في تبويب **Actions**.
5. افتحي الصفحة الإنجليزية:

```text
https://fatoomnoour.github.io/kids-coding-hub/en.html
```

لا تعيدي `git init` ولا تنشئي Repository جديدًا.
