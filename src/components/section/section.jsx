import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.css';

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;

/**
  |============================
  | variant 1
  |============================
*/
// import css from './section.module.css';

// export const Section = ({ title, children }) => {
//   return (
//     <section className={css.section}>
//       <h2 className={css.title}>{title}</h2>
//       {children}
//     </section>
//   );
// };
