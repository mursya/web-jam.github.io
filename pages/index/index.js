var map = L.mapbox.map(
	'map',
	'gurugray.ho2fj0do',
	{
		zoomControl: false,
		shareControl: false
	})
    .setView([44.955, 34.083], 16);

map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// disable tap handler, if present.
if (map.tap) map.tap.disable();
