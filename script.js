const sections = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    sections.forEach(section => {

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 1 - (rect.top / windowHeight);

        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        const image = section.querySelector(".image");
        const text = section.querySelector(".text");

        if (section.classList.contains("type-left")) {
            image.style.transform = `translateX(${(1 - progress) * -200}px)`;
            text.style.transform = `translateX(${(1 - progress) * 200}px)`;
        }

        if (section.classList.contains("type-right")) {
            image.style.transform = `translateX(${(1 - progress) * 200}px)`;
            text.style.transform = `translateX(${(1 - progress) * -200}px)`;
        }

        if (section.classList.contains("type-up")) {
            image.style.transform = `translateY(${(1 - progress) * 200}px)`;
            text.style.transform = `translateY(${(1 - progress) * -200}px)`;
        }

        if (section.classList.contains("type-down")) {
            image.style.transform = `translateY(${(1 - progress) * -200}px)`;
            text.style.transform = `translateY(${(1 - progress) * 200}px)`;
        }

        image.style.opacity = progress;
        text.style.opacity = progress;
    });
});


const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery .grid img");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            images.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add("show");
                }, index * 300);
            });

            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.3
});

observer.observe(gallery);


const footer = document.querySelector(".footer");
const socialGroups = document.querySelectorAll(".social-group");

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            socialGroups.forEach((group, index) => {
                setTimeout(() => {
                    group.classList.add("show");
                }, index * 400);
            });

            footerObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

footerObserver.observe(footer);