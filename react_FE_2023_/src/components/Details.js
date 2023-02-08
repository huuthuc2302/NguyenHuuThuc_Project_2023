import React, {Component} from 'react';

import TableRow from './TableRow';
import axios from 'axios';


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {product: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/legos/legoListDetails')
            .then(response => {
                console.log(response.data);
                this.setState({product: response.data});
                console.log(this.state.product)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // tabRow() {
    //     return this.state.product.map(function (object, i) {
    //         console.log('hjgghj')
    //         return <TableRow obj={object} key={i}/>;
    //     });
    // }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <div className="row" style={{backgroundColor: "white",height:70}}>
                        </div>
                        <div className="row">
                            <div className="col-lg-3"></div>
                        <div className="col-lg-6" style={{backgroundColor: "#d9d9d9"}}>
                            <div >
                                <h2 style={{textAlign: "center",marginTop: 10}} >Chi tiết sản phẩm</h2>
                            </div>
                            <div>
                                <img style={{width: 480, height: 360,marginLeft: 120}} src="https://www.lego.com/cdn/cs/set/assets/blt10341821860b31e3/71781_alt4.png" alt={""}/>
                                <table>
                                    <tr>
                                        <th>Tên sản phẩm </th>
                                        <td className="px-5 py-2"><span>{this.state.product.name}</span></td>
                                    </tr>
                                    <tr>
                                        <th>Số mảnh </th>
                                        <td className="px-5 py-2"><span>{this.state.product.numberOfPieces} pcs</span></td>
                                    </tr>
                                    <tr>
                                        <th>Giá </th>
                                        <td className="px-5 py-2"><span style={{color: "red"}}>{this.state.product.price} VNĐ</span></td>
                                    </tr>
                                    <tr>
                                        <th>Năm sản xuất </th>
                                        <td className="px-5 py-2"><span>{this.state.product.releaseYear}</span></td>
                                    </tr>
                                </table>
                                {/*<p>Tên sản phẩm : <span style={{fontWeight: "bold"}}>{this.state.product.name}</span></p>*/}
                                {/*<p>Số mảnh : <span style={{fontWeight: "bold"}}>{this.state.product.numberOfPieces} pcs</span></p>*/}
                                {/*<p>Giá : <span style={{color: "red"}}>{this.state.product.price} VNĐ</span></p>*/}
                                {/*<p>Năm sản xuất : <span style={{fontWeight: "bold"}}>{this.state.product.releaseYear}</span></p>*/}
                            </div>
                        </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }

}
