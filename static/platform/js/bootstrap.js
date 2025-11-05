var $table = $('#table')
var $remove = $('#remove')
var selections = []

function getIdSelections() {
    return $.map($table.bootstrapTable('getSelections'), function (row) {
        return row.id
    })
}

function responseHandler(res) {
    $.each(res.rows, function (i, row) {
        row.state = $.inArray(row.id, selections) !== -1
    })
    return res
}


window.operateEvents = {
    'click .like': function (e, value, row, index) {
        alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}

function totalTextFormatter(data) {
    return 'Total'
}

function url(data) {
    return '<a href="' + data + '" title="' + data + '" target="new">' +
        '<i class="fab fa-github fa-2x" style="color: blue"></i></a>';
}

function pdf(data) {
    return '<a href="' + data + '" title="' + data + '" target="new">' +
        '<i class="fas fa-file-pdf fa-2x" style="color: #ff0000"></i></a>';
}

function explorer(data) {
    let splits = data.split(',');
    let result = "";
    for (const split of splits) {
        result += '<a href="' + data + '" title="' + data + '" target="new">' +
            '<i class="fas fa-search fa-2x" style="color: blue"></i></a>';
    }

    return result;
}

function boolean(data) {
    let link = "";
    let str = "";
    let cellValue = data;

    if (cellValue.indexOf(",") > 0) {
        let split = cellValue.split(",");
        cellValue = split[0];
        link = split[1];

        if (link.indexOf("\"") > 0) {
            let cleanedText = link.replace("\"", "");
            str += "<a href=\"#\" title=\"" + cleanedText + "\" >";
        } else {
            str += "<a href=\"" + link + "\" title=\"" + link + "\" target=\"new\" >";
        }
    }

    if ("TRUE".toLowerCase() === cellValue.toLowerCase()) {
        str += "<i class=\"fas fa-check-circle fa-2x\" title=\"True\" style=\"color: #3fb0ac\"></i>";
    } else if ("TRUE/FALSE".toLowerCase() === cellValue.toLowerCase()) {
        str += "<i class=\"fas fa-star-half-alt fa-2x\" title=\"In Progress\"></i>";
    } else if ("FALSE".toLowerCase() === cellValue.toLowerCase()) {
        str += "<i class=\"fas fa-question-circle fa-2x\" style=\"color: #7d4627\"></i>";
    } else {
        str += "<a title='contact us, and help us fill the missing information' " +
            " title=\"Help us\"" +
            "href='https://www.tokens-economy.com/contact/'>" +
            "<i class=\"fas fa-question-circle fa-2x\" style=\"color: red\"></i></a>";
    }

    if (link !== "") {
        str += "</a>";
    }
    return str;
}


function code(data) {
    if (data.indexOf("github.com") > 0) {
        return getSymbolOrEmptyText(data, "fab fa-github fa-2x", "blue");
    }
    if (data.indexOf("gitlab.com") > 0) {
        return getSymbolOrEmptyText(data, "fab fa-gitlab fa-2x", "brown");
    }

    return "<a title='contact us, and help us fill the missing information' " +
        " title=\"Help us\"" +
        "href='https://www.tokens-economy.com/contact/'>" +
        "<i class=\"fas fa-question-circle fa-2x\" style=\"color: red\"></i></a>";
}

function getSymbolOrEmptyText(data, symbol, color) {
    let strb = "";
    if ("" === data) {
        strb += "";
    } else {
        let split = data.split(",");
        for (const s of split) {
            strb += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"new\">" +
                "<i class=\"" + symbol + "\" style=\"color: " + color + "\"></i></a> ";
        }
    }
    return strb;
}

function date(data) {
    return data.substr(0, 10);
}

function link(data) {
    let strb = "";
    let cellValue = data;
    if (cellValue == null || "" === cellValue) {
        strb += "";
    } else if (cellValue.indexOf(",") > 0) {

        if (cellValue.indexOf("\"") > 0) {
            let split = cellValue.split("\"");

            cellValue = split[0].substring(0, split[0].length - 1);
            let text = split[1];
            strb += "<a href=\"#\" title=\"" + text + "\" >" + cellValue + "</i></a>";
            return strb;
        }


        let split = cellValue.split(",");
        let length = split.length;
        if (length % 2 === 0) {
            let i;
            for (i = 0; i < length; i = i + 2) {
                let text = split[i];

                let newText = text;
                if ("Java" === text) {
                    newText = "<i class=\"fab fa-java fa-2x\"></i>";
                }
                if ("Javascript" === text) {
                    newText = "<i class=\"fab fa-js-square fa-2x\"></i>";
                }
                if ("Python" === text) {
                    newText = "<i class=\"fab fa-python fa-2x\"></i>";
                }
                if ("C++" === text || "Cpp" === text) {
                    newText = "<i class=\"fab fa-cuttlefish fa-2x\">++</i>";
                }
                if ("PHP" === text) {
                    newText = "<i class=\"fab fa-php fa-2x\"></i>";
                }

                let link = split[i + 1];
                if (link.indexOf("\"") > 0) {
                    let cleanedText = text.replace("\"", "");
                    strb += "<a href=\"#\" title=\"" + cleanedText + "\" >" + newText + "</i></a>";
                } else {
                    strb += "<a href=\"" + link + "\" title=\"" + text + "\" target=\"_new\" >" + newText + "</a> ";
                }
            }
        }
    } else {
        strb += cellValue;
    }

    return strb;


}

function name(data) {
    return data;
}

function search(data) {
    let strb = "";
    if ("" === data) {
        strb += "";
    } else {
        let split = data.split(",");
        for (const s of split) {
            strb += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"new\">" +
                "<i class=\"fas fa-search fa-2x\" style=\"color: blue\"></i></a> ";
        }
    }

    return strb;
}

function teaser(data) {
    return "<a href=\"https://www.tokens-economy.com/contact/\" title=\"Contact Us at info@disruptr.ch\" >" +
        "<i class=\"fas fa-envelope-square fa-2x\"></i></a>";
}

function text(data) {
    return data;
}

function tooltip(data) {
    return "<a href='#' " +
        "data-toggle=\"tooltip\" " +
        "data-trigger=\"hover\" " +
        "title=\"" + data + "\" " +
        "><i class=\"fas fa-question-circle fa-2x\" style=\"color: blue\"></i></a>";
}

function type(data) {
    if ("Public" === data)
        return "<i class=\"fas fa-globe fa-2x\"></i>";
    else if ("Private" === data)
        return "<i class=\"fas fa-lock fa-2x\"></i>";
    else if (data !== "")
        return "<i class=\"fas fa-globe fa-2x\"></i><i class=\"fas fa-lock fa-2x\"></i>";

    return "";
}


function rating(data) {
    let result = "";
    if (data === "") {
        result += "<i class=\"fas fa-star\"></i>";
    } else {
        let numberOfStars = data;
        let numberOfStarsFull = parseInt(numberOfStars);
        let numberOfStarsHalf = numberOfStars - numberOfStarsFull;

        let i;
        for (i = 0; i < numberOfStarsFull; i++) {
            result += "<i class=\"fas fa-star\"></i>";
        }
        if (numberOfStarsHalf != 0) {
            result += "<i class=\"fas fa-star-half\"></i>";
        }
        for (i = 0; i < (5 - (numberOfStarsFull + numberOfStarsHalf)); i++) {
            result += "<i class=\"far fa-star\"></i>";
        }
    }

    return result;
}

function social(data) {
    let result = "";
    if (data.indexOf(",") > 0) {
        let splits = data.split(',');
        for (const s of splits) {
            if (s.indexOf("twitter") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-twitter fa-2x\"></i></a> ";
            } else if (s.indexOf("telegram") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-telegram fa-2x\"></i></a> ";
            } else if (s.indexOf("t.me") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-telegram fa-2x\"></i></a> ";
            } else if (s.indexOf("reddit") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-reddit fa-2x\"></i></a> ";
            } else if (s.indexOf("medium") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-medium fa-2x\"></i></a> ";
            } else if (s.indexOf("slack") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-slack fa-2x\"></i></a> ";
            } else if (s.indexOf("gitter") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-gitter fa-2x\"></i></a> ";
            } else if (s.indexOf("discord") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-discord fa-2x\"></i></a> ";
            } else if (s.indexOf("youtube") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-youtube fa-2x\"></i></a> ";
            } else if (s.indexOf("bitcointalk") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-bitcoin fa-2x\"></i></a> ";
            } else if (s.indexOf("facebook") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-facebook fa-2x\"></i></a> ";
            } else if (s.indexOf("linkedin") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-linkedin fa-2x\"></i></a> ";
            } else if (s.indexOf("steemit") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fab fa-steemit fa-2x\"></i></a> ";
            } else if (s.indexOf("wikipedia") > 0) {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\" >" +
                    "<i class=\"fab fa-wikipedia-w fa-2x\"></i></a> ";
            } else {
                result += "<a href=\"" + s + "\" title=\"" + s + "\" target=\"_new\">" +
                    "<i class=\"fas fa-comments fa-2x\"></i></a> ";
            }
        }
    } else {
        result += "";
    }
    return result;
}

function initTable() {
    $table.bootstrapTable('destroy').bootstrapTable({
        height: 'auto',
        locale: 'en-US',
        columns:
            [
                [{
                    title: 'Name',
                    field: 'name',
                    rowspan: 2,
                    align: 'center',
                    valign: 'middle',
                    class: 'cName',
                    sortable: true,
                    footerFormatter: totalTextFormatter
                }, {
                    title: 'Rating',
                    colspan: 8,
                    class: 'cRating',
                    align: 'center'
                },
                    {
                        title: 'General',
                        colspan: 4,
                        class: 'cGeneral',
                        align: 'center'
                    },
                    {
                        title: 'Features',
                        colspan: 12,
                        class: 'cFeatures',
                        align: 'center'
                    },
                    {
                        title: 'Token',
                        colspan: 3,
                        class: 'cToken',
                        align: 'center'
                    },
                    {
                        title: 'Links',
                        colspan: 3,
                        class: 'cLinks',
                        align: 'center'
                    },
                    {
                        title: 'Code',
                        colspan: 5,
                        class: 'cCode',
                        align: 'center'
                    },
                    {
                        title: 'Github',
                        colspan: 8,
                        class: 'cGithub',
                        align: 'center'
                    }
                    ,
                    {
                        title: 'Market',
                        colspan: 1,
                        class: 'cMarket',
                        align: 'center'
                    }
                ],
                [
                    {
                        "align": "center",
                        "field": "popularity",
                        "formatter": "rating",
                        "sortable": "true",
                        class: 'cRating',
                        "title": "popularity"
                    },
                    {
                        "align": "center",
                        "field": "quality",
                        "formatter": "rating",
                        "sortable": "true",
                        class: 'cRating',
                        "title": "quality"
                    },
                    {
                        "align": "center",
                        "field": "ease_of_use",
                        "formatter": "rating",
                        "sortable": "true",
                        class: 'cRating',
                        "title": "ease of use"
                    },
                    {
                        "align": "center",
                        "field": "access",
                        "formatter": "rating",
                        "sortable": "true",
                        class: 'cRating',
                        "title": "access"
                    },
                    {
                        "align": "center",
                        "field": "costs",
                        "formatter": "rating",
                        class: 'cRating',
                        "sortable": "true",
                        "title": "costs"
                    },
                    {
                        "align": "center",
                        "field": "scalability",
                        "formatter": "rating",
                        class: 'cRating',
                        "sortable": "true",
                        "title": "scalability"
                    },
                    {
                        "align": "center",
                        "field": "attractiveness",
                        "formatter": "rating",
                        class: 'cRating',
                        "sortable": "true",
                        "title": "attractiveness"
                    },
                    {
                        "align": "center",
                        "field": "industry_focus",
                        "formatter": "text",
                        "sortable": "true",
                        class: 'cRating',
                        "title": "industry focus"
                    },
                    {
                        "align": "center",
                        "field": "our_analysis",
                        "formatter": "teaser",
                        class: 'cGeneral',
                        "sortable": "true",
                        "title": "our analysis"
                    },
                    {
                        "align": "center",
                        "field": "description",
                        "formatter": "tooltip",
                        class: 'cGeneral',
                        "sortable": "true",
                        "title": "description"
                    },
                    {
                        "align": "center",
                        "field": "launch",
                        "formatter": "link",
                        class: 'cGeneral',
                        "sortable": "true",
                        "title": "launch"
                    },
                    {
                        "align": "center",
                        "field": "type",
                        "formatter": "type",
                        class: 'cGeneral',
                        "sortable": "true",
                        "title": "type"
                    },
                    {
                        "align": "center",
                        "field": "National_Institute_of_Standards_and_Technology_(NIST)",
                        "formatter": "boolean",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "NIST"
                    },
                    {
                        "align": "center",
                        "field": "token",
                        "formatter": "boolean",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "token"
                    },
                    {
                        "align": "center",
                        "field": "atomic_swap",
                        "formatter": "boolean",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "atomic swap"
                    },
                    {
                        "align": "center",
                        "field": "language",
                        "formatter": "link",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "language"
                    },
                    {
                        "align": "center",
                        "field": "contract_language",
                        "formatter": "link",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "contract language"
                    },
                    {
                        "align": "center",
                        "field": "consensus",
                        "formatter": "link",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "consensus"
                    },
                    {
                        "align": "center",
                        "field": "whitepaper",
                        "formatter": "pdf",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "whitepaper"
                    },
                    {
                        "align": "center",
                        "field": "governance",
                        "formatter": "tooltip",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "governance"
                    },
                    {
                        "align": "center",
                        "field": "turing",
                        "formatter": "boolean",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "turing"
                    },
                    {
                        "align": "center",
                        "field": "state_channels",
                        "formatter": "boolean",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "state channels"
                    },
                    {
                        "align": "center",
                        "field": "decentralization",
                        "formatter": "link",
                        class: 'cFeatures',
                        "sortable": "true",
                        "title": "decentralization"
                    },
                    {
                        "align": "center",
                        "field": "gdpr",
                        class: 'cFeatures',
                        "formatter": "boolean",
                        "sortable": "true",
                        "title": "gdpr"
                    },
                    {
                        "align": "center",
                        "field": "max_supply",
                        "formatter": "link",
                        class: 'cToken',
                        "sortable": "true",
                        "title": "max supply"
                    },
                    {
                        "align": "center",
                        "field": "total_supply",
                        "formatter": "link",
                        class: 'cToken',
                        "sortable": "true",
                        "title": "total supply"
                    },
                    {
                        "align": "center",
                        "field": "circulating_supply",
                        "formatter": "link",
                        class: 'cToken',
                        "sortable": "true",
                        "title": "circulating supply"
                    },
                    {
                        "align": "center",
                        "field": "documentation",
                        "formatter": "pdf",
                        class: 'cLinks',
                        "sortable": "true",
                        "title": "documentation"
                    },
                    {
                        "align": "center",
                        "field": "explorer",
                        "formatter": "search",
                        class: 'cLinks',
                        "sortable": "true",
                        "title": "explorer"
                    },
                    {
                        "align": "center",
                        "field": "social",
                        class: 'cLinks',
                        "formatter": "social",
                        "sortable": "true",
                        "title": "social"
                    },
                    {
                        "align": "center",
                        "field": "company_code",
                        "formatter": "code",
                        class: 'cCode',
                        "sortable": "true",
                        "title": "company code"
                    },
                    {
                        "align": "center",
                        "field": "platform_code",
                        "formatter": "code",
                        class: 'cCode',
                        "sortable": "true",
                        "title": "platform code"
                    },
                    {
                        "align": "center",
                        "field": "wallet_code",
                        "formatter": "code",
                        class: 'cCode',
                        "sortable": "true",
                        "title": "wallet code"
                    },
                    {
                        "align": "center",
                        "field": "sdk",
                        "formatter": "code",
                        class: 'cCode',
                        "sortable": "true",
                        "title": "sdk"
                    },
                    {
                        "align": "center",
                        "field": "client",
                        "formatter": "link",
                        class: 'cCode',
                        "sortable": "true",
                        "title": "client"
                    },
                    {
                        "align": "center",
                        "field": "github_stars",
                        "formatter": "text",
                        class: 'cGithub',
                        "sortable": "true",
                        "title": "github_stars"
                    },
                    {
                        "align": "center",
                        "field": "github_releases",
                        "formatter": "text",
                        class: 'cGithub',
                        "sortable": "true",
                        "title": "github_releases"
                    },
                    {
                        "align": "center",
                        "field": "forks_count",
                        "formatter": "text",
                        class: 'cGithub',
                        "sortable": "true",
                        "title": "forks_count"
                    },
                    {
                        "align": "center",
                        "field": "open_issues_count",
                        "formatter": "text",
                        class: 'cGithub',
                        "sortable": "true",
                        "title": "open_issues_count"
                    },
                    {
                        "align": "center",
                        "field": "watchers",
                        "formatter": "text",
                        class: 'cGithub',
                        "sortable": "true",
                        "title": "watchers"
                    },
                    {
                        "align": "center",
                        "field": "created_at",
                        "formatter": "date",
                        class: 'cGithub',
                        "sortable": "true",
                        "title": "created_at"
                    },
                    {
                        "align": "center",
                        "field": "updated_at",
                        "formatter": "date",
                        class: 'cGithub',
                        "sortable": "true",
                        "title": "updated_at"
                    },
                    {
                        "align": "center",
                        "field": "fork",
                        "formatter": "boolean",
                        class: 'cGithub',
                        "sortable": "true",
                        "title": "fork"
                    },
                    {
                        "align": "center",
                        "field": "ticker",
                        "formatter": "link",
                        class: 'cMarket',
                        "sortable": "true",
                        "title": "ticker"
                    }
                ]


            ]
    })
    $table.on('check.bs.table uncheck.bs.table ' +
        'check-all.bs.table uncheck-all.bs.table',
        function () {
            $remove.prop('disabled', !$table.bootstrapTable('getSelections').length)

            // save your data, here just save the current page
            selections = getIdSelections()
            // push or splice the selections if you want to save all data selections
        })
    $table.on('all.bs.table', function (e, name, args) {
        console.log(name, args)
    })
    $remove.click(function () {
        var ids = getIdSelections()
        $table.bootstrapTable('remove', {
            field: 'id',
            values: ids
        })
        $remove.prop('disabled', true)
    })
}

$(function () {
    initTable()
})

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('#table').on('all.bs.table', function (e, name, args) {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    });
});