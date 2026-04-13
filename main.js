
const generateBtn = document.getElementById('generate');
const numbersContainer = document.querySelector('.numbers');
const themeToggle = document.getElementById('theme-toggle');

// Theme Toggle Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const targetTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
});

generateBtn.addEventListener('click', () => {
    generateAndDisplayNumbers();
});

function generateAndDisplayNumbers() {
    const numbers = [];
    while (numbers.length < 7) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    const mainNumbers = numbers.slice(0, 6);
    const bonusNumber = numbers[6];

    displayNumbers(mainNumbers, bonusNumber);
}

function displayNumbers(mainNumbers, bonusNumber) {
    numbersContainer.innerHTML = '';

    for (const number of mainNumbers) {
        const ball = createBall(number);
        numbersContainer.appendChild(ball);
    }

    const bonusBall = createBall(bonusNumber, true);
    numbersContainer.appendChild(bonusBall);
}

function createBall(number, isBonus = false) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    if (isBonus) {
        ball.classList.add('bonus');
    } else {
        ball.style.backgroundColor = getBallColor(number);
    }
    ball.textContent = number;
    return ball;
}

function getBallColor(number) {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa';    // Gray
    return '#b0d840';                   // Green
}

// Initial generation
// generateAndDisplayNumbers();
