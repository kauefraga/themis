import { AtSign, Coffee, Github } from 'lucide-react';

import { AnchorHTMLAttributes } from 'react';

interface ActionWrapperProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

function ActionWrapper({ href, children, ...props }: ActionWrapperProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-1.5 text-[#434343] text-sm"
      {...props}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full md:w-[600px] flex items-center justify-center gap-5 md:justify-between py-4 px-3 shadow-2xl rounded-t-2xl">
      <ActionWrapper href="https://github.com/kauefraga/themis">
        <Github className="w-5 h-5" />
        <p className="hidden md:block">Contribua no GitHub</p>
      </ActionWrapper>

      <ActionWrapper href="https://www.pixme.bio/kauefraga">
        <Coffee className="w-5 h-5" />
        <p className="hidden md:block">Me apoie um café</p>
      </ActionWrapper>

      <ActionWrapper href="https://bsky.app/profile/kauefraga.dev">
        <AtSign className="w-5 h-5" />
        <p className="hidden md:block">Kauê Fraga Rodrigues</p>
      </ActionWrapper>
    </footer>
  );
}
