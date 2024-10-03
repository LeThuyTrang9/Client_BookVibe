import React from "react";
import { Helmet } from "react-helmet";
import "./Home.scss";

function Home() {
  return (
    <>
      <Helmet>
        <title>BookVibe</title>
      </Helmet>

      <div className="main-content">
        <div className="sidebar">
          <ul>
            <li>
              <a href="#">Sách Tiếng Việt nổi bật</a>
            </li>
            <li>
              <a href="#">Manga - Comic</a>
            </li>
            <li>
              <a href="#">Ứng dụng sách</a>
            </li>
            <li>
              <a href="#">Sách làm kỹ năng sống</a>
            </li>
            <li>
              <a href="#">Sách văn học</a>
            </li>
            <li>
              <a href="#">Sách thiếu nhi</a>
            </li>
          </ul>
			  </div>
			  <div className="banner"> </div>
          <img
            alt="Banner"
            src="https://bookbuy.vn/Res/Images/Album/990fc630-e54b-4ef6-9416-edd2d7287c46.jpg?w=880&scale=both&h=320&mode=crop"
            style={{ maxHeight: "400px", maxWidth: "1000px" }}
          />
       

     
  </div>
        
   <div className="section">
          <div className="items">
            <div className="itemx">
              <img
                alt="Banner 1"
                height="200"
                src="https://bookbuy.vn/Res/Images/Banner/8fe2a26f-154b-47dc-8acd-b3a88d137ee5.jpg?width=500&format=jpg&scale=both&quality=90"
                width="200"
              />
            </div>
            <div className="itemx">
              <img
                alt="Banner 2"
                height="200"
                src="https://bookbuy.vn/Res/Images/Banner/8fe2a26f-154b-47dc-8acd-b3a88d137ee5.jpg?width=500&format=jpg&scale=both&quality=90"
                width="200"
              />
            </div>
            <div className="itemx">
              <img
                alt="Banner 3"
                height="200"
                src="https://bookbuy.vn/Res/Images/Banner/8fe2a26f-154b-47dc-8acd-b3a88d137ee5.jpg?width=500&format=jpg&scale=both&quality=90"
                width="200"
              />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="section">
            <h2>Ưu đãi trong ngày</h2>
            <div className="items">
              <div className="item">
                <img
                  alt="Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)"
                  src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
                  style={{ maxWidth: "250px", maxHeight: "250px" }}
                />
                <p>Combo Onikuma 3 Tai Nghe Không Dây B600 Blue Purple + Chuột</p>
                <p className="price">870,000đ</p>
              </div>
              <div className="item">
                <img
                  alt="Sống Đời Hạnh Phúc"
                  src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
                  style={{ maxWidth: "250px", maxHeight: "250px" }}
                />
                <p>Sống Đời Hạnh Phúc</p>
                <p className="price">56,000đ</p>
              </div>
              <div className="item">
                <img
                  alt="Giá Đỡ Laptop Aluminum Nhôm Kèm Quạt C9 Pro"
                  src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
                  style={{ maxWidth: "250px", maxHeight: "250px" }}
                />
                <p>Giá Đỡ Laptop Aluminum Nhôm Kèm Quạt C9 Pro</p>
                <p className="price">520,000đ</p>
              </div>
              <div className="item">
                <img
                  alt="Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)"
                  src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
                  style={{ maxWidth: "250px", maxHeight: "250px" }}
                />
                <p>Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)</p>
                <p className="price">78,000đ</p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Sách - Truyện Tranh</h2>
            <div className="items">
              <div className="item">
                <img
                  alt="Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)"
                  src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
                  style={{ maxWidth: "250px", maxHeight: "250px" }}
                />
                <p>Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)</p>
                <p className="price">78,000đ</p>
              </div>
              <div className="item">
                <img
                  alt="Sapiens - Lược Sử Loài Người Bằng Tranh - Tập 3"
                  src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
                  style={{ maxWidth: "250px", maxHeight: "250px" }}
                />
                <p>Sapiens - Lược Sử Loài Người Bằng Tranh - Tập 3</p>
                <p className="price">339,000đ</p>
              </div>
              <div className="item">
                <img
                  alt="Gia Đình Robinson Thủy Sĩ - Bìa Vải"
                  src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
                  style={{ maxWidth: "250px", maxHeight: "250px" }}
                />
                <p>Gia Đình Robinson Thủy Sĩ - Bìa Vải</p>
                <p className="price">297,500đ</p>
              </div>
              <div className="item">
                <img
                  alt="Trên Sa Mạc Và Trong Rừng Thẳm - Bìa Vải"
                  src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
                  style={{ maxWidth: "250px", maxHeight: "250px" }}
                />
                <p>Trên Sa Mạc Và Trong Rừng Thẳm - Bìa Vải</p>
                <p className="price">357,000đ</p>
              </div>
            </div>
          </div>

   <div className="section">
  <h2>Sách Văn học</h2>
  <div className="items">
    <div className="item" style={{ width: '20%', height: '50%' }}>
      <img
        alt="Banner Sách Văn học"
        height="400"
        src="https://bookbuy.vn/Res/Images/Banner/e257f889-aa02-45ec-85bc-700bac3ef1f7.jpg?w=320&h=455&mode=crop&anchor=topcenter"
        width="200"
      />
    </div>
    <div className="item" style={{ width: '70%' }}>
      <div className="items">
        <div className="item" style={{ width: '30%' }}>
          <img
            alt="Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)"
            src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
            style={{ maxWidth: '250px', maxHeight: '250px' }}
          />
          <p>Sách văn học nhà nguyên</p>
          <p className="price">1,070,000đ</p>
        </div>
        <div className="item" style={{ width: '30%' }}>
          <img
            alt="Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)"
            src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
            style={{ maxWidth: '250px', maxHeight: '250px' }}
          />
          <p>Sách văn học nhà nguyên</p>
          <p className="price">1,070,000đ</p>
        </div>
        <div className="item" style={{ width: '30%' }}>
          <img
            alt="Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)"
            src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
            style={{ maxWidth: '250px', maxHeight: '250px' }}
          />
          <p>Sách văn học nhà nguyên</p>
          <p className="price">1,070,000đ</p>
        </div>
        <div className="item" style={{ width: '30%' }}>
          <img
            alt="Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)"
            src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
            style={{ maxWidth: '250px', maxHeight: '250px' }}
          />
          <p>Sách văn học nhà nguyên</p>
          <p className="price">1,070,000đ</p>
        </div>
        <div className="item" style={{ width: '30%' }}>
          <img
            alt="Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)"
            src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
            style={{ maxWidth: '250px', maxHeight: '250px' }}
          />
          <p>Sách văn học nhà nguyên</p>
          <p className="price">1,070,000đ</p>
        </div>
        <div className="item" style={{ width: '30%' }}>
          <img
            alt="Những Người Dân Chài Xếp Thuyền (Tái Bản 2024)"
            src="https://bookbuy.vn/Res/Images/Product/triet-ly-cua-inamori-kazuo-chung-ta-song-vi-dieu-gi-_134444_1.jpg?w=170&h=250&mode=crop&quality=90"
            style={{ maxWidth: '250px', maxHeight: '250px' }}
          />
          <p>Sách văn học nhà nguyên</p>
          <p className="price">1,070,000đ</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    
    </>
  );
}

export default Home;
