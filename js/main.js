
favourites=[];
function takeId(elt){
   n=elt.id
  document.getElementById('dis').innerHTML=n;

}

$(document).ready(function() {
//login starts here

  $("#login-form").submit(function(event) {
    event.preventDefault();
    var userName=$(".firstName").val();
    var email=$(".email").val();
    var password=$(".password").val();
    var phone=$(".telephone").val();
    $("#logout").text(userName);


      $("#homepage").hide();
      $("#logged").show();
      $("#box").hide();

      $(".home").show();
      $("#nameUser").text(userName);
      $("#userEmail").text(email);
      $("#userPhone").text(phone);







  });
  $("#log").click(function(){
    $("#login-form").hide();
    $("#loginUser").fadeIn(1000);
    $("#loginUser").show();
  });
  $("#regi").click(function(){
    $("#login-form").fadeIn(1000);
    $("#login-form").show();
    $("#loginUser").hide();
  });


  $("#loginUser").submit(function(event){

  })


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
$("#a").click(function(){
  takeId(b)
  favourites.push(n)
  alert(favourites)

});
$("#a1").click(function(){
  takeId(b2)
  favourites.push(n)
  alert(favourites)

});
$("#a2").click(function(){
  takeId(b2)
  favourites.push(n)
  alert(favourites)

});
$("#a3").click(function(){
  takeId(b3)
  favourites.push(n)
  alert(favourites)

});
$("#a4").click(function(){
  takeId(b4)
  favourites.push(n)
  alert(favourites)

});
$("#a5").click(function(){
  takeId(b5)
  favourites.push(n)
  alert(favourites)

});
$("#a6").click(function(){
  takeId(b6)
  favourites.push(n)
  alert(favourites)

});
$("#a7").click(function(){
  takeId(b7)
  favourites.push(n)
  alert(favourites)

});
$("#a8").click(function(){
  takeId(b8)
  favourites.push(n)
  alert(favourites)

});
$("#a9").click(function(){
  takeId(b9)
  favourites.push(n)
  alert(favourites)

});
$("#a10").click(function(){
  takeId(b11)
  favourites.push(n)
  alert(favourites)

});
$("#a11").click(function(){
  takeId(b11)
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
$("#showlocation").click(function(){
    $(".home").hide();
    $("#location").show();

});
$("#login").click(function(){
  $("#box").show();
  $(".home").hide();
  $(".house-for-sale").hide();
  $("#location").hide();

});
$("#logout").click(function(){
  $("#dash").show();
  $(".home").hide();
  $(".house-for-sale").hide();
  $("#location").hide();

})

// user experience
$("#clickLocation").click(function(){
  $("#location").show();
  $("#dash").hide();
  $(".home").hide();
  $("#box").hide();

})
$("#clickSale").click(function(){
  $(".house-for-sale").show();
  $("#dash").hide();
  $(".home").hide();
  $("#box").hide();

})



});
