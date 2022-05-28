const recebeParametro = (tipo:any):void => {
    switch(tipo){
        case "number":
            console.log("number")
            break;
        case "string":
            console.log("string")
            break;
        case "object":
            console.log("object")
            break;
        case "boolean":
            console.log("boolean")
            break;
        default:
            console.log("Não definido")
    }
}