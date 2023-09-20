let sheetDB = [] ;

for(let i=0 ;i<rows ;i++){
    let sheetRow= [] ;
    for(let j=0 ;j<cols ;j++){
        let cellProp ={
            bold:false ,
            italic:false ,
            underline:false ,
            alignment:"left" ,
            fontFamily:"Times New Romen" ,
            fontSize:"14" ,
            fontColor:"#000000" ,
            BGColor:"#000000"
        }
        sheetRow.push(cellProp) ;
    }
    sheetDB.push(sheetRow) ;
}

let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".font-size-prop");
let fontFamily = document.querySelector(".font-family-prop");
let fontColor = document.querySelector(".font-color-prop");
let BGColor = document.querySelector(".BGcolor-prop");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0] ;
let centerAlign = alignment[1] ;
let rightAlign = alignment[2] ;

let activeColorProp = "#024566" ;
let inactiveColorProp = "#f3454g" ;

// Application of two way binding
// Attach property listeners on each event
bold.addEventListener("click" ,(e)=>{
    let address = addressBar.value ;
    let [cell ,cellProp] = activecell(address) ;
    // modification
    cellProp.bold = !cellProp.bold ; //negate the present value
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal" ; //UI change occured
    bold.style.backgroundColor = cellProp.bold ? activeColorProp :inactiveColorProp ;
})

function activecell(address){
    let [rid ,cid] = decodeRIDCIDfromAddress(address) ;
    // access cell and storage object
    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`) ;
    let cellProp = sheetDB[rid][cid] ;
    return [cell ,cellProp] ;
}

function decodeRIDCIDfromAddress(address){
    let rid = Number(address.slice(1)-1) ;
    let cid = Number(address.charCodeAt(0))-65 ;
    return [rid ,cid] ;
}
