// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente ✅");

    // --- Navegación suave entre secciones ---
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute("href"));
            if (destino) {
                destino.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // --- Botón para volver arriba ---
    const botonArriba = document.createElement("button");
    botonArriba.textContent = "↑";
    botonArriba.id = "botonArriba";
    botonArriba.style.position = "fixed";
    botonArriba.style.bottom = "20px";
    botonArriba.style.right = "20px";
    botonArriba.style.padding = "10px 15px";
    botonArriba.style.border = "none";
    botonArriba.style.borderRadius = "50%";
    botonArriba.style.background = "#e74c3c";
    botonArriba.style.color = "white";
    botonArriba.style.fontSize = "18px";
    botonArriba.style.cursor = "pointer";
    botonArriba.style.display = "none";
    botonArriba.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    document.body.appendChild(botonArriba);

    botonArriba.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botonArriba.style.display = "block";
        } else {
            botonArriba.style.display = "none";
        }
    });

    // --- Confirmación de envío de formulario ---
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Gracias por contactarnos, " + form.nombre.value + " 💌");
            form.reset();
        });
    }

    // --- Pequeña animación de aparición al hacer scroll ---
    const elementos = document.querySelectorAll(".box, .container, img, h2");
    const aparecer = () => {
        const trigger = window.innerHeight * 0.85;
        elementos.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < trigger) {
                el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            } else {
                el.style.opacity = "0";
                el.style.transform = "translateY(40px)";
            }
        });
    };

    window.addEventListener("scroll", aparecer);
    aparecer(); // ejecutar al cargar
});
