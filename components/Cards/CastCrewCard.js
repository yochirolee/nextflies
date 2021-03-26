import { useMoviePicture } from "../../hooks/useMoviePicture";

export default function CastCrewCard({ person }) {
  if (!person.profile_path) return <></>;
  const picture = useMoviePicture(person.profile_path, "w185");

  return (
    <div className=" text-white flex flex-col items-center">
      <div className=" w-20 h-20 ">
        <img className=" h-20 w-20 rounded-full  object-cover " src={picture} />
      </div>
      <div className="">{person.name}</div>
      <div className="text-xs">{person.character || person.department}</div>
    </div>
  );
}
