'use client';

import ShareButton from '@/components/share-button';
import { ProfileViewDetailed } from '@atproto/api/dist/client/types/app/bsky/actor/defs';
import { generateFeedback } from './feedback';

function calculateProfileScore(profile: ProfileViewDetailed) {
  let score = 0;

  if (profile.displayName) {
    let displayNameScore = 0;

    // buff: has display name
    displayNameScore += 5;

    if (profile.displayName.length <= 10) {
      // buff: short display name
      displayNameScore *= 2;
    }

    // TODO: display name includes emoji/unicode buff

    score += displayNameScore;
  }

  if (profile.banner) {
    // buff: has banner
    score += 5;
  }

  if (profile.avatar) {
    // buff: has avatar
    score += 5;
  }

  if (/\d/g.test(profile.handle)) {
    // debuff: handle includes number
    score -= 5;
  }

  if (profile.description) {
    let descriptionBuff = 0;

    // buff: has description
    descriptionBuff += 5;

    if (profile.description.length >= 20 && profile.description.length <= 150) {
      // buff: informative and concise description
      descriptionBuff *= 2;
    }

    score += descriptionBuff;
  }

  if (profile.followersCount && profile.followsCount) {
    // follow ratio buff
    const ratio = profile.followersCount / profile.followsCount;

    score += ratio > 1 ? ratio : 0;
  }

  return { score: Math.ceil(score), feedback: generateFeedback(profile) };
}

interface ScoreProps {
  profile: ProfileViewDetailed;
}

export function Score({ profile }: ScoreProps) {
  const { score, feedback } = calculateProfileScore(profile);

  return (
    <>
      <div>
        <p className="text-xl text-blue-600">Pontuação: {score}</p>
        <ul className="text-sm text-gray-600">
          {feedback.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      <ShareButton score={score} />
    </>
  );
}
