class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    const {
      active
    } = this.state
    console.log('pre', this.state.active)
    this.setState({ active: !active }, () => {
      console.log('post', this.state.active)
    })
  }
  render() {
    const {
      title
    } = this.props
    const {
      active
    } = this.state
    return (
      <button
        className={`${active ? 'active' : ''}`}
        onClick={this.toggle}
      >
        {title}
      </button>
    )
  }
}