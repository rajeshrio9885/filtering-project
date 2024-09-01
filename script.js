const search = document.getElementById('search');
const boxes = document.querySelectorAll('.box')
const btn = document.querySelectorAll('.btn')

search.addEventListener('keyup',(e)=>{
    let searchText = e.target.value.trim().toLowerCase();
    boxes.forEach((box)=>{
        let dataBox = box.dataset.item;
        if(dataBox.includes(searchText)){
            box.style.display = 'block';
        }else{
            box.style.display = 'none';
        }
    })
    
    btn.forEach((button)=>{
        button.classList.remove('btn-clicked');
    })
    btn[0].classList.add('btn-clicked')
})

btn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        oneBtn(e);
        let data = e.target.dataset.filter;
        boxes.forEach((box)=>{
            if(data == "all"){
                box.style.display ="block"
            }else{
                let dataItem = box.dataset.item;
                console.log(dataItem);
                if(dataItem == data){
                    box.style.display ="block"
                }else{
                    box.style.display ="none"
                }
            }
        })
    })
})

function oneBtn(e){
    btn.forEach((button)=>{
        button.classList.remove('btn-clicked');
    })
    e.target.classList.add('btn-clicked');

}
