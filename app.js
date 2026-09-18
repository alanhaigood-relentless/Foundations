let selectedGroups = [];
let selectedMode = null;
let selectedAudience = null;
let sessionQuestions = [];
let currentIndex = 0;
let currentQuestion = null;
let answered = false;
let adultRevealStage = 0;

const audienceScreen = document.getElementById("audience-screen");
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
    [
        audienceScreen,
        groupScreen,
        challengeScreen,
        practiceScreen,
        finishedScreen
    ].forEach(s => s.classList.add("hidden"));

    screen.classList.remove("hidden");
}

function isAdultMode() {
    return selectedMode && selectedMode.startsWith("adult-");
}

function makeAdultAnswerHtml(text) {
    return escapeHtml(text || "").replace(
        /\[([^\]]+)\]/g,
        '<strong class="kids-highlight">$1</strong>'
    );
}

function makeScriptureHtml(text) {
    return escapeHtml(text || "");
}

function makeAdultRevealHtml() {
    return `
        <div class="adult-reveal">

            <div class="adult-section">
                <div class="adult-label">Question</div>
                <div class="adult-content">
                    ${escapeHtml(currentQuestion.question || "")}
                </div>
            </div>

            <div class="adult-section">
                <div class="adult-label">Adult Answer</div>
                <div class="adult-content">
                    ${makeAdultAnswerHtml(currentQuestion.adultAnswer)}
                </div>
            </div>

            <div class="adult-section">
                <div class="adult-label">Scripture Reference</div>
                <div class="adult-content">
                    ${escapeHtml(currentQuestion.scriptureReference || "")}
                </div>
            </div>

            <div class="adult-section">
                <div class="adult-label">Scripture Verse</div>
                <div class="adult-content">
${makeScriptureHtml(currentQuestion.scriptureVerse)}
                </div>
            </div>

        </div>
    `;
}


// --------------------------------------------------
// AUDIENCE
// --------------------------------------------------

document.getElementById("kids-button").addEventListener("click", () => {
    selectedAudience = "kids";

    document.body.classList.add("kids-mode");

    document.body.classList.remove(
        "kids-theme-1",
        "kids-theme-2",
        "kids-theme-3",
        "kids-theme-4",
        "kids-theme-5",
        "kids-theme-6",
        "kids-theme-7",
        "kids-theme-8",
        "kids-theme-9",
        "kids-theme-10",
        "kids-theme-11",
        "kids-theme-12"
    );

    const theme = Math.floor(Math.random() * 12) + 1;
    document.body.classList.add(`kids-theme-${theme}`);

    showScreen(groupScreen);
});

document.getElementById("adults-button").addEventListener("click", () => {
    selectedAudience = "adults";

    document.body.classList.remove("kids-mode");

    showScreen(groupScreen);
});


// --------------------------------------------------
// GROUPS
// --------------------------------------------------

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
    return String(value || "").replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));
}

document.getElementById("groups-continue").addEventListener("click", () => {
    selectedGroups = [
        ...groupsDiv.querySelectorAll("input:checked")
    ].map(x => x.value);

    if (selectedGroups.length === 0) {
        alert("Choose at least one group.");
        return;
    }

    // Show only the appropriate challenge choices.
    document.getElementById("kids-challenges")
        .classList.toggle("hidden", selectedAudience !== "kids");

    document.getElementById("adult-challenges")
        .classList.toggle("hidden", selectedAudience !== "adults");

    showScreen(challengeScreen);
});


// --------------------------------------------------
// CHALLENGE SELECTION
// --------------------------------------------------

document.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => {

        selectedMode = button.dataset.mode;

        sessionQuestions = shuffle(
            trainingQuestions.filter(q =>
                selectedGroups.includes(q.group)
            )
        );

        currentIndex = 0;

        showScreen(practiceScreen);
        showCurrentQuestion();
    });
});


// --------------------------------------------------
// NAVIGATION
// --------------------------------------------------

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
        trainingQuestions.filter(q =>
            selectedGroups.includes(q.group)
        )
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


// --------------------------------------------------
// SHOW CURRENT QUESTION
// --------------------------------------------------

