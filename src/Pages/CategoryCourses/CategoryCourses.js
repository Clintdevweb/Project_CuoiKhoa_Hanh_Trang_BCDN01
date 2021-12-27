import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { courseCategoryList } from '../../Redux/action/CourseAction'
import './CategoryCourses.css'
export default function CategoryCourses(props) {
    const dispatch = useDispatch()
    let categoryCode = props.match.params.maDanhMuc

    const { coursesCategaryList, coursesCategary } = useSelector(state => state.CourseReducer)

    let NameCategory = coursesCategary.find((item, index) => {
        if (item.maDanhMuc === categoryCode) {
            return item
        }
    })

    // console.log(NameCategory.tenDanhMuc); 
    useEffect(() => {
        dispatch(courseCategoryList(categoryCode))
    }, [categoryCode])

    const renderCourseCategoryList = () => {
        return coursesCategaryList.map((course, index) => {
            return (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 mt-4 cardGlobalRes">
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
        })
    }

    return (
        <>
            <section className=''>
                <div className='titleCourse'>
                    <h3>Khóa học theo danh mục</h3>
                    <p>Hãy chọn khóa học mong muốn !!!</p>
                </div>
                <div className='listCourseCategory'>
                    <div className='courseCateName'>
                        <btn className='courseCategoryBtn'>
                            <i class="fas fa-desktop"></i>
                            <span className='ml-2 listCourseTitle'>{NameCategory ? NameCategory.tenDanhMuc : ''}</span>
                        </btn>
                    </div>

                    {/* Course list card */}
                    <div className='mt-3'>
                        <div className='row'>
                            {renderCourseCategoryList()}
                        </div>
                    </div>
                    {/* Cousr list Load */}
                    {/* <div className='courseListFooter'>
                        <div class="wrapperBtn">
                            <a href="#" className='btnLoad'>Xem thêm khóa học</a>
                        </div>

                    </div> */}
                </div>

            </section>
        </>
    )
}
