// ==============================
// Portfolio interactions
// ==============================

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀" : "☾";
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
});

// Mobile navigation
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
});

// Reveal elements while scrolling
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Coding playground
function bubbleSort(array) {
    const arr = [...array];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let changed = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            comparisons++;

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps++;
                changed = true;
            }
        }

        if (!changed) break;
    }

    return { arr, comparisons, swaps };
}

function selectionSort(array) {
    const arr = [...array];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            comparisons++;

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            swaps++;
        }
    }

    return { arr, comparisons, swaps };
}

function runAlgorithm(type) {
    const input = document.getElementById("arrayInput").value;

    const numbers = input
        .split(",")
        .map(value => Number(value.trim()))
        .filter(value => !Number.isNaN(value));

    if (numbers.length === 0) {
        document.getElementById("codeOutput").textContent =
            "Please enter valid numbers.";
        return;
    }

    const start = performance.now();

    const result = type === "bubble"
        ? bubbleSort(numbers)
        : selectionSort(numbers);

    const end = performance.now();

    document.getElementById("codeOutput").textContent =
`Input:       [${numbers.join(", ")}]
Algorithm:   ${type === "bubble" ? "Bubble Sort" : "Selection Sort"}
Output:      [${result.arr.join(", ")}]

Comparisons: ${result.comparisons}
Swaps:       ${result.swaps}
Time:        ${(end - start).toFixed(4)} ms`;
}

document.querySelectorAll(".small-btn").forEach(button => {
    button.addEventListener("click", () => {
        runAlgorithm(button.dataset.algo);
    });
});

// Contact form
// This opens the visitor's default email application.
// Replace YOUR_EMAIL@example.com in index.html with your real email.
document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);

    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    );

    window.location.href =
        `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
});

// Placeholder LinkedIn link.
// Replace "#" with your actual LinkedIn profile URL.
document.getElementById("linkedinLink").addEventListener("click", (event) => {
    if (event.currentTarget.getAttribute("href") === "#") {
        event.preventDefault();
        alert("Add your LinkedIn profile URL in index.html.");
    }
});
