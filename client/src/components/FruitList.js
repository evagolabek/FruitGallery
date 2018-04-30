import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getFruits} from '../actions/fruits'
// import {Redirect} from 'react-router-dom'

class FruitList extends PureComponent {
  componentWillMount() {
    this.props.getFruits()
  }

  render() {
    const {fruits} = this.props;

    return (
      <div className = 'fruit-list'>
        <h2>Fruits</h2>
        <table>
          <tr className='fruit-header'>
            <th>Type</th>
            <th>Fruit Origin</th>
            <th>Price per Kilo</th>
          </tr>

          {fruits && fruits.map(fruit =>
            <tr className='fruit-row' onClick={_=>window.location.href=`/fruits/${fruit.id}`}>
              <td className='fruit-type'>{fruit.type}</td>
              <td className='fruit-origin'>{fruit.origin}</td>
              <td className='fruit-pricePerKilo'>{fruit.pricePerKilo}</td>
            </tr>
          )}
        </table>
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

export default connect(mapStateToProps, {getFruits})(FruitList)
