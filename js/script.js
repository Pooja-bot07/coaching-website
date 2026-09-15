document.getElementById("enquiryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const parentName = document.getElementById("parentName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const studentName = document.getElementById("studentName").value.trim();
    const studentClass = document.getElementById("studentClass").value;
    const program = document.getElementById("program").value;
    const message = document.getElementById("message").value.trim();

    const whatsappMessage =
        `Hello Saraswati Abacus & Vedic Classes,\n\n` +
        `I would like to make an enquiry.\n\n` +
        `Parent / Guardian Name: ${parentName}\n` +
        `Contact Number: ${phone}\n` +
        `Student Name: ${studentName}\n` +
        `Class: ${studentClass || "Not specified"}\n` +
        `Interested In: ${program || "Not specified"}\n` +
        `Message: ${message || "No message"}`;

    const whatsappURL =
        `https://wa.me/917219217005?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
});

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");

    if (mobileNav.classList.contains("open")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        menuBtn.setAttribute("aria-label", "Close menu");
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuBtn.setAttribute("aria-label", "Open menu");
    }
});

const mobileLinks = mobileNav.querySelectorAll("a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("open");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuBtn.setAttribute("aria-label", "Open menu");
    });
});