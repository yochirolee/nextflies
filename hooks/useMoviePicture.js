export function useMoviePicture(path, size) {
  const url = `https://image.tmdb.org/t/p/${size + path}`;
  const sizes = ["w185", "w300", "w780", "w1280", "original"];
  return url;
}
