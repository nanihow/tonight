/**
 * Created by rentao on 2017/9/25.
 */
define(["jquery", "template", "tools", "uploadify", "crop", "form"], function ($, template, tools) {
    tools.sm("/course/course_add");
    var csId = tools.qs("cs_id");
    $.ajax({
        type: "get",
        url: "/api/course/picture",
        dataType: "json",
        data: {cs_id: csId},
        success: function (data) {
            $("#pI").html(template("pD", data.result));
            var img = $(".preview img").eq(0);
            var nc = null;
            $("#uP").uploadify({
                width: 80,
                height: "auto",
                buttonText: "chose",
                buttonClass: "btn btn-warning btn-sm",
                itemTemplate: "<span></span>",
                swf: "/public/assets/jquery-uploadify/uploadify.swf",
                uploader: "/api//uploader/cover",
                fileObjName: "cs_cover_original",
                formData: {cs_id: csId},
                onUploadSuccess: function (a, b, c) {
                    $(".preview img").attr("src", JSON.parse(b.trim()).result.path);
                    cut();
                    $("#bCS").val("save").attr("data-flag", true);
                }
            });
            $("#bCS").click(function () {
                var flag = $(this).attr("data-flag");
                if (flag) {
                    $("#cropF").ajaxSubmit({
                        type: "post",
                        url: "/api/course/update/picture",
                        dataType: "json",
                        data: {cs_id: csId},
                        success: function (data) {
                            location.href = "/course/course_add_step3?cs_id=" + data.result.cs_id;
                        }
                    })
                } else {
                    $(this).val("save").attr("data-flag", true);
                    cut();
                }
            });
            function cut() {
                img.Jcrop({
                    aspectRatio: 2
                }, function () {
                    nc && nc.destory();
                    nc = this;
                    var width = this.ui.stage.width;
                    var height = this.ui.stage.height;
                    var x = 0;
                    var y = (height - width / 2) / 2;
                    var w = width;
                    var h = width / 2;
                    var iA = $("#cropF").find("input");
                    iA.eq(0).val(x);
                    iA.eq(1).val(y);
                    iA.eq(2).val(w);
                    iA.eq(3).val(h);
                    this.newSelection();
                    this.setSelect([x, y, w, h]);
                    this.initComponent("Thumbnailer", {
                        width: 240,
                        height: 120,
                        mythumb: ".thumb"
                    });
                    img.parent().on("cropstart cropmove cropend", function (a, b, c) {
                        var iA = $("#cropF").find("input");
                        iA.eq(0).val(c.x);
                        iA.eq(1).val(c.y);
                        iA.eq(2).val(c.w);
                        iA.eq(3).val(c.h);
                    })
                });
            }
        }
    });

});