/* =============================================
   MENU FULLSCREEN
   ============================================= */
function toggleMenu() {
    const menu = document.getElementById('fullMenu');
    menu.classList.toggle('active');
}

/* =============================================
   CAROUSEL (Chi Siamo)
   ============================================= */
let currentSlide = 0;

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots   = document.querySelectorAll('.carousel-dot');

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto-avanzamento del carousel ogni 4 secondi
setInterval(function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const next   = (currentSlide + 1) % slides.length;
    goToSlide(next);
}, 4000);

/* =============================================
   SERVICE MODAL (Servizi)
   ============================================= */
const serviceDetails = [
    {
        title: 'Sviluppo Web',
        description: 'Creiamo siti web moderni, veloci e completamente responsive. Utilizziamo le tecnologie più aggiornate per garantire performance ottimali e un\'esperienza utente eccellente.'
    },
    {
        title: 'App Mobile',
        description: 'Sviluppiamo applicazioni native e cross-platform per iOS e Android. Dal concept al deployment, gestiamo ogni fase del processo di sviluppo mobile.'
    },
    {
        title: 'E-commerce',
        description: 'Realizziamo piattaforme di vendita online ottimizzate per massimizzare le conversioni. Integriamo i principali gateway di pagamento e sistemi di gestione inventario.'
    },
    {
        title: 'Digital Marketing',
        description: 'Elaboriamo strategie complete di marketing digitale: SEO, SEM, social media marketing e content strategy per aumentare la tua visibilità online.'
    },
    {
        title: 'Cloud Solutions',
        description: 'Progettiamo e gestiamo infrastrutture cloud scalabili su AWS, Google Cloud e Azure. Garantiamo alta disponibilità, sicurezza e ottimizzazione dei costi.'
    },
    {
        title: 'Consulenza IT',
        description: 'Offriamo supporto strategico e tecnico per guidare la tua trasformazione digitale. Analizziamo i tuoi processi e proponiamo soluzioni tecnologiche su misura.'
    }
];

function showService(index) {
    const service = serviceDetails[index];
    alert(service.title + '\n\n' + service.description);
    // Sostituisci l'alert con una modale custom se lo desideri
}

/* =============================================
   QUIZ
   ============================================= */
let currentQuestion = 1;
let correctAnswers  = 0;
const totalQuestions = 3;

function updateProgress(step) {
    const bar = document.getElementById('quizProgressBar');
    bar.style.width = ((step / totalQuestions) * 100) + '%';
}

function nextQuestion(isCorrect) {
    if (isCorrect) correctAnswers++;

    document.getElementById('q' + currentQuestion).classList.remove('active');
    currentQuestion++;
    updateProgress(currentQuestion - 1);

    const next = document.getElementById('q' + currentQuestion);
    if (next) next.classList.add('active');
}

function finishQuiz(isCorrect) {
    if (isCorrect) correctAnswers++;

    document.getElementById('q' + currentQuestion).classList.remove('active');
    updateProgress(totalQuestions);

    const resultEl   = document.getElementById('qResult');
    const resultText = document.getElementById('quizResultText');

    let message;
    if (correctAnswers === 3) {
        message = '🏆 Perfetto! Hai risposto correttamente a tutte e 3 le domande!';
    } else if (correctAnswers === 2) {
        message = '👍 Ottimo! Hai risposto correttamente a ' + correctAnswers + ' domande su 3.';
    } else if (correctAnswers === 1) {
        message = '📚 Hai risposto correttamente a ' + correctAnswers + ' domanda su 3. Continua a studiare!';
    } else {
        message = '💡 Nessuna risposta corretta. Non ti preoccupare, riprova!';
    }

    resultText.textContent = message;
    resultEl.classList.add('active');
}

function resetQuiz() {
    // Nascondi risultato e resetta variabili
    document.getElementById('qResult').classList.remove('active');
    currentQuestion = 1;
    correctAnswers  = 0;
    updateProgress(0);

    // Mostra prima domanda
    document.getElementById('q1').classList.add('active');
}

/* =============================================
   FORM CONTATTI
   ============================================= */
function handleSubmit(event) {
    event.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email) {
        alert('Per favore compila tutti i campi obbligatori.');
        return;
    }

    // Qui puoi integrare la tua logica di invio (fetch, emailjs, ecc.)
    console.log('Form inviato:', { name, email, message });
    alert('Grazie ' + name + '! Il tuo messaggio è stato inviato. Ti ricontatteremo presto.');
    event.target.reset();
}