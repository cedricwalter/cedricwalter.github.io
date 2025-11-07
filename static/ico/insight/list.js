var nytg = nytg || {};
var $j = jQuery;

nytg.ChooseList = function(node, changeCallback) {
    this.container = $j(node);
    this.selectedNode = null;
    this.currentIndex = null;
    this.onChange = changeCallback;
    this.elements = this.container.find('li');
    this.container.find('li').on('click', $j.proxy(this.onClickHandler, this));
    this.selectByIndex(0);
};

nytg.ChooseList.prototype.onClickHandler = function(evt) {
    evt.preventDefault();
    this.selectByElement(evt.currentTarget);
};


nytg.ChooseList.prototype.selectByIndex = function(i) {
    this.selectByElement(this.elements[i])
};


nytg.ChooseList.prototype.selectByElement = function(el) {
    if (this.selectedNode) {
        $j(this.selectedNode).removeClass("selected");
    };
    $j(el).addClass("selected");
    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i] === el) {
            this.currentIndex = i;
        }
    };
    this.selectedNode = el;
    this.onChange(this);
};