document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#confirm").addEventListener("click", () => {
        let texto = document.querySelector('#texto').value;

        if(texto==""){
            document.querySelector('#resultado').innerHTML ="por favor digite algo"   
        }else{

            document.querySelector('#resultado').innerHTML = caixaAuta(texto);
        }

         
    })




    function caixaAuta( text = String){

        return text.toUpperCase();
        
    }

})