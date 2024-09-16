'use client';

import ShareButton from '@/components/share-button';
import { ProfileViewDetailed } from '@atproto/api/dist/client/types/app/bsky/actor/defs';
import { generateFeedback } from './feedback';

const followersRatio = (followersCount: number, followsCount: number): number => (followersCount / (followersCount + followsCount));

const exponentialScaling = (score: number, k: number = 0.01): number => 1 - Math.exp(-k * score);

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

  // From this point N = 50, for bigger N bigger percentages!
  if (profile.followersCount && profile.followsCount) {
    // follow ratio buff, could be almost * 2
    score += score * followersRatio(profile.followersCount, profile.followsCount);
  }

  score = Math.ceil(exponentialScaling(score) * 100); // Percentage 0 - 100

  return { score: score, feedback: generateFeedback(profile) };
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
