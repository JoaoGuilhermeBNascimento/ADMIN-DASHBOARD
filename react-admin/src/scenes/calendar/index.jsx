import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt('Descreva o que deseja adicionar');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allday: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Tem certeza que deseja deletar o evento '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m='20px'>
      <Header title='Calendário' subtitle='Calendário interativo' />

      <Box display='flex' justifyContent='space-between'>
        {/* {Calendar Sidebar} */}
        <Box
          flex='1 1 20%'
          backgroundColor={colors.primary[400]}
          p='15px'
          borderRadius='4px'
        >
          <Typography variant='h5'>Eventos</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* {Calendar} */}
        <Box flex='1 1 100%' ml='15px'>
          <FullCalendar
            height='75vh'
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: '1234', title: 'All-Day event', date: '2023-02-21' },
              { id: '4124', title: 'Timed event', date: '2023-02-23' },
            ]}
          ></FullCalendar>
        </Box>
      </Box>
    </Box>
  );
}
