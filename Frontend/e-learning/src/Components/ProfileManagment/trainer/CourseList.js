import '../../assets/css/profilesitting.css'
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/navbar';


function CourseList() {
    return (
        <>
            <Navbar />
            <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><i
                class="fa fa-times"></i></span>
                <div class="px-3 my-3">
                    <a class="cart-item-product" href="#">
                        <div class="cart-item-product-thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt="Product" /></div>
                        <div class="cart-item-product-info">
                            <h4 class="cart-item-product-title">React JS</h4>
                            <div class="text-lg text-body font-weight-medium pb-1">$110.00</div>
                            <div class="text-lg text-body font-weight-medium pb-1">50 Student enrolled</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><i
                class="fa fa-times"></i></span>
                <div class="px-3 my-3">
                    <a class="cart-item-product" href="#">
                        <div class="cart-item-product-thumb"><img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt="Product" /></div>
                        <div class="cart-item-product-info">
                            <h4 class="cart-item-product-title">React JS</h4>
                            <div class="text-lg text-body font-weight-medium pb-1">Free</div>
                            <div class="text-lg text-body font-weight-medium pb-1">200 Student enrolled</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="cart-item d-md-flex justify-content-between"><span class="remove-item"><i
                class="fa fa-times"></i></span>
                <div class="px-3 my-3">
                    <a class="cart-item-product" href="#">
                        <div class="cart-item-product-thumb"><img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            alt="Product" /></div>
                        <div class="cart-item-product-info">
                            <h4 class="cart-item-product-title">React JS</h4>
                            <div class="text-lg text-body font-weight-medium pb-1">$188.50</div>
                            <div class="text-lg text-body font-weight-medium pb-1">20 Student enrolled</div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default CourseList;