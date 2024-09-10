'use client';

import { ProfileViewDetailed } from '@atproto/api/dist/client/types/app/bsky/actor/defs';

function calculateProfileScore(profile: ProfileViewDetailed) {
  let score = 0;

  if (profile.displayName) {
    // has display name
    score += 5;

    if (profile.displayName.length <= 10) {
      // short display name buff
      score *= 2;
    }

    // TODO: display name includes emoji/unicode buff
  }

  if (profile.banner) {
    // has banner
    score += 5;
  }

  if (profile.avatar) {
    // has avatar
    score += 5;
  }

  if (/\d/g.test(profile.handle)) {
    // handle includes number debuff
    score -= 5;
  }

  if (profile.description) {
    // has description
    score += 5;

    if (profile.description.length >= 20 && profile.description.length <= 50) {
      // RELATIVE: informative description buff
      score *= 2;
    }
  }

  if (profile.followersCount && profile.followsCount) {
    // follow ratio buff
    score *= profile.followersCount / profile.followsCount;
  }

  return Math.ceil(score);
}

interface ScoreProps {
  profile: ProfileViewDetailed;
}

export function Score({ profile }: ScoreProps) {
  const profileScore = calculateProfileScore(profile);

  return <p className="text-xl text-blue-600">Pontuação: {profileScore}</p>;
}
