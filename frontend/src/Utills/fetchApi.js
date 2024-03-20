//this file is for clean coding and we do not need to fetch every where we want we just use env here and import this file
const fetchApi = async (url, option = {}) => {
    try {
        const res = await fetch(import.meta.env.VITE_BASE_API + url, option)
        const data = res.json()
        return data
    } catch (err) {
        alert(err)
    }
}
export default fetchApi