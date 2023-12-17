import sidebarNews from '@/assets/sidebarNews.png';
import squareAva from '@/assets/squareAva.png';
import { Box, CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <Box className='my-5'>
      <Card className='w-full'>
        <CardActionArea>
          <Image src={sidebarNews} width={'full'} height={500} alt='lnb' />
          <p className='px-5 py-3 rounded bg-red-500 text-white inline-block my-5'>
            Technology
          </p>
          <CardContent>
            <Typography gutterBottom variant='h6'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography color='text.secondary' className='my-3'>
              By Awlad Hossain - Mar 18 2023
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box className='my-6'>
        <Grid container wrap='nowrap' spacing={2} className='mb-5'>
          <Grid item>
            <Image
              src={squareAva}
              width={200}
              height={200}
              alt='sidebar image'
              className='w-24 h-24 object-cover rounded-lg'
            />
          </Grid>
          <Grid item xs>
            <Typography variant='h7' className='font-bold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
            </Typography>
            <Typography variant='body2' className='my-2'>
              Mar 18 2023
            </Typography>
          </Grid>
        </Grid>
        <Grid container wrap='nowrap' spacing={2} className='mb-5'>
          <Grid item>
            <Image
              src={squareAva}
              width={200}
              height={200}
              alt='sidebar image'
              className='w-24 h-24 object-cover rounded-lg'
            />
          </Grid>
          <Grid item xs>
            <Typography variant='h7' className='font-bold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
            </Typography>
            <Typography variant='body2' className='my-2'>
              Mar 18 2023
            </Typography>
          </Grid>
        </Grid>
        <Grid container wrap='nowrap' spacing={2} className='mb-5'>
          <Grid item>
            <Image
              src={squareAva}
              width={200}
              height={200}
              alt='sidebar image'
              className='w-24 h-24 object-cover rounded-lg'
            />
          </Grid>
          <Grid item xs>
            <Typography variant='h7' className='font-bold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
            </Typography>
            <Typography variant='body2' className='my-2'>
              Mar 18 2023
            </Typography>
          </Grid>
        </Grid>
        <Grid container wrap='nowrap' spacing={2} className='mb-5'>
          <Grid item>
            <Image
              src={squareAva}
              width={200}
              height={200}
              alt='sidebar image'
              className='w-24 h-24 object-cover rounded-lg'
            />
          </Grid>
          <Grid item xs>
            <Typography variant='h7' className='font-bold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
            </Typography>
            <Typography variant='body2' className='my-2'>
              Mar 18 2023
            </Typography>
          </Grid>
        </Grid>
        <Grid container wrap='nowrap' spacing={2} className='mb-5'>
          <Grid item>
            <Image
              src={squareAva}
              width={200}
              height={200}
              alt='sidebar image'
              className='w-24 h-24 object-cover rounded-lg'
            />
          </Grid>
          <Grid item xs>
            <Typography variant='h7' className='font-bold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
            </Typography>
            <Typography variant='body2' className='my-2'>
              Mar 18 2023
            </Typography>
          </Grid>
        </Grid>
        <Grid container wrap='nowrap' spacing={2} className='mb-5'>
          <Grid item>
            <Image
              src={squareAva}
              width={200}
              height={200}
              alt='sidebar image'
              className='w-24 h-24 object-cover rounded-lg'
            />
          </Grid>
          <Grid item xs>
            <Typography variant='h7' className='font-bold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
            </Typography>
            <Typography variant='body2' className='my-2'>
              Mar 18 2023
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Sidebar;
