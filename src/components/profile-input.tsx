'use client';
import { getAutoComplete } from '@/providers/bluesky';
import { UserProps } from '@/types';

import { Search } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export function ProfileInput() {
  const router = useRouter();
  const [blueskyHandle, setBlueskyHandle] = useState('');
  const [users, setUsers] = useState<UserProps[]>([]);

  const handleForm = (event: FormEvent) => {
    event.preventDefault();

    if (!blueskyHandle.includes('.')) {
      return router.push(`/${blueskyHandle}.bsky.social`);
    }

    return router.push(`/${blueskyHandle}`);
  };
  const handleInput = async (value: string) => {
    setBlueskyHandle(value);

    const fetchedUsers = await getAutoComplete(value);
    setUsers(fetchedUsers.actors);
  };

  const handleSelectedUser = (handle: string) => {
    setBlueskyHandle(handle);
    setUsers([]);
  };

  return (
    <form className="grid " onSubmit={handleForm}>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="meunick.bsky.social"
          autoCapitalize="none"
          required
          onChange={(event) => handleInput(event.target.value)}
          value={blueskyHandle}
          className="rounded-lg bg-[#f7f7f7] text-base px-5 h-10"
        />
        <button
          className="bg-bsky-blue/90 hover:bg-bsky-blue transition-colors w-10 h-10 rounded-lg flex items-center justify-center"
          aria-label="Procurar seu perfil"
        >
          <Search className="text-white w-5 h-5" />
        </button>
      </div>
      <div
        id="hidden-scrollbar"
        className="mt-2 overflow-y-scroll h-[500px] w-[255px] rounded-lg"
      >
        {users &&
          users.map((user) => {
            return (
              <div
                key={user.handle}
                className="bg-[#f7f7f7] hover:bg-[#e2e2e2]  py-2 px-5 cursor-pointer w-full  "
                onClick={() => handleSelectedUser(user.handle)}
              >
                <div className="grid py-2">
                  <div className="grid grid-flow-col justify-start items-center gap-2 ">
                    <Image
                      src={user.avatar}
                      height={25}
                      width={25}
                      alt={`${user.handle} avatar`}
                    />
                    <p className="text-sm">{user.displayName}</p>
                  </div>

                  <p className="text-xs">{user.handle}</p>
                </div>
              </div>
            );
          })}
      </div>
    </form>
  );
}
