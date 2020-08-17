function getRecipes(){
    var html = "";
    var arr = [];
   
      var url = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
      var html = "";

   $.ajax({     //Using Jquery Method         
       method: 'get',
       url: url,
       dataType: 'json',
       success: function(data){              

             $.each(data.meals, function(key,value){     //Using Jquery Method
                arr[key] = value;
                //html += "<div class='column'> <div class='recipe-image'><img src='"+value.strMealThumb+"' class='image'></div> <div class='content'><h3>"+value.strMeal+"</h3><p> Category: "+value.strCategory+" <br><button id='readbtn' onclick=getRecipeDetail("+key+")>Read more</button></p></div> </div>";
                html += "<div class='column'> <div class='recipe-image'><a href='"+value.strMealThumb+"' data-lightbox='"+value.strMealThumb+"'><img src='"+value.strMealThumb+"' class='image'></a></div> <div class='content'><h3>"+value.strMeal+"</h3><p> Category: "+value.strCategory+" <br><button id='readbtn' onclick=getRecipeDetail("+key+")>Read more</button></p></div> </div>";

            });

            $(".row").html(html);    //Using Jquery Method

            localStorage.setItem("recipeDetailList", JSON.stringify(arr));
           
           
           
       }
   });
}

function getRecipeDetail(index){    //Custom Function using Parameters
   

    var details = JSON.parse(localStorage.getItem("recipeDetailList"));
   
    var RecipeObject = {    //Creating Object Literal
        picture: details[index].strMealThumb,
        title: details[index].strMeal,
        instructions: details[index].strInstructions,
        category: details[index].strCategory
    };

    localStorage.setItem("RecipeObject", JSON.stringify(RecipeObject));

    location.href = "recipe.html";      //Using Built-in property of Window Object

}

$(function(){

    getRecipes();   
    
});