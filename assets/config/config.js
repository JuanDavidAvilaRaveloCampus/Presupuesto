export default {
    showData() {
        return {
            ingreso_total: [{
                name_ingreso_total: '',
                amount_ingreso_total: 0,
            }],
            egreso_total: [{
                name_egreso_total: '',
                amount: 0,
            }],
            tabla: {
                ingreso: [{
                    name_data: '',
                    amount_data: 0,
                }],
                egreso: [{
                    name_data: '',
                    amount_data: '',
                }]
            }
        }
    }
}