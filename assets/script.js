window.addEventListener('DOMContentLoaded', init);

function init(){
    console.log('hei');

    for(let rec = 0; rec<25;rec++){
        let ele = document.createElement('div');
        let numb = rec % 3;
        ele.setAttribute('class',`type${numb}`);
        ele.innerHTML = `Recipe ${rec+1}`;
        document.getElementsByClassName('mini-recipes')[0].appendChild(ele);
        
    }


}