function revelar() {
 
    document.querySelector(".card-img-top").src = "https://lucaspeloi.github.io/Front/provas/dia1/img/viniciusjunior.png";
 
    document.getElementById("Nome").innerHTML = "Vinícius Júnior <span class='badge text-bg-secondary'>9,5</span>";
 
    document.getElementById("Data_Nas").textContent = "Nascimento: 12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent = "Altura: 1,76 m";
    document.getElementById("Posição").textContent = "Posição: Ponta-esquerda / Atacante";
 
    document.getElementById("Data_Nas").classList.remove("placeholder");
    document.getElementById("Data_Nas").classList.add("card-text");
 
    document.getElementById("Alutra").classList.remove("placeholder");
    document.getElementById("Alutra").classList.add("card-text");
 
    document.getElementById("Posição").classList.remove("placeholder");
    document.getElementById("Posição").classList.add("card-text");
 
}
 
