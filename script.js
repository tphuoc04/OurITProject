addEventListener("DOMContentLoaded", (event) => {
    const app = document.querySelector("#app");
    const button = document.querySelector("#button");
    
    button.addEventListener("click", () => {
        app.innerHTML = "Hello World";
    });
});
