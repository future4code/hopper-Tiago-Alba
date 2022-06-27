import axios from "axios"


export const importTrips = (set) => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tiago-Alba-Moreno/trips", {

    }).then((res) => {
        set(res.data.trips)

    }).catch((err) => {
        alert("Nada encontrado!")
    })
}
export const fetchTrips = () =>

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tiago-Alba-Moreno/trips", {

    })


