function initialize() {
    var mapProp = {
        center:new GoogleMapClassUpdatingState.maps.LatLng(25.678988,-100.456789),
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    var map=new GoogleMapClassUpdatingState.maps.Map(document.getElementById("googleMap"), mapProp)

    var marker=new GoogleMapClassUpdatingState.maps.Marker({
        position:mapProp.center
    })
    marker.setMap(map)
}