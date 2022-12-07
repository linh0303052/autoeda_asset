$(function () {
    var pressed = false;
    var start = undefined;
    var startX, startWidth;
    var widthDefault = $("#wrapper").width();
    var minWidthResize = $("#resize").width();

    //max width of first thead

    console.log("startWidth", startWidth);

    startWidth = $("#resize").mousedown(function (e) {
        start = $(this);
        pressed = true;
        startX = e.pageX;
        startWidth = $(this).width();
        if (minWidthResize > 100) {
            $(start).addClass("resizing");
        }
    });

    $(document).mousemove(function (e) {
        if (pressed) {
            //100 is min width resize
            if (e.pageX - startX > 0 || startWidth + e.pageX - startX > 100) {
                $("#resize").width(startWidth + (e.pageX - startX));
                $("#wrapper").width(
                    widthDefault + startWidth + (e.pageX - startX)
                );
            }
        }
    });

    $(document).mouseup(function () {
        if (pressed) {
            $(start).removeClass("resizing");
            pressed = false;
        }
    });
});

$(function () {
    var checkList = $('#checklist-container');
    checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList.classList.contains('visible'))
        checkList.classList.remove('visible');
    else
        checkList.classList.add('visible');
    }
});