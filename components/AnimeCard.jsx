import Image from 'next/image';
import Link from 'next/link';
import AnimeLink from './AnimeLink';
function AnimeCard({ anime }) {
  return (
    <section className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <Image
          src={`${anime.image}`}
          alt={anime.maidenName}
          fill
          className="rounded-xl"
          sizes="(max-width: 300px) 100vw"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.maidenName}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.university}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain h-auto"
            />
            <p className="text-base text-white font-bold">
              {anime.weight || anime.height}
            </p>
          </div>
          <AnimeLink animeId={anime.id} animeScore={anime.height}></AnimeLink>
        </div>
      </div>
    </section>
  );
}

export default AnimeCard;
