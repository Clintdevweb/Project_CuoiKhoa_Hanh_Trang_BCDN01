import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, userCancelCourse, userUpdate, _userUpdate } from '../../Redux/action/UserAction';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./InfoPage.css"

export default function InfoPage(props) {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')
    const { credentials, userPersonalInfo } = useSelector(state => state.UserReducer)

    let { chiTietKhoaHocGhiDanh, taiKhoan, maLoaiNguoiDung } = userPersonalInfo
  
    let loginAccount = JSON.parse(localStorage.getItem('credentials'))

    const openTab = (e, id) => {
        if (!e.target.classList.contains('active')) {
            document.querySelector('.tabLink.active').classList.remove('active')
            document.querySelectorAll('.tabContent').forEach((tabItem, index) => {
                tabItem.classList.remove('active')
            })
            e.target.classList.add('active')
            document.querySelector(`#${id}`).classList.add('active')
        }
    }

    // RenderCourser
    const RenderUserCourses = () => {
        if (chiTietKhoaHocGhiDanh) {
            return chiTietKhoaHocGhiDanh.filter((courses) => {
                if (searchTerm.trim() === '') {
                    return courses
                } else if (courses.tenKhoaHoc.trim().toLocaleLowerCase().includes(searchTerm.trim().toLocaleLowerCase())) {
                    return courses
                }
            }).map((course, index) => {
                return (
                    <div key={index} className='myCourseItem'>
                        <div className='row'>
                            <div className='col-xl-3 col-lg-4'>
                                <img className='imgNet' src={course.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = "http://www.makeforum.org/wp-content/uploads/2021/04/ngon-ngu-lap-trinh-850x415.png" }} alt="" />
                            </div>
                            <div className='col-xl-7 col-lg-6 cardNetContent'>
                                <h6>{course.tenKhoaHoc}</h6>
                                <p className='colorCardTitle'>ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với nhiều quy tắc và cách sử dụng khác nhau...</p>
                                <div class="iconNetCard">
                                    <span class="textCardTitle"><i className="far fa-clock iconOclock"></i> 8 giờ</span>
                                    <span class="textCardTitle"><i className="far fa-calendar iconCalendar"></i> 23 giờ</span>
                                    <span class="textCardTitle"><i className="fas fa-signal iconLevel "></i> All level</span>
                                </div>
                                <p className='iconStarNet'>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                <div className=''>
                                    <img className='imgNetFooter' src={require('../../Assets/Img/imgInstrutors/instrutor10.jpg').default} alt="" />
                                    <span className='ml-2'>Nguyễn Nam</span>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-2 cancelNet'>
                                <button onClick={() => {
                                    const action = userCancelCourse(course.maKhoaHoc)
                                    dispatch(action)
                                }} className='btnGlobal'>Hủy khóa học</button>
                            </div>
                        </div>
                    </div>
                )
            })

        } else {
            return ''
        }
    }

    // User Update Info
    const handleUpdate = (values, formik) => {
        // console.log(values);
        const action = userUpdate(values, formik)
        dispatch(action)
    }

    // Formik form 
    const formik = useFormik({
        initialValues: {
            taiKhoan: loginAccount.taiKhoan,
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            maLoaiNguoiDung: loginAccount.maLoaiNguoiDung,
            maNhom: "GP01",
        },
        validationSchema: Yup.object().shape({
            matKhau: Yup.string()
                .required('Tài khoản không được để trống')
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt'),

            hoTen: Yup.string()
                .required('Tên không được để trống')
                .matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Chỉ nhập kí tự chữ'),

            email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),

            soDT: Yup.string()
                .required('Số điện thoại không được để trống')
                .matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Số điện thoại chưa đúng định đạng'),
        }),
        onSubmit: handleUpdate
    })

    useEffect(() => {
        dispatch(getUserInfo)
    }, [])

    return (
        <>
            <section className='infoPage'>
                <div className='titleCourse'>
                    <h3>Thông tin cá nhân</h3>
                    <p>Thông tin học viên</p>
                </div>
                <div className='infoPageContent'>
                    <div className='row '>
                        <div className='col-lg-3 col-md-4'>
                            <div className='infoLeft'>
                                <img src={credentials.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600" }} alt="" />
                                <h6>Robert Nguyễn</h6>
                                <p>Lập trình viên Front-end</p>
                                <button className='btnInfo'>Hồ sơ cá nhân</button>
                            </div>
                        </div>
                        <div className='col-lg-9 col-md-8'>
                            <div className='infoRight'>
                                {/* <!-- Tab links --> */}
                                <div class="tab">
                                    <button class="tabLink active" onClick={(e) => openTab(e, "infoPersonal")}>Thông tin cá nhân</button>

                                    <button class="tabLink" onClick={(e) => openTab(e, "infoCourse")}>Khóa học</button>
                                </div>

                                {/* <!-- Tab content --> */}
                                <div id="infoPersonal" class="tabContent active" >
                                    {/* Tab active */}
                                    {/* UserInfo */}
                                    <section className='userInfo'>
                                        <div className='userInfoTop'>
                                            <div className='row'>
                                                <div className="col-md-7">
                                                    <div>
                                                        <p>Email:<span class="ml-2">{userPersonalInfo.email}</span></p>
                                                        <p>Họ và tên: <span class="ml-2">{userPersonalInfo.hoTen}</span></p>
                                                        <p>Số điện thoại: <span class="ml-2">{userPersonalInfo.soDt ? userPersonalInfo.soDt : userPersonalInfo.soDT}</span></p>
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <p>Tài khoản: <span class="ml-2">{userPersonalInfo.taiKhoan}</span></p>
                                                    <p>Nhóm: <span class="ml-2">{userPersonalInfo.maNhom}</span>
                                                    </p>
                                                    <p>Đối tượng: <span class="ml-2">{userPersonalInfo.maLoaiNguoiDung === "HV" ? " Học viên" : " Giáo viên"}</span></p>
                                                    <button data-toggle="modal" data-target="#myModal" className='btnGlobal'>Cập nhật</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='userInfoBot'>
                                            <h4>Kĩ năng của tôi</h4>
                                            <div className='row'>
                                                <div className='skillAll col-xl-8 col-lg-6'>
                                                    <div className='mySkill skillBtnHtml'>
                                                        <button className='skillBtnCustom'>html</button>
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className='mySkill skillBtnCss '>
                                                        <button className='skillBtnCustom skillBtnHtml'>css</button>
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className='mySkill skillBtnJs'>
                                                        <button className='skillBtnCustom '>js</button>
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}></div>
                                                        </div>
                                                    </div>
                                                    <div className='mySkill skillBtnReact'>
                                                        <button className='skillBtnCustom skillBtnHtml'>react</button>
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6'>
                                                    <div className='timeStudy'>
                                                        <div className="timeStudyItem">
                                                            <i classNameName='fas fa-user-clock mr-2'></i>
                                                            <div>
                                                                <h6>Giờ học</h6>
                                                                <p>80</p>
                                                            </div>
                                                        </div>
                                                        <div className="timeStudyItem">
                                                            <i className="fas fa-layer-group mr-2"></i>
                                                            <div>
                                                                <h6>Điểm tổng</h6>
                                                                <p>80</p>
                                                            </div>
                                                        </div>
                                                        <div className="timeStudyItem">
                                                            <i className="fas fa-swatchbook mr-2"></i>
                                                            <div>
                                                                <h6>Buổi học</h6>
                                                                <p>40</p>
                                                            </div>
                                                        </div>
                                                        <div className="timeStudyItem">
                                                            <i className="fas fa-signal mr-2"></i>
                                                            <div>
                                                                <h6>Cấp độ</h6>
                                                                <p>Trung cấp</p>
                                                            </div>
                                                        </div>
                                                        <div className="timeStudyItem">
                                                            <i className="fas fa-graduation-cap mr-2"></i>
                                                            <div>
                                                                <h6>Học lực</h6>
                                                                <p>Khá</p>
                                                            </div>
                                                        </div>
                                                        <div className="timeStudyItem">
                                                            <i className="fas fa-book mr-2"></i>
                                                            <div>
                                                                <h6>Bài tập</h6>
                                                                <p>100</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </section>
                                </div>
                                <div id="infoCourse" class="tabContent">
                                    {/*CourseInfo  */}
                                    <section className='myCourseInfo'>
                                        <div className='findCourseNet'>
                                            <h6>Khóa học của tôi</h6>
                                            <form action="">
                                                <input type="text" onChange={(e) => {
                                                    setSearchTerm(e.target.value)
                                                }} className='searchForm' placeholder='Tìm kiếm...' />
                                            </form>
                                        </div>
                                        {RenderUserCourses()}

                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal fade" id="myModal"
                style={{'paddingLeft':'0'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header modalUpdateHeader">
                                <h5 className="modal-title">Chỉnh sửa thông tin cá nhân</h5>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body modalUpdate">
                                <form action="#" onSubmit={formik.handleSubmit}>
                                    <h6>Họ và tên</h6>
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="text" placeholder="Họ tên"
                                        name='hoTen'
                                        value={formik.values.hoTen} />
                                    {formik.errors.hoTen && formik.touched.hoTen ? <div className='errorMessage'>{formik.errors.hoTen}</div> : <div className='message'></div>}

                                    <h6>Mật khẩu</h6>
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="password" placeholder="Mật khẩu"
                                        name='matKhau'
                                        value={formik.values.matKhau} />
                                    {formik.errors.matKhau && formik.touched.matKhau ? <div className='errorMessage' >{formik.errors.matKhau}</div> : <div className='message'></div>}

                                    <h6>Email</h6>
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="email" placeholder="Email"
                                        name="email"
                                        value={formik.values.email} />
                                    {formik.errors.email && formik.touched.email ? <div className='errorMessage'>{formik.errors.email}</div> : <div className='message'></div>}

                                    <h6>Số điện thoại</h6>
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="phone" placeholder="Số điện thoại"
                                        name='soDT'
                                        value={formik.values.soDT} />
                                    {formik.errors.soDT && formik.touched.soDT ? <div className='errorMessage'>{formik.errors.soDT}</div> : <div className='message'></div>}
                                    
                                    {/* <input type="file" /> */}

                                    <div class="modal-footer">
                                        <button type="submit" className="btnSubmit" >Hoàn thành</button>
                                        <button type="button" className="btnSubmit btnClose" data-dismiss="modal">Đóng</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
