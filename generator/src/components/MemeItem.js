import React, { Component } from 'react';
import {createMeme} from '../actions';
import {connect} from 'react-redux';


class MemeItem extends Component {
	constructor() {
		super();

		this.state = {
			hovered: false
		}

	}

	postMeme() {
		console.log(this.props);
		const {top, bottom} = this.props;
		const memeObj = {
			template_id: this.props.meme.id,
			text0: top,
			text1: bottom
		}
		this.props.createMeme(memeObj);
	}

	render() {
		return (
			<div 
			onClick={this.postMeme.bind(this)}
			onMouseEnter={() => this.setState({hovered: true})}
			onMouseLeave={() => this.setState({hovered: false})}
			className='meme-item'>
				<img
					src={this.props.meme.url}
					alt={this.props.meme.name}
					className={this.state.hovered ? 'meme-img darken-img' : 'meme-img'}
				/>
				<p className={this.state.hovered ? 'meme-txt' : 'no-txt'}>
					{this.props.meme.name}
				</p>
			</div>
		)
	}
}

export default connect(null, {createMeme})(MemeItem);