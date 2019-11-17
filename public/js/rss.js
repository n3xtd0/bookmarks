function shareBookmarkOnFacebook(url){
    window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url)+"&t="+document.title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');  
}

function shareBookmarkOnTwitter(url){
    window.open("https://twitter.com/share?url="+ encodeURIComponent(url)+"&text="+document.title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
}

$(document).ready(function(){
    $(".fb-btn").click(function(){
        url = $(this).parent("td").prev("td").prev(".url").children("input").val() ;
        shareBookmarkOnFacebook(url);     
    });

    $(".twitter-btn").click(function(){
        url = $(this).parent("td").prev("td").prev(".url").children("input").val() ;
        shareBookmarkOnTwitter(url);     
    });

});