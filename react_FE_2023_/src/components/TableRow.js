// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
//
// class TableRow extends Component {
//     constructor(props) {
//         super(props);
//         this.delete = this.delete.bind(this);
//     }
//
//     // delete() {
//     //     console.log('begin delete')
//     //     console.log('http://localhost:8080/api/person/delete/' + this.props.obj.id)
//     //     axios.delete('http://localhost:8080/api/person/delete/' + this.props.obj.id)
//     //         .then(
//     //             console.log('Deleted'),
//     //             window.location.reload()
//     //         )
//     //         .catch(err => console.log(err))
//     //
//     // }
//
//     // render() {
//     //     return (
//     //         <tr>
//     //             <td>
//     //                 {this.props.obj.id}
//     //             </td>
//     //             <td>
//     //                 {this.props.obj.name}
//     //             </td>
//     //             <td>
//     //                 {this.props.obj.company}
//     //             </td>
//     //             <td>
//     //                 {this.props.obj.age}
//     //             </td>
//     //             <td>
//     //                 <Link to={"update/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
//     //             </td>
//     //             <td>
//     //                 <button onClick={this.delete} className="btn btn-danger">Delete</button>
//     //             </td>
//     //         </tr>
//     //     );
//     // }
//
//     render() {
//         return (
//             <div className="col-md-8">
//                 <span style={{fontWeight: "bold"}}>{this.props.obj.name}</span>
//                 <span style={{fontWeight: "bold"}}>{this.props.obj.numberOfPieces} pcs</span>
//                 <span style={{color: "red"}}>{this.props.obj.price} VNĐ</span>
//                 <span style={{fontWeight: "bold"}}>{this.props.obj.releaseYear}</span>
//             </div>
//         )
//             ;
//     }
// }
//
// export default TableRow;
