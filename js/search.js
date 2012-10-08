
var apiUrl = "http://click.ingenuity.com/api/search.json/";

var Search = {

    listLookupsApi: apiUrl + "listLookups",
    searchApi: apiUrl + "fetch?keywords=",

    execSearchTimeout: 0,

    init: function() {
        Search.loadLookups();

        $('#inputKeyword').keydown(Search.queueSearch);
    },

    loadLookups: function() {
        // TODO: populate lookups
        $.getJSON(Search.listLookupsApi + "?callback=?", function(response) {
            $.each(response['researchAreas'], function(i, area) {
//                console.log(area);
            });
            $.each(response['researchGoals'], function(i, goal) {
//                console.log(goal);
            });
            $.each(response['experimentalPlatforms'], function(i, platform) {
//                console.log(platform);
            });

            Search.onInit();
        });
    },

    onInit: function() {
        $('#inputKeyword').focus();
    },

    queueSearch: function() {
        clearTimeout(Search.execSearchTimeout);

        Search.execSearchTimeout = setTimeout(Search.cleanAndExecSearch, 700);
    },

    cleanAndExecSearch: function() {
        Search.execSearch();
    },

    execSearch: function() {
        var searchFilter = Search.getSearchString();

        $('#searchResultsListing').html("");

        $.getJSON(Search.searchApi + searchFilter + "&callback=?", function(response) {
            $.each(response.hits, function(i, searchItem) {
                $('#templateSearchResult').tmpl(searchItem).appendTo('#searchResultsListing');
            });
        });
    },

    getSearchString: function() {
        var keyword = $('#inputKeyword').val().trim();

        var searchFilter = "";

        searchFilter += encodeURIComponent(Search.makeSearchString(searchFilter, "url_content", keyword));

        return searchFilter;
    },

    makeSearchString: function(existingSearchString, fieldName, fieldValue) {
        var searchString = "";

        if (fieldValue.length > 0) {
            searchString += (existingSearchString.length === 0) ? "" : ";";

            searchString += fieldName;
            searchString += ":";
            searchString += fieldValue;
        }

        return searchString;
    }
};