import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

export default function Line() {
  return (
    <Box mb='20px'>
      <Header title='Gráfico de linhas' subtitle='Gráfico de linha simples' />
      <Box height='75vh'>
        <LineChart />
      </Box>
    </Box>
  );
}
