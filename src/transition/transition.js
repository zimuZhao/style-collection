//START DEMO1
$(document).ready(function () {
    $("#demo1-btn").click(function () {
        $("#demo1-btn").toggle(
            function () {
                $(this).prev("div#demo1").addClass("demo1-click");
            });
    });
});
//END DEMO1

//START DEMO2
$(document).ready(function () {
    $(".slide-images").each(function () {
        var slider = $(this);
        var slides = $(".slide-image", slider);
        var sliderPages = $(".slide-pager");

        //Slide Navigation

        var currentSlideNum = 0;
        slides.removeClass("current");
        slides.eq(currentSlideNum).addClass("current");
        sliderPages.each(function () {
            var pages = $("a", this);
            pages.removeClass("current");
            pages.eq(currentSlideNum).addClass("current");
        });

        var goToSlide = function (slideNum) {
            slides.eq(currentSlideNum).removeClass("current");
            slides.eq(slideNum).addClass("current");
            sliderPages.each(function () {
                var pages = $("a", this);
                pages.eq(currentSlideNum).removeClass("current");
                pages.eq(slideNum).addClass("current");
            });
            currentSlideNum = slideNum;
        };

        var nextSlide = function () {
            var nextSlideNum = currentSlideNum + 1;
            if (nextSlideNum >= slides.size())
                nextSlideNum = 0;
            goToSlide(nextSlideNum);

        };

        var prevSlide = function () {
            var prevSlideNum = currentSlideNum - 1;
            if (prevSlideNum < 0)
                prevSlideNum = slides.size() - 1;
            goToSlide(prevSlideNum);

        };

        //transition effects
        var setTransitionEffect = function (transitionEffect) {
            slider.attr("class", "slide-images " + transitionEffect);
        };

        $("#transitionEffect").change(function () {
            setTransitionEffect($(this).val());
        }).change();

        //Navigation binding

        $(".prevSlide").click(prevSlide);
        $(".nextSlide").click(nextSlide);
        $(".slide-pager a").each(function (i) {
            if (i >= slides.size()) return false;
            $(this).click(function () {
                goToSlide(i);
            });
        });

        //Auto next slide

        var lastHumanNav = 0;
        $(".prevSlide, .nextSlide, .slide-pager a").click(function () {
            lastHumanNav = new Date().getTime();
        });
        setInterval(function () {
            var now = new Date().getTime();
            if (now - lastHumanNav > 5000)
                nextSlide();
        }, 5000);
    });
});

//END DEMO2
