export default {
    ingreso_name : 'holi',
    ingreso_valor: 6665100055,
    ingreso_total: 0,
    // ingreso_porcentaje(){
    //   let porcentaje = this.ingreso_valor * 100 / this.ingreso_total;
    //   return porcentaje
    // },

    showEngreso(){
        document.querySelector('#egresos_table').insertAdjacentHTML('beforeend',`
        <div>${this.ingreso_name}</div>
        <div class="d-flex text-end">
          <div class="bg-danger w-auto text-end ms-3">${this.ingreso_valor}</div>
          <div class="bg-danger w-auto text-end ms-3">25%</div>
        </div>
        <div id="borrar_data"><i class="fa-solid fa-xmark "></i></div>
      `)
    }
}