// src/contexts/RoleContext.js

import React, { createContext, useState, useContext } from 'react';
import { getRoles } from '../api/api';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState(getRoles());

  return (
    <RoleContext.Provider value={{ roles, setRoles }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoles = () => useContext(RoleContext);
