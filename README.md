<div align="center">

# 🏫 منظومة جداول التوقيت المدرسي

**V3.2 Universal Pro**

منظومة متكاملة لاستيراد جداول التوقيت المدرسي من ملفات **FET** وعرضها وطباعتها
بصيغ احترافية جاهزة للتوزيع والتأشير.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

بدون أي عملية بناء — ملفات ثابتة تعمل مباشرة في المتصفح.

</div>

---

## 📖 نظرة عامة

منظومة **جداول التوقيت المدرسي (V3.2 Universal Pro)** هي تطبيق ويب ثابت (Static)
مكتوب بلغة HTML و CSS و JavaScript خالص، بواجهة عربية كاملة من اليمين إلى اليسار (RTL).

تستورد المنظومة ملفات التوقيت بصيغة **FET** (`XML`) وتحوّلها إلى جداول قابلة للعرض
والتصفية والتلوين والطباعة على ورق **A4** بتخطيطات متعددة (ورقة كاملة، نصفين، أثلاث، أرباع).

---

## ✨ أهم المزايا

### 📥 الاستيراد والتصدير
- استيراد ملفات **FET** بصيغة `XML` / `.fet` مع نافذة معاينة قبل الاستيراد.
- تطبيع أسماء الأيام (عربي / فرنسي / إنجليزي) وربطها تلقائياً.
- حفظ المشروع كاملاً في ملف واحد (`.fetpro` / `.json`) وإعادة فتحه لاحقاً.

### 📊 العروض المتعددة
| العرض | الوصف |
|---|---|
| 👨‍🎓 **الأقسام** | جدول توقيت كل قسم على حدة |
| 👨‍🏫 **الأساتذة** | جدول توقيت كل أستاذ(ة) مع نصاب الساعات |
| 📊 **الجداول العامة** | جدول مجمّع للمؤسسة (عام الأقسام / عام الأساتذة / عام القاعات) |
| 🏛️ **القاعات** | مصفوفة شغور القاعات لكل حصة + جدول قاعة مخصصة وشغورها |
| 📝 **الورقة الدوارة** | ورقة الحضور اليومي وتأشيرة الأساتذة لكل فترة دراسية |
| ⚙️ **الإعدادات والسيرفر** | تخصيص المؤسسة والأيام والحصص والألوان وربط السيرفر |

### 🎨 التخصيص
- **10 قوالب تصميم**: الرسمي الكلاسيكي، العصري النيومورفي، الأكاديمي الملكي،
  المينيمالي الأحادي، التقني الهندسي، المفكرة المدرسية، الشريطي الحديث،
  المؤسساتي المنبسط، الورقي العتيق، المضغوط الفائق.
- **7 أنظمة ألوان** (Themes) للرؤوس والجداول.
- تحكم في إظهار/إخفاء: الأستاذ، القاعة، الفوج.
- تلوين المواد تلقائياً مع إمكانية تعديل لون كل مادة يدوياً.
- **هيئة الجدول**: الأيام أفقياً في الأعمدة أو رأسياً في الأسطر.
- **تدوير النص 90°** لجعل الخلايا المزدحمة مقروءة.

### 🖨️ الطباعة
- تخطيط **A4**: ورقة كاملة (1)، نصفين (2)، أثلاث (3)، أرباع 2×2 (4).
- اتجاه **أفقي (Landscape)** أو **عمودي (Portrait)** لورقة الطباعة.
- **🖨️ توفير الحبر (Eco Print)**: طباعة اقتصادية بالأبيض والأسود بدون خلفيات ملونة.
- **معاينة شكل ورقة A4** على الشاشة قبل الطباعة (محاكاة الورق).
- طباعة عنصر واحد، أو طباعة **كل** عناصر القسم دفعة واحدة.
- طباعة الجدول العام لكامل الأسبوع، أو **يوماً بيوم** في أوراق مستقلة.
- تقسيم الورقة الدوارة على صفحة واحدة أو صفحتين أو ثلاث صفحات.

### 🔗 QR والجوال
- رمز **QR** في ترويسة كل جدول يفتح نسخة **متناسبة مع الجوال**.
- توليد بوابة ثابتة (`index.html` + `classes/` + `teachers/` + `global.html`)
  قابلة للنشر كمجلد واحد على أي استضافة.

### ☁️ المزامنة (اختياري)
- رفع المشروع إلى سيرفر عبر **كود ترخيص** و**اسم مجلد** لاتيني، مع شريط تقدم،
  ثم استرجاع المشروع لاحقاً من السحابة.

