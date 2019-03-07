
//saves password
var savePassword=[];
favourites=[];
function takeId(elt){
   n=elt.id

}


// user logic
function clearAll(){
  $(".home").show();
  $("#housesize").hide();
  $("#dash").hide();

  $("#box").hide();
  $("#budget").hide();
  $("#location").hide();
  $(".house-for-sale").hide();

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
  $("#del").click(function(){
    favourites.length=0;
    $(".favourite").hide();

  })


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
  $("#prac").text("added")
  $("#prac1").css("color","red")

});
$("#prac2").click(function(){
  takeId(hi4)
  favourites.push(n)
  $("#prac2").text("added")
  $("#prac2").css("color","red")

});
$("#prac3").click(function(){
  takeId(hi5)
  favourites.push(n)
  $("#prac3").text("added")
  $("#prac3").css("color","red")

});
$("#prac4").click(function(){
  takeId(hi6)
  favourites.push(n)
  $("#prac4").text("added")
  $("#prac4").css("color","red")

});
$("#prac5").click(function(){
  takeId(hi7)
  favourites.push(n)
  $("#prac5").text("added")
  $("#prac5").css("color","red")

});
$("#prac6").click(function(){
  takeId(hi8)
  favourites.push(n)
  $("#prac6").text("added")
  $("#prac6").css("color","red")

});
$("#prac7").click(function(){
  takeId(hi9)
  favourites.push(n)
  $("#prac7").text("added")
  $("#prac7").css("color","red")

});
$("#prac8").click(function(){
  takeId(hi11)
  favourites.push(n)
  $("#prac8").text("added")
  $("#prac8").css("color","red")

});
$("#prac9").click(function(){
  takeId(hi12)
  favourites.push(n)
  alert(favourites)
  $("#prac9").text("added")
  $("#prac9").css("color","red")

});
$("#b").click(function(){
  takeId(a)
  favourites.push(n)
  $("#b").text("added")
  $("#b").css("color","red")

});
$("#b1").click(function(){
  takeId(a1)
  favourites.push(n)
  $("#b1").text("added")
  $("#b1").css("color","red")

});
$("#b2").click(function(){
  takeId(a2)
  favourites.push(n)
  $("#b2").text("added")
  $("#b2").css("color","red")

});
$("#b3").click(function(){
  takeId(a3)
  favourites.push(n)
  $("#b3").text("added")
  $("#b3").css("color","red")

});
$("#b4").click(function(){
  takeId(a4)
  favourites.push(n)
  $("#b4").text("added")
  $("#b4").css("color","red")

});
$("#b5").click(function(){
  takeId(a5)
  favourites.push(n)
  $("#b5").text("added")
  $("#b5").css("color","red")

});
$("#b6").click(function(){
  takeId(a6)
  favourites.push(n)
  $("#b6").text("added")
  $("#b6").css("color","red")


});
$("#b7").click(function(){
  takeId(a7)
  favourites.push(n)
  $("#b7").text("added")
  $("#b7").css("color","red")


});
$("#b8").click(function(){
  takeId(a8)
  favourites.push(n)
  $("#b8").text("added")
  $("#b8").css("color","red")


});
$("#b9").click(function(){
  takeId(a9)
  favourites.push(n)
  $("#b9").text("added")
  $("#b9").css("color","red")


});
$("#b10").click(function(){
  takeId(a10)
  favourites.push(n)
  $("#a10").text("added")
  $("#a10").css("color","red")

});
$("#b11").click(function(){
  takeId(a11)
  favourites.push(n)
  $("#b11").text("added")
  $("#b11").css("color","red")


});
//by Size
$("#d").click(function(){
  takeId(e)
  favourites.push(n)
  $("#d").text("added")
  $("#d").css("color","red")


});
$("#d1").click(function(){
  takeId(e1)
  favourites.push(n);
  $("#d1").text("added")
  $("#d1").css("color","red")


});
$("#d3").click(function(){
  takeId(e2)
  favourites.push(n)
  $("#d3").text("added")
  $("#d3").css("color","red")


});

$("#d4").click(function(){
  takeId(e3)
  favourites.push(n)
  $("#d4").text("added")
  $("#d4").css("color","red")


});
$("#d5").click(function(){
  takeId(e4)
  favourites.push(n)
  $("#d5").text("added")
  $("#d5").css("color","red")


});
$("#d6").click(function(){
  takeId(e5)
  favourites.push(n)
  $("#d6").text("added")
  $("#d6").css("color","red")


});
$("#d7").click(function(){
  takeId(e6)
  favourites.push(n)
  $("#d7").text("added")
  $("#d7").css("color","red")


});
$("#d8").click(function(){
  takeId(e7)
  favourites.push(n)
  $("#d8").text("added")
  $("#d8").css("color","red")


});
$("#d9").click(function(){
  takeId(e8)
  favourites.push(n)
  $("#d9").text("added")
  $("#d9").css("color","red")


});
$("#d10").click(function(){
  takeId(e9)
  favourites.push(n)
  $("#d10").text("added")
  $("#d10").css("color","red")


});
$("#d11").click(function(){
  takeId(e10)
  favourites.push(n)
  $("#d11").text("added")
  $("#d11").css("color","red")


});
$("#d12").click(function(){
  takeId(e11)
  favourites.push(n)
  $("#d12").text("added")
  $("#d12").css("color","red")


});
$("#f").click(function(){
  takeId(g)
  favourites.push(n)
  $("#f").text("added")
  $("#f").css("color","red")


});
$("#f1").click(function(){
  takeId(g1)
  favourites.push(n)
  $("#f1").text("added")
  $("#f1").css("color","red")


});
$("#f2").click(function(){
  takeId(g2)
  favourites.push(n)
  $("#f2").text("added")
  $("#f2").css("color","red")


});
$("#f3").click(function(){
  takeId(g3)
  favourites.push(n)
  $("#f3").text("added")
  $("#f3").css("color","red")


});
$("#f4").click(function(){
  takeId(g4)
  favourites.push(n)
  $("#f4").text("added")
  $("#f4").css("color","red")


});
$("#f5").click(function(){
  takeId(g5)
  favourites.push(n)
  $("#f5").text("added")
  $("#f5").css("color","red")


});
$("#f6").click(function(){
  takeId(g6)
  favourites.push(n)
  $("#f6").text("added")
  $("#f6").css("color","red")


});$("#f").click(function(){
  takeId(g)
  favourites.push(n)
  $("#f7").text("added")
  $("#f7").css("color","red")


});
$("#f7").click(function(){
  takeId(g7)
  favourites.push(n)
  $("#f7").text("added")
  $("#f7").css("color","red")


});
$("#f8").click(function(){
  takeId(g8)
  favourites.push(n)
  $("#f8").text("added")
  $("#f8").css("color","red")


});
$("#f9").click(function(){
  takeId(g9)
  favourites.push(n)
  $("#f9").text("added")
  $("#f9").css("color","red")


});
$("#f10").click(function(){
  takeId(g10)
  favourites.push(n)
  $("#f10").text("added")
  $("#f10").css("color","red")


});
$("#f11").click(function(){
  takeId(g11)
  favourites.push(n)
  $("#f11").text("added")
  $("#f11").css("color","red")


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
  $("#budget").hide();
  $("#housesize").hide();

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
$("#navClick").click(function(){
  clearAll();
})
$("#navbarClick").click(function(){
  clearAll();
})



});
