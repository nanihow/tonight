/**
 * Created by rentao on 2017/9/27.
 */
define(["jquery"], function ($) {
    $(document).ajaxStart(function () {
        $(".overlay").show();
    });
    $(document).ajaxStop(function () {
        setTimeout(function () {
            $(".overlay").hide();
        },1000);
    });
});