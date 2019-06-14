class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
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
        onClick={() => this.setState({ active: !active })}
      >
        {title}
      </button>
    )
  }
}