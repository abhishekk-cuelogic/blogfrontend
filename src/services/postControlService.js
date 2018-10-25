import axios from '../axiosInstance';

class PostControl {

    postBlog = (formData) => {
        return new Promise ((resolve, reject) => {
            axios.post('/post', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }})
                .then(response => {
                    resolve(response)
                })
                .catch( error => {
                    reject(error)
                })
        })
    } 

    updateBlog = (url,title,authorName,catagory,content,token) => {
        return new Promise ((resolve, reject) => {
            axios.put(url, {
                title: title,
                authorName: authorName,
                catagory: catagory,
                postContent: content,
                token:token
            })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
        })
    }

    deleteblog = (url,{data}) => {
        return new Promise ((resolve, reject)  => {
            axios.delete(url,{data})
            .then(response => {
                resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        })
    }


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

    getBlog = (url) => {
        return new Promise ((resolve,reject) => {
            axios.get(url)
            .then(response => {
               resolve(response)
            })
            .catch(error => {
              reject(error)
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

    sendFeedBack = (url,userName,feed) => {
        return new Promise((resolve,reject) => {
            axios.post(url, {
                userName: userName,
                feed: feed
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        })
    } 

    sendMessage = (url,userName,msg) => {
        return new Promise ((resolve,reject) => {
            axios.post(url, {
                userName: userName,
                msg: msg
            })
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