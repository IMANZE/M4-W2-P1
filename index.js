const card = document.querySelector("#myCard");
const password = "563492ad6f9170000100000178fcda4f6ed54f2e90d18a5952425ec3";
const loadImages = document.querySelector("#loadImages");
const loadSecondaryImages = document.querySelector("#loadSecondaryImages");

window.onload = () => {
  card;
  for (let i = 0; i < 12; i++) {
    card.innerHTML += `<div class="col">
      <div class="card mb-4 shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>`;
  }
  card
    .querySelectorAll(".btn.btn-outline-secondary:nth-child(2)")
    .forEach((btn) => {
      btn.innerText = "Hide";
      btn.onclick = (event) => event.currentTarget.closest(".col").remove();
    });
};

loadImages.addEventListener("click", () => {
  const url = "https://api.pexels.com/v1/search?query=sea";

  fetch(url, {
    headers: {
      Authorization: password,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      let cards = document.getElementsByClassName("card");

      for (let i = 0; i < cards.length; i++) {
        cards[i].firstElementChild.remove();
        let img = document.createElement("img");
        img.src = body.photos[i].src.large;
        img.className = "bd-placeholder-img card-img-top";
        img.style = "height: 200px; object-fit: cover";

        cards[i].insertBefore(img, cards[i].firstChild);
        cards[i].querySelector("small").innerText = "ID: " + body.photos[i].id;
      }
    });
});

loadSecondaryImages.addEventListener("click", () => {
  const url = "https://api.pexels.com/v1/search?query=forest";

  fetch(url, {
    headers: {
      Authorization: password,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      let cards = document.getElementsByClassName("card");

      for (let i = 0; i < cards.length; i++) {
        cards[i].firstElementChild.remove();
        let img = document.createElement("img");
        img.src = body.photos[i].src.large;
        img.className = "bd-placeholder-img card-img-top";
        img.style = "height: 200px; object-fit: cover";

        cards[i].insertBefore(img, cards[i].firstChild);
      }
    });
});
let searchQuery;

const handleSearchQuery = (e) => {
  searchQuery = e.target.value.toLowerCase();
};

const searchImages = () => {
  let hasImage = document.querySelector(".card").querySelector("img");

  if (hasImage) {
    loadOtherImages(searchQuery);
  } else {
    loadImages(searchQuery);
  }
};
