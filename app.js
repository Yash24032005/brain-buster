const SUBJECTS = {
  history: { title: "History", image: "assets/history.jpg" },
  gk: { title: "General Knowledge", image: "assets/gk.jpg" },
  english: { title: "English", image: "assets/english.jpg" },
  science: { title: "Science", image: "assets/science.jpg" },
  math: { title: "Math", image: "assets/math.jpg" },
  html: { title: "HTML", image: "assets/html.jpg" },
  css: { title: "CSS", image: "assets/css.jpg" },
  javascript: { title: "JavaScript", image: "assets/javascript.jpg" },
  bootstrap: { title: "Bootstrap", image: "assets/bootstrap.jpg" },
  php: { title: "PHP", image: "assets/php.jpg" },
  java: { title: "Java", image: "assets/java.jpg" },
  c: { title: "C", image: "assets/c.jpg" },
  cpp: { title: "C++", image: "assets/cpp.jpg" },
  python: { title: "Python", image: "assets/python.jpg" },
  sql: { title: "SQL", image: "assets/sql.jpg" },
  aptitude: { title: "Aptitude", image: "assets/aptitude.jpg" },
  reasoning: { title: "Reasoning", image: "assets/reasoning.jpg" }
};

const BASE_QUESTIONS = {
  history: [
    { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"], answer: "George Washington" },
    { question: "In which year did World War II end?", options: ["1945", "1939", "1918", "1965"], answer: "1945" },
    { question: "Who built the pyramids?", options: ["Romans", "Greeks", "Egyptians", "Persians"], answer: "Egyptians" },
    { question: "Who was known as the Iron Man of India?", options: ["Nehru", "Patel", "Gandhi", "Bose"], answer: "Patel" },
    { question: "Who discovered America?", options: ["Columbus", "Newton", "Einstein", "Magellan"], answer: "Columbus" }
  ],
  gk: [
    { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], answer: "Delhi" },
    { question: "Which is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Leopard"], answer: "Tiger" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Which planet is known as the Blue Planet?", options: ["Mars", "Earth", "Venus", "Saturn"], answer: "Earth" },
    { question: "How many days are there in a leap year?", options: ["365", "366", "364", "367"], answer: "366" }
  ],
  english: [
    { question: "Choose the correct spelling.", options: ["Recieve", "Receive", "Receeve", "Receiv"], answer: "Receive" },
    { question: "What is the opposite of Happy?", options: ["Joyful", "Sad", "Bright", "Smile"], answer: "Sad" },
    { question: "Which is a noun?", options: ["Run", "Beautiful", "School", "Quickly"], answer: "School" },
    { question: "Choose the synonym of big.", options: ["Tiny", "Large", "Weak", "Thin"], answer: "Large" },
    { question: "Which is a verb?", options: ["Table", "Run", "Blue", "Soft"], answer: "Run" }
  ],
  science: [
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
    { question: "Which organ pumps blood?", options: ["Liver", "Heart", "Lungs", "Kidney"], answer: "Heart" },
    { question: "What gas do humans need to breathe?", options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"], answer: "Oxygen" },
    { question: "What part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" }
  ],
  math: [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What is 12 ÷ 4?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "What is 7 × 3?", options: ["20", "21", "22", "23"], answer: "21" },
    { question: "What is 15 - 5?", options: ["5", "10", "15", "20"], answer: "10" },
    { question: "What is half of 100?", options: ["25", "50", "75", "100"], answer: "50" }
  ],
  html: [
    { question: "Which tag creates a paragraph?", options: ["para", "p", "text", "pg"], answer: "p" },
    { question: "Which tag is used to display an image?", options: ["img", "image", "src", "pic"], answer: "img" },
    { question: "How many default heading tags are in HTML?", options: ["4", "5", "6", "7"], answer: "6" },
    { question: "Which tag creates a hyperlink?", options: ["a", "link", "href", "url"], answer: "a" },
    { question: "HTML files are saved with which extension?", options: [".ht", ".html", ".web", ".page"], answer: ".html" }
  ],
  css: [
    { question: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which property changes text color?", options: ["font-color", "text-color", "color", "background-color"], answer: "color" },
    { question: "Which property changes background color?", options: ["bg-color", "background-color", "color", "background"], answer: "background-color" },
    { question: "Which property makes text bold?", options: ["font-size", "font-style", "font-weight", "text-align"], answer: "font-weight" },
    { question: "Which property aligns text center?", options: ["align", "text-align", "justify-content", "center"], answer: "text-align" }
  ],
  javascript: [
    { question: "Which keyword declares a variable?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
    { question: "Which symbol is used for single-line comments?", options: ["//", "<!--", "#", "**"], answer: "//" },
    { question: "Which method converts JSON text into an object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"], answer: "JSON.parse()" },
    { question: "Which keyword is used to define a function?", options: ["func", "function", "define", "method"], answer: "function" },
    { question: "Which operator checks equality with type?", options: ["==", "===", "=", "!="], answer: "===" }
  ],
  bootstrap: [
    { question: "Bootstrap is mainly used for?", options: ["Database", "Styling and responsive design", "Backend coding", "Hosting"], answer: "Styling and responsive design" },
    { question: "How many columns are in Bootstrap grid?", options: ["10", "12", "14", "16"], answer: "12" },
    { question: "Which class creates a container in Bootstrap?", options: [".box", ".wrapper", ".container", ".main"], answer: ".container" },
    { question: "Which class is used for a button?", options: [".btn", ".button", ".bttn", ".boot-btn"], answer: ".btn" },
    { question: "Bootstrap is developed by?", options: ["Google", "Twitter", "Microsoft", "Meta"], answer: "Twitter" }
  ],
  php: [
    { question: "PHP is mainly used for?", options: ["Frontend styling", "Server-side scripting", "Database only", "Animation"], answer: "Server-side scripting" },
    { question: "Which symbol is used before PHP variables?", options: ["#", "@", "$", "%"], answer: "$" },
    { question: "PHP files usually have which extension?", options: [".html", ".js", ".php", ".css"], answer: ".php" },
    { question: "PHP code starts with?", options: ["<php>", "<?php", "<script>", "<!php"], answer: "<?php" },
    { question: "PHP can be embedded in?", options: ["HTML", "CSS", "SQL", "JSON"], answer: "HTML" }
  ],
  java: [
    { question: "Java is a ?", options: ["Programming Language", "Database", "Browser", "Operating System"], answer: "Programming Language" },
    { question: "Which keyword is used to create a class in Java?", options: ["class", "Class", "define", "new"], answer: "class" },
    { question: "Java is known for being ?", options: ["Platform independent", "Only for mobile", "Only for web", "Not object oriented"], answer: "Platform independent" },
    { question: "Java source files end with?", options: [".java", ".js", ".class", ".py"], answer: ".java" },
    { question: "Which method is the entry point?", options: ["start()", "main()", "run()", "init()"], answer: "main()" }
  ],
  c: [
    { question: "Who developed C language?", options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], answer: "Dennis Ritchie" },
    { question: "C is a ?", options: ["Low level only", "Middle-level language", "Markup language", "Scripting language"], answer: "Middle-level language" },
    { question: "Which symbol is used to end a statement in C?", options: [":", ";", ".", ","], answer: ";" },
    { question: "Which header is used for input/output?", options: ["stdio.h", "math.h", "string.h", "conio.h"], answer: "stdio.h" },
    { question: "C was mainly developed for?", options: ["Gaming", "System programming", "Design", "Animation"], answer: "System programming" }
  ],
  cpp: [
    { question: "C++ is an extension of ?", options: ["Java", "C", "Python", "PHP"], answer: "C" },
    { question: "Who developed C++?", options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], answer: "Bjarne Stroustrup" },
    { question: "C++ supports ?", options: ["Object-Oriented Programming", "Only HTML", "Only database", "Only styling"], answer: "Object-Oriented Programming" },
    { question: "Which operator is used for scope resolution?", options: ["::", "->", "..", "**"], answer: "::" },
    { question: "C++ source file extension can be?", options: [".cpp", ".html", ".sql", ".php"], answer: ".cpp" }
  ],
  python: [
    { question: "Python was developed by ?", options: ["James Gosling", "Dennis Ritchie", "Guido van Rossum", "Mark Zuckerberg"], answer: "Guido van Rossum" },
    { question: "Python is famous for ?", options: ["Complex syntax", "Easy readability", "No libraries", "Only web design"], answer: "Easy readability" },
    { question: "Which symbol starts a comment in Python?", options: ["//", "#", "<!--", "/*"], answer: "#" },
    { question: "Python files end with?", options: [".py", ".pt", ".python", ".pyt"], answer: ".py" },
    { question: "Which function prints output?", options: ["echo()", "display()", "print()", "show()"], answer: "print()" }
  ],
  sql: [
    { question: "SQL stands for ?", options: ["Structured Query Language", "Simple Query Language", "Sequential Query Logic", "Styled Question Language"], answer: "Structured Query Language" },
    { question: "Which SQL command is used to fetch data?", options: ["GET", "FETCH", "SELECT", "SHOW"], answer: "SELECT" },
    { question: "Which command deletes a table?", options: ["REMOVE TABLE", "DROP TABLE", "DELETE TABLE", "CLEAR TABLE"], answer: "DROP TABLE" },
    { question: "Which clause filters rows?", options: ["ORDER BY", "WHERE", "FROM", "TABLE"], answer: "WHERE" },
    { question: "Which command inserts new data?", options: ["ADD", "NEW", "INSERT", "PUT"], answer: "INSERT" }
  ],
  aptitude: [
    { question: "What is 25% of 200?", options: ["25", "50", "75", "100"], answer: "50" },
    { question: "If a train travels 60 km in 1 hour, how far in 3 hours?", options: ["120 km", "180 km", "240 km", "300 km"], answer: "180 km" },
    { question: "What is the average of 10, 20, 30?", options: ["15", "20", "25", "30"], answer: "20" },
    { question: "What is 15% of 300?", options: ["35", "40", "45", "50"], answer: "45" },
    { question: "If 5 pens cost 50, cost of 1 pen?", options: ["5", "10", "15", "20"], answer: "10" }
  ],
  reasoning: [
    { question: "Find the odd one out: Apple, Mango, Car, Banana", options: ["Apple", "Mango", "Car", "Banana"], answer: "Car" },
    { question: "If A = 1, B = 2, then C = ?", options: ["1", "2", "3", "4"], answer: "3" },
    { question: "Complete the series: 2, 4, 6, 8, ?", options: ["9", "10", "11", "12"], answer: "10" },
    { question: "Dog is to Puppy as Cat is to ?", options: ["Kitten", "Cub", "Calf", "Pup"], answer: "Kitten" },
    { question: "Which one is different: Circle, Square, Triangle, Apple", options: ["Circle", "Square", "Triangle", "Apple"], answer: "Apple" }
  ]
};

