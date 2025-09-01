function typeWriter(element, text, speed = 100) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector(".name");
    const titleElement = document.querySelector(".title");

    nameElement.innerHTML = "";
    titleElement.innerHTML = "";

    typeWriter(nameElement, "LÊ TRUNG HIẾU", 150);
    setTimeout(() => typeWriter(titleElement, "Fullstack Developer", 100), 1000);

    const progressBars = document.querySelectorAll(".skill-progress");
    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = width;
        }, 200 + index * 200);
    });
});