//主图总量散点图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .banner"))
    let options = {
        title: {
            text: "全国法定传染病年度总发病数散点图"
        },
        xAxis: {
            data: ['2020', '2021', '2022', '2023', '2024']
        },
        yAxis: {},
        tooltip: {  // 添加tooltip配置
            trigger: 'item',
            formatter: '{b}年<br/>法定传染病总发病数: {c}'
        },
        series: [
            {
                type: 'scatter',
                data: [3131132, 3272757, 2999152, 3488571, 4148999],
                symbolSize: 12,  // 可选：调整散点大小
                itemStyle: {
                    color: '#5470c6'  // 可选：设置散点颜色
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航鼠疫柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu1"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "鼠疫年度数据",
                type: "bar",
                barWidth: "35%",
                data: [4, 1, 2, 5, 2],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航霍乱柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu2"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "霍乱年度数据",
                type: "bar",
                barWidth: "35%",
                data: [11, 5, 31, 29, 10],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航艾滋病柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu3"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "艾滋病年度数据",
                type: "bar",
                barWidth: "35%",
                data: [63174, 61032, 52709, 59533, 55344],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航病毒性肝炎柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu4"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "病毒性肝炎年度数据",
                type: "bar",
                barWidth: "35%",
                data: [1413126, 1534595, 1454797, 1723556, 1913478],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航麻疹柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu5"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "麻疹年度数据",
                type: "bar",
                barWidth: "35%",
                data: [1234, 916, 981, 950, 1458],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航流行性出血热柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu6"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "流行性出血热年度数据",
                type: "bar",
                barWidth: "35%",
                data: [8546, 9483, 5558, 5549, 4555],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航狂犬病柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu7"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "狂犬病年度数据",
                type: "bar",
                barWidth: "35%",
                data: [212, 165, 143, 131, 170],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航登革热柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu8"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "登革热年度数据",
                type: "bar",
                barWidth: "35%",
                data: [802, 48, 548, 19627, 24330],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航痢疾柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu9"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "痢疾年度数据",
                type: "bar",
                barWidth: "35%",
                data: [58299, 50902, 36306, 37425, 34749],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航肺结核柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu10"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "肺结核年度数据",
                type: "bar",
                barWidth: "35%",
                data: [876576, 828074, 712586, 773512, 702565],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航伤寒柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu11"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "伤寒年度数据",
                type: "bar",
                barWidth: "35%",
                data: [7321, 7480, 6029, 5749, 4851],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航百日咳柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu12"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "百日咳年度数据",
                type: "bar",
                barWidth: "35%",
                data: [4994, 9162, 39781, 38205, 494321],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航猩红热柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu13"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "猩红热年度数据",
                type: "bar",
                barWidth: "35%",
                data: [17206, 29507, 21216, 25276, 67404],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航布鲁氏菌病柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu14"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "布鲁氏菌病年度数据",
                type: "bar",
                barWidth: "35%",
                data: [50115, 73645, 71437, 75858, 67418],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航淋病柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu15"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "淋病年度数据",
                type: "bar",
                barWidth: "35%",
                data: [106592, 130022, 99094, 106233, 104160],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//二级导航梅毒柱状图模块
(function () {
    //实例化对象
    let myChart = echarts.init(document.querySelector(".main-content .aside-left .menu16"))
    let options = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "2020",
                    "2021",
                    "2022",
                    "2023",
                    "2024",
                ],
                axisTicks: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "rgba(0, 0, 0, .8)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, .8)",
                    }
                }
            }
        ],
        series: [
            {
                name: "梅毒年度数据",
                type: "bar",
                barWidth: "35%",
                data: [522920, 537720, 497934, 616933, 674184],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    }
    //把配置给实例对象
    myChart.setOption(options);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

//右侧饼形图模块
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".main-content .other-nav"));
    option = {
        title: {
            text: "传染病总发病数年度分布饼形图"
        },
        tooltip: {  // 新增tooltip配置
            trigger: 'item',
            formatter: '{b}年: {c}'
        },
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            data: ["2020", "2021", "2022", "2023", "2024"],
            textStyle: {
                color: "rgba(0,0,0,.8)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: "年龄分布",
                type: "pie",
                center: ["50%", "42%"],
                radius: ["40%", "60%"],
                color: [
                    "#065aab",
                    "#066eab",
                    "#0682ab",
                    "#0696ab",
                    "#06a0ab",
                    "#06b4ab",
                    "#06c8ab",
                    "#06dcab",
                    "#06f0ab"
                ],
                label: { show: false },
                labelLine: { show: false },
                data: [
                    { value: 3131132, name: "2020" },
                    { value: 3272757, name: "2021" },
                    { value: 2999152, name: "2022" },
                    { value: 3488571, name: "2023" },
                    { value: 4148999, name: "2024" }
                ],
                emphasis: {  // 可选：高亮样式设置
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//鼠疫折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num1 .floor-info"))

    var dataAll = [
        {year: "2020", data: [0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0]},
        {year: "2021", data: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]},
        {year: "2022", data: [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]},
        {year: "2023", data: [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0]},
        {year: "2024", data: [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "鼠疫数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num1 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//霍乱折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num2 .floor-info"))

    var dataAll = [
        {year: "2020", data: [0, 0, 0, 0, 1, 0, 3, 5, 2, 0, 0, 0]},
        {year: "2021", data: [0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0]},
        {year: "2022", data: [1, 0, 1, 0, 0, 6, 10, 6, 4, 3, 0, 0]},
        {year: "2023", data: [0, 0, 3, 0, 0, 0, 4, 8, 9, 2, 0, 0]},
        {year: "2024", data: [0, 0, 0, 0, 0, 0, 5, 4, 1, 0, 0, 0]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "霍乱数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num2 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//艾滋病折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num3 .floor-info"))

    var dataAll = [
        {year: "2020", data: [2759, 2133, 4808, 5980, 5484, 6915, 6124, 5166, 6927, 4546, 5824, 6508]},
        {year: "2021", data: [3260, 3051, 5951, 5283, 5047, 5978, 3373, 4710, 5039, 5357, 6493, 7490]},
        {year: "2022", data: [3109, 3364, 5020, 3837, 4490, 5626, 4667, 4679, 4389, 3965, 4299, 5264]},
        {year: "2023", data: [1815, 4516, 5785, 4937, 5455, 5759, 4854, 5122, 5121, 5210, 5664, 5295]},
        {year: "2024", data: [3194, 3344, 5422, 5357, 4987, 5201, 4832, 4485, 4450, 4403, 4760, 4909]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "艾滋病数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num3 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//病毒性肝炎折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num4 .floor-info"))

    var dataAll = [
        {year: "2020", data: [112087, 63330, 108657, 125181, 120921, 123474, 132782, 126950, 130930, 119322, 125059, 124433]},
        {year: "2021", data: [120035, 101058, 148245, 137828, 131135, 126681, 139343, 126075, 125821, 118664, 126320, 133390]},
        {year: "2022", data: [132430, 117382, 140574, 117617, 125758, 131857, 138449, 141324, 123318, 109020, 104438, 72630]},
        {year: "2023", data: [89719, 140383, 155705, 142746, 141492, 133888, 151809, 166606, 147758, 152695, 156977, 143778]},
        {year: "2024", data: [159136, 142012, 181006, 168275, 165333, 152225, 170397, 163748, 146669, 148566, 154173, 161938]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "病毒性肝炎数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num4 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//麻疹折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num5 .floor-info"))

    var dataAll = [
        {year: "2020", data: [205, 66, 69, 58, 74, 91, 111, 119, 111, 116, 118, 96]},
        {year: "2021", data: [59, 38, 77, 69, 80, 72, 80, 66, 85, 88, 105, 97]},
        {year: "2022", data: [40, 44, 71, 52, 110, 110, 92, 112, 78, 111, 82, 79]},
        {year: "2023", data: [18, 53, 81, 85, 109, 89, 97, 105, 78, 88, 78, 69]},
        {year: "2024", data: [51, 31, 66, 148, 162, 201, 171, 111, 118, 107, 116, 176]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "麻疹数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num5 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//流行性出血热折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num6 .floor-info"))

    var dataAll = [
        {year: "2020", data: [684, 374, 433, 540, 686, 826, 503, 313, 320, 611, 1796, 1460]},
        {year: "2021", data: [562, 365, 424, 510, 685, 724, 467, 255, 291, 678, 2120, 2402]},
        {year: "2022", data: [781, 330, 344, 333, 553, 566, 404, 235, 205, 400, 895, 512]},
        {year: "2023", data: [217, 270, 330, 305, 399, 365, 344, 240, 198, 439, 1320, 1122]},
        {year: "2024", data: [511, 247, 234, 300, 359, 433, 313, 202, 192, 374, 777, 613]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "流行性出血热数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num6 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//狂犬病折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num7 .floor-info"))

    var dataAll = [
        {year: "2020", data: [19, 12, 15, 15, 14, 17, 22, 23, 15, 24, 12, 24]},
        {year: "2021", data: [15, 14, 13, 17, 11, 18, 12, 14, 13, 19, 11, 8]},
        {year: "2022", data: [13, 7, 8, 9, 6, 15, 17, 20, 14, 12, 16, 6]},
        {year: "2023", data: [5, 15, 9, 14, 10, 11, 9, 12, 8, 13, 12, 13]},
        {year: "2024", data: [15, 4, 6, 9, 13, 13, 16, 18, 17, 20, 18, 21]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "狂犬病数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num7 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//登革热折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num8 .floor-info"))

    var dataAll = [
        {year: "2020", data: [71, 17, 16, 6, 4, 4, 23, 55, 247, 287, 63, 9]},
        {year: "2021", data: [5, 2, 0, 4, 5, 8, 3, 3, 4, 6, 5, 3]},
        {year: "2022", data: [0, 0, 2, 0, 2, 1, 3, 1, 28, 326, 174, 11]},
        {year: "2023", data: [1, 11, 7, 9, 21, 55, 1604, 4198, 6494, 5388, 1685, 154]},
        {year: "2024", data: [27, 42, 38, 58, 109, 130, 554, 1801, 4845, 11083, 5201, 442]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "登革热数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num8 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//痢疾折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num9 .floor-info"))

    var dataAll = [
        {year: "2020", data: [3309, 1912, 2892, 3695, 5664, 7775, 7943, 7270, 6206, 4793, 3568, 3272]},
        {year: "2021", data: [2633, 2623, 3488, 3945, 5011, 6408, 6982, 5326, 5159, 3745, 2775, 2807]},
        {year: "2022", data: [2169, 2043, 2836, 2587, 3520, 4708, 5055, 4505, 3134, 2559, 1975, 1215]},
        {year: "2023", data: [1924, 2346, 2530, 2794, 3753, 4353, 4684, 4626, 3658, 3067, 1963, 1727]},
        {year: "2024", data: [1689, 1673, 2087, 2522, 3408, 4197, 4512, 4374, 3564, 2680, 2128, 1915]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "痢疾数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num9 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//肺结核折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num10 .floor-info"))

    var dataAll = [
        {year: "2020", data: [67682, 44933, 73427, 85684, 83385, 84952, 83101, 76423, 75409, 67843, 69640, 64097]},
        {year: "2021", data: [64813, 55425, 80803, 80548, 75243, 73884, 76648, 67966, 67812, 61391, 61753, 61788]},
        {year: "2022", data: [61697, 52596, 73110, 61185, 63590, 67901, 71422, 69019, 58638, 51125, 48352, 33951]},
        {year: "2023", data: [53730, 71841, 76331, 72846, 69068, 64788, 66989, 66563, 61859, 59239, 57432, 52826]},
        {year: "2024", data: [60660, 51945, 70013, 68732, 63595, 58241, 62437, 57944, 55609, 52943, 51790, 48656]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "肺结核数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num10 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//伤寒折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num11 .floor-info"))

    var dataAll = [
        {year: "2020", data: [513, 364, 360, 415, 607, 832, 863, 830, 848, 689, 517, 483]},
        {year: "2021", data: [362, 327, 487, 522, 649, 829, 939, 913, 786, 655, 524, 487]},
        {year: "2022", data: [405, 280, 408, 421, 566, 700, 741, 730, 631, 494, 419, 234]},
        {year: "2023", data: [184, 341, 452, 452, 547, 627, 657, 678, 596, 480, 377, 358]},
        {year: "2024", data: [285, 190, 249, 354, 418, 532, 557, 550, 612, 456, 340, 308]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "伤寒数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num11 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//百日咳折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num12 .floor-info"))

    var dataAll = [
        {year: "2020", data: [1141, 738, 874, 479, 277, 159, 131, 142, 201, 267, 291, 294]},
        {year: "2021", data: [205, 115, 220, 308, 427, 519, 820, 1227, 1094, 825, 1148, 2254]},
        {year: "2022", data: [2354, 2576, 3747, 3415, 3991, 4213, 4234, 5355, 3849, 2594, 2160, 1293]},
        {year: "2023", data: [883, 538, 821, 1074, 1334, 1512, 2767, 4793, 4517, 4430, 6410, 9126]},
        {year: "2024", data: [15275, 17105, 27078, 91272, 97669, 85817, 74964, 43216, 17316, 10118, 7829, 6662]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "百日咳数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num12 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//猩红热折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num13 .floor-info"))

    var dataAll = [
        {year: "2020", data: [6352, 580, 444, 442, 562, 677, 789, 763, 877, 1102, 1925, 2693]},
        {year: "2021", data: [2502, 989, 1819, 2790, 4124, 4165, 2430, 1152, 1202, 1634, 2717, 3983]},
        {year: "2022", data: [3232, 990, 1848, 1639, 2588, 2896, 1758, 940, 1020, 1383, 1896, 1026]},
        {year: "2023", data: [276, 470, 858, 1102, 1898, 2684, 2237, 1209, 1546, 2533, 4637, 5826]},
        {year: "2024", data: [6255, 1783, 3610, 6125, 10271, 12397, 6309, 2028, 2179, 3040, 5111, 8296]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "猩红热数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num13 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//布鲁氏菌病折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num14 .floor-info"))

    var dataAll = [
        {year: "2020", data: [2445, 933, 3508, 5360, 5264, 6193, 6437, 4972, 4492, 3206, 3611, 3694]},
        {year: "2021", data: [3175, 3425, 7220, 7848, 8096, 9670, 9222, 6867, 5932, 3622, 3649, 4919]},
        {year: "2022", data: [4396, 4689, 6656, 7124, 8824, 9943, 9683, 7887, 5311, 2535, 2569, 1820]},
        {year: "2023", data: [2318, 5662, 6543, 7677, 9067, 8326, 9164, 8354, 5987, 4477, 4540, 3743]},
        {year: "2024", data: [4207, 3758, 6197, 7141, 8007, 7711, 8272, 6564, 4612, 3381, 3878, 3690]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "布鲁氏菌病数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num14 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//淋病折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num15 .floor-info"))

    var dataAll = [
        {year: "2020", data: [8254, 3524, 4661, 6267, 8104, 9292, 10621, 10724, 11643, 10551, 11260, 11691]},
        {year: "2021", data: [10284, 7650, 10878, 10874, 10773, 10950, 11747, 12019, 11744, 10720, 11119, 11264]},
        {year: "2022", data: [9273, 6979, 8886, 7821, 8395, 8988, 9263, 9275, 8598, 7959, 7630, 6027]},
        {year: "2023", data: [4762, 6589, 8029, 7931, 9077, 8863, 10104, 10924, 10147, 10328, 10065, 9414]},
        {year: "2024", data: [9112, 6350, 7824, 8138, 8611, 8396, 9571, 9377, 8923, 8998, 9211, 9649]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "淋病数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num15 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//梅毒折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num16 .floor-info"))

    var dataAll = [
        {year: "2020", data: [39671, 21448, 41154, 46728, 46753, 46538, 50386, 46838, 48965, 44438, 45305, 44696]},
        {year: "2021", data: [40079, 33615, 50682, 49113, 47999, 47423, 51531, 46091, 45792, 40900, 42174, 42321]},
        {year: "2022", data: [39586, 34683, 46978, 39513, 43751, 48507, 51391, 50482, 44470, 39054, 35152, 24367]},
        {year: "2023", data: [28708, 43574, 49855, 48926, 53258, 52007, 58247, 61068, 55767, 56981, 57719, 50823]},
        {year: "2024", data: [56658, 46868, 64161, 61511, 60962, 54760, 62430, 58717, 54136, 53569, 52434, 47978]}
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "梅毒数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num16 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();

//新冠肺炎折线图模块
(function () {
    var myChart = echarts.init(document.querySelector(".num17 .floor-info"))

    var dataAll = [
        {year: "2020", data: [11791, 68033, 1730, 995, 143, 517, 803, 721, 356, 583, 545, 529]},
        {year: "2021", data: [2493, 348, 305, 454, 451, 670, 1213, 1893, 1264, 1081, 1581, 3490]},
        {year: "2022", data: [3825, 3387, 41577, 65484, 7547, 1541, 3919, 13855, 7172, 9354, 62723, null]},
    ]

    var option = {
        color: ["#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#ed3f35"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(0,0,0,.8)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "新冠肺炎数据",
                type: "line",
                stack: "人数",
                // 是否让线条圆滑显示
                smooth: true,
                data: dataAll[0].data
            }
        ]
    }

    // 初始化图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })

    $(".num17 .floor-nav-list").on("click", "a", function () {
        option.series[0].data = dataAll[$(this).parent().index()].data
        myChart.setOption(option)
    })
})();
