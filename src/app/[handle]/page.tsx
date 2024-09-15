import { Footer } from '@/components/footer';
import { ProfileInput } from '@/components/profile-input';
import { agent } from '@/providers/bluesky';
import Image from 'next/image';
import Link from 'next/link';
import { Score } from './score';

type StaticParams = {
  params: {
    handle: string;
  };
};

export default async function ProfileAnalysis({ params }: StaticParams) {
  const { data } = await agent.getProfile({
    actor: params.handle,
  });

  return (
    <div className="grid min-h-[100dvh] grid-rows-[1fr_auto] justify-items-center">
      <div className="p-4 mt-20">
        <Link href="/" className="underline">
          Voltar
        </Link>

        <main className="flex h-fit w-full max-w-xl flex-col rounded-md border border-black/90 bg-zinc-200">
          {data.banner && (
            <Image
              src={data.banner}
              width="800"
              height="300"
              loading="lazy"
              alt="Banner do perfil"
              className="w-full rounded-tl rounded-tr border-b border-black/90"
            />
          )}
          <div className="flex -translate-y-1/4 flex-col gap-3 px-5 py-3">
            {data.avatar && (
              <Image
                src={data.avatar}
                width="100"
                height="100"
                loading="eager"
                alt="Avatar"
                className="rounded-full"
              />
            )}
            <h1 className="text-xl font-medium">{data.displayName}</h1>
            <p className="max-w-sm border-l border-blue-600 pl-2">
              {data.description}
            </p>
            <Score profile={data} />
          </div>
        </main>

        <div className="space-y-1 mt-5 flex flex-col items-center">
          <h3>Quer analisar outro perfil?</h3>
          <ProfileInput />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export const runtime = 'edge';
