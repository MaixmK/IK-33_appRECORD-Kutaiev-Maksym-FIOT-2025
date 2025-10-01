(function () {
  const tabs = Array.from(document.querySelectorAll('.top-nav .tab'));
  const sideMenu = document.getElementById('sideMenu');
  const sideButtons = Array.from(sideMenu.querySelectorAll('.pill'));
  const content = document.getElementById('content');

  // ===== Хелпер для безпечного показу HTML-коду у <pre> =====
  const codeBlock = (s) =>
    `<pre class="code">${String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')}</pre>`;

  // ==== Контент ЛР1 по секціях  ====
  const lab1 = {
    // Тема/мета/розташування
theme: `
  <h2>Лабораторна робота №1 — Тема, мета, розташування</h2>
  <p><b>Тема практичної роботи:</b> ТЕГИ ТА АТРИБУТИ HTML-ДОКУМЕНТА. СТРУКТУРНА РОЗМІТКА. GIT.GITHUB. РОБОТА З РЕПОЗИТОРІЯМИ. ОПИС ЛОГІКИ ВЛАСНОГО WEB-ЗАСТОСУНКУ.</p>
  <p><b>Мета практичної роботи:</b> придбати практичні навички роботи з GitHub, репозиторіями, HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Створити шаблон звітного HTML-документа для відображення результатів роботи всіх лабораторних робіт.</p>
  <p><b>Тема розробки:</b> веб-застосунок <i>«Конфігуратор ПК»</i> для підбору комплектуючих, перевірки сумісності та формування готових збірок.</p>
  <p><b>Мета розробки:</b> створити сучасний веб-застосунок, який надає зручні засоби пошуку, фільтрації, перевірки сумісності компонентів, збереження та оформлення збірок ПК, а також особистий кабінет із історією.</p>
  <ul>
    <li>дослідження предметної області ринку ПК-компонентів та наявних конфігураторів;</li>
    <li>формування вимог до інформаційної системи для роботи зі збірками та сумісністю;</li>
    <li>розробка інтерфейсу з інтуїтивною взаємодією (пошук, фільтри, кроковий підбір сумісних деталей);</li>
    <li>перевірка працездатності механізмів пошуку/підбору та коректності бізнес-логіки;</li>
    <li>базові вимоги безпеки (валідація даних, коректна робота форм).</li>
  </ul>

  <h3 class="muted">Розташування</h3>

  <div class="link-buttons">
    <a class="btn" href="https://github.com/MaixmK/IK-33_appWEB-Kutaiev-Maksym-FIOT-2025" target="_blank" rel="noopener">Репозиторій застосунку</a>
    <a class="btn" href="https://maixmk.github.io/IK-33_appWEB-Kutaiev-Maksym-FIOT-2025/" target="_blank" rel="noopener">Жива сторінка застосунку</a>
    <a class="btn" href="https://github.com/MaixmK/IK-33_appRECORD-Kutaiev-Maksym-FIOT-2025" target="_blank" rel="noopener">Репозиторій звітів</a>
    <a class="btn" href="https://maixmk.github.io/IK-33_appRECORD-Kutaiev-Maksym-FIOT-2025/" target="_blank" rel="noopener">Жива сторінка звітв</a>
    <a class="btn" href="https://github.com/MaixmK/IK-33_INDEPENDENT-Kutaiev-Maksym-FIOT-2025" target="_blank" rel="noopener">Репозиторій із самостійною роботою</a>
    <a class="btn" href="https://maixmk.github.io/IK-33_INDEPENDENT-Kutaiev-Maksym-FIOT-2025/" target="_blank" rel="noopener">Жива сторінка самостійної роботи</a>
    <a class="btn" href="https://www.figma.com/design/S3tM6vTLjBuZINItOYO71u/Untitled?node-id=0-1&t=nIZJZHqGCv9BfEZN-1" target="_blank" rel="noopener">Figma макет</a>
  </div>
`,



    // Опис предметного середовища
    env: `
      <h2>1. Опис предметного середовища (функціонал майбутнього WEB-застосунку)</h2>
      <p>WEB-застосунок допомагає користувачам підібрати комплектуючі для власного комп’ютера або вибрати готову збірку.</p>

      <h3>Функціонал:</h3>
      <ul>
        <li>Каталог комплектуючих (процесори, відеокарти, материнські плати, пам’ять, блоки живлення тощо).</li>
        <li>Фільтри (сумісність, ціна, бренд, продуктивність).</li>
        <li>Інтерактивний конструктор: користувач обирає процесор → система пропонує сумісну материнську плату і т.д.</li>
        <li>Перевірка сумісності компонентів.</li>
        <li>Кошик з можливістю замовлення всієї збірки.</li>
        <li>Особистий кабінет з історією збірок.</li>
        <li>Адмін-панель (додавання комплектуючих, редагування інформації).</li>
      </ul>

      <h2>2. Бізнес-логіка</h2>
      <p><strong>Скорочений опис:</strong> Користувач створює власну збірку → обирає деталі → система перевіряє сумісність → користувач може зберегти збірку, замовити її або поділитися посиланням.</p>

      <h3>Сценарій:</h3>
      <ol>
        <li>Користувач заходить на сайт.</li>
        <li>Обирає режим: «Конструктор» або «Готові збірки».</li>
        <li>У конструкторі додає комплектуючі (CPU → GPU → RAM тощо).</li>
        <li>Система перевіряє сумісність (наприклад, чи підходить сокет процесора до материнської плати).</li>
        <li>Користувач зберігає збірку у профілі або додає все у кошик.</li>
        <li>Користувач оформлює замовлення.</li>
        <li>Адміністратор підтверджує і відправляє комплект.</li>
      </ol>

      <h2>3. Функціональні вимоги</h2>
      <ul>
        <li>Каталог комплектуючих з фільтрами.</li>
        <li>Інтерактивний конструктор ПК.</li>
        <li>Перевірка сумісності обраних компонентів.</li>
        <li>Можливість додавання збірки у кошик.</li>
        <li>Особистий кабінет з історією збірок.</li>
        <li>Адмін-панель для управління товарами.</li>
        <li>Система відгуків для комплектуючих.</li>
      </ul>

      <h2>4. Нефункціональні вимоги</h2>
      <ul>
        <li>Адаптивність: сайт зручний на ПК, планшеті, смартфоні.</li>
        <li>Безпека: дані користувачів зберігаються у захищеному вигляді.</li>
        <li>Масштабованість: можливість додавання нових категорій комплектуючих.</li>
        <li>Юзабіліті: простий і зрозумілий інтерфейс навіть для користувача без технічних знань.</li>
      </ul>
    `,

    // Структура головної
    structure: `
      <h2>Структура головної сторінки (<code>index.html</code>)</h2>
      <ul>
        <li><b>Шапка:</b> заголовок «Конфігуратор ПК» + навігація (Головна, Про проєкт).</li>
        <li><b>Секції:</b> пошук комплектуючих (форма), перелік компонентів (іконки + підписи), таблиця сумісності, форма замовлення, популярні збірки (список).</li>
        <li><b>Посилання:</b> внутрішні переходи між сторінками.</li>
      </ul>

      ${codeBlock(`<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Конфігуратор ПК</title>
</head>
<body>
  <header>
    <h1>Конфігуратор ПК</h1>
    <nav>
      <ul>
        <li><a href="index.html" aria-current="page">Головна</a></li>
        <li><a href="about.html">Про проєкт</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section aria-labelledby="search-heading">
      <h2>Пошук комплектуючих</h2>
      <form action="#" method="get">
        <label for="search">Введіть назву:</label>
        <input id="search" type="text" name="search" placeholder="Я шукаю...">
        <button type="submit">Знайти</button>
      </form>
    </section>

    <section aria-labelledby="components-heading">
      <h2>Компоненти збірки</h2>
      <ul>
        <li><img src="img/cpu.svg" alt="Процесор" width="63" height="63"> Процесор</li>
        <li><img src="img/Motherboard.svg" alt="Материнська плата" width="63" height="63"> Материнська плата</li>
        <li><img src="img/RAM.svg" alt="Оперативна пам'ять" width="63" height="63"> Оперативна пам'ять</li>
        <li><img src="img/gpu.svg" alt="Відеокарта" width="63" height="63"> Відеокарта</li>
        <li><img src="img/harddrive.svg" alt="Накопичувач" width="63" height="63"> Накопичувач</li>
        <li><img src="img/comp.svg" alt="Корпус" width="63" height="63"> Корпус</li>
        <li><img src="img/power-supply.png" alt="Блок живлення" width="63" height="63"> Блок живлення</li>
      </ul>
    </section>

    <section aria-labelledby="table-heading">
      <h2>Таблиця сумісності</h2>
      <table border="1">
        <caption>Перевірка сумісності компонентів</caption>
          <tr>
            <th>Компонент</th>
            <th>Сумісність</th>
          </tr>
          <tr>
            <td>Процесор Intel i5</td>
            <td>Сумісний з Socket 1200</td>
          </tr>
          <tr>
            <td>Відеокарта RTX 4060</td>
            <td>Потрібен блок живлення 600W+</td>
          </tr>
      </table>
    </section>

    <section aria-labelledby="order-heading">
      <h2>Оформлення замовлення</h2>
      <form action="#" method="post">
          <label for="name">Ім’я:</label>
          <input id="name" type="text" name="name" required><br>

          <label for="phone">Телефон:</label>
          <input id="phone" type="tel" name="phone" required><br>

          <label for="address">Адреса:</label>
          <input id="address" type="text" name="address"><br>


          <label for="delivery">Спосіб доставки:</label>
          <select id="delivery" name="delivery">
            <option value="nova-poshta">Нова Пошта</option>
            <option value="ukrposhta">Укрпошта</option>
            <option value="courier">Кур’єр</option>
          </select>


        <button type="submit">Підтвердити замовлення</button>
      </form>
    </section>

    <section aria-labelledby="popular-heading">
      <h2>Популярні збірки</h2>
      <ol>
        <li>Ігрова збірка (RTX 4060, Ryzen 5, 16GB RAM)</li>
        <li>Офісний ПК (Intel i3, 8GB RAM, SSD 512GB)</li>
        <li>Універсальний ПК (Ryzen 7, 32GB RAM, RTX 4070)</li>
      </ol>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Конфігуратор ПК. Всі права захищені.</p>
  </footer>
</body>
</html>
      `)}
    `,

    // Таблиця
    "table-code": `

      <h3>Код (з <code>index.html</code>)</h3>
      ${codeBlock(`<table border="1">
        <caption>Перевірка сумісності компонентів</caption>
          <tr>
            <th>Компонент</th>
            <th>Сумісність</th>
          </tr>
          <tr>
            <td>Процесор Intel i5</td>
            <td>Сумісний з Socket 1200</td>
          </tr>
          <tr>
            <td>Відеокарта RTX 4060</td>
            <td>Потрібен блок живлення 600W+</td>
          </tr>
      </table>`)}
      <h3>Скрін</h3>
      <img src="laba1/img/table.png" alt="Скріншот таблиці"/>

      <h3>Теорія</h3>
      <ul>
        <li>Теги: <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;caption&gt;</code>.</li>
        <li>Атрибути: <code>colspan</code>, <code>rowspan</code> (об’єднання комірок).</li>
        <li>Оформлення краще робити через CSS: рамки, <code>border-collapse</code>, відступи.</li>
      </ul>
    `,

    // Зображення
    "image-code": `

      <h3>Код (з <code>index.html</code>)</h3>
      ${codeBlock(`<img src="img/cpu.svg" alt="Процесор" width="63" height="63">`)}
      <h3>Скрін</h3>
      <img src="laba1/img/cpulab1.png" alt="Скрін зображення"/>

      <h3>Теорія</h3>
      <ul>
        <li><code>&lt;img&gt;</code> — вставка зображення; альтернативний текст у <code>alt</code>.</li>
        <li>Розміри через <code>width</code>/<code>height</code> або CSS</li>
      </ul>
    `,

    // Форма
    "form-code": `

      ${codeBlock(`<form action="#" method="post">
  <label for="name">Ім’я:</label>
  <input id="name" type="text" name="name" required><br>

  <label for="phone">Телефон:</label>
  <input id="phone" type="tel" name="phone" required><br>

  <label for="address">Адреса:</label>
  <input id="address" type="text" name="address"><br>

  <label for="delivery">Спосіб доставки:</label>
  <select id="delivery" name="delivery">
    <option value="nova-poshta">Нова Пошта</option>
    <option value="ukrposhta">Укрпошта</option>
    <option value="courier">Кур’єр</option>
  </select>

  <button type="submit">Підтвердити замовлення</button>
</form>`)}
      <p>Ключові атрибути форми: <code>action</code>, <code>method</code>; для полів — <code>name</code>, <code>type</code>, <code>required</code>, <code>placeholder</code>.</p>
    `,

    // Списки
    "html-li": `
      <h2>HTML-код нумерованого списку (фрагмент головної навігації)</h2>
      ${codeBlock(`<header>
  <h1>Конфігуратор ПК</h1>
  <nav>
    <ul>
      <li><a href="index.html" aria-current="page">Головна</a></li>
      <li><a href="about.html">Про проєкт</a></li>
    </ul>
  </nav>
</header>`)}
        <p>Скрін</p>
        <img src="laba1/img/ul.png" alt="Скріншот шапки"/>
        <h2>HTML-код нумерованого списку (популярні збірки)</h2>
      ${codeBlock(`<section>
  <h2>Популярні збірки</h2>
  <ol>
        <li>Ігрова збірка (RTX 4060, Ryzen 5, 16GB RAM)</li>
        <li>Офісний ПК (Intel i3, 8GB RAM, SSD 512GB)</li>
        <li>Універсальний ПК (Ryzen 7, 32GB RAM, RTX 4070)</li>
      </ol>
    </section>`)}
        <p>Скрін</p>
        <img src="laba1/img/ol.png" alt="Скріншот нумерованого списку"/>

          <h3>Коротка теорія</h3>
  <ul>
    <li><b>&lt;ul&gt;</b> — маркований список, <b>&lt;ol&gt;</b> — нумерований, елемент — <b>&lt;li&gt;</b>.</li>
    <li><b>&lt;dl&gt;</b> — описовий список: термін <b>&lt;dt&gt;</b> і опис <b>&lt;dd&gt;</b>.</li>
    <li>Атрибути для <b>&lt;ol&gt;</b>: <code>start</code> (початок нумерації), <code>reversed</code> (зворотний порядок), <code>type</code> (1, a, A, i, I).</li>
    <li>У <b>&lt;li&gt;</b> можна задати <code>value</code> для конкретного номера в <b>&lt;ol&gt;</b>.</li>
    <li>Стиль маркерів задавай через CSS: <code>list-style-type</code>, відступи — <code>margin/padding</code>.</li>
    <li>Вкладайте списки всередину <b>&lt;li&gt;</b> для підрівнів; для меню доречно <code>&lt;nav&gt;&lt;ul&gt;...&lt;/ul&gt;&lt;/nav&gt;</code>.</li>
  </ul>
    `,

    // Висновки
conclusion: `
  <h2>Висновки</h2>
  <ul>
    <li>Початково створено макет інтерфейсу у Figma, на основі якого спроєктовано структуру сторінок.</li>
    <li>Реалізовано семантичну розмітку головної: шапка й навігація, пошук, перелік компонентів з іконками, таблиця сумісності, форма замовлення, «Популярні збірки», футер.</li>
    <li>Додано приклади та <b>теорію з HTML-кодом і скріншотами</b> для таблиць, зображень і списків; враховано корисні атрибути та аспекти доступності.</li>
    <li>Звіт виконано як SPA: перемикання розділів без перезавантаження.</li>
    <li>Запроваджено хелпер <code>codeBlock()</code> для безпечного показу великих HTML-фрагментів без конфліктів з DOM.</li>
    <li>Налаштовано репозиторій Git/GitHub (структура проєкту, коміти, публікація), підготовлено звітний документ.</li>
  </ul>
`,


  };

  // Плейсхолдери для інших ЛР
  const placeholder = id => `
    <h2>Лабораторна робота №${id}</h2>
    <p>Матеріали будуть додані пізніше.</p>
  `;

  function setActiveTab(id) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.lab === String(id)));
  }
  function setActivePill(sec) {
    sideButtons.forEach(b => b.classList.toggle('active', b.dataset.section === sec));
  }

  function renderLab(labId, section) {
    setActiveTab(labId);

    sideMenu.style.display = (labId === 1) ? 'block' : 'none';

    if (labId !== 1) { content.innerHTML = placeholder(labId); return; }

    const sec = section || 'theme';
    setActivePill(sec);
    const html = lab1[sec] || `<p>Розділ “${sec}” у підготовці.</p>`;
    content.innerHTML = html;
  }

  function navigate(labId, sec, push = true) {
    renderLab(labId, sec);
    if (push) {
      const params = new URLSearchParams();
      params.set('lab', labId);
      if (sec) params.set('sec', sec);
      history.pushState({ lab: labId, sec }, '', `?${params.toString()}`);
      document.title = `ЛР №${labId} — Звіти`;
    }
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.lab);
      navigate(id, id === 1 ? 'theme' : null, true);
    });
  });

  sideButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navigate(1, btn.dataset.section, true);
    });
  });

  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(location.search);
    const lab = Number(params.get('lab')) || 1;
    const sec = params.get('sec') || (lab === 1 ? 'theme' : null);
    renderLab(lab, sec);
  });

  (function boot() {
    const params = new URLSearchParams(location.search);
    const lab = Number(params.get('lab')) || 1;
    const sec = params.get('sec') || (lab === 1 ? 'theme' : null);
    renderLab(lab, sec);
  })();
})();
