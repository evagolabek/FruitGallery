import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import './FruitDetails.css'
import {getFruit, deleteFruit} from '../actions/fruits'



class FruitDetails extends PureComponent {
  componentDidMount() {
    // console.log(this.props.match.params.fruitId);
    this.props.getFruit(this.props.match.params.fruitId)
  }

  handleDelete = () => {
		this.props.deleteFruit(this.props.match.params.fruitId)
		this.props.history.push('/fruits')
	}

  render() {
    // console.log(this.props.fruit);

    if (!this.props.fruit) return ("This Fruit Id doesn't exist yet in our database")

    return (
      <Card className = 'fruit-details'>
        <CardMedia>
          <img src={this.props.fruit.img} alt="" />
        </CardMedia>
        <CardTitle title={this.props.fruit.name} subtitle={this.props.fruit.origin} />
        <CardText>
          {this.props.fruit.benefits}
        </CardText>
        <button onClick={_=>window.location.href=`/editFruit/${this.props.fruitId}`} className='fruit-editButton'>Edit</button>
        <button onClick={this.handleDelete} className='fruit-deleteButton'>Delete</button>
      </Card>
    )
  }
}

const mapStateToProps = (state, props) => ({
  fruitId: props.match.params.fruitId,
  fruit: state.fruit,
})

// fruit: myFruits.find(fruit => `${fruit.id}` === props.match.params.fruitId)

const mapDispatchToProps = {getFruit, deleteFruit}

export default connect(mapStateToProps, mapDispatchToProps)(FruitDetails)
