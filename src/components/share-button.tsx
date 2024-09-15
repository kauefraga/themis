'use client';

import logo from '@/app/icon.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ShareProps = {
  score: number;
};

export default function ShareButton({ score }: ShareProps) {
  const blueskyLink = 'https://bsky.app/intent/compose';
  const link = 'https://themis.kauefraga.dev' + usePathname();

  return (
    <div className="self-start my-5">
      <Link
        href={`${blueskyLink}?text=Meu perfil fez ${score} pontos no Themis! 🦋 ${link} `}
        target="_blank"
        className="flex flex-row group space-x-2 w-fit items-center py-2 px-3 self-start border rounded bg-white hover:border-black/90 transition"
      >
        <Image
          src={logo}
          height="20"
          alt="bluesky logo"
          className="border-r pr-2 border-gray-400"
        />
        <p className="text-xs"> Compartilhe no Bluesky! </p>
      </Link>
    </div>
  );
}
