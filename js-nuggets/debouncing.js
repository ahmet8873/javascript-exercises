// search query
const debounce = (fn, delay) => {
  let id;
  return () => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn();
    }, delay);
  };
};
searchInput.addEventListener("keyup", debounce(searchMovieTitle, 500));
