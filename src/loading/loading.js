function showLoading() {
    $(".mask #loading-box .iLoading").css("width", "0%");
    SUCCESS = 0;
    $("#loading-box").delay(100).fadeIn();
    $(".mask").delay(100).fadeIn();
}

var SUCCESS = 0; //每个AJAX加载完成计数
function loading(num) {
    SUCCESS++;
    $(".mask #loading-box .iLoading").animate({width: (SUCCESS / num) * 100 + "%"}, "linear");
    if (SUCCESS == num) {
        $("#loading-box").delay(400).fadeOut();
        $(".mask").delay(400).fadeOut();
    }
}
