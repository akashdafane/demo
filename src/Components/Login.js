import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import './table.css';
import logo from './images/logo.png'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
        }
    }
    changelogin = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    login = () => {
        var logindata = {
            "username": this.state.username,
            "password": this.state.password
        }
        console.log("logindata", logindata)
        if (this.state.username === "admin" && this.state.password === "admin") {
            {this.props.history.push('/Dashboard')}
            toast.success("Login Successfully")
        } else {
            toast.error("Enter Valid Input's")
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid pt-5 login">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 ">
                            <div className="card ">
                                <div className="card-body">
                                    <div class="text-center">
                                        <img src={logo} className="rounded" alt="logo" />
                                    </div>
                                    <label>Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <span className="fas fa-user"></span>
                                            </div>
                                        </div>
                                        <input type="text" placeholder="Enter Username" className="form-control" id="username" name="username" onChange={this.changelogin} />
                                    </div><br></br>
                                    <label>Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-key"></i>
                                            </div>
                                        </div>
                                        <input type="password" placeholder="Enter Password" className="form-control" name="password" onChange={this.changelogin} /><br></br>
                                    </div><br></br>
                                    {/* <Link to="/dashboard"> */}
                                        <button type="button" className="btn btn-primary" onClick={this.login}>Login</button>
                                    {/* </Link> */}
                                    <Link to="/signup">
                                        <button type="button" className="btn btn-success ml-2">Sign Up</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
            </React.Fragment>
        )
    }
}
