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

function goto(base, param, value){
    var url = addParameter(base, param, value);
    window.location.href = url;
}

function addParameter(url, param, value){
    var hash       = {};
    var parser     = document.createElement('a');

    parser.href    = url;

    var parameters = parser.search.split(/\?|&/);

    for(var i=0; i < parameters.length; i++) {
        if(!parameters[i])
            continue;

        var ary      = parameters[i].split('=');
        hash[ary[0]] = ary[1];
    }

    hash[param] = value;

    var list = [];
    Object.keys(hash).forEach(function (key) {
        list.push(key + '=' + hash[key]);
    });

    parser.search = '?' + list.join('&');
    return parser.href;
}
