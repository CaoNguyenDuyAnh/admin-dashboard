import { useMemo, TouchEvent, MouseEvent } from "react";
import { Bar } from "@visx/shape";
import appleStock, { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import { scaleBand, scaleLinear } from "@visx/scale";
import { localPoint } from "@visx/event";
import { TooltipWithBounds, useTooltip, defaultStyles } from "@visx/tooltip";
import { AxisBottom, AxisLeft } from "@visx/axis";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import { timeFormat } from "d3-time-format";
import { Group } from "@visx/group";
import { DataType, data } from "./recent-sales";



const getYValue = (d: DataType) => d.totalRevenue;

const getXValue = (d: DataType) => d.reportDate;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 300px;
`;

const tooltipStyles = {
  ...defaultStyles,
  borderRadius: 4,
  background: "black",
  color: "white",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};

const margin = 128;

const Chart = () => {
  const [ref, bounds] = useMeasure();

  const width = bounds.width || 100;
  const height = bounds.height || 100;

  const innerWidth = width - margin + 1;
  const innerHeight = height - margin - 1;

  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<AppleStock>();

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [margin, innerWidth],
        domain: data.map(getXValue),
        padding: 0.2,
      }),
    [innerWidth]
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [innerHeight, margin],
        domain: [
          Math.min(...data.map(getYValue)) - 1,
          Math.max(...data.map(getYValue)) + 1,
        ],
      }),
    [innerHeight]
  );

  return (
    <Wrapper>
      <Container ref={ref}>
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
          <Group>
            {data.map((d) => {
              const xValue = getXValue(d);
              const barWidth = xScale.bandwidth();
              const barHeight = innerHeight - (yScale(getYValue(d)) ?? 0);
              const barX = xScale(xValue);
              const barY = innerHeight - barHeight;

              return (
                <Bar
                  key={`bar-${xValue}`}
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill="orange"
                  onMouseMove={(
                    event:
                      | TouchEvent<SVGRectElement>
                      | MouseEvent<SVGRectElement>
                  ) => {
                    const point = localPoint(event);

                    if (!point) return;

                    showTooltip({
                      tooltipTop: point.y,
                      tooltipLeft: point.x,
                    });
                  }}
                  onMouseLeave={() => hideTooltip()}
                />
              );
            })}
          </Group>

          <Group>
            <AxisBottom
              top={innerHeight}
              scale={xScale}
              tickFormat={(date) => timeFormat("%m/%d")(new Date(date))}
            />
          </Group>

          <Group>
            <AxisLeft left={margin} scale={yScale} />
          </Group>
        </svg>

        {tooltipData ? (
          <TooltipWithBounds
            key={Math.random()}
            top={tooltipTop}
            left={tooltipLeft}
            style={tooltipStyles}
          >
          </TooltipWithBounds>
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default Chart;