/* NORDIKA — интерактив: меню, модалки, формы, FAQ, анимация появления */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- Данные кейсов для модалок ---------- */
const PROJECTS = {
  "68": {
    title: "Квартира для молодой семьи, 68 м²",
    img: "assets/proj-68.jpg",
    alt: "Светлая кухня-гостиная в квартире для молодой семьи",
    facts: [["Площадь", "68 м²"], ["Срок", "4 месяца"], ["Стиль", "современный, светлые тона"], ["Бюджет", "4 800 000 ₽"]],
    body: [
      ["Задача", "Создать светлое пространство с большой кухней-гостиной, изолированной детской и вместительным хранением без перепланировки."],
      ["Решение", "Объединили кухню и гостиную, перенесли зону ТВ для лучшего освещения, спроектировали встроенные шкафы до потолка."],
      ["Материалы", "Керамогранит под камень, ЛДСП под дерево, текстиль в пастельных тонах."],
      ["Результат", "+10 м² полезного хранения, заказчик получил понятную документацию для строителей, количество правок сократилось на 30%."]
    ]
  },
  "30": {
    title: "Студия для сдачи в аренду, 30 м²",
    img: "assets/proj-30.jpg",
    alt: "Компактная студия с откидной кроватью и встроенными шкафами",
    facts: [["Площадь", "30 м²"], ["Срок", "1,5 месяца"], ["Стиль", "скандинавский минимализм"], ["Бюджет", "1 900 000 ₽"]],
    body: [
      ["Задача", "Максимально функционально организовать маленькое пространство, чтобы привлечь платежеспособных арендаторов и минимизировать затраты на ремонт."],
      ["Решение", "Спроектировали трансформируемую кровать под потолком, складной стол, встроенные шкафы. Использовали влагостойкие и износостойкие материалы."],
      ["Материалы", "Кварцвиниловая плитка, МДФ, краска, металл, стекло."],
      ["Результат", "Студия окупилась за 14 месяцев, заполняемость 100%, средний чек аренды на 15% выше среднего по району."]
    ]
  },
  "140": {
    title: "Загородный дом для семьи с детьми, 140 м²",
    img: "assets/proj-140.jpg",
    alt: "Просторная гостиная загородного дома",
    facts: [["Площадь", "140 м²"], ["Срок", "5 месяцев"], ["Стиль", "скандинавский с элементами хюгге"], ["Бюджет", "12 500 000 ₽"]],
    body: [
      ["Задача", "Создать тёплый, уютный интерьер с акцентом на экологичность, натуральные материалы и удобство для детей."],
      ["Решение", "Зонировали первый этаж без капитальных стен, использовали открытую планировку кухни-гостиной, организовали отдельную игровую зону и мастер-спальню с гардеробной."],
      ["Материалы", "Паркетная доска, штукатурка, деревянные балки, лён, шерсть, керамогранит под камень."],
      ["Результат", "Единое светлое пространство на первом этаже, тёплая атмосфера, безопасные материалы и продуманное хранение для детских вещей."]
    ]
  },
  "45": {
    title: "Квартира для молодой пары, 45 м²",
    img: "assets/proj-45.jpg",
    alt: "Обновлённая однушка со стеклянной перегородкой спальни",
    facts: [["Площадь", "45 м²"], ["Срок", "2,5 месяца"], ["Стиль", "скандинавский минимализм"], ["Бюджет", "3 100 000 ₽"]],
    body: [
      ["Задача", "Превратить маленькую типовую однушку в просторное и светлое пространство с полноценной спальней, гостиной и зоной для работы."],
      ["Решение", "Убрали перегородку между прихожей и кухней, установили стеклянную перегородку для зонирования спальни, спроектировали вместительную гардеробную за счёт коридора."],
      ["Материалы", "Инженерная доска дуб, матовая краска, фасады МДФ, лён, керамика ручной работы."],
      ["Результат", "Появилась изолированная спальня, рабочий стол у окна, система хранения на 40% больше, чем в типовой планировке."]
    ]
  }
};

