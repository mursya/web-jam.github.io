var map = L.mapbox.map(
	'map',
	'gurugray.i4aa67g8',
	{
		zoomControl: false,
		shareControl: false
	})
    .setView([44.94616, 34.10092], 17);

map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// disable tap handler, if present.
if (map.tap) map.tap.disable();
