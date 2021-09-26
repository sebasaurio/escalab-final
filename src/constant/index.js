const API_URL = 'https://api.rawg.io/api'
const API_KEY = 'fbfed437604e4dc3bd58a410f497c08f'
const KEY_PARAMETER = `key=${API_KEY}`

export const BASE_URL = `${API_URL}`

export const GET_GENRES = `genres?${KEY_PARAMETER}`
export const GET_PLATFORMS = `platforms?${KEY_PARAMETER}`
export const GET_PLATFORMS_LIST = `platforms/lists/parents?${KEY_PARAMETER}`

export const HIGHEST_GAMES = (startDate, endDate, ordering) => `games?${KEY_PARAMETER}&dates=${startDate},${endDate}&ordering=${ordering}`
export const GET_GAME_BY_ID = id => `games/${id}?${KEY_PARAMETER}`

