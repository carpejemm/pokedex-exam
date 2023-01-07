import React, { useState } from 'react';

import styles from './Navigation.module.css';
import NavigationModal from './NavigationModal';

const Navigation = ({ types, loadMore }) => {
  const [showFilter, setShowFilter] = useState(false);

  const showFilterHandler = () => {
    setShowFilter(true);
  };

  const hideFilterHandler = () => {
    setShowFilter(false);
  };

  return (
    <header className={styles['main-container']}>
      <h2 className={styles.title}>Pokedex</h2>
      <div className={styles['button-container']}>
        <button onClick={showFilterHandler} className={styles.filter}>
          Change Types
        </button>

        <button onClick={loadMore} className={styles.load}>
          Load more
        </button>
      </div>
      
      {showFilter && (
        <NavigationModal onClose={hideFilterHandler} types={types} />
      )}
    </header>
  );
};

export default Navigation;
