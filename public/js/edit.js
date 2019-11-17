$(document).ready(function(){

    $(".save-btn").click(function(){
        id = $(this).parent("td").parent("tr").attr("data-id");
        inputValue = $(this).prev().val();
        window.location.href="/bookmarks/edit/"+id+"/"+inputValue;
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