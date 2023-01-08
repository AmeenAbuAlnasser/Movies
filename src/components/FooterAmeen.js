import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";




const FooterAmeen = () => {
  return (
   <div className="footer-dark mt-5">
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3 item">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web design</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Hosting</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 item">
          <h3>About</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="col-md-6 item text">
          <h3>Ameen Abu Alnasser</h3>
          <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
        </div>
        <div className="col item social">
        
        <a href="https://www.facebook.com/MrD3s">
        <BsFacebook className='fs-2' />
        </a>
        <a href="https://www.linkedin.com/in/ameen-abu-alnasser-45976a21b"> 
        <AiFillLinkedin className='fs-2' />

        
        </a>
        <a href="https://github.com/AmeenAbuAlnasser">
        <BsGithub className='fs-2'/>


        </a>
       
        </div>
      </div>
      <p className="copyright">Company Name © 2023</p>
    </div>
    
  </footer>
</div>

  )
}

export default FooterAmeen