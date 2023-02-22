import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeopraphyChart from '../../components/GeopraphyChart';

export default function Geography() {
  return (
    <Box mb='20px'>
      <Header title='Map' subtitle='' />
      <Box height='75vh'>
        <GeopraphyChart />
      </Box>
    </Box>
  );
}
