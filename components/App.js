class App extends React.Component {
  something() {
    alert('Something!')
  }
  render() {
    return (
      <div>
        <h1>Hola!</h1>
        <Button title="Toggle" />
        <Button title="Salta!" callback={this.something} />
        <Todo />
      </div>
    )
  }
}