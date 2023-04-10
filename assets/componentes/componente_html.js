import config from "../config/config.js";

let total_data_ingreso = config.estructura_data.data_ingreso;
let total_data_egreso = config.estructura_data.data_egreso;


let total_ingresos = config.estructura_data.ingreso;
let total_egresos = config.estructura_data.egreso;
let data_presupuesto = config.estructura_data.presupuesto;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let data_name = document.querySelector('#data_name'); //almacena el valor del name

    let data_amout = document.querySelector('#data_amout'); //alamcena la cantidad numérica de la data 

    let data_formulario = Object.fromEntries(new FormData(e.target)).option; // ingreso o egreso

    
    // console.log(data_formulario);
    //detecta el value en los inputs
    if (data_formulario == 'ingreso' && data_name.value != '') {
        total_data_ingreso.unshift([data_name.value,data_amout.value]);
        // console.log(total_data_ingreso);

        document.querySelector('#tabla_ingreso').insertAdjacentHTML("beforeend",`
        <tr class="position-relative">
            <td class="container-fluid d-flex justify-content-between ">
                <div>${total_data_ingreso[0][0]}</div>
                <div>${total_data_ingreso[0][1]}</div>
                <div id="div_hover">25%</div>
            </td>
            <div id="btn-btn_eliminar_egreso" class="position-absolute end-0 text-danger"><i class="fa-solid fa-xmark"></i></div>
        </tr>
        `);
        
        mostrar_ingreso();
        

    } else if (data_formulario == 'egreso' && data_name.value != '') {
        total_data_egreso.unshift([data_name.value,data_amout.value]);
        
        // console.log(config.estructura_data.data_egreso);
        // console.log(total_data_egreso);
        document.querySelector('#tabla_egreso').insertAdjacentHTML("beforeend",`
        <tr class="position-relative">
            <td class="container-fluid d-flex justify-content-between ">
                <div>${total_data_egreso[0][0]}</div>
                <div>${total_data_egreso[0][1]}</div>
                <div id="div_hover">25%</div>
            </td>
            <div id="btn-btn_eliminar_egreso" class="position-absolute end-0 text-danger"><i class="fa-solid fa-xmark"></i></div>
        </tr>
        `);

        mostrar_egreso();

    } else {
        alert('El nombre del ingreso o su valor, no están especificados')
    }
});

function mostrar_ingreso () {
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 1; j++) {
            total_ingresos += parseInt(total_data_ingreso[0][1]);

            if  (total_data_ingreso.length < 1){
                total_ingresos += parseInt(total_data_ingreso[1][1]);
            };
            console.log(`soy el log del final de la funcion y la data que debo mostrar es ${total_ingresos}`);

            document.querySelector('#ingreso_total').textContent = `$${total_ingresos}`;

            document.querySelector('#presupuesto').textContent = `$${total_ingresos - total_egresos}`;
        };
    };
};

function mostrar_egreso() {
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 1; j++) {
            total_egresos += parseInt(total_data_egreso[0][1]);

            if  (total_data_egreso.length < 1){
                total_egresos += parseInt(total_data_egreso[1][1]);
            };  
                console.log('soy egreso ' + total_egresos);
                
                document.querySelector('#egreso_total').textContent = `$${total_egresos}`;

                document.querySelector('#presupuesto').textContent = `$${total_ingresos - total_egresos}`;
        };
    };
}


export default {
    show_html() {
        let show_presupuesto = document.querySelector('#show_presupuesto').insertAdjacentHTML('beforeend', `
        <div class="mt-4 d-flex flex-column container-fluid text-white">
                <span>Presupuesto Disponible</span>
                <h2 id= "presupuesto">$0</h2>
            </div>
            <div class="container-fluid  bajar_contador posicionar_div px-0">
                <div class="container-fluid d-flex justify-content-between py-2 ingresos">
                    <span class="text-dark"><b>INGRESOS</b></span>
                    <span class="text-white" id="ingreso_total">$0</span>
                </div>
            <div class="d-flex">
                <div class="container-fluid d-flex py-2 mt-3 egresos justify-content-between">
                    <span class=""><b>EGRESOS</b></span>
                    <div>
                        <span id="egreso_total">$0</span>
                    </div>
                </div>
                <span class="ms-5 position-absolute span text-white" id="porcentaje_egreso_total">-6.09%</span>
            </div>
        </div>
        `);
    }
};









