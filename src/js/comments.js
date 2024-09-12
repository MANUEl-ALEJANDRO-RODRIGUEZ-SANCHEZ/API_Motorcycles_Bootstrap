const commentsFilePath = './src/data/comments.json';

// Consultar comentarios
export async function fetchComments() {
    const url = 'https://api.jsonbin.io/v3/b/66e25cc2e41b4d34e42de3e6';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$Pv2VFx66pKTj8yf87sbQB.tEzIfPm/vzCYTcsiMHQtbzaDRc8z11q' 
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data.record;  // Esto contiene los comentarios actuales
    } else {
        console.error('Error fetching comments:', response.statusText);
        return [];
    }



}

// Insertar comentario
export async function addComment(name, comment) {
    try {
        // Obtener los comentarios actuales
        const comments = await fetchComments();

        if (!Array.isArray(comments)) {
            throw new Error('Formato de comentarios incorrecto');
        }

        // Agregar el nuevo comentario al arreglo
        comments.push({ nombre: name, comentario: comment });

        // Enviar el arreglo actualizado con el nuevo comentario
        const url = 'https://api.jsonbin.io/v3/b/66e25cc2e41b4d34e42de3e6';
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2a$10$Pv2VFx66pKTj8yf87sbQB.tEzIfPm/vzCYTcsiMHQtbzaDRc8z11q',  
                'X-Bin-Versioning': 'false'  
            },
            body: JSON.stringify(comments)  // Mandamos todo el arreglo actualizado
        });

        if (response.ok) {
            alert('Comentario agregado con éxito');
            return true;
        } else {
            console.error('Error adding comment:', response.statusText);
            return false;
        }
    } catch (error) {
        console.error('Error adding comment:', error);
        alert('Error adding comment:', error);
        return false;
    }
}
