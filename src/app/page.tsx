import { ProfileInput } from '@/components/profile-input';

export default function Home() {
  return (
    <div className="flex justify-center px-5 py-3">
      <main className="mt-28 flex max-w-3xl flex-col items-center md:items-start gap-12 md:mt-48 md:flex-row md:gap-28">
        <div className="space-y-3 px-3">
          <h1 className="text-xl font-medium ">
            Melhore o seu perfil do{' '}
            <span className="text-bsky-blue">Bluesky</span> com a análise do
            Themis
          </h1>
          <p>
            Gere uma avaliação do seu perfil e descubra como deixá-lo mais
            atrativo.
          </p>
        </div>

        <div className="space-y-1">
          <p>Nome de usuário do Bluesky</p>
          <ProfileInput />
        </div>
      </main>
    </div>
  );
}
