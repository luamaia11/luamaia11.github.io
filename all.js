const selectAtletas = document.querySelector('.select-atletas');
atletas.forEach((atleta) => {
    const option = document.createElement('option');
    option.value = atleta.id;
    option.textContent = atleta.nome;
    selectAtletas.appendChild(option);
});
