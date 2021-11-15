class SearchRecipe extends HTMLElement {
    constructor() {

      super();
      let shadow = this.attachShadow({mode: 'open'});
  
    }
  
    set data(data) {
        console.log('hei');
        const styleElem = document.createElement('style');
        const styles = `
        article {
            displey: grid;
            width: 240px;
            height: 260px;
            border-style: solid;
            border-width: 2px;
            border-color: #b90c0c;
            border-radius: 10px;
        }
        article > img{
            position: relative; 
            left: 10px; 
            bottom: -40px;
            width: 220px;
            height: auto;
            
        }
        div {
            width: 60px;
            height: 60px;
            background: #b90c0c;
            border-radius: 50%;
            position: relative; 
            visibility: visible; 
            left: 170px; 
            bottom: 14px;
            border-style: solid;
            border-width: 2px;
            border-color: black;
          }
        p.headline {
            font-family: 'Varela Round', sans-serif;
            font-size: 2.5vh;
            margin-top: 20
            margin-left: 15px;
            margin-right: 15px;
            text-align: center;
            text-decoration: wavy;
            color: black;
          }
        .recipe-time {
            color: white;
            text-align: center;
          }
        
        
        
        
        `;
        

        styleElem.innerHTML = styles;

        const recipe = document.createElement('article');

        const recipe_title = document.createElement('p');
        recipe_title.setAttribute('class','headline')

        const recipe_img = document.createElement('img');
        const time_circle = document.createElement('div');
        time_circle.setAttribute('class', 'circle')


        const time_numb = document.createElement('p')
        time_numb.setAttribute('class', 'recipe-time')

        time_numb.innerHTML = "14";


        recipe_img.setAttribute('src','images/pasta.jpeg')

        recipe_title.innerHTML = data;

        
        recipe.appendChild(recipe_title);
        recipe.appendChild(recipe_img);
        time_circle.appendChild(time_numb)
        recipe.appendChild(time_circle);

        this.shadowRoot.appendChild(styleElem); 
        this.shadowRoot.appendChild(recipe);
      
  
 
  
        }
  }
  
  customElements.define('search-recipe', SearchRecipe);