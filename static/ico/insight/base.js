var $j = jQuery;

nytg.filename = function(index) {
    var tabs = [
        "total",
        "mandatory",
        "discretionary",
        "department"
    ];
    return tabs[index];
}
$j("#save").click(function() {
    $j.ajax({
        type: "POST",
        url: "/save",
        data: {
            'filename': nytg.filename(nytg.mainNav.currentIndex),
            'contents': nytg.c.getCirclePositions()
        }
    });

})



nytg.ready = function() {
    var that = this;
    nytg.c = new nytg.Chart();
    nytg.c.init();
    nytg.c.start();

    this.highlightedItems = [];

    // nytg.s = new nytg.SearchBox("nytg-search", nytg.budget_array_data, "name", "department", "budget_2012", "id");
    // nytg.s.findCallback = function(evt){
    //   var foundId = evt.id;
    //
    //   for (var i=0; i < that.highlightedItems.length; i++) {
    //     $j("#nytg-circle"+that.highlightedItems[i]).css({'stroke-width':1});
    //   };
    //
    //   that.highlightedItems = [evt.id];
    //   for (var i=0; i < that.highlightedItems.length; i++) {
    //     $j("#nytg-circle"+that.highlightedItems[i]).css({'stroke-width':20});
    //   };
    //
    // }




    var currentOverlay = undefined;
    nytg.mainNav = new nytg.ChooseList($j(".nytg-navigation"), onMainChange);

    function onMainChange(evt) {
        var tabIndex = evt.currentIndex
        if (this.currentOverlay !== undefined) {
            this.currentOverlay.hide();
        };
        if (tabIndex === 0) {
            nytg.c.totalLayout();
            this.currentOverlay = $j("#nytg-totalOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#nytg-chartFrame").css({
                'height': 550
            });
        } else if (tabIndex === 1) {
            nytg.c.mandatoryLayout();
            this.currentOverlay = $j("#nytg-mandatoryOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#nytg-chartFrame").css({
                'height': 550
            });
        } else if (tabIndex === 2) {
            nytg.c.discretionaryLayout();
            this.currentOverlay = $j("#nytg-discretionaryOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#nytg-chartFrame").css({
                'height': 650
            });
        } else if (tabIndex === 4) {
            nytg.c.comparisonLayout();
            this.currentOverlay = $j("#nytg-comparisonOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#nytg-chartFrame").css({
                'height': 650
            });
        } else if (tabIndex === 3) {
            nytg.c.departmentLayout();
            this.currentOverlay = $j("#nytg-departmentOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#nytg-chartFrame").css({
                'height': 850
            });
        }

    }






}