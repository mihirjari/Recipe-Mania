var globalArray = []; //Using a Global Array

function FetchRecipeDetail(index){      //Custom Function using Parameters
  
    localStorage.setItem("FetchedRecipe", JSON.stringify(globalArray[index]));  //Setting up LocalStorage

    var details = JSON.parse(localStorage.getItem("FetchedRecipe"));

    var RecipeObject = {    //Creating Object Literal
        picture: details.strMealThumb,
        title: details.strMeal,
        instructions: details.strInstructions,
        category: details.strCategory
    };

    localStorage.setItem("RecipeObject", JSON.stringify(RecipeObject)); //Using LocalStorage 

    location.href = "recipe.html";    //Using Built-in property of Window Object

}

$(function(){

   $("#recipe-search-btn").click(function(){     //Using Jquery click Method
       
        var UserInput = $("#search-value").val();    //Using Jquery val Method
        var html = "";

        $("#search-value").val("");

        if(UserInput != ""){

            $.ajax({                                //Using JQuery ajax Method
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/search.php?s='+UserInput,
                dataType: 'json',
                success: function(data){

                        if(data.meals != null){     

                            for(var i=0;i<data.meals.length;i++){   //Using For Loop
    
                                globalArray[i] = data.meals[i];
                                //html += "<div class='column'><div class='recipe-title-image'><img src='"+globalArray[i].strMealThumb+"' class='recipe-image'></div> <div class='recipe-body'><h3>"+globalArray[i].strMeal+"</h3><p>Category: "+globalArray[i].strCategory+"<br><button id='readmore' onclick=FetchRecipeDetail("+i+")>Read more</button></p></div></div>";
                                html += "<div class='column'><div class='recipe-title-image'><a href='"+globalArray[i].strMealThumb+"' data-lightbox='"+globalArray[i].strMealThumb+"'><img src='"+globalArray[i].strMealThumb+"' class='recipe-image'></a></div> <div class='recipe-body'><h3>"+globalArray[i].strMeal+"</h3><p>Category: "+globalArray[i].strCategory+"<br><button id='readmore' onclick=FetchRecipeDetail("+i+")>Read more</button></p></div></div>";

                                //Used LighBox JQuery Plugin
        
                            }
                            $(".results").html(html);
                           
                        }else{
    
                            $(".results").html("");
                            $(".errormsg").html("<h1>No Recipe Found.</h1>");
    
                            $(".errormsg").fadeOut(3000, function(){    //Using JQuery fadeOut Method
                
                                $(".errormsg").css("display","");   //Using JQuery css Method
                                $(".errormsg").html("");
                               
                            });   
                           
                        }           
                  
                  
                }

            });
        }else{

            $(".errormsg").html("<h1>Please Enter The Recipe You Want To Search.</h1>");

            $(".errormsg").fadeOut(3000, function(){    //Using JQuery fadeOut Method

                $(".errormsg").css("display","");   //Using JQuery css Method
                $(".errormsg").html("");
            });   
        }

   });
});