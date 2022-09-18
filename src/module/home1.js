


function home1(){

    const content = document.getElementById("content");
    const home_div = document.createElement("div");
    const div1 =document.createElement("div");
  

    const h1_write = document.createElement("h1");
    const p_write = document.createElement("p");

    div1.classList.add("main_write");

    

    home_div.classList.add("main-content");
    
    
    h1_write.textContent= "Master Chefs for Special Peoples";
    p_write.textContent="The only restaurant to receive a Michelin star 5 times in a row"

    div1.appendChild(h1_write);
    div1.appendChild(p_write);
    home_div.appendChild(div1)

    content.appendChild(home_div);
}

export default home1;