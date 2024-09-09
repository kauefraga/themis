import { agent } from '@/providers/bluesky';
import Image from 'next/image';
import { Score } from './score';

type StaticParams = {
  params: {
    handle: string;
  };
};

export default async function ProfileAnalysis({ params }: StaticParams) {
  const { data, success } = await agent.getProfile({
    actor: params.handle,
  });

  if (!success) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="flex flex-col items-center">
      <main className="mt-20 flex flex-col rounded bg-zinc-200 shadow">
        <Image
          src={data.banner ?? 'https://placehold.co/400'}
          width="800"
          height="300"
          loading="eager"
          alt="Banner do perfil"
          className="w-full rounded-tl rounded-tr"
        />
        <div className="flex flex-col gap-2 px-5 py-3">
          <h1 className="text-xl font-medium">{data.displayName}</h1>
          <p className="max-w-sm border-l border-black pl-2">
            {data.description}
          </p>

          <Score profile={data} />
        </div>
      </main>
    </div>
  );
}

export const runtime = 'edge';
