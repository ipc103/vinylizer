import React, { Component } from 'react'

export default class User extends Component {
  state = {user: {}}

  componentDidMount(){
    const { accessToken, refreshToken } = this.props.params
    this.fetchUser(accessToken, refreshToken)
  }

  fetchUser(accessToken, refreshToken){
    const URL = 'https://api.spotify.com/v1/me'

    fetch(URL, {
      headers: {
       'Authorization': `Bearer ${accessToken}`,
       'Content-Type': 'application/json'
     }
   }).then(res => res.json()).then(user => {
     this.setState({user})
   })
  }

  render(){
    if ( !this.state.user.email ) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>User Show</h2>
        <p>{this.state.user.email}</p>
      </div>
    )
  }
}
