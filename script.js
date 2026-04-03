const STORAGE_KEY = "meditationChallengeState";
const USER_NAME = "Samuel";
const DAILY_IMPULSES = [
    {
        type: "quote",
        quote: "Realize deeply that the present moment is all you ever have.",
        author: "Eckhart Tolle",
        reflection: "Studien zeigen, dass Achtsamkeit die Aktivitaet im Default Mode Network reduzieren kann. Das bedeutet oft weniger Grübeln und mehr Klarheit im Alltag."
    },
    {
        type: "quote",
        quote: "The best way to capture moments is to pay attention.",
        author: "Jon Kabat-Zinn",
        reflection: "Wenn du wirklich wahrnimmst, was gerade da ist, wird der Moment spuerbarer. Genau darin liegt oft die beruhigende Wirkung von Achtsamkeit."
    },
    {
        type: "insight",
        quote: "Regelmaessige Meditation kann die Neuroplastizitaet des Gehirns positiv beeinflussen.",
        author: "",
        reflection: "Das bedeutet, dass du nicht nur entspannst, sondern langfristig auch neue mentale Muster staerken kannst. Genau deshalb lohnt sich deine taegliche Praxis."
    },
    {
        type: "quote",
        quote: "Feelings come and go like clouds in a windy sky.",
        author: "Thich Nhat Hanh",
        reflection: "Die Aussage hilft dabei, Gefuehle weniger absolut zu erleben. Was heute intensiv ist, darf morgen schon leichter geworden sein."
    },
    {
        type: "quote",
        quote: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
        reflection: "Du brauchst nicht erst perfekte Umstaende, um ruhiger zu werden. Oft beginnt Frieden mit einem kleinen bewussten Moment mitten im Alltag."
    },
    {
        type: "insight",
        quote: "Schon wenige Minuten bewusstes Atmen koennen das Stressniveau spürbar senken.",
        author: "",
        reflection: "Dein Nervensystem reagiert oft direkt auf langsame, regelmaessige Atmung. Deshalb sind auch fünf Minuten echte Wirkung und nicht nur ein Symbol."
    },
    {
        type: "quote",
        quote: "Smile, breathe, and go slowly.",
        author: "Thich Nhat Hanh",
        reflection: "Diese drei Schritte wirken simpel, sind aber sehr wirksam. Sie holen dich aus innerem Druck heraus und zurück in den Koerper."
    },
    {
        type: "quote",
        quote: "Wherever you are, be there totally.",
        author: "Eckhart Tolle",
        reflection: "Volle Praesenz wirkt leise, aber tief. Sie sammelt deinen Fokus dort, wo dein Leben gerade wirklich stattfindet."
    },
    {
        type: "insight",
        quote: "Achtsamkeit kann die emotionale Selbstregulation im Alltag unterstützen.",
        author: "",
        reflection: "Das bedeutet nicht weniger Gefuehle, sondern oft einen bewussteren Umgang damit. Du bemerkst frueher, was in dir passiert."
    },
    {
        type: "quote",
        quote: "Between stimulus and response there is a space.",
        author: "Viktor E. Frankl",
        reflection: "Meditation trainiert genau diesen Zwischenraum. Dort entsteht oft Freiheit, bewusster zu reagieren statt automatisch zu handeln."
    },
    {
        type: "quote",
        quote: "The quieter you become, the more you can hear.",
        author: "Ram Dass",
        reflection: "Innere Ruhe bedeutet nicht Leere, sondern Feinheit. In stilleren Momenten wird oft klarer, was du wirklich brauchst."
    },
    {
        type: "insight",
        quote: "Meditation kann langfristig helfen, Grübeln und automatische Gedankenschleifen zu reduzieren.",
        author: "",
        reflection: "Wenn du Gedanken beobachtest, statt ihnen sofort zu folgen, entsteht Distanz. Diese Distanz kann im Alltag sehr entlastend sein."
    },
    {
        type: "quote",
        quote: "Meditation is not evasion; it is a serene encounter with reality.",
        author: "Thich Nhat Hanh",
        reflection: "Praxis ist kein Weglaufen. Sie ist ein ruhigeres Dableiben bei dem, was gerade da ist."
    },
    {
        type: "quote",
        quote: "Be where you are; otherwise you will miss your life.",
        author: "Buddha",
        reflection: "Das Leben passiert selten spaeter. Dieser Satz erinnert daran, dass die eigentliche Erfahrung immer im jetzigen Moment liegt."
    },
    {
        type: "insight",
        quote: "Regelmaessige Achtsamkeitspraxis kann die Aufmerksamkeitssteuerung verbessern.",
        author: "",
        reflection: "Du trainierst damit nicht nur Ruhe, sondern auch Fokus. Mit der Zeit bemerkst du schneller, wenn dein Geist abschweift."
    },
    {
        type: "quote",
        quote: "You are the sky. Everything else is just the weather.",
        author: "Pema Chodron",
        reflection: "Gedanken, Stress und Stimmung duerfen auftauchen, ohne dich ganz zu definieren. Diese Sicht bringt oft Weite in intensive Tage."
    },
    {
        type: "quote",
        quote: "The little things? The little moments? They are not little.",
        author: "Jon Kabat-Zinn",
        reflection: "Gerade kleine, regelmaessige Momente veraendern oft am meisten. Ein kurzer bewusster Atemzug kann ein ganzer Wendepunkt sein."
    },
    {
        type: "insight",
        quote: "Kurze Meditationseinheiten lassen sich leichter in eine stabile Gewohnheit verwandeln als seltene lange Sessions.",
        author: "",
        reflection: "Bestandigkeit entsteht meistens über Wiederholung, nicht über Intensitaet. Fünf Minuten taeglich schlagen oft eine Stunde nur gelegentlich."
    },
    {
        type: "quote",
        quote: "Within you, there is a stillness and a sanctuary to which you can retreat at any time.",
        author: "Hermann Hesse",
        reflection: "Meditation macht diesen inneren Ort oft leichter erreichbar. Mit der Zeit fuehlt sich die Rueckkehr dorthin vertrauter an."
    },
    {
        type: "quote",
        quote: "If you want to conquer the anxiety of life, live in the moment.",
        author: "Amit Ray",
        reflection: "Angst zieht den Geist oft nach vorn. Meditation bringt ihn sanft zurück zu dem, was gerade wirklich hier ist."
    },
    {
        type: "insight",
        quote: "Achtsame Routinen koennen das subjektive Stressempfinden im Alltag spürbar senken.",
        author: "",
        reflection: "Probleme verschwinden dadurch nicht automatisch, aber du begegnest ihnen haeufig mit mehr innerer Stabilitaet."
    },
    {
        type: "quote",
        quote: "Each morning we are born again. What we do today is what matters most.",
        author: "Buddha",
        reflection: "Der Satz entlastet von gestern und macht den heutigen kleinen Schritt wichtig. Genau darin steckt viel Motivation für deine taegliche Praxis."
    },
    {
        type: "quote",
        quote: "In today’s rush, we all think too much, seek too much, want too much, and forget about the joy of simply being.",
        author: "Eckhart Tolle",
        reflection: "Meditation unterbricht dieses innere Mehr. Sie schafft einen Moment, in dem Sein wieder wichtiger wird als staendiges Muessen."
    },
    {
        type: "insight",
        quote: "Meditation kann die Koerperwahrnehmung staerken und frühere Stresssignale sichtbarer machen.",
        author: "",
        reflection: "Je früher du Spannung bemerkst, desto eher kannst du gegensteuern. Das macht Achtsamkeit sehr alltagstauglich."
    },
    {
        type: "quote",
        quote: "When you realize nothing is lacking, the whole world belongs to you.",
        author: "Lao Tzu",
        reflection: "Meditation verändert nicht immer die Welt um dich herum, aber oft deinen inneren Blick darauf. Daraus kann erstaunlich viel Fülle entstehen."
    },
    {
        type: "quote",
        quote: "Do every act of your life as though it were the very last act of your life.",
        author: "Marcus Aurelius",
        reflection: "Auch wenn der Satz intensiv klingt, lenkt er den Blick auf Qualitaet statt Hast. Eine kurze Meditation kann genau diese Haltung trainieren."
    },
    {
        type: "insight",
        quote: "Selbst kurze meditative Übungen koennen die Herzfrequenz beruhigen und damit ein Gefühl von Sicherheit unterstützen.",
        author: "",
        reflection: "Wenn der Koerper weniger Alarm sendet, folgt der Geist oft nach. Deshalb wirkt Atemfokus haeufig so direkt."
    },
    {
        type: "quote",
        quote: "To understand the immeasurable, the mind must be extraordinarily quiet, still.",
        author: "Jiddu Krishnamurti",
        reflection: "Stille ist nicht nur Abwesenheit von Lärm. Sie kann auch ein Zustand sein, in dem du tiefer wahrnimmst und klarer verstehst."
    },
    {
        type: "quote",
        quote: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
        author: "Thich Nhat Hanh",
        reflection: "Achtsamkeit ist oft kein Suchen nach etwas Neuem, sondern ein Wiederentdecken dessen, was schon da ist."
    },
    {
        type: "insight",
        quote: "Die Wirkung taeglicher Meditation entsteht oft weniger durch Intensitaet als durch Kontinuitaet.",
        author: "",
        reflection: "Jeder einzelne Tag wirkt klein. In Summe baut genau diese Wiederholung aber Vertrauen, Stabilitaet und innere Klarheit auf."
    }
];
const REWARDS = {
    30: {
        title: `🎉 Glückwunsch, ${USER_NAME}, du hast 30 Tage erreicht! 🙌`,
        text: `Als Belohnung wartet der Kinoabend auf dich, ${USER_NAME}. Du darfst dir einen Film deiner Wahl gönnen und ihn in vollen Zügen geniessen!`
    },
    60: {
        title: `🎉 Herzlichen Glückwunsch, ${USER_NAME}, du hast 60 Tage erreicht! 🙌`,
        text: `${USER_NAME}, jetzt steht ein entspannter Tag im Thermalbad an. Geniesse die Auszeit. Du hast es dir verdient!`
    },
    90: {
        title: `🎉 Wow, ${USER_NAME}, du hast 90 Tage erreicht! 🙌`,
        text: `Zur Feier erwartet dich, ${USER_NAME}, ein zweitägiger Trip mit einer Übernachtung und natürlich einem wohltuenden Thermalbad. Eine echte Auszeit, die du geniessen darfst!`
    }
};
const CONFETTI_COLORS = ["#67bb73", "#347142", "#d7a45d", "#f2c66d", "#f6efe1", "#9fd7a7"];
let isQuoteExpanded = false;

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});

