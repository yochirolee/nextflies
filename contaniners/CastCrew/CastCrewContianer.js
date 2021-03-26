import CastCrewCard from "../../components/Cards/CastCrewCard";
import { useMoviePicture } from "../../hooks/useMoviePicture";

export default function CastCrewContainer({ credits }) {
  const { cast, crew } = credits;

  const movieCast = cast.slice(0, 8);
  const movieDirector = crew.find((person) => person.job === "Director");
  const picture = useMoviePicture(movieDirector.profile_path, "w185");

  return (
    <div className="text-white container mx-auto">
      <div className="flex flex-row justify-evenly ">
        {movieCast.map((person) => (
          <CastCrewCard key={person.id} person={person} />
        ))}
      </div>

      <div className=" flex flex-col items-center my-6 ">
        <div className="rounded-full  h-28 w-24">
          <img className="rounded-full w-24 h-28 object-fill" src={picture} />
        </div>
        <div className="">{movieDirector.name}</div>
        <div className="text-xs">{movieDirector.job}</div>
      </div>
    </div>
  );
}
