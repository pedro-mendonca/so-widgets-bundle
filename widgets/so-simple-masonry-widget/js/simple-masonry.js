/* globals jQuery */
jQuery(function ($) {
    var $grid = $('.sow-masonry-grid');

    var resizeMasonry = function(){
        var columnWidth;
        $grid.each(function(){
            var $$ = $(this);
            var numColumns = $$.data('numColumns');
            $$.css('width', 'auto');
            columnWidth = $$.width()/numColumns;
            $$.width(Math.floor(columnWidth)*numColumns);
        });

        $('.sow-masonry-grid > .sow-masonry-grid-item').each(function(){
            var $$ = $(this);
            var rowSpan = $$.data('rowSpan');
            $$.css('height', columnWidth * rowSpan);

            var $img = $$.find('> img');
            var imgAR = $img.attr('height') > 0 ? $img.attr('width')/$img.attr('height') : 1;
            var itemAR = $$.height() > 0 ? $$.width()/$$.height() : 1;
            imgAR = parseFloat(imgAR.toFixed(3));
            itemAR = parseFloat(itemAR.toFixed(3));
            if(imgAR > itemAR) {
                $img.css('width', 'auto');
                $img.css('height', '100%');
            }
            else {
                $img.css('height', 'auto');
                $img.css('width', '100%');
            }
        });
    };

    $(window).resize(resizeMasonry);
    resizeMasonry();

    $grid.masonry({
        itemSelector: '.sow-masonry-grid-item',
        columnWidth: '.sow-masonry-grid-sizer',
        percentPosition: true
    });
});