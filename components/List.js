class List extends React.Component {
  render() {
    const {
      items,
      removeItemCallback,
    } = this.props

    return (
      <ul>
        {items.map(item => <ListItem key={item} title={item} removeItemCallback={removeItemCallback} />)}
      </ul>
    )
  }
}