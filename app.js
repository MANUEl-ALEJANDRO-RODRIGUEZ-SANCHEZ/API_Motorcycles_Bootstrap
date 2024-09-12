import getMotorcycle from "./src/js/api_moto.js";
import getImg from "./src/js/browser.js";
import { fetchComments, addComment } from "./src/js/comments.js";

const d = document;

// variables del formulario del buscador
const $form = d.getElementById('motoBrowser');
const $resultsParagraph = d.getElementById('resultBrowser');
const $resultImage = d.getElementById('img-browser');

// formulario de comentarios
const $contactForm = d.getElementById('contactForm');
const $commentsBox = d.querySelector('.comments-box');

// APIKEY para la API de las motocicletas
const APIKEY = 'reYE6P5VdYgStLWxkKRxuw==9INg4zu6A1cFfSqS';

// cargar comentarios al cargar el documento
d.addEventListener("DOMContentLoaded", async () => {
    if (!$commentsBox) return;

    const comments = await fetchComments();

    $commentsBox.innerHTML = comments.map(comment => `
        <p><strong>${comment.nombre}:</strong> ${comment.comentario}</p>
    `).join('');
});

// Manejar envio del formulario de comentarios
$contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Insertar el nuevo comentario
    if (name && comment) {
        const success = await addComment(name, comment);
        if (success) {
            // Limpiar formulario
            $contactForm.reset();

            // Recargar los comentarios
            const comments = await fetchComments();

            $commentsBox.innerHTML = comments.map(comment => `
                <p><strong>${comment.nombre}:</strong> ${comment.comentario}</p>
            `).join('');
        }
    }
});

// evento al envio del formulario
$form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let txtBrand = d.getElementById('txtBrand').value;
    let txtModel = d.getElementById('txtModel').value;
    $resultsParagraph.innerText = '';

    if(txtBrand === '' || txtModel === ''){
        $resultsParagraph.innerText = 'Favor de ingresar los datos solicitados';
    }else{
        let resultMotorcycle = await getMotorcycle(txtBrand, txtModel, APIKEY);
        if(resultMotorcycle === -1){
            // Error
            $resultsParagraph.innerHTML = '<ul><li><b>No se ha encontrado ningun resultado :(</b></li>';
        }else{
            // Mostrar resultados
            $resultsParagraph.innerHTML = `
                <ul>
                    <li><b>Marca:</b> ${resultMotorcycle.make}</li>
                    <li><b>Modelo:</b> ${resultMotorcycle.model}</li>
                    <li><b>Año:</b> ${resultMotorcycle.year}</li>
                    <li><b>Tipo:</b> ${resultMotorcycle.type}</li>
                    <li><b>Cilindrada:</b> ${resultMotorcycle.displacement}</li>
                    <li><b>Motor:</b> ${resultMotorcycle.engine}</li>
                    <li><b>HP:</b> ${resultMotorcycle.power}</li>
                    <li><b>Torque:</b> ${resultMotorcycle.torque}</li>
                    <li><b>Top de velocidad:</b> ${resultMotorcycle.top_speed}</li>
                    <li><b>Transmision:</b> ${resultMotorcycle.transmission}</li>
                    <li><b>Suspencion delantera:</b> ${resultMotorcycle.front_suspension}</li>
                    <li><b>Suspencion trasera:</b> ${resultMotorcycle.rear_suspension}</li>
                    <li><b>Llanta delantera:</b> ${resultMotorcycle.front_tire}</li>
                    <li><b>Llanta trasera:</b> ${resultMotorcycle.rear_tire}</li>
                    <li><b>Freno delantero:</b> ${resultMotorcycle.front_brakes}</li>
                    <li><b>Freno trasero:</b> ${resultMotorcycle.rear_brakes}</li>
                    <li><b>Peso en seco:</b> ${resultMotorcycle.dry_weight}</li>
                    <li><b>Altura del asiento:</b> ${resultMotorcycle.seat_height}</li>
                    <li><b>Alto:</b> ${resultMotorcycle.total_height}</li>
                    <li><b>Largo:</b> ${resultMotorcycle.total_length}</li>
                    <li><b>Ancho:</b> ${resultMotorcycle.total_width}</li>
                    <li><b>Capacidad de tanque:</b> ${resultMotorcycle.fuel_capacity}</li>
                    <li><b>Arranque:</b> ${resultMotorcycle.starter}</li>
                </ul>`;
            
            // Para mostrar la imagen de la moto buscada
            let query = `${txtBrand} ${txtModel}`;
            let resultImg;
            (async () => {
                resultImg = await getImg(query);
                if(resultImg === -1){
                    $resultImage.innerHTML = 'Sin imagenes disponibles';
                }else{
                    $resultImage.innerHTML = `<img src="${resultImg}" alt="${query}">`;
                }
            })();

            
        }
    }
});