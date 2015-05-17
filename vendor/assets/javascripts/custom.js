/*------------------------------------------------------------------
Project:    Paperclip
Author:     Yevgeny S.
URL:        http://simpleqode.com/
      https://twitter.com/YevSim
Version:    1.2.0
Created:        11/03/2014
Last change:    18/02/2015
-------------------------------------------------------------------*/
$(function() {
  /* ===== Navbar Search ===== */

  $('#navbar-search > a').on('click', function() {
    $('#navbar-search > a > i').toggleClass('fa-search fa-times');
    $("#navbar-search-box").toggleClass('show hidden animated fadeInUp');
    return false;
  });

  /* ===== Navbar Submenu ===== */

  /**
  * Modify Refinery Menu
  */
  $('#menu ul:first').addClass('nav navbar-nav navbar-right');
  $('#menu ul:first > li').has('ul').each(function(i, li) {
    var li = $(li);
    li.addClass('dropdown');
    var a = li.find('a:first');
    li.find('a:first')
    a.addClass('dropdown-toggle')
      .attr('data-toggle', 'dropdown')
      .append('<b class="caret"></b>');
    var ul = li.find('ul:first');
    ul.addClass('dropdown-menu')
      .prepend("<li><a href='" + a.attr('href') + "'>" + a.text() + "</a></li>");
  });
  $('#menu .dropdown-menu ul').each(function(i, ul) {
    var ul = $(ul);
    ul.addClass('dropdown-menu');
    ul.closest('li').addClass('dropdown-submenu');
  });
  $("#menu").show();

  /* ===== Time Ago ===== */
  $('.moment-ago').each(function(i, e) {
    var e = $(e);
    var then = moment(e.text());
    var now = moment();
    var ago = then.from(now);
    e.text(ago);
  });

  /**
  * Dropdown submenu positioning (left or right)
  */

  $('ul.dropdown-menu a[data-toggle=dropdown]').hover(function() {
    var menu = $(this).parent().find("ul");
    var menupos = menu.offset();
    if ((menupos.left + menu.width()) + 30 > $(window).width()) {
      $(this).parent().addClass('pull-left');
    }
    return false;
  });

  /* ===== Thumbs rating ===== */

  $('.rating .voteup').on('click', function () {
    var up = $(this).closest('div').find('.up');
    up.text(parseInt(up.text(),10) + 1);
    return false;
  });
  $('.rating .votedown').on('click', function () {
    var down = $(this).closest('div').find('.down');
    down.text(parseInt(down.text(),10) + 1);
    return false;
  });

  /* ===== Responsive Showcase ===== */

  $('.responsive-showcase ul > li > i').on('click', function() {
    var device = $(this).data('device');
    $('.responsive-showcase ul > li > i').addClass("inactive");
    $(this).removeClass("inactive");
    $('.responsive-showcase img').removeClass("show");
    $('.responsive-showcase img').addClass("hidden");
    $('.responsive-showcase img' + device).toggleClass("hidden show");
    $('.responsive-showcase img' + device).addClass("animated fadeIn");
    return false;
  });

  /* ===== Services ===== */

  $('.service-item').hover (function() {
    $(this).children("i").toggleClass("fa-rotate-90");
    return false;
  });
});
