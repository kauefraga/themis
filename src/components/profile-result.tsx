import { Score } from '@/app/[handle]/score';
import { ProfileViewDetailed } from '@atproto/api/dist/client/types/app/bsky/actor/defs';
import { UserRoundCheck } from 'lucide-react';

import Image from 'next/image';

type ProfileResultProps = {
  profile: ProfileViewDetailed;
};

export function ProfileResult({ profile }: ProfileResultProps) {
  return (
    <div className="w-full md:w-[600px] rounded-2xl overflow-hidden shadow-lg">
      <div className="w-full h-[150px] md:h-[200px] relative border">
        {profile.banner ? (
          <Image
            src={profile.banner}
            width={1500}
            height={500}
            alt="Banner do perfil"
            className="object-cover h-full w-full"
          />
        ) : (
          <div className="bg-bsky-blue w-full h-full" />
        )}
        <Image
          src={profile.avatar || '/avatar-placeholder.png'}
          width={130}
          height={130}
          alt="Avatar"
          className="rounded-full absolute top-1/2 left-8 transform -translate-y-1/2 shadow-lg w-[100px] h-[100px] md:w-[130px] md:h-[130px]"
        />
      </div>
      <div className="px-5 md:px-8 py-5 bg-white flex flex-col gap-3 md:gap-5">
        <h3 className="text-[#434343] text-lg md:text-xl">
          {profile.displayName || profile.handle}
        </h3>
        <div className="text-[#626262] text-base flex items-center gap-5">
          <div className="flex gap-1.5">
            <UserRoundCheck className="w-5 h-5" />
            <p>{profile.followersCount} seguidores</p>
          </div>
          <div className="flex gap-2">
            <UserRoundCheck className="w-5 h-5" />
            <p>{profile.followsCount} seguindo</p>
          </div>
        </div>
        <p className="text-base text-[#787878]">
          {profile.description || 'Sem descrição'}
        </p>

        <div className="w-full h-[1px] bg-[#D9D9D9]" />

        <Score profile={profile} />
      </div>
    </div>
  );
}
