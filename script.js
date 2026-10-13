// بيانات تجريبية، استبدلها ببياناتك
const students = [
  {
    name: "أسامه احمد نجاح",
    Quanity: 1,
  },
  {
    name: "احمد محمد ابو العينين",
    Quanity: 1,
  },
  {
    name: "تقى عبد الرحمن محمد",
    Quanity: 2,
  },
  {
    name: "حبيبة عبد الرحيم",
    Quanity: 1,
  },
  {
    name: "حبيبة مصطفى على",
    Quanity: 1,
  },
  {
    name: "حبيبة وليد مصطفى ",
    Quanity: 1,
  },
  {
    name: "رضوى محمد عبد المنعم",
    Quanity: 1,
  },
  ,
  {
    name: "رقيه إبراهيم محمد",
    Quanity: 2,
  },
  ,
  {
    name: "رقيه السيد عبد السلام",
    Quanity: 2,
  },
  ,
  {
    name: "رقيه محمد إبراهيم",
    Quanity: 2,
  },
  ,
  {
    name: "روضه محمد إبراهيم",
    Quanity: 2,
  },
  ,
  {
    name: "ساره سعد محمد",
    Quanity: 1,
  },
  ,
  {
    name: "سلمى شعبان سعد",
    Quanity: 1,
  },
  ,
  {
    name: "سما تامر السيد",
    Quanity: 3,
  },
  ,
  {
    name: "صلاح ناجح رضوان",
    Quanity: 1,
  },
  ,
  {
    name: "عمر سعد محمد",
    Quanity: 1,
  },
  ,
  {
    name: "فريده عدنان محمد",
    Quanity: 1,
  },
  ,
  {
    name: "كنزى محمد خميس",
    Quanity: 1,
  },
  ,
  {
    name: "محمد إيهاب محمد",
    Quanity: 2,
  },
  ,
  {
    name: "مريم محمد محمد",
    Quanity: 1,
  },

  {
    name: "ملك السيد خميس",
    Quanity: 2,
  },
  {
    name: "منه أبراهيم محمود",
    Quanity: 1,
  },
  {
    name: "منه الله عادل عباس",
    Quanity: 1,
  },
  {
    name: "منه حسام عبد الوهاب",
    Quanity: 1,
  },
  {
    name: "ميار محمد عباس",
    Quanity: 2,
  },
  {
    name: "مينا مجدي جاب الله",
    Quanity: 1,
  },
  {
    name: "نور الله احمد السيد",
    Quanity: 1,
  },
  {
    name: "نور محمد بشير",
    Quanity: 1,
  },
  {
    name: "هاجر السيد احمد",
    Quanity: 2,
  },
  {
    name: "هدى محمد جمال",
    Quanity: 3,
  },
  {
    name: "هدى ممدوح عبد الفضيل",
    Quanity: 1,
  },
  {
    name: "هنا رمضان عبد المعطى",
    Quanity: 2,
  },
  {
    name: "هند خيري عبد الله",
    Quanity: 1,
  },
];

const search = document.getElementById("search");
const results = document.getElementById("results");
const details = document.getElementById("details");

// عرض كل الأسماء في البداية
function showResults(list) {
  results.replaceChildren();

  if (list.length === 0) {
    results.textContent = "لا توجد نتائج مطابقة.";
    return;
  }

  list.forEach((student) => {
    const item = document.createElement("div");
    item.className = "result";
    item.textContent = student.name;

    item.addEventListener("click", () => {
      details.replaceChildren();

      const title = document.createElement("h2");
      title.textContent = student.name;

      const Quanity = document.createElement("p");
      Quanity.textContent = `الكمية: ${student.Quanity}`;

      const info = document.createElement("p");
      info.textContent = student.info;

      details.append(title, Quanity, info);
    });

    results.appendChild(item);
  });
}

// البحث الفوري أثناء الكتابة
search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();

  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(query),
  );

  showResults(filtered);
});

showResults(students);
