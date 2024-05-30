'use client';
import Link from 'next/link';
import Image from 'next/image';
const AnimeLink = ({ animeId, animeScore }) => {
  return (
    <Link href={`/${animeId}`} className="flex flex-row gap-2 items-center">
      <Image
        src="./star.svg"
        alt="star"
        width={18}
        height={18}
        className="object-contain h-auto"
      />
      <p className="text-base font-bold text-[#FFAD49]">{animeScore}</p>
    </Link>
  );
};

export default AnimeLink;