/* ---------- Данные пакетов для модалок ---------- */
const PACKAGES = {
  basic: {
    title: "Базовый дизайн-проект",
    lead: "Старт вашего интерьера: концепция, планировка и визуализация ключевых зон. Подходит, если вы хотите получить чёткое направление для ремонта и готовы самостоятельно реализовывать проект или контролировать строителей.",
    sections: [
      { h: "Что входит в пакет", groups: [
        { h: "Концепт-дизайн", items: ["Анализ планировок и пожеланий клиента", "2 варианта планировочного решения (перестановка мебели, зонирование)", "Выбор стилистического направления (скандинавский минимализм, эко-стиль, современный сканди)", "Составление технического задания для дальнейших чертежей"] },
        { h: "Цветовая палитра", items: ["Подбор 3–5 основных цветов (стены, полы, мебель)", "Рекомендации по сочетанию оттенков (текстиль, декор)", "Палитра привязана к конкретным брендам красок и материалов (Tikkurila, Little Greene, Dulux)"] },
        { h: "Визуализации", items: ["2–3 детализированных (эскизных) изображения ключевых помещений (например, кухня-гостиная, спальня, прихожая)", "Формат JPEG, PDF-альбом в A-формате", "Достаточно для понимания будущего интерьера и начала закупок"] },
      ]},
      { h: "Чертежи и схемы", items: ["План обмеров после перестановки мебели", "План демонтажа и монтажа перегородок (при необходимости)", "План расстановки мебели и оборудования", "План полов (покрытия)", "План освещения (точечный и скрытый / сценарии света)", "Электротехнический план (розетки)", "План дверей"] },
      { h: "Спецификации", items: ["Список отделочных материалов (стены, пол, потолок) с укрупнённой ведомостью"] },
      { h: "Что не входит (доп. опции)", items: ["3D-планы (не нужны)", "Подбор мебели в сценариях и в конкретных магазинах (более 30 позиций)", "Авторский надзор (более 20 визитов)", "Смета отделочных работ (осуществляется отдельно или на следующем этапе)"] },
    ],
    meta: ["Примерная цена: от 50 000 ₽ (за квартиры до 80 м²). Точная стоимость рассчитывается после ознакомления с планировкой и объёмом работ.", "Срок выполнения: 10–14 рабочих дней"],
  },
  full: {
    title: "Полный дизайн-проект (под ключ)",
    lead: "Максимум заботы о вашем проекте: от первой планировки до финальной расстановки декора. Мы берём на себя все этапы — вы получаете готовый интерьер, в который можно заезжать.",
    sections: [
      { h: "Что входит в пакет", groups: [
        { h: "Концепция и планировка", items: ["Анализ планировок и пожеланий клиента", "3 варианта планировочного решения с зонированием", "Техническое задание для всей рабочей документации"] },
        { h: "3D-визуализация", items: ["Фотореалистичные визуализации всех помещений", "Подбор материалов, мебели и света в сцене", "2 итерации правок по вашим комментариям"] },
        { h: "Комплектация", items: ["Подбор поставщиков и магазинов под бюджет", "Ведомости материалов и спецификации мебели со ссылками", "План работ и график поставок на объект"] },
      ]},
      { h: "Чертежи и схемы", items: ["Полный комплект рабочих чертежей для строителей", "Планы полов, потолков, освещения и электрики", "Развёртки стен и узлы", "План дверей и ведомость открываний"] },
      { h: "Спецификации", items: ["Ведомость отделочных материалов с артикулами", "Спецификация мебели, света и оборудования", "Смета отделочных работ"] },
      { h: "Доп. опции", items: ["Авторский надзор (выезды на объект)", "Закупка и логистика материалов", "Согласование перепланировок"] },
    ],
    meta: ["Примерная цена: от 70 000 ₽. Точная стоимость рассчитывается после брифинга.", "Срок выполнения: 3–5 недель в зависимости от площади"],
  },
  moodboard: {
    title: "Moodboard и концепт-дизайн",
    lead: "Визуальное направление будущего интерьера в одном документе: настроение, материалы, цвета. Подходит, чтобы увидеть стиль до старта проекта и согласовать вкусы всех членов семьи.",
    sections: [
      { h: "Что входит в пакет", groups: [
        { h: "Moodboard", items: ["Коллаж настроения интерьера", "Референсы по мебели, свету и декору", "Стилистическое направление с пояснениями"] },
        { h: "Материалы и цвет", items: ["Доска с образцами материалов и фактур", "Цветовая палитра с кодами оттенков", "Привязка к брендам красок и материалов"] },
      ]},
      { h: "Результат на руках", items: ["PDF-альбом moodboard в высоком разрешении", "Печатная версия для встреч со строителями", "Список ключевых позиций для закупки"] },
      { h: "Что не входит (доп. опции)", items: ["3D-визуализации", "Рабочие чертежи", "Подбор конкретных артикулов мебели"] },
    ],
    meta: ["Примерная цена: от 15 000 ₽", "Срок выполнения: 5–7 рабочих дней"],
  },
  "3d": {
    title: "3D визуализация",
    lead: "Фотореалистичные изображения будущего интерьера по вашим планировкам и референсам. Помогает увидеть результат до начала ремонта и согласовать каждое решение заранее.",
    sections: [
      { h: "Что входит в пакет", groups: [
        { h: "Подготовка сцены", items: ["Концепция по вашей картинке или референсу", "Подбор материалов и мебели для сцены", "Постановка света и ракурсов"] },
        { h: "Рендеры", items: ["Фотореалистичные изображения ключевых ракурсов", "2 итерации правок по вашим комментариям", "Исходники в высоком разрешении (JPEG / PNG)"] },
      ]},
      { h: "Форматы", items: ["Изображения для печати и соцсетей", "Альбом визуализаций в PDF"] },
      { h: "Что не входит (доп. опции)", items: ["Планировочные решения", "Рабочие чертежи", "Анимация и виртуальные туры"] },
    ],
    meta: ["Примерная цена: от 10 000 ₽ за помещение", "Срок выполнения: 3–5 рабочих дней за помещение"],
  },
};

