import axios from '../components/config/axios'


export const startSetCharity = () => {
    return (dispatch) => {
        axios.get('/charities').then(function (response) {
            console.log(response.data + "Data of charity")
            dispatch(setCharity(response.data));
        }).catch(function (err) {
            console.log(err)
        })
    }
}

export const setCharity = (charityUser) => {
    return { type: 'SET_CHARITY', payload: charityUser }
}

export const startAddCharity = (formData, redirect) => {
    return (dispatch) => {
        axios.post("/charities", formData).then(function (response) {
            console.log("charityRegister", response.statusText)
            dispatch(addCharity(response.data));
            redirect()
        }).catch(function (err) {
            console.log(err)
        })
    }
}

export const addCharity = (charity) => {
    return {
        type: 'ADD_CHARITY', payload: charity
    }
}