function initializeApp() {
    const state = loadState();
    const page = document.body.dataset.page;

    if (page === "home") {
        renderHome(state);
        bindHomeEvents();
    }

    if (page === "calendar") {
        renderCalendar(state);
        bindCalendarEvents();
    }
}

function createDefaultState() {
    const today = getTodayISO();

    return {
        startDate: today,
        totalDays: 30,
        completedDays: []
    };
}

function loadState() {
    const rawState = localStorage.getItem(STORAGE_KEY);

    if (!rawState) {
        const defaultState = createDefaultState();
        saveState(defaultState);
        return defaultState;
    }

    try {
        const parsedState = JSON.parse(rawState);
        const normalizedState = {
            startDate: parsedState.startDate || getTodayISO(),
            totalDays: normalizeTotalDays(parsedState.totalDays),
            completedDays: Array.isArray(parsedState.completedDays)
                ? parsedState.completedDays
                    .map(day => Number(day))
                    .filter(day => Number.isInteger(day) && day >= 1 && day <= 120)
                    .sort((a, b) => a - b)
                : []
        };

        saveState(normalizedState);
        return normalizedState;
    } catch (error) {
        const fallbackState = createDefaultState();
        saveState(fallbackState);
        return fallbackState;
    }
}

function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeTotalDays(totalDays) {
    const allowed = [30, 60, 90, 120];
    return allowed.includes(totalDays) ? totalDays : 30;
}

