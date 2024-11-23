// src/pages/PermissionManagement.js

import React from 'react';
import { usePermissions } from '../contexts/PermissionContext';

const PermissionManagement = () => {
  const { permissions } = usePermissions();

  return (
    <div>
      <h2>Permission Management</h2>
      <ul>
        {permissions.map(permission => (
          <li key={permission}>{permission}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;
