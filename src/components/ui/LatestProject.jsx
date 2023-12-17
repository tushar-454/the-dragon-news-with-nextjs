import getAllNews from '@/utils/getAllNews';
import { Box, CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const LatestProject = async () => {
  const { data: allNews } = await getAllNews();
  return (
    <Box className='my-5'>
      <Card className='w-full'>
        <CardActionArea>
          <Image
            src={allNews[0].thumbnail_url}
            width={800}
            height={500}
            alt='lnb'
          />
          <p className='px-5 py-3 rounded bg-red-500 text-white inline-block my-5'>
            Technology
          </p>
          <CardContent>
            <Typography gutterBottom variant='h4'>
              {allNews[0].title}
            </Typography>
            <Typography color='text.secondary' className='my-3'>
              By {allNews[0].author.name} - {allNews[0].author.published_date}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {allNews[0].details.length > 200
                ? allNews[0].details.slice(0, 200) + '...'
                : allNews[0].details}
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
        {allNews.map((item) => (
          <Grid item xs={6} key={item._id}>
            <Card className='w-full'>
              <CardActionArea>
                <Image
                  src={item.thumbnail_url}
                  width={800}
                  height={500}
                  alt='lnb'
                />
                <p className='px-5 py-3 rounded bg-red-500 text-white inline-block my-5'>
                  {item.category}
                </p>
                <CardContent>
                  <Typography gutterBottom variant='h4'>
                    {item.title}
                  </Typography>
                  <Typography color='text.secondary' className='my-3'>
                    By {item.author.name} - {item.author.published_date}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.details.length > 200
                      ? item.details.slice(0, 200) + '...'
                      : item.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestProject;
