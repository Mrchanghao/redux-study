import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getRepos, clearRepos} from './redux';

class App extends Component {
  state = {
    username: 'tylerbuchea'
  }

  componentDidMount() {
    this.updateRepoList(this.state.username);
  }

  updateRepoList = username => this.props.getRepos(username);
  clearRepo = () => this.props.clearRepos();

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>this is the async app</h1>
        <strong>github username: </strong>
        <input
        type='text'
        value={this.state.username}
        onChange={e => this.setState({username: e.target.value})}
        placeholder='github username'
        />
        <button onClick={() => this.updateRepoList(this.state.username)}>GET REPOS</button>
        <button>CLEAR REPOS</button>
        <ul>
        {this.props.repos.map(item => (<li key={item.id}>
        <a href={item.archive_url}>{item.name}</a></li>))}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({repos: state.repos});
const mapDispatchToProps = {getRepos, clearRepos};




export default connect(mapStateToProps, mapDispatchToProps)(App);
