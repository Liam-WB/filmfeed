import React from 'react';
import { useAlert } from './AlertContext';

const Alert = () => {
  const { alerts, removeAlert } = useAlert();

  return (
    <div>
      {alerts.map((alert, index) => (
        <div key={index} className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
          <button type="button" className="close" onClick={removeAlert}>
            <span>&times;</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Alert;