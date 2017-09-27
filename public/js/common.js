define(["jquery", "template", "npro", "cookie"], function ($, template, NProgress) {
    NProgress.start();
    NProgress.done();

    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    $("#quit").click(function () {
        $.ajax({
            type: "post",
            url: "/api/logout",
            success: function (data) {
                if (data.code == 200) {
                    location.href = "/main/login";
                }
            }
        })
    });
    var flag = $.cookie("log200") && JSON.parse($.cookie("log200"));
    if (!flag && location.pathname != "/main/login") {
        location.href = "/main/login";
    }
    var a = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
    $(".aside .profile").html(template.render(a, flag));
});