import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Perguntas frequentes' />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Perguntas importantes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            repellat tempora qui ipsa explicabo totam minus id perferendis
            accusantium commodi quos voluptatibus aliquid exercitationem, hic
            esse molestias iusto dicta dolor!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Como cadastrar um usuário
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            repellat tempora qui ipsa explicabo totam minus id perferendis
            accusantium commodi quos voluptatibus aliquid exercitationem, hic
            esse molestias iusto dicta dolor!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Como excluir um usuário
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            repellat tempora qui ipsa explicabo totam minus id perferendis
            accusantium commodi quos voluptatibus aliquid exercitationem, hic
            esse molestias iusto dicta dolor!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Como alterar os dados de pagamento de um usuário
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            repellat tempora qui ipsa explicabo totam minus id perferendis
            accusantium commodi quos voluptatibus aliquid exercitationem, hic
            esse molestias iusto dicta dolor!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Como adicionar e solicitar férias
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            repellat tempora qui ipsa explicabo totam minus id perferendis
            accusantium commodi quos voluptatibus aliquid exercitationem, hic
            esse molestias iusto dicta dolor!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Como cancelar férias e abonos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            repellat tempora qui ipsa explicabo totam minus id perferendis
            accusantium commodi quos voluptatibus aliquid exercitationem, hic
            esse molestias iusto dicta dolor!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
