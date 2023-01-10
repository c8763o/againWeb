document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }  
  }); 


$(function(){
  $('.Btn4Animation').click(function(){
    if($(this).text() == '動畫 ▸')
      $(this).text('動畫 ▾')
    else
    $(this).text('動畫 ▸');
  });
});

$(function(){
  $('.Btn4Logotype').click(function(){
    if($(this).text() == '標準字 ▸')
      $(this).text('標準字 ▾')
    else
    $(this).text('標準字 ▸');
  });
});

$(function(){
  $('.Btn4Figure').click(function(){
    if($(this).text() == '人物 ▸')
      $(this).text('人物 ▾')
    else
    $(this).text('人物 ▸');
  });
});

$(function(){
  $('.Btn4Scene').click(function(){
    if($(this).text() == '場景 ▸')
      $(this).text('場景 ▾')
    else
    $(this).text('場景 ▸');
  });
});

$(function(){
  $('.Btn4Process').click(function(){
    if($(this).text() == '製作過程 ▸')
      $(this).text('製作過程 ▾')
    else
    $(this).text('製作過程 ▸');
  });
});