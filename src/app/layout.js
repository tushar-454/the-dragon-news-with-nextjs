import Navbar from '@/components/shared/Navbar';
import './globals.css';

export const metadata = {
  title: 'The Dragon News with NextJS',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
