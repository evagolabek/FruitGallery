import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getFruits} from '../actions/fruits'
// import {Redirect} from 'react-router-dom'

import {
  ListItem
} from 'material-ui/List';

const fruit =
[
 {
  id: 1,
  type: "orange",
  origin: "Spain",
  pricePerKilo: "15€"
 },

 {
  id: 2,
  type: "apple",
  origin: "Poland",
  pricePerKilo: "5€"
 }
]



class FruitList extends PureComponent {
  componentWillMount() {
    this.props.getFruits()
  }

  render() {
    // const {fruits} = this.props;


    return (
      <div className = 'fruit-list'>
        <h2>Current Fruits</h2>
          {fruit && fruit.map((fruit =>
            <div>
            <ListItem
            value={3}
              primaryText={'Fruit Type: '+`${fruit.type}`}
              secondaryText={'Fruit Origin: ' + `${fruit.origin}`}
              secondaryText={'Price per Kilo:' + `${fruit.pricePerKilo}`}
              className='fruit-row' onClick={_=>window.location.href=`/fruits/${fruit.id}`}
            />



            </div>
          ))}

        <button onClick={_=>window.location.href=`/addFruit`} className='fruit-addButton'>Add New Fruit</button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		fruits: state.fruits
	}
}

// <tr className='fruit-row' onClick={_=>window.location.href=`/fruits`}>
//   <td className='fruit-type'>{fruits.type}</td>
//   <td className='fruit-origin'>{fruits.origin}</td>
//   <td className='fruit-pricePerKilo'>{fruits.pricePerKilo}</td>
// </tr>

export default connect(mapStateToProps, {getFruits})(FruitList)
