const cardsWrapper = document.getElementById("cards-wrapper");

const fetchDataPrimary = () => {

}

window.onload = () => {
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
              <small class="text-muted">id img</small>
            </div>
          </div>
        </div>
        </div>`;
  });
};

const skipMe = (event) => {
  event.target.closest(".col").remove();
};