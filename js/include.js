// js/includes.js
// Використовуємо ES-модуль з defer, щоб мав місце топ-левел await
const includes = [
  { selector: ".header", file: "header.html" },
  { selector: ".footer", file: "footer.html" },
];

;(async () => {
  for (const { selector, file } of includes) {
    const target = document.querySelector(selector);
    // Якщо в шаблоні від WP ви вже вставили <div class="header">…</div>,
    // то target.innerHTML.trim() не порожній — пропускаємо fetch.
    if (!target || target.innerHTML.trim()) {
      console.log(`Skip include for ${selector}`);  
      continue;
    }

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const html = await response.text();
      target.insertAdjacentHTML('beforeend', html);
      console.log(`Included ${file} into ${selector}`);
    } catch (err) {
      console.error(`Failed to load ${file}:`, err);
    }
  }

  // Навіть якщо нічого не підвантажували — даємо знати, що "всі include готові"
  document.dispatchEvent(new Event('includesLoaded'));
})();