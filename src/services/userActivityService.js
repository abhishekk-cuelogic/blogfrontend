import axios from '../axiosInstance';

class userActivity {

    addUserActivity = (userName,activity) => {
        return new Promise ((resolve,reject) => {
            axios.put('/useractivity', {
                userName: userName,
                activity: activity
            })
            .then(response => {
                resolve(response);
             })
            .catch(error => {
                reject(error);
             })
        })
    }

    getUserActivity = (url) => {
        return new Promise ((resolve,reject) => {
            axios.get(url)
            .then(response => {
               resolve(response)
            })
            .catch(error => {
                reject(error);
            })
        })
    }
}

export default new userActivity();