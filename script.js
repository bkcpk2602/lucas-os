// =========================================
// LOVE_OS v2.8
// Bianca ❤️ Lucas
// =========================================

// ==============================
// TROCA DE TELAS
// ==============================

const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const selected =
        document.getElementById(screenId);

    if (selected) {
        selected.classList.add("active");
    }
}

// ==============================
// TELA INICIAL
// ==============================

const agreeBtn =
    document.getElementById("agreeBtn");

if (agreeBtn) {

    agreeBtn.addEventListener("click", () => {

        const input =
            document.getElementById("nameInput");

        const value =
            input.value.trim();

        if (value.length < 2) {

            alert("Digite seu nome para continuar ❤️");
            return;

        }

        localStorage.setItem(
            "loveos_user",
            value
        );

        showScreen("trust-screen");

    });

}

// ==============================
// BOTÃO CONFIE EM MIM
// ==============================

const trustBtn =
    document.getElementById("trustBtn");

if (trustBtn) {

    trustBtn.addEventListener(
        "click",
        startLoading
    );

}

// ==============================
// LOADING
// ==============================

function startLoading() {

    showScreen("loading-screen");

    const progress =
        document.getElementById("progress");

    const loadingText =
        document.getElementById("loadingText");

    const messages = [

        "Carregando memórias...",
        "Localizando Campos do Jordão...",
        "Recuperando girassóis...",
        "Analisando hambúrgueres...",
        "Buscando fotos da Pitota...",
        "Conectando Bianca ❤️ Lucas...",
        "Carregando amor infinito...",
        "Sistema pronto."

    ];

    let width = 0;
    let msgIndex = 0;

    const interval = setInterval(() => {

        width += 1;

        progress.style.width =
            width + "%";

        if (
            width % 12 === 0 &&
            msgIndex < messages.length
        ) {

            loadingText.innerText =
                messages[msgIndex];

            msgIndex++;

        }

        if (width >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                showScreen("dashboard");

            }, 800);

        }

    }, 35);

}

// ==============================
// CONTADOR DE NAMORO
// ==============================

const datingDate =
    new Date("2023-05-28T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff =
        now.getTime() -
        datingDate.getTime();

    const totalSeconds =
        Math.floor(diff / 1000);

    const totalMinutes =
        Math.floor(totalSeconds / 60);

    const totalHours =
        Math.floor(totalMinutes / 60);

    const totalDays =
        Math.floor(totalHours / 24);

    const years =
        Math.floor(totalDays / 365);

    const months =
        Math.floor(
            (totalDays % 365) / 30
        );

    const days =
        Math.floor(
            (totalDays % 365) % 30
        );

    const hours =
        totalHours % 24;

    const minutes =
        totalMinutes % 60;

    const seconds =
        totalSeconds % 60;

    const counter =
        document.getElementById("counter");

    if (!counter) return;

    counter.innerHTML =

        `
        ❤️ ${years} anos,
        ${months} meses,
        ${days} dias,
        ${hours}h,
        ${minutes}m,
        ${seconds}s
        juntos ❤️
        `;
}

updateCounter();

setInterval(
    updateCounter,
    1000
);

// ==============================
// QUIZ
// ==============================

