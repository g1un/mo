(function(){
"use strict";
App.gui.add({
    _name: 'suppliers-rating',
    selector: '.js-suppliers-rating',
    build: function($el){

        var ctx = $el;

        var yDataValue = function() {
            return Math.floor(Math.random() * 11);
        };

        var yData = function() {
            var arrLength = yData.length;
            var i = 0;
            var dataArr = [];
            while (i < 10) {
                dataArr.push(yDataValue());
                i++;
            }
            return dataArr;
        };
            // [6, 8, 4, 10, 8, 8, 7, 8, 10, 6];
        var xData = function() {
            var arrLength = yData().length;
            var i = 0;
            var dataArr = [];
            while (i < arrLength) {
                dataArr.push(i+1);
                i++;
            }
            return dataArr;
        };

        var data = {
            labels: xData(),
            datasets: [
                {
                    lineTension: 0,
                    borderWidth: 2,
                    borderColor: "#74ac7d",
                    pointRadius: 3,
                    pointBackgroundColor: "#74ac7d",
                    backgroundColor: "transparent",
                    data: yData(),
                    spanGaps: false
                }
            ]
        };

        //for chart background
        Chart.pluginService.register({
            beforeDraw: function (chart, easing) {
                if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
                    var helpers = Chart.helpers;
                    var ctx = chart.chart.ctx;
                    var chartArea = chart.chartArea;

                    ctx.save();
                    ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
                    ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
                    ctx.restore();
                }
            }
        });

        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            // display: false,
                            beginAtZero: true,
                            max: 11,
                            // stepSize: 2,
                            // fixedStepSize: 2
                            fontColor: '#000'
                        },
                        afterBuildTicks: function(myLineChart) {
                            myLineChart.ticks = [0, 2, 4, 6, 8, 10];
                        }
                    }]
                },
                chartArea: {
                    backgroundColor: '#f6f6f6'
                }
            }
        });

        //resize chart height after it was opened
        $('.js-chart').on('click', function() {
            myLineChart.resize();
        });

        //
        $('.js-rating-chart-update').on('click', function() {
            if(!$(this).hasClass('__active')){
                myLineChart.data.datasets.data = yData();
                myLineChart.update();
            }
            $('.js-rating-chart-update').removeClass('__active');
            $(this).addClass('__active');
        });
    },
    destroy: function($el, methods){
        if(methods && typeof methods['destroy'] == 'function'){
            methods['destroy']();
        }
    }
});

App.run(function(){
    App.onClick('.js-suppliers-info-btn', function(e){
        e.preventDefault();
        var btn = $('.js-suppliers-info-btn');
        var menu = $('.js-suppliers-info');
        var btnIndex = btn.index(this);
        var thisMenu = menu.eq(btnIndex);

        if(!thisMenu.hasClass('__show')) {
            $(this).addClass('__opened');
            thisMenu.addClass('__show');
        } else {
            thisMenu.removeClass('__show');
            $(this).removeClass('__opened');
        }
    });

    App.onClick('.js-suppliers-info-close', function(e){
        e.preventDefault();
        var close = $(this);
        var btn = $('.js-suppliers-info-btn');
        var menu = close.closest('.js-suppliers-info');
        var menuIndex = $('.js-suppliers-info').index(menu);
        var thisBtn = btn.eq(menuIndex);

        menu.removeClass('__show');
        thisBtn.removeClass('__opened');
    });
});

App.run(function(){
    App.onClick('.js-suppliers-open', function(e){
        e.preventDefault();
        var btn = $('.js-suppliers-open');
        var menu = $('.js-suppliers-content');
        var btnIndex = btn.index(this);
        var thisMenu = menu.eq(btnIndex);

        if(!thisMenu.hasClass('__show')) {
            $(this).addClass('__opened');
            thisMenu.addClass('__show');
        } else {
            thisMenu.removeClass('__show');
            $(this).removeClass('__opened');
        }
    });

    App.onClick('.js-suppliers-info-close', function(e){
        e.preventDefault();
        var close = $(this);
        var btn = $('.js-suppliers-info-btn');
        var menu = close.closest('.js-suppliers-info');
        var menuIndex = $('.js-suppliers-info').index(menu);
        var thisBtn = btn.eq(menuIndex);

        menu.removeClass('__show');
        thisBtn.removeClass('__opened');
    });
});
})();