const commentsFilePath = './src/data/comments.json';

// Consultar comentarios
export async function fetchComments() {
    try {
        const response = await fetch(commentsFilePath);
        if (!response.ok) throw new Error('Error fetching comments');
        const comments = await response.json();
        return comments;
    } catch (error) {
        console.error('Failed to fetch comments:', error);
        return [];
    }
}

// Insertar comentario
export async function addComment(name, comment) {
    try {
        // Obtener los comentarios actuales
        const comments = await fetchComments();

        // Agregar el nuevo comentario al arreglo
        comments.push({ nombre: name, comentario: comment });

        // Enviar los comentarios actualizados al archivo json
        await fetch(commentsFilePath, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comments),
        });

        alert("Comentario agregado con exito");
        return true;
    } catch (error) {
        console.error('Error adding comment:', error);
        alert('Error adding comment:', error);
        return false;
    }
}
