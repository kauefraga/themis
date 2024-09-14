'use client';

import { AtSign, MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export function Input() {
  const [blueskyHandle, setBlueskyHandle] = useState('');
  const router = useRouter()
  const handleForm = (event: FormEvent) => {
    event.preventDefault();

    if (!blueskyHandle.includes('.')) {
      return router.push(`/${blueskyHandle}.bsky.social`);
    }

    return router.push(`/${blueskyHandle}`);
  };
  return (
    <>
      <h3 className=" my-3">Quer analisar outra conta?</h3>
      <form onSubmit={handleForm} className="flex items-center gap-1 rounded-sm max-w-xl w-full">
        <div className="flex items-center gap-2 w-full rounded-bl rounded-tl bg-zinc-200 p-3">
          <AtSign className="text-blue-600" />
            
          <input
          type="text"
          className="bg-zinc-200 outline-none"
          placeholder="meunick.bsky.social"
          onChange={(event) => setBlueskyHandle(event.target.value)}
          value={blueskyHandle}
          autoCapitalize="none"
          />
        </div>
        <button
          className="rounded-br rounded-tr bg-blue-600 p-3 text-white"
          aria-label="Analise"
          >
          <MoveRight />
        </button>
      </form>
    </>
  );
}
