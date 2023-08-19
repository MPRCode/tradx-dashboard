import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

      {/* ACCORDION ELEMENT */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Very Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas maecenas pharetra
            convallis posuere morbi leo urna molestie at elementum eu facilisis
            sed odio morbi quis commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere urna nec
            tincidunt praesent
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDION ELEMENT */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another Very Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas maecenas pharetra
            convallis posuere morbi leo urna molestie at elementum eu facilisis
            sed odio morbi quis commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere urna nec
            tincidunt praesent
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDION ELEMENT */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Some Random Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas maecenas pharetra
            convallis posuere morbi leo urna molestie at elementum eu facilisis
            sed odio morbi quis commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere urna nec
            tincidunt praesent
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDION ELEMENT */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Not so very Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas maecenas pharetra
            convallis posuere morbi leo urna molestie at elementum eu facilisis
            sed odio morbi quis commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere urna nec
            tincidunt praesent
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDION ELEMENT */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas maecenas pharetra
            convallis posuere morbi leo urna molestie at elementum eu facilisis
            sed odio morbi quis commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere urna nec
            tincidunt praesent
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDION ELEMENT */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Very Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas maecenas pharetra
            convallis posuere morbi leo urna molestie at elementum eu facilisis
            sed odio morbi quis commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere urna nec
            tincidunt praesent
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDION ELEMENT */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another Very Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas maecenas pharetra
            convallis posuere morbi leo urna molestie at elementum eu facilisis
            sed odio morbi quis commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere urna nec
            tincidunt praesent
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ACCORDION ELEMENT */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas maecenas pharetra
            convallis posuere morbi leo urna molestie at elementum eu facilisis
            sed odio morbi quis commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in fermentum posuere urna nec
            tincidunt praesent
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
