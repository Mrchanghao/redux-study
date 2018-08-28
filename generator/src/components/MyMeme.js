import React, { Component } from 'react';
import {connect} from 'react-redux';

class MyMeme extends Component {
	render() {
		console.log(this.props.myMemes);
		return (
			<div>
				{
					this.props.myMemes.map((myMeme, i) => {
						return (
							<img key={i} 
								src={myMeme.data.url}
								alt={'my-meme' + i}
								className='my-meme-img'
							/>
						)
					})
				}
			</div>
		)
	}
}

const mapStatetoProps = (state) => {
	return {
		myMemes: state.myMemes
	}
}

export default connect(mapStatetoProps, null)(MyMeme);