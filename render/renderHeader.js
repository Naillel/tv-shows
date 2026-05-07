export const renderHeader = (show) => {
  const $header = document.querySelector("header");

  $header.setHTMLUnsafe(`
    <img class="poster" src="${show.image}" alt="${show.name}">
    <div class="show-info">
      <h1>${show.name}</h1>
      ${show.rating ? `<p class="global-rating">⭐ ${show.rating}</p>` : ""}
    </div>
  `);
};