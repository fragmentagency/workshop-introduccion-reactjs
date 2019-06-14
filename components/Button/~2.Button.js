class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }
  toggle() {
    const {
      active
    } = this.state
    this.setState({ active: !active })
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