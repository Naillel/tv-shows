export const searchShows = async (query) => {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
  const results = await res.json();

  return results.map(({ show }) => ({
    id: show.id,
    name: show.name,
    image: show.image?.medium ?? "https://placehold.co/210x295"
  }));
};