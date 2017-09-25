/**
 * Created by rentao on 2017/9/22.
 */
define(["jquery", "template", "ck", "uploadify", "datepicker", "language", "region", "validate", "form"], function ($, template) {
    $.ajax({
        type: "get",
        url: "/api/teacher/profile",
        dataType: "json",
        success: function (data) {
            $("#info").html(template("iS", data.result));
            $("#upFile").uploadify({
                width: 120,
                height: 120,
                buttonText: "",
                itemTemplate: "<span></span>",
                swf: "/public/assets/jquery-uploadify/uploadify.swf",
                uploader: "/api/uploader/avatar",
                fileObjName: "tc_avatar",
                onUploadSuccess: function (a, b) {
                    $(".preview img").attr("src", JSON.parse(b).result.path);
                }
            });
            $("#pcd").region({
                url: "/public/assets/jquery-region/region.json"
            });
            CKEDITOR.replace("fwb");
            $("#setDone").validate({
                sendForm: false,
                valid: function () {
                    for (var instance in CKEDITOR.instances) {
                        CKEDITOR.instances[instance].updateElement();
                    }
                    $(this).ajaxSubmit({
                        type: "post",
                        url: "/api/teacher/modify",
                        data: {tc_hometown: $("#p").find("option:selected").text() + "|" + $("#c").find("option:selected").text() + "|" + $("#d").find("option:selected").text()},
                        dataType: "json",
                        success: function (data) {
                            if (data.code == 200) {
                                location.reload();
                            }
                        }
                    })
                }
            });
        }
    })
});