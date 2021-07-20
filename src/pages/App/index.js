import React from 'react';
import css from './style.module.css';

import Toolbar from '../../components/Toolbar';
import BurgerPage from "../BurgerPage";

function App() {
  return (
    <div>
      <Toolbar/>
      <main className={css.Content}>
      <BurgerPage/>
      </main>
      <div>
        Testing...        
      </div>
    </div>
  );
}

export default App;
