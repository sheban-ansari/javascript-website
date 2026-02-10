const dropdown = document.getElementById("skillDropdown");
const dropdownResult = document.getElementById("dropdownResult");

dropdown.addEventListener("change", () => {
    dropdownResult.textContent = dropdown.value
        ? "You selected: " + dropdown.value
        : "";
});

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        formMessage.style.color = "red";
        formMessage.textContent = "All fields are required!";

        setTimeout(() => {
            formMessage.textContent = "";
        }, 2000);

    } else if (!email.includes("@")) {
        formMessage.style.color = "red";
        formMessage.textContent = "Enter a valid email!";

        setTimeout(() => {
            formMessage.textContent = "";
        }, 3000);

    } else {
        formMessage.style.color = "green";
        formMessage.textContent = "Form submitted successfully!";
        form.reset();

        setTimeout(() => {
            formMessage.textContent = "";
        }, 2000);
    }
});
