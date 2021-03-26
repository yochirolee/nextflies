import { useMoviePicture } from "../../hooks/useMoviePicture";

export default function CastCrewCard({ person }) {
  if (!person.profile_path) return <></>;
  const picture = useMoviePicture(person.profile_path, "w185");

  return (
    <div className=" text-white flex flex-col items-center mb-10 lg:mb-0">
      <div className=" lg:w-20 lg:h-20 mb-2">
        <img className="w-10 h-10 lg:h-20 lg:w-20 rounded-full  object-cover " src={picture} />
      </div>
      <div className="text-xs lg:text-base">{person.name}</div>
      <div className="text-xs">{person.character || person.department}</div>
    </div>
  );
}
