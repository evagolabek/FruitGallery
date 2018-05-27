import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getFruits} from '../actions/fruits'
import FruitCard from './FruitCard'
import './FruitList.css'


class FruitList extends PureComponent {
  componentDidMount() {
    this.props.getFruits()
  }

  render() {
    const { fruits } = this.props
    return(
      <div className = 'fruit-list'>
        { fruits && fruits.map(fruit =>
            <FruitCard
              key={fruit.id}
              id={fruit.id}
              name={fruit.name}
              img={fruit.img}
              origin={fruit.origin}
            />
          )
        }
        <button onClick={_=>window.location.href=`/addFruit`} className='fruit-addButton'>Add New Fruit</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
	fruits: state.fruits
})

const mapDispatchToProps = {getFruits}

export default connect(mapStateToProps, mapDispatchToProps)(FruitList)
