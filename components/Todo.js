class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  handleClick() {
    const {
      items,
      value,
    } = this.state

    items.push(value)

    this.setState({
      items,
      value: '',
    })
  }

  removeItem(title) {
    console.log('HOLA', title)
  }

  render() {
    const {
      items,
      value,
    } = this.state
    return (
      <div className="todo">
        <List items={items} removeItemCallback={this.removeItem} />
        <div className="actions">
          <input type="text" placeholder="Escribe algo..." value={value} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Add</button>
        </div>
      </div>
    )
  }
}