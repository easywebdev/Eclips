function checkCssSupport(containerSelector) {
    var supportValues = [
        {
            feature: "display",
            value  : "flex",
        }
    ], supportIndex, curFeature,
       curValue, notSupportedClass;
    for (supportIndex in supportValues) {
        curFeature = supportValues[supportIndex].feature;
        curValue   = supportValues[supportIndex].value;
        notSupportedClass = containerSelector +'-no-' + curValue + '-support';
        $(containerSelector).addClass(notSupportedClass);
        if (typeof(CSS) !== 'undefined') {
            if (CSS.supports(curFeature, curValue)) {
                $(containerSelector).removeClass(notSupportedClass);
            }
        }
    }
}

checkCssSupport(block);
checkCssSupport(block_item);