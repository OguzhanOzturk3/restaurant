

function page(){

    const content = document.getElementById("content");
    const yazici = document.createElement("p");
    yazici.textContent = "Deneme";
    content.appendChild(yazici);

}
export default page;