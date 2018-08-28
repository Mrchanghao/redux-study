import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';
import MemeItem from './MemeItem';
import MyMeme from './MyMeme';

class App extends Component {
	
		state = {
			memeLimit : 10,
			text0: '',
			text1: ''
		}
	
	changeHandler = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}


	render() {
		return (
			<div>
				<h2><u>짤 생성기</u></h2>
				<MyMeme />
				<h3><i> 맘에 드는 텍스트 작성 및 제출</i></h3>
				<form>
					<div className='form-group'>
						<label className='control-label'>Top</label>
						<input className='form-input' type='text' name='text0'
						onChange={this.changeHandler} 
						value={this.state.text0} />
					</div>
					<div className='form-group'>
						<label className='control-label'>bottom</label>
						<input className='form-input' type='text' 
						value={this.state.text1}
						onChange={this.changeHandler}
						name='text1' />
					</div>
					{/* <button className='submit-button'><i>Submit</i></button> */}
				</form>
				{
					this.props.memes.slice(0, this.state.memeLimit).map((meme) => {
						return (
							<MemeItem key={meme.id} 
							top={this.state.text0}
							bottom={this.state.text1}
							meme={meme} />
						)
					})
				}
				<button className='meme-button' onClick={() => {
					this.setState({memeLimit: this.state.memeLimit + 10})
				}}>
					Load more 10...
				</button>
			</div>
		)
	}

}

function mapStateToProps (state)  {
	return state;
}

export default connect(mapStateToProps, {})(App);