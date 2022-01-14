import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/zoom_img.png';
import FoodOrderImg from '../images/food_app.png';
import whatsapp_img from '../images/whatsapp_img.png';
import CoinTrackerImg from '../images/ecommerce_project.jpg';
import CRMImg from '../images/crm_img.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Food Ordering App',
    desc:
      'An app to allow customer to place online order from his favorite restaurants and also having facilities like online transaction and cash on delivery.Also chef can post dishes that are available.Once the order has been placed then chef assign that order to delivery boy with needed information.Created in Android app devlopment in java + Firebase',
    img: FoodOrderImg,
    link:'https://github.com/Saumil4122000/FoodOrder'
  },
  {
    id: uuidv4(),
    name: 'WhatsApp Clone App',
    desc:
      'An app that provide user in-personal communication also provide group communication.Provide beautiful UI.Also have notification functionality.Also have the function of OTP varification and dark mode support as well.Created in Android app devlopment in java + Firebase',
    img: whatsapp_img,
    link:'https://github.com/Saumil4122000/WhatsAppClone'
  },
  {
    id: uuidv4(),
    name: 'E-commerce Website',
    desc:
      'Online Shopping website which allow the user to see the different products also user can also filter the product.This website has function of cart in whoch user add item to cart.This website also has admin side in which admin has right to add new item,update prize also dispatch the order.Created in PHP, HTML, CSS, JS, MYSQL and Bootstrap',
    img: CoinTrackerImg,
    link:'https://github.com/Saumil4122000/E-commerce-website'
  },
  {
    id: uuidv4(),
    name: "CRM Website",
    desc:
      'It is website that will help service provider to solve issues that might be facing by customer.Here if customer has any issue then he can create ticket and post it.Later on Service provider resolve the issue and closes this ticket.Created in React JS + Express JS + Node JS + MongoDB',
    img: CRMImg,
    link:'https://github.com/Saumil4122000/CRM_System'
  },
  {
    id: uuidv4(),
    name: 'Zoom Clone',
    desc:
      'A website by which user can create room and join this room using shared link. Also it has video and audio calling functions.User also can share his screen with others,Also having the function of chatting.Created using Socket IO + React',
    img: ProjectImg,
    link:'https://github.com/Saumil4122000/zoomclone'
  },
]

export default projects;