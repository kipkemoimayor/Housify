
//saves password
var savePassword=[];
favourites=[];
function takeId(elt){
   n=elt.id
  document.getElementById('dis').innerHTML=n;

}

$(document).ready(function() {
//login starts here

  $("#login-form").submit(function(event) {
    event.preventDefault();
    userName=$(".firstName").val();
    var email=$(".email").val();
    password=$(".password").val();
    var phone=$(".telephone").val();
    $("#logout").text(userName);


      $("#homepage").hide();
      $("#logged").show();
      $("#box").hide();

      $(".home").show();
      $("#nameUser").text(userName);
      $("#userEmail").text(email);
      $("#userPhone").text(phone);




      savePassword.push(userName,password);

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
    event.preventDefault();
    if(savePassword[0]==savePassword[0]&& savePassword[1]==savePassword[1]){

        $("#homepage").hide();
        $("#logged").show();
        $("#box").hide();
        $(".home").show();

    }else{
      alert("wrong password or username")
    }
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
//by Size
$("#d").click(function(){
  takeId(e)
  favourites.push(n)
  alert(favourites)

});
$("#d1").click(function(){
  takeId(e1)
  favourites.push(n)
  alert(favourites)

});
$("#d3").click(function(){
  takeId(e2)
  favourites.push(n)
  alert(favourites)

});

$("#d4").click(function(){
  takeId(e3)
  favourites.push(n)
  alert(favourites)

});
$("#d5").click(function(){
  takeId(e4)
  favourites.push(n)
  alert(favourites)

});
$("#d6").click(function(){
  takeId(e5)
  favourites.push(n)
  alert(favourites)

});
$("#d7").click(function(){
  takeId(e6)
  favourites.push(n)
  alert(favourites)

});
$("#d8").click(function(){
  takeId(e7)
  favourites.push(n)
  alert(favourites)

});
$("#d9").click(function(){
  takeId(e8)
  favourites.push(n)
  alert(favourites)

});
$("#d10").click(function(){
  takeId(e9)
  favourites.push(n)
  alert(favourites)

});
$("#d11").click(function(){
  takeId(e10)
  favourites.push(n)
  alert(favourites)

});
$("#d12").click(function(){
  takeId(e11)
  favourites.push(n)
  alert(favourites)

});
$("#f").click(function(){
  takeId(g)
  favourites.push(n)
  alert(favourites)

});
$("#f1").click(function(){
  takeId(g1)
  favourites.push(n)
  alert(favourites)

});
$("#f2").click(function(){
  takeId(g2)
  favourites.push(n)
  alert(favourites)

});
$("#f3").click(function(){
  takeId(g3)
  favourites.push(n)
  alert(favourites)

});
$("#f4").click(function(){
  takeId(g4)
  favourites.push(n)
  alert(favourites)

});
$("#f5").click(function(){
  takeId(g5)
  favourites.push(n)
  alert(favourites)

});
$("#f6").click(function(){
  takeId(g6)
  favourites.push(n)
  alert(favourites)

});$("#f").click(function(){
  takeId(g)
  favourites.push(n)
  alert(favourites)

});
$("#f7").click(function(){
  takeId(g7)
  favourites.push(n)
  alert(favourites)

});
$("#f8").click(function(){
  takeId(g8)
  favourites.push(n)
  alert(favourites)

});
$("#f9").click(function(){
  takeId(g9)
  favourites.push(n)
  alert(favourites)

});
$("#f10").click(function(){
  takeId(g10)
  favourites.push(n)
  alert(favourites)

});
$("#f11").click(function(){
  takeId(g11)
  favourites.push(n)
  alert(favourites)

});










$("#showme").click(function(){
  newFavourite=favourites.map(function(favo){
    $("."+favo).show();

  })
})
//cards
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
  $("#housesize").hide();
  $("#budget").hide();


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
  $(".house-for-sale").hide();
  $("#housesize").hide();
  $(".house-for-sale").hide();
  $("#budget").hide();

})
$("#clickSale").click(function(){
  $(".house-for-sale").show();
  $("#dash").hide();
  $(".home").hide();
  $("#box").hide();
  $("#housesize").hide();
  $("#location").hide();
  $("#budget").hide();

})
$("#houseSize").click(function(){
  $(".home").hide();
  $("#housesize").show();
  $("#box").hide();


})
$("#budgetClick").click(function () {
  $("#budget").show();
  $(".home").hide();


});
$("#clickPrice").click(function(){
  $("#budget").show();
  $("#dash").hide();
  $(".home").hide();
  $("#box").hide();
  $("#housesize").hide();
  $("#location").hide();
  $(".house-for-sale").hide();


})
$("#clickSize").click(function(){
  $("#housesize").show();
  $("#dash").hide();
  $(".home").hide();
  $("#box").hide();
  $("#budget").hide();
  $("#location").hide();
  $(".house-for-sale").hide();


})



});
