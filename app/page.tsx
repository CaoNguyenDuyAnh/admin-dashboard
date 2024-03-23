'use client'
import { Card, Col, DatePicker, DatePickerProps, Row, Statistic } from "antd";
import { RecentSales, data } from "./components/recent-sales";
import  Chart  from "./components/overview";
import { useState } from "react";
import dayjs from "dayjs";


export default function Home() {
  const currentDate = dayjs();
  const[dataCalender, setDataCalender] = useState("")
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDataCalender(dateString.toString())
  };
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight ml-8 mt-4">Dashboard</h2>
      <div className="ml-2 mt-4">
        <Row gutter={8}>
          <Col span={6}>
            <Card>
              <Statistic title="TOTAL REVENUE" value={112893} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="ROOM REVENUE" value={112893} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="F&B REVENUE" value={112893} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="TOTAL ROOM SOLD OUT" value={112893} />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="ml-2 mt-4">
        <Card >
          <h2 className="text-xl font-bold tracking-tight">Recent Sales</h2>
          <DatePicker onChange={onChange} defaultValue={currentDate}/>
          <RecentSales dataString={dataCalender} />
        </Card>
      </div>
      <div className="ml-2 mt-4">
        <Card >
          <h2 className="text-xl font-bold tracking-tight">Overviews Report by day</h2>
          <Chart/>
        </Card>
      </div>
    </>
  );
}
