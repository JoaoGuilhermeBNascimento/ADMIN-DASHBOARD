import { Box } from '@mui/material';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';

export default function Pie() {
  return (
    <Box mb='20px'>
      <Header title='Gráfico' subtitle='' />
      <Box height='75vh'>
        <PieChart />
      </Box>
    </Box>
  );
}
