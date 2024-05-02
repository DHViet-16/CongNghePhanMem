import React from "react";
import './style.css'
const Requirement1 = () => {
    return (       
        <div>
            <h1> GIỚI THIỆU BẢN THÂN </h1>
            <hr /> <div className="introduction-card">
                <div className="profile-image-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooVn8aFccxjleHAImCbVFfkSF8N9gJD4l_qaOWzeZSQ&s" alt="Profile picture" />
                </div>
                <div className="information-container">
                    <h3>Mã số sinh viên: 2151150069</h3>
                    <h3>Họ và tên: Đặng Hoàng Việt</h3>
                    <h3>Liên hệ: 0972017749</h3>
                    <h3>Trường: Đại học giao thông vận tải TPHCM</h3>
                    <h3>Khoa: Công nghệ thông tin</h3>
                    <h3>Chuyên ngành: Công nghệ phần mềm</h3>
                </div>
            </div>
        </div>
    );
};
export default Requirement1;