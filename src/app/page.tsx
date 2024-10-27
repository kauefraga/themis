import { Footer } from '@/components/footer';
import { ProfileInput } from '@/components/profile-input';
import { WhyUseCard } from '@/components/why-use-card';
import { Medal, SearchCheck, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-8 py-4">
        <main className="mt-28 flex max-w-3xl flex-col items-center md:items-start gap-12 md:flex-row md:gap-28">
          <div className="space-y-3">
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

        <section className="flex flex-col gap-6 items-center my-6">
          <h2 className="text-xl">Por que você deveria usar o Themis</h2>

          <div className="grid grid-rows-3 md:grid-cols-3 gap-6 md:max-w-3xl">
            <WhyUseCard>
              <Sparkles className="text-bsky-blue" />
              <p>Conheça os critérios básicos que tornam um perfil agradável</p>
            </WhyUseCard>

            <WhyUseCard>
              <SearchCheck className="text-bsky-blue" />
              <p>Descubra se o seu perfil atende aos os critérios</p>
            </WhyUseCard>

            <WhyUseCard>
              <Medal className="text-bsky-blue" />
              <p>Se divirta compartilhando sua pontuação no Bluesky</p>
            </WhyUseCard>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
