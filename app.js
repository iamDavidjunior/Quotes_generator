window.addEventListener("DOMContentLoaded", quoteGenerator);

function quoteGenerator() {
  fetch("/quotes.json")
    .then((res) => res.json())
    .then((data) => {
      const image = document.getElementById("person-img");
      const author = document.getElementById("author");
      const job = document.getElementById("job");
      const info = document.getElementById("quote");
      const prevBtn = document.querySelector(".prev-btn");
      const nextBtn = document.querySelector(".next-btn");
      const randomBtn = document.querySelector(".random-btn");
      let currentAuthor = 0;

      //load initial author
      window.addEventListener("DOMContentLoaded", showAuthor(currentAuthor));

      function showAuthor() {
        let person = data[currentAuthor];
        image.src = person.img;
        author.textContent = person.name;
        job.textContent = person.job;
        info.textContent = person.quote;
      }

      //next button
      nextBtn.addEventListener("click", () => {
        currentAuthor++;
        if (currentAuthor > data.length - 1) {
          currentAuthor = 0;
        }
        showAuthor();
      });
      //prev button
      prevBtn.addEventListener("click", () => {
        currentAuthor--;
        if (currentAuthor < 0) {
          currentAuthor = data.length - 1;
        }
        showAuthor();
      });

      randomBtn.addEventListener("click", () => {
        currentAuthor = Math.floor(Math.random() * data.length);
        showAuthor();
      });
    });
}

