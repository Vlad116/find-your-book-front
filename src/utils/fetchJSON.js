import { host } from "../constants"

export const fetchJSON = async (url, reqParams) => {
	let response = reqParams === null && !url.includes(host) ?
        await fetch(url) :
        await fetch(url, {
			headers: {
				// 'Content-Type': 'application/json',
				'Origin': 'http://172.28.116.57:3001/',
				'Host': 'api.findyourbook.borisgk.space'
			}
		})

    if (response.status === 200 || response.status === 201) {
        return response.json()
    } else {
        throw Error(response.statusText)
    }
}