:root {
    --bg: #f6f7fb;
    --surface: #ffffff;
    --surface-2: #eef0f6;
    --text: #171923;
    --muted: #626979;
    --border: #dfe2ea;
    --accent: #6c5ce7;
    --accent-2: #00a8ff;
    --dark: #11131b;
    --dark-2: #191c27;
    --shadow: 0 18px 50px rgba(20, 24, 40, .09);
    --radius: 20px;
}

body.dark {
    --bg: #0d0f15;
    --surface: #151821;
    --surface-2: #1d202b;
    --text: #f4f5f8;
    --muted: #a5abb9;
    --border: #2a2e3a;
    --shadow: 0 18px 50px rgba(0, 0, 0, .25);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.65;
    transition: background .25s ease, color .25s ease;
}

a {
    color: inherit;
    text-decoration: none;
}

button, input, textarea {
    font: inherit;
}

.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    height: 72px;
    padding: 0 max(5vw, 24px);
    display: flex;
    align-items: center;
    gap: 28px;
    background: color-mix(in srgb, var(--bg) 88%, transparent);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
}

.logo {
    font-size: 26px;
    font-weight: 900;
    letter-spacing: -1px;
    margin-right: auto;
}

.logo span,
.hero h1 span {
    color: var(--accent);
}

nav {
    display: flex;
    gap: 24px;
}

nav a {
    font-size: 14px;
    color: var(--muted);
    transition: color .2s ease;
}

nav a:hover {
    color: var(--text);
}

.theme-toggle,
.menu-toggle {
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
    border-radius: 10px;
    cursor: pointer;
}

.theme-toggle {
    width: 38px;
    height: 38px;
}

.menu-toggle {
    display: none;
    padding: 8px 11px;
}

.section {
    width: min(1160px, 90%);
    margin: auto;
    padding: 110px 0;
}

.hero {
    min-height: calc(100vh - 72px);
    display: grid;
    grid-template-columns: 1.15fr .85fr;
    align-items: center;
    gap: 60px;
    padding-top: 80px;
}

.eyebrow {
    color: var(--accent);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 14px;
}

.hero h1 {
    font-size: clamp(48px, 7vw, 88px);
    line-height: .98;
    letter-spacing: -4px;
    margin-bottom: 20px;
}

.hero h2 {
    max-width: 680px;
    font-size: clamp(24px, 3vw, 38px);
    line-height: 1.15;
    letter-spacing: -1px;
    margin-bottom: 20px;
}

.hero-text {
    max-width: 680px;
    color: var(--muted);
    font-size: 17px;
}

.hero-buttons {
    display: flex;
    gap: 12px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 19px;
    border-radius: 11px;
    font-weight: 750;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn.primary {
    background: var(--text);
    color: var(--bg);
    border-color: var(--text);
}

.btn.secondary {
    background: var(--surface);
}

.quick-links {
    display: flex;
    gap: 10px;
    margin-top: 24px;
    color: var(--muted);
    font-size: 14px;
}

.quick-links a:hover {
    color: var(--accent);
}

.hero-card {
    perspective: 1000px;
}

.terminal {
    background: #11131b;
    color: #e7e9ee;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(0,0,0,.2);
    transform: rotate(2deg);
}

.terminal-top {
    display: flex;
    gap: 7px;
    padding: 14px 17px;
    background: #1a1d27;
}

.terminal-top span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #555b68;
}

.terminal-body {
    padding: 28px;
    font: 14px/2 "SFMono-Regular", Consolas, monospace;
}

