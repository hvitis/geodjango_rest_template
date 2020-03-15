// App.js
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

// [
//     'primary',
//     'secondary',
//     'success',
//     'danger',
//     'warning',
//     'info',
//     'light',
//     'dark',
//   ].map((variant, idx) => (
//     <Alert key={idx} variant={variant}>
//     This is a {variant} alert—check it out!
//   </Alert>
// ))

const CustomAlert = props => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        key={props.alertId}
        variant={props.alertVariant}
        onClose={() => setShow(false)}
        dismissible
      >
        {props.alertContent}
      </Alert>
    );
  }
  return(
      <div hidden></div>
  )
};

export default CustomAlert;
