import { LOADING_COMPONENT_HIDE, LOADING_COMPONENT_SHOW, LOADING_GLOBAL_HIDE, LOADING_GLOBAL_SHOW, RENDER_PAGE_HIDE, RENDER_PAGE_SHOW } from "../types/isLoadingTypes"

const stateDefault = {
    loadingGlobal: false,
    loadingComponent: false,
    renderPage: false
}

export default (state = stateDefault, action) => {
    switch (action.type) {
        case LOADING_GLOBAL_SHOW:
            state.loadingGlobal = true
            return { ...state }
        case LOADING_GLOBAL_HIDE:
            state.loadingGlobal = false
            return { ...state }

        case LOADING_COMPONENT_SHOW:
            state.loadingComponent = true
            return { ...state }
        case LOADING_COMPONENT_HIDE:
            state.loadingComponent = false
            return { ...state }
        case RENDER_PAGE_SHOW:
            state.renderPage = true
            return { ...state }
        case RENDER_PAGE_HIDE:
            state.renderPage = false
            return { ...state }

        default:
            return { ...state }
    }
}
