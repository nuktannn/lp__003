//スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    position = jQuery(id).offset().top; // ここで80pxを追加
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );
  return false;
});

//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 375) {
    document.body.style.width = "375px";
  } else {
    document.body.style.width = "100%";
  }
});

//qa
jQuery(document).ready(function ($) {
  // 最初にすべてのqa-box-aを閉じます
  $(".qa__box-a").hide();

  // qa-box-qがクリックされたときの動作を定義します
  $(".qa__box-q").click(function () {
    $(this).next(".qa__box-a").slideToggle();
    $(this).children(".qa__box-icon").toggleClass("is-open");
});
});