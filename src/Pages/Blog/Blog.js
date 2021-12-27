import React from 'react'
import './Blog.css'
export default function Blog() {
    return (
        <>
            <section className='blogCourse'>
                <div className='titleCourse'>
                    <h3>Blog</h3>
                    <p>Thông tin công nghệ số!!!</p>
                </div>
                <div className='blogCourseContainer'>
                    <h6><a href=""><i class="fas fa-bullhorn"></i>PHÙ HỢP VỚI BẠN</a></h6>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='blogItemLeft'>
                                <div className='row'>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1671/61b6368a3a089.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1671/61b6368a3a089.jpg" }} alt="" />
                                                </div>
                                                <h6>Thời gian và động lực</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1653/61b46a3d757cc.png" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1653/61b46a3d757cc.png" }} alt="" />
                                                </div>
                                                <h6>Tailwind css và cách cài đặt cơ bản </h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1637/61b175b3debf2.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1653/61b46a3d757cc.png" }} alt="" />

                                                </div>
                                                <h6>Cấu trúc cơ bản trong HTML</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Custom theme Material UI với TypeScript đơn giản, hiệu quả...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1463/61a1bbd28851c.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1463/61a1bbd28851c.jpgog_posts/1653/61b46a3d757cc.png" }} alt="" />
                                                </div>
                                                <h6>Material UI custom theme với TypeScript</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Trắc hẳn ai cũng biết một trang web thì không thể nào thiếu đi HTML và HTML làm nên cấu trúc của một trang web...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1385/6197a09e60b56.png" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1385/6197a09e60b56.png" }} alt="" />
                                                </div>
                                                <h6>Cách tạo một component nhanh chóng chỉ bằng 3 ký tự</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Tạo một component nhiều lúc cũng khá mất nhiều thời gian nên mình xin giới thiệu extention này cho mọi người nhé...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1355/619482df77279.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1355/619482df77279.jpg" }} alt="" />
                                                </div>
                                                <h6>Material UI custom theme với TypeScript</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Như các bạn đã biết chúng ta sẽ sử dụng target="_blank" cho thẻ a để khi người dùng click vô sẽ mở liên kết trên một tab mới...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1069/617946ecf0f63.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1069/617946ecf0f63.jpg" }} alt="" />
                                                </div>
                                                <h6>Xử lý bất đồng bộ trong Javascript (phần 2)</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như đồng...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1073/6179eca8efb18.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1073/6179eca8efb18.jpg" }} alt="" />
                                                <h6>TyperScrip là gì, Vì sao nên dùng TyperScript</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='blogItemRight'>
                                <div className='blogRightBox'>
                                    <h6>Các chủ đề được đề xuất</h6>
                                    <ul>
                                        <li><a href="">Front-end / Mobile apps</a></li>
                                        <li><a href="">UI / UX / Design</a></li>
                                        <li><a href="">BACK-END</a></li>
                                        <li><a href="">Thư viện</a></li>
                                        <li><a href="">Chia sẻ người trong nghề</a></li>
                                        <li><a href="">Châm ngôn IT</a></li>
                                        <li><a href="">Chủ đề khác</a></li>
                                    </ul>
                                </div>

                                <div className='blogRightBox'>
                                    <h6>Bài đăng được đề xuất</h6>
                                    <div className='postBlog'>
                                        <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1027/6174b331c4b4f.png" alt="" />
                                        <h6>Routing trong reactjs</h6>
                                        <p className='colorCardTitle'>Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...</p>
                                        <div className='imgPost'>
                                            <img src={require('../../Assets/Img/imgInstrutors/instrutor13.jpg').default} alt="" />
                                            <span className='colorCardTitle'> Nguyên Văn</span>
                                        </div>
                                    </div>
                                    <div className='postBlog'>
                                        <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1021/6173be68944ad.jpg" alt="" />
                                        <h6>Lập trình hướng đối tượng oop</h6>
                                        <p className='colorCardTitle'>Chúng ta sẽ cùng nhau tìm hiểu cách oop trong reactjs...</p>
                                        <div className='imgPost'>
                                            <img src={require('../../Assets/Img/imgInstrutors/instrutor12.jpg').default} alt="" />
                                            <span className='colorCardTitle'> Nguyên Văn Vũ</span>
                                        </div>
                                    </div>
                                    <div className='postBlog'>
                                        <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1017/6172259ab8b80.png" alt="" />
                                        <h6>Xử Lý Bất Đồng Bộ Trong Javascript</h6>
                                        <p className='colorCardTitle'>Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,...). Và đây...</p>
                                        <div className='imgPost'>
                                            <img src={require('../../Assets/Img/imgInstrutors/instrutor11.jpg').default} alt="" />
                                            <span className='colorCardTitle'> Nguyên Minh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
