import React from 'react';
import PropTypes from 'prop-types';
import styles from './notifications.module.css';

function Notification({ message }) {
  return <p className={styles.notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

/**
  |============================
  | variant 1
  |============================
*/
// import css from './notifications.module.css';

// export const Notification = ({ message }) => {
//   return <p className={css.notification}>{message}</p>;
// };
