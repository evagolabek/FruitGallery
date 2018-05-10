import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getFruits} from '../actions/fruits'
import FruitCard from './FruitCard'
import './FruitList.css'



const myFruits =
[
 {
  id: 1,
  type: "orange",
  img: "../images/orange.jpg",
  origin: "Spain",
  pricePerKilo: "15€"
 },
 {
  id: 2,
  type: "apple",
  img: "../images/apple.jpg",
  origin: "Poland",
  pricePerKilo: "5€"
},
{
 id: 3,
 type: "peach",
 img: "../images/peach.jpg",
 origin: "North China",
 pricePerKilo: "7€"
},
{
 id: 4,
 type: "pinapple",
 img: "../images/pinapple.jpg",
 origin: "Brazil",
 pricePerKilo: "12€"
},
{
 id: 5,
 type: "fig",
 img: "../images/fig.jpg",
 origin: "France",
 pricePerKilo: "18€"
},
]

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
              id={fruit.id}
              type={fruit.type}
              img={fruit.img}
              origin={fruit.origin}
              pricePerKilo={fruit.pricePerKilo}
            />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
	fruits: state.fruits
})

const mapDispatchToProps = {getFruits}

export default connect (mapStateToProps, mapDispatchToProps)(FruitList)
