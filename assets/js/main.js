$(document).ready(function () {

    var sidebar = $('#sidebar-menu')
    var smallSidebar = $('#small-navbar')
    var content = $('.content')
    var closeSidebar = $('#close-sidebar')
    var sidebarList = $('#sidebar-list')
    var contentOverlay = $('#navbar-overlay')

    smallSidebar.on('click', function(){
        sidebar.fadeIn(400)
        contentOverlay.fadeIn(800)
    })

    sidebarList.children().on('click', function(el){
        content.fadeOut()
        var url = el.currentTarget.childNodes[1].href
        window.location = url
    })

    closeSidebar.on('click', function(){
        sidebar.fadeOut(400);
        content.css('padding-left', '0')
        contentOverlay.fadeOut(200)
    })
    
    if(sidebar.css('display') != 'none'){
        content.css('padding-left', sidebar.css('width'))
    } else {
        content.css('padding-left', '0')
    }
    
    $(window).resize(function() {
        if ($(window).width() < 1100) {
            content.css('padding-left', '0')
        } else {
          content.css('padding-left', sidebar.css('width'))
        }
    });

    $('#background').fadeIn(500, null, function(){
        $('#overlay').fadeIn(2000, null, function(){
            $('#content').fadeIn(2000)
        })
    })
    
    $('#preloader').fadeOut()
    setTimeout(function(){
        $('.flex-row').fadeIn()
    }, 1000)
});
