import React, {Component} from "react";
import logo from './logo.jpg';
import './App.css';

class ProductHeader extends Component {
    render() {
        return (
            <div>
                <table className="App-header">
                    <tr>
                        <td>
                            <img alt="연어덮밥" src={logo}
                                height="150px"/>
                        </td>
                        <td>
                            <h2>사케동 관리 프로그램</h2>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ProductHeader;