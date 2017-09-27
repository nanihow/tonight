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
        datepicker: "bootstrap-datepicker/js/bootstrap-datepicker",
        language: "bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
        validate: "validate/jquery-validate",
        form: "jquery-form/jquery.form",
        uploadify: "jquery-uploadify/jquery.uploadify",
        region: "jquery-region/jquery.region",
        ck: "ckeditor/ckeditor",
        crop: "jquery-jcrop/js/Jcrop",
        npro:"nprogress/nprogress",
        echarts:"echarts/echarts.min",
        common: "../js/common",
        tools: "../js/tools",
        login: "../js/login",
        tList: "../js/teacherList",
        tUA: "../js/teacherUA",
        sets: "../js/settings",
        index: "../js/index",
        cList: "../js/courseList",
        cAdd: "../js/courseAdd",
        cAS1: "../js/step1",
        cAS2: "../js/step2",
        cAS3: "../js/step3",
        mask:"../js/mask"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        language: {
            deps: ["jquery", "datepicker"]
        },
        validate: {
            deps: ["jquery"]
        },
        uploadify: {
            deps: ["jquery"]
        },
        ck: {
            exports: "CK"
        },
        crop: {
            deps: ["jquery"]
        }
    }
});