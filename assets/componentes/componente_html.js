import config from "../config/config.js";


export default {
    show_data() {

        let presupuesto = 1;
        
        let mostrar_presupuesto = document.querySelector('#presupuesto');

        if (localStorage.data) { // localStorage.(nombre con el que se guardó la data en el storage)
        } else {
            config.storage();
        };

        document.querySelector('#formulario').addEventListener('submit', (e) => {

            e.preventDefault();

            let data_form = Object.fromEntries(new FormData(e.target));

            let storage = JSON.parse(localStorage.getItem('data')); //trae data storage 

            if (data_form.option == 'ingreso' && data_form.name != '' && data_form.valor != '') {

                storage.estructura_data.data_ingreso.unshift(data_form);
                
                storage.estructura_data.data_ingreso.map((val,id)=>{
                    
                    presupuesto += Number(val.valor)
                    
                    console.log(presupuesto);
                });

            } else {
                storage.estructura_data.data_egreso.unshift(data_form);
            };

            mostrar_presupuesto.append(presupuesto);
            localStorage.setItem('data', JSON.stringify(storage));

            /*
            * option_select : valor del select = ingreso || egreso
            * option_name : valor del name ingresado en el input
            * option_valor : valor del input type:"number"
            */

            // console.log({ option_select: data_form.option });
            // console.log({ option_name: data_form.name });
            // console.log({ option_select: data_form.valor });
        })
    }
}