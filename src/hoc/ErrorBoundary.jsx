import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error){
        return{
            hasError : true
        }
    }

    componentDidCatch(error, errorInfo){
        //log info
        console.log(error, errorInfo)
    }

    render() {
        if(this.state.hasError){
            return <h1>Error</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary
