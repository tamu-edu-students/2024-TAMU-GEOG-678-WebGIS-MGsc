function Run() {
  if (data != null) {
    //$.each(data.features, function( index, value ) {
    //console.log( index + ": " + value );
    //});

    var countyCovidCases;
    /* $.ajax({
        type: "GET",  
        url: "us-counties-covidCases.csv",
        dataType: "text",       
        success: function(response)  
        {
            var countyCovidCases = $.csv.toArrays(response);
            alert("read data");
        }   
      }); */

    $.ajax({
      url: "us-counties-covidCases.csv",
      async: false,
      success: function(csvd) {
        countyCovidCases = $.csv.toObjects(csvd);
        //var countyCovidCasesString = JSON.stringify(items);
        //countyCovidCases = JSON.parse(countyCovidCasesString);
      },
      dataType: "text",
      complete: function() {
        merge();
      }
    });
  }

  function merge() {
    $.each(countyCovidCases, function(index, value) {
      var fipsState = value.fips.substring(0, 2);
      var fipsCounty = value.fips.substring(2);
      //if (index < 10) {
        var dayObject = {
          date: value.date,
          cases: value.cases,
          deaths: value.deaths
        };

        $.each(data.features, function(index, value) {
          if (
            value.properties.STATE == fipsState &&
            value.properties.COUNTY == fipsCounty
          ) {
            var dayValues = value.properties.dayValues;
            if (dayValues == null) {
              value.properties.dayValues = new Array();
            }

            value.properties.dayValues.push(dayObject);
          }
        });

        console.log(
          index +
            ": " +
            value.date +
            " | " +
            value.county +
            " | " +
            value.state +
            " | " +
            fipsState +
            " | " +
            fipsCounty +
            " | " +
            value.cases +
            " | " +
            value.deaths
        );
      //}
    });

    console.log(data);
    $( "#results" ).html(JSON.stringify(data));
  }
}


function Run2() {
  if (countyCaseData != null) {
    alert();
  }
}