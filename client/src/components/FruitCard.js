import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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


  render() {

    return(
      <div className = 'fruit-card'>
        <Card>
          <CardMedia>
            <img src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/46/cb/e1/shutterstock-252338818.jpg" alt="" />
          </CardMedia>
          <CardTitle title={this.props.type} subtitle={this.props.origin} />
        </Card>
      </div>


    )
  }
}


export default (FruitCard)