const CUSTOM_QUESTIONS_KEY = "brain_buster_custom_questions";
const LEADERBOARD_KEY = "brain_buster_leaderboard";
const THEME_KEY = "brain_buster_theme";

let activeSubjectKey = null;
let activeQuestions = [];
let quizTimer = null;
let timeLeft = 60;

function $(id) {
  return document.getElementById(id);
}

function getCustomQuestions() {
  return JSON.parse(localStorage.getItem(CUSTOM_QUESTIONS_KEY) || "{}");
}

function saveCustomQuestions(data) {
  localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(data));
}

function getLeaderboard() {
  return JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || "[]");
}

function saveLeaderboard(data) {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(data));
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getAllQuestionsForSubject(subjectKey) {
  const custom = getCustomQuestions();
  const base = BASE_QUESTIONS[subjectKey] || [];
  const extra = custom[subjectKey] || [];
  return [...base, ...extra];
}

function initTheme() {
  const btn = $("toggle-theme");
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  if (btn) {
    btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const dark = document.body.classList.contains("dark-mode");
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
      btn.textContent = dark ? "☀️" : "🌙";
    });
  }
}

function renderSubjectCards() {
  const grid = $("subjectGrid");
  if (!grid) return;

  grid.innerHTML = Object.entries(SUBJECTS).map(([key, item]) => `
    <button class="subject-card" type="button" data-subject="${key}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="overlay">
        <h3>${item.title}</h3>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll(".subject-card").forEach((card) => {
    card.addEventListener("click", () => startQuiz(card.dataset.subject));
  });
}

function startQuiz(subjectKey) {
  activeSubjectKey = subjectKey;
  const allQuestions = getAllQuestionsForSubject(subjectKey);
  activeQuestions = shuffleArray(allQuestions).slice(0, Math.min(5, allQuestions.length));

  $("quizPanel").classList.remove("hidden");
  $("resultPanel").classList.add("hidden");
  $("currentSubject").textContent = SUBJECTS[subjectKey].title;
  $("questionCount").textContent = activeQuestions.length;
  $("submitQuiz").classList.remove("hidden");
  $("resetQuiz").classList.remove("hidden");

  renderQuizQuestions();
  startTimer();
  window.scrollTo({ top: $("quizPanel").offsetTop - 10, behavior: "smooth" });
}

function renderQuizQuestions() {
  const quiz = $("quiz");
  if (!quiz) return;

  quiz.innerHTML = activeQuestions.map((q, index) => {
    const shuffledOptions = shuffleArray(q.options);
    return `
      <article class="question-block">
        <h3>Q${index + 1}. ${q.question}</h3>
        <div class="options">
          ${shuffledOptions.map(option => `
            <label>
              <input type="radio" name="question_${index}" value="${escapeHtml(option)}">
              ${option}
            </label>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function startTimer() {
  clearInterval(quizTimer);
  timeLeft = 60;
  $("timeLeft").textContent = timeLeft;

  quizTimer = setInterval(() => {
    timeLeft -= 1;
    $("timeLeft").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(quizTimer);
      submitQuiz(true);
    }
  }, 1000);
}

function submitQuiz(autoSubmitted = false) {
  clearInterval(quizTimer);

  let score = 0;
  const reviewHTML = activeQuestions.map((q, index) => {
    const selected = document.querySelector(`input[name="question_${index}"]:checked`);
    const userAnswer = selected ? selected.value : "Not Answered";
    const correct = userAnswer === q.answer;
    if (correct) score += 1;

    return `
      <div class="review-item ${correct ? "correct" : "wrong"}">
        <p><strong>Question:</strong> ${q.question}</p>
        <p><strong>Your Answer:</strong> ${userAnswer}</p>
        <p><strong>Correct Answer:</strong> ${q.answer}</p>
      </div>
    `;
  }).join("");

  const percentage = Math.round((score / activeQuestions.length) * 100);
  const status = percentage >= 40 ? "Pass" : "Fail";

  $("score").textContent = score;
  $("percentage").textContent = `${percentage}%`;
  $("status").textContent = status;
  $("review").innerHTML = reviewHTML;
  $("resultPanel").classList.remove("hidden");

  if (autoSubmitted) {
    alert("Time is up. Quiz submitted automatically.");
  }

  window.scrollTo({ top: $("resultPanel").offsetTop - 10, behavior: "smooth" });

  const form = $("saveScoreForm");
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const playerName = $("playerName").value.trim();
      if (!playerName) return;

      const leaderboard = getLeaderboard();
      leaderboard.push({
        name: playerName,
        subject: SUBJECTS[activeSubjectKey].title,
        score,
        percentage,
        status,
        total: activeQuestions.length,
        date: new Date().toLocaleString()
      });

      leaderboard.sort((a, b) => b.percentage - a.percentage || b.score - a.score);
      saveLeaderboard(leaderboard.slice(0, 20));
      renderLeaderboard();
      form.reset();
      alert("Score saved successfully.");
    };
  }
}

function resetQuiz() {
  clearInterval(quizTimer);
  activeSubjectKey = null;
  activeQuestions = [];
  $("quiz").innerHTML = "";
  $("quizPanel").classList.add("hidden");
  $("resultPanel").classList.add("hidden");
  $("timeLeft").textContent = "60";
}

function renderLeaderboard() {
  const box = $("leaderboard");
  if (!box) return;

  const data = getLeaderboard();
  if (!data.length) {
    box.innerHTML = "<p>No saved scores yet.</p>";
    return;
  }

  box.innerHTML = `
    <table class="leaderboard-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Score</th>
          <th>Percentage</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        ${data.map((item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(item.name)}</td>
            <td>${escapeHtml(item.subject)}</td>
            <td>${item.score}/${item.total}</td>
            <td>${item.percentage}%</td>
            <td>${item.status}</td>
            <td>${escapeHtml(item.date)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderCustomQuestions() {
  const box = $("customQuestionsList");
  if (!box) return;

  const custom = getCustomQuestions();
  const items = Object.entries(custom).flatMap(([subject, questions]) =>
    questions.map((q, index) => ({ subject, index, ...q }))
  );

  if (!items.length) {
    box.innerHTML = "<p>No custom questions added yet.</p>";
    return;
  }

  box.innerHTML = items.map(item => `
    <div class="custom-question-card">
      <p><strong>Subject:</strong> ${SUBJECTS[item.subject]?.title || item.subject}</p>
      <p><strong>Question:</strong> ${escapeHtml(item.question)}</p>
      <p><strong>Options:</strong> ${item.options.map(escapeHtml).join(", ")}</p>
      <p><strong>Answer:</strong> ${escapeHtml(item.answer)}</p>
    </div>
  `).join("");
}

function setupAdminForm() {
  const form = $("adminForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const subject = $("adminSubject").value;
    const question = $("questionText").value.trim();
    const options = [
      $("option1").value.trim(),
      $("option2").value.trim(),
      $("option3").value.trim(),
      $("option4").value.trim()
    ];
    const answer = $("correctAnswer").value.trim();

    if (!subject || !question || options.some(opt => !opt) || !answer) {
      alert("Please fill all required fields.");
      return;
    }

    if (!options.includes(answer)) {
      alert("Correct answer must exactly match one option.");
      return;
    }

    const custom = getCustomQuestions();
    if (!custom[subject]) custom[subject] = [];
    custom[subject].push({ question, options, answer });
    saveCustomQuestions(custom);

    form.reset();
    renderCustomQuestions();
    alert("Question added successfully.");
  });

  const clearBtn = $("clearCustomQuestions");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      const confirmed = confirm("Clear all custom questions?");
      if (!confirmed) return;
      localStorage.removeItem(CUSTOM_QUESTIONS_KEY);
      renderCustomQuestions();
    });
  }
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderSubjectCards();
  renderLeaderboard();
  renderCustomQuestions();
  setupAdminForm();

  const submitBtn = $("submitQuiz");
  const resetBtn = $("resetQuiz");

  if (submitBtn) submitBtn.addEventListener("click", () => submitQuiz(false));
  if (resetBtn) resetBtn.addEventListener("click", resetQuiz);
});