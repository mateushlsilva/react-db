import { Component } from "react";

type state = {
  pnome: string,
  password: string;
  email: string
}
class App extends Component<any, state> {
  constructor(props: any) {
    super(props)
    this.state = {
      pnome: '',
      password: '',
      email: ''
    }
  }

  eventoFormulario = (evento: any) => {
    evento.preventDefault()
  }

  obterPnome = (evento: any) => {
    this.setState({
      pnome: evento.target.value
    })
    console.log(this.state.pnome)
  }

  obterPassword = (evento: any) => {
    this.setState({
      password: evento.target.value
    })
    console.log(this.state.password)
  }

  obterEmail = (evento: any) => {
    this.setState({
      email: evento.target.value
    })
    console.log(this.state.email)
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.eventoFormulario}>
          <div className="row">
            <div className="input-field col s6">
              <input value={this.state.pnome} onChange={this.obterPnome} id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">Primeiro nome</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input value={this.state.password} onChange={this.obterPassword} id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input value={this.state.email} onChange={this.obterEmail} id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default App;