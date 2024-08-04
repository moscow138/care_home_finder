import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Provider from '@/components/Provider';


const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'care home finder App',
  description: 'Developed by John ogheneochuko Altschool Africa Engineering student!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={raleway.className}>
        <Provider>
        {/* h-screen flex flex-col  items-center */}
        <main className=''>
          <Navbar />
          {children}
        </main>
        <Toaster />
        </Provider>
      </body>
    </html>
  );
}
