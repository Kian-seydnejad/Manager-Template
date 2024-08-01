import { removeMenu } from './menu.js';
import { toggleElementDisplay } from './responsive.js';
import { navigationMenu } from './navigationMenu1.js';
import {notificationMenu} from './navigationMenu2.js'

const MenuBtn = document.querySelector('.MenuBtn')
const messagesBtn = document.querySelector('.messagesBtn')
const notificationBtn = document.querySelector('.notificationBtn')
console.log(notificationBtn)

MenuBtn.addEventListener("click", removeMenu)
messagesBtn.addEventListener("click", navigationMenu)
notificationBtn.addEventListener("click", notificationMenu)

toggleElementDisplay();
window.addEventListener('resize', toggleElementDisplay);