const submitBtn = document.querySelector("#contact form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const navBar = document.querySelector("nav.navbar");
const testies = document.querySelector("div#testimonials");
const sessionsHeld = document.querySelector("#held");
const overallRating = document.querySelector("#overall");
const rateDivs = document.querySelector("#rate-divs");

window.addEventListener("load", async () => {
  navBar.classList.add("fixed-top");
  const res = await fetchData("https://tranquil-reef-05344.herokuapp.com/api/ratings");
  sessionsHeld.textContent = res.ratings.length;

  // rating average
  let rate_sum = 0;
  for (var i = 0; i < res.ratings.length; i++) {
    rate_sum += res.ratings[i].rating;
  }
  overallRating.textContent = `${(rate_sum / res.ratings.length).toFixed(2)}`;

  // testi divs
  let spinner = new Image();
  spinner.src = "./assets/images/loading_icon_two.gif";
  spinner.alt = "Loading spinner";
  spinner.height = "100";
  spinner.width = "90";
  spinner.style.display = "block";
  spinner.style.margin = "0 auto"
  if (!res.ratings.length) {
    rateDivs.append(spinner);
  } else {
    res.ratings.map((rate, i) => {
      const align = i % 2 === 0 ? "float-start" : "float-end";
      const border = i % 2 === 0 ? "border-right: 2px solid #fffffc" : "border-left: 2px solid #fffffc";
      rateDivs.innerHTML += `
        <div class="p-3 testimonial my-1 clearfix">
          <p>
            <span class="user-rating">${rate.rating} &#x2605;</span> 
            <span class="user-name"><em>${rate.fname} ${rate.lname}</em></span> -
            <span class="user-comment"><b>&#8220;</b> ${rate.comment} <b>&#8221;</b></span>
          </p>
        </div>
      `
    }).slice(0, 4);
  }

})

window.addEventListener("scroll", () => {
  if (window.scrollY <= 4) {
    navBar.classList.add("fixed-top");
  }
  else if (window.scrollY > 300) {
    navBar.classList.add("fixed-top", "darkbar");
  }
  else {
    navBar.classList.remove("fixed-top", "darkbar")
  }
})

async function fetchData(url) {
  const data = await fetch(url);
  return data.json();
}