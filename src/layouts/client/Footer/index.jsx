import "./Footer.scss";

function Footer() {
	return (
		<>
 <footer className="footer">
      <div className="footer-content">
        <section className="company-info">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b98fc58e0b228c1eb2005f8e82a5e868d5ed89b518a85662d82dfad7f9f93d19?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
            alt="Company Logo"
            className="logo"
          />
          <p className="address">
            Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM <br />
            Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA <br />
            60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam
          </p>
          <p className="service-info">
            Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. <br />
            KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng <br />
            cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a83db9fe2aeaf090460bc0dd0714e79b5b9d4e4f6f46cb92aa0e3a52d9c6561?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
            alt="Company Certification"
            className="logo"
          />
          <div className="divider"></div>
          <p className="copyright">BookVibe Company @ 2024. All rights reserved.</p>
        </section>

        <div className="services-column">
          <div className="services-wrapper">
            <section className="service-list">
              <h3 className="column-heading">Dịch vụ</h3>
              <ul>
                <li className="service-item">Điều khoản sử dụng</li>
                <li className="service-item">Chính sách bảo mật thông tin cá nhân</li>
                <li className="service-item">Chính sách bảo mật thanh toán</li>
                <li className="service-item">Giới thiệu Fahasa</li>
                <li className="service-item">Hệ thống trung tâm - nhà sách</li>
              </ul>
              <div className="contact-info">
                <h3 className="column-heading">Liên hệ</h3>
                <div className="contact-item">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/579f59e2b82a01a81c359756a345a64917d015e8fa19a009923352ddb1a93424?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                    alt="Location Icon"
                    className="contact-icon"
                  />
                  <span>60-62 Lê Lợi, Q.1, TP. HCM</span>
                </div>
                <div className="contact-item">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/27790b441df97d7b9cfbe3efe240de8bc787a3cc69cb389fa30cad043fb17cca?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                    alt="Email Icon"
                    className="contact-icon"
                  />
                  <span>cskh@fahasa.com.vn</span>
                </div>
                <div className="contact-item">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfc4583a0ff3ed3cdc683e4054831e080f1056ac1dd8b5047eff064818557ad0?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                    alt="Phone Icon"
                    className="contact-icon"
                  />
                  <span>1900636467</span>
                </div>
              </div>
            </section>

            <section className="support-list">
              <h3 className="column-heading">Hỗ trợ</h3>
              <ul>
                <li className="service-item">Chính sách đổi - trả - hoàn tiền</li>
                <li className="service-item">Chính sách bảo hành - bồi hoàn</li>
                <li className="service-item">Chính sách vận chuyển</li>
                <li className="service-item">Chính sách khách sỉ</li>
              </ul>
            </section>
          </div>
        </div>

        <section className="account-column">
          <h3 className="column-heading">Tài khoản của tôi</h3>
          <ul className="account-list">
            <li className="service-item">Đăng nhập/Tạo mới tài khoản</li>
            <li className="service-item">Thay đổi địa chỉ khách hàng</li>
            <li className="service-item">Chi tiết tài khoản</li>
            <li className="service-item">Lịch sử mua hàng</li>
          </ul>

          <div className="social-section">
            <h4 className="social-heading">Theo dõi chúng tôi</h4>
            <div className="social-icons">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e2351752816ba9d5527979d353868799367664a0c7e8bb7c6fe72529f001460?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                alt="Facebook"
                className="social-icon"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/101052c6aa9878bbc2a5772460967337e09e6b1b65815c33866fd4b5c49120dd?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                alt="Twitter"
                className="social-icon"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/edfa72ef0314620c784e9e7bccf25f6b1f89788cd0107384f1d84cd4edff7e4b?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                alt="Instagram"
                className="social-icon"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/283768d535bf82fd6385fccb30fcc22f584bbac8b823ec9f7181bb34a485f848?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                alt="YouTube"
                className="social-icon"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eaa8c1d2c2369be7b7918752a15c5187031db583b53385e9eb06179dc178f36?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                alt="Pinterest"
                className="social-icon"
              />
            </div>
          </div>

          <div className="payment-section">
            <h4 className="payment-heading">Hình thức thanh toán</h4>
            <div className="payment-icons">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/19957ba6a8b7e1e34997b3bd13820a2b7d0c85c0b9b8a6392cd0a60c414af5d0?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                alt="Visa"
                className="payment-icon"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d4bf152a0567cfc1d1e2aff0d21ac5e679f17918341e7e6a5a40ca289524c4?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                alt="MasterCard"
                className="payment-icon"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccfc446fc7a6ff0a510f5ee1e7e7ac167394477927d71ebd82d72e1139468e3?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                alt="Paypal"
                className="payment-icon"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c90617643e1c528d18d1e022eebcc1c479d58bfcf1e7742fd72226eb28e8d07?placeholderIfAbsent=true&apiKey=68af3ad79cc74dd5bade308fe0ca04c5"
                alt="American Express"
                className="payment-icon"
              />
            </div>
          </div>
        </section>
      </div>
    </footer>


		</>
	);
}

export default Footer;
