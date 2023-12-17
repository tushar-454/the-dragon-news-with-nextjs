import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Container, IconButton, Typography } from '@mui/material';
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
    path: '/category',
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

const Footer = () => {
  return (
    <Box className={'bg-black py-10'}>
      <Container>
        <Box
          className={'w-full text-center'}
          sx={{
            '& svg': {
              color: '#fff',
            },
          }}
        >
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
        </Box>
        <Box className='w-full text-center my-3'>
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} className='px-4 text-white'>
              {item.route}
            </Link>
          ))}
        </Box>
        <Typography color={'gray'} textAlign={'center'}>
          @2023 Dragon News. Design by Programming Hero
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
