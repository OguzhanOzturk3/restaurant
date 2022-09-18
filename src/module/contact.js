


function contact(){
    const content = document.getElementById("content");
    const contact_div = document.createElement("div");
    const contact_item = document.createElement("div");
    const contact_header = document.createElement("div");
    const contact_content = document.createElement("div");
    const b1 = document.createElement("div");
    const b2 = document.createElement("div");
    const contact_header1 = document.createElement("h1");
    const contat_phone = document.createElement("p");
    const contat_address = document.createElement("p");
    const map = document.createElement("img");
    const phone = document.createElement("img");
    const address = document.createElement("img");

    contact_header1.textContent ="Contact";
    contat_phone.textContent ="(241)457-96-42";
    contat_address.textContent ="Hollywood Boulevard 42, Los Angeles, USA";
    map.src="../image/map.png"
    phone.src="../image/phone.png"
    address.src="../image/address.png"

    phone.classList.add("small");
    address.classList.add("small");
    
    contact_div.classList.add("main-contact");
    contact_item.classList.add("contact-item");
    contact_header.classList.add("contact-header");
    contact_content.classList.add("contact-content");

    b1.classList.add("b1");
    b2.classList.add("b1");








    contact_header.appendChild(contact_header1);
    contact_item.appendChild(contact_header);
    contact_item.appendChild(contact_content);

    b1.appendChild(phone);
    b1.appendChild(contat_phone);
    b2.appendChild(address);
    b2.appendChild(contat_address);
    

    contact_content.appendChild(b1);
    contact_content.appendChild(b2);
    contact_content.appendChild(map);
    contact_div.appendChild(contact_item)

    contact_div.classList.add("main-contact");
    content.appendChild(contact_div);



}

export default contact;