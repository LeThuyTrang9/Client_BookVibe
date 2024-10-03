import React from "react";
import { Link } from "react-router-dom"; // Nếu bạn dùng react-router-dom
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="link"></div>
      <div className="overlap">
        <div className="group">
          <p className="text-wrapper">Chào mừng bạn đến với BookVibe</p>
          <Link to="/orders" className="div">
            Xem đơn hàng của bạn
          </Link> {/* Chuyển thành link đến trang đơn hàng */}
          <div className="suruchi-gmail-com">bookvibe@gmail.com</div>
          <img
            className="vector"
            src="https://c.animaapp.com/yzvpoVVE/img/vector-1-1.svg"
            alt="Vector 1"
          />
          <img
            className="img"
            src="https://c.animaapp.com/yzvpoVVE/img/vector-2-1.svg"
            alt="Vector 2"
          />
          <img
            className="icon-feathericons"
            src="https://c.animaapp.com/yzvpoVVE/img/icon---feathericons---truck-2.svg"
            alt="Truck Icon"
          />
          <img
            className="icon-tabler-icons"
            src="https://c.animaapp.com/yzvpoVVE/img/icon---tabler-icons---mail-2.svg"
            alt="Mail Icon"
          />
        </div>
        <div className="group-2">
          <div className="list-item-link">VietNam</div>
          <div className="list-item"></div>
          <div className="list-item-link-US">VND</div>
        </div>
      </div>
      <div className="group-3">
        <p className="p">Đặc biệt giảm giá tới 30% tất cả mặt hàng</p>
        <img
          className="icon-heroicons"
          src="https://c.animaapp.com/yzvpoVVE/img/icon---heroicons---outline---light-bulb-2.svg"
          alt="Light Bulb Icon"
        />
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle"></div>
          <img
            className="rectangle-2"
            src="https://c.animaapp.com/yzvpoVVE/img/rectangle-4-1.svg"
            alt="Rectangle 2"
          />
          <div className="group-4">
            <div className="text-wrapper-2">Tất cả danh mục</div>
            <img
              className="chevron-down"
              src="https://c.animaapp.com/yzvpoVVE/img/chevron-down-1.svg"
              alt="Chevron Down"
            />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Tìm kiếm ...</div>
          </div>
          <div className="rectangle-3"></div>
          <img
            className="search"
            src="https://c.animaapp.com/yzvpoVVE/img/search-1.svg"
            alt="Search Icon"
          />
        </div>
      </div>
      <div className="group-5">
        <div className="group-6">
          <Link to="/account" className="text-wrapper-4">Tài khoản</Link> 
        </div>
        <img
          className="user"
          src="https://c.animaapp.com/yzvpoVVE/img/user-2.svg"
          alt="User Icon"
        />
      </div>
      <div className="group-7">
        <div className="group-8">
          <Link to="/favorites" className="text-wrapper-4">Yêu thích</Link> 
        </div>
        <img
          className="user"
          src="https://c.animaapp.com/yzvpoVVE/img/user-3.svg"
          alt="Favorites Icon"
        />
      </div>
      <div className="group-9">
        <div className="group-wrapper">
          <div className="group-10">
            <Link to="/cart" className="text-wrapper-5">Giỏ hàng</Link> 
          </div>
        </div>
        <img
          className="shopping-cart"
          src="https://c.animaapp.com/yzvpoVVE/img/shopping-cart-1.svg"
          alt="Shopping Cart"
        />
      </div>
      <div className="group-11">
        <div className="overlap-2">
          <Link to="/products" className="nav-list-item-link">Sản phẩm</Link> 
          <img
            className="icon-heroicons-2"
            src="https://c.animaapp.com/yzvpoVVE/img/icon---heroicons---outline---chevron-down-2.svg"
            alt="Chevron Down"
          />
        </div>
        <Link to="/" className="nav-list-item-link-2">Trang chủ</Link>
        <Link to="/blog" className="nav-list-item-link-3">Tin tức</Link> 
        <Link to="/contactInfo" className="nav-list-item-link-4">Về chúng tôi</Link>
        <Link to="/contact" className="nav-list-item-link-5 text-wrapper-6">Liên hệ</Link>
      </div>
    </div>
  );
};

export default Header;
