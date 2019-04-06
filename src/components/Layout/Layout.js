import React from 'react'
import Aux from '../../hoc/Aux'

import styles from './layout.css'

const layout = ( props ) => (
  <Aux>
    <div>
      Toolbar
      SideDrawer
      Backdrop
    </div>
    <main className={styles.container}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
