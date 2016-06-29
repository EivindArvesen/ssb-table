# SSB Tables

Presents data from SSB in sortable tables.

Demo available at [https://eivind88.github.io/ssb-table/](https://eivind88.github.io/ssb-table/)


## Details
The website first creates a web page with an empty content container, indicating that the page is loading.
When the document is ready, an API-response from SSB is parsed via JJT, the result of which is set as the content containers inner html (content).
Afterwards, the table of data is then given a unique ID for ease of further processing and some bad behavior from the JSONstat library is cleaned up, moving the data labels into a table header proper.
Finally, the DataTables-library - which provides sorting, searching and pagination - is called on the table.

### Implementation
The website is based on the following frameworks and libraries to get up and going quickly:

- [the JSON-stat Javascript Toolkit (JJT)](https://json-stat.com) for API-response parsing.

- [jQuery](https://jquery.com) to resolve dependencies (and provide some easy DOM-manipulation).

- [Bootstrap](http://getbootstrap.com) for basis of design and layout.

- [DataTables](https://www.datatables.net) for table sorting, searching and pagination.


Additionally, the page background image is from [Unsplash](https://source.unsplash.com/sov4Rx5NFqQ), and the dataset was provided by [SSB](http://data.ssb.no/api/v0/dataset/1108?lang=no).


Some assets have local copies, including the body background image and JavaScript not available via CDNs.

### Limitations
Things not accounted for include:

- Error handling
    - API updates
    - Dataset changes
    - Unavailable external resources/files/libraries
    - Lack of browser support for modern features
- The possibility of filtering by variable/category in datacube
- Accessibility features

These limitations are mostly due to time constraints.


### Future Work
In addition to the points mentioned under "Limitations", the following are things that could need some work:

- Performance
    - Caching
    - Further optimization of JavaScript
    - Decrease of file size, for instance via compression (e.g. gzip)
    - Chunking of data loading/parsing (see next major point)
- Generalization with regard to dataset used
- Thorough testing with regards to layout responsivity


## License
Released under [BSD-3](LICENSE.txt)
