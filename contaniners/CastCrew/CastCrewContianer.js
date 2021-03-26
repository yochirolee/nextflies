import CastCrewCard from "../../components/Cards/CastCrewCard";
import { useMoviePicture } from "../../hooks/useMoviePicture";
import Image from "next/image";

export default function CastCrewContainer({ credits }) {
  const { cast, crew } = credits;

  const movieCast = cast.slice(0, 8);
  const movieDirector = crew.find((person) => person.job === "Director");
  const picture = useMoviePicture(movieDirector.profile_path, "w185");

  return (
    <div className="text-white container mx-auto">
      <div className="flex flex-row flex-wrap justify-evenly ">
        {movieCast.map((person) => (
          <CastCrewCard key={person.id} person={person} />
        ))}
      </div>

      <div className=" flex flex-col items-center my-6 ">
        <div className=" lg:w-28 lg:mt-10 ">
          <img
            className="h-8 w-8 lg:h-24 lg:w-24 rounded-full  object-cover  "
            src={picture}
          />
        </div>
        <div className="">{movieDirector.name}</div>
        <div className="text-xs">{movieDirector.job}</div>
      </div>
    </div>
  );
}
