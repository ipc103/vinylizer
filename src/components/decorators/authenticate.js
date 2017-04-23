import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default (WrappedComponent) => {
  return class extends Component {
    componentDidMount(){
      if (!sessionStorage.hasOwnProperty('accessToken')) {
        browserHistory.push('/')
      }
    }

    render(){
      return < WrappedComponent {...this.props} />
    }
  }
}
