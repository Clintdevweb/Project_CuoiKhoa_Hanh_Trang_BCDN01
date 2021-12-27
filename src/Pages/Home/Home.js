import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CountupNumber from '../../component/CountUp/CountupNumber'
import { getListCourse } from '../../Redux/action/CourseAction';
import './Home.css'
export default function Home() {
    const { coursesList } = useSelector(state => state.CourseReducer)
    // console.log(coursesList);
    const dispatch = useDispatch()

    const renderCoursePopular = () => {
        return coursesList.map((course, index) => {
            if (index <= 3) {
                return (
                    <div key={index} className="col-md-6 col-xl-3 cardGlobalRes mt-4 cardEffect">
                        <NavLink to={`/chitiet/${course.maKhoaHoc}`} className="cardGlobal">
                            <img src={course.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = "https://ectimes.files.wordpress.com/2019/03/cac-ngon-ngu-lap-trinh-pho-bien-2.jpg" }} alt="" />
                            <span className='stikerCard'>{course.tenKhoaHoc.length > 5 ? course.tenKhoaHoc : "Lập trình web"}</span>
                            <div className="cardBodyGlobal">
                                <h6 className="">{course.moTa.length > 50 ? course.moTa.substr(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
                                <div className='titleMaker'>
                                    <div className='imgCardFooter'><img className='' src={require('../../Assets/Img/ImgAvatar/avatar2.png').default} alt="" /></div>
                                    <span className='ml-2 colorCardTitle'>Elon Musk</span>
                                </div>
                            </div>
                            <div className='cardFooter'>
                                <div>
                                    <p>800.000<sup>đ</sup></p>
                                    <p>400.000<sup>đ</sup></p>
                                </div>
                                <div>
                                    <i className="fas fa-star mr-1 textStar"></i>
                                    <span className='textStar'>4.9</span>
                                    <span className='colorCardTitle'>(7840)</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                )
            }
        })
    }

    const renderCourseStudent = () => {
        return coursesList.map((course, index) => {
            if (index > 3 && index <= 7) {
                // console.log(course.hinhAnh);
                return (
                    <div key={index} className="col-md-6 col-xl-3 cardGlobalRes mt-4">
                        <NavLink to={`/chitiet/${course.maKhoaHoc}`} className="cardGlobal">
                            <img src={course.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = "https://codelearn.io/Upload/Blog/moi-truong-node-js-browser-va-khac-biet-63745001344.3067.jpg" }} alt="" />
                            <span className='stikerCard'>{course.tenKhoaHoc.length <= 10 ? course.tenKhoaHoc : "Lập trình web"}</span>
                            <div className="cardBodyGlobal">
                                <h6 className="">{course.moTa.length > 100 ? course.moTa.substr(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
                                <div className='cardIcon'>
                                    <span><i className="far fa-clock iconOclock"></i>8 giờ</span>
                                    <span><i className="far fa-calendar-alt iconCalendar"></i>4 tuần</span>
                                    <span><i className="fas fa-signal iconLevel"></i>Tất cả</span>
                                </div>
                            </div>
                            <div className='cardFooter'>
                                <div className='titleMaker'>
                                    <div className='imgCardFooter'><img className='' src={require('../../Assets/Img/ImgAvatar/avatar2.png').default} alt="" /></div>
                                    <span className='ml-2 colorCardTitle'>Elon Musk</span>
                                </div>
                                <div>
                                    <p>800.000<sup>đ</sup></p>
                                    <p>400.000<sup>đ</sup><i className="fas fa-tag iconTag"></i></p>
                                </div>

                            </div>
                            <div className='subCard'>
                                <div className='subCardHead'>
                                    <img src={require('../../Assets/Img/ImgAvatar/emoji.png').default} alt="" />
                                    <span className='ml-1 colorCardTitle'>Elun Musk Ricard</span>
                                </div>
                                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                                <p className='colorCardTitle'>Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi học...</p>
                                <div className='cardIcon'>
                                    <span><i className="far fa-clock iconOclock"></i>8 giờ</span>
                                    <span><i className="far fa-calendar-alt iconCalendar"></i>4 tuần</span>
                                    <span><i className="fas fa-signal iconLevel"></i>Tất cả</span>
                                </div>
                                <button className='btnGlobal btnSubCard'><NavLink to={`/chitiet/${course.maKhoaHoc}`}>Xem chi tiết</NavLink></button>

                            </div>
                            <div className='cardSale'>
                                <span>Yêu thích</span>
                            </div>
                        </NavLink>
                    </div>
                )
            }
        })
    }

    const renderCourseReact = () => {
        return coursesList.map((course, index) => {
            if (index > 7 && index <= 11) {
                // console.log(course.maKhoaHoc);
                return (
                    <div key={index} className="col-md-6 col-xl-3 cardGlobalRes mt-4">
                        <NavLink to={`/chitiet/${course.maKhoaHoc}`} className="cardGlobal">
                            <img src={course.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = "https://canhme.com/wp-content/uploads/2018/09/Nodejs.png" }} alt="" />
                            <span className='stikerCard'>{course.tenKhoaHoc.length <= 10 ? course.tenKhoaHoc : "Lập trình web"}</span>
                            <div className="cardBodyGlobal">
                                <h6 className="">{course.moTa.length > 100 ? course.moTa.substr(0, 50) + '...' : 'Lập trình hiện đang là xu hướng trên toàn thế giới...'}</h6>
                                <div className='cardIcon'>
                                    <span><i className="far fa-clock iconOclock"></i>8 giờ</span>
                                    <span><i className="far fa-calendar-alt iconCalendar"></i>4 tuần</span>
                                    <span><i className="fas fa-signal iconLevel"></i>Tất cả</span>
                                </div>
                            </div>
                            <div className='cardFooter'>
                                <div className='titleMaker'>
                                    <div className='imgCardFooter'><img className='' src={require('../../Assets/Img/ImgAvatar/avatar2.png').default} alt="" /></div>
                                    <span className='ml-2 colorCardTitle'>Elon Musk</span>
                                </div>
                                <div>
                                    <p>800.000<sup>đ</sup></p>
                                    <p>400.000<sup>đ</sup><i className="fas fa-tag iconTag"></i></p>
                                </div>

                            </div>
                            <div className='subCard'>
                                <div className='subCardHead'>
                                    <img src={require('../../Assets/Img/ImgAvatar/emoji.png').default} alt="" />
                                    <span className='ml-1 colorCardTitle'>Elun Musk Ricard</span>
                                </div>
                                <h6>BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
                                <p className='colorCardTitle'>Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi học...</p>
                                <div className='cardIcon'>
                                    <span><i className="far fa-clock iconOclock"></i>8 giờ</span>
                                    <span><i className="far fa-calendar-alt iconCalendar"></i>4 tuần</span>
                                    <span><i className="fas fa-signal iconLevel"></i>Tất cả</span>
                                </div>
                                <button className='btnGlobal btnSubCard'><NavLink to={`/chitiet/${course.maKhoaHoc}`}>Xem chi tiết</NavLink></button>

                            </div>
                            <div className='cardSale'>
                                <span>Yêu thích</span>
                            </div>
                        </NavLink>
                    </div>
                )
            }
        })
    }

    useEffect(() => {
        dispatch(getListCourse)
    }, [])

    return (
        <>
            <div className='homePage'>
                {/* Slider */}
                <div className='row sliderHome'>
                    <div className="col-lg-6 sloganBox">
                        {/* Small box slder */}
                        <div className='triangleTopRight'></div>
                        <div className='smallBox smallboxLeftTop'></div>
                        <div className='smallBox smallboxRightTop'></div>
                        <div className='smallBox smallboxRightBottom'></div>
                        <div className='smallBox smallboxRightBottom doubleBox'></div>
                        {/* Slogan */}
                        <div className='sloganContainer'>
                            <div><img className='sliderPlaneImg' src={require('../../Assets/Img/imgSlider/paper_plane.png').default} alt="" /></div>
                            <h1>Chào mừng</h1>
                            <h1>đến với môi trường </h1>
                            <h1>V<span>learning</span></h1>
                            <button className='btnGlobal btnSlider mt-4'>Bắt đâu nào</button>
                        </div>
                    </div>
                    {/* Slider Right */}
                    <div className="col-lg-6">
                        <div className='sliderRight'>
                            <div className=''></div>
                            <div>
                                <img className='sliderMainImg' src={require('../../Assets/Img/imgSlider/slider2.png').default} alt="" />
                                <img className='sliderSubImg sliderCodeImg' src={require('../../Assets/Img/imgSlider/code_slider.png').default} alt="" />
                                <img className='sliderSubImg sliderMesImg ' src={require('../../Assets/Img/imgSlider/message_slider.png').default} alt="" />
                                <img className='sliderSubImg sliderCloudImg' src={require('../../Assets/Img/imgSlider/clouds.png').default} alt="" />
                                <img className='sliderSubImg sliderCloud2Img' src={require('../../Assets/Img/imgSlider/clouds.png').default} alt="" />
                                <img className='sliderSubImg sliderCloud3Img' src={require('../../Assets/Img/imgSlider/clouds.png').default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Course Info */}
                <div className='infoCoureBox'>
                    <div className='infoCourseHome'>
                        <div className='infoItemHome infoLargeItem'>
                            <div className='infoItemContent'>
                                <h3>Khóa học</h3>
                                <p><span>Học qua dự án thực tế</span>, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay</p>
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Hơn 1000 bài tập và dự án thực tế</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Công nghệ cập nhật mới nhất</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='infoItemHome infoSmallItemA'>
                            <div className='infoItemContent'>
                                <h3>Lộ trình phù hợp</h3>
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span> Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Học, luyện tập code, kỹ thuật phân tích, soft skill</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='infoItemHome infoSmallItemB'>
                            <div className='infoItemContent'>
                                <h3>Hệ thống học tập</h3>
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='infoItemHome infoSmallItemA'>
                            <div className='infoItemContent'>
                                <h3>Giảng viên</h3>
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Tương tác cùng mentor và giảng viên qua phần thảo luận</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Review code và đưa ra các nhận xét góp ý</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Chấm điểm tương tác thảo luận giữa các học viên</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='infoItemHome infoSmallItemC'>
                            <div className='infoItemContent'>
                                <h3>Chứng nhận</h3>
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Chấm bài và có thể vấn đáp trực tuyến để review</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <span>Kết nối CV của bạn đến với các đối tác của V learning</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Course Popular */}
                <div className='coursesHome'>
                    <h6><a href="">Khóa học phổ biến</a></h6>
                </div>
                <div className='row mt-4'>
                    {renderCoursePopular()}
                </div>
                {/* Course Student */}
                <div className='mt-5'>
                    <h6><a href="">Khóa học tham khảo</a></h6>
                    <div className='row'>
                        {renderCourseStudent()}
                    </div>
                </div>
                {/* Course Student */}
                <div className='mt-5'>
                    <h6><a href="">Khóa học Front End React Js</a></h6>
                    <div className='row'>
                        {renderCourseReact()}
                    </div>
                </div>
            </div>
            {/* Box Number */}
            <div className='boxNumberContainer mt-5'>
                <div className='row'>
                    <div className='col-lg-3 p-4 col-md-6'>
                        <div className='boxNumber' >
                            <div><img src={require("../../Assets/Img/imgIcon/003-students.png").default} className='imgIcon' alt="" /></div>
                            <div className='textNumber'>
                                <CountupNumber end='9000' />
                            </div>
                            <p className='textNumberTitle'>Học viên</p>
                        </div>
                    </div>
                    <div className="col-lg-3 p-4 col-md-6">
                        <div className='boxNumber'>
                            <div><img src={require("../../Assets/Img/imgIcon/001-timetable.png").default} className='imgIcon' alt="" /></div>
                            <div className='textNumber'>
                                <CountupNumber end='1000' />
                            </div>
                            <p className='textNumberTitle'>Khóa học</p>
                        </div>
                    </div>
                    <div className="col-lg-3 p-4 col-md-6">
                        <div className='boxNumber'>
                            <div><img src={require("../../Assets/Img/imgIcon/002-hourglass.png").default} className='imgIcon' alt="" /></div>
                            <div className='textNumber'>
                                <CountupNumber end='33200' />
                            </div>
                            <p className='textNumberTitle'>Giờ học</p>
                        </div>
                    </div>
                    <div className="col-lg-3 p-4 col-md-6">
                        <div className='boxNumber'>
                            <div><img src={require("../../Assets/Img/imgIcon/004-teacher.png").default} className='imgIcon' alt="" /></div>
                            <div className='textNumber'>
                                <CountupNumber end='400' />
                            </div>
                            <p className='textNumberTitle'>Giảng viên</p>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Top Rate Instructor */}
            <div className='mt-5 instrutorContainer'>
                <h6><a href="">Giảng viên hàng đầu</a></h6>
                <input type="checkbox" id='sliderInstrutors' hidden />
                <div className='instrutorItem'>
                    <div className='row mt-4'>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <div className='instrutorContent'>
                                <img src={require('../../Assets/Img/imgInstrutors/instrutor5.jpg').default} alt="" />
                                <h6>Big DadMoon</h6>
                                <div className='textReviewRole'>
                                    <p>Chuyên gia lĩnh vực</p>
                                    <p>lập trình</p>
                                </div>
                                <p className='reviewMentor'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className='textStar'>  4.9</span>
                                </p>
                                <span className='textReviewBot'>100 Đánh giá</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <div className='instrutorContent'>
                                <img src={require('../../Assets/Img/imgInstrutors/instrutor6.jpg').default} alt="" />
                                <h6>IcarDi MenBor</h6>
                                <div className='textReviewRole'>
                                    <p>Chuyên gia ngôn ngữ</p>
                                    <p>Vue Js</p>
                                </div>
                                <p className='reviewMentor'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className='textStar'>  4.9</span>
                                </p>
                                <span className='textReviewBot'>100 Đánh giá</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <div className='instrutorContent'>
                                <img src={require('../../Assets/Img/imgInstrutors/instrutor7.jpg').default} alt="" />
                                <h6>Bladin Slaham</h6>
                                <div className='textReviewRole'>
                                    <p>Chuyên gia hệ thống</p>
                                    <p>máy tính</p>
                                </div>
                                <p className='reviewMentor'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className='textStar'>  4.9</span>
                                </p>
                                <span className='textReviewBot'>100 Đánh giá</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <div className='instrutorContent'>
                                <img src={require('../../Assets/Img/imgInstrutors/instrutor8.jpg').default} alt="" />
                                <h6>Chris Andersan</h6>
                                <div className='textReviewRole'>
                                    <p>Chuyên gia lĩnh vực</p>
                                    <p>Full Skill</p>
                                </div>
                                <p className='reviewMentor'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className='textStar'>  4.9</span>
                                </p>
                                <span className='textReviewBot'>100 Đánh giá</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <div className='instrutorContent'>
                                <img src={require('../../Assets/Img/imgInstrutors/instrutor9.jpg').default} alt="" />
                                <h6>VueLo Gadi</h6>
                                <div className='textReviewRole'>
                                    <p>Chuyên gia lĩnh vực</p>
                                    <p>Phân tích</p>
                                </div>
                                <p className='reviewMentor'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className='textStar'>  4.9</span>
                                </p>
                                <span className='textReviewBot'>100 Đánh giá</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <div className='instrutorContent'>
                                <img src={require('../../Assets/Img/imgInstrutors/instrutor10.jpg').default} alt="" />
                                <h6>Hoàng Nam</h6>
                                <div className='textReviewRole'>
                                    <p>Chuyên gia lĩnh vực</p>
                                    <p>PHP</p>
                                </div>
                                <p className='reviewMentor'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className='textStar'>  4.9</span>
                                </p>
                                <span className='textReviewBot'>100 Đánh giá</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <div className='instrutorContent'>
                                <img src={require('../../Assets/Img/imgInstrutors/instrutor11.jpg').default} alt="" />
                                <h6>David Ngô Savani</h6>
                                <div className='textReviewRole'>
                                    <p>Chuyên gia lĩnh vực</p>
                                    <p>Front End</p>
                                </div>
                                <p className='reviewMentor'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className='textStar'>  4.9</span>
                                </p>
                                <span className='textReviewBot'>100 Đánh giá</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sliderDot'>
                    <div className='dotLeft'>
                        <label htmlFor="sliderInstrutors" className='labelDotLeft'></label>
                        <div className='layDotLeft'></div>
                    </div>
                    <div className='dotRight'>
                        <label htmlFor="sliderInstrutors" className='labelDotRight'></label>
                        <div className='layDotRight'></div>
                    </div>
                </div>
            </div>

            {/* Course Online */}
            <div className='review mt-5'>
                <div className='reviewStudent'>
                    {/* <h6>Cảm nhận học viên</h6> */}
                    <div className='triangleTopRight'></div>
                    <div className='smallBox smallboxLeftTop'></div>
                    <div className='smallBox smallboxRightBottom'></div>
                    <div className='smallBox smallboxRightTop'></div>
                    <div className='smallBox smallboxLeftBottom'></div>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className='reviewImg'>
                                <div className='bgStudentReview'></div>
                                <img src={require('../../Assets/Img/ImgAvatar/avatarReview.png').default} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 quoteRight">
                            <blockquote className='textQoute'>
                                <q>
                                    Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
                                </q>
                            </blockquote>
                            <p>Nhi Dev</p>
                            <span className=''>Học viên xuất sắc</span>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
