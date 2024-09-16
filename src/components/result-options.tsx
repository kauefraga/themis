import { Undo2 } from 'lucide-react';
import Link from 'next/link';
import { ProfileInput } from './profile-input';

export function ResultOptions() {
  return (
    <div className="w-full md:w-[600px] rounded-2xl overflow-hidden shadow-sm h-[60px] flex items-center justify-between px-3.5">
      <Link href="/" className="flex items-center gap-2 text-[#434343]">
        <Undo2 />
        <p className="hidden md:block">Voltar</p>
      </Link>
      <ProfileInput />
    </div>
  );
}
