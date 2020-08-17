$(function(){

    var html = "";

   var recipeObject = JSON.parse(localStorage.getItem("RecipeObject"));
   

   $("#recipe-photo").html("<h1>"+recipeObject.title+"</h1><img src='"+recipeObject.picture+"'>");  //Accessing Object Properties

   html = "<ul><li><a href='#tab1'>Dish</a></li>  <li><a href='#tab2'>Instructions</a></li>  <li><a href='#tab3'>Category</a></li></ul> <div id='tab1'><p>"+recipeObject.title+"</p></div>  <div id='tab2'><p>"+recipeObject.instructions+"</p></div>  <div id='tab3'><p>"+recipeObject.category+"</p></div>"; 

   $("#result").html(html); //Using JQuery html Method

   $("#result").tabs();         //Using JQuery UI
});