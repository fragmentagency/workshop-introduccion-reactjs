class ListItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {
      title,
      removeItemCallback,
    } = this.props
    removeItemCallback(title)
  }

  render() {
    const {
      title,
    } = this.props
    return (
      <li onClick={this.handleClick}>{title}</li>
    )
  }
}