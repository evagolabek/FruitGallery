import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipes'
import RecipeCard from './RecipeCard'
import './RecipeList.css'


class RecipeList extends PureComponent {
  componentDidMount() {
    this.props.getRecipes()
  }

  render() {
    const { recipes } = this.props
    return(
      <div className = 'recipe-list'>
        { recipes && recipes.map(recipe =>
            <RecipeCard
              id={recipe.id}
              name={recipe.name}
              img={recipe.img}
            />
          )
        }
        <button onClick={_=>window.location.href=`/addRecipe`} className='recipe-addButton'>Add New Recipe</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
	recipes: state.recipes
})

const mapDispatchToProps = {getRecipes}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
