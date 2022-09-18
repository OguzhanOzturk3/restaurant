
import home1 from './home1'
import menu1 from './menu'
import contact1 from './contact'

function header_button(){

    const content1 = document.getElementById("content");
    
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");
    const div_header = document.createElement("div");
    const rest_name = document.createElement("h1");

    const header_button = document.createElement("div");
    const header_name = document.createElement("div");

    //element.classList.contains(className);

  
    div_header.classList.add("div_header");

    header_button.classList.add("header_button");
    header_name.classList.add("header_name");

    rest_name.textContent="Ozi's Restaurant";

    home.textContent="Home";
    home.id ="home"
    

    menu.textContent="Menu";
    menu.id ="menu"

    contact.textContent="Contact";
    contact.id ="contact"


    home.addEventListener("click",displayHome);

    function displayHome(){
       
        const main_content = document.querySelector(".main-content");
        const main_menu = document.querySelector(".main-menu");
        const main_contact = document.querySelector(".main-contact");

        if(main_content){
            main_content.remove();

        }

        if(main_menu){
            main_menu.remove();

        }
        if(main_contact){
            main_contact.remove();

        }
        
          


        home1();
    }

    menu.addEventListener("click",displayHome1);

    function displayHome1(){
        
        const main_content = document.querySelector(".main-content");
        const main_menu = document.querySelector(".main-menu");
        const main_contact = document.querySelector(".main-contact");

        if(main_content){
            main_content.remove();

        }

        if(main_menu){
            main_menu.remove();

        }
        if(main_contact){
            main_contact.remove();

        }
        
          


        menu1();
    }
    contact.addEventListener("click",displayHome2);

    function displayHome2(){
        
        const main_content = document.querySelector(".main-content");
        const main_menu = document.querySelector(".main-menu");
        const main_contact = document.querySelector(".main-contact");

        if(main_content){
            main_content.remove();

        }

        if(main_menu){
            main_menu.remove();

        }
        if(main_contact){
            main_contact.remove();

        }
        
          


        contact1();
    }


    

  

    header_button.appendChild(home);
    header_button.appendChild(menu);
    header_button.appendChild(contact);

    header_name.appendChild(rest_name);


    div_header.appendChild(header_name);
    div_header.appendChild(header_button);
    content1.appendChild(div_header);

}

export default header_button;