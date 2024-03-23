"use client"
// import { dashboardSampleV0_4MealDetailData } from '@/sampledata_meal_detail';
import { DatePicker, Table, TableColumnsType } from 'antd';
const { RangePicker } = DatePicker;

// interface DataType {
//   key: React.Key;
//   date: string;
//   adultCount: number;
//   childCount: number;
//   adultSales: number;
//   childSales: number;
//   count: number;
//   sale: number;
//   salePercent: number;
//   countPercent: number;
// }

// interface ExpandedDataType {
//   key: React.Key;
//   outlet: string;
//   adultCount: number;
//   childCount: number;
//   adultSales: number;
//   childSales: number;
//   count: number;
//   sale: number;
//   salePercent: number;
//   countPercent: number;
// }

//   // const expandedRowRender = () => {
//   //   const columns: TableColumnsType<ExpandedDataType> = [
//   //     { title: 'Date', dataIndex: 'date', key: 'date' },
//   //     { title: 'Name', dataIndex: 'name', key: 'name' },
//   //     {
//   //       title: 'Status',
//   //       key: 'state',
//   //     },
//   //     { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
//   //     {
//   //       title: 'Action',
//   //       dataIndex: 'operation',
//   //       key: 'operation',
//   //     },
//   //   ];

//   //   const data = [];
//   //   for (let i = 0; i < 3; ++i) {
//   //     data.push({
//   //       key: i.toString(),
//   //       date: '2014-12-24 23:12:00',
//   //       name: 'This is production name',
//   //       upgradeNum: 'Upgraded: 56',
//   //     });
//   //   }
//   //   return <Table columns={columns} dataSource={data} pagination={false}  />;
//   // };
//   // Hàm đệ quy để chuyển các thuộc tính con thành thuộc tính ngang cấp
//   const flattenObject = (obj: any, parentKey: string = ''): any => {
//     return Object.keys(obj).reduce((acc: any, key: string) => {
//       const currentKey = parentKey ? `${parentKey}-${key}` : key;
//       if (typeof obj[key] === 'object') {
//         const flattenedObj = flattenObject(obj[key], currentKey);
//         Object.assign(acc, flattenedObj);
//       } else {
//         acc[currentKey] = obj[key];
//       }
//       return acc;
//     }, {});
//   };
  
//   // Lặp qua mảng và áp dụng hàm flattenObject cho mỗi phần tử


//   const columns: TableColumnsType<DataType> = [
//     { title: 'Date', dataIndex: 'report_date', key: 'report_date' },
//     { title: 'RVC', dataIndex: 'outlet_code', key: 'outlet_code' },
//     { title: 'Period', dataIndex: 'version', key: 'version' },
//     { title: 'A.Count', dataIndex: 'total-adults_actual-count', key: 'total-adults_actual-count' },
//     { title: 'C.Count', dataIndex: 'total-children_actual-count', key: 'total-children_actual-count' },
//     { title: 'A.Sales', dataIndex: 'total-adults_actual-sales', key: 'total-adults_actual-sales' },
//     { title: 'C.Sales', dataIndex: 'total-children_actual-sales', key: 'total-children_actual-sales' },
//     { title: 'Count', dataIndex: 'total-total_actual-count', key: 'total-total_actual-count' },
//     { title: 'Count %', dataIndex: 'total-total_actual-percentage_count', key: 'total-total_actual-percentage_count'},
//     { title: 'Sales', dataIndex: 'total-total_actual-sales', key: 'total-total_actual-sales' },
//     { title: 'Sales %', dataIndex: 'total-total_actual-percentage_sales', key: 'total-total_actual-percentage_sales' },
//   ];

//   const data: DataType[] = dashboardSampleV0_4MealDetailData;
//   const flattenedData = data.map((item) => {
//     return flattenObject(item);
//   });
  
//   // Log ra màn hình
//   console.log(flattenedData);
  
export default function Detail() {
  return (
    <>
      <div className='flex items-center mt-4'>
        <h2 className="text-4xl font-bold tracking-tight ml-8">Period Detail</h2>
        <RangePicker picker="month"  className='ml-8'/>
      </div>
      <div>
        <Table
          // columns={columns}
          // expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
          // dataSource={flattenedData}
        />
      </div>
    </>
  );
}
