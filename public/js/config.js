/**
 * Created by rentao on 2017/9/20.
 */
require.config({
    baseUrl: "/public/assets",
    paths: {
        jquery: "jquery/jquery",
        cookie: "jquery-cookie/jquery.cookie",
        template: "artTemplate/template-web",
        bootstrap: "bootstrap/js/bootstrap",
        datepicker:"bootstrap-datepicker/js/bootstrap-datepicker",
        language:"bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
        validate:"validate/jquery-validate",
        form:"jquery-form/jquery.form",
        common: "../js/common",
        tools:"../js/tools",
        login: "../js/login",
        tList: "../js/teacherList",
        tUA:"../js/teacherUA"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        language:{
            deps:["jquery","datepicker"]
        },
        validate:{
            deps:["jquery"]
        }
    }
});