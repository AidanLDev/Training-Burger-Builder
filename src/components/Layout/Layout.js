import React from 'react'
import Aux from '../../hoc/Auxilary'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SiderDrawer/SiderDrawer'

import styles from './layout.css'

class Layout extends React.Component {

  state = {
    sideDrawer: false
  }

  handleCloseSideDrawer = () => {
    this.setState({
      sideDrawer: false
    })
  }

  handleMenuButtonClick = () => {
    this.setState((prevState) => {
      return {sideDrawer: !prevState.sideDrawer}
    })
  }

  render() {
    return (
      <Aux>
      <Toolbar
        menuClick={this.handleMenuButtonClick}
      />
      <SideDrawer
        closed={this.handleCloseSideDrawer}
        open={this.state.sideDrawer}
      />
      <main className={styles.container}>
        {this.props.children}
      </main>
    </Aux>
    )
  }
}



export default Layout;
