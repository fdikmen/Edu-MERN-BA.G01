import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import { Container } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'
import RootRouter from '../router/RootRouter'



const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0em',
}

export default class HomePage extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    toggleOverlay = (inView) => this.setState({ overlayFixed: !inView })

    render() {
        const { overlayFixed, overlayRect } = this.state

        return (
            <div>
                <PageHeader />

                <Container text style={{minHeight: 300,}}>
                    <InView onChange={this.toggleOverlay} rootMargin='0px 0px 80px 0px'>
                        <div style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}} />
                    </InView>

                    <RootRouter />


                </Container>

                <PageFooter />
            </div>
        )
    }
}