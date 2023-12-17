import LatestProject from '@/components/ui/LatestProject';
import Sidebar from '@/components/ui/Sidebar';
import { Box, Grid } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestProject />
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Box>
  );
}
