// objects
var Runner = /** @class */ (function () {
    function Runner() {
        var _this = this;
        $("#btn").click(function () {
            _this.action();
        });
    }
    Runner.prototype.action = function () {
        var location1 = {
            lat: document.getElementById("lat1").value,
            lon: document.getElementById("lon1").value
        };
        var location2 = {
            lat: document.getElementById("lat2").value,
            lon: document.getElementById("lon2").value
        };
        var number = this.calcDistance(location1, location2);
        console.log(number);
        alert("The distance between ".concat(location1.lat, " and ").concat(location1.lon, " and ").concat(location2.lat, " and ").concat(location2.lon, " is ").concat(number));
    };
    Runner.prototype.calcDistance = function (location1, location2) {
        var lon1 = location1.lon;
        var lat1 = location1.lat;
        var lon2 = location2.lon;
        var lat2 = location2.lat;
        // ---- calc distance  ----
        var dLat = lat2 - lat1;
        var dLon = lon2 - lon1;
        var a = Math.pow(Math.sin(dLat / 2), 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // Radius of the Earth in kilometers (mean value)
        var R = 6371;
        // Calculate the distance
        var distance = R * c;
        // ---- calc distance  ----
        return distance;
    };
    return Runner;
}());
new Runner();
