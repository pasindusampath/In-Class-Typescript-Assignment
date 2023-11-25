// objects
class Runner{
    constructor() {
        $("#btn").click(()=>{
            this.action()
        });
    }

    action(){
        let location1 = {
            lat: document.getElementById("lat1").value,
            lon: document.getElementById("lon1").value
        }
        let location2 = {
            lat: document.getElementById("lat2").value,
            lon: document.getElementById("lon2").value
        }
        let number = this.calcDistance(location1,location2);
        console.log(number)
        alert(`The distance between ${location1.lat} and ${location1.lon} and ${location2.lat} and ${location2.lon} is ${number}`)
    }





    calcDistance(location1: {lon: number; lat: number}, location2: {lon: number; lat: number}) : number {

        let lon1 = location1.lon;
        let lat1 = location1.lat;

        let lon2 = location2.lon;
        let lat2 = location2.lat;


        // ---- calc distance  ----
        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;
        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Radius of the Earth in kilometers (mean value)
        const R = 6371;

        // Calculate the distance
        let distance = R * c;
// ---- calc distance  ----

        return distance;

    }

}

new Runner()



