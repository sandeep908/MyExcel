// console.log("Hello") ;
let rows =100 ;
let cols = 26 ;

let addressColCont = document.querySelector(".address-col-cont") ;
let addressRowCont = document.querySelector(".address-row-cont") ;
let cellCont = document.querySelector(".cells-cont") ;
let addressBar = document.querySelector(".address-bar") ;

for(let i=0 ;i<rows ;i++){
    let addressCol= document.createElement("div") ;
    addressCol.setAttribute("class" ,"col-count") ;
    addressCol.innerHTML =i+1;
    addressColCont.appendChild(addressCol) ;
}

for(let i=0 ;i<cols ;i++){
    let addressRow= document.createElement("div") ;
    addressRow.setAttribute("class" ,"row-count") ;
    addressRow.innerHTML =String.fromCharCode(65+i) ;
    addressRowCont.appendChild(addressRow) ;
}

for(let i=0 ;i<rows ;i++){
    let cellRow = document.createElement("div") ;
    cellRow.setAttribute("class" ,"cell-row") ;
    for(let j=0 ;j<cols ;j++){
        let cellCol = document.createElement("div") ;
        cellCol.setAttribute("class" ,"cell-col") ;
        cellCol.setAttribute("contenteditable" , "ture") ;
        cellCol.setAttribute("rid" ,i);
        cellCol.setAttribute("cid" ,j);
        cellCol.setAttribute("spellcheck" ,"false");
        cellRow.appendChild(cellCol) ;
        addListenerForAddressBar(cellCol ,i ,j) ;
    }
    cellCont.appendChild(cellRow) ;
}

function addListenerForAddressBar(cellCol ,i ,j){
    cellCol.addEventListener("click" ,(e)=>{
        let rowID = i+1 ;
        let colID = String.fromCharCode(65+j) ;
        addressBar.value = `${colID}${rowID}` ;
    })
}
let firstCell = document.querySelector(".cellCol") ;
firstCell.click() ;
