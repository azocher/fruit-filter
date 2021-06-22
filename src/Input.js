import { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
                <label>Filter Fruit By:</label>
                <input type="text" id="fruitFilter" value={this.props.value} onChange={this.props.onChange} />
            </div>
        )
    }
}