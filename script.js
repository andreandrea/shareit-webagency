/* =============================================
   LOGICA MENU CENTRALE
   ============================================= */
const logoTrigger = document.getElementById('logoTrigger');
const menuContainer = document.getElementById('menuContainer');
const menuBackground = document.getElementById('menuBackground');
const menuOverlay = document.getElementById('menuOverlay');
let isMenuOpen = false;

function toggleMenu(show) {
    const shouldShow = (show === undefined) ? !isMenuOpen : show;
    isMenuOpen = shouldShow;
    
    menuContainer.classList.toggle('active', shouldShow);
    menuBackground.classList.toggle('active', shouldShow);
    menuOverlay.classList.toggle('active', shouldShow);
    
    document.body.style.overflow = shouldShow ? 'hidden' : '';
}

logoTrigger.addEventListener('click', () => toggleMenu());
menuOverlay.addEventListener('click', () => toggleMenu(false));

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) toggleMenu(false);
});

/* =============================================
   CAROUSEL (Chi Siamo)
   ============================================= */
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}, 5000);

/* =============================================
   SISTEMA QUIZ
   ============================================= */
let quizScore = 0;
let currentQuestion = 1;
const totalQuestions = 3;

function updateProgressBar() {
    const progress = (currentQuestion / totalQuestions) * 100;
    document.getElementById('quizProgressBar').style.width = `${progress}%`;
}

function nextQuestion(isCorrect) {
    if (isCorrect) quizScore++;
    document.getElementById(`q${currentQuestion}`).classList.remove('active');
    currentQuestion++;
    if (currentQuestion <= totalQuestions) {
        document.getElementById(`q${currentQuestion}`).classList.add('active');
        updateProgressBar();
    }
}

function finishQuiz(isCorrect) {
    if (isCorrect) quizScore++;
    document.getElementById(`q${currentQuestion}`).classList.remove('active');
    document.getElementById('qResult').classList.add('active');
    document.getElementById('quizProgressBar').style.width = '100%';
    const res = document.getElementById('quizResultText');
    res.innerHTML = `Punteggio: ${quizScore}/${totalQuestions}<br>` + 
        (quizScore === totalQuestions ? "Esperto Digitale! 🚀" : "Puoi migliorare!");
}

function resetQuiz() {
    quizScore = 0; currentQuestion = 1;
    document.getElementById('qResult').classList.remove('active');
    document.getElementById('q1').classList.add('active');
    document.getElementById('quizProgressBar').style.width = '0%';
}

/* =============================================
   UTILITY
   ============================================= */
function handleSubmit(e) {
    e.preventDefault();
    alert("Messaggio inviato con successo!");
    e.target.reset();
}

function showService(i) {
    console.log("Servizio selezionato: " + i);
}