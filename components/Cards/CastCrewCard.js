import Image from "next/image";
import { useMoviePicture } from "../../hooks/useMoviePicture";

export default function CastCrewCard({ person }) {
  if (!person.profile_path) return <></>;
  const picture = useMoviePicture(person.profile_path, "w185");

  return (
    <div className=" text-white flex flex-col items-center mb-10 lg:mb-0">
      <div className="w-12 h-12 lg:h-28 lg:w-20  mb-2">
        <Image
          src={picture}
          height="185"
          width="184"
          layout="responsive"
          alt="cast"
          className=" rounded-full object-cover object-top "
        ></Image>
      </div>
      <div className="text-xs lg:text-base">{person.name}</div>
      <div className="text-xs">{person.character || person.department}</div>
    </div>
  );
}
