# إصلاح صفحة اللغة الإنجليزية على GitHub Pages

هذا التحديث يمنع خطأ `404` في النسخة الإنجليزية بطريقتين:

- ينشئ ملفًا مباشرًا باسم `en.html` أثناء كل عملية نشر.
- يحوّل الرابط القديم `/en/` تلقائيًا إلى الملف الجديد.

## طريقة التركيب

1. فكّي ضغط ملف التحديث.
2. انسخي المجلدين `.github` و`app` إلى داخل مجلد المشروع الحالي
   `Kids-Coding-Hub-GitHub`.
3. وافقي على **Replace the files in the destination**.
4. افتحي CMD داخل مجلد المشروع وشغّلي:

```bat
git add .
git commit -m "Fix English page on GitHub Pages"
git push
```

5. انتظري ظهور العلامة الخضراء في تبويب **Actions**.

الرابط الإنجليزي بعد النشر:

```text
https://fatoomnoour.github.io/kids-coding-hub/en.html
```

لا تعيدي تنفيذ `git init` ولا تضيفي `remote` من جديد.
