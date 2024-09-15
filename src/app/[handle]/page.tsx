import { Footer } from '@/components/footer';
import { ProfileInput } from '@/components/profile-input';
import { getProfile } from '@/providers/bluesky';
import Image from 'next/image';
import Link from 'next/link';
import { Score } from './score';

type StaticParams = {
  params: {
    handle: string;
  };
};

export default async function ProfileAnalysis({ params }: StaticParams) {
  const data = await getProfile(params.handle);

  if (typeof data === 'string') {
    const message =
      data === 'Profile not found' ? (
        <p>
          O perfil @{params.handle} não foi encontrado. Talvez você tenha
          digitado errado, volte e tente novamente.
        </p>
      ) : (
        <p>{data}</p>
      );

    return (
      <div className="p-4">
        <main className="p-4 rounded-md flex flex-col gap-5 mt-20 mx-auto bg-zinc-200 border border-black/90 max-w-xl w-full">
          <div className="space-y-1">
            <h1 className="text-xl font-medium">Ocorreu um erro!</h1>
            {message}
          </div>

          <a
            href="/"
            className="bg-zinc-300 w-fit px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors"
          >
            Voltar
          </a>
        </main>
      </div>
    );
  }

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
          <div className="flex flex-col -mt-16 gap-3 px-5 py-3">
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
