$(document).ready(function() {
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