function renderHome(state) {
    const stats = getChallengeStats(state);
    const impulse = DAILY_IMPULSES[(stats.currentDay - 1) % DAILY_IMPULSES.length];
    const progressPercent = Math.round((stats.completedCount / state.totalDays) * 100);

    updateText("personalGreeting", getGreetingText());
    updateText("currentDayValue", `Tag ${stats.currentDay}`);
    updateText("progressValue", `${stats.completedCount} / ${state.totalDays} erledigt`);
    updateText("startDateValue", formatDate(state.startDate));
    updateText("quoteBadge", impulse.type === "quote" ? "Tagesquote" : "Wissenschaftlicher Impuls");
    updateText("quoteText", impulse.quote);
    updateText("quoteAuthor", impulse.author || "");
    updateText("quoteReflection", impulse.reflection);
    updateText("quoteToggleHint", isQuoteExpanded ? "Tippe zum Schliessen" : "Tippe fuer mehr");
    updateQuoteCardState(impulse);
    updateText("completionPercent", `${progressPercent}%`);
    updateText("stageValue", `${state.totalDays} Tage`);
    updateText("remainingValue", `${stats.remainingDays} Tage`);
    updateStartDateInput(state.startDate);

    const ring = document.querySelector(".progress-ring");
    if (ring) {
        ring.style.setProperty("--progress-angle", `${Math.round((progressPercent / 100) * 360)}deg`);
    }
}

