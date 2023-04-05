import config from "./assets/config/config.js"; //NUNCA OLVIDAR EL PUNTO (.JS) PARA REFERENCIAR QUE ES UN ARCHIVO DE JAVASCRIPT
export default{
    showData(){
        let formulario = document.querySelector('#formulario');
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            let mostrar_data_config = config.showData(); 
            let data_formulario = Object.fromEntries(new FormData(e.target)).option; // ingreso o egreso
            //para pushear datos de un formulario dentro de un array, es necesario capturar la data del formulario dentro del evento de escucha, si no, no va a funcionar
            if (data_formulario == 'ingreso') {
                 //nombre del dato
                mostrar_data_config.tabla.ingreso[0].name_data = document.querySelector('#data_name').value;
                mostrar_data_config.tabla.ingreso[0].amount_data = document.querySelector('#data_amout').value; //valor del dato
                console.log('soy ingreso' + (mostrar_data_config.tabla.ingreso[0].name_data = document.querySelector('#data_name').value),(mostrar_data_config.tabla.ingreso[0].amount_data = document.querySelector('#data_amout').value));
            } else if (data_formulario == 'egreso') {
                mostrar_data_config.tabla.egreso[0].name_data = document.querySelector('#data_name').value;
                mostrar_data_config.tabla.egreso[0].amount_data = document.querySelector('#data_amout').value; //valor del dato
                console.log( 'soy egreso' + (mostrar_data_config.tabla.egreso[0].name_data = document.querySelector('#data_name').value),(mostrar_data_config.tabla.egreso[0].amount_data = document.querySelector('#data_amout').value));
            }
            // console.log(options);
            // console.log(data_name);
            // console.log(data_amout.number);
        })
    }
}