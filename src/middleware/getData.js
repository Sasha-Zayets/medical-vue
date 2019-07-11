import axios from 'axios'

export default function getData (url) {
    axios.get(url)
    .then((data) => {
        return data.data
    }).catch(err => {
        console.log(err)
    })
}