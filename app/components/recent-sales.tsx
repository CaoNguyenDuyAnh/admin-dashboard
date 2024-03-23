"use client"

import { Table, TableProps, Typography  } from "antd"
import * as React from "react"


export const data: DataType[] = [
  {
    property: "SPH",
    totalRoomInHotel:2,
    roomRevenue: 316,
    fAndB: 609316.220400464,
    otherRevenue: 51547,
    totalRevenue: 945,
    occ: 21,
    reportDate: "2024-03-14"
  },
 
  {
    property: "SR03",
    totalRoomInHotel:2,
    roomRevenue: 316,
    fAndB: 609316.220400464,
    otherRevenue: 51547,
    totalRevenue: 965,
    occ: 21,
    reportDate: "2024-03-01"
  },
  {
    property: "SR04",
    totalRoomInHotel:2,
    roomRevenue: 316,
    fAndB: 609316.220400464,
    otherRevenue: 51547,
    totalRevenue: 955,
    occ: 21,
    reportDate: "2024-03-02"
  },
  {
    property: "SV01",
    totalRoomInHotel:2,
    roomRevenue: 316,
    fAndB: 609316.220400464,
    otherRevenue: 51547,
    totalRevenue: 945,
    occ: 21,
    reportDate: "2024-03-03"
  },
  {
    property: "ALL",
    totalRoomInHotel:2,
    roomRevenue: 316,
    fAndB: 659316,
    otherRevenue: 61547,
    totalRevenue: 995,
    occ: 2,
    reportDate: "2024-03-11"
  },
  {
    property: "KP02",
    totalRoomInHotel:2,
    roomRevenue: 316,
    fAndB: 509316,
    otherRevenue: 71547,
    totalRevenue: 905,
    occ: 2,
    reportDate: "2024-03-13"
  },
  {
    property: "SV01",
    totalRoomInHotel:2,
    roomRevenue: 316,
    fAndB: 709316.220400464,
    otherRevenue: 81547,
    totalRevenue: 955,
    occ: 22,
    reportDate: "2024-03-12"
  },
]

export type DataType = {
  property: string
  totalRoomInHotel: number
  roomRevenue: number
  fAndB: number
  otherRevenue: number
  totalRevenue: number
  occ: number
  reportDate: string

}



export const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Property',
    dataIndex: 'property',
    key: 'property',
  },
  {
    title: 'Total Room In Hotel',
    dataIndex: 'totalRoomInHotel',
    key: 'totalRoomInHotel',
  },
  {
    title: 'Room Revenue',
    dataIndex: 'roomRevenue',
    key: 'roomRevenue',
  },
  {
    title: 'F&B Revenue',
    dataIndex: 'fAndB',
    key: 'fAndB',
  },
  {
    title: 'Other Revenue',
    dataIndex: 'otherRevenue',
    key: 'otherRevenue',
  },
  {
    title: 'Total Revenue',
    dataIndex: 'totalRevenue',
    key: 'totalRevenue',
  },
  {
    title: 'Occ',
    dataIndex: 'occ',
    key: 'occ',
  },
  {
    title: 'Report Date',
    dataIndex: 'reportDate',
    key: 'reportDate',
  },
]
const { Text } = Typography;
export function RecentSales({dataString}: {dataString: string}) {
  const filteredData = data.filter((item) => item.reportDate === dataString);
  const hasFilteredData = filteredData.length > 0;
  return (
    <div className="w-full my-4">
        {hasFilteredData ? (
          <Table 
            dataSource={filteredData.map((item, index) => ({ ...item, key: index }))} 
            columns={columns} 
            bordered 
            summary={(pageData) => {
              let totalRoom = 0;
              let totalRoomRevenue = 0;
              let totalfAndB = 0;
              let totalOtherRevenue = 0;
              let totalRevenueInHotel = 0;
              let totalOcc = 0;
      
              pageData.forEach(({ totalRoomInHotel, roomRevenue, fAndB, otherRevenue, totalRevenue, occ }) => {
                totalRoom += totalRoomInHotel;
                totalRoomRevenue += roomRevenue;
                totalfAndB += fAndB;
                totalOtherRevenue += otherRevenue;
                totalRevenueInHotel += totalRevenue;
                totalOcc += occ;
              });
      
              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>Grand Total</Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      <Text >{totalRoom}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2}>
                      <Text>{totalRoomRevenue}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={3}>
                      <Text>{totalfAndB}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={4}>
                      <Text>{totalOtherRevenue}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={5}>
                      <Text>{totalRevenueInHotel}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={6}>
                      <Text>{totalOcc}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={7}>{dataString}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />
        ) : (
          <Table dataSource={filteredData} columns={columns} bordered />
        )}
    </div>
  )
}
