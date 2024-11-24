"use client"

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { Tooltip } from '@/components/ui/tooltip'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { centuries } from '@/data/virat-kohli-centuries'

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const formatType = (type: string) => {
  switch (type) {
    case 'test':
      return 'Test'
    case 'odi':
      return 'ODI'
    case 't20i':
      return 'T20I'
    default:
      return type
  }
}

export default function CenturiesMap() {
  const [tooltipContent, setTooltipContent] = useState("")

  return (
    <div className="w-full aspect-[16/9] bg-muted/50 rounded-lg overflow-hidden">
      <ComposableMap projection="geoMercator">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
        {centuries.map((century, index) => (
          <Marker key={index} coordinates={[century.longitude, century.latitude]}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <circle
                    r={4}
                    fill={century.type === 'test' ? '#FF6B6B' : century.type === 'odi' ? '#4ECDC4' : '#45B7D1'}
                    stroke="#fff"
                    strokeWidth={2}
                    onMouseEnter={() => setTooltipContent(`${formatType(century.type)} - ${century.runs} runs vs ${century.against}`)}
                    onMouseLeave={() => setTooltipContent("")}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tooltipContent}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}

