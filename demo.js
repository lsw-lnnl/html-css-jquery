$(function(){
    $('#contentDiv li').mouseover(function () {
        $(this).children('span').show(100);
    }).mouseout(function () { 
        $(this).children('span').hide(100);   
    });

    $('#titleDiv ul li').click(function () { 
        $(this).css({'backgroundColor':'#5DA3F5','color':'white'}).
        siblings().css({'backgroundColor':'','color':''});
    });

    $('#setBtn').click(function () { 
        $('#dldiv').fadeIn('slow');
    });
    $('#user').focus(function () {  
        $(this).val('');
    });
    $('#dlbtn').click(function () {  
       
        if($('#user').val()==''){
            alert('请输入用户名');
        }else{
            $('#dldiv').slideUp(500);
            $('#setBtn').val($('#user').val());
        }
    })
});
