<div id="googleMap" style="width:500px;height:380px;"></div>

<script src="http://maps.googleapis.com/maps/api/js"></script>
<script>
    function initialize() {
        var mapProp = {
            center:new google.maps.LatLng(25.678988,-100.456789),
            zoom:5,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp)
    }
    google.maps.event.addDomListener(window, 'load', initialize)
</script>