import config from "../config/config.js";

const worker = new Worker('worker/worker.js', {type: "module"});

let total_data_ingreso = config.estructura_data.data_ingreso;
let total_data_egreso = config.estructura_data.data_egreso;

let porcentaje = 0;

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
        // console.log(total_data_ingreso);
        total_data_ingreso.unshift([data_name.value, data_amout.value]);

        worker.postMessage({
            module: "mostrar_ingreso", data: {
                total_ingresos: total_ingresos,
                total_data_ingreso: total_data_ingreso,
            }
            
        },console.log('jumm'))

        worker.addEventListener('message', (e) => {
            let doc = new DOMParser().parseFromString(e.data, 'text/html')
            document.querySelector('#ingreso_total').append(...doc.body.children);

            console.log(doc);

            let name = doc[0][0];
            let number = doc[0][1];
            let new_number = Number(number).toLocaleString();

            document.querySelector('#tabla_ingreso').insertAdjacentHTML("beforeend", `
                <tr class="position-relative">
                    <td class="container-fluid d-flex justify-content-between ">
                        <div>${name}</div>
                        <div>${new_number}</div>
                        <div id="div_hover" class="text-success">${total_data_ingreso[0][2]}%</div>
                    </td>
                    <div id="btn-btn_eliminar_egreso" class="position-absolute end-0 text-danger"><i class="fa-solid fa-xmark"></i></div>
                </tr>
            `);
        });


        // mostrar_ingreso();



    } else if (data_formulario == 'egreso' && data_name.value != '') {
        total_data_egreso.unshift([data_name.value, data_amout.value]);
        console.log(config.estructura_data.data_egreso);

        // mostrar_egreso();

        let number = total_data_egreso[0][1];
        let new_number = Number(number).toLocaleString();

        // console.log(config.estructura_data.data_egreso);
        // console.log(total_data_egreso);
        document.querySelector('#tabla_egreso').insertAdjacentHTML("beforeend", `
        <tr class="position-relative">
            <td class="container-fluid d-flex justify-content-between ">
                <div>${total_data_egreso[0][0]}</div>
                <div>${new_number}</div>
                <div id="div_hover" class="text-danger">${total_data_egreso[0][2]}%</div>
            </td>
            <div id="btn-btn_eliminar_egreso" class="position-absolute end-0 text-danger"><i class="fa-solid fa-xmark"></i></div>
        </tr>
        `);

    } else {
        alert('El nombre del ingreso o su valor, no están especificados')
    }
});




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
                <span class="ms-5 position-absolute span text-white" id="porcentaje_egreso_total">0%</span>
            </div>
        </div>
        `);
    }
};
