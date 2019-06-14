class List extends React.Component {
  render() {
    const {
      items,
    } = this.props
    return (
      <ul>
        {items.map(item => <Item key={`${item.units}-${item.title}`} {...item} />)}
      </ul>
    )
  }
}