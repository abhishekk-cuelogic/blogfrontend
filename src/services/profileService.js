import axios from '../axiosInstance';

class ProfileService {

    getProfile = (url) => {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    updateProfile = (formData) => {
        return new Promise((resolve, reject) => {
            axios.post('/profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    getAllProfile = () => {
        return new Promise((resolve, reject) => {
            axios.get('/profile')
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    addFollower = (url, userName) => {
        return new Promise((resolve, reject) => {
            axios.put(url, {
                userName: userName
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    getFollowing = (url) => {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    getFollowers = (url) => {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                   resolve(response)
                })
                .catch(error => {
                   reject(error)
                })
        })
    }

}

export default new ProfileService();