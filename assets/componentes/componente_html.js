import config from "../config/config.js";

export default {
    show_data() {

        //valores para pushear la data e
        let tabla_ingreso = document.querySelector('#tabla_ingreso');
        let tabla_egreso = document.querySelector('#tabla_egreso');

        //valores totales a mostrar en presupuesto
        let mostrar_presupuesto = document.querySelector('#presupuesto');
        let ingreso_total = document.querySelector('#ingreso_total');
        let egreso_total = document.querySelector('#egreso_total');
        let porcentaje_egreso_total = document.querySelector('#porcentaje_egreso_total');


        let egresos = 0;
        let ingresos = 0;

        //placebo
        ingreso_total.textContent = '$0';
        mostrar_presupuesto.textContent = '$0';
        egreso_total.textContent = '$0';

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
                //hasChildNodes verifica si tabla_ingreso tiene hijos
                if (tabla_ingreso.hasChildNodes()) {
                    while (tabla_ingreso.firstChild) {
                        tabla_ingreso.removeChild(tabla_ingreso.firstChild);
                    };
                };

                ingresos = 0;

                //saca el total de ingresos
                for (let i = 0; i < storage.estructura_data.data_ingreso.length; i++) {
                    ingresos += Number(storage.estructura_data.data_ingreso[i].valor);
                };

                storage.estructura_data.data_ingreso.map((val, id) => {
                    //crea el porcentaje para cada iteración segun el total
                    let a = porcentaje(ingresos, val.valor);
                    //imprime toda la data de la tabla correspondiente
                    document.querySelector('#tabla_ingreso').insertAdjacentHTML('beforeend', `
                        <tr class="position-relative">
                            <td class="container-fluid d-flex justify-content-between ">
                                <div>${val.name}</div>
                                <div>${val.valor}</div>
                                <div id="div_hover" class="text-success">${a}</div>
                            </td>
                            <div id="btn-btn_eliminar_egreso" class="position-absolute end-0 text-danger">
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </tr>
                    `)
                });

                //grafica_ingreso('hola',150);//

            } else if (data_form.option == 'egreso' && data_form.name != '' && data_form.valor != '') {
                storage.estructura_data.data_egreso.unshift(data_form);

                if (tabla_egreso.hasChildNodes()) {
                    while (tabla_egreso.firstChild) {
                        tabla_egreso.removeChild(tabla_egreso.firstChild);
                    };
                };

                egresos = 0;

                //saca el total de ingresos
                for (let i = 0; i < storage.estructura_data.data_egreso.length; i++) {
                    egresos += Number(storage.estructura_data.data_egreso[i].valor);
                };

                storage.estructura_data.data_egreso.map((val, id) => {
                    //asigna a "a" el porcentaje según el total de egresos
                    var a = porcentaje(egresos, val.valor);

                    document.querySelector('#tabla_egreso').insertAdjacentHTML('beforeend', `
                        <tr class="position-relative">
                            <td class="container-fluid d-flex justify-content-between ">
                                <div>${val.name}</div>
                                <div>${val.valor}</div>
                                <div id="div_hover" class="text-danger">${a}%</div>
                            </td>
                            <div id="btn-btn_eliminar_egreso" class="position-absolute end-0 text-danger">
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </tr>
                    `)
                });

                // grafica_egreso(val.name,val.valor);



            } else {
                alert('Por favor ')
            };

            let presupuesto = ingresos - egresos;

            mostrar_presupuesto.textContent = moneda(presupuesto);
            ingreso_total.textContent = moneda(ingresos);
            egreso_total.textContent = moneda(egresos);
            porcentaje_egreso_total.textContent = porcentaje(ingresos, egresos);
            /*
            muestra el presupuesto en pantalla por medio del textContent al ingreso_total
            el cual está enlazado con un id para que se imprima
            */

            localStorage.setItem('data', JSON.stringify(storage));

            /*
            * option_select : valor del select = ingreso || egreso
            * option_name : valor del name ingresado en el input
            * option_valor : valor del input type:"number"
            */

            //conversor a moneda
            function moneda(p) {
                return p.toLocaleString('en-EU', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true
                });

            }

            //crador de porcentajes
            function porcentaje(t, v) {
                let total = Number(t);
                let valor = Number(v);
                let porcentaje = valor * 100 / total;
                let sintaxis = porcentaje.toFixed(2);
                return sintaxis.toLocaleString('en-US') + "%";
            }
        });

        function grafica_ingreso(name, value){
            let grafica = echart.init(document.querySelector('#graficas'));

            let option = {
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [
                            120,
                            {
                                value: 200,
                                itemStyle: {
                                    color: '#a90000'
                                }
                            },
                        ],
                        type: 'bar'
                        
                    }
                ]
            }; 

            option.xAxis.data.push(name);
            option.series[0].data.push(value)
        };

        function grafica_egreso(name,value){

            let grafica = echarts.init(document.querySelector('#graficas'));

            let option = {
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [
                            {
                            },
                        ],
                        type: 'bar'
                        
                    }
                ]
            }; 

            option.xAxis.data.push(name);
            option.series[0].data.push({value : value,itemStyle: {color: '#a90000'}});

            grafica.setOption(option);
        };
    },
}

