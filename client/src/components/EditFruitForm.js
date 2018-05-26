import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getFruit, updateFruit} from '../actions/fruits'
// import './FruitForm.css'

  import TextField from 'material-ui/TextField';
  import Divider from 'material-ui/Divider';
	// import Business from 'material-ui/svg-icons/communication/business'


class EditFruitForm extends PureComponent {

  state = {}

  componentDidMount() {
    console.log(this.props.match.params.fruitId);
    this.props.getFruit(this.props.match.params.fruitId)
  }

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createFruit(this.state)
		this.props.history.push('/fruits')
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {

    const { fruit } = this.props
    if (!fruit) return 'This fruit does not exist!'

		return (
			<div className='add-fruit-form'>
				<h1 style = {{ position: 'relative', top: 10 }}>Edit Fruit</h1>
			  <Divider style={{ height:4, width: 500 }} />

			  <form onSubmit={this.handleSubmit} name = 'FruitType'>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='type' floatingLabelText="Fruit Type:"
						value={this.state.type || fruit.type || ''} onChange={this.handleChange}/>
					<br/>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='origin' floatingLabelText="Country of Origin:"
						value={this.state.origin || fruit.origin || ''} onChange={this.handleChange}/>
					<br/>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='benefits' floatingLabelText="Benefits:"
						value={this.state.benefits || fruit.benefits || ''} onChange={this.handleChange}/>
					<br/>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='pricePerKilo' floatingLabelText="Price per Kilo:"
						value={this.state.pricePerKilo || fruit.pricePerKilo || ''} onChange={this.handleChange}/>
					<br/>

					<TextField floatingLabelFocusStyle={{ color: '#F09517' }}
						underlineFocusStyle={{ borderColor: '#F09517' }}
						name='img' floatingLabelText="Image:"
						value={this.state.img || fruit.img || ''} onChange={this.handleChange}/>
					<br/>

					<div className = 'button'>
					  <button type="submit">UPDATE</button>
					</div>
			  </form>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
  fruit: state.fruit,
})


export default connect(mapStateToProps, { getFruit, updateFruit })(EditFruitForm)
