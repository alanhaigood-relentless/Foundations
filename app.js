let selectedGroups = [];
let selectedMode = null;
let sessionQuestions = [];
let currentIndex = 0;
let currentQuestion = null;
let answered = false;

const groupScreen = document.getElementById("group-screen");
const challengeScreen = document.getElementById("challenge-screen");
const practiceScreen = document.getElementById("practice-screen");
const finishedScreen = document.getElementById("finished-screen");

const groupsDiv = document.getElementById("groups");
const progress = document.getElementById("progress");
const groupLabel = document.getElementById("group-label");
const prompt = document.getElementById("prompt");
const choices = document.getElementById("choices");
const answer = document.getElementById("answer");
const showAnswer = document.getElementById("show-answer");
const nextQuestion = document.getElementById("next-question");

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function uniqueGroups() {
    return [...new Set(trainingQuestions.map(q => q.group))];
}

function showScreen(screen) {
    [groupScreen, challengeScreen, practiceScreen, finishedScreen]
        .forEach(s => s.classList.add("hidden"));
    screen.classList.remove("hidden");
}

function buildGroupList() {
    groupsDiv.innerHTML = "";
    uniqueGroups().forEach(group => {
        const label = document.createElement("label");
        label.className = "group-option";
        label.innerHTML = `
            <input type="checkbox" value="${escapeHtml(group)}">
            <span>${escapeHtml(group)}</span>
        `;
        groupsDiv.appendChild(label);
    });
}

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;",
        '"': "&quot;", "'": "&#39;"
    }[c]));
}

document.getElementById("groups-continue").addEventListener("click", () => {
    selectedGroups = [...groupsDiv.querySelectorAll("input:checked")].map(x => x.value);

    if (selectedGroups.length === 0) {
        alert("Choose at least one group.");
        return;
    }

    showScreen(challengeScreen);
});

document.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => {
        selectedMode = button.dataset.mode;
        sessionQuestions = shuffle(
            trainingQuestions.filter(q => selectedGroups.includes(q.group))
        );
        currentIndex = 0;
        showScreen(practiceScreen);
        showCurrentQuestion();
    });
});

document.getElementById("back-to-groups").addEventListener("click", () => {
    showScreen(groupScreen);
});

document.getElementById("change-selection").addEventListener("click", () => {
    showScreen(groupScreen);
});

document.getElementById("change-selection-finished").addEventListener("click", () => {
    showScreen(groupScreen);
});

document.getElementById("again").addEventListener("click", () => {
    sessionQuestions = shuffle(
        trainingQuestions.filter(q => selectedGroups.includes(q.group))
    );
    currentIndex = 0;
    showScreen(practiceScreen);
    showCurrentQuestion();
});

showAnswer.addEventListener("click", revealAnswer);

nextQuestion.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= sessionQuestions.length) {
        progress.textContent = "";
        showScreen(finishedScreen);
        return;
    }

    showCurrentQuestion();
});

function showCurrentQuestion() {
    currentQuestion = sessionQuestions[currentIndex];
    answered = false;

    progress.textContent = `Question ${currentIndex + 1} of ${sessionQuestions.length}`;
    groupLabel.textContent = currentQuestion.group;
    prompt.innerHTML = "";
    choices.innerHTML = "";
    answer.classList.add("hidden");
    answer.innerHTML = "";
    showAnswer.classList.remove("hidden");
    showAnswer.textContent = selectedMode === "answer-question"
        ? "Show Question"
        : "Show Answer";
    nextQuestion.classList.add("hidden");

    if (selectedMode === "question-answer") {
        prompt.textContent = currentQuestion.question;
    }
    else if (selectedMode === "answer-question") {
        prompt.textContent = currentQuestion.answer;
    }
    else if (selectedMode === "multiple-choice") {
        prompt.textContent = currentQuestion.question;
        buildMultipleChoice();
        showAnswer.classList.add("hidden");
    }
    else if (selectedMode === "fill-blank") {
        prompt.innerHTML = `
            <div class="fill-section">
                <div class="fill-label">Question</div>
                <div id="fill-question">${makeObscuredHtml(
                    currentQuestion.obscuredQuestion || currentQuestion.question
                )}</div>
            </div>
            <div class="fill-section">
                <div class="fill-label">Answer</div>
                <div id="fill-answer">${makeObscuredHtml(
                    currentQuestion.obscuredAnswer || currentQuestion.obscured || currentQuestion.answer
                )}</div>
            </div>
        `;
    }
}

function revealAnswer() {
    if (selectedMode === "answer-question") {
        answer.textContent = currentQuestion.question;
        answer.classList.remove("hidden");
    }
    else if (selectedMode === "fill-blank") {
        const fillQuestion = document.getElementById("fill-question");
        const fillAnswer = document.getElementById("fill-answer");

        if (fillQuestion) fillQuestion.textContent = currentQuestion.question;
        if (fillAnswer) fillAnswer.textContent = currentQuestion.answer;
    }
    else {
        answer.textContent = currentQuestion.answer;
        answer.classList.remove("hidden");
    }

    showAnswer.classList.add("hidden");
    nextQuestion.classList.remove("hidden");
}

function makeObscuredHtml(text) {
    return escapeHtml(text).replace(
        /\[([^\]]+)\]/g,
        '<span class="blank"></span>'
    );
}

function buildMultipleChoice() {
    const distractors = trainingQuestions
        .filter(q =>
            q !== currentQuestion &&
            selectedGroups.includes(q.group)
        )
        .map(q => q.answer);

    // Use up to three other answers as distractors.
    const shuffledDistractors = shuffle(
        [...new Set(distractors)]
    ).slice(0, 3);

    const options = shuffle([
        currentQuestion.answer,
        ...shuffledDistractors
    ]);

    options.forEach(option => {
        const button = document.createElement("button");
        button.className = "answer-choice";
        button.textContent = option;

        button.addEventListener("click", () => {
            if (answered) return;
            answered = true;

            if (option === currentQuestion.answer) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
                [...choices.children].find(
                    b => b.textContent === currentQuestion.answer
                )?.classList.add("correct");
            }

            nextQuestion.classList.remove("hidden");
        });

        choices.appendChild(button);
    });
}

buildGroupList();
