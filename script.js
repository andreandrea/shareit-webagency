/* =============================================
   MENU FULLSCREEN
   ============================================= */
function toggleMenu() {
    const menu = document.getElementById('fullMenu');
    menu.classList.toggle('active');
    // Blocca lo scroll della pagina quando il menu è aperto
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
}

/* =============================================
   CAROUSEL (Chi Siamo)
   ============================================= */
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function goToSlide(index) {
    // Rimuovi classe active da tutti
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Aggiungi classe active a quello selezionato
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto-play opzionale per il carousel (ogni 5 secondi)
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
    
    const resultText = document.getElementById('quizResultText');
    resultText.innerHTML = `Hai totalizzato ${quizScore} su ${totalQuestions}!<br>`;
    
    if (quizScore === totalQuestions) {
        resultText.innerHTML += "Complimenti! Sei un esperto digitale. 🚀";
    } else {
        resultText.innerHTML += "Niente male! Possiamo aiutarti a migliorare ancora.";
    }
}

function resetQuiz() {
    quizScore = 0;
    currentQuestion = 1;
    document.getElementById('qResult').classList.remove('active');
    document.getElementById('q1').classList.add('active');
    document.getElementById('quizProgressBar').style.width = '0%';
}

/* =============================================
   GESTIONE FORM CONTATTI
   ============================================= */
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Grazie ${name}! Il tuo messaggio è stato ricevuto (Simulazione).`);
    event.target.reset();
}

/* =============================================
   NOTIFICA SERVIZI
   ============================================= */
function showService(index) {
    const services = [
        "Sviluppo Web", "App Mobile", "E-commerce", 
        "Digital Marketing", "Cloud Solutions", "Consulenza IT"
    ];
    console.log(`Hai selezionato il servizio: ${services[index]}`);
    // Qui potresti aprire una modale o scorrere a una sezione specifica
}