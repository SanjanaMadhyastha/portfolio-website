// Dynamic Content Loading with Smooth Fade-In/Out
const pages = {
    home: `
        <div id="home" class="content">
            <h1 id="welcome">Welcome to My Professional Profile</h1>
            <p>Explore different sections using the navigation.</p>
        </div>
    `,
    about: `
        <div id="about" class="content">
            <h1>About Me</h1>
            <p>I am a creative web developer passionate about designing clean, modern web solutions.</p>
            <img src="images/photo.jpg" alt="Profile Picture" class="profile-img">
        </div>
    `,
    skills: `
        <div id="skills" class="content">
            <h1>Skills</h1>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>C++</li>
                <li> Java</li>
               
            </ul>
        </div>
    `,
    hobbies: `
        <div id="hobbies" class="content">
            <h1>Hobbies & Interests</h1>
            <p>Dancing, Traveling, Cooking</p>
        </div>
    `,
    portfolio: `
        <div id="portfolio" class="content">
            <h1>Portfolio</h1>
            <p>Projects I have worked on:</p>
            <ul>
                <li><strong>Portfolio Website</strong>: A personal portfolio to showcase my work.</li>
                <li><strong>E-commerce Platform</strong>: A fully functional e-commerce web app.</li>
                <li><strong>Software Testing</strong>: I automated functional test cases for Facebook using Selenium and ChromeDriver, including login, creating posts, and validating UI interactions.</li>
            </ul>
        </div>
    `,
    contact: `
        <div id="contact" class="content">
            <h1>Contact Me</h1>
            <p>Email: madhyasthasanjana20@gmail.com</p>
            <p>Whatsapp: +91 8217683184</p>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/sanjana-madhyastha-918333255/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/SanjanaMadhyastha" target="_blank"><i class="fab fa-github"></i></a>
            </div>
        </div>
    `
};

// Load Pages Dynamically with Animations
function loadPage(page) {
    const contentArea = document.getElementById('content-area');
    contentArea.classList.add('fade-out');
    setTimeout(() => {
        contentArea.innerHTML = pages[page];
        contentArea.classList.remove('fade-out');
        contentArea.classList.add('fade-in');
    }, 300);
}

// Dark/Light Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
