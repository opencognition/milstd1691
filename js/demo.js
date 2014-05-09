//$('#ribbon')
//    .append(
//        '<div class="demo"><span id="demo-setting"><i class="fa fa-cog txt-color-blueDark"></i></span> <form><legend class="no-padding margin-bottom-10">Layout Options</legend><section><label><input name="subscription" id="max-fixed-nav" type="checkbox" class="checkbox style-0"><span>Fixed header</span></label><label><input type="checkbox" name="terms" id="max-fixed-ribbon" class="checkbox style-0"><span>Fixed Ribbon</span></label><label><input type="checkbox" name="terms" id="max-fixed-navigation" class="checkbox style-0"><span>Fixed Navigation</span></label><label><input type="checkbox" name="terms" id="max-fixed-container" class="checkbox style-0"><span>Inside <b>.container</b> <div class="font-xs text-right">(non-responsive)</div></span></label><label style="display:none;"><input type="checkbox" name="terms" id="max-rtl" class="checkbox style-0"><span>Right to left <b>(rtl)</b></span></label> <span id="max-bgimages"></span></section><section><h6 class="margin-top-10 semi-bold margin-bottom-5">Clear Localstorage</h6><a href="javascript:void(0);" class="btn btn-xs btn-block btn-primary" id="reset-max-widget"><i class="fa fa-refresh"></i> Widget Reset</a></section> <h6 class="margin-top-10 semi-bold margin-bottom-5">MaxAdmin  Skins</h6><section id="max-styles"><a href="javascript:void(0);" id="max-style-0" data-skinlogo="img/logo.png" class="btn btn-block btn-xs txt-color-white margin-right-5" style="background-color:#4E463F;"><i class="fa fa-check fa-fw" id="skin-checked"></i>Smart Default</a><a href="javascript:void(0);" id="max-style-1" data-skinlogo="img/logo-white.png" class="btn btn-block btn-xs txt-color-white" style="background:#3A4558;">Dark Elegance</a><a href="javascript:void(0);" id="max-style-2" data-skinlogo="img/logo-blue.png" class="btn btn-xs btn-block txt-color-darken margin-top-5" style="background:#fff;">Ultra Light</a></section></form> </div>'
//)

// hide bg options
var smartbgimage =
    "<h6 class='margin-top-10 semi-bold'>Background</h6><img src='img/pattern/graphy-xs.png' data-htmlbg-url='img/pattern/graphy.png' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/tileable_wood_texture-xs.png' width='22' height='22' data-htmlbg-url='img/pattern/tileable_wood_texture.png' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/sneaker_mesh_fabric-xs.png' width='22' height='22' data-htmlbg-url='img/pattern/sneaker_mesh_fabric.png' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/nistri-xs.png' data-htmlbg-url='img/pattern/nistri.png' width='22' height='22' class='margin-right-5 bordered cursor-pointer'><img src='img/pattern/paper-xs.png' data-htmlbg-url='img/pattern/paper.png' width='22' height='22' class='bordered cursor-pointer'>";
$("#max-bgimages")
    .fadeOut();

$('#demo-setting')
    .click(function () {
        //console.log('setting');
        $('#ribbon .demo')
            .toggleClass('activate');
    })

/*
 * FIXED HEADER
 */
$('input[type="checkbox"]#max-fixed-nav')
    .click(function () {
        if ($(this)
            .is(':checked')) {
            //checked
            $.root_.addClass("fixed-header");
        } else {
            //unchecked
            $('input[type="checkbox"]#max-fixed-ribbon')
                .prop('checked', false);
            $('input[type="checkbox"]#max-fixed-navigation')
                .prop('checked', false);

            $.root_.removeClass("fixed-header");
            $.root_.removeClass("fixed-navigation");
            $.root_.removeClass("fixed-ribbon");

        }
    });

/*
 * FIXED RIBBON
 */
$('input[type="checkbox"]#max-fixed-ribbon')
    .click(function () {
        if ($(this)
            .is(':checked')) {
            //checked
            $('input[type="checkbox"]#max-fixed-nav')
                .prop('checked', true);

            $.root_.addClass("fixed-header");
            $.root_.addClass("fixed-ribbon");

            $('input[type="checkbox"]#max-fixed-container')
                .prop('checked', false);
            $.root_.removeClass("container");

        } else {
            //unchecked
            $('input[type="checkbox"]#max-fixed-navigation')
                .prop('checked', false);
            $.root_.removeClass("fixed-ribbon");
            $.root_.removeClass("fixed-navigation");
        }
    });


/*
 * FIXED NAV
 */
$('input[type="checkbox"]#max-fixed-navigation')
    .click(function () {
        if ($(this)
            .is(':checked')) {

            //checked
            $('input[type="checkbox"]#max-fixed-nav')
                .prop('checked', true);
            $('input[type="checkbox"]#max-fixed-ribbon')
                .prop('checked', true);

            //apply
            $.root_.addClass("fixed-header");
            $.root_.addClass("fixed-ribbon");
            $.root_.addClass("fixed-navigation");

            $('input[type="checkbox"]#max-fixed-container')
                .prop('checked', false);
            $.root_.removeClass("container");

        } else {
            //unchecked
            $.root_.removeClass("fixed-navigation");
        }
    });

/*
 * RTL SUPPORT
 */
$('input[type="checkbox"]#max-rtl')
    .click(function () {
        if ($(this)
            .is(':checked')) {

            //checked
            $.root_.addClass("max-rtl");

        } else {
            //unchecked
            $.root_.removeClass("max-rtl");
        }
    });


/*
 * INSIDE CONTAINER
 */
$('input[type="checkbox"]#max-fixed-container')
    .click(function () {
        if ($(this)
            .is(':checked')) {
            //checked
            $.root_.addClass("container");

            $('input[type="checkbox"]#max-fixed-ribbon')
                .prop('checked', false);
            $.root_.removeClass("fixed-ribbon");

            $('input[type="checkbox"]#max-fixed-navigation')
                .prop('checked', false);
            $.root_.removeClass("fixed-navigation");

            if (smartbgimage) {
                $("#max-bgimages")
                    .append(smartbgimage)
                    .fadeIn(1000);
                $("#max-bgimages img")
                    .bind("click", function () {
                        $this = $(this);
                        $html = $('html')
                        bgurl = ($this.data("htmlbg-url"));
                        $html.css("background-image", "url(" +
                            bgurl + ")");
                    })

                smartbgimage = null;
            } else {
                $("#max-bgimages")
                    .fadeIn(1000);
            }


        } else {
            //unchecked
            $.root_.removeClass("container");
            $("#max-bgimages")
                .fadeOut();
            // console.log("container off");
        }
    });

/*
 * REFRESH WIDGET
 */
$("#reset-max-widget")
    .bind("click", function () {
        $('#refresh')
            .click();
        return false;
    });

/*
 * STYLES
 */
$("#max-styles > a")
    .bind("click", function () {
        $this = $(this);
        $logo = $("#logo img");
        $.root_.removeClassPrefix('max-style')
            .addClass($this.attr("id"));
        $logo.attr('src', $this.data("skinlogo"));
        $("#max-styles > a #skin-checked")
            .remove();
        $this.prepend(
            "<i class='fa fa-check fa-fw' id='skin-checked'></i>"
        );
    });