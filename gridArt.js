// .box
// .new-div

for(let x = 0; x <2000; x++){
  $(".root").append("<div class='box'></div>");

  $("div").on('dblclick', function(){
    $("div").off("mouseover");
  })

  $("div").on('mouseover', function(){
    $(this).css("background", "yellow");
  })

  $("#my-selection").on("change", function(){
    let myColor = $("#my-selection").val();

    $("div").on("mouseover", function(){
   $(this).css("background", myColor);
 })
})
}
