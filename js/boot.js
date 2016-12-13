  requirejs.config({
    baseUrl: 'js/',
    paths: {}
  })

  var $doc = $(document)
    // 设置缓存页面数量
  $doc.trigger('spa:viewcachecount', {
    count: 2
  })


  // 首页
  var pageHome = {
    route: '',
    classname: 'home',
    animate: 'fadeIn',
    view: function () {
      var $page = this
      requirejs(['home'], function (viewData) {
        $doc.trigger('spa:initpage', [$page, viewData])
      })
    }
  }

  // demo:打开新页面视图
  var demoNewPage = {
    route: 'demo/newpage',
    classname: 'demo-newpage',
    animate: 'slideInRight',
    view: function () {
      var $page = this
      requirejs(['demo.newpage'], function (viewData) {
        $doc.trigger('spa:initpage', [$page, viewData])
      })
    }
  }

  $doc.trigger('spa:route', [pageHome, demoNewPage])

  $(function () {
    $doc.trigger('spa:boot')
  })
