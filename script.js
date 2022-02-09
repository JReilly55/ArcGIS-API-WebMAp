require(["esri/WebMap", "esri/views/MapView"], function (WebMap, MapView) {
        var webmap = new WebMap({
        portalItem: {
          id: "0ecef6d325a740faa667fc077a726e72"
        }
      });

        var view = new MapView({
          container: "viewDiv",
          map: webmap,
          zoom: 4,
          center: [-95.7129, 37.0902] // longitude, latitude
        });
      });
