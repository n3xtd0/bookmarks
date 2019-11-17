function isValidURL(url){
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(url);
}

$(document).ready(function(){

    $(".save-btn").click(function(){
        id = $(this).parent("td").parent("tr").attr("data-id");
        inputValue = $(this).prev().val();
        if (isValidURL(inputValue)){
            window.location.href="/bookmarks/edit/"+id+"/"+inputValue;
        }else{
            alert("Please insert a valid URL and try again");
        }
    });

    $(".edit-btn").click(function(){
        $(this).parent("td").next("td").children("button").removeAttr("hidden");
        $(this).parent("td").next("td").children("input").removeAttr("disabled");
        $(this).parent("td").next("td").children("input").focus();
    });
    
    $(".delete-btn").click(function(){
        if (confirm("¿Are you sure you want to delete this?")){
            id = $(this).parent("td").parent("tr").attr("data-id");
            window.location.href="/bookmarks/delete/"+id;
        }
    });

});