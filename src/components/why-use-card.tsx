import { ReactNode } from 'react';

interface WhyUseCardProps {
  children: ReactNode;
}

export function WhyUseCard({ children }: WhyUseCardProps) {
  return (
    <div className="border-2 border-black/80 p-6 rounded-xl space-y-3">
      {children}
    </div>
  );
}
