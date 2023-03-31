export default {
    presupuesto_dispoinible : 1500000,
    ingresos_totales: {
        ingresos_valor : 50225500,
        porcentaje_ingresos: 20,
    },
    egresos_totales : {
        egresos_valor: 654000,
        porcentaje_egresos: 12,
    },

    showTotal(){
        document.querySelector('#valor').insertAdjacentHTML('beforeend',`
        
        <div class="contianer p-1 bg-secondary d-grid text-center tamaño">
            <div class="d-flex flex-column p-3 gap">
                <span>Presupuesto disponible</span>
                <h1 id="total_presupuesto">${this.presupuesto_dispoinible}</h1>
            </div>
            <div class="d-grid ">
                <button class="btn btn-primary btn_height m-1 d-flex justify-content-around">
                    <span id="total_ingresos">${this.ingresos_totales.ingresos_valor}</span>
                    <span id="porcentaje_total_igresos">${this.ingresos_totales.porcentaje_ingresos}%</span>
                </button>
                <button class="btn btn-primary btn_height m-1 d-flex justify-content-around">
                    <span id="total_engresos">${this.egresos_totales.egresos_valor}</span>
                    <span>${this.egresos_totales.porcentaje_egresos}%</span>
                </button>
            </div>
        </div>
        
        `)
    }
}