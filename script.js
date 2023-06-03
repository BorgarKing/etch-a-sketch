const container= document.querySelector(".container")

function makeBlock(){
    const block=document.createElement('div')
    block.classList.add('block')
    block.style.border="thin solid black"
    return (block)
}

function makeRow(scale){    
    const row=document.createElement('div')
    row.classList.add('row')

    for (let x=0; x<scale; x++){
        row.appendChild(makeBlock())
    }
    
    return (row)
}

function makeGrid(scale){
    for (let y=0; y<scale; y++){
        container.appendChild(makeRow(scale))
    }
}

makeGrid(16)

