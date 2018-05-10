import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import './FruitCard.css'
import {Card, CardMedia, CardTitle} from 'material-ui'



export class FruitCard extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    pricePerKilo: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { shadow: 1 }
  }

  onMouseOver = () => this.setState({ shadow: 3 });
  onMouseOut = () => this.setState({ shadow: 1 });


  render() {

    return(
      <Card
        className = 'fruit-card'
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        zDepth={this.state.shadow}
        onClick={() => this.props.history.push(`/fruits/${this.props.id}`)}
      >
        <CardMedia>
          <img src={this.props.img} alt="" />
        </CardMedia>
        <CardTitle title={this.props.type} subtitle={this.props.origin} />
      </Card>
    )
  }
}


export default withRouter (FruitCard)
