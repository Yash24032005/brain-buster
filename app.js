
// --- CONFIGURATION ---
const SUBJECTS = {
    history: { title: "History", image: "assets/history.jpg" },
    gk: { title: "General Knowledge", image: "assets/gk.jpg" },
    english: { title: "English", image: "assets/english.jpg" },
    science: { title: "Science", image: "assets/science.jpg" },
    math: { title: "Math", image: "assets/math.jpg" },
    html: { title: "HTML", image: "assets/html.jpg" },
    css: { title: "CSS", image: "assets/css.jpg" },
    javascript: { title: "JavaScript", image: "assets/js.jpg" },
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

// Base Questions (Keep your image_695cf8 questions here)
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

let activeSubjectKey = null;
let activeQuestions = [];
let quizTimer = null;
let timeLeft = 300;

// --- HELPERS ---
const $ = (id) => document.getElementById(id);
const getCustomQuestions = () => JSON.parse(localStorage.getItem(CUSTOM_QUESTIONS_KEY)) || {};
const saveCustomQuestions = (data) => localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(data));
const getLeaderboard = () => JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
const saveLeaderboard = (data) => localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(data));

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function getAllQuestionsForSubject(subjectKey) {
    const custom = getCustomQuestions();
    const base = BASE_QUESTIONS[subjectKey] || [];
    const extra = custom[subjectKey] || [];
    return [...base, ...extra];
}

// --- QUIZ LOGIC ---
function startQuiz(subjectKey) {
    activeSubjectKey = subjectKey;
    const allQs = getAllQuestionsForSubject(subjectKey);
    if (allQs.length === 0) return alert("No questions found for this subject!");

    activeQuestions = shuffleArray(allQs).slice(0, 10); // Limit to 10 for interactive feel
    
    $("subjectSelection").classList.add("hidden");
    $("quizPanel").classList.remove("hidden");
    $("resultPanel").classList.add("hidden");
    
    $("currentSubject").textContent = SUBJECTS[subjectKey].title;
    $("questionCount").textContent = activeQuestions.length;
    
    $("submitQuiz").classList.remove("hidden");
    $("resetQuiz").classList.remove("hidden");

    renderQuizQuestions();
    startTimer();
}

function renderQuizQuestions() {
    const container = $("quiz");
    container.innerHTML = activeQuestions.map((q, idx) => `
        <div class="mb-8 p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 class="text-lg font-bold text-white mb-4">${idx + 1}. ${q.question}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${q.options.map(opt => `
                    <label class="flex items-center p-4 bg-slate-800/50 rounded-xl border border-white/5 cursor-pointer hover:border-indigo-500 transition">
                        <input type="radio" name="q${idx}" value="${opt}" class="w-4 h-4 text-indigo-600 mr-3">
                        <span class="text-slate-300">${opt}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function startTimer() {
    clearInterval(quizTimer);
    timeLeft = 300;
    $("timeLeft").textContent = timeLeft;
    quizTimer = setInterval(() => {
        timeLeft--;
        $("timeLeft").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            submitQuiz(true);
        }
    }, 1000);
}

function submitQuiz(autoSub = false) {
    clearInterval(quizTimer);
    let score = 0;
    
    const reviewHTML = activeQuestions.map((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        const userAns = selected ? selected.value : "Not Answered";
        const isCorrect = userAns === q.answer;
        if (isCorrect) score++;

        return `
            <div class="p-4 rounded-xl mb-3 ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'}">
                <p class="font-bold text-white">${idx + 1}. ${q.question}</p>
                <p class="text-sm ${isCorrect ? 'text-emerald-400' : 'text-red-400'}">Your Answer: ${userAns}</p>
                <p class="text-sm text-slate-400">Correct: ${q.answer}</p>
            </div>
        `;
    }).join('');

    const percent = Math.round((score / activeQuestions.length) * 100);
    
    $("score").textContent = score;
    $("percentage").textContent = percent + "%";
    $("review").innerHTML = reviewHTML;
    
    $("quizPanel").classList.add("hidden");
    $("resultPanel").classList.remove("hidden");
    
    if (autoSub) alert("Time is up! Quiz submitted.");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuiz() {
    clearInterval(quizTimer);
    $("quizPanel").classList.add("hidden");
    $("resultPanel").classList.add("hidden");
    $("subjectSelection").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Render Subjects Grid
    const grid = $("subjectGrid");
    if (grid) {
        grid.innerHTML = Object.entries(SUBJECTS).map(([key, item]) => `
            <div onclick="startQuiz('${key}')" class="glass-card p-6 rounded-3xl subject-card transition-all cursor-pointer text-center group">
                <div class="w-12 h-12 bg-indigo-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-indigo-400 font-bold group-hover:scale-110 transition">
                    ${key.substring(0, 2).toUpperCase()}
                </div>
                <h3 class="text-lg font-bold text-white uppercase">${item.title}</h3>
            </div>
        `).join('');
    }

    // Button Listeners
    if ($("submitQuiz")) $("submitQuiz").onclick = () => submitQuiz(false);
    if ($("resetQuiz")) $("resetQuiz").onclick = resetQuiz;
    
    // Save Score Logic
    const scoreForm = $("saveScoreForm");
    if (scoreForm) {
        scoreForm.onsubmit = (e) => {
            e.preventDefault();
            const name = $("playerName").value.trim();
            if (!name) return;

            const entry = {
                name,
                subject: SUBJECTS[activeSubjectKey].title,
                score: $("score").textContent,
                percent: $("percentage").textContent,
                date: new Date().toLocaleDateString()
            };

            const lb = getLeaderboard();
            lb.push(entry);
            saveLeaderboard(lb.sort((a, b) => parseInt(b.score) - parseInt(a.score)));
            alert("Score saved!");
            location.reload();
        };
    }
});

function renderLeaderboard() {
    const box = $("leaderboard");
    if (!box) return;
    const data = getLeaderboard();
    
    if (data.length === 0) {
        box.innerHTML = `<p class="text-slate-500 text-center py-4 italic">No scores yet. Be the first!</p>`;
        return;
    }

    box.innerHTML = data.slice(0, 5).map((item, index) => `
        <div class="flex items-center justify-between p-4 bg-white/5 rounded-2xl mb-2 border border-white/5">
            <div class="flex items-center gap-4">
                <span class="text-indigo-400 font-bold">#${index + 1}</span>
                <div>
                    <p class="text-white font-semibold">${item.name}</p>
                    <p class="text-xs text-slate-500">${item.subject}</p>
                </div>
            </div>
            <div class="text-right">
                <p class="text-indigo-400 font-bold">${item.percent}</p>
                <p class="text-[10px] text-slate-600">${item.date}</p>
            </div>
        </div>
    `).join('');
};

