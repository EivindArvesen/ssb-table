$(document).ready(function() {
/*
    MANGLER:
    - Ytelsesforbedring
        - CDN
        - Lokale kopier av bg, js, etc.
        - Caching
    - Filtrering (på variabler/kategorier i datacube)
    - Generalisering (brukbar med hvilket som helst datasett)
    - Universell utforming
 */
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        console.log('Storage available.')
    } else {
        alert('This site needs LocalStorage to work properly.\nPlease enable it or switch to a modern browser.')
    }


    JSONstat(
      'https://data.ssb.no/api/v0/dataset/1108.json?lang=no',
      function(){
        var html=JSONstatUtils.datalist(
          this,
          {
            counter: true,
            tblclass: "table table-striped table-bordered table-condensed"
          }
        );
        $('#debug').html(html);
        $('#debug').find('table').attr("id", "table");

        // Fix bad behavior from JSONstat library
        $('<thead></thead>').prependTo('#table').append($('#table tbody tr:first'));
        $('#table').DataTable();
    });
  }
);
