import $ from "jquery"; 

export const fun = $(function(){
  $('#menu').on('click',function(){
    $(this).toggleClass('fa-times')
  });
});



