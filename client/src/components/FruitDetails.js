import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import './FruitDetails.css'
import {getFruit} from '../actions/fruits'


// const myFruits =
// [
//  {
//   id: 1,
//   type: "orange",
//   img: "../images/orange.jpg",
//   origin: "Spain",
//   pricePerKilo: "15€",
//   benefits:"Bomb of vitamin C"
//  },
//  {
//   id: 2,
//   type: "apple",
//   img: "../images/apple.jpg",
//   origin: "Poland",
//   pricePerKilo: "5€"
// },
// {
//  id: 3,
//  type: "peach",
//  img: "../images/peach.jpg",
//  origin: "North China",
//  pricePerKilo: "7€"
// },
// {
//  id: 4,
//  type: "pinapple",
//  img: "../images/pinapple.jpg",
//  origin: "Brazil",
//  pricePerKilo: "12€"
// },
// {
//  id: 5,
//  type: "fig",
//  img: "../images/fig.jpg",
//  origin: "France",
//  pricePerKilo: "18€"
// },
// ]

class FruitDetails extends PureComponent {
  componentDidMount() {
    console.log(this.props.match.params.fruitId);
    this.props.getFruit(this.props.match.params.fruitId)
  }

  render() {
    // console.log(this.props.fruit);

    if (!this.props.fruit) return ("This Fruit Id doesn't exist yet in our database")

    return (
      <Card className = 'fruit-details'>
        <CardMedia>
          <img src={this.props.fruit.img} alt="" />
        </CardMedia>
        <CardTitle title={this.props.fruit.type} subtitle={this.props.fruit.origin} />
        <CardText>
          {this.props.fruit.pricePerKilo}
          <br/>
          <br/>
          {this.props.fruit.benefits}
        </CardText>
        <button onClick={_=>window.location.href=`/editFruit`} className='fruit-editButton'>Edit</button>
      </Card>
    )
  }
}

const mapStateToProps = (state, props) => ({
  fruitId: props.match.params.fruitId,
  fruit: state.fruit,
})

// fruit: myFruits.find(fruit => `${fruit.id}` === props.match.params.fruitId)

const mapDispatchToProps = {getFruit}

export default connect(mapStateToProps, mapDispatchToProps)(FruitDetails)
