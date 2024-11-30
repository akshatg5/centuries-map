"use client";
import React, { useRef, useState, useMemo, useCallback } from "react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Circle } from "lucide-react";

interface CenturyDot {
  lat: number;
  lng: number;
  type: "test" | "odi" | "t20i";
  runs: number;
  against: string;
  venue: string;
}

interface MapProps {
  dots: CenturyDot[];
  colors?: {
    test?: string;
    odi?: string;
    t20i?: string;
  };
}

export function WorldMap({
  dots = [],
  colors = {
    test: "#FF6B6B", // Red for Test centuries
    odi: "#4ECDC4", // Teal for ODI centuries
    t20i: "#FFA726", // Orange for T20I centuries
  },
}: MapProps) {
  const [hoveredDotIndex, setHoveredDotIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    []
  );

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "black" : "white",
      }),
    [theme]
  );

  const projectPoint = useCallback((lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  }, []);

  // Memoize color mapping to prevent unnecessary re-renders
  const dotColors = useMemo(
    () => dots.map((dot) => colors[dot.type] || "#000000"),
    [dots, colors]
  );

  return (
    <>
      <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          alt="world map"
          height="495"
          width="1056"
          draggable={false}
        />
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-auto"
        >
          {dots.map((dot, i) => {
            const point = projectPoint(dot.lat, dot.lng);
            const dotColor = dotColors[i];
            const isHovered = hoveredDotIndex === i;

            return (
              <g
                key={i}
                className="cursor-pointer group"
                // Use onMouseEnter and onMouseLeave with direct index comparison
                onMouseEnter={() => setHoveredDotIndex(i)}
                onMouseLeave={() => setHoveredDotIndex(null)}
              >
                {/* Dot with larger hover area */}
                <circle cx={point.x} cy={point.y} r="6" fill="transparent" />

                {/* Actual Visible Dot */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill={dotColor}
                  fillOpacity="0.7"
                />
                {/* Venue Label */}
                {isHovered && (
                  <text
                    x={point.x}
                    y={point.y - 10}
                    textAnchor="middle"
                    fontSize="10"
                    fill="black"
                    fontWeight="bold"
                    className="dark:fill-white pointer-events-none"
                  >
                    {dot.venue}
                  </text>
                )}
                {/* Hover Details */}
                {isHovered && (
                  <text
                    x={point.x}
                    y={point.y + 20}
                    textAnchor="middle"
                    fontSize="10"
                    fill="black"
                    className="dark:fill-white pointer-events-none"
                  >
                    {dot.runs} runs vs {dot.against} ({dot.type.toUpperCase()})
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <Card className="px-5 py-4 mt-4">
        <CardTitle>Legend:</CardTitle>
        <CardContent className="flex flex-col">
          <div className="flex items-center">
            Test{" "}
            <Circle
              color="#FF6B6B"
              className="bg-[#FF6B6B] rounded-full ml-4 my-1"
            />{" "}
          </div>
          <div className="flex items-center">
            ODI{" "}
            <Circle
              color="#4ECDC4"
              className="bg-[#4ECDC4] rounded-full ml-4 my-1"
            />
          </div>
          <div className="flex items-center">
            T20{" "}
            <Circle
              color="#FFA726"
              className="bg-[#FFA726] rounded-full ml-4 my-1"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
