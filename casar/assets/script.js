// Contagem regressiva
const countdown = document.getElementById('countdown');
const weddingDate = new Date('2024-11-29T17:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "O grande dia chegou!";
    }
};

const interval = setInterval(updateCountdown, 1000);

// Galeria de fotos
const showGalleryButton = document.getElementById('showGallery');
const gallery = document.getElementById('gallery');

showGalleryButton.addEventListener('click', () => {
    gallery.classList.toggle('hidden');
});

// IA que guia os visitantes
const iaMessage = document.createElement('div');
iaMessage.id = 'iaMessage';
iaMessage.innerHTML = `
    <p>Olá! Eu sou a assistente virtual do site. Estou aqui para ajudar você a navegar e encontrar todas as informações que precisa. Nos ajude a casar!</p>
    <button id="closeIaMessage">Fechar</button>
    <button id="showRSVP">RSVP</button>
    <button id="showGifts">Presentes</button>
`;
document.body.appendChild(iaMessage);

const closeIaMessageButton = document.getElementById('closeIaMessage');
closeIaMessageButton.addEventListener('click', () => {
    iaMessage.style.display = 'none';
});

const showRSVPButton = document.getElementById('showRSVP');
showRSVPButton.addEventListener('click', () => {
    document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' });
});

const showGiftsButton = document.getElementById('showGifts');
showGiftsButton.addEventListener('click', () => {
    document.getElementById('presentes').scrollIntoView({ behavior: 'smooth' });
});

// Opções de fala para o assistente virtual
const iaMessages = [
    "Olá! Eu sou a assistente virtual do site. Estou aqui para ajudar você a navegar e encontrar todas as informações que precisa. Nos ajude a casar!",
    "Bem-vindo ao nosso site de casamento! Se precisar de ajuda, estou aqui para guiar você.",
    "Precisa de informações sobre o evento? Estou aqui para ajudar!",
    "Quer ver nossa galeria de fotos? Clique no botão para ver mais!",
    "Obrigado por visitar nosso site! Se tiver dúvidas, estou aqui para ajudar.",
    "Sabia que você pode nos ajudar? Confira a seção de presentes para mais detalhes!",
    "Estamos muito felizes em compartilhar esse momento especial com você!",
    "Não se esqueça de confirmar sua presença na seção RSVP!",
    "Veja as dicas para convidados para facilitar sua chegada ao evento.",
    "Aproveite para conhecer nossa história e ver fotos especiais na galeria!"
];

let currentMessageIndex = 0;

const updateIaMessage = () => {
    iaMessage.querySelector('p').innerText = iaMessages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % iaMessages.length;
};

setInterval(updateIaMessage, 10000); // Atualiza a mensagem a cada 10 segundos

// Menu de hambúrguer
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navLinks.classList.toggle('show');
});

// Header fixo que diminui ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
