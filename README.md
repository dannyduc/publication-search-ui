# Publication Search UI

Sample code on how to use the publication search API.

API URL http://click.ingenuity.com/api/search.json/fetch

Parameters:

    keywords, skip, count, callback
    
Example URL:

    http://click.ingenuity.com/api/search.json/fetch?keywords=url_content:brca1;keys:"Genetics";keys:"Biomarkers - Diagnostic Markers";keys:"Genotyping"&skip=0&count=30&callback=jQuery1510619701842777431_1349714216462
    
Minimum example with JSONP:
    
[brca1]: http://click.ingenuity.com/api/search.json/fetch?keywords=url_content:brca1

* Search [brca1] http://click.ingenuity.com/api/search.json/fetch?keywords=url_content:brca1

Parameters:

* keywords - name and value are separated by colon ':'.  name/value pairs are separated by semi-colon ';'
    * url_content - the search string
    * keys - key words from various categories
* skip - skip first n results
* count - max results to return
* callback - JSONP callback method

Overview:

* Keyword categories are loaded from http://click.ingenuity.com/api/search.json/listLookups
* Search events are trigger via keydown events
* JQuery template is use for search results rendering.
* Use http://click.ingenuity.com/api/search.json/shorten?url= to generate short url