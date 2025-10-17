// Observer para animações suaves sem problemas de troca de lugar
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Pequeno delay para evitar conflitos com media queries
            setTimeout(() => {
                entry.target.classList.add('show');
            }, 50);
        }
    })
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

const elements = document.querySelectorAll('section');

elements.forEach((element) => {
    myObserver.observe(element);
});

// Menu mobile moderno
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay');
let closeIcon = document.getElementById('close-icon');

function abrirMenu() {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Previne scroll do body
}

function fecharMenu() {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura scroll do body
}

// Event listeners para o menu
btnMenu.addEventListener('click', abrirMenu);
closeIcon.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);

// Fechar menu ao clicar em um link
document.querySelectorAll('.navList-mobile a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});

// Fechar menu com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('abrir-menu')) {
        fecharMenu();
    }
});

// Modal de projetos
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");

    function openModal(title, description, image, techs, deploy, github) {
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDescription").textContent = description;
        document.getElementById("modalImage").src = image;

        const techList = document.getElementById("modalTechList");
        techList.innerHTML = "";
        techs.forEach(tech => {
            const li = document.createElement("li");
            li.textContent = tech;

            switch (tech.toLowerCase()) {
                case "html":
                    li.classList.add("html");
                    break;
                case "css":
                    li.classList.add("css");
                    break;
                case "javascript":
                    li.classList.add("javascript");
                    break;
                case "react":
                    li.classList.add("react");
                    break;
                case "sql":
                    li.classList.add("sql");
                    break;
                case "node.js":
                case "nodejs":
                    li.classList.add("nodejs");
                    break;
                case "mongodb":
                    li.classList.add("mongodb");
                    break;
                case "bootstrap":
                    li.classList.add("bootstrap");
                    break;
                case "prisma":
                    li.classList.add("prisma");
                    break;
                case "express":
                    li.classList.add("express");
                    break;
                case "typescript":
                    li.classList.add("typescript");
                    break;
                default:
                    li.classList.add("default");
                    break;
            }

            techList.appendChild(li);
        });

        const deployBtn = document.getElementById("deployBtn");
        const githubBtn = document.getElementById("githubBtn");

        deployBtn.onclick = function() {
            if (deploy && deploy !== "#") {
                window.open(deploy, "_blank");
            }
        }

        githubBtn.onclick = function() {
            if (github && github !== "#") {
                window.open(github, "_blank");
            }
        }

        modal.style.display = "flex";
    }

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Eventos para os cards modernos
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function (e) {
            // Prevenir que o modal abra se clicar nos botões
            if (e.target.closest('.card-button') || e.target.closest('.view-project-btn')) {
                return;
            }
            
            const cardTitle = this.querySelector('.card-title').textContent;
            
            if (cardTitle === "CloudTasks") {
                openModal(
                    "CloudTasks",
                    "O CloudTasks é uma aplicação web moderna para gerenciamento de tarefas, desenvolvida com as melhores práticas do mercado. Oferece autenticação segura, organização inteligente entre tarefas pendentes e concluídas, e uma interface intuitiva que proporciona uma excelente experiência do usuário. O sistema permite criar, editar, concluir e excluir atividades de forma eficiente.",
                    "assents/cloudtasks.png",
                    ["React", "Node.js", "MongoDB", "TypeScript", "Express", "JWT", "CSS3", "HTML5"],
                    "https://cloud-tasks-three.vercel.app/", 
                    "https://github.com/MatheuzinDev/cloudtasks"
                );
            } else if (cardTitle === "Novo Projeto") {
                openModal(
                    "Novo Projeto",
                    "Estou trabalhando em um novo projeto empolgante! Em breve trarei mais detalhes sobre as tecnologias utilizadas e funcionalidades implementadas. Fique atento às atualizações!",
                    "assents/cloudtasks-logo.png",
                    ["React", "Next.js", "PostgreSQL", "TypeScript"],
                    "#", 
                    "#"
                );
            }
        });
    });

    // Eventos para os botões dos cards
    document.querySelectorAll('.card-button.eye').forEach(btn => {
        if (!btn.disabled && !btn.textContent.includes('Em Breve')) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.card');
                const cardTitle = card.querySelector('.card-title').textContent;
                
                if (cardTitle === "CloudTasks") {
                    window.open("https://cloud-tasks-three.vercel.app/", "_blank");
                }
            });
        }
    });

    document.querySelectorAll('.card-button.github').forEach(btn => {
        if (!btn.disabled && !btn.textContent.includes('Em Breve')) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.card');
                const cardTitle = card.querySelector('.card-title').textContent;
                
                if (cardTitle === "CloudTasks") {
                    window.open("https://github.com/MatheuzinDev/cloudtasks", "_blank");
                }
            });
        }
    });

    // Eventos para os botões "Ver Projeto" no overlay
    document.querySelectorAll('.view-project-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.card');
            const cardTitle = card.querySelector('.card-title').textContent;
            
            if (cardTitle === "CloudTasks") {
                openModal(
                    "CloudTasks",
                    "O CloudTasks é uma aplicação web moderna para gerenciamento de tarefas, desenvolvida com as melhores práticas do mercado. Oferece autenticação segura, organização inteligente entre tarefas pendentes e concluídas, e uma interface intuitiva que proporciona uma excelente experiência do usuário. O sistema permite criar, editar, concluir e excluir atividades de forma eficiente.",
                    "assents/cloudtasks.png",
                    ["React", "Node.js", "MongoDB", "TypeScript", "Express", "JWT", "CSS3", "HTML5"],
                    "https://cloud-tasks-three.vercel.app/", 
                    "https://github.com/MatheuzinDev/cloudtasks"
                );
            } else if (cardTitle === "Novo Projeto") {
                openModal(
                    "Novo Projeto",
                    "Estou trabalhando em um novo projeto empolgante! Em breve trarei mais detalhes sobre as tecnologias utilizadas e funcionalidades implementadas. Fique atento às atualizações!",
                    "assents/cloudtasks-logo.png",
                    ["React", "Next.js", "PostgreSQL", "TypeScript"],
                    "#", 
                    "#"
                );
            }
        });
    });
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Fechar menu mobile se estiver aberto
            if (menu.classList.contains('abrir-menu')) {
                fecharMenu();
            }
        }
    });
});

