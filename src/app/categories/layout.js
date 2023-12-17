import DynamicCategory from '@/components/DynamicCategory/DynamicCategory';
import { Box, Grid } from '@mui/material';

export default function CategoryLayout({ children }) {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DynamicCategory />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
