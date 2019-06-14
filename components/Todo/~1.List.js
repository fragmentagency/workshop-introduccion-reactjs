class List extends React.Component {
  render() {
    const {
      items,
    } = this.props
    return (
      <ul>
        {items.map(item => {
          const {
            units,
            title
          } = item
          return <Item units={units} title={title} />
        })}
      </ul>
    )
  }
}