import { Navbar } from '@/components';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    
      <main className="flex flex-col items-center p-24">
            {children}
        </main>
    </>
  );
}