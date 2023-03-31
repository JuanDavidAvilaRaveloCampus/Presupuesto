let ws_componente = {
    
    data: {
        presupuesto : 0,
        total: {
            ingreso: {
                total_ingreso : 0,
                porcentaje_ingreso : 0,
            },
            egreso: {
                total_engreso: 0,
                porcentaje_engreso : 0,
            }
        },


    },


    data_presupuesto(p1) {
        return`
        <div class="contianer p-1 bg-secondary d-grid text-center tamaño">
            <div class="d-flex flex-column p-3 gap">
                <span>Presupuesto disponible</span>
                <h1 id="total_presupuesto">${this.data.presupuesto}</h1>
            </div>
            <div class="d-grid ">
                <button class="btn btn-primary btn_height m-1 d-flex justify-content-around">
                    <span id="total_ingresos">${this.data.total.ingreso.total_ingreso}</span>
                    <span id="porcentaje_total_igresos">${this.data.total.ingreso.porcentaje_ingreso}</span>
                </button>
                <button class="btn btn-primary btn_height m-1 d-flex justify-content-around">
                    <span id="total_engresos">${this.data.total.egreso.total_engreso}</span>
                    <span id="porcentaje_total_egresos">${this.data.total.egreso.porcentaje_engreso}</span>
                </button>
            </div>
        </div>
        `
    },

    historial_ingresos_egresos (){

    }
}