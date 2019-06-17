class App extends React.Component {
  constructor(props) {
    super(props)
    this.dimeHola = this.dimeHola.bind(this)
  }
  dimeHola() {
    console.log('hola')
  }
  render() {
    return (
      <div>
        <h1>Introducción a ReactJS</h1>
        <Button
          title="Dime hola"
          dimeHolaCallback={this.dimeHola} />
        <Todo />
      </div>
    )
  }
}