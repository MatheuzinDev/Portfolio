const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('section')

elements.forEach((element) => {
    myObserver.observe(element)
})

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('element')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

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
                default:
                    li.classList.add("default");
                    break;
            }

            techList.appendChild(li);
        });

        const deployBtn = document.getElementById("deployBtn");
        const githubBtn = document.getElementById("githubBtn");

        deployBtn.onclick = function() {
            window.open(deploy, "_blank");
        }

        githubBtn.onclick = function() {
            window.open(github, "_blank");
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

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            openModal(
                "CloudTasks",
                "O CloudTasks é uma aplicação web para gerenciamento de tarefas, permitindo criar, editar, concluir e excluir atividades. Com autenticação segura e organização separada entre tarefas pendentes e concluídas, oferece uma experiência intuitiva e eficiente.",
                "assents/cloudtasks.png",
                ["html", "css", "javascript", "react", "node.js", "sql", "bootstrap", "prisma", "express"],
                "https://cloud-tasks-three.vercel.app/", 
                "https://github.com/MatheuzinDev/cloudtasks",
            );
        });
    });
});