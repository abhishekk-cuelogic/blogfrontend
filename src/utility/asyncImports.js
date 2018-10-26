import asyncComponent from './asyncComponent';

class asyncImports {

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
        return import('../container/profilePage/profilePage');
    });

    asyncWriteBlog = asyncComponent(() => {
        return import('../component/writeBlog/writeBlog');
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
        return import('../component/dashboard/dashboard');
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
        return import('../component/adminPanel/adminPanel');
    });

}

export default new asyncImports();