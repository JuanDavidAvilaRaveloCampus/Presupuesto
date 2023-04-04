export default {
    data_component (){
        localStorage.setItem("myComponent", JSON.stringify({
            data:{     
                contador: "",
                ingresos: {                 
                    contador: "",
                    data: []                    
                },
                egresos: {
                    contador: "",
                    porcentaje: 0,
                    
                    info:[{
                        datos:[
                            
                        ],
                        porcentajes: [

                        ]
                    }
                        
                    ],
                    
                    datos: [
                        
                        
        
                    ]
                }
        
                
        
            },
            
        }))
    }
}