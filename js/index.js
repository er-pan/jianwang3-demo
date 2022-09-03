
$(function () {
  let d1 = $('.d1')
  let d2 = $('.d2')
  let cont = $('#t1-cont')
  let cont2 = $('#t1-cont2')
  d1.click(function () {
    cont.show().next().hide()
  })
  d2.click(function () {
    cont2.show().prev().hide()
  })

  let imgArr = ['../img/bg01-cen.webp', '../img/bg01-cen1.webp']
  let img_one = $('#img01')[0]
  let li_one = document.querySelectorAll('.ul2 li')
  let pic = 0

  function style_one(pic) {
    for (i in li_one) {
      li_one[i].className = ''
    }
    li_one[pic].className = 'active'
    img_one.src = imgArr[pic]
  }

  style_one(pic)
  for (i in li_one) {
    li_one[i].index = i
    li_one[i].onclick = function () {
      pic = this.index
      style_one(pic)
    }
  }
  let timer = setInterval(rgtClick, 2000)
  function rgtClick() {
    pic++
    style_one(pic % li_one.length)
  }

  let img_two = $('#img02')[0]
  let li_two = document.querySelectorAll('.ul3 li')
  let pic2 = 0
  let imgArr2 = ['../img/bg01-rgt1.webp', '../img/bg01-rgt2.webp', '../img/bg01-rgt3.webp', '../img/bg01-rgt4.webp']

  function style_two(pic2) {
    for (i in li_two) {
      li_two[i].className = ''
    }
    li_two[pic2].className = 'active'
    img_two.src = imgArr2[pic2]
  }

  style_two(pic2)
  for (i in li_two) {
    li_two[i].index = i
    li_two[i].onclick = function () {
      pic2 = this.index
      style_two(pic2)
    }
  }
  let timer2 = setInterval(rgt2Click, 2000)
  function rgt2Click() {
    pic2++
    style_two(pic2 % li_two.length)
  }


  //弹窗视频
  let Btn = $('.btn')
  let mark = $('.show')
  let Del = $('.del_one')
  let video = $('.video')
  for (let i = 0; i < mark.length; i++) {
    $(Btn[i]).click(() => {
      $(mark[i]).show()
    })
    $(Del[i]).click(() => {
      $(mark[i]).hide()
      video.trigger('pause')
    })
  }

  //轮播图切换
  let navs = $('.navs .nav')
  let nav_index = 0
  let mv3_one = $('#mv3_one')
  let mvArrs = ['https://static.jx3.xoyo.com/video/20191126/gfsj_zy.mp4', 'https://static.jx3.xoyo.com/video/20191126/gfsj_xj.mp4', 'https://static.jx3.xoyo.com/video/20191126/gfsj_gy.mp4', "https://static.jx3.xoyo.com/video/20191126/gfsj_sl.mp4", "https://static.jx3.xoyo.com/video/20191126/gfsj_hh.mp4", 'https://static.jx3.xoyo.com/video/20191126/gfsj_sc.mp4']

  function style_three(nav_index) {
    $(navs[0]).css({
      'background-position-x': -1
    })
    $(navs[1]).css({
      'background-position-x': -58
    })
    $(navs[2]).css({
      'background-position-x': -114
    })
    $(navs[3]).css({
      'background-position-x': -170
    })
    $(navs[4]).css({
      'background-position-x': -226
    })
    $(navs[5]).css({
      'background-position-x': -281
    })

    switch (nav_index) {
      case 0:
        $(navs[0]).css({
          'margin-top': -20,
          'background-position-x': -369,
          'background-position-y': 20
        })
        break;
      case 1:
        $(navs[1]).css({
          'margin-top': -20,
          'background-position-x': -427,
          'background-position-y': 20
        })
        break;
      case 2:
        $(navs[2]).css({
          'margin-top': -20,
          'background-position-x': -483,
          'background-position-y': 20
        })
        break;
      case 3:
        $(navs[3]).css({
          'margin-top': -20,
          'background-position-x': -539,
          'background-position-y': 20
        })
        break;
      case 4:
        $(navs[4]).css({
          'margin-top': -20,
          'background-position-x': -595,
          'background-position-y': 20
        })
        break;
      case 5:
        $(navs[5]).css({
          'margin-top': -20,
          'background-position-x': -650,
          'background-position-y': 20
        })
        break;

    }
    // mv3_one.fadeOut({duration: 300})
    mv3_one[0].src = mvArrs[nav_index]
    // mv3_one.fadeIn({duration: 300})
  }

  style_three(nav_index)
  $.each(navs, function (index, value) {
    $(value).click(function () {
      nav_index = index
      style_three(nav_index)
    })
  })
  setInterval(function () {
    nav_index++
    style_three(nav_index % navs.length)
  }, 5000)

  //十七大门派
  let content_nav = $('.Navs')
  let img_four = $('#top4-img')
  let imArr4 = ['https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-5b530cf1.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-4821d754.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-42d9928a.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-e82a55fc.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-f3ca2a29.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-59f04573.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-08e0b93f.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-b5a536d3.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-54fb1d05.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-dadb68c9.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-fcba48ce.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-6ff182c0.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-12f1c407.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-3dbc772b.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-164c75a6.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-422a53d0.png.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/bg-5399917a.png.webp'
  ]

  let four = 0

  function style_four(four) {
    $.each(content_nav, function (index, value) {
      // console.log(index)
      if (index === 0) {
        $(value).css({
          'background-position-y': 0,
          'width': 85,
          'height': 38,
          // 'margin-top': 10,
          'background-position-y': 0
        })
      } else {
        $(value).css({
          'background-position-x': `${-84 * four - 1}`,
          'background-position-y': 0
        })
      }
    })
    if (four === 0) {
      $(content_nav[four]).css({
        'width': 85,
        'height': 41,
        // 'margin-top': -2,
        'background-position-y': 40
      })
    } else {
      $(content_nav[four]).css({
        'background-position-y': 40
      })
    }
    img_four.fadeOut({duration: 200})
    img_four[0].src = imArr4[four]
    img_four.fadeIn({duration: 200})

  }

  style_four(four)
  $.each(content_nav,function(index,value){
    $(value).mouseover(function(){
      four = index
      style_four(four)
    })
  })
  let timer4 = setInterval(function () {
    four++
    style_four(four % content_nav.length)
  }, 5000)


 //top5
  let img_five = $('#t5-img')
  let liImgs = $('.liImg')
  let imgArr5 = ['https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/ts0-6ad7e846.jpg.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/ts1-f399b877.jpg.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/ts2-5bff05a9.jpg.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/ts3-526d7583.jpg.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/ts4-90212b05.jpg.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/ts5-994e6be6.jpg.webp', 'https://jx3.xoyo.com/p/zt/2021/10/14/fenliuye/pc/assets/img/ts0-new-0340f1f3.jpg.webp']

  let five = 0
  function style_five(five) {
    $(liImgs[0]).css({
      'background-position-x': -278
    })
    $(liImgs[1]).css({
      'background-position-x': 0
    })
    $(liImgs[2]).css({
      'background-position-x': -60
    })
    $(liImgs[3]).css({
      'background-position-x': -113
    })
    $(liImgs[4]).css({
      'background-position-x': -170
    })
    $(liImgs[5]).css({
      'background-position-x': -225
    })
    $(liImgs[6]).css({
      'background-position-x': -333
    })
    switch(five)
    {
      case 0:
        $(liImgs[0]).css({
          'background-position-x': -699,
          'margin-top': -30,
          'background-position-y':20
        })
        break;
      case 1:
        $(liImgs[1]).css({
          'background-position-x': -418,
          'margin-top': -30,
          'background-position-y':20
        })
        break;
      case 2:
        $(liImgs[2]).css({
          'background-position-x': -478,
          'margin-top': -30,
          'background-position-y':20
        })
        break;
      case 3:
        $(liImgs[3]).css({
          'background-position-x': -533,
          'margin-top': -30,
          'background-position-y':20
        })
        break;
      case 4:
        $(liImgs[4]).css({
          'background-position-x': -588,
          'margin-top': -30,
          'background-position-y':20
        })
        break;
      case 5:
        $(liImgs[5]).css({
          'background-position-x': -644,
          'margin-top': -30,
          'background-position-y':20
        })
        break;
      case 6:
        $(liImgs[6]).css({
          'background-position-x': -756,
          'margin-top': -30,
          'background-position-y':20
        })
        break;
    }
    // img_five.hide(300)
    img_five.fadeOut({duration: 300})
    img_five[0].src = imgArr5[five]
    img_five.fadeIn({duration: 300})
  }
  style_five(five)
  $.each(liImgs, function(index,value){
    $(value).click(function(){
      five = index
      style_five(five)
    })
  })
  setInterval(function(){
    five++
    style_five(five % liImgs.length)
  },3000)


  //侧边栏-------------------------------
  let aside = $('.aside')
  let a_li = $('.a-li')
  let top = $(window).scrollTop()
  a_li.css('scale', '0.8')
  aside.hide()
  scroll()
  show()
  style_six()
  function scroll() {
    $(window).scroll(function () {
      top = $(window).scrollTop()
      show()
      style_six()
    })
  }
  function show() {
    top = $(window).scrollTop()
    if(top >= 160) {
      aside.show(500)
    }else {
      aside.hide(500)
    }
  }
  $.each(a_li, function (index, value) {
    $(value).click(function () {
      style_six()
      switch (index) {
        case 0:
          $('html, body').animate({
            scrollTop: $('header').offset().top
          },600)
          break;
        case 1:
          $('html, body').animate({
            scrollTop: $('.top1').offset().top
          },600)
          break;
        case 2:
          $('html, body').animate({
            scrollTop: $('.top2').offset().top
          },600)
          break;
        case 3:
          $('html, body').animate({
            scrollTop: $('.top3').offset().top - 233
          },600)
          break;
        case 4:
          $('html, body').animate({
            scrollTop: $('.top4').offset().top + 10
          },600)
          break;
        case 5:
          $('html, body').animate({
            scrollTop: $('.top5').offset().top
          },600)
          break;
        case 6:
          $('html, body').animate({
            scrollTop: $('.top6').offset().top + 10
          },600)
          break
        case 7:
          $('html, body').animate({
            scrollTop: $('.top7').offset().top + 10
          },600)
          break;
      }
    })
  })
  function style_six() {
    $(a_li[0]).css({
      'background-position-y': -90,
      'background-position-x': -6
    })
    $(a_li[1]).css({
      'background-position-y': -184,
      'background-position-x': -6
    })
    $(a_li[2]).css({
      'background-position-y': -277,
      'background-position-x': -6
    })
    $(a_li[3]).css({
      'background-position-y': -370,
      'background-position-x': -6
    })
    $(a_li[4]).css({
      'background-position-y': -466,
      'background-position-x': -6
    })
    $(a_li[5]).css({
      'background-position-y': -558,
      'background-position-x': -6
    })
    $(a_li[6]).css({
      'background-position-y': -648,
      'background-position-x': -6
    })
    $(a_li[7]).css({
      'background-position-y': -738,
      'background-position-x': -6
    })

    if(top > $('.top1').offset().top && top < $('.top2').offset().top) {
      $(a_li[0]).css({
        'background-position-y': -90,
        'background-position-x': -103
      })
    }else if(top >= $('.top1').offset().top && top < $('.top2').offset().top){
      $(a_li[1]).css({
        'background-position-y': -184,
        'background-position-x': -6
      })
    }else if(top >= $('.top2').offset().top -60 && top < $('.top3') .offset().top -234) {
      $(a_li[2]).css({
        'background-position-y': -277,
        'background-position-x': -103
      })
    }else if(top >= $('.top3').offset().top - 234 && top < $('.top4').offset().top) {
      $(a_li[3]).css({
        'background-position-y': -370,
        'background-position-x': -103
      })
    }else if(top >= $('.top4').offset().top && top < $('.top5').offset().top) {
      $(a_li[4]).css({
        'background-position-y': -466,
        'background-position-x': -103
      })
    }else if(top >= $('.top5').offset().top  && top < $('.top6').offset().top) {
      $(a_li[5]).css({
        'background-position-y': -558,
        'background-position-x': -103
      })
    }else if(top >= $('.top6').offset().top && top < $('.top7').offset().top) {
      $(a_li[6]).css({
        'background-position-y': -648,
        'background-position-x': -103
      })
    }else if(top >= $('.top7').offset().top) {
      $(a_li[7]).css({
        'background-position-y': -738,
        'background-position-x': -103
      })
    }
  }

  //右边悬浮
  let fixed = $('.fixed')
  fixed.hide()
  fixed.show({duration: 1000})

})

