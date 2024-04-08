const s = 0;
const totButton = document.querySelector('.tot');
const addButton = document.querySelector('.button-add');
const item = document.querySelector('.item');
const itemHolder = document.querySelector('.itemholder');
const total = document.querySelector('.totalSum');

const add = () => {
    const t = document.querySelectorAll('.val');
    for(var i = 0; i < t.length; i++) {
        t[i]=0;
    }
    func(t)
}


function func(t){
    let sum = 0;
    for(let i=0;i<t.length;i++){
        sum += parseInt(t[i].value);
        console.log(t[i]);
    }
    // alert(sum);

    total.textContent = sum;

    return sum;
}

totButton .addEventListener('click', add);

addButton.addEventListener('click', () => { 
    const title = document.createElement('input');
    const val = document.createElement('input');
    title.className = 'title';
    val.className = 'val';
    const newItem = document.createElement('div');
    newItem.className = 'item';

    newItem.appendChild(title);
    newItem.appendChild(val);
    itemHolder.appendChild(newItem);
})