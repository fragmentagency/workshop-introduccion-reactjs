class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      value: '',
      units: '',
      title: '',
    }
    this.addItem = this.addItem.bind(this)
  }

  handleChange(name, event) {
    this.setState({
      [name]: event.target.value,
    })
  }

  addItem() {
    const {
      units,
      title,
      items,
    } = this.state
    const item = {
      units,
      title,
    }
    items.push(item)
    this.setState({
      items,
      units: '',
      title: '',
    })
  }

  render() {
    const {
      items,
      units,
      title,
    } = this.state
    return (
      <div className="todo">
        <List
          items={items}
        />
        <div className="actions">
          <input
            type="number"
            value={units}
            onChange={e => this.handleChange('units', e)}
            placeholder="Units"
          />
          <input
            type="text"
            value={title}
            onChange={e => this.handleChange('title', e)}
            placeholder="Title"
          />
          <a onClick={this.addItem}>Add</a>
        </div>
      </div>
    )
  }
}