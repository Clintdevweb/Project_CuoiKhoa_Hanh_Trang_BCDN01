import { GET_COURSE_CATEGORY, GET_COURSE_CATEGORY_LIST, GET_COURSE_DETAIL, GET_COURSE_LIST, GET_COURSE_PAGINATION, GET_COURSE_SEARCH_LIST } from "../types/courseTypes"

const stateDefault = {
    coursesList: [],
    coursesCategary: [],
    coursesCategaryList: [],
    coursesSearchList: [],
    courseDetail: {
        "maKhoaHoc": "",
        "biDanh": "",
        "tenKhoaHoc": "",
        "moTa": "",
        "luotXem":"" ,
        "hinhAnh": "",
        "maNhom": "",
        "ngayTao": "",
        "soLuongHocVien": 0,
        "nguoiTao": {
            "taiKhoan": "",
            "hoTen": "",
            "maLoaiNguoiDung": "",
            "tenLoaiNguoiDung": ""
        },
        "danhMucKhoaHoc": {
            "maDanhMucKhoahoc": "",
            "tenDanhMucKhoaHoc": ""
        }
    },
    coursesPagination : {}
    
}


const CourseReducer = (state = stateDefault, action) => {
    // console.log(action)
    switch (action.type) {
        case GET_COURSE_LIST: {
            state.coursesList = action.data

            return { ...state }
        }

        case GET_COURSE_CATEGORY: {
            state.coursesCategary = action.data
            return { ...state }
        }

        case GET_COURSE_CATEGORY_LIST: {
            state.coursesCategaryList = action.data
            return { ...state }
        }

        case GET_COURSE_SEARCH_LIST: {
            state.coursesSearchList = action.data
            return { ...state }
        }

        case GET_COURSE_DETAIL: {
            state.courseDetail = action.data
            return { ...state }
        }

        case GET_COURSE_PAGINATION: {
            // console.log(action.data);
            state.coursesPagination = action.data
            return { ...state }
        }

        default: return { ...state }
    }
}

export default CourseReducer