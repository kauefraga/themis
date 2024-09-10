import { agent } from '@/providers/bluesky';
import Image from 'next/image';
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
    <div className="flex flex-col items-center p-4">
      <main className="mt-20 flex w-full max-w-xl flex-col rounded-md border-2 border-zinc-600 bg-zinc-200">
        {data.banner && (
          <Image
            src={data.banner}
            width="800"
            height="300"
            loading="lazy"
            alt="Banner do perfil"
            className="w-full rounded-tl rounded-tr"
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
    </div>
  );
}

export const runtime = 'edge';
