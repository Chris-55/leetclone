import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LeetClone',
  description: 'Leetcode Clone App',
};

/* Kiek supratau su next.js nenaudojam index.js ar app.js filai. layout.tsx 
https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating <- oficiali dokumentacija routinimo
https://www.youtube.com/watch?v=wm5gMKuwSYk&t=63s 15:55 <- per kelias min isaiskina cia struktura
https://www.youtube.com/watch?v=vuznUqirz5I&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=2 <- paaiskina kaip veikia react routinimas
nzn kodel tam leetclone video naudoja app.tsx ir index.tsx(turbut naudoja sena next js versija), bet default ir rekomenduojama struktura yra tokia. */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
