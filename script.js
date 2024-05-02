//Codigo temporal mayormente realizado con ia
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('productForm');
    const productNameInput = document.getElementById('productName');
    const categorySelect = document.getElementById('category');
    const productPriceInput = document.getElementById('productPrice');
    const productCodeInput = document.getElementById('productCode');
    const additionalFieldsDiv = document.getElementById('additionalFields');

    const categorias = ["Instrumento", "Accesorios",];

    function addAdditionalFields(category) {
        additionalFieldsDiv.innerHTML = ''; 

        if (category === 'Instrumento') {
            const InstrumentoFields = `
                <div class="form-group">
                    <label for="shade">Marca</label>
                    <input type="text" class="form-control" id="shade" placeholder="Ingrese la Marca">
                </div><br>
                <div class="form-group">
                    <label for="finish">Descripcion</label>
                    <input type="text" class="form-control" id="finish" placeholder="Ingrese la Descripcion">
                </div><br>
                
            `;
            additionalFieldsDiv.innerHTML = InstrumentoFields;
        } else if (category === 'Accesorios') {
            const AccesoriosPielFields = `
            <div class="form-group">
            <label for="shade">Marca</label>
            <input type="text" class="form-control" id="shade" placeholder="Ingrese la Marca">
        </div><br>
        <div class="form-group">
            <label for="finish">Descripcion</label>
            <input type="text" class="form-control" id="finish" placeholder="Ingrese la Descripcion">
        </div><br>
            `;
            additionalFieldsDiv.innerHTML = AccesoriosFields;
        
        }
    }

   
    categorySelect.addEventListener('change', function() {
        addAdditionalFields(this.value);
    });

   
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        if (productNameInput.value.trim() === '') {
            alert('Por favor, ingrese el nombre del producto.');
            productNameInput.focus();
            return;
        }

        if (categorySelect.value === 'Seleccionar categoría') {
            alert('Por favor, seleccione una categoría.');
            categorySelect.focus();
            return;
        }

        if (productPriceInput.value.trim() === '' || parseFloat(productPriceInput.value) <= 0) {
            alert('Por favor, ingrese un precio válido para el producto.');
            productPriceInput.focus();
            return;
        }

        if (productCodeInput.value.trim() === '') {
            alert('Por favor, ingrese el código del producto.');
            productCodeInput.focus();
            return;
        }

       

        // Si todo está bien, enviar el formulario
        alert('¡Producto registrado con éxito!');
        form.reset(); // Limpiar campos
        additionalFieldsDiv.innerHTML = ''; 
    });

    document.getElementById("registroLink").addEventListener("click", function(event){
        event.preventDefault(); 
        window.open("registro.html", "_self"); 
    });

    document.getElementById("indexLink").addEventListener("click", function(event){
        event.preventDefault(); 
        window.open("index.html", "_self"); 
    });
    document.getElementById("infoLink").addEventListener("click", function(event){
        event.preventDefault(); 
        window.open("info.html", "_self"); 
    });
    document.getElementById("ProductosLink").addEventListener("click", function(event){
        event.preventDefault(); 
        window.open("productos.html", "_self"); 
    });
});
document.getElementById('whatsapp-button').addEventListener('click', function() {
    
    window.open('https://wa.me/573215264527', '_blank');
  });
  
