import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Details from "./components/Details";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M3.472 3.425V508.59h505.172V3.425H3.472z' fill='%23fff' /%3E%3Cpath d='M3.472 3.425V508.59h505.172V3.425H3.472zm471.561 209.982c-.83 15.736-5.841 35.352-10.256 48.458-17.762 52.775-38.357 85.493-86.053 85.493-14.042 0-38.954-3.725-48.133-28.709l-2.175-5.928-3.909 4.953c-14.916 18.893-37.082 29.796-60.802 29.908-18.2.083-32.823-6.011-42.284-17.64l-2.594-3.19-2.763 3.05c-10.104 11.154-27.7 17.552-48.278 17.552-16.158 0-30.11-5.494-39.29-15.45l-2.5-2.717-2.6 2.626c-10.205 10.303-26.285 15.494-46.504 15.02-24.529-.584-39.463-14.272-39.947-36.633-.74-34.474 32.625-107.009 46.435-129.063 8.966-14.732 21.296-21.874 37.707-21.874 11.17 0 18.81 2.334 23.348 7.142 4.133 4.375 4.95 8.063 5.318 16.935l.473 11.47 6.054-9.754c14.646-23.596 38.918-26.855 62.966-26.855 16.72 0 31.31 6.149 37.17 15.664l2.163 3.508 3.129-2.663c12.394-10.534 29.879-16.332 49.235-16.332 21.13 0 36.482 5.253 45.64 15.613 2.08 2.352 3.457 3.996 5.368 8.016l2.352 4.935 3.53-4.172c13.409-15.86 31.713-23.897 54.429-23.897 17.99 0 31.649 4.783 40.586 14.215 11.213 11.817 12.814 28.448 12.185 40.32z' fill='%23f6ec36' /%3E%3Cpath d='M3.472 3.425V508.59h505.172V3.425H3.472zm485.787 229.363c-2.286 18.384-14.71 52.446-21.31 66.058-17.712 36.493-41.374 64.53-86.967 64.53-24.356 0-44.39-7.767-56.106-22.698-17.156 15.035-38.39 22.91-61.254 22.91-17.614 0-33.18-5.086-45.051-14.493-13.1 9.23-30.779 14.378-50.37 14.378-16.364 0-31.088-4.494-42.612-12.799-12.749 8.46-29.457 12.665-49.069 12.2-32.632-.77-55.163-21.47-55.81-51.522-.852-39.921 32.766-112.987 48.61-138.29 11.857-19.478 29.955-29.957 52.132-29.957 24.07 0 32.795 6.874 37.09 15.627 18.572-15.772 43.191-16.679 60.719-16.679 19.348 0 31.49 5.137 41.815 13.356 14.262-8.555 30.623-13.002 50.109-13.002 24.915 0 43.425 5.795 56.337 18.558 15.056-12.532 33.914-18.243 55.018-18.243 27.907 0 46.269 10.064 57.052 25.07 15.184 21.166 12.467 42.472 9.667 64.996z' fill='%23d01012' /%3E%3Cpath d='M0 0v512h512V0H0zm504.96 7.052v497.915H7.047V7.052h497.911z' /%3E%3Cpath d='M486.792 153.639v-3.486h2.366c1.73 0 2.63.607 2.63 1.73 0 .892-.578 1.756-2.337 1.756h-2.659zm8.493 7.232l-1.474-2.558c-1.279-2.236-1.633-2.59-2.727-2.973v-.069c2.153-.252 3.431-1.636 3.431-3.55 0-2.024-1.278-3.555-4.006-3.555h-6.336v12.712h2.626v-5.206h.48c1.124 0 1.572.127 2.081.636.513.52 1.28 1.6 1.73 2.493l1.027 2.077 3.168-.007zm-6.253-16.245c5.455 0 9.887 4.4 9.887 9.847 0 5.448-4.44 9.866-9.887 9.866-5.44 0-9.826-4.425-9.826-9.866 0-5.44 4.385-9.847 9.826-9.847zm0-2.42c-6.781 0-12.254 5.476-12.254 12.267 0 6.788 5.473 12.26 12.254 12.26a12.24 12.24 0 0 0 12.271-12.26 12.235 12.235 0 0 0-12.271-12.268zM422.262 155.344c-26.462 0-44.745 10.49-57.121 25.146-2.092-4.385-3.681-6.307-5.917-8.84-10.133-11.451-26.419-16.794-48.278-16.794-21.357 0-39.163 6.669-51.525 17.174-6.42-10.44-21.722-17.351-40.175-17.351-24.11 0-50.38 3.41-65.968 28.524-.375-9.042-1.192-13.828-6.274-19.207-6.178-6.539-16.174-8.244-25.913-8.244-17.745 0-31.085 7.752-40.698 23.535-13.941 22.264-47.729 95.518-46.967 131 .495 22.917 15.87 39.433 43.387 40.084 21.501.516 38.364-5.235 49.094-16.065 9.627 10.462 24.315 16.596 41.89 16.596 19.57 0 39.26-5.878 50.893-18.72 9.797 12.036 25.212 19.041 45.04 18.944 25.92-.127 48.686-12.42 63.556-31.256 8.16 22.21 28.845 31.032 51.445 31.032 49.524 0 71.271-34.059 89.402-87.9 4.083-12.126 9.534-32.378 10.437-49.389 1.492-28.318-10.487-58.27-56.308-58.27zM92.74 290.72c25.624-4.45 32.065 4.812 31.26 13.392-2.418 25.68-25.978 31.425-46.436 30.944-14.837-.361-28.177-7.152-28.55-24.377-.65-30.135 30.085-99.852 44.553-122.961 6.684-10.971 14.826-16.397 27.81-16.397 12.304 0 15.353 6.318 15.172 13.886-.484 20.19-33.105 81.548-43.809 105.513zm83.442-23.669c-1.695 4.588-4.902 14.197-7.5 24.385 8.41-2.103 14.718-3.562 25.523-3.302 12.31.303 20.179 5.404 20.179 15.584 0 24.68-27.278 31.927-46.2 31.927-20.776 0-39.026-11.83-39.026-34.55 0-26.634 14.439-67.022 27.99-93.928 16.639-33.04 33.64-37.432 62.926-37.432 12.867 0 27.697 5.505 27.697 17.658 0 16.841-14.27 23.264-28.416 24.077-6.04.347-15.339.679-20.902.285 0 0-4.707 7.171-9.71 19.952 26.197-3.688 37.306 2.258 32.884 17.412-5.986 20.472-23.723 21.82-45.445 17.932zm128.85-63.695c-7.084 0-11.718 4.487-15.165 9.331-7.593 10.664-24.045 53.396-26.606 70.95-1.756 12.022 3.436 14.47 9.11 14.47 9.104 0 19.31-9.63 22.792-25.518 0 0-17.329-.422-12.553-15.79 4.642-14.912 13.449-18.142 28.047-18.741 28.76-1.174 25.92 20.06 23.619 31.385-7.475 36.775-33.647 66.307-70.668 66.307-25.345 0-41.078-14.02-41.078-39.864 0-18.416 9.136-47.327 16.38-64.244 15.414-36.01 31.58-61.21 72.766-61.21 24.71 0 44.199 8.88 41.341 32.028-2.095 16.99-10.599 26.967-26.046 28.174-4.32.336-21.996-.112-16.133-16.834 2.04-5.849 2.886-10.444-5.806-10.444zm155.544 30.392c-4.353 21.682-14.147 47.327-24.778 66.44-17.344 31.187-38.412 35.555-56.8 35.334-18.398-.22-39.123-7.012-39.282-35.384-.112-20.37 8.674-49.122 16.134-67.969 13.001-34.167 26.288-62.026 68.29-61.524 48.982.582 40.247 44.141 36.436 63.103zm-41.551-29.68c-4.205-.058-7.875.766-11.173 5.852-7.41 9.598-29.07 68.789-28.687 80.594.137 4.241 2.481 7.951 7.705 7.951 5.993.008 9.324-4.136 12.268-9.135 6.817-11.535 25.985-63.855 26.512-76.935.156-3.812-.48-8.251-6.625-8.327z' /%3E%3C/svg%3E"
                                 style={{height: 70, width: 70, marginTop: 20, marginLeft: 20, marginBottom: 20}}/>
                        </div>
                        <div className="col-lg-6"></div>
                        <div className="col-lg-2" style={{marginTop: 40}}>
                        <span className="login">
                            <button className="logInLogOut" type="submit">Đăng nhập</button>
                        </span>
                            <span style={{color: "orange", textAlign: "center"}}></span>
                            <button className="logInLogOut" type="submit">
                                / Đăng xuất
                            </button>
                        </div>
                    </div>
                    <Router>
                        <div className="row">
                            <nav style={{backgroundColor: "gold"}} className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to={"/details"}
                                          style={{fontFamily: 'VNI-Bandit', color: "red"}}>LEGO
                                        STORE</Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item ms-1">
                                                <Link style={{color: "black"}} className="nav-link active"
                                                      aria-current="page"
                                                      to="/cart">
                                                    <i className="fa fa-cart-shopping"></i></Link>
                                            </li>
                                        </ul>
                                        <form className="d-flex">
                                            <input className="form-control me-2" type="search"
                                                   placeholder="Nhập tên sản phẩm..." aria-label="Search"/>
                                            <button className="btn btn-outline-dark" type="submit">Tìm</button>
                                        </form>
                                    </div>
                                </div>
                            </nav>

                            <Switch>
                                <Route path='/details' component={Details}/>
                            </Switch>

                        </div>
                    </Router>

                </header>

                <footer className="text-center text-lg-start bg-white text-muted" style={{marginBottom: 20}}>

                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span style={{color: "black"}}>Kết nối với chúng tôi trên các mạng xã hội:</span>
                        </div>

                        <div>
                        <span className="me-4 link-secondary">
                            <i className="fab fa-facebook-f"></i>
                        </span>
                            <span className="me-4 link-secondary">
                            <i className="fab fa-twitter"></i>
                        </span>
                            <span className="me-4 link-secondary">
                            <i className="fab fa-google"></i>
                        </span>
                            <span className="me-4 link-secondary">
                            <i className="fab fa-instagram"></i>
                        </span>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
                                    <h6 align="left" className="text-uppercase fw-bold mb-4">
                                        Về chúng tôi
                                    </h6>
                                    <p align="left">
                                        <p className="text-reset">- Giới thiệu về Tập đoàn LEGO</p>
                                    </p>
                                    <p align="left">
                                        <p className="text-reset">- Chứng nhận sản phẩm LEGO</p>
                                    </p>
                                    <p align="left">
                                        <p className="text-reset">- Tin tức LEGO®</p>
                                    </p>
                                    <p align="left">
                                        <p className="text-reset">- Sự bền vững</p>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
                                    <h6 align="left" className="text-uppercase fw-bold mb-4">
                                        ĐIỀU KHOẢN & CHÍNH SÁCH
                                    </h6>
                                    <p align="left">
                                        <p className="text-reset">- Chính sách giao hàng</p>
                                    </p>
                                    <p align="left">
                                        <p className="text-reset">- Chính sách tích lũy điểm</p>
                                    </p>
                                    <p align="left">
                                        <p className="text-reset">- Điều khoản điều kiện</p>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
                                    <h6 align="left" className="text-uppercase fw-bold mb-4">
                                        HỖ TRỢ KHÁCH HÀNG
                                    </h6>
                                    <p align="left">
                                        <p className="text-reset">- Chính sách bảo mật</p>
                                    </p>
                                    <p align="left">
                                        <p className="text-reset">- Chính sách bảo hành</p>
                                    </p>
                                    <p align="left">
                                        <p className="text-reset">- Chính sách thanh toán</p>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
                                    <h6 align="left" className="text-uppercase fw-bold mb-4 ">Thông Tin Liên Hệ</h6>
                                    <p align="left"><i className="fas fa-home me-3 text-secondary"></i>280 Trần Hưng Đạo</p>
                                    <p align="left"><i className="fas fa-envelope me-3 text-secondary"></i>hotro@lego.com.vn</p>
                                    <p align="left"><i className="fas fa-phone me-3 text-secondary"></i>1900 1208</p>
                                    <p align="left"><i className="fas fa-print me-3 text-secondary"></i>0932.32.50.56</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        );
    }
}

export default App;