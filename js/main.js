
favourites=[];
function takeId(elt){
   n=elt.id
  document.getElementById('dis').innerHTML=n;

}

$(document).ready(function() {
  $("#prac").click(function(){
    var k=takeId(hi)
    var newObj={
      id:n
    }
    favourites.push(n)



});
$("#hi2").click(function(){
  takeId(hi1)
  favourites.push(n)
  alert(favourites)

});
$("#dis").click(function(){
  $(".fet").hide();
  newFavourite=favourites.map(function(favo){
    $("#"+favo).show();
    $(".fet").show();
  })
})


});