const questions = [

    {

        question:
            "Onde aconteceu o pedido de namoro?",

        answers: [

            "Santos",
            "Campos do Jordão",
            "Jundiaí"

        ],

        correct: 1

    },

    {

        question:
            "Qual é a comida favorita do casal?",

        answers: [

            "Pizza",
            "Hambúrguer",
            "Japonês"

        ],

        correct: 1

    },

    {

        question:
            "Qual o apelido da Bianca?",

        answers: [

            "Pitota",
            "Bia",
            "Pepita"

        ],

        correct: 0

    },

    {

        question:
            "Qual música representa vocês?",

        answers: [

            "Olhos Gigantes",
            "Yellow",
            "Perfect"

        ],

        correct: 0

    },

    {

        question:
            "O que o Lucas sempre fala?",

        answers: [

            "Boa noite meu pepe, eu te amo meu pepe",
            "Até amanhã",
            "Dorme bem"

        ],

        correct: 0

    },

    {

        question:
            "Quem é só um cara tranquilo?",

        answers: [

            "Lucas",
            "Bianca",
            "Os dois"

        ],

        correct: 0

    }

];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    const question =
        document.getElementById("question");

    const answers =
        document.getElementById("answers");

    const scoreText =
        document.getElementById("score");

    if (
        !question ||
        !answers ||
        !scoreText
    ) return;

    if (
        currentQuestion >=
        questions.length
    ) {

        question.innerHTML =
            "❤️ Quiz Finalizado ❤️";

        answers.innerHTML =

            `
            <h2>
                Você acertou
                ${score}
                de
                ${questions.length}
            </h2>
            `;

        scoreText.innerHTML =

            score === questions.length
                ? "PERFEITO ❤️"
                : "Nada mal 😎";

        return;
    }

    const q =
        questions[currentQuestion];

    question.innerText =
        q.question;

    answers.innerHTML = "";

    q.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.innerText =
                answer;

            button.addEventListener(
                "click",
                () => {

                    if (
                        index ===
                        q.correct
                    ) {

                        score++;

                        scoreText.innerText =
                            "Pontuação: " +
                            score;

                    }

                    currentQuestion++;

                    loadQuestion();

                }
            );

            answers.appendChild(
                button
            );

        }
    );
}

loadQuestion();

// ==============================
// SENHA SECRETA
// ==============================

function checkPassword() {

    const passwordInput =
        document.getElementById(
            "secretPassword"
        );

    const content =
        document.getElementById(
            "secretContent"
        );

    const password =
        passwordInput.value.trim();

    const passwords = [

        "28052023",
        "pitota",
        "lucas",
        "pepe"

    ];

    if (
        passwords.includes(
            password.toLowerCase()
        )
    ) {

        content.style.display =
            "block";

    } else {

        alert(
            "Senha incorreta ❤️"
        );

    }

}

// ==============================
// GALERIA
// ==============================

const modal =
    document.getElementById(
        "photoModal"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const images =
    document.querySelectorAll(
        ".gallery-grid img"
    );

images.forEach(image => {

    image.addEventListener(
        "click",
        () => {

            modal.style.display =
                "flex";

            modalImage.src =
                image.src;

            modalImage.alt =
                image.alt;

        }
    );

});

if (closeModal) {

    closeModal.addEventListener(
        "click",
        () => {

            modal.style.display =
                "none";

        }
    );

}

if (modal) {

    modal.addEventListener(
        "click",
        e => {

            if (
                e.target === modal
            ) {

                modal.style.display =
                    "none";

            }

        }
    );

}

// ==============================
// FRASE ALEATÓRIA
// ==============================

const quotes = [

    "Boa noite meu pepe ❤️",
    "Eu te amo meu pepe ❤️",
    "Sou só um cara tranquilo 😎",
    "Pitota ❤️",
    "Campos do Jordão para sempre ❤️",
    "Você é meu lugar favorito ❤️"

];

setInterval(() => {

    const quote =
        document.querySelector(
            ".quote"
        );

    if (!quote) return;

    const random =
        Math.floor(
            Math.random() *
            quotes.length
        );

    quote.innerText =
        quotes[random];

}, 5000);

// ==============================
// EASTER EGG
// ==============================

let secretSequence = [];

document.addEventListener(
    "keydown",
    e => {

        secretSequence.push(
            e.key.toLowerCase()
        );

        if (
            secretSequence.length > 5
        ) {

            secretSequence.shift();

        }

        const code =
            secretSequence.join("");

        if (
            code.includes(
                "love"
            )
        ) {

            alert(
                "❤️ Bianca ama o Lucas infinitamente ❤️"
            );

            secretSequence = [];

        }

    }
);

// ==============================
// BOAS-VINDAS
// ==============================

window.addEventListener(
    "load",
    () => {

        console.log(
            "LOVE_OS iniciado ❤️"
        );

    }
);