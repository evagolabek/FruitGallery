import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {createRecipe} from '../actions/recipes'
import './AddRecipeForm.css'

  import TextField from 'material-ui/TextField';
  import Divider from 'material-ui/Divider';
	// import Business from 'material-ui/svg-icons/communication/business'

class AddRecipeForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
    console.log("HELLLLLO");
		e.preventDefault()
		this.props.createRecipe(this.state)
		this.props.history.push('/recipes')
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<div className='add-recipe-form'>
				<h1 style = {{ position: 'relative', top: 10 }}>Add Recipe</h1>
			  <Divider style={{ height:4, width: 500 }} />

			  <form onSubmit={this.handleSubmit} name = 'RecipeType'>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='name' floatingLabelText="Recipe Name:"
						value={this.state.name || ''} onChange={this.handleChange}/>
					<br/>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='img' floatingLabelText="Image:"
						value={this.state.img || ''} onChange={this.handleChange}/>
					<br/>

					<div className = 'button'>
					  <button type="submit">SAVE</button>
					</div>
			  </form>
			</div>
		)
	}
}


export default connect(null,{ createRecipe })(AddRecipeForm)
