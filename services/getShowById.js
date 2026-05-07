const PLACEHOLDER_IMAGE = "https://placehold.co/210x295";

export const getShowById = async (id) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();

  return {
    name: data.name,
    rating: data.rating?.average ?? null,
    image: data.image?.medium ?? PLACEHOLDER_IMAGE
  };
};