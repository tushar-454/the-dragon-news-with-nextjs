import mainLogo from '@/assets/The Dragon News.png';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <Box className='w-full text-center'>
        <Image
          src={mainLogo}
          width={500}
          height={500}
          alt='mainlogo'
          className='mx-auto'
        />

        <Typography className='w-full text-center my-2'>
          Journalism Without Fear or Favour
        </Typography>
        <Typography className='w-full text-center'>
          {new Date().toLocaleString()}
        </Typography>
      </Box>
    </>
  );
};

export default Header;
