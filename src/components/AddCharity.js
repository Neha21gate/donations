import React from 'react'
import CharityRegistration from './Register';
import { connect } from 'react-redux'
import { startAddCharity } from '../actions/charityAction';



function AddCharity(props) {
    const handleSubmit = (formData) => {
        const redirect = () => props.history.push('/home' );
        props.dispatch(startAddCharity(formData, redirect))
        
        alert("Thank you for the registartion, please click on OK button");
    }
    
    return (
    <div>
       <CharityRegistration handleSubmit={handleSubmit} />
    </div>
    );
}
export default connect()(AddCharity);