import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            number: "",
            show: false,
            fields: {},
            errors: {},
        }
    }
    changesignup = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    signup = () => {
        this.setState({
            show: true
        })
        if (this.handleValidation()) {
            let signupdata = {
                "firstname": this.state.firstname,
                "lastname": this.state.lastname,
                "email": this.state.email,
                "number": this.state.number
            }
            console.log("signupdata", signupdata)
            // axios.get("Api......",signupdata)
            // .then(res =>{
            //     console.log(res)
            // })
        } else {
            toast.error("All Fields are mandatory")
        }
    }

    // For validation

    handleValidation() {
        let errors = {};
        let formIsValid = true;

        if (this.state.firstname === '') {
            formIsValid = false;
            errors["firstname"] = "*Please Enter firstname";
        }
        if (this.state.lastname === '') {
            formIsValid = false;
            errors["lastname"] = "*Please Enter lastname";
        }
        if (this.state.email === '') {
            formIsValid = false;
            errors["email"] = "*Please Enter email";
        }
        if (this.state.number === '') {
            formIsValid = false;
            errors["number"] = "*Please Enter Password";
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    render() {
        return (
            <React.Fragment>
                <div className="container pt-2">
                    <div className="row">
                        <div className="col-md-6 pb-3">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-group">
                                        <h3 className="text-muted text-center">Sign-Up Form</h3>
                                        <label>First Name</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <span className="fas fa-user-edit"></span>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="first name" name="firstname" onChange={this.changesignup} /><br></br>
                                        </div>
                                        <span style={{ color: "red" }}>{this.state.errors["firstname"]}</span>
                                        <br></br>
                                        <label>Last Name</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <span className="fas fa-user-edit"></span>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="last name" name="lastname" onChange={this.changesignup} /><br></br>
                                        </div>
                                        <span style={{ color: "red" }}>{this.state.errors["lastname"]}</span>
                                        <br></br>

                                        <label>Email</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i class=""></i>
                                                    <span className="fas fa-envelope-square"></span>
                                                </div>
                                            </div>
                                            <input type="email" className="form-control" placeholder="email" name="email" onChange={this.changesignup} /><br></br>
                                        </div>
                                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                        <br></br>

                                        <label>Mobile Number</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <span className="fas fa-mobile-alt"></span>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="number" name="number" onChange={this.changesignup} /><br></br>
                                        </div>
                                        <span style={{ color: "red" }}>{this.state.errors["number"]}</span>
                                        <br></br>
                                        <button className="btn btn-success" type="button" onClick={this.signup}>Sign_up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h5 className="text-muted">Sign-up Info</h5>
                            {this.state.show &&
                                <table className="table">
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                        <th>Number</th>
                                    </tr>
                                    <tr>
                                        <td>{this.state.firstname}</td>
                                        <td>{this.state.lastname}</td>
                                        <td>{this.state.email}</td>
                                        <td>{this.state.number}</td>
                                    </tr>
                                </table>
                            }
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




