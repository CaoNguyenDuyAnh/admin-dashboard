'use client'
import * as d3 from "d3"
// import {LineChart} from "@d3/multi-line-chart"
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
// chart = LineChart(unemployment, {
//   x: d => d.date,
//   y: d => d.unemployment,
//   z: d => d.division,
//   yLabel: "↑ Unemployment (%)",
//   width,
//   height: 500,
//   color: "steelblue",
// })

const data = [
  {
    report_date: '2024-02-23',
    total: {
      total_actual: {
        count: 18,
        percentage_count: 100,
        sales: 7750000,
        percentage_sales: 100
      },
      adults_actual: {
        count: 16,
        percentage_count: 89,
        sales: 7750000,
        percentage_sales: 100
      },
      children_actual: {
        count: 2,
        percentage_count: 11,
        sales: 0,
        percentage_sales: 0
      }
    }
  }
];

// Hàm đệ quy để chuyển các thuộc tính con thành thuộc tính ngang cấp
const flattenObject = (obj: any, parentKey: string = ''): any => {
  return Object.keys(obj).reduce((acc: any, key: string) => {
    const currentKey = parentKey ? `${parentKey}-${key}` : key;
    if (typeof obj[key] === 'object') {
      const flattenedObj = flattenObject(obj[key], currentKey);
      Object.assign(acc, flattenedObj);
    } else {
      acc[currentKey] = obj[key];
    }
    return acc;
  }, {});
};

// Lặp qua mảng và áp dụng hàm flattenObject cho mỗi phần tử
const flattenedData = data.map((item) => {
  return flattenObject(item);
});

// Log ra màn hình
console.log(flattenedData);

export default function Reservation() {
  return (
    <>
      <div className='flex items-center mt-4'>
        <h2 className="text-4xl font-bold tracking-tight ml-8">Resevation Forecast</h2>
        <RangePicker picker="month"  className='ml-8'/>
      </div>
    </>
  );
}
