'use client';

import { AtSign, MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export function Form() {
  const router = useRouter();
  const [blueskyHandle, setBlueskyHandle] = useState('');

  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/${blueskyHandle}`);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleForm}>
      <p>Nome de usuário do Bluesky</p>
      <div className="flex items-center gap-1 rounded-sm">
        <div className="flex items-center gap-2 rounded-bl rounded-tl bg-zinc-200 p-3">
          <AtSign className="text-blue-600" />
          <input
            type="text"
            className="bg-zinc-200 outline-none"
            placeholder="meunick.bsky.app"
            onChange={(event) => setBlueskyHandle(event.target.value)}
            value={blueskyHandle}
          />
        </div>
        <button className="rounded-br rounded-tr bg-blue-600 p-3 text-white">
          <MoveRight />
        </button>
      </div>
    </form>
  );
}
