// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Subtle parallax on background (cyber vibe)
const orbit = document.querySelector(".bg-orbit");
if (orbit) {
    window.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        orbit.style.transform = `translate(${x}px, ${y}px)`;
    });
}
