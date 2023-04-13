var days_chart = {
    // 要创建的图表类型
    type: 'line',
    // 数据集
    data: {
        labels:['未知','未知'],
        datasets: [
            {
                label: "最高温度",
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(250, 84, 28, 0.6)',
                data: []//{ x: "2022/12/20", y: 0 }, { x: "2022/12/22", y: 12 }, { x: "2022/12/23", y: 9 }
            },
            {
                label: "最低温度",
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(36, 138, 222, 0.6)',
                data: []//{ x: "2022/12/20", y: -1 }, { x: "2022/12/22", y: -2 }, { x: "2022/12/23", y: 2 }
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
            }
        },
        plugins:{
            legend: {
                display: false,
              }
        }
        
    }
}
export default days_chart