function showCurrentQuestion() {
    currentQuestion = sessionQuestions[currentIndex];
    answered = false;
    adultRevealStage = 0;

    // Randomize Kids background on every question.
    if (document.body.classList.contains("kids-mode")) {

        document.body.classList.remove(
            "kids-theme-1",
            "kids-theme-2",
            "kids-theme-3",
            "kids-theme-4",
            "kids-theme-5",
            "kids-theme-6",
            "kids-theme-7",
            "kids-theme-8",
            "kids-theme-9",
            "kids-theme-10",
            "kids-theme-11",
            "kids-theme-12"
        );

        const theme = Math.floor(Math.random() * 12) + 1;

        document.body.classList.add(`kids-theme-${theme}`);
    }

    progress.textContent =
        `Question ${currentIndex + 1} of ${sessionQuestions.length}`;

    groupLabel.textContent = currentQuestion.group;

prompt.innerHTML = "";
choices.innerHTML = "";

answer.classList.add("hidden");
answer.innerHTML = "";

    showAnswer.classList.remove("hidden");

    nextQuestion.classList.add("hidden");


    // --------------------------------------------------
    // KIDS
    // --------------------------------------------------

    if (selectedMode === "question-answer") {

        prompt.textContent = currentQuestion.question;
        showAnswer.textContent = "Show Answer";
    }

    else if (selectedMode === "answer-question") {

        prompt.textContent = currentQuestion.answer;
        showAnswer.textContent = "Show Question";
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
                <div id="fill-question">
                    ${makeObscuredHtml(
                        currentQuestion.obscuredQuestion ||
                        currentQuestion.question
                    )}
                </div>
            </div>

            <div class="fill-section">
                <div class="fill-label">Answer</div>
                <div id="fill-answer">
                    ${makeObscuredHtml(
                        currentQuestion.obscuredAnswer ||
                        currentQuestion.obscured ||
                        currentQuestion.answer
                    )}
                </div>
            </div>
        `;

        showAnswer.textContent = "Show Answer";
    }


    // --------------------------------------------------
    // ADULT
    // --------------------------------------------------

    else if (selectedMode === "adult-question-answer-verse") {

        // Start with Question
        prompt.textContent = currentQuestion.question;

        showAnswer.textContent = "Show Answer";
    }

    else if (selectedMode === "adult-answer-question-verse") {

        // Start with Adult Answer
        prompt.innerHTML =
            makeAdultAnswerHtml(currentQuestion.adultAnswer);

        showAnswer.textContent = "Show Question";
    }

    else if (selectedMode === "adult-question-answer-verse-reference") {

        // Start with Question + Adult Answer
        prompt.innerHTML = `
            <div class="adult-start">
                <div>
                    ${escapeHtml(currentQuestion.question || "")}
                </div>

                <div class="adult-start-answer">
                    ${makeAdultAnswerHtml(currentQuestion.adultAnswer)}
                </div>
            </div>
        `;

        showAnswer.textContent = "Show Verse";
    }
}

// --------------------------------------------------
// REVEAL
// --------------------------------------------------

function revealAnswer() {

    // --------------------------------------------------
    // ADULT
    // --------------------------------------------------

    if (selectedMode === "adult-question-answer-verse") {

        if (adultRevealStage === 0) {

            // Add the Adult Answer below the Question
            prompt.innerHTML += `
                <div class="adult-reveal-content">
                    ${makeAdultAnswerHtml(currentQuestion.adultAnswer)}
                </div>
            `;

            adultRevealStage = 1;
            showAnswer.textContent = "Show Scripture";
            return;
        }

        if (adultRevealStage === 1) {

            // Add Verse and Reference below everything already shown
            prompt.innerHTML += `
                <div class="adult-reveal-content">
${makeScriptureHtml(currentQuestion.scriptureVerse)}
                    <br><br>
                    ${escapeHtml(currentQuestion.scriptureReference || "")}
                </div>
            `;

            adultRevealStage = 2;
            showAnswer.classList.add("hidden");
            nextQuestion.classList.remove("hidden");
            return;
        }
    }


    if (selectedMode === "adult-answer-question-verse") {

        if (adultRevealStage === 0) {

            // Add Question below the Adult Answer
            prompt.innerHTML += `
                <div class="adult-reveal-content">
                    ${escapeHtml(currentQuestion.question || "")}
                </div>
            `;

            adultRevealStage = 1;
            showAnswer.textContent = "Show Scripture";
            return;
        }

        if (adultRevealStage === 1) {

            // Add Verse and Reference
            prompt.innerHTML += `
                <div class="adult-reveal-content">
                    ${escapeHtml(currentQuestion.scriptureVerse || "")}
                    <br><br>
                    ${escapeHtml(currentQuestion.scriptureReference || "")}
                </div>
            `;

            adultRevealStage = 2;
            showAnswer.classList.add("hidden");
            nextQuestion.classList.remove("hidden");
            return;
        }
    }


    if (selectedMode === "adult-question-answer-verse-reference") {

        if (adultRevealStage === 0) {

            // Add Verse below Question + Answer
            prompt.innerHTML += `
                <div class="adult-reveal-content">
                    ${escapeHtml(currentQuestion.scriptureVerse || "")}
                </div>
            `;

            adultRevealStage = 1;
            showAnswer.textContent = "Show Reference";
            return;
        }

        if (adultRevealStage === 1) {

            // Add Reference below everything already shown
            prompt.innerHTML += `
                <div class="adult-reveal-content">
                    ${escapeHtml(currentQuestion.scriptureReference || "")}
                </div>
            `;

            adultRevealStage = 2;
            showAnswer.classList.add("hidden");
            nextQuestion.classList.remove("hidden");
            return;
        }
    }

    // --------------------------------------------------
    // KIDS
    // --------------------------------------------------

    if (selectedMode === "answer-question") {

        answer.textContent = currentQuestion.question;
        answer.classList.remove("hidden");
    }

    else if (selectedMode === "fill-blank") {

        const fillQuestion =
            document.getElementById("fill-question");

        const fillAnswer =
            document.getElementById("fill-answer");

        if (fillQuestion) {
            fillQuestion.textContent =
                currentQuestion.question;
        }

        if (fillAnswer) {
            fillAnswer.textContent =
                currentQuestion.answer;
        }
    }

    else {

        answer.textContent =
            currentQuestion.answer;

        answer.classList.remove("hidden");
    }

    showAnswer.classList.add("hidden");
    nextQuestion.classList.remove("hidden");
}

// --------------------------------------------------
// KIDS FILL-IN-THE-BLANK
// --------------------------------------------------

function makeObscuredHtml(text) {
    return escapeHtml(text).replace(
        /\[([^\]]+)\]/g,
        '<span class="blank"></span>'
    );
}


// --------------------------------------------------
// MULTIPLE CHOICE
// --------------------------------------------------

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

            }
            else {

                button.classList.add("incorrect");

                [...choices.children]
                    .find(
                        b => b.textContent === currentQuestion.answer
                    )
                    ?.classList.add("correct");
            }

            nextQuestion.classList.remove("hidden");
        });

        choices.appendChild(button);
    });
}


// --------------------------------------------------
// INITIALIZE
// --------------------------------------------------

buildGroupList();

progress.textContent = "";

showScreen(audienceScreen);
