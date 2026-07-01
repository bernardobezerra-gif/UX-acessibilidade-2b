const toggleButton = document.getElementById('themeToggle');
const statusMessage = document.getElementById('statusMessage');

if (toggleButton && statusMessage) {
  toggleButton.addEventListener('click', () => {
    const isHighContrast = document.body.dataset.theme === 'high-contrast';
    document.body.dataset.theme = isHighContrast ? 'default' : 'high-contrast';
    toggleButton.setAttribute('aria-pressed', String(!isHighContrast));
    toggleButton.textContent = isHighContrast ? 'Ativar alto contraste' : 'Desativar alto contraste';
    statusMessage.textContent = isHighContrast
      ? 'Modo de leitura padrão ativado.'
      : 'Alto contraste ativado.';
  });
}

const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    faqButtons.forEach((otherButton) => {
      otherButton.setAttribute('aria-expanded', 'false');
      const target = document.getElementById(otherButton.getAttribute('aria-controls'));
      if (target) {
        target.hidden = true;
      }
    });

    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');
      const target = document.getElementById(button.getAttribute('aria-controls'));
      if (target) {
        target.hidden = false;
      }
    }
  });
});

const form = document.querySelector('.feedback-form');
const feedbackMessage = document.querySelector('.form-feedback');

if (form && feedbackMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input');
    if (input && input.value.trim()) {
      feedbackMessage.textContent = `Obrigado por participar, ${input.value.trim()}.`;
    } else {
      feedbackMessage.textContent = 'Informe um e-mail para receber dicas.';
    }
  });
}
