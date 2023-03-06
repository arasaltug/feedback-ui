const ratings = document.querySelectorAll(".rating");
const btn = document.getElementById("send");
const panel = document.querySelector(".panel-container");

let selectedRating = "You didn't choose feedback!";

ratings.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        if (e.target.parentNode.classList.contains("rating")) {
            removeActive();
            e.target.parentNode.classList.add("active");

            selectedRating = e.target.nextElementSibling.innerHTML;
        }
    });
});

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove("active");
    }
}

btn.addEventListener("click", () => {
    panel.innerHTML = `
    
        <i class="fas fa-heart"></i>

        <strong> Your feedback is important to us! </strong>

        <br>

        <strong> Feedback: ${selectedRating} </strong>

        <p> We'll use your feedback to improve ourselves. </p>

    `;
});
