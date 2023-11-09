const cardsWrapper = document.getElementById("cards-wrapper");

const fetchDataPrimary = () => {
  fetch("https://api.pexels.com/v1/search?query=videogames", {
    headers: {
      Authorization: "LF8mR8enZqtUWqCqBBOSAxhvIptBKCWVLCs2QSfkwP5K9twqUVYSLOdX",
      "Content-Type": "application/json"
    }
  })
    .then((resp) => resp.json())
    .then((games) => {
      console.log(games);
      renderCards(games);
    })
    .catch((err) => console.log(err));
};

const fetchDataSecondary = () => {
    fetch("https://api.pexels.com/v1/search?query=tigers", {
      headers: {
        Authorization: "LF8mR8enZqtUWqCqBBOSAxhvIptBKCWVLCs2QSfkwP5K9twqUVYSLOdX",
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((tigers) => {
        console.log(tigers);
        renderCards(tigers);
      })
      .catch((err) => console.log(err));
  };

// window.onload = () => {
//   fetchDataPrimary();
// };

const renderCards = (obj) => {
  cardsWrapper.innerHTML = "";
  obj.photos.forEach((elem) => {
    console.log(elem);
    cardsWrapper.innerHTML += `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${elem.src.medium}" class="card-img-top" alt="..." />
        
          <div class="card-body">
            <h5 class="card-title">${elem.photographer}</h5>
            <p class="card-text">${elem.alt}</p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="detailsRedirect()"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="removeCard(event)"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${elem.id}</small>
            </div>
          </div>
        </div>
        </div>`;
  });
};

const removeCard = (event) => {
  event.target.closest(".col-md-4").remove();
};
