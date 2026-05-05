function revelar() {
 
    // Troca a imagem placeholder pela foto do Vini Jr
    document.querySelector(".card-img-top").src = "dia1/img/_vinicius_junior.png";
 
    // Preenche o nome no h5 e o rank no span
    document.getElementById("Nome").innerHTML = "Vinícius Júnior <span class='badge text-bg-secondary'>9,5</span>";
 
    // Preenche os spans de informação
    document.getElementById("Data_Nas").textContent = "Nascimento: 12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent = "Altura: 1,76 m";
    document.getElementById("Posição ").textContent = "Posição: Ponta-esquerda / Atacante";
 
    // Remove placeholder e adiciona card-text
    document.getElementById("Data_Nas").classList.remove("placeholder");
    document.getElementById("Data_Nas").classList.add("card-text");
 
    document.getElementById("Alutra").classList.remove("placeholder");
    document.getElementById("Alutra").classList.add("card-text");
 
    document.getElementById("Posição ").classList.remove("placeholder");
    document.getElementById("Posição ").classList.add("card-text");
 
}
 
