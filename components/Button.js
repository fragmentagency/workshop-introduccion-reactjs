class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick() {
  //   const {
  //     active,
  //   } = this.state

  //   this.setState({ active: !active })
  // }

  render() {

    const {
      title,
      dimeHolaCallback,
    } = this.props

    const {
      active,
    } = this.state

    return (
      <button
        className={active ? 'active' : ''}
        onClick={dimeHolaCallback}>{title}</button>
    )
  }
}