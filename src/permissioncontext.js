// src/contexts/PermissionContext.js

import React, { createContext, useState, useContext } from 'react';
import { getPermissions } from '../api/api';

const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [permissions, setPermissions] = useState(getPermissions());

  return (
    <PermissionContext.Provider value={{ permissions, setPermissions }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermissions = () => useContext(PermissionContext);
