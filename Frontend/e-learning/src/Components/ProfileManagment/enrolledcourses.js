import React from 'react';
import '../assets/css/enrolledcourse.css'

const Wishlist = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-lg-8 pb-5">
          <div className="cart-item d-md-flex justify-content-between">
            <span className="remove-item"><i className="fa fa-times"></i></span>
            <div className="px-3 my-3">
              <a className="cart-item-product" href="#">
                <div className="cart-item-product-thumb">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Product" />
                </div>
                <div className="cart-item-product-info">
                  <h4 className="cart-item-product-title">Canon EOS M50 Mirrorless Camera</h4>
                  <div className="text-lg text-body font-weight-medium pb-1">$910.00</div>
                  <span>Availability: <span className="text-success font-weight-medium">In Stock</span></span>
                </div>
              </a>
            </div>
          </div>

          <div className="cart-item d-md-flex justify-content-between">
            <span className="remove-item"><i className="fa fa-times"></i></span>
            <div className="px-3 my-3">
              <a className="cart-item-product" href="#">
                <div className="cart-item-product-thumb">
                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Product" />
                </div>
                <div className="cart-item-product-info">
                  <h4 className="cart-item-product-title">Apple iPhone X 256 GB Space Gray</h4>
                  <div className="text-lg text-body font-weight-medium pb-1">$1,450.00</div>
                  <span>Availability: <span className="text-warning font-weight-medium">2 - 3 Weeks</span></span>
                </div>
              </a>
            </div>
          </div>

          <div className="cart-item d-md-flex justify-content-between">
            <span className="remove-item"><i className="fa fa-times"></i></span>
            <div className="px-3 my-3">
              <a className="cart-item-product" href="#">
                <div className="cart-item-product-thumb">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Product" />
                </div>
                <div className="cart-item-product-info">
                  <h4 className="cart-item-product-title">HP LaserJet Pro Laser Printer</h4>
                  <div className="text-lg text-body font-weight-medium pb-1">$188.50</div>
                  <span>Availability: <span className="text-success font-weight-medium">In Stock</span></span>
                </div>
              </a>
            </div>
          </div>

          <div className="custom-control custom-checkbox">
            <input className="custom-control-input" type="checkbox" checked id="inform-me" />
            <label className="custom-control-label" htmlFor="inform-me">Inform me when an item from my wishlist is available</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
