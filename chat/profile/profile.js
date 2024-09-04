document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const picture = document.getElementById('picture').src;

    // Aquí podrías agregar la lógica para guardar los datos, como enviarlos a un servidor o almacenarlos localmente

    alert('Los cambios se han guardado correctamente.');

    // Redirigir a la página principal (opcional)
    window.location.href = 'index.html';
});

document.getElementById("picture-selection").addEventListener("change", function(e) {
    e.preventDefault();

    const picturePreview = document.getElementById("picture")
    const fileReader = new FileReader()
    fileReader.readAsDataURL(e.target.files[0])
    fileReader.addEventListener("load", (frEvent) => {
        picturePreview.setAttribute("src", frEvent.target.result)
    })
})