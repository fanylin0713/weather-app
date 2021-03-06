export const setLocation = (data) => {
	return {
		type: 'SET_LOCATION',
		payload: {
			data: data,
		}
	}
}

export const setDialogOpen = (open) => {
	return {
		type: 'SET_DIALOG_OPEN',
		payload: {
			open: open,
		}
	}
}

export const setWeather = (payload) => {
	return {
		type: 'SET_WEATHER',
		payload: payload
	}
}

export const SET_LOCATION = setLocation().type;
export const SET_DIALOG_OPEN = setDialogOpen().type;
export const SET_WEATHER = setWeather().type;