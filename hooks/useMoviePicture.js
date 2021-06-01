export function useMoviePicture(path, size) {
  const url = `https://image.tmdb.org/t/p/${size + path}`;
  return url;
}
