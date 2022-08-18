import React, {Component} from "react"
import Table from "./table"
import Form from "./Form";

class App extends Component {
    state = {
        characters: [],
    };

    removeCharacter = (index) => {
        const { characters } = this.state 

        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index
            }),
        })
    }

    handelSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character]})
    }

    render() {
    const { characters } = this.state 

      return (
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handelSubmit={this.handelSubmit}/>
        </div>
      )
    }
  }


export default App