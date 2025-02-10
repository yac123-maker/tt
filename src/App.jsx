
import DiskPercentageChart from './disk.jsx'
import { Chart } from "react-google-charts";
import Cyl from "./bar3d.jsx";
import './App.css'
import * as React from "react";
import Calendar from 'react-calendar';
import { useState } from 'react';
import styled from 'styled-components';
import BasicTable from './table.jsx';
import BasicTable2 from './table2.jsx';
//import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Legend3D, DataLabel3D, Tooltip3D, BarSeries3D, Highlight3D } from '@syncfusion/ej2-react-charts';
export default function App() {
  const [value, onChange] = useState(new Date());

  const data = [
    ["Task", "Hours per Day"],
    ["bonjour", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const data2 = [
    { country: "USA", gold: 50, silver: 70, bronze: 45 },
    { country: "China", gold: 40, silver: 60, bronze: 55 },
    { country: "Japan", gold: 70, silver: 60, bronze: 50 },
    { country: "Australia", gold: 60, silver: 56, bronze: 40 },
    { country: "France", gold: 50, silver: 45, bronze: 35 },
    { country: "Germany", gold: 40, silver: 30, bronze: 22 },
    { country: "Italy", gold: 40, silver: 35, bronze: 37 },
    { country: "Sweden", gold: 30, silver: 25, bronze: 27 }   
];
const data3 = [5, 8, 3, 7, 2];

  const options = {
    title: "My Daily Activities",
    pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
    is3D: true, // Enables 3D view
    // slices: {
    //   1: { offset: 0.2 }, // Explodes the second slice
    // },
    pieStartAngle: 100, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
  };


  return (
    <div>
      <title>Dashboard</title>
      <h1 style={{ fontFamily: 'Verdana, sans-serif' }}>Modèle Dashboard DCISIT</h1>
      <h2>Calendrier</h2>
      <CalendarContainer>
        <Calendar
          onChange={onChange}
          value={value}
          calendarType="gregory"
          tileClassName="my-custom-tile"
        />
      </CalendarContainer>
  
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column', // Align elements vertically
          alignItems: 'flex-start', // Align to the left
          gap: '40px', // Gap between elements
          padding: '40px 40px',
        }}
      >
        {/* Table Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '40px 40px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%' }}>
            {/* First Table */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 40px',
              }}
            >
              <BasicTable />
            </div>
  
            {/* Second Table */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 40px',
              }}
            >
              <BasicTable2 />
            </div>
          </div>
        </div>
  
        {/* Cyl Component */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '40px 40px',
          }}
        >
          <Cyl />
        </div>
  
        {/* Disk Percentage Chart */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '40px 40px',
          }}
        >
          <DiskPercentageChart data={[{ value: 40 }, { value: 30 }, { value: 20 }, { value: 10 }]} />
        </div>
  
        {/* Pie Chart */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'right',
            width: '100%',
            minWidth: '400px',
            minHeight: '400px',
            padding: '40px 40px',
          }}
        >
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width="400px"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
  
  
  
  
  
  
}
const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  background-color:rgb(212, 226, 247);
  padding: 10px;
  border-radius: 3px;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color:rgb(111, 131, 135);
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;

    &:hover {
      background-color:rgb(85, 93, 107);
    }

    &:active {
      background-color:rgb(165, 174, 193);
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
    
    .react-calendar__tile {
      max-width: initial !important;
    }

    .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
//<Chart3d data2={data2} />
