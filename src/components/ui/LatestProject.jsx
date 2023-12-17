import latestNewsBig from '@/assets/latestNews1.png';
import { Box, CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const LatestProject = () => {
  return (
    <Box className='my-5'>
      <Card className='w-full'>
        <CardActionArea>
          <Image src={latestNewsBig} width={'full'} height={500} alt='lnb' />
          <p className='px-5 py-3 rounded bg-red-500 text-white inline-block my-5'>
            Technology
          </p>
          <CardContent>
            <Typography gutterBottom variant='h4'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography color='text.secondary' className='my-3'>
              By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <hr />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className='my-10'
      >
        <Grid item xs={6}>
          <Card className='w-full'>
            <CardActionArea>
              <Image
                src={latestNewsBig}
                width={'full'}
                height={500}
                alt='lnb'
              />
              <CardContent>
                <Typography gutterBottom variant='h6'>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography color='text.secondary' className='my-3'>
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className='w-full'>
            <CardActionArea>
              <Image
                src={latestNewsBig}
                width={'full'}
                height={500}
                alt='lnb'
              />
              <CardContent>
                <Typography gutterBottom variant='h6'>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography color='text.secondary' className='my-3'>
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className='w-full'>
            <CardActionArea>
              <Image
                src={latestNewsBig}
                width={'full'}
                height={500}
                alt='lnb'
              />
              <CardContent>
                <Typography gutterBottom variant='h6'>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography color='text.secondary' className='my-3'>
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className='w-full'>
            <CardActionArea>
              <Image
                src={latestNewsBig}
                width={'full'}
                height={500}
                alt='lnb'
              />
              <CardContent>
                <Typography gutterBottom variant='h6'>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography color='text.secondary' className='my-3'>
                  By Awlad Hossain - Mar 18 2023
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestProject;
