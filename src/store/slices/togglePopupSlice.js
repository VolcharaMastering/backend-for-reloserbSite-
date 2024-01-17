import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addTaskPopupOpen: false,
    updateTaskPopup: {},
}

const togglePopupSlice = createSlice({
    name: 'togglePopup',
    initialState,
    reducers: {
        openPopup: (state, { payload }) => {
            const { popupType, isOpen, taskId: someValue } = payload
            if (someValue) {
                if (!state.updateTaskPopup[someValue]) {
                    state.updateTaskPopup[someValue] = false
                }
                state.updateTaskPopup[someValue] = true
            } else {
                state[`${popupType}PopupOpen`] = isOpen
            }
        },
        closePopup: (state) => {
            state.addTaskPopupOpen = false
            state.updateTaskPopup = {}
        },
    },
})

export const { openPopup, closePopup } = togglePopupSlice.actions
export const popupReducer = togglePopupSlice.reducer
