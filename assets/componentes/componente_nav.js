export default {
    showNav(){
        document.querySelector('#nav').insertAdjacentHTML('beforeend',`
        <ul class="nav justify-content-center bg-danger">
            <li class="nav-item">
                <form class="d-flex ingreso_data" role="search">
                    <!-- seleccionar + || - -->
                    <select name="option" id="option">
                        <option value="ingreso">Ingreso</option>
                        <option value="egreso">Egreso</option>
                    </select>
                    <!-- Ingresar data -->
                    <input class="me-2 input_ancho" type="search" placeholder="Ingresos" aria-label="Search">
                    <input type="number" class="nimodo">
                    <!-- falta quitar los botones de subir y bajar -->
                    <button class="rounded-circle btn_check" type="submit"><i
                            class="fa-solid fa-check"></i></button>
                </form>
            </li>
        </ul>
        `)
    }
}