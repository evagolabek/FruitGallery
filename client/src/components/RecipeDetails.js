import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Card, CardMedia, CardTitle} from 'material-ui/Card'
import './RecipeDetails.css'
import {getRecipe, deleteRecipe} from '../actions/recipes'



class RecipeDetails extends PureComponent {
  componentDidMount() {
    // console.log(this.props.match.params.recipeId);
    this.props.getRecipe(this.props.match.params.recipeId)
  }

  handleDelete = () => {
		this.props.deleteRecipe(this.props.match.params.recipeId)
		this.props.history.push('/recipes')
	}

  render() {
    // console.log(this.props.recipe);

    if (!this.props.recipe) return ("This Recipe Id doesn't exist yet in our database")

    return (
      <Card className = 'recipe-details'>
        <CardMedia>
          <img src={this.props.recipe.img} alt="" />
        </CardMedia>
        <CardTitle title={this.props.recipe.name} subtitle={this.props.recipe.origin} />

        <button onClick={_=>window.location.href=`/editRecipe/${this.props.recipeId}`} className='recipe-editButton'>Edit</button>
        <button onClick={this.handleDelete} className='recipe-deleteButton'>Delete</button>
      </Card>
    )
  }
}

const mapStateToProps = (state, props) => ({
  recipeId: props.match.params.recipeId,
  recipe: state.recipe,
})


const mapDispatchToProps = {getRecipe, deleteRecipe}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails)
