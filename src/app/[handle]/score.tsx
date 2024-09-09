'use client';

import { ProfileViewDetailed } from '@atproto/api/dist/client/types/app/bsky/actor/defs';
import { useMemo } from 'react';

interface ScoreProps {
  profile: ProfileViewDetailed;
}

function calculateProfileScore(profile: ProfileViewDetailed) {
  let score = 0;

  if (profile.displayName) {
    // has display name
    score = 5;

    if (profile.displayName.length <= 10) {
      // short display name buff
      score *= 2;
    }
  }

  return score;
}

export function Score({ profile }: ScoreProps) {
  const finalScore = useMemo(() => calculateProfileScore(profile), [profile]);

  return <p className="text-xl text-blue-600">Pontuação: {finalScore}</p>;
}
