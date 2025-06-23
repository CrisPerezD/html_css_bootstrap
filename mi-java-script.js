document.addEventListener("DOMContentLoaded", function () {
    const contenido = document.querySelector(".contenido");

    const textos = {
        inicio: "<h2>Bienvenido</h2><p>Contenido de home</p>",
        servicios: `<h2>Servicios</h2><p>Servicios destacados.</p>
        <ul>
            <li>✔ Desarrollo web personalizado</li>
            <li>✔ Diseño responsivo con CSS Grid y Flexbox</li>
            <li>✔ Integración con bases de datos</li>
            <li>✔ Optimización para buscadores (SEO)</li>
        </ul>
        `,
        acerca: "<h2>Acerca de</h2><p>Conoce más sobre nuestra historia y valores.</p>",
        contacto: "<h2>Contacto</h2><p>Envíanos un mensaje a contacto@email.com</p>"
    };

    const enlaces = document.querySelectorAll(".nav-item");

    enlaces.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const clave = this.dataset.contenido;
            contenido.innerHTML = textos[clave] || "<p>Contenido no encontrado</p>";
        });
    });
});
