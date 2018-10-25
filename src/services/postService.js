import axios from '../axiosInstance';


class postService {

    getRecentPost = () => {
        return new Promise((resolve, reject) => {
            axios.get('/post/recent')
                .then(response => {
                    resolve(response);

                }).catch(error => {
                    console.log(error);
                    reject(error);
                })
        })
    }

    getPopularPost = () => {
        return new Promise((resolve, reject) => {
            axios.get('/post/popular')
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    getYMLPost = () => {
        return new Promise((resolve, reject) => {
            axios.get('/post/yml')
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    getAllPost = () => {
        return new Promise((resolve, reject) => {
            axios.get('/post')
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    getUserAllPost = (url) => {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    getPostByCatagory = (url) => {
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

    getPostByYear = (url) => {
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

export default new postService();