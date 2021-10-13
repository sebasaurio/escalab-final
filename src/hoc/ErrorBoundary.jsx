import React, { Component } from 'react'
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core'

class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            hasError: false,
            error: '',
            errorInfo: ''
        }
    }

    static getDerivedStateFromError(error){
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo)
        this.setState({errorInfo})
    }

    render() {
        const {hasError, errorInfo} = this.state

        if(hasError){
            return (
                <Card variant='outlined'>
                    <CardHeader>
                        <Typography color='text.primary' gutterBottom>
                            There was an error in loading this page
                        </Typography>
                    </CardHeader>
                    <CardContent>
                        {
                            errorInfo && (
                                <Typography color='text.primary' gutterBottom>
                                    {
                                        errorInfo.componentStack.toString()
                                    }
                                </Typography>
                            )
                        }
                    </CardContent>
                </Card>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary
