//! Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("close");
  const preLoader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    preLoader.style.display = "none";
  });
  //! Retrieve query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("name");
  const productImageUrl = urlParams.get("imageUrl");
  const productPrice = urlParams.get("price");
  const productDetails = urlParams.get("details");

  //! Get the container where the details will be displayed
  const detailsContainer = document.getElementById("detailsContainer");

  //! Create a container for images
  const imagesContainer = document.createElement("div");

  //! Create and append three image elements with the same URL (consider changing this logic)
  for (let i = 0; i < 4; i++) {
    const detailsImage = document.createElement("img");
    detailsImage.src = productImageUrl;
    imagesContainer.appendChild(detailsImage);
  }

  //! Create and set the title element with age, breed, and location information
  const ageAndBreedTitle = document.createElement("h2");
  ageAndBreedTitle.textContent = `${productName}`;

  //! Create and set a paragraph element with a description of the dog
  const detailsParagraph = document.createElement("p");
  detailsParagraph.textContent = `${productDetails}`;
  //! Create and set the title element with the dog's name
  const detailsTitle = document.createElement("h3");
  detailsTitle.textContent = ` Price : $ ${productPrice}`;

  //! Create a button element for adoption
  const detailsButton = document.createElement("button");
  detailsButton.textContent = "Buy now";

  //! Append the created elements to the detailsContainer
  detailsContainer.appendChild(imagesContainer);
  detailsContainer.appendChild(ageAndBreedTitle);
  detailsContainer.appendChild(detailsTitle);
  detailsContainer.appendChild(detailsParagraph);
  detailsContainer.appendChild(detailsButton);

  detailsButton.addEventListener("click", () => {
    window.location.href = "./form-content/form-contetnt.html";
  });

  closeButton.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
});
