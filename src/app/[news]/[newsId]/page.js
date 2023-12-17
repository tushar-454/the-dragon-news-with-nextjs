import getSingleNews from '@/utils/getSingleNews';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const page = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);

  return (
    <Box>
      <Container>
        <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              width={800}
              height={500}
              alt='details img'
            />
            <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt='details img'
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.thumbnail_url}
                  width={800}
                  height={500}
                  alt='details img'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Box>
              <Typography variant='h5'>{news.title}</Typography>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                className='my-5'
              >
                <Image
                  src={news.author.img}
                  width={50}
                  height={50}
                  alt='details img'
                  className='rounded-full'
                />
                <Box sx={{ display: 'flex' }}>
                  <Typography>Name: {news.author.name}</Typography>
                  <Typography>Publish: {news.author.published_date}</Typography>
                </Box>
              </Box>

              <Typography style={{ textAlign: 'justify', preLine: '' }}>
                {news.details}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default page;
