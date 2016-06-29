JSONstat(
  'http://data.ssb.no/api/v0/dataset/1106.json?lang=no',
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

    //new Tablesort(document.getElementById('table'));
    $(document).ready(function() {
        $('#table').DataTable();
    } );
  }
);

/*
        MANGLER:
        - Caching
        - Filtrering (på variabler/kategorier)
        - Generalisering (brukbar med hvilket som helst datasett)
        - Ikoner (trekanter) i thead, indikasjon på nåværende sortering
        - Ytelsesforbedring
        - Universell utforming
 */
