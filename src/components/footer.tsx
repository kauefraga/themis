import Github from '@/assets/github.svg';
import { Coffee } from 'lucide-react';
import Image from 'next/image';
import { AnchorHTMLAttributes } from 'react';

interface ActionWrapperProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

function ActionWrapper({ href, children, ...props }: ActionWrapperProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 decoration-blue-600 underline-offset-2 hover:underline"
      {...props}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t-2 border-blue-600">
      <div className="flex items-center justify-center px-12 py-8 md:justify-between">
        <div className="hidden space-x-10 md:flex">
          <ActionWrapper href="https://github.com/kauefraga/themis">
            <Image src={Github} alt="GitHub Icon" width={24} />
            <p>Contribua no GitHub</p>
          </ActionWrapper>

          <ActionWrapper href="https://www.pixme.bio/kauefraga">
            <Coffee />
            <p>Me apoia um pix pro cafézinho</p>
          </ActionWrapper>
        </div>

        <p>
          Feito por{' '}
          <a
            href="https://bsky.app/profile/kauefraga.dev"
            target="_blank"
            className="underline decoration-blue-600 underline-offset-2"
          >
            Kauê Fraga Rodrigues
          </a>
        </p>
      </div>
    </footer>
  );
}
