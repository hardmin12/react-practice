import React from "react";



class ProductList extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            product1:"미친 특가 삼성 컴퓨터",
            product2:"미치지 않은 엘지 컴퓨터",
            product3:"미치고 싶은 맥북"
        }
   }
   
   
    render() {
        return (
            <div>

                <h1>{this.props.name}을(를) 위한 제품 목록</h1> 
                <ul>
                    <li><Product1 product1Prop={this.state.product1}/></li>
                    <li><Product2 product2Prop={this.state.product2}/></li>
                    <li><Product3 product3Prop={this.state.product3}/></li>
                </ul>
            </div>
        );
    }
}

class Product1 extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.product1Prop}</h1>
            </div>
        )
    }   
}

class Product2 extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.product2Prop}</h1>
            </div>
        )
    }   
}


class Product3 extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.product3Prop}</h1>
            </div>
        )
    }   
}



export default ProductList;