function renderCalendar(state) {
    const stats = getChallengeStats(state);
    const grid = document.getElementById("calendarGrid");
    const extendCard = document.getElementById("extendCard");
    const rewardCard = document.getElementById("rewardCard");
    const nextStage = getNextStage(state.totalDays);

    if (!grid) {
        return;
    }

    updateText("calendarGreeting", getGreetingText());
    updateText("calendarRangeValue", `${state.totalDays} Tage`);
    updateText("completedValue", `${stats.completedCount}`);
    updateText("todayValue", `Tag ${stats.currentDay}`);
    updateText("calendarHeading", `Deine freigeschalteten ${state.totalDays} Tage`);

    grid.innerHTML = "";

    for (let day = 1; day <= state.totalDays; day += 1) {
        const isCompleted = state.completedDays.includes(day);
        const isLocked = day > stats.elapsedDays;
        grid.appendChild(createDayCard(day, isCompleted, isLocked));
    }

    renderReward(state, stats, rewardCard);

    if (stats.completedCount === state.totalDays && nextStage) {
        extendCard.classList.remove("hidden");
        updateText("extendTitle", `Auf ${nextStage} Tage verlängern`);
        updateText("extendText", `Stark. Deine ${state.totalDays}-Tage-Etappe ist vollständig. Wenn du weitermachen möchtest, schaltest du jetzt ${nextStage} Tage frei.`);
    } else if (extendCard) {
        extendCard.classList.add("hidden");
    }
}

function renderReward(state, stats, rewardCard) {
    if (!rewardCard) {
        return;
    }

    const reward = REWARDS[state.totalDays];

    if (stats.completedCount === state.totalDays && reward) {
        rewardCard.classList.remove("hidden");
        updateText("rewardTitle", reward.title);
        updateText("rewardText", reward.text);
        return;
    }

    rewardCard.classList.add("hidden");
}

function createDayCard(day, isCompleted, isLocked) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-card";
    button.dataset.day = String(day);
    button.setAttribute("aria-pressed", String(isCompleted));
    button.setAttribute("aria-label", `Tag ${day}${isCompleted ? " erledigt" : ""}`);

    if (isCompleted) {
        button.classList.add("day-card-completed");
    }

    if (isLocked) {
        button.classList.add("day-card-locked");
        button.disabled = true;
    }

    button.innerHTML = `
        <div class="day-card-inner">
            <span class="day-number">Tag ${day}</span>
            <div class="checkbox-shell" aria-hidden="true">
                <svg class="checkmark" viewBox="0 0 24 24">
                    <path d="M5 13.2L10.2 18L19 7.5"></path>
                </svg>
            </div>
            <span class="day-status">${isLocked ? "Gesperrt" : isCompleted ? "Erledigt" : "Offen"}</span>
        </div>
    `;

    return button;
}

function bindCalendarEvents() {
    const grid = document.getElementById("calendarGrid");
    const extendButton = document.getElementById("extendButton");

    if (grid) {
        grid.addEventListener("click", handleDayToggle);
    }

    if (extendButton) {
        extendButton.addEventListener("click", handleExtendChallenge);
    }
}

function bindHomeEvents() {
    const form = document.getElementById("startDateForm");
    const input = document.getElementById("startDateInput");
    const quoteToggle = document.getElementById("quoteToggle");

    if (!input) {
        return;
    }

    input.max = getTodayISO();

    if (form) {
        form.addEventListener("submit", handleStartDateSubmit);
    }

    if (quoteToggle) {
        quoteToggle.addEventListener("click", handleQuoteToggle);
    }
}

function handleQuoteToggle() {
    isQuoteExpanded = !isQuoteExpanded;
    updateText("quoteToggleHint", isQuoteExpanded ? "Tippe zum Schliessen" : "Tippe fuer mehr");
    updateQuoteCardState();
}

function handleStartDateSubmit(event) {
    event.preventDefault();

    const input = document.getElementById("startDateInput");

    if (!input || !input.value) {
        return;
    }

    const nextDate = input.value;
    const currentState = loadState();

    if (nextDate === currentState.startDate) {
        return;
    }

    const nextState = {
        startDate: nextDate,
        totalDays: 30,
        completedDays: []
    };

    saveState(nextState);
    renderHome(nextState);
}

