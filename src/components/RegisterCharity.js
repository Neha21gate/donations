import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class RegisterCharity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            message: ''
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
            message: this.state.message
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }
    render() {
        return (
            <div>
                <div className="five-content" style={{ textAlign: "center" }}>
                    <h1 style={{ color: "#327ba8", fontFamily: " 'Anton', sans-serif", marginLeft: "10px", marginTop: "100px", fontSize: "40px" }}>CONTACT US</h1><br /><br />
                    <h4 style={{ fontSize: "30px", color: "#778e96" }}>Contact us today to see how our services can help charities boost their donation revenue</h4>
                    <div className="login-box" style={{ textAlign: "center" }}>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="username" placeholder="Name" id="text" onChange={this.handleChange} />
                            <input type="email" name="email" placeholder="E-mail" id="email" onChange={this.handleChange} />
                            <textarea name="message" rows="10" cols="22" placeholder="Type your message here" id="textarea" onChange={this.handleChange} />
                            <button className="btn2" >SUBMIT</button>
                            {/* <button className="btn2" onClick={() => alert("Hi there")}>SUBMIT</button> */}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(connect()(RegisterCharity));