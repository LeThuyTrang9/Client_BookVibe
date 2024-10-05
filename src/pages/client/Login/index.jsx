import React, { useState } from "react";
import Helmet from "react-helmet";
import "./Login.scss";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>

      <div className="container">
        <div className="tab">
            <button className={`tablinks ${activeTab === "login" ? "active" : ""}`} onClick={() => handleTabClick("login")}>
                Đăng nhập
            </button>
            <button className={`tablinks ${activeTab === "register" ? "active" : ""}`} onClick={() => handleTabClick("register")}>
                Đăng ký
            </button>
        </div>
        <div id="login" className={`tabcontent ${activeTab === "login" ? "active" : ""}`}>
          <div className="login-form">
            <form action="">
              <h1>Đăng nhập</h1>
              <p>Số điện thoại</p>
              <div className="input-box">
                <input type="text" placeholder="Số điện thoại" required />
              </div>
              <p>Mật khẩu</p>
              <div className="input-box">
                <input type="password" placeholder="Mật khẩu" required />
              </div>

              <div className="remember">
                <label>
                  <input type="checkbox" />Nhớ mật khẩu
                </label>
                <a href="">Quên mật khẩu</a>
              </div>
              <div className="button-login">
                <button type="submit" className="btn">Đăng nhập</button>
                <button type="submit" className="btn-gg">Đăng nhập bằng Google+</button>
              </div>
            </form>
          </div>
        </div>
        <div id="register" className={`tabcontent ${activeTab === "register" ? "active" : ""}`}>
          <div className="register-form">
            <form action="">
              <h1>Đăng ký</h1>
              <p>Họ và tên</p>
              <div className="input-box">
                <input type="text" placeholder="Họ và tên" required />
              </div>
              <p>Email</p>
              <div className="input-box">
                <input type="password" placeholder="Email" required />
              </div>
              <p>Số điện thoại</p>
              <div className="input-box">
                <input type="text" placeholder="Số điện thoại" required />
              </div>
              <p>Mật khẩu</p>
              <div className="input-box">
                <input type="text" placeholder="Mật khẩu" required />
              </div>
              <p>Nhập lại mật khẩu</p>
              <div className="input-box">
                <input type="text" placeholder="Nhập lại mật khẩu" required />
              </div>
              <div className="button-login">
                <button type="submit" className="btn">Đăng ký</button>
                <button type="submit" className="btn-gg">Đăng ký bằng Google+</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;