import React, { Component } from 'react'
import Header from "./Header"
export class HeaderClassComponets extends Component {
    constructor(props){
        super(props)
        this.state = { visible: false, placement: 'left' };
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if(isTop !== true){
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false })
            }
        });
    }
  render() {
    return (
        <div className={this.state.scrolled ? 'nav scrolled' : 'nav'} >
            <Header />
        </div>
    )
  }
}

export default HeaderClassComponets