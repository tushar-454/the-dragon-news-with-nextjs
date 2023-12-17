import getAllCategories from '@/utils/getAllCategory';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const DynamicCategory = async () => {
  const { data: allCategories } = await getAllCategories();

  return (
    <Box>
      <Typography variant='h5'>Categories</Typography>
      <Divider />
      <Stack rowGap={1}>
        {allCategories.map((item) => (
          <Button key={item.id} variant='outlined'>
            <Link
              href={`/categories/news?category=${item.title.toLowerCase()}`}
            >
              {item.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default DynamicCategory;