---

## 🚀 التشغيل

لا يوجد أي تجهيز أو `npm install`. المنظومة ملفات ثابتة:

```bash
# الطريقة 1: افتح الملف مباشرة في المتصفح
#   انقر نقراً مزدوجاً على index.html

# الطريقة 2: شغّل خادماً محلياً (مستحسن)
python -m http.server 8000
# ثم افتح: http://localhost:8000
```

> ⚠️ **ملاحظة:** تحتاج المنظومة إلى **اتصال بالإنترنت** عند أول تحميل، لأن واجهة
> Tailwind وخطوط Google ورمز QR تُحمَّل من شبكات توزيع المحتوى (CDN).

### الاستخدام السريع
1. اضغط **📂 فتح ملف** لفتح مشروع محفوظ، أو **استيراد FET** لتحميل ملف `XML`.
2. اختر القسم أو الأستاذ من القائمة العلوية.
3. اختر **الهيئة** و**القالب** وتوزيع **A4** حسب الحاجة.
4. اضغط **طباعة الحالية** أو **طباعة الكل**.

---

## 📁 بنية المشروع

الأصل كان ملف `index.html` واحداً يحتوي كل شيء، وقد تم فصله إلى ملفات مستقلة
**دون تغيير أي سطر من الشيفرة**:

```
.
├── index.html              # الهيكل والتخطيط + إعدادات الورقة الديناميكية
├── css/
│   └── styles.css           # كل أنماط CSS (القوالب، الثيمات، توفير الحبر، الطباعة)
├── js/
│   ├── tailwind.config.js   # إعداد Tailwind (الخطوط، ألوان brand، الظلال)
│   └── app.js               # منطق التطبيق كاملاً + بيانات FET الأولية
├── README.md
└── LICENSE
```

### ترتيب التحميل في `index.html`
```html
<!-- 1) مكتبات خارجية -->
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

<!-- 2) إعداد Tailwind (بعد تحميل المكتبة) -->
<script src="js/tailwind.config.js"></script>

<!-- 3) الأنماط -->
<link rel="stylesheet" href="css/styles.css">

<!-- 4) المنطق (في نهاية body) -->
<script src="js/app.js"></script>
```

> `#dynamicPrintStyle` يبقى داخل `index.html` بشكل مقصود، لأن شيفرة JavaScript
> تعدّله ديناميكياً عند تغيير اتجاه الطباعة (أفقي/عمودي) ومقاس الصفحة.

---

## 🌐 النشر على GitHub Pages

1. ارفع المشروع إلى مستودع على GitHub.
2. اذهب إلى **Settings → Pages**.
3. اختر **Source: Deploy from a branch**.
4. اختر الفرع `main` والمجلد `/ (root)`.
5. احفظ — وسيكون الرابط بالشكل `https://<اسم-المستخدم>.github.io/<اسم-المستودع>/`.

---

## 🛠️ التقنيات

| التقنية | الاستخدام |
|---|---|
| **HTML5** | الهيكل، الواجهة العربية RTL |
| **CSS3** | القوالب، الثيمات، أنماط `@media print` |
| **JavaScript (ES6+)** | كل المنطق — بدون أي إطار عمل |
| **Tailwind CSS (Play CDN)** | أنماط الواجهة |
| **QRCode.js** | توليد رموز QR للجداول |
| **Google Fonts** | Cairo, Amiri, Changa, Tajawal, IBM Plex Sans Arabic, Fira Code |

**لا يوجد** `framework` ولا `bundler` ولا خطوة بناء — فقط المتصفح.

---

## ⚖️ الرخصة

هذا المشروع مرخّص تحت **رخصة MIT** — انظر ملف [LICENSE](LICENSE) للتفاصيل.

---

<div align="center">

## English

**School Timetable System — V3.2 Universal Pro**

A static, dependency-free web app (HTML/CSS/vanilla JS, Arabic RTL) that imports
**FET** timetable files (`XML`) and renders, customizes and prints them on **A4**
paper — with 10 design templates, 7 colour themes, 1/2/3/4-up print layouts,
landscape & portrait support, an ink-saver mode, QR codes linking to
mobile-friendly pages, and an optional cloud sync.

**No build step required.** Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

Internet access is required on first load (Tailwind, Google Fonts and QRCode.js
are loaded from CDNs).

Licensed under the **MIT License** — see [LICENSE](LICENSE).

</div>
