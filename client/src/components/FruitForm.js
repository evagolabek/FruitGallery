import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {createFruit} from '../actions/fruits'
import './FruitForm.css'

class FruitForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createFruit(this.state)
		this.props.history.push('/fruits')
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
      <div className='add-fruit-form'>

				<div className='fruit-type'>
					<label htmlFor="type">Fruit Type</label>
					<input name="type" id="type" value={
						this.state.type || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="fruit-origin">Fruit origin</label>
					<input name="origin" id="origin" value={
						this.state.origin || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="benefits">Benefits</label>
					<input name="benefits" id="benefits" value={
						this.state.benefits || ''
					} onChange={ this.handleChange } />
				</div>

        <div>
					<label htmlFor="price per kilo">Price Per Kilo</label>
					<input name="pricePerKilo" id="pricePerKilo" value={
						this.state.pricePerKilo || ''
					} onChange={ this.handleChange } />
				</div>



      </div>
      <div className = 'button'>
				<button type="submit">Save</button>
      </div>
			</form>
		)
	}
}

export default connect (null,{createFruit})(FruitForm)
