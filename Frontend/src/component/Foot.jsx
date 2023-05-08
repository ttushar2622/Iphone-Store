import React from 'react'
import css from "./Foot.css";

const Foot = () => {
  return (
    <div>
        <footer>
    <div class="footer-main">
      <div class="footer-detail">
        <p>Prices are inclusive of VAT. Free delivery for all orders.</p>
        <p>*Total order value must be less than 30,000 THB. Admin fee may be charged by bank/processing entity in addition to order value.</p>
        <p>**For approved customers only. Subject to approval. For more information, see <a href="#">http://www.apple.com/th-en/help/payments.</a></p>
      </div> 
      
      <div class="footer-welcome">
        <i class="fab fa-apple"></i>
        <i class="fas fa-chevron-right"></i>
        <p>Welcome to the Apple Store</p>
      </div> 
      
      <div class="footer-ul">
        <ul>
          <li><h4>Shop and Learn</h4></li>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">Apple Watch</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">iTunes</a></li>
          <li><a href="#">iPod Touch</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
        
        <ul>
          <li><h4>Apple Store</h4></li>
          <li><a href="#">Apple Store App</a></li>
          <li><a href="#">Financing</a></li>
          <li><a href="#">Order Status</a></li>
          <li><a href="#">Shopping Help</a></li>
        </ul>
        
        <ul>
          <li><h4>For Education</h4></li>
          <li><a href="#">Apple and Education</a></li>
          <li><a href="#">Shop for College</a></li>
          <li id="mt"><h4>For Business</h4></li>
          <li><a href="#">Apple and Business</a></li>
          <li><a href="#">shop for Business</a></li>
        </ul>
        
        <ul>
          <li><h4>Account</h4></li>
          <li><a href="#">Manage Your Apple ID</a></li>
          <li><a href="#">Apple Store Account</a></li>
          <li><a href="#">iClound.com</a></li>
          <li id="mt"><h4>Apple Values</h4></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Environment</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Supplier Responsibility</a></li>
        </ul>
        
        <ul>
          <li><h4>About Apple</h4></li>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact Apple</a></li>
        </ul>
      </div>
      
      <div class="footer-contact">
        <p>More ways to shop: visit an <a href="#">Apple Store, </a>Call 001‑800‑65‑6957, or <a href="#">find a seller</a></p>
      </div>
      <div class="footer-copyright">
        <p>Copyright © 2019 Apple Inc. All rights reserved.</p>
        
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <div class="vr"></div>
          <li><a href="#">Terms of Use</a></li>
          <div class="vr"></div>
          <li><a href="#">Sales and Refunds</a></li>
          <div class="vr"></div>
          <li><a href="#">Legal</a></li>
          <div class="vr"></div>
          <li><a href="#">Sitemap</a></li>
        </ul>
        
        <div class="footer-lang">
          <div class="circle">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png"/>
          </div>
          <p>ไทย</p>
          <div class="vr"></div>
          <p>ภาษาไทย</p>
        </div>
      </div>
      
    </div>
  </footer>
    </div>
  )
}

export default Foot