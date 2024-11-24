"use client"
import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
//@ts-ignore
import proj4 from 'proj4';
import { centuries } from '@/data/virat-kohli-centuries';

// Initialize Highcharts with modules
if (typeof window !== 'undefined') {
  highchartsMap(Highcharts);
  // @ts-ignore
  window.proj4 = proj4;
}

const CricketCenturiesMap: React.FC = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const [mapData, setMapData] = React.useState<any>(null);

  useEffect(() => {
    fetch('https://code.highcharts.com/mapdata/custom/world.topo.json')
      .then(response => response.json())
      .then(topology => {
        setMapData(topology);
      });
  }, []);

  if (!mapData) {
    return <div>Loading map...</div>;
  }

  // Prepare the data series
  const testCenturies = centuries
    .filter(c => c.type === 'test')
    .map(c => ({
      name: `${c.runs} vs ${c.against}`,
      lat: c.latitude,
      lon: c.longitude,
      venue: c.venue,
      type: 'Test'
    }));

  const odiCenturies = centuries
    .filter(c => c.type === 'odi')
    .map(c => ({
      name: `${c.runs} vs ${c.against}`,
      lat: c.latitude,
      lon: c.longitude,
      venue: c.venue,
      type: 'ODI'
    }));

  const t20iCenturies = centuries
    .filter(c => c.type === 't20i')
    .map(c => ({
      name: `${c.runs} vs ${c.against}`,
      lat: c.latitude,
      lon: c.longitude,
      venue: c.venue,
      type: 'T20I'
    }));

  const chartOptions: Highcharts.Options = {
    chart: {
      map: mapData,
      height: '600px',
      backgroundColor: '#1a1a1a',  // Dark background
      borderColor: '#333333',
      plotBorderColor: '#333333',
      style : {
        fontFamily : 'Inter,sans-serif'
      }
    },
    title: {
      text: 'Cricket Centuries by Venue',
      align: 'left',
      style : {
        color : '#ffffff' 
      }
    },
    subtitle: {
      text: 'Test (Red), ODI (Blue), T20I (Green)',
      align: 'left',
      style : {
        color : '#cccccc' 
      }
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
        theme : {
          fill: '#2d2d2d',
          stroke: '#4d4d4d',
          style: {
            color: '#ffffff'
          },
          states: {
            hover: {
              fill: '#3d3d3d'
            },
            select: {
              fill: '#4d4d4d'
            }
          }
        }
      }
    },
    tooltip: {
      formatter: function(this: Highcharts.TooltipFormatterContextObject) {
        const point = this.point as any;
        return `<b>${point.name}</b><br/>
                ${point.venue}<br/>
                Format: ${point.type}`;
      },
      backgroundColor : 'rgba(40, 40, 40, 0.9)',
      style: {
        color: '#ffffff'  // White text for tooltip
      }
    },
    series: [{
      type: 'map',
      name: 'Basemap',
      showInLegend: false,
      enableMouseTracking: false
    }, {
      type: 'mappoint',
      name: 'Test Centuries',
      color: '#ff0000',
      data: testCenturies
    }, {
      type: 'mappoint',
      name: 'ODI Centuries',
      color: '#0000ff',
      data: odiCenturies
    }, {
      type: 'mappoint',
      name: 'T20I Centuries',
      color: '#00ff00',
      data: t20iCenturies
    }] as any
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
        constructorType={'mapChart'}
      />
    </div>
  );
};

export default CricketCenturiesMap;