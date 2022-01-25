import { homepage } from "./homepage";
import { contactUs } from "./contact";
import { menu } from "./menu";
import './style.css';





const tabSwitcher = (() => {
    homepage();
    const homepageBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    const tabDiv = document.createElement('div');
    const innerTabDiv = document.createElement('div');
    innerTabDiv.classList.add("inner-tab");

    homepageBtn.value = "Home", homepageBtn.textContent = "Home";
    menuBtn.value = "Menu", menuBtn.textContent = "Menu";
    contactBtn.value = "Contact", contactBtn.textContent = "Contact";

    innerTabDiv.append(homepageBtn, menuBtn, contactBtn);
    tabDiv.append(innerTabDiv);
    document.body.prepend(tabDiv);

    let page = 1;
    const content = document.querySelector('#content');
    const home = document.querySelector('button[value="Home"]');
    const menu1 = document.querySelector('button[value="Menu"]');
    const contact = document.querySelector('button[value="Contact"]');




    home.addEventListener('click', () => {
        if (page == 1) return
        removeAllChildrenNodes(content);
        homepage();
        page = 1;

    });

    menu1.addEventListener('click', () => {
        if (page == 2) return
        removeAllChildrenNodes(content);
        menu();
        page = 2;
    });

    contact.addEventListener('click', () => {
        if (page == 3) return
        removeAllChildrenNodes(content);
        contactUs();
        page = 3;
    });

    const removeAllChildrenNodes = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

})();