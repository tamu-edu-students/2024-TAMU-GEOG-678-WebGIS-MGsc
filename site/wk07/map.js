function main() {
    require([
        "app/HelloWorld",
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/LayerList",
        "esri/widgets/Print",
        "esri/tasks/GeometryService",
        "dojo/domReady!"
      ], function(HelloWorld, Map, MapView, FeatureLayer, LayerList, Print) {

    var map = new Map({
        basemap: "streets"
    });
    
    var view = new MapView({
        container: "mapid",  
        map: map,               
        zoom: 13,
        center: [-96.336335, 30.616988]
        });

    var layerList = new LayerList({
        view: view
    });
    view.ui.add(layerList, {
        position: "top-right"
    })

    // var url = "https://gis.tamu.edu/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";
    // var print = new Print({
    //     view: view,
    //     printServiceUrl: url
    // });
    // view.ui.add(print, {
    //     position: "top-left"
    // })

    var names = [
        {
            firstName: "YOURNAMEHERE", lastName: "YOURNAMEHERE"
        },
        {
            firstName: "OTHERNAMEHERE", lastName: "OTHERNAMEHERE"
        },
        {
            firstName: "LASTLYNAMEHERE", lastName: "LASTLYNAMEHERE"
        }
    ]
    nameIndex = 0;

    

    var widget = new HelloWorld({
        firstName: names[nameIndex].firstName,
        lastName: names[nameIndex].lastName,
        container: "widgetDiv"
      });

      function changeName() {
        widget.set(names[++nameIndex % names.length]);
      }
      
      setInterval(changeName, 1000);

    var constructionTemplate = {
        title: "Construction",
        content: "<b>Project Name:</b> {Name}<br><b>Start Date:</b> {StartDate}<br><b>End Date:</b" +
        "> {EndDate}",
        fieldInfos: [{
            fieldName: "StartDate",
            format: {
                dateFormat: "long-date"
            }
        }, {
            fieldName: "EndDate",
            format: {
                dateFormat: "long-date"
            }
        }]
    };


    const constructionLayer = new FeatureLayer({
        url: "https://gis.tamu.edu/arcgis/rest/services/FCOR/Construction_041817/MapServer/0",
        popupTemplate: constructionTemplate,
        title: "Construction",
    })
    map.add(constructionLayer);

    });
    
}