export default {
    
    storage(){
        localStorage.setItem('data',JSON.stringify({ //envia data storage //el nombre de la data en el storage es 'data'
            estructura_data : {
                data_ingreso: [],
                data_egreso: [],
            }
        }));
    }
}