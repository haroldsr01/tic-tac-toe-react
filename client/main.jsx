import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App.jsx';
import { AuthProvider } from '../imports/ui/AuthProvider.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Meteor.startup(() => {
//   render(<App />, document.getElementById('react-target'));
// });

Meteor.startup(() => {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>          
          <Routes>
            <Route path='/*' element={<App />} />            
          </Routes>        
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('react-target'));
});