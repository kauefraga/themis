import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Themis',
  description: 'Quer melhorar o seu perfil do Bluesky? Themis vai te ajudar!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
