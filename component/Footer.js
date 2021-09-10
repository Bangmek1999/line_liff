import React from "react";
export default function Footer() {
  return (
    <>
    {/* FOOTER begings */}
<footer id="footer">    
  <div className="footer-widgets-wrap">
    <div className="container text-center">    
      <div className="row">
        <div className="col-sm-4 col-md-4">
          <div className="footer-content">
            <h4>KEEP IN TOUCH</h4>
            <div className="footer-socials">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-google-plus" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-pinterest" /></a>
            </div>
          </div> {/* end footer-content */}
        </div> {/* end col-sm-4 */}
        <div className="col-sm-4 col-md-4">
          <div className="footer-content">
            <h4>ADDRESS</h4>
            <p>464 Newesta St<br />
              Othervilla AB 6007, Other</p>
            <p>+0 123-456-7890<br />
              <a href="#">www.domain.com</a><br />
              info@domain.com</p>
          </div> {/* end footer-content */}
        </div> {/* end col-sm-4 */}
        <div className="col-sm-4 col-md-4">
          <div className="footer-content">
            <h4>SUPPORT</h4>
            <p>You need support? Visit our support forum and open tickets for you questions.</p>
            <p><button type="button" className="btn btn-custom-sm">forum</button></p>
          </div>  {/* end footer-content */}   
        </div> {/* end col-sm-4 */}
      </div> {/* end row */}
    </div> {/* container */}
  </div>
  <div className="footer-bottom text-center"> {/* Footer-copyright */}
    <p>©2016 Delex. Design By <a href="http://templatestock.co">TEMPLATE STOCK</a></p>
  </div>
</footer>
{/* End footer begings */}

    </>
  );
}
