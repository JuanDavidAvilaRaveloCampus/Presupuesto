
export let data = {
    
    mosrar_ingreso(p1) {
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 1; j++) {
    
                p1.total_ingresos += parseInt(p1.total_data_ingreso[0][1]);
    
                if (p1.total_data_ingreso.length < 1) {
                    p1.total_ingresos += parseInt(p1.total_data_ingreso[1][1]);
                };
            };

            //return total_ingresos
            return p1.total_ingresos

    
            // data_presupuesto = total_ingresos - total_egresos;
            // let new_presupuesto = data_presupuesto.toLocaleString();
            
            // document.querySelector('#presupuesto').textContent = `$${new_presupuesto}`;
    
        };
    
        //muestra todos los porcentajes
        total_data_ingreso.forEach((item, i ,ar)=>{
            console.log(i);
            let porcentaje_ingreso = total_data_ingreso[i][1] * 100 / Number(total_ingresos);
            let new_data = Math.round(porcentaje_ingreso);
    
            total_data_ingreso[i].splice(2,total_data_ingreso.length - 2, new_data);
            
            // console.log(total_data_ingreso[i][1]);
            console.log(ar);
            console.log(total_ingresos);
    
        });
    },

    imprimir_Data_ingreso() {
    
        
            
    },

    mostrar_egreso() {
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 1; j++) {
                total_egresos += parseInt(total_data_egreso[0][1]);
    
                if (total_data_egreso.length < 1) {
                    total_egresos += parseInt(total_data_egreso[1][1]);
                };
    
            };
            imprimir_Data_egreso();
        };
        total_data_egreso.forEach((item, i ,ar)=>{
            let data = total_data_egreso[i][1] * 100 / Number(total_egresos);
    
            let new_data = Math.round(Number(data))
    
            console.log(total_data_egreso[i][1]);
            console.log(total_egresos);
            console.log(data);
            console.log(total_data_egreso[i]);
    
            total_data_egreso[i].push(new_data);
        });
    },

    imprimir_Data_egreso() {
        //imprime valor total del egreso
        document.querySelector('#egreso_total').textContent = `$${total_egresos}`;
    
        //imprime valor total del presupuesto según el ingreso y egreso
        data_presupuesto = total_ingresos - total_egresos;
    
        let new_presupuesto = data_presupuesto.toLocaleString();
    
        document.querySelector('#presupuesto').textContent = `$${new_presupuesto}`;
        
        //porcentaje total
        let porcentaje_egreso_total = (total_egresos * 100) / total_ingresos;
    
        let new_porcentaje = Math.round( porcentaje_egreso_total );
    
        
        //imprime el porcentaje total
        document.querySelector('#porcentaje_egreso_total').textContent = `${new_porcentaje}%`
    }
};

self.addEventListener('message',(e)=>{
    postMessage(data[`${e.module}`](e.data))
});