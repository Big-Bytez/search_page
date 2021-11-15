window.addEventListener('DOMContentLoaded', init);

async function init() {
    createRecipeCards();
  }

function createRecipeCards() {

  
    for(let i = 0; i<25;i++){

    let ele = document.createElement('search-recipe');
    ele.data = "Delish Pasta";
    
    document.querySelector('main').append(ele)
      
    }
    
  
}
  