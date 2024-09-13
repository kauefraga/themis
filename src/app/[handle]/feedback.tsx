import { ProfileViewDetailed } from '@atproto/api/dist/client/types/app/bsky/actor/defs';

export function generateFeedback(profile: ProfileViewDetailed): string[] {
  const feedback: string[] = [];

  const addFeedback = (condition: boolean, message: string) => {
    condition && feedback.push(message);
  };

  addFeedback(!profile.displayName, 'Adicione um nome de exibição.');
  addFeedback(
    !!profile.displayName && profile.displayName.length <= 10,
    'Nome curto é ótimo para visibilidade!',
  );

  addFeedback(
    !profile.banner,
    'Adicione um banner para personalizar seu perfil.',
  );
  addFeedback(
    !profile.avatar,
    'Adicione um avatar para que seu perfil seja mais reconhecível.',
  );

  addFeedback(
    /\d/g.test(profile.handle),
    'Evite números no handle, isso torna o perfil menos profissional.',
  );

  addFeedback(
    !profile.description,
    'Adicione uma descrição para tornar seu perfil mais interessante.',
  );
  addFeedback(
    !!profile.description &&
      profile.description.length >= 20 &&
      profile.description.length <= 50,
    'Ótima descrição, é informativa e direta.',
  );
  addFeedback(
    !!profile.description && profile.description.length < 20,
    'Sua descrição poderia ser mais informativa.',
  );
  addFeedback(
    !!profile.description && profile.description.length > 50,
    'Sua descrição é um pouco longa. Tente encurtá-la.',
  );

  if (profile.followersCount && profile.followsCount) {
    const ratio = profile.followersCount / profile.followsCount;
    addFeedback(ratio > 1, 'Boa relação de seguidores para seguidos.');
    addFeedback(ratio <= 1, 'Tente aumentar sua base de seguidores.');
  }

  return feedback;
}
