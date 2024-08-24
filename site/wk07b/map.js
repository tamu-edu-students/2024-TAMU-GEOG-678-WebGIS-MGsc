function main() {
    require([
        "esri/Map",
        "esri/views/SceneView",
        "esri/layers/SceneLayer",
        "dojo/domReady!"
      ], function(Map, SceneView, SceneLayer) {
  
        var map = new Map({
          basemap: "dark-gray",
          ground: "world-elevation"
        });
  
        var view = new SceneView({
          container: "mapid",
          map: map,
          camera: {
            position: [-74.0338, 40.6913, 707],
            tilt: 81,
            heading: 50
          }
        });
  
        var sceneLayer = new SceneLayer({
          portalItem: {
            id: "2e0761b9a4274b8db52c4bf34356911e"
          },
          popupEnabled: false
        });
        map.add(sceneLayer);
  
        var symbol = {
          type: "mesh-3d", 
          symbolLayers: [{
            type: "fill", 
            material: {
              color: [244, 247, 134]
            }
          }]
        };

        sceneLayer.renderer = {
          type: "simple", 
          symbol: symbol
        };
      });
    
}