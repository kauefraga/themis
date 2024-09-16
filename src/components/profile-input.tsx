'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export function ProfileInput() {
  const router = useRouter();
  const [blueskyHandle, setBlueskyHandle] = useState('');

  const handleForm = (event: FormEvent) => {
    event.preventDefault();

    if (!blueskyHandle.includes('.')) {
      return router.push(`/${blueskyHandle}.bsky.social`);
    }

    return router.push(`/${blueskyHandle}`);
  };

  return (
    <form className="flex gap-2" onSubmit={handleForm}>
      <input
        type="text"
        placeholder="meunick.bsky.social"
        autoCapitalize="none"
        required
        onChange={(event) => setBlueskyHandle(event.target.value)}
        value={blueskyHandle}
        className="rounded-lg bg-[#f7f7f7] text-base px-5 h-10"
      />
      <button
        className="bg-bsky-blue w-10 h-10 rounded-lg flex items-center justify-center"
        aria-label="Procurar seu perfil"
      >
        <Search className="text-white w-5 h-5" />
      </button>
    </form>
  );
}
