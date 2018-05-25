import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {createFruit} from '../actions/fruits'
import './FruitForm.css'

  import TextField from 'material-ui/TextField';
  import Divider from 'material-ui/Divider';
	// import Business from 'material-ui/svg-icons/communication/business'

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
			<div className='add-fruit-form'>
				<h1 style = {{ position: 'relative', top: 10 }}>Add Fruit</h1>
			  <Divider style={{ height:4, width: 500 }} />

			  <form onSubmit={this.handleSubmit} name = 'FruitType'>
					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='origin' floatingLabelText="Country of Origin:"
						value={this.state.origin || ''} onChange={this.handleChange}/>
					<br/>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='benefits' floatingLabelText="Benefits:"
						value={this.state.benefits || ''} onChange={this.handleChange}/>
					<br/>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='pricePerKilo' floatingLabelText="Price per Kilo:"
						value={this.state.pricePerKilo || ''} onChange={this.handleChange}/>
					<br/>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='usedInRecipes' floatingLabelText="Used in Recipes:"/>
					<br/>

					<div className = 'button'>
					  <button type="submit">SAVE</button>
					</div>
			  </form>
			</div>
		)
	}
}


export default connect(null,{ createFruit })(FruitForm)
