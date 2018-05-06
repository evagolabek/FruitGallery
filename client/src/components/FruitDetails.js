import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import './FruitDetails.css'


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
]

class FruitDetails extends PureComponent {

  render() {

    return (
      <Card className = 'fruit-details'>
        <CardMedia>
          <img src={this.props.fruit.img} alt="" />
        </CardMedia>
        <CardTitle title={this.props.fruit.type} subtitle={this.props.fruit.origin} />
        <CardText>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
         Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
         Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    )
  }
}

const mapStateToProps = (state, props) => ({
  fruit: myFruits.find(fruit => `${fruit.id}` === props.match.params.fruitId)
})


export default connect(mapStateToProps)(FruitDetails)
