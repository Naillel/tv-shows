export const renderSearchResults = (results, onSelect) => {
  // Elimina dropdown anterior si existe
  document.querySelector(".search-results")?.remove();

  if (!results.length) return;

  const $list = document.createElement("ul");
  $list.className = "search-results";

  results.forEach(({ id, name, image }) => {
    const $item = document.createElement("li");
    $item.className = "search-result-item";
    $item.setHTMLUnsafe(`
      <img src="${image}" alt="${name}">
      <span>${name}</span>
    `);
    $item.addEventListener("click", () => {
      $list.remove();
      onSelect(id);
    });
    $list.appendChild($item);
  });

  document.querySelector(".search-form").appendChild($list);
};