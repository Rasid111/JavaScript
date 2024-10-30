let list = document.querySelectorAll('#list li');
let listArray = Array.from(list, li => li.innerText)
listArray.sort((first, second) => Number(first) - Number(second))
console.log(listArray)
for(let i = 0; i < list.length; i++){
    list[i].innerText = listArray[i]
}