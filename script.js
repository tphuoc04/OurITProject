addEventListener("DOMContentLoaded", (event) => {
    const darkMode = document.getElementById("dark-mode");
    
    darkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
