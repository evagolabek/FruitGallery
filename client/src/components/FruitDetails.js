import React, { PureComponent } from 'react'
// import './FruitDetails.css'

const fruits =
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

class FruitDetails extends PureComponent {


  render() {


    return (
      <div className='fruit-details'>

        <div className='fruit-list'>
          <h2>Fruits</h2>
          <table>
            <tr className='fruit-header'>
              <th>Type</th>
              <th>Origin</th>
              <th>Price per Kilo</th>
            </tr>

            {fruits && fruits.map(fruit =>
            <tr className='fruit-row' onClick={_=>window.location.href=`/fruits/${fruit.id}`}>
                <td className='fruit-type'>{`${fruit.type}`}</td>
                <td className='fruit-origin'>{`${fruit.origin}`}</td>
                <td className='fruit-pricePerKilo'>{`${fruit.pricePerKilo}`}</td>
            </tr>
            )}
          </table>
        </div>
      </div>
    )
  }
}



export default (FruitDetails)
