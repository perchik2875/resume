// Контентная база для динамического изменения акцентов
const copyData = {
  tech: {
    headline: "I build high-yield <em>automation systems</em> backed by real audience insights.",
    lede: "Two years of engineering custom AI pipelines, trading infrastructure, and backend layers. Because I also run massive online groups, I write code that truly understands user retention and high load constraints.",
    primaryCv: "Download Engineering CV (PDF)",
    secondaryCv: "View Creative Portfolio"
  },
  creative: {
    headline: "I engineer <em>massive communities</em> using advanced script automation.",
    lede: "Building audiences of 10k+ members isn't just about writing text—it's data science. I replace manual moderation and content assembly with self-contained Python architecture, driving overhead costs to zero.",
    primaryCv: "Download Growth/Creative CV",
    secondaryCv: "View Engineering Core"
  }
};

const htmlElement = document.documentElement;
const headlineEl = document.getElementById('dynamic-headline');
const ledeEl = document.getElementById('dynamic-lede');
const primaryCvBtn = document.getElementById('primary-cv');
const secondaryCvBtn = document.getElementById('secondary-cv');

const techBtn = document.getElementById('btn-tech');
const creativeBtn = document.getElementById('btn-creative');
const projectCards = document.querySelectorAll('.project-card');

function switchRole(role) {
  // 1. Меняем CSS класс темы на самом верхнем уровне 
  if (role === 'tech') {
    htmlElement.className = 'theme-tech';
    techBtn.classList.add('active');
    creativeBtn.classList.remove('active');
  } else {
    htmlElement.className = 'theme-creative';
    creativeBtn.classList.add('active');
    techBtn.classList.remove('active');
  }

  // 2. Безболезненно и плавно обновляем смысловые акценты
  headlineEl.innerHTML = copyData[role].headline;
  ledeEl.textContent = copyData[role].lede;
  primaryCvBtn.textContent = copyData[role].primaryCv;
  secondaryCvBtn.textContent = copyData[role].secondaryCv;

  // 3. Психологический трюк: «приглушаем» нерелевантные кейсы вместо удаления.
  // Рекрутер видит весь масштаб личности, но его фокус направлен на то, что он ищет.
  projectCards.forEach(card => {
    if (card.dataset.category === role) {
      card.classList.remove('dimmed');
    } else {
      card.classList.add('dimmed');
    }
  });
}

// Вешаем триггеры на кнопки
techBtn.addEventListener('click', () => switchRole('tech'));
creativeBtn.addEventListener('click', () => switchRole('creative'));

// Инициализация по умолчанию при входе
switchRole('tech');

