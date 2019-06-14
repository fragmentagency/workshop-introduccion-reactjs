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
      callback,
    } = this.props
    if (callback) {
      callback()
    } else {
      const {
        active
      } = this.state
      this.setState({ active: !active })
    }
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