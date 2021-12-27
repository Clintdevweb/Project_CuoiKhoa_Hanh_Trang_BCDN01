import { GET_MY_COURSE, GET_INFO_USER, LOG_IN, UP_DATE, CANCEL_COURSE } from "../types/userTypes"

const stateDefault = {
    credentials: {},
    userPersonalInfo: {}, 

}

const UserReducer = (state = stateDefault, action) => {
    // console.log(action)
    switch (action.type) {
        case LOG_IN: {
            state.credentials = { ...state.credentials, ...action.data }

            return { ...state }
        }

        case GET_INFO_USER: {
            state.userPersonalInfo = action.data
            return { ...state }
        }

        case UP_DATE: {
            state.userPersonalInfo = { ...state.userPersonalInfo, ...action.data }

            return { ...state }
        }

        default: return { ...state }
    }
}

export default UserReducer