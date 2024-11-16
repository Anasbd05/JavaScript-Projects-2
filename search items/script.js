let inputSearch = document.getElementById('search-input')

let lists = document.getElementById('lists')

let names = [
    "anas" , 
    "marwan" , 
    "marouane" , 
    'shobee' , 
    'figoshin' ,
    'omar ' ,
    'mohammed' ,
    'nouh' , 
    'adam' , 
    'issa',
    'ibrahim',
    'abuBakkar'
]
drawUI(names)

function drawUI(arr = []){
    const allItems = arr.map(name =>{
        return `<li>${name}</li>`
    })
    lists.innerHTML = allItems.join('')
}
// filter

inputSearch.addEventListener('input', (e)=>{
    let value = e.target.value.trim()

    const filterNames = names.filter(name =>{
        return name.includes(value)
    })
    if (filterNames.length === 0) {
        lists.innerHTML = `<h1>No items</h1>`
        return 
    }
    drawUI(filterNames)
})
