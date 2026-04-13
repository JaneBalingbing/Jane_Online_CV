// Helper to show status messages
function showMessage(text, duration = 2000) {
    const toast = document.getElementById('toast');
    toast.textContent = text;
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', duration);
}

// DOM Elements
const homePage = document.getElementById('homePage');
const resumeContainer = document.getElementById('resumeContainer');
const enterBtn = document.getElementById('enterBtn');
const backHomeBtn = document.getElementById('backHomeBtn');
const contactHomeBtn = document.getElementById('contactHomeBtn');
const contactBtn = document.getElementById('contactBtn');
const copyPhoneBtn = document.getElementById('copyPhoneBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.querySelector('.close-modal');

// Navigation
function showResume() {
    homePage.style.display = 'none';
    resumeContainer.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
    homePage.style.display = 'flex';
    resumeContainer.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

enterBtn.addEventListener('click', showResume);
backHomeBtn.addEventListener('click', showHome);

contactHomeBtn.addEventListener('click', () => {
    showResume();
    setTimeout(() => {
        document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
    }, 200);
});

contactBtn.addEventListener('click', () => {
    if (resumeContainer.style.display === 'none') {
        showResume();
        setTimeout(() => {
            document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
        }, 200);
    } else {
        document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
    }
});

copyPhoneBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText("+639063527266");
        showMessage('Phone number copied!');
    } catch(e) {
        showMessage('+639063527266'); // Fallback if copy fails
    }
});

// Certificate image mapping
// Paths updated to point into image folder
const certImages = {
    '1': 'image/cert1phtyon1.png',
    '2': 'image/cert2pyhton2.png',
    '3': 'image/cert3C++.png',
    '4': 'image/cert4.png',
    '5': 'image/cert5.png',
    '6': 'image/cert6.png'
};

const certTitles = {
    '1': 'Python Essentials 1',
    '2': 'Python Essentials 2',
    '3': 'C++ Essentials 1',
    '4': 'Create Digital Content',
    '5': 'Javascript Essentials 1',
    '6': 'Javascript Essentials 2'
};

// Modal functions
function openModal(certId) {
    modalImage.src = certImages[certId];
    modalTitle.innerText = certTitles[certId];
    modal.style.display = 'flex';
}

document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const certId = btn.getAttribute('data-cert');
        openModal(certId);
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Dark Mode logic
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        showMessage('Dark mode on');
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        showMessage('Light mode on');
    }
});