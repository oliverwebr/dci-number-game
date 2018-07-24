import React, { Component } from 'react'
import './App.css'

const actions = {
  addNumber: (num, array) => {
    return [...array, num]
  },
  removeNumber: (num, array) => {
    let nextArray = [...array]
    const index = nextArray.indexOf(num)
    if (index > -1) {
      nextArray.splice(index, 1)
    }

    return nextArray
  }
}

class App extends Component {
  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    selectedNumbers: []
  }

  clickNumbers = num => {
    const nextNumbers = actions.removeNumber(num, this.state.numbers)
    const nextSelectedNumbers = actions.addNumber(
      num,
      this.state.selectedNumbers
    )
    this.setState({
      numbers: nextNumbers,
      selectedNumbers: nextSelectedNumbers
    })
  }

  clickSelectedNumbers(num) {
    const nextNumbers = actions.addNumber(num, this.state.numbers)
    const nextSelectedNumbers = actions.removeNumber(
      num,
      this.state.selectedNumbers
    )
    this.setState({
      numbers: nextNumbers,
      selectedNumbers: nextSelectedNumbers
    })
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          {this.state.numbers.map(num => (
            <span
              key={num}
              className="circle"
              onClick={e => {
                this.clickNumbers(num)
              }}
            >
              {num}
            </span>
          ))}
        </div>
        <div className="row">
          {this.state.selectedNumbers.map(num => (
            <span
              key={num}
              className="circle"
              onClick={e => {
                this.clickSelectedNumbers(num)
              }}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default App
