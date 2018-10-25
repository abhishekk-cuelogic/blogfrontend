import axios from '../axiosInstance';

class PostControl {

    increseView = (url) => {
        return new Promise((resolve, reject) => {
            axios.put(url)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    increseLike = (url, userName, token) => {

        return new Promise((resolve, reject) => {
            axios.put(url, {
                userName: userName,
                token: token
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        })

    }

    getLikes = (url) => {
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

    addComment = (url, userName, commentData, token) => {
        return new Promise((resolve, reject) => {
            axios.put(url, {
                userName: userName,
                commentData: commentData,
                token: token
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    deleteComment = (url, id, token) => {
        return new Promise((resolve, reject) => {
            axios.put(url, {
                commentId: id,
                token: token
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    addRating = (url, userName, nextValue, token) => {
        return new Promise((resolve, reject) => {
            axios.put(url, {
                userName: userName,
                ratingData: nextValue,
                token: token
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    getRating = (url) => {
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
}

export default new PostControl();