import Input from './Input'
import List from './List'
import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterValue: '',
      fruitsToDisplay: this.props.fruits
    }
  }

  handleFilterChange = (e) => {
    const newFilterVal = e.target.value
    this.setState({
      filterValue: newFilterVal
    })
  }

  render() {
    return (
      <div>
        <Input value={this.state.filterValue} onChange={this.handleFilterChange} />
        <List fruits={this.state.fruitsToDisplay} />
      </div>
    )
  }
}
