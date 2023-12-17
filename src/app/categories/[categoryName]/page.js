import getCategoryNews from '@/utils/getCategoryNews';
import { Box, CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

const DynamicNewsPage = async ({ searchParams }) => {
  const { data: categoryNews } = await getCategoryNews(searchParams.category);

  return (
    <div>
      <h1 className='text-lg font-medium my-10'>
        This is {searchParams.category}. Total Number of news{' '}
        {categoryNews.length}
      </h1>
      <Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className='my-10'
        >
          {categoryNews.map((item) => (
            <Grid key={item.id} item xs={6}>
              <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
                <Card className='w-full'>
                  <CardActionArea>
                    <Image
                      src={item.thumbnail_url}
                      width={500}
                      height={500}
                      className='object-cover h-[300px]'
                      alt='lnb'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h6'>
                        {item.title.length > 30
                          ? item.title.slice(0, 30) + '...'
                          : item.title}
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
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default DynamicNewsPage;
