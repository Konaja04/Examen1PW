
let matriz_juego0= []
let matriz_juego1= []
function llenar_matriz_Juego(){
    for(let i=0; i<8;i++){
        for(let j=0; j<8;j++){
            casilla = {
                isShowed : false,
            }
            matriz_juego0.push(casilla)
        }
    }
    for(let i=0; i<8;i++){
        for(let j=0; j<8;j++){
            casilla = {
                isShowed : false,
            }
            matriz_juego1.push(casilla)
        }
    }
}
function devolverCasilla(table,row,col){
    const pos = row * 8 + col
    if (table == 0){
        return matriz_juego0[pos]
    }
    else{
        
        return matriz_juego1[pos]
    }
}
function limpiar(){
    for(let i=0; i<8;i++){
        for(let j=0; j<8;j++){
            const casilla = devolverCasilla(0,i,j)
            casilla.isShowed = false
        }
    }
    for(let i=0; i<8;i++){
        for(let j=0; j<8;j++){
            const casilla = devolverCasilla(1,i,j)
            casilla.isShowed = false
        }  
    }
}
function onTapButton(table, row, col){
    limpiar()
    //casillas de en medio (row > 0 && row <7)
    if (row>0 && row<7 && col>0 && col<7){
        const casillaC = devolverCasilla(0,row,col)
        const casilla2 = devolverCasilla(0,row-1,col)
        const casilla4 = devolverCasilla(0,row,col-1)
        const casilla5 = devolverCasilla(0,row,col+1)
        const casilla7 = devolverCasilla(0,row+1,col)
        casillaC.isShowed = true
        casilla2.isShowed = true
        casilla4.isShowed = true
        casilla5.isShowed = true
        casilla7.isShowed = true
    }
    //superiores medio
    if (row==0 && col>0 && col<7){
        const casillaC = devolverCasilla(0,row,col)
        const casilla1 = devolverCasilla(0,row,col-1)
        const casilla2 = devolverCasilla(0,row,col+1)
        const casilla4 = devolverCasilla(0,1,col)
        casillaC.isShowed = true
        casilla1.isShowed = true
        casilla2.isShowed = true
        casilla4.isShowed = true
    }
    //inferiores medio
    if (row==7 && col>0 && col<7){
        const casillaC = devolverCasilla(0,row,col)
        const casilla1 = devolverCasilla(0,row,col-1)
        const casilla2 = devolverCasilla(0,row,col+1)
        const casilla3 = devolverCasilla(0,row,col-1)
        const casilla4 = devolverCasilla(0,row-1,col)
        casillaC.isShowed = true
        casilla1.isShowed = true
        casilla2.isShowed = true
        casilla3.isShowed = true
        casilla4.isShowed = true
    }
    //izquierda medio
    if (col==0 && row>0 && row<7){
        const casillaC = devolverCasilla(0,row,col)
        const casilla1 = devolverCasilla(0,row-1,col)
        const casilla2 = devolverCasilla(0,row+1,col)
        const casilla3 = devolverCasilla(0,row,col+1)
        casillaC.isShowed = true
        casilla1.isShowed = true
        casilla2.isShowed = true
        casilla3.isShowed = true
    }
    //derecha medio
    if (col==7 && row>0 && row<7){
        const casillaC = devolverCasilla(0,row,col)
        const casilla1 = devolverCasilla(0,row-1,col)
        const casilla2 = devolverCasilla(0,row+1,col)
        const casilla3 = devolverCasilla(0,row,col-1)
        casillaC.isShowed = true
        casilla1.isShowed = true
        casilla2.isShowed = true
        casilla3.isShowed = true
    }
    //esquinas
    if (row==0 && col == 0){
        const casillaC = devolverCasilla(0,row,col)
        const casilla1 = devolverCasilla(0,row,col+1)
        const casilla2 = devolverCasilla(0,row+1,col)
        casillaC.isShowed = true
        casilla1.isShowed = true
        casilla2.isShowed = true
    }
    if (row==0 && col == 7){
        const casillaC = devolverCasilla(0,row,col)
        const casilla1 = devolverCasilla(0,row,col-1)
        const casilla2 = devolverCasilla(0,row+1,col)
        casillaC.isShowed = true
        casilla1.isShowed = true
        casilla2.isShowed = true
    }
    if (row==7 && col == 0){
        const casillaC = devolverCasilla(0,row,col)
        const casilla1 = devolverCasilla(0,row,col+1)
        const casilla2 = devolverCasilla(0,row-1,col)
        casillaC.isShowed = true
        casilla1.isShowed = true
        casilla2.isShowed = true
    }
    if (row==7 && col == 7){
        const casillaC = devolverCasilla(0,row,col)
        const casilla1 = devolverCasilla(0,row,col1)
        const casilla2 = devolverCasilla(0,row-1,col)
        casillaC.isShowed = true
        casilla1.isShowed = true
        casilla2.isShowed = true
    }
    pintar()
}
function pintar(){
    for(let i=0; i<8;i++){
        for(let j=0; j<8;j++){
            const casilla = devolverCasilla(0,i,j)
            const but = document.getElementById(0+'_'+i+'_'+j)
            const but2 = document.getElementById(1+'_'+(7-i)+'_'+(7-j))
            if (casilla.isShowed){
                console.log(0+'_'+i+'_'+j)
                console.log(1+'_'+(7-i)+'_'+(7-j))
                
                but.innerHTML = 'X'
                but2.innerHTML = 'X'
            }
            else{
                but.innerHTML = '&nbsp'
                but2.innerHTML = '&nbsp'
            }
        }
    }
}
function main(){
    llenar_matriz_Juego()
    pintar()
}


main()