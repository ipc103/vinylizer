import React, { Component } from 'react'

export function withAuthentication(authenticate) {
  return WrappedComponent => (
    class withAuthentication extends Component {
      componentWillMount(){
        authenticate()
      }

      render(){
        return < WrappedComponent {...this.props} />
      }
    })
}
