export default function VideoModal({ movie, handleToggle }) {
  return (
    <div className="fixed h-full w-full grid place-items-center border bg-black bg-opacity-90">
      <div className="relative  h-3/4 w-3/4">
        <button
          onClick={handleToggle}
          className="absolute top-0 right-0 text-white pr-4 py-6 focus:outline-none"
        >
          X
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?rel=0&autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media; "
          allowFullScreen="allowfullscreen"
          webKitAllowFullScreen="webkitallowfullscreen"
          title="video"
          className="w-full h-full mt-5"
        />
      </div>
    </div>
  );
}
