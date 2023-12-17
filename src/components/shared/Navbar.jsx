'use client';
import logo from '@/assets/logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  {
    route: 'Home',
    path: '/',
  },
  {
    route: 'Pages',
    path: '/pages',
  },
  {
    route: 'Category',
    path: '/categories/news?category=all-news',
  },
  {
    route: 'News',
    path: '/news',
  },
  {
    route: 'About',
    path: '/about',
  },
  {
    route: 'Contact',
    path: '/contact',
  },
];

function Navbar() {
  return (
    <AppBar position='static' className='bg-black'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt='logo' />
          <Box className='w-full text-center'>
            {navItems.map((item, index) => (
              <Link key={index} href={item.path} className='px-4'>
                {item.route}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              '& svg': {
                color: '#fff',
              },
            }}
          >
            <Stack direction={'row'}>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
