import asyncComponent from './asyncComponent';

class asyncImports {

    asyncMainPage = asyncComponent(() => {
        return import('../container/mainPage/mainPage');
    })

    asyncSignUp = asyncComponent(() => {
        return import('../component/signup/signup');
    });

    asyncSignIn = asyncComponent(() => {
        return import('../component/signin/signin');
    });

    asyncBlogPage = asyncComponent(() => {
        return import('../container/blogPage/blogPage');
    });

    asyncProfilePage = asyncComponent(() => {
        return import('../container/profilePage/profilePage');
    });

    asyncProfilePage = asyncComponent(() => {
        if (localStorage.getItem('token')) {
            return import('../container/profilePage/profilePage');
        } else {
            return import('../component/authComponent/authentication');
        }
    });

    asyncWriteBlog = asyncComponent(() => {
        if (localStorage.getItem('token')) {
            return import('../component/writeBlog/writeBlog');
        } else {
            return import('../component/authComponent/authentication');
        }
    });

    asyncEditBlog = asyncComponent(() => {
        return import('../component/editBlog/editBlog');
    });

    asyncForgotPassword = asyncComponent(() => {
        return import('../component/forgotPassword/forgotPassword');
    });

    asyncChangePassword = asyncComponent(() => {
        return import('../component/forgotPassword/passwordSet');
    });

    asyncDashboard = asyncComponent(() => {
        if (localStorage.getItem('token')) {
            return import('../component/dashboard/dashboard');
        } else {
            return import('../component/authComponent/authentication');
        }
    });

    asyncSearch = asyncComponent(() => {
        return import('../component/search/search');
    });

    asyncMyBlog = asyncComponent(() => {
        return import('../component/myblog/myblog');
    });

    asyncAuthorProfile = asyncComponent(() => {
        return import('../component/authorprofile/authorprofile');
    });

    asyncAdminPanel = asyncComponent(() => {
        if (localStorage.getItem('userName') === 'admin@gmail.com') {
            return import('../component/adminPanel/adminPanel')
        } else {
            return import('../component/authComponent/authentication');
        }
    });

    asyncModal = asyncComponent(() => {
        return import('../component/modal/modal');
    });
}

export default new asyncImports();