function handleDayToggle(event) {
    const button = event.target.closest(".day-card");

    if (!button || button.disabled) {
        return;
    }

    const day = Number(button.dataset.day);
    const state = loadState();
    const wasStageComplete = state.completedDays.filter(value => value <= state.totalDays).length === state.totalDays;
    const exists = state.completedDays.includes(day);

    if (exists) {
        state.completedDays = state.completedDays.filter(value => value !== day);
    } else {
        state.completedDays.push(day);
        state.completedDays.sort((a, b) => a - b);
    }

    saveState(state);
    renderCalendar(state);

    const isStageComplete = state.completedDays.filter(value => value <= state.totalDays).length === state.totalDays;
    if (!wasStageComplete && isStageComplete) {
        launchConfetti();
    }
}

function handleExtendChallenge() {
    const state = loadState();
    const nextStage = getNextStage(state.totalDays);

    if (!nextStage) {
        return;
    }

    state.totalDays = nextStage;
    saveState(state);
    renderCalendar(state);
}

function getNextStage(totalDays) {
    const stages = [30, 60, 90, 120];
    const index = stages.indexOf(totalDays);
    return index >= 0 && index < stages.length - 1 ? stages[index + 1] : null;
}

function getChallengeStats(state) {
    const elapsedDays = getElapsedDays(state.startDate);
    const currentDay = Math.min(Math.max(elapsedDays, 1), state.totalDays);
    const completedCount = state.completedDays.filter(day => day <= state.totalDays).length;
    const remainingDays = Math.max(state.totalDays - completedCount, 0);

    return {
        elapsedDays,
        currentDay,
        completedCount,
        remainingDays
    };
}

function getElapsedDays(startDate) {
    const start = new Date(`${startDate}T00:00:00`);
    const today = new Date(`${getTodayISO()}T00:00:00`);
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.max(Math.floor((today - start) / msPerDay) + 1, 1);
}

function getTodayISO() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function formatDate(dateString) {
    const date = new Date(`${dateString}T00:00:00`);
    return date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

function updateStartDateInput(dateString) {
    const input = document.getElementById("startDateInput");

    if (input) {
        input.value = dateString;
        input.max = getTodayISO();
    }
}

function updateQuoteCardState() {
    const quoteToggle = document.getElementById("quoteToggle");
    const reflectionWrap = document.getElementById("quoteReflectionWrap");
    const quoteAuthor = document.getElementById("quoteAuthor");

    if (!quoteToggle || !reflectionWrap || !quoteAuthor) {
        return;
    }

    quoteToggle.setAttribute("aria-expanded", String(isQuoteExpanded));
    reflectionWrap.setAttribute("aria-hidden", String(!isQuoteExpanded));
    quoteToggle.classList.toggle("quote-card-expanded", isQuoteExpanded);
    quoteAuthor.classList.toggle("quote-author-hidden", !quoteAuthor.textContent.trim());
}

function getGreetingText() {
    const hour = new Date().getHours();

    if (hour < 11) {
        return `Guten Morgen, ${USER_NAME}`;
    }

    if (hour < 17) {
        return `Guten Mittag, ${USER_NAME}`;
    }

    return `Guten Abend, ${USER_NAME}`;
}

function launchConfetti() {
    const layer = document.getElementById("confettiLayer");

    if (!layer) {
        return;
    }

    layer.innerHTML = "";

    for (let index = 0; index < 28; index += 1) {
        const piece = document.createElement("span");
        const left = 6 + Math.random() * 88;
        const drift = -90 + Math.random() * 180;
        const spin = 360 + Math.random() * 540;
        const delay = Math.random() * 220;
        const duration = 1500 + Math.random() * 900;
        const width = 8 + Math.random() * 8;
        const height = 12 + Math.random() * 10;
        const color = CONFETTI_COLORS[index % CONFETTI_COLORS.length];

        piece.className = "confetti-piece";
        piece.style.left = `${left}%`;
        piece.style.width = `${width}px`;
        piece.style.height = `${height}px`;
        piece.style.background = color;
        piece.style.animationDelay = `${delay}ms`;
        piece.style.animationDuration = `${duration}ms`;
        piece.style.setProperty("--drift-x", `${drift}px`);
        piece.style.setProperty("--spin", `${spin}deg`);

        layer.appendChild(piece);
    }

    window.setTimeout(() => {
        if (layer) {
            layer.innerHTML = "";
        }
    }, 2600);
}

function updateText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}
