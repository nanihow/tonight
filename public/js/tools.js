/**
 * Created by rentao on 2017/9/22.
 */
define(["jquery"], function ($) {
    return {
        qs: function (key) {
            var looking = location.search.substr(1);
            var result = null;
            if (looking) {
                var r = looking.split("&");
                $.each(r, function (index, item) {
                    var rr = item.split("=");
                    if (rr[0] == key){
                        result = rr[1];
                        return false;
                    }
                });
            }
            return result;
        },
        sm: function (path) {
            $(".aside .navs a[href='"+path+"']").addClass("active").closest("ul").show();
        }
    }
});