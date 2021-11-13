$(".info-patient").click(function () {
    $(this).find($(".fas")).toggleClass('fa-caret-down').toggleClass('fa-caret-up');
    $(".info-patient-content").slideToggle("normal", function () {
      if ($(".info-patient-content").is(":hidden")) {
        $(".info-patient-title").css("border-radius", "10px");
      } else {
        $(".info-patient-title").css({
          "border-radius": "0px",
          "border-top-left-radius": "10px",
          "border-top-right-radius": "10px",
        });
    }
    });
  });
  
$(".menu-show-more").click(function () {
    $(this).find($(".fas")).toggleClass('fa-plus').toggleClass('fa-minus');
    $(this).siblings('.menu-content-search').slideToggle("normal");
});
$(".menu-box-show-more").click(function () {
    $(this).find($(".fas")).toggleClass('fa-caret-down').toggleClass('fa-caret-up');
    $(this).siblings('.body-more').slideToggle("normal", function () {
        if ($(".body-more").is(":hidden")) {
            $(".body-more").hide()
        }else{
            $(".body-more").show()
        }
    });
});
$(".btn-search-main").click(function () {
    $(this).find($(".fas")).toggleClass('fa-spinner fa-spin')
    setTimeout(function() { 
        $(".search-main").fadeToggle()
        $('.info-patient').show()
    }, 3000);
   
});

$("input[name='stFromDate'], input[name='stToDate']").datepicker({
    yearRange: "1990:2040",
    changeMonth: true,
    changeYear: true,
    duration: 300,
    dateFormat: "yy年mm月dd日",
    monthNames: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    showButtonPanel: true,
    beforeShow: function () {
      setTimeout(function () {
        $(".ui-datepicker").css("z-index", 50);
      }, 0);
    },
  });
  $.datepicker._gotoToday = function (id) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    var date = new Date();
    this._setDate(inst, date);
    this._hideDatepicker();
  };

  $(".box:eq(1)").css("display", "flex");
  $(".item").click(function () {
    $(".item").removeClass("active");
    $(this).addClass("active");
    var n = $(".item").index(this);
    $(".box").hide();
    $(".box:eq(" + n + ")")
      .fadeIn(300)
      .css("display", "flex");
  });
  $('.menu-child').click(function () {
      $('.menu-search').animate({'width': 'toggle'});
    })