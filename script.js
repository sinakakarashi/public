document.addEventListener("DOMContentLoaded", () => {
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
            return "تبریک! شما بردید 🎉";
        } else {
            return "باختی! کامپیوتر برد 😢";
        }
    }

    function playGame(userChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        document.getElementById("result").innerText = 
            `شما انتخاب کردید: ${userChoice}\nکامپیوتر انتخاب کرد: ${computerChoice}\nنتیجه: ${result}`;
    }

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
