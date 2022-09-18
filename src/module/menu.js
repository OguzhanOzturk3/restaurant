


function menu(){
    const content = document.getElementById("content");
    const menu_div = document.createElement("div");
    const menu_header = document.createElement("div");
    const menu_item = document.createElement("div");

    //

    const item_h = document.createElement("h1");
    const item_p = document.createElement("p");
    const item_h1 = document.createElement("h1");
    const item_p1 = document.createElement("p");
    const item_h2 = document.createElement("h1");
    const item_p2 = document.createElement("p");
    const item_h3 = document.createElement("h1");
    const item_p3 = document.createElement("p");
    const item_h4 = document.createElement("h1");
    const item_p4 = document.createElement("p");
    const item_h5 = document.createElement("h1");
    const item_p5 = document.createElement("p");


    //

    item_h.textContent ="Ramen"
    item_p.textContent ="35$"
    item_h1.textContent ="Fettuccine"
    item_p1.textContent ="15$"
    item_h2.textContent ="French Onion Soup"
    item_p2.textContent ="35$"
    item_h3.textContent ="Ratatouille"
    item_p3.textContent ="15$"
    item_h4.textContent ="Kuru Fasulye Pilav"
    item_p4.textContent ="35$"
    item_h5.textContent ="Risotto"
    item_p5.textContent ="15$"

   

    const item = document.createElement("div");
    const item1 = document.createElement("div");
    const item2 = document.createElement("div");
    const item3 = document.createElement("div");
    const item4 = document.createElement("div");
    const item5 = document.createElement("div");


    const img = document.createElement("img");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const img4 = document.createElement("img");
    const img5 = document.createElement("img");
    const menu1 = document.createElement("img");

    img.src="../image/ramen.jpg"
    img1.src="../image/Fettuccine.jpg"
    img2.src="../image/onion.webp"
    img3.src="../image/ratatouille.jpg"
    img4.src="../image/pilavkuru.jpg"
    img5.src="../image/risotto.webp"
    menu1.src="../image/menu.png"


    item.classList.add("item");
    item1.classList.add("item");
    item2.classList.add("item");
    item3.classList.add("item");
    item4.classList.add("item");
    item5.classList.add("item");

    menu_header.classList.add("menu-header");
    menu_item.classList.add("menu-item");
   

    const test1 = document.createElement("h1");
    test1.textContent ="MENU";



    item.appendChild(img);
    item1.appendChild(img1);
    item2.appendChild(img2);
    item3.appendChild(img3);
    item4.appendChild(img4);
    item5.appendChild(img5);

    item.appendChild(item_h);
    item.appendChild(item_p);
    item1.appendChild(item_h1);
    item1.appendChild(item_p1);
    item2.appendChild(item_h2);
    item2.appendChild(item_p2);
    item3.appendChild(item_h3);
    item3.appendChild(item_p3);
    item4.appendChild(item_h4);
    item4.appendChild(item_p4);
    item5.appendChild(item_h5);
    item5.appendChild(item_p5);

    menu_item.appendChild(item);
    menu_item.appendChild(item1);
    menu_item.appendChild(item2);
    menu_item.appendChild(item3);
    menu_item.appendChild(item4);
    menu_item.appendChild(item5);

    menu_header.appendChild(test1);
    menu_header.appendChild(menu1);
    menu_div.appendChild(menu_header);
    menu_div.appendChild(menu_item);
    menu_div.classList.add("main-menu");
    content.appendChild(menu_div);



}

export default menu;