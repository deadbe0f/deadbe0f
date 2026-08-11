/**
 * Reusable quiz widget for teach workspace lessons.
 * Usage: initQuiz(containerId, { prompt, options: [{ text, correct }], feedback })
 */
(function () {
  function initQuiz(containerId, config) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const prompt = document.createElement("div");
    prompt.className = "quiz-prompt";
    prompt.textContent = config.prompt;

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "quiz-options";

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback hidden";

    config.options.forEach(function (opt) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-option";
      btn.textContent = opt.text;
      btn.addEventListener("click", function () {
        if (btn.disabled) return;
        const buttons = optionsWrap.querySelectorAll(".quiz-option");
        buttons.forEach(function (b) {
          b.disabled = true;
        });
        if (opt.correct) {
          btn.classList.add("correct");
          feedback.textContent = config.feedbackCorrect || "正确。";
          feedback.className = "quiz-feedback correct";
        } else {
          btn.classList.add("wrong");
          feedback.textContent = config.feedbackWrong || "再想想——可回看上文例句。";
          feedback.className = "quiz-feedback wrong";
        }
      });
      optionsWrap.appendChild(btn);
    });

    container.appendChild(prompt);
    container.appendChild(optionsWrap);
    container.appendChild(feedback);
  }

  window.TeachQuiz = { init: initQuiz };
})();
