
        // Initialize the ECharts instance
        var chartDom = document.getElementById('chart');
        var myChart = echarts.init(chartDom);
        var option = {
            title: {
                left: '0',
                top: '0',
                textStyle: {
                    color: '#202124',
                    fontSize: 18,
                    fontWeight: 600
                }
            },
            color: [
                '#1f5a84', '#4d80a6', '#6a99b8', '#8db3cc', '#bed5e5', '#f3b985'
            ],
            series: [
                {
                    name: 'Access',
                    type: 'pie',
                    radius: ['45%', '75%'],
                    center: ['50%', '55%'],
                    avoidLabelOverlap: true,
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{name|{b}}\n{value|{c}%}',
                        rich: {
                            name: {
                                fontSize: 14,
                                color: '#333',
                                fontWeight: 600,
                                lineHeight: 18,
                                align: 'center'
                            },
                            value: {
                                fontSize: 13,
                                color: '#666',
                                align: 'center'
                            }
                        }
                    },
                    labelLine: {
                        show: true,
                        length: 25,
                        length2: 35,
                        lineStyle: {
                            color: '#999',
                            width: 1
                        }
                    },
                    data: [
                        { value: 35, name: 'SOPs' },
                        { value: 25, name: 'MoMs' },
                        { value: 15, name: 'Manuals' },
                        { value: 10, name: 'LMIs' },
                        { value: 10, name: 'Feasibility' },
                        { value: 5, name: 'Audits' }
                    ]
                }
            ]
        };
        option && myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        });
 
    
        const toggleBtn = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
   
    