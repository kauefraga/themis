'use client';

import ShareButton from '@/components/share-button';
import { ProfileViewDetailed } from '@atproto/api/dist/client/types/app/bsky/actor/defs';
import { CircleGauge } from 'lucide-react';
import { generateFeedback } from './feedback';

const followersRatio = (followersCount: number, followsCount: number): number =>
  followersCount / (followersCount + followsCount);

const exponentialScaling = (score: number, k: number = 0.01): number =>
  1 - Math.exp(-k * score);

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

    if (profile.description.length >= 20 && profile.description.length <= 200) {
      // buff: informative and concise description
      descriptionBuff *= 2;
    }

    score += descriptionBuff;
  }

  // From this point N = 50, for bigger N bigger percentages!
  if (profile.followersCount && profile.followsCount) {
    // follow ratio buff, could be almost * 2
    score +=
      score * followersRatio(profile.followersCount, profile.followsCount);
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
      <h3 className="text-[#434343] text-lg md:text-xl flex items-center gap-1.5">
        <CircleGauge className="w-5 h-5" /> Pontuação: +{score}
      </h3>

      <ul>
        {feedback.map((tip, index) => (
          <li key={index}>
            <p className="text-base text-[#787878]">- {tip}</p>
          </li>
        ))}
      </ul>

      <ShareButton score={score} />
    </>
  );
}
