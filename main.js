

    window.addEventListener("load", ()=>{
        getElements();
    })

    let textoAprocesar = document.getElementById("exampleFormControlTextarea1").value;
    let textoProcesado = procesarTexto(textoAprocesar);

    
    function mostrarTexto(){
        var txtProcesado = textoAprocesar;
        if(txtProcesado == ""){
         document.getElementById("contenedorTextoResultado").value= "Ingrese un texto...";
        } else {
            document.getElementById("contenedorTextoResultado").value= textoProcesado;
        }
        



    }
    function procesarTexto(input){
        var txt = [];
        var clave = ["A", "B", "C"];
        for( var i = 0; i < input.length; i++){
            var charCode = input.charCodeAt(i) ^ clave[i % clave.length].charCodeAt(0);
            txt.push(String.fromCharCode(charCode));
        }
        return txt.join("");
    
        }

        const btn = document.querySelector("button");
        btn.addEventListener("click", procesarTexto(textoAprocesar));








   
