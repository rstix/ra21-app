import React from 'react'
import Winner from './winner'

class Puzzle extends React.Component {
  signs = ['+', '-', '*']
  constructor (props) {
    super(props)
    this.state = {
      sign: '+',
      numbers: [0, 1],
      correctAnswer: 1,
      answers: [],
      winner: null
    }
  }

  componentWillMount () {
    this.getSign()
  }

  getSign = () => {
    const index = Math.floor(Math.random() * Math.floor(3))
    this.setState(
      {
        sign: this.signs[index]
      },
      () => this.getNumbers()
    )
  }

  getNumbers = () => {
    const number1 = Math.floor(Math.random() * Math.floor(20)) + 1
    const number2 = Math.floor(Math.random() * Math.floor(20)) + 1
    this.setState(
      {
        numbers: [number1, number2]
      },
      () => this.createAnswers()
    )
  }

  createAnswers = () => {
    let answers = []
    answers.push(
      this.getResult(
        this.state.numbers[0],
        this.state.numbers[1],
        this.state.sign
      )
    )
    for (let i = 0; i < 3; i++) {
      answers.push(Math.floor(Math.random() * Math.floor(200)))
    }

    this.setState({
      answers: answers.sort((a, b) => a - b)
    })
  }

  getResult = (nbr1, nbr2, sign) => {
    let result = 0
    switch (sign) {
      case '+':
        result = nbr1 + nbr2
        break
      case '-':
        result = nbr1 - nbr2
        break
      case '*':
        result = nbr1 * nbr2
        break
    }
    this.setState({ correctAnswer: result })
    return result
  }

  validateResult = e => {
    const win =
      parseFloat(e.target.innerHTML) ===
      this.getResult(
        this.state.numbers[0],
        this.state.numbers[1],
        this.state.sign
      )
    this.setState({
      winner: win ? 'Odpovědeli jste správně.' : 'Odpověděli jste špatně.'
    })
  }

  generateNew = () => {
    this.setState({
      winner: null
    })
    this.getSign()
  }

  render () {
    return (
      <>
        <div className='card mt-4'>
          <h5 className='card-header'>
            Kolik je {this.state.numbers[0]} {this.state.sign}{' '}
            {this.state.numbers[1]} ?
          </h5>
          <div className='card-body d-flex flex-wrap justify-content-center'>
            {this.state.answers.map(answer => (
              <button
                key={answer}
                onClick={this.validateResult}
                className='btn btn-primary m-1'
                style={{ width: '40%' }}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
        {this.state.winner && (
          <Winner
            generateNew={this.generateNew}
            winner={this.state.winner}
            correctAnswer={this.state.correctAnswer}
          />
        )}
      </>
    )
  }
}

export default Puzzle