.purple { color: #c792ea; }
.green { color: #9ccc65; }
.cursor { animation: blink 1s infinite; }

@keyframes blink {
    50% { opacity: 0; }
}

.stats {
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
}

.stats div {
    background: var(--surface);
    padding: 26px;
}

.stats strong {
    display: block;
    font-size: 30px;
    letter-spacing: -1px;
}

.stats span {
    color: var(--muted);
    font-size: 13px;
}

.section-heading {
    margin-bottom: 45px;
}

.section-heading h2 {
    font-size: clamp(34px, 5vw, 54px);
    line-height: 1.05;
    letter-spacing: -2px;
    margin-bottom: 12px;
}

.section-heading > p:last-child {
    color: var(--muted);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
}

.about-text p {
    color: var(--muted);
    font-size: 18px;
    margin-bottom: 20px;
}

.about-panel {
    display: grid;
    gap: 12px;
}

.mini-card {
    display: flex;
    gap: 18px;
    padding: 24px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: var(--shadow);
}

.mini-icon {
    font-size: 24px;
}

.mini-card h3 {
    margin-bottom: 3px;
}

.mini-card p {
    color: var(--muted);
    font-size: 14px;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.project-card {
    position: relative;
    min-height: 390px;
    padding: 30px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    transition: transform .25s ease, border-color .25s ease;
}

.project-card:hover {
    transform: translateY(-7px);
    border-color: var(--accent);
}

.project-number {
    position: absolute;
    top: 24px;
    right: 25px;
    color: var(--border);
    font-size: 34px;
    font-weight: 900;
}

.tag {
    display: inline-block;
    width: fit-content;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    padding: 5px 10px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 800;
    margin-bottom: 25px;
}

.project-card h3 {
    font-size: 25px;
    line-height: 1.2;
    margin-bottom: 15px;
}

.project-card p {
    color: var(--muted);
    font-size: 14px;
}

.tech-list,
.skill-pills,
.case-flow {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}

.tech-list {
    margin-top: 25px;
}

.tech-list span,
.skill-pills span {
    padding: 6px 9px;
    background: var(--surface-2);
    border-radius: 8px;
    font-size: 11px;
    color: var(--muted);
}

.project-link {
    margin-top: auto;
    padding-top: 30px;
    font-weight: 800;
}

.dark-section {
    width: 100%;
    max-width: none;
    padding-left: max(5vw, 5%);
    padding-right: max(5vw, 5%);
    background: var(--dark);
    color: #f4f5f8;
}

.dark-section .section-heading {
    max-width: 1160px;
    margin-left: auto;
    margin-right: auto;
}

.dark-section .eyebrow {
    color: #9b8cff;
}

.case-list {
    width: min(1160px, 100%);
    margin: auto;
}

.case-item {
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 35px;
    padding: 38px 0;
    border-top: 1px solid #303440;
}

.case-item:last-child {
    border-bottom: 1px solid #303440;
}

.case-meta {
    color: #858b9b;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
}

.case-item h3 {
    font-size: 25px;
    margin-bottom: 10px;
}

.case-item p {
    color: #aeb4c2;
    max-width: 800px;
}

.case-flow {
    margin-top: 20px;
    align-items: center;
}

.case-flow span {
    padding: 8px 12px;
    border: 1px solid #373b48;
    border-radius: 8px;
    font-size: 12px;
    color: #cbd0db;
}

.case-flow b {
    color: #7d70f1;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
}

.skill-group {
    padding: 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
}

.skill-group h3 {
    margin-bottom: 18px;
}

.playground-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
}

.playground-input,
.playground-output {
    padding: 30px;
}

.playground-output {
    background: #11131b;
    color: #e6e8ee;
}

.playground-input label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
}

.playground-input input {
    width: 100%;
    padding: 13px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    border-radius: 10px;
    outline: none;
}

.algorithm-buttons {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    flex-wrap: wrap;
}

.small-btn {
    border: 1px solid var(--border);
    background: var(--surface-2);
    color: var(--text);
    padding: 9px 12px;
    border-radius: 9px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
}

.playground-output > span {
    font-size: 11px;
    letter-spacing: 2px;
    color: #8d95a6;
}

.playground-output pre {
    white-space: pre-wrap;
    margin-top: 18px;
    font: 14px/1.8 Consolas, monospace;
}

.achievement {
    padding-top: 0;
}

.award {
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 35px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: linear-gradient(135deg, var(--surface), var(--surface-2));
}

.award-icon {
    font-size: 45px;
}

.award h2 {
    margin-bottom: 5px;
}

.award p:last-child {
    color: var(--muted);
}

.contact-grid {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 80px;
}

.contact-copy h3 {
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 15px;
}

.contact-copy p {
    color: var(--muted);
    margin-bottom: 20px;
}

.email-link {
    font-weight: 800;
    color: var(--accent);
}

.contact-form {
    display: grid;
    gap: 18px;
}

.contact-form label {
    font-size: 13px;
    font-weight: 700;
}

.contact-form input,
.contact-form textarea {
    display: block;
    width: 100%;
    margin-top: 7px;
    padding: 13px 14px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
    border-radius: 10px;
    outline: none;
    resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--accent);
}

.form-note {
    color: var(--muted);
    font-size: 12px;
}

footer {
    padding: 30px 5vw;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: var(--muted);
    font-size: 13px;
}

footer a {
    color: var(--text);
    font-weight: 700;
}

.reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity .7s ease, transform .7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 900px) {
    nav {
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        display: none;
        flex-direction: column;
        padding: 20px 5vw;
        background: var(--surface);
        border-bottom: 1px solid var(--border);
    }

    nav.open {
        display: flex;
    }

    .menu-toggle {
        display: block;
    }

    .hero,
    .about-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }

    .hero {
        padding-top: 60px;
    }

    .hero-card {
        max-width: 650px;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .skills-grid,
    .playground-box {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .section {
        padding: 80px 0;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    .case-item {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .award {
        align-items: flex-start;
        flex-direction: column;
    }

    footer {
        flex-direction: column;
    }
}
