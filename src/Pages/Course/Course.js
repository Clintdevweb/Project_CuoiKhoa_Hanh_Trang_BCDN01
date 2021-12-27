import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import PageLoadingComponent from '../../component/PageLoadingComponent/PageLoadingComponent';

import PaginationPages from '../../component/Pagination/PaginationPages'
import { LOADING_COMPONENT_HIDE, LOADING_COMPONENT_SHOW } from '../../Redux/types/isLoadingTypes';
import './Course.css'
export default function Course() {
    const dispatch = useDispatch()
    const { coursesPagination } = useSelector(state => state.CourseReducer)

    const { renderPage } = useSelector(state => state.IsLoadingReducer)
    // console.log(renderPage);

    let { items } = coursesPagination

    const renderCoursePag = () => {
        if (items) {
            return items.map((course, index) => {
                return (
                    <div key={index} className="col-xl-3 col-lg-4 col-md-6 mt-4 cardGlobalRes cardEffect">
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
            })
        } else {
            return ''
        }
    }

    return (
        <>
            <section>
                <div className='titleCourse'>
                    <h3>Khóa học</h3>
                    <p>Bắt đầu hành trình nào!!!</p>
                </div>
                <div className='coursesContainer'>
                    <div className='row'>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle1'>
                                <h6>Chương trình học</h6>
                                <i className="fas fa-laptop"></i>
                                <p>300</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle2'>
                                <h6>Nhà sáng tạo</h6>
                                <i className="fas fa-camera"></i>
                                <p>10000</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle3'>
                                <h6>Nhà thiết kế</h6>
                                <i className="fas fa-briefcase"></i>
                                <p>400</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle4'>
                                <h6>Bài giảng</h6>
                                <i className="fas fa-book"></i>
                                <p>3000</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle5'>
                                <h6>Video</h6>
                                <i className="fas fa-play-circle"></i>
                                <p>40000</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle6'>
                                <h6>Lĩnh vực</h6>
                                <i className="fas fa-dice-d20"></i>
                                <p>200</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='courseListPage'>
                    <h6><i className="fas fa-bookmark"></i>Danh sách khóa học</h6>
                    <div className='row'>
                        {renderPage ? renderCoursePag() : null}
                        <PageLoadingComponent />

                    </div>
                </div>
                {/* Pagination */}
                <PaginationPages />
            </section>
        </>
    )
}
