function GetUrlValue(VarSearch) {
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for (var i = 0; i < VariableArray.length; i++) {
        var KeyValuePair = VariableArray[i].split('=');
        if (KeyValuePair[0] === VarSearch) {
            return KeyValuePair[1];
        }
    }
}

function getParamWithDefault(urlParam, defaulValue) {
    var divClass = defaulValue;
    var divClassParam = GetUrlValue(urlParam);
    if (typeof divClassParam !== 'undefined') {
        divClass = divClassParam;
    }
    return divClass;
}