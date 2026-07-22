# رفع Kids Coding Hub إلى GitHub Pages

هذه الخطوات مخصصة لحساب GitHub: `Fatoomnoour` ولمستودع باسم: `kids-coding-hub`.

## 1) أنشئي المستودع

افتحي:

```text
https://github.com/new
```

واختاري:

- Repository name: `kids-coding-hub`
- Visibility: `Public`
- لا تفعّلي README أو `.gitignore` أو License؛ لأنها موجودة داخل المشروع.

## 2) ارفعي المشروع من Windows CMD

فكّي الملف المضغوط، ثم افتحي مجلد المشروع. اكتبي `cmd` في شريط عنوان المجلد واضغطي Enter، ثم شغّلي:

```bat
git init
git branch -M main
git add .
git commit -m "Launch Kids Coding Hub website"
git remote add origin https://github.com/Fatoomnoour/kids-coding-hub.git
git push -u origin main
```

إذا ظهر أن `origin` موجود بالفعل، استخدمي بدل أمر `remote add`:

```bat
git remote set-url origin https://github.com/Fatoomnoour/kids-coding-hub.git
git push -u origin main
```

إذا طلب Git تعريف الاسم والبريد لأول مرة:

```bat
git config --global user.name "Fatma Nour"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

استبدلي `YOUR_GITHUB_EMAIL` بالبريد المرتبط بحساب GitHub، ثم أعيدي أمري `commit` و`push`.

## 3) فعّلي GitHub Pages

بعد رفع الملفات:

1. افتحي المستودع على GitHub.
2. ادخلي إلى **Settings**.
3. من القائمة اليسرى اختاري **Pages**.
4. عند **Build and deployment → Source** اختاري **GitHub Actions**.
5. افتحي تبويب **Actions** ثم Workflow باسم **Deploy Kids Coding Hub to GitHub Pages**.
6. اضغطي **Run workflow** إذا لم يبدأ تلقائيًا.

أو شغّلي هذا الأمر لإطلاق عملية نشر جديدة بعد تفعيل Pages:

```bat
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push
```

عندما تصبح علامة Workflow خضراء، سيكون الموقع على:

```text
https://fatoomnoour.github.io/kids-coding-hub/
```

## 4) أي تحديث لاحق

بعد تعديل الملفات استخدمي فقط:

```bat
git add .
git commit -m "Update Kids Coding Hub website"
git push
```

سيُبنى الموقع ويُنشر تلقائيًا بعد كل `push` إلى فرع `main`.

## حل سريع للأخطاء

- `git is not recognized`: ثبّتي Git for Windows ثم أغلقي CMD وافتحيه من جديد.
- `Repository not found`: تأكدي أن المستودع أُنشئ بالحروف نفسها وأنك مسجّلة بالحساب الصحيح.
- `remote origin already exists`: استخدمي `git remote set-url origin ...` كما هو موضح أعلاه.
- Workflow أحمر قبل تفعيل Pages: فعّلي **GitHub Actions** من Settings → Pages ثم شغّلي Workflow مرة أخرى.
- الموقع يعرض 404 أثناء النشر: انتظري حتى تصبح عملية النشر خضراء ثم افتحي الرابط من جديد.
