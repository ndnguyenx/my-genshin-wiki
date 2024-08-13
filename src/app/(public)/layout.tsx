import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Genshin Wikia',
  description: 'genshin wiki',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}