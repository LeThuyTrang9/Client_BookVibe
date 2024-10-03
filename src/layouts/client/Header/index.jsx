import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header class="header">
      <div class="top-bar">
        <div class="welcome-section">
          <div class="welcome-content">
            <div class="welcome-message">
              <div class="welcome-text">
                <span>Chào mừng bạn đến với BookVibe</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e998c857e475dc8edc59e6cdbc36b0622921998ede9d272a2ffd5bb2796a33bf?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                  alt=""
                  class="welcome-icon"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6afae8c480b716f2a3d8f055ce7a16216ca48742af9370fa179eda022f16acff?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                  alt=""
                  class="welcome-icon"
                />
                <span class="order-link">Xem đơn hàng của bạn</span>
              </div>
              <div class="contact-info">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec6a1dabbe9caaa8b6e62be8b2367b4d723c0252fdc73d56d02937f93d84ea54?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                  alt=""
                  class="contact-icon"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/25415cf69b4e084f7f160f0e29b5771fdd5502f055be24fc0b33a885aa9c04db?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                  alt=""
                  class="contact-icon"
                />
                <span class="email">bookvibe@gmail.com</span>
              </div>
            </div>
            <div class="language-currency">
              <span class="language">VietNam</span>
              <div class="currency-wrapper">
                <div class="currency-divider"></div>
                <span class="currency">VND</span>
              </div>
            </div>
          </div>
        </div>
        <nav class="main-nav">
          <div class="nav-content">
            <div class="logo-column">
              <div class="logo-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a33861e94997a8f9477a4a3f11a47109884a1657a85f59f02b5dc5001efeaf08?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                  alt="BookVibe Logo"
                  class="logo"
                />
              </div>
            </div>
            <div class="menu-column">
              <div class="menu-wrapper">
                <div class="search-bar">
                  <div class="category-dropdown">
                    <div class="dropdown-toggle">
                      <span>Tất cả danh dục</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a332c92138f87bf3e756bc926461c5ffb80e88060bdc1097bf0302ec6b1d7358?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                        alt=""
                        class="dropdown-icon"
                      />
                    </div>
                    <div class="search-input">
                      <span class="search-placeholder">Tìm kiếm ...</span>
                      <button
                        class="search-button"
                        aria-label="Search"
                      ></button>
                    </div>
                  </div>
                  <div class="user-actions">
                    <div class="action-item">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebab725769fa2009426639357f58781c047da6f7fd32571dd11afc201a294fc?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                        alt=""
                        class="action-icon"
                      />
                      <span>Yêu thích</span>
                    </div>
                    <div class="action-item">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd69b4bc3e576f00b65d8da889882acb89d0bdd691d9e76592f19757a008726b?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                        alt=""
                        class="action-icon"
                      />
                      <span>Tài khoản</span>
                    </div>
                    <div class="action-item">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e8bb7fd201598c0fe98276eedada5d8c3dcbddf879ae5d7a43214f35209ee32?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                        alt=""
                        class="action-icon"
                      />
                      <span>Giỏ hàng</span>
                    </div>
                  </div>
                </div>
                <div class="main-menu">
                  <div class="shop-link">
                    <a href="dev" class="shop-page">
                      Trang chủ
                    </a>
                    <span class="shop-text">Sản phẩm</span>
                    <img
                    //   src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b314d017c47316f1275f68b62b7dba45a2669e89e195576348dc3307572b48e?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                      alt=""
                      class="shop-icon"
                    />
                  </div>
                  <div class="menu-links">
                    <a href="dev" class="menu-item">
                      Tin tức
                    </a>
                    <a href="dev" class="menu-item">
                      Về chúng tôi
                    </a>
                    <a href="dev" class="menu-item contact-link">
                      <strong>Liên</strong> hệ
                    </a>
                  </div>
                  <div class="promo-banner">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/64e26d388c9c152dc67b19e614f95aa53070977067e933aa077b00adc70915d2?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                      alt=""
                      class="promo-icon"
                    />
                    <span class="promo-text">
                      Đặc biệt giảm giá tới 30% tất cả mặt hàng
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
