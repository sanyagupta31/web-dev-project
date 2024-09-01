let saveel = document.getElementById("save-el")
let countel = document.getElementById("count-el")


let count = 0
console.log(saveel)
function increment(){
    
    count = count + 1
    countel.innerText = count
    
}
function save(){
    let SAVE = count +" - "
    saveel.textContent += SAVE
    countel.textContent = 0 
    count = 0
}

