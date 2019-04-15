import React from 'react'
import Aux from '../../hoc/Auxilary'

import Toolbar from '../Navigation/Toolbar/Toolbar'

import styles from './layout.css'

const layout = ( props ) => (
  <Aux>
    <Toolbar />
    <main className={styles.container}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
