import React from 'react';
import ThemeProvider from './themes/ThemeProvider';
import CalendarView from './screens/Calendar/CalendarView';


// Monthly List View - Shows list of months with number of completed days / total days
// Monthly Calendar View - Shows months with chips enabled or disabled based on habit completion
// Daily View - Shows list of habits with an option to check completed habits

/*
 *  Features
 *
 *  - Sign In Screen
 *  - Ability to switch between themes (Dark / Light)
 *  - Ability to switch languages
 *  - Ability to share habits with friends
 *  - Monthly List and Calendar View, Daily View, Settings View
 *  - Animation for Completion Checkmark
 */

const App = () => {
  return (
    <ThemeProvider>
      <CalendarView />
    </ThemeProvider>
  );
};

export default App;
