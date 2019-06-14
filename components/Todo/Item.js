class Item extends React.Component {
  render() {
    const {
      units,
      title
    } = this.props
    return (
      <li>
        <strong>{units}</strong>
        {title}
      </li>
    )
  }
}