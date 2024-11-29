function copyCode(code) {
    // Crea un elemento de texto temporal para copiar el código
    const tempInput = document.createElement('input');
    tempInput.value = code;
    document.body.appendChild(tempInput);
    
    // Selecciona el texto del input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand('copy');
    
    // Elimina el input temporal
    document.body.removeChild(tempInput);
    
    // Alerta o mensaje para el usuario
    alert("¡Código copiado! Usa el código " + code);
}
