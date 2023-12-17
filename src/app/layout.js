import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import { Container } from '@mui/material';
import './globals.css';

export const metadata = {
  title: 'The Dragon News with NextJS',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Navbar />
        <Container className={'min-h-screen'}>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
