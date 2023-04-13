var hours_chart = {
    // 要创建的图表类型
    type: 'line',
    // 数据集
    data: {
        labels:['未知','未知'],
        datasets: [
            {
                label: "温度",
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(250, 84, 28, 0.6)',
                data: []//{ x: "2022/12/20", y: 0 }, { x: "2022/12/22", y: 12 }, { x: "2022/12/23", y: 9 }
            },
            {
                label: "风速",
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(96, 96, 96, 0.6)',
                hidden:'true',
                yAxisID: 'y1',
                data: []//{ x: "2022/12/20", y: -1 }, { x: "2022/12/22", y: -2 }, { x: "2022/12/23", y: 2 }
            },
            {
                label: "云量",
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(36, 98, 122, 0.6)',
                hidden:'true',
                yAxisID: 'y2',
                data: []//{ x: "2022/12/20", y: -1 }, { x: "2022/12/22", y: -2 }, { x: "2022/12/23", y: 2 }
            },
            {
                label: "降水概率",
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(36, 138, 222, 0.6)',
                hidden:'true',
                yAxisID: 'y3',
                data: []//{ x: "2022/12/20", y: -1 }, { x: "2022/12/22", y: -2 }, { x: "2022/12/23", y: 2 }
            },
            {
                label: "降水量",
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(36, 138, 222, 0.6)',
                hidden:'true',
                data: [],//{ x: "2022/12/20", y: -1 }, { x: "2022/12/22", y: -2 }, { x: "2022/12/23", y: 2 }
                yAxisID: 'y4',
            },
        ],
    },
    // 配置选项
    options: {
        maintainAspectRatio: false,
        scales: {
            // x: {
            //     type: 'time',
            //     time: {
            //       // Luxon format string
            //       tooltipFormat: 'DD T'
            //     },
            //     title: {
            //       display: true,
            //       text: 'Date'
            //     }
            //   },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: false,
                position: 'right',
            },
            y2: {
                type: 'linear',
                display: false,
                position: 'right',
            },
            y3: {
                type: 'linear',
                display: false,
                position: 'right',
            },
            y4: {
                type: 'linear',
                display: false,
                position: 'right',
            }
        },
        plugins:{
            legend: {
                //display: false,
                align:'start',
                //legendItems:[{hidden:'true'}]
              }
        }
        
    }
}
export default hours_chart