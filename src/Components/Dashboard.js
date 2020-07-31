import React, { Component } from 'react';
import { toast } from 'react-toastify';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            address: "",
            university: "",
            select: "",
            gender: "",
            show: false,
        }
    }

    popupform = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    signup = () => {
        this.setState({
            show: true
        })
        let signupdata = {
            "firstname": this.state.firstname,
            "address": this.state.address,
            "university": this.state.university,
            "select": this.state.select,
            "gender": this.state.gender
        }
        console.log("signupdata", signupdata)
        if (!signupdata === "") {
            toast.success("Add Successfully")
        }
        else {
            toast.error("Error")
        }

    }
    genderfunction = (e) => {
        this.setState({
            gender: e.target.value
        });
        console.log("gender: ", e.target.value);
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 pt-4">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                Add Student
                             </button>
                        </div>
                        <div className="col-md-8">
                            {this.state.show &&
                                <table className="table">
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Address</th>
                                        <th>University</th>
                                        <th>Year of passout</th>
                                        <th>Gender</th>
                                    </tr>
                                    <tr>
                                        <td>{this.state.firstname}</td>
                                        <td>{this.state.address}</td>
                                        <td>{this.state.university}</td>
                                        <td>{this.state.select}</td>
                                        <td>{this.state.gender}</td>
                                    </tr>
                                </table>
                            }
                            {/* <button type="button" classNameName="btn btn-primary mt-5 ml-4" >Add Student</button> */}
                            {/* <!-- Button trigger modal --> */}


                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle">Add Student Details</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form className="from-group">
                                                <label>Full Name</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">
                                                            <span className="fas fa-user-edit"></span>
                                                        </div>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="full name" name="firstname" onChange={this.popupform} /><br></br>
                                                </div><br></br>
                                                <label>Address</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">
                                                            <span className="fas fa-map-marker-alt"></span>
                                                        </div>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="address" name="address" onChange={this.popupform} /><br></br>
                                                </div><br></br>
                                                <label>University</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">
                                                            <span className="fas fa-university"></span>
                                                        </div>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="university" name="university" onChange={this.popupform} /><br></br>
                                                </div><br></br>

                                                <label>Gender</label>
                                                <ul>
                                                    <input
                                                        type="radio"
                                                        value="male"
                                                        checked={this.state.gender === "male"}
                                                        onChange={this.genderfunction}
                                                    />
                                                    &nbsp; Male
                                                    <br></br>
                                                    <input
                                                        type="radio"
                                                        value="female"
                                                        checked={this.state.gender === "female"}
                                                        onChange={this.genderfunction}
                                                    />
                                                    &nbsp; Female
                                                        <br></br>

                                                </ul>
                                                <div class="form-group">
                                                    <label for="example1">Year of Passout</label>
                                                    <select class="form-control" id="example1" name="select" onChange={this.popupform}>
                                                        <option>2016</option>
                                                        <option>2017</option>
                                                        <option>2018</option>
                                                        <option>2019</option>
                                                        <option>2020</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={this.signup}>Add Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

