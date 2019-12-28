const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'NOTIFICATION_CHANGE':
            return action.message
        case 'NOTIFICATION_CLEAN':
            return ''
        default:
            return state
    }
}

export const notificationChange = (message) => {
    return {
        type: 'NOTIFICATION_CHANGE',
        message
    }
}

export const notificationClean = () => {
    return {
        type: 'NOTIFICATION_CLEAN',
    }
}

export const setNotification = (notification, time) => {
    return async dispatch => {
        dispatch(notificationChange(notification))
        setTimeout(() => {
            dispatch(notificationClean())
        }, time *1000)
    }
}

export default notificationReducer