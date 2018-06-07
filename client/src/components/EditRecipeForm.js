import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getRecipe, updateRecipe} from '../actions/recipes'
// import './FruitForm.css'

  import TextField from 'material-ui/TextField';
  import Divider from 'material-ui/Divider';
	// import Business from 'material-ui/svg-icons/communication/business'


class EditRecipeForm extends PureComponent {

  state = {}

  componentDidMount() {
    // console.log(this.props.match.params.fruitId);
    this.props.getRecipe(this.props.match.params.recipeId)
  }

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateRecipe(this.props.match.params.recipeId, this.state)
		this.props.history.push('/recipes')
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {

    const { recipe } = this.props
    if (!recipe) return 'This recipe does not exist!'

		return (
			<div className='edit-recipe-form'>
				<h1 style = {{ position: 'relative', top: 10 }}>Edit Recipe</h1>
			  <Divider style={{ height:4, width: 500 }} />

			  <form onSubmit={this.handleSubmit} name = 'RecipeType'>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='name' floatingLabelText="Recipe Name:"
						value={this.state.name || recipe.name || ''} onChange={this.handleChange}/>
					<br/>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='img' floatingLabelText="Image:"
						value={this.state.img || recipe.img || ''} onChange={this.handleChange}/>
					<br/>

					<div className = 'button'>
					  <button type="submit">UPDATE</button>
					</div>
			  </form>
			</div>
		)
	}
}

//for later to add more details to the recipe

// <TextField floatingLabelFocusStyle={{ color: '#F09517' }}
//   underlineFocusStyle={{ borderColor: '#F09517' }}
//   name='origin' floatingLabelText="Country of Origin:"
//   value={this.state.origin || recipe.origin || ''} onChange={this.handleChange}/>
// <br/>
//
// <TextField floatingLabelFocusStyle={{ color: '#F09517' }}
//   underlineFocusStyle={{ borderColor: '#F09517' }}
//   name='benefits' floatingLabelText="Benefits:"
//   value={this.state.benefits || fruit.benefits || ''} onChange={this.handleChange}/>
// <br/>

const mapStateToProps = (state, props) => ({
  recipe: state.recipe,
})


export default connect(mapStateToProps, { getRecipe, updateRecipe })(EditRecipeForm)