/* ---------- Мобильное меню ---------- */
const burger = $(".burger");
const mobileMenu = $(".mobile-menu");
if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const open = mobileMenu.hidden;
    mobileMenu.hidden = !open;
    burger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  $$("a, button", mobileMenu).forEach((el) =>
    el.addEventListener("click", () => {
      mobileMenu.hidden = true;
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    })
  );
}

/* ---------- Модалки ---------- */
const thanksModal = $("#thanks-modal");
const projectModal = $("#project-modal");
let lastFocus = null;

function openModal(modal) {
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const closeBtn = $(".modal__close", modal);
  if (closeBtn) closeBtn.focus();
}
function closeModal(modal) {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
$$("[data-close-modal]").forEach((el) =>
  el.addEventListener("click", () => {
    const modal = el.closest(".modal");
    if (modal) closeModal(modal);
  })
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") $$(".modal:not([hidden])").forEach(closeModal);
});

/* Кнопки «Консультация» и CTA → модалка спасибо-заявка ведёт к форме */
$$("[data-open-lead]").forEach((btn) =>
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    if (modal) closeModal(modal);
    $("#lead").scrollIntoView({ behavior: "smooth" });
    const firstInput = $("#lead-form input");
    if (firstInput) setTimeout(() => firstInput.focus({ preventScroll: true }), 500);
  })
);

/* Карточки проектов → модалка кейса */
$$("[data-project]").forEach((btn) =>
  btn.addEventListener("click", () => {
    const p = PROJECTS[btn.dataset.project];
    if (!p) return;
    $("#project-modal-title").textContent = p.title;
    const img = $("#project-modal-img");
    img.src = p.img;
    img.alt = p.alt;
    $("#project-modal-facts").innerHTML = p.facts
      .map(([dt, dd]) => `<div><dt>${dt}</dt><dd>${dd}</dd></div>`)
      .join("");
    $("#project-modal-body").innerHTML = p.body
      .map(([h, text]) => `<div class="case__block"><h4>${h}</h4><p>${text}</p></div>`)
      .join("");
    openModal(projectModal);
  })
);

