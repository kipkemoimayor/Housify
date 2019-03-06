
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
$("#prac1").click(function(){
  takeId(hi3)
  favourites.push(n)
  alert(favourites)

});
$("#prac2").click(function(){
  takeId(hi4)
  favourites.push(n)
  alert(favourites)

});
$("#prac3").click(function(){
  takeId(hi5)
  favourites.push(n)
  alert(favourites)

});
$("#prac4").click(function(){
  takeId(hi6)
  favourites.push(n)
  alert(favourites)

});
$("#prac5").click(function(){
  takeId(hi7)
  favourites.push(n)
  alert(favourites)

});
$("#prac6").click(function(){
  takeId(hi8)
  favourites.push(n)
  alert(favourites)

});
$("#prac7").click(function(){
  takeId(hi9)
  favourites.push(n)
  alert(favourites)

});
$("#prac8").click(function(){
  takeId(hi11)
  favourites.push(n)
  alert(favourites)

});
$("#prac9").click(function(){
  takeId(hi12)
  favourites.push(n)
  alert(favourites)

});

$("#showme").click(function(){
  newFavourite=favourites.map(function(favo){
    $("."+favo).show();

  })
})
$("#houseforsale").click(function(){
    $(".home").hide();
    $(".house-for-sale").show();
});
$("#login").click(function(){
  $("#dash").show();
  $(".home").hide();
  $(".house-for-sale").hide();
})



});
