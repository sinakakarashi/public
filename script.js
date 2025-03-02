function playGame(userChoice) {
    const choices = ["سنگ", "کاغذ", "قیچی"];

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "مساوی شد!";
        }
        if (
            (userChoice === "سنگ" && computerChoice === "قیچی") ||
            (userChoice === "قیچی" && computerChoice === "کاغذ") ||
            (userChoice === "کاغذ" && computerChoice === "سنگ")
        ) {
            return "شانسی بود! شما بردی 😒";
        } else {
            return "نچ تر زدی! کامپیوتر برد🍆";
        }
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById("result").innerText = 
        `شما انتخاب کردید: ${userChoice}\nکامپیوتر انتخاب کرد: ${computerChoice}\nنتیجه: ${result}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.innerHTML = `
        <h2>بازی سنگ، کاغذ، قیچی</h2>
        <button onclick="playGame('سنگ')">🪨 سنگ</button>
        <button onclick="playGame('کاغذ')">📄 کاغذ</button>
        <button onclick="playGame('قیچی')">✂️ قیچی</button>
        <p id="result"></p>
    `;
    document.body.appendChild(buttonsContainer);
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // بررسی حالت ذخیره شده در Local Storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // کلیک روی دکمه تغییر تم
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // ذخیره‌ی وضعیت در Local Storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "🌙 Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    [toggleButton.style.top](blocked) = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
