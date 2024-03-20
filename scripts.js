// Nav-Scroll
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.sticky-nav a');
    for (const link of links) {
        link.addEventListener('click', clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);

        if (targetElement) {
            const targetHeight = targetElement.clientHeight;
            const offsetTop = targetElement.offsetTop;
            const windowHeight = window.innerHeight;

            const scrollToOffset = offsetTop - (windowHeight - targetHeight) / 2;

            window.scrollTo({
                top: scrollToOffset,
                behavior: 'smooth'
            });
        }
    }
});

// Hello! typing
const text = ["Hello!", "", "", ""];
        let wordIndex = 0;
        let letterIndex = 0;

        function type() {
            const word = text[wordIndex];
            const span = document.getElementById('typing');
            span.textContent = word.slice(0, letterIndex + 1);

            letterIndex++;
            if (letterIndex > word.length) {
                letterIndex = 0; 
                wordIndex++;
                if (wordIndex === text.length) {
                    wordIndex = 0;
                }
            }
            if (wordIndex === 0) {
                setTimeout(type, 300);
            } else {
                setTimeout(type, 0);
            }
        }
        type();

// Form
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    var savedName = localStorage.getItem("name");
    var savedEmail = localStorage.getItem("email");

    if (savedName) {
        nameInput.value = savedName;
    }
    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    // Event listener  tombol submit
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var name = nameInput.value;
        var email = emailInput.value;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

        var message = document.getElementById("message").value;

        var alertMessage = "\nNama: " + name + "\n\nE-mail: " + email + "\n\nPesan: " + message;

        alert(alertMessage);
    });
});


