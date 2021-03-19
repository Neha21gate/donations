import React from 'react';
import './Signupform.css';
import { connect } from 'react-redux'
import { startAddCharity } from '../actions/charityAction'
import { withRouter } from 'react-router-dom'

class Signupform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            organisationName: "",
            username: '',
            mobile: '',
            email: '',
            message: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            message: this.state.message,
            organisationName: this.state.organisationName,
            mobile: this.state.mobile
        }
        console.log(formData)
        const redirect = () => 
        alert ("Submitted")
       
        this.props.dispatch(startAddCharity(formData, redirect))
        // this.props.handleSubmit(formData)
    }

    render() {
        return (
            <div className="wrapper">


                <div className="main2">
                    <h1 className="heading1" style={{
                     fontSize: "30px",  color: "black", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        
                    }}>CONTACT US</h1>

                    <form className="signupform" onSubmit={this.handleSubmit} method="POST">
                        <br /><br /><br />
                        <table className="here1">
                            <tbody>
                                <tr >
                                    <td className="enter1">Organisation Name* </td>
                                    <td >
                                        <input type="text" className="enter3"
                                            required
                                            name="organisationName"
                                            value={this.state.organisationName}
                                            onChange={this.handleChange}
                                        />

                                    </td>
                                    {/* {this.state.errors.organisation} */}

                                </tr>
                                <tr>
                                    <td className="enter1">Contact Name* </td>
                                    <td >
                                        <input className="enter3"
                                            name="username"
                                            type="text"
                                            required
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                        />

                                    </td>
                                    {/* {this.state.errors.name} */}
                                </tr>
                                <tr>
                                    <td className="enter1">Mobile Number* </td>
                                    <td ><input type="tel" className="enter3"
                                        required
                                        name="mobile"
                                        value={this.state.mobile}
                                        onChange={this.handleChange}
                                        maxLength="11" size="11"
                                    />
                                    </td>
                                    {/* {this.state.errors.contact} */}
                                </tr>
                                <tr>
                                    <td className="enter1">Email* </td>
                                    <td >
                                        <input type="email"
                                            className="enter3"
                                            required
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}

                                        />
                                    </td>
                                    {/* {this.state.errors.email} */}
                                </tr>
                                <tr>
                                    <td className="enter1">Message(Optional) </td>
                                    <td >
                                        <input type="textarea"
                                            className="enter3"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.handleChange}

                                        />
                                    </td>
                                </tr>
                            </tbody>


                        </table>

                        <button type="submit" className="herebutton">Submit</button>
                    </form>
                    
                    <br /><br /><br /><br />

                </div>
                <div className="footer" style={{ backgroundColor: "white" }}>

                    <p style={{ color: "black" }}>Copyright © 2021</p>
                    <p style={{ color: "black" }}> DonatePlus - All Rights Reserved.</p>
                </div>





            </div>


        )
    }



}
export default withRouter(connect()(Signupform));