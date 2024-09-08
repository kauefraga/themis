import { agent } from '@/providers/bluesky';

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
    <div className="flex flex-col justify-center">
      <h1>{data.displayName}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export const runtime = 'edge';