/* Карточки пакетов → модалка пакета */
const packageModal = $("#package-modal");
$$("[data-open-package]").forEach((btn) =>
  btn.addEventListener("click", () => {
    const p = PACKAGES[btn.dataset.openPackage];
    if (!p || !packageModal) return;
    $("#package-modal-title").textContent = p.title;
    $("#package-modal-lead").textContent = p.lead;
    const half = Math.ceil(p.sections.length / 2);
    const renderSection = (s) => {
      let html = `<div class="package-modal__col"><h4>${s.h}</h4>`;
      if (s.groups) {
        html += s.groups
          .map((g) => `<h5>${g.h}</h5><ul>${g.items.map((i) => `<li>${i}</li>`).join("")}</ul>`)
          .join("");
      } else {
        html += `<ul>${s.items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
      }
      return html + "</div>";
    };
    const cols = [p.sections.slice(0, half).map(renderSection).join(""), p.sections.slice(half).map(renderSection).join("")];
    $("#package-modal-body").innerHTML = `<div class="package-modal__col">${cols[0]}</div><div class="package-modal__col">${cols[1]}</div>`;
    $("#package-modal-meta").innerHTML = p.meta.map((m) => {
      const [label, rest] = m.split(": ");
      return `<p><strong>${label}:</strong> ${rest}</p>`;
    }).join("");
    openModal(packageModal);
  })
);

/* ---------- Карусель пакетов ---------- */
(function initPackagesSlider() {
  const slider = $(".packages-slider");
  if (!slider) return;
  const track = $(".packages-slider__track", slider);
  const cards = $$(".pkg-card", slider);
  const prev = $(".packages-slider__arrow--prev", slider);
  const next = $(".packages-slider__arrow--next", slider);
  const dotsBox = $(".packages-slider__dots", slider);
  let index = 0;

  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "packages-slider__dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Пакет ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsBox.appendChild(dot);
  });
  const dots = $$(".packages-slider__dot", slider);

  function goTo(i) {
    index = Math.max(0, Math.min(i, cards.length - 1));
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const offset = index * (cards[0].getBoundingClientRect().width + gap);
    track.style.transform = `translateX(${-offset}px)`;
    dots.forEach((d, j) => d.classList.toggle("is-active", j === index));
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index === cards.length - 1;
  }
  if (prev) prev.addEventListener("click", () => goTo(index - 1));
  if (next) next.addEventListener("click", () => goTo(index + 1));
  window.addEventListener("resize", () => goTo(index));
  goTo(0);
})();

/* ---------- Горизонтальные слайдеры (портфолио, отзывы) ---------- */
$$("[data-slider]").forEach((slider) => {
  const track = $(".h-slider__track", slider);
  const cards = $$(":scope > .h-slider__viewport > .h-slider__track > *", slider);
  const prev = $(".h-slider__arrow--prev", slider);
  const next = $(".h-slider__arrow--next", slider);
  const dotsBox = $(".h-slider__dots", slider);
  let index = 0;

  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "h-slider__dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Слайд ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsBox.appendChild(dot);
  });
  const dots = $$(".h-slider__dot", slider);

  function goTo(i) {
    index = Math.max(0, Math.min(i, cards.length - 1));
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const offset = index * (cards[0].getBoundingClientRect().width + gap);
    track.style.transform = `translateX(${-offset}px)`;
    dots.forEach((d, j) => d.classList.toggle("is-active", j === index));
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index === cards.length - 1;
  }
  if (prev) prev.addEventListener("click", () => goTo(index - 1));
  if (next) next.addEventListener("click", () => goTo(index + 1));
  window.addEventListener("resize", () => goTo(index));
  goTo(0);
});

/* ---------- Формы (демо-режим, без отправки) ---------- */
const PHONE_RE = /^[+\d][\d\s()\-]{9,}$/;

function validateField(field) {
  const input = $("input, select, textarea", field);
  if (!input || !input.required) return true;
  const err = $(".form__error", field);
  let msg = "";
  const value = input.value.trim();
  if (!value) msg = input.tagName === "SELECT" ? "Выберите вариант" : "Заполните поле";
  else if (input.type === "tel" && !PHONE_RE.test(value)) msg = "Неправильно введён телефон";
  field.classList.toggle("is-invalid", Boolean(msg));
  if (err) err.textContent = msg;
  return !msg;
}

$$("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = $$(".form__field", form);
    const ok = fields.map(validateField).every(Boolean);
    if (!ok) {
      const bad = $(".form__field.is-invalid input, .form__field.is-invalid select", form);
      if (bad) bad.focus();
      return;
    }
    form.reset();
    $$(".form__error", form).forEach((el) => (el.textContent = ""));
    $$(".form__field", form).forEach((el) => el.classList.remove("is-invalid"));
    openModal(thanksModal);
  });
  $$(".form__field input, .form__field select", form).forEach((input) =>
    input.addEventListener("blur", () => validateField(input.closest(".form__field")))
  );
});

/* ---------- Появление блоков при скролле ---------- */
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduced && "IntersectionObserver" in window) {
  const targets = $$(
    ".card, .project-card, .review, .member, .counter, .pkg-card, .timeline__step, .case__photo, .lead__aside, .final__grid, .about__grid, .supervision__inner"
  );
  targets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => io.observe(el));
}
