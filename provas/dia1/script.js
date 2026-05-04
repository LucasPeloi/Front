function revelar() {
 
    // Altera a imagem principal
    document.querySelector(".card-img-top").src = "img/_vinicius_junior.png";
 
    // Preenche os spans com as informações
    document.getElementById("Nome").innerHTML = "Vinícius Júnior <span class='badge text-bg-secondary'>9.5</span>";
    document.getElementById("Data_Nas").textContent = "12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent = "1,76 m";
    document.getElementById("Posição ").textContent = "Ponta-esquerda / Atacante";
 
    // Remove a classe placeholder e adiciona card-text
    document.getElementById("Data_Nas").classList.remove("placeholder");
    document.getElementById("Data_Nas").classList.add("card-text");
 
    document.getElementById("Alutra").classList.remove("placeholder");
    document.getElementById("Alutra").classList.add("card-text");
 
    document.getElementById("Posição").classList.remove("placeholder");
    document.getElementById("Posição").classList.add("card-text");
 
}
 
