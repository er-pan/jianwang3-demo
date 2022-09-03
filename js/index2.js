$(function () {
  let title = $('.title')
  title.eq(0).css('width', '93')
  title.eq(1).css('width', '93')
  title.eq(3).css('width', '93')
  title.eq(7).css('width', '93')

  let group = $('.group')
  // group.hide()
  let group2_top = $('.group2 .top')
  let group2_let = $('.group2 .let')
  let group3_top = $('.group3 .top')
  let group3_cent = $('.group3 .cent')
  let group4_top = $('.group4 .top')
  let group4_cent = $('.group4 .cent')
  let end = $('.end')

  let top = 0
  $(window).scroll(function () {
    top = $(window).scrollTop()
    console.log(top)
    if(top >= 404) {
      group.addClass('animate__slideInUp')
      // group.show(500)
    }else{
      // group.removeClass('animate__fadeOutDown')
      group.removeClass('animate__slideInUp')
      // group.hide(500)
    }

    if(top >= 1343) {
      group2_top.addClass('animate__slideInUp')
    }else {
      group2_top.removeClass('animate__slideInUp')
    }

    if(top >= 1540) {
      group2_let.addClass('animate__slideInLeft')
    }else {
      group2_let.removeClass('animate__slideInLeft')
    }

    if(top >= 2244) {
      group3_top.addClass('animate__slideInUp')
    }else {
      group3_top.removeClass('animate__slideInUp')
    }
    if(top >= 2450) {
      group3_cent.addClass('animate__slideInUp')
    }else {
      group3_cent.removeClass('animate__slideInUp')
    }

    if(top >= 2900) {
      group4_top.addClass('animate__slideInUp')
    }else {
      group4_top.removeClass('animate__slideInUp')
    }
    if(top >= 3100) {
      group4_cent.addClass('animate__slideInUp')
    }else {
      group4_cent.removeClass('animate__slideInUp')
    }

    if(top >= 3400) {
      end.addClass('animate__slideInUp')
    }else {
      end.removeClass('animate__slideInUp')
    }


  })

  //视频
  let btn = $('.btn')
  let show = $('.show')
  let video = $('.video')
  let close = $('.close')
  btn.click(() => {
    show.show()
  })
  close.click(() => {
    video.trigger('pause')
    show.hide()
  })




})