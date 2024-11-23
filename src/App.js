// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import PermissionManagement from './PermissionManagement';
import { UserProvider } from './UserContext';
import { RoleProvider } from './RoleContext';
import { PermissionProvider } from './PermissionContext';
import './styles/App.css';

const App = () => {
  return (
    <UserProvider>
      <RoleProvider>
        <PermissionProvider>
          <Router>
            <Routes>
              <Route path="/" element={<UserManagement />} />
              <Route path="/roles" element={<RoleManagement />} />
              <Route path="/permissions" element={<PermissionManagement />} />
            </Routes>
          </Router>
        </PermissionProvider>
      </RoleProvider>
    </UserProvider>
  );
};

export default App;