// Adicionar classe para animação quando a página carrega
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Prevenir comportamento padrão de arrastar imagens
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Melhorar acessibilidade do menu
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar atributos ARIA para acessibilidade
    btnMenu.setAttribute('aria-label', 'Abrir menu de navegação');
    btnMenu.setAttribute('aria-expanded', 'false');
    btnMenu.setAttribute('aria-controls', 'menu-mobile');
    
    closeIcon.setAttribute('aria-label', 'Fechar menu de navegação');
    
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('aria-label', 'Menu de navegação mobile');
    
    // Atualizar atributos ARIA quando o menu abre/fecha
    function atualizarAriaMenu(aberto) {
        btnMenu.setAttribute('aria-expanded', aberto);
        menu.setAttribute('aria-hidden', !aberto);
    }
    
    // Sobrescrever funções para incluir ARIA
    const abrirMenuOriginal = abrirMenu;
    const fecharMenuOriginal = fecharMenu;
    
    abrirMenu = function() {
        abrirMenuOriginal();
        atualizarAriaMenu(true);
    }
    
    fecharMenu = function() {
        fecharMenuOriginal();
        atualizarAriaMenu(false);
    }
    
    // Reatribuir event listeners com as funções atualizadas
    btnMenu.removeEventListener('click', abrirMenuOriginal);
    closeIcon.removeEventListener('click', fecharMenuOriginal);
    overlay.removeEventListener('click', fecharMenuOriginal);
    
    btnMenu.addEventListener('click', abrirMenu);
    closeIcon.addEventListener('click', fecharMenu);
    overlay.addEventListener('click', fecharMenu);
});

// Adicionar feedback tátil para dispositivos com touch
document.addEventListener('touchstart', function() {}, { passive: true });

// Otimização de performance - Intersection Observer para imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Adicionar animação de digitação para o título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Iniciar animação de digitação quando a página carregar
window.addEventListener('load', function() {
    const title = document.querySelector('.body-home h1');
    if (title) {
        const originalText = title.textContent;
        typeWriter(title, originalText, 120);
    }
});