import axios from '../axiosInstance';

class userService {
    userSignUp = (email, password) => {

        return new Promise((resolve, reject) => {
            axios.post('/', {
                username: email,
                password: password
            })
                .then((response) => {
                    axios.post('/profile', {
                        userName: email,
                        fullName: '',
                        contact: '',
                        skills: '',
                        profileImage: ''
                    })
                        .then(res => { })
                        .catch(err => { })
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }

    userSignIn = (email, password) => {

        return new Promise((resolve, reject) => {
            axios.post('/signin', {
                username: email,
                password: password
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    sendMail = (userName) => {

        return new Promise((resolve, reject) => {
            axios.post('/signin/forgotpassword', {
                email: userName
            })
                .then(response => {
                    resolve(response);
                })
        })
    }

    resetPassword = (userName, passWord) => {
        return new Promise((resolve, reject) => {
            axios.post('/signin/resetpassword', {
                userName: userName,
                passWord: passWord
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    deleteUser = (url, { data }) => {

        return new Promise((resolve, reject) => {
            axios.delete(url, { data })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export default new userService();