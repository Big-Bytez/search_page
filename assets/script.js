window.addEventListener('DOMContentLoaded', init);

function init(){
    console.log('hei');

    for(let rec = 0; rec<25;rec++){
        let ele = document.createElement('div');
        let numb = rec % 3;
        ele.setAttribute('class',`type${numb}`);
        let images = document.createElement('img')
        images.setAttribute('src',"images/pasta.jpeg")
        images.setAttribute('alt',"shuffle-button")
        images.setAttribute('alt',"shuffle-button")
        images.setAttribute('title',"Random-Recipe")
        let recipe_title = document.createElement('p')
        recipe_title.setAttribute('class',"recipe_title")
        recipe_title.innerHTML = "Delish Delish";

        
        ele.appendChild(images);
        ele.appendChild(recipe_title);
        //ele.innerHTML = `Recipe ${rec+1}`;
        document.getElementsByClassName('mini-recipes')[0].appendChild(ele);
        
    }


}