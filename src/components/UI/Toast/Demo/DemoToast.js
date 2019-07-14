class Toast extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  
  render () {
    let classes = `toast ${this.props.level} `
    classes += this.state.visible ? 'visible' : ''
    return (
      <div className={classes}>
        <figure>
          <img src={this.getIcon()}/>
        </figure>
        <p>{ this.props.message }</p>
      </div>
    )
  }
  
  getIcon () {
    switch (this.props.level) {
      case 'warning': return 'http://svgshare.com/i/19x.svg'
      case 'danger': return 'http://svgshare.com/i/19E.svg'
      case 'success': return 'http://svgshare.com/i/19y.svg'
    }
  }
  
  componentWillReceiveProps (nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({
        visible: nextProps.visible
      })
    }
  }
}

Toast.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  message: React.PropTypes.string.isRequired
}

class App extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      showToast: false,
      level: 'success',
      message: null
    }
  }
  
  render () {
    return (
      <form onSubmit={this.showToast.bind(this)}>
        <select 
          onChange={this.onLevelChange.bind(this)} 
          required
         >
          <option value="" selected>Select level</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
        <input 
          onChange={this.onMessageChange.bind(this)}
          placeholder="Enter message"
          required
        />
        <button type="submit">Show toast</button>
        
        <Toast
          level={this.state.level}
          message={this.state.message}
          visible={this.state.showToast}
        />
      </form>
    )
  }
  
  onLevelChange (e) {
    this.setState({
      level: e.target.value
    })
  }
  
  onMessageChange (e) {
    this.setState({
      message: e.target.value
    })
  }
  
  showToast (e) {
    e.preventDefault()
    
    this.setState({
      showToast: true
    }, () => {
      setTimeout(() =>
        this.setState({ showToast: false })
    ,  3000)
    })
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)