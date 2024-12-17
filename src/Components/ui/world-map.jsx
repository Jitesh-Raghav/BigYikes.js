import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

export function WorldMap({
    dots = [],
    lineColor = "#ec4899", // Pink color
  }) {
    const svgRef = useRef(null);
  
    // Updated to transparent background
    const map = new DottedMap({ height: 80, grid: "diagonal" });
  
    const svgMap = map.getSVG({
      radius: 0.2,
      color: "#ec489980", // Light pink dots
      shape: "circle",
      backgroundColor: "transparent", // Transparent background
    });
  
    const projectPoint = (lat, lng) => {
      const x = (lng + 180) * (600 / 360); // Adjusted size
      const y = (90 - lat) * (300 / 180); // Adjusted size
      return { x, y };
    };
  
    const createCurvedPath = (start, end) => {
      const midX = (start.x + end.x) / 2;
      const midY = Math.min(start.y, end.y) - 30; // Adjusted curve
      return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };
  
    return (
      <div className="w-full flex items-center justify-center py-10 bg-gray-100 rounded-lg relative">
        <div className="w-[80%] aspect-[2/1] relative font-sans">
          {/* Transparent SVG map */}
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
            className="h-full w-full pointer-events-none select-none"
            alt="world map"
            height="495"
            width="800"
            draggable={false}
          />
          <svg
            ref={svgRef}
            viewBox="0 0 600 300"
            className="w-full h-full absolute inset-0 pointer-events-none select-none"
          >
            {dots.map((dot, i) => {
              const startPoint = projectPoint(dot.start.lat, dot.start.lng);
              const endPoint = projectPoint(dot.end.lat, dot.end.lng);
              return (
                <g key={`path-group-${i}`}>
                  <motion.path
                    d={createCurvedPath(startPoint, endPoint)}
                    fill="none"
                    stroke="url(#path-gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.5 * i,
                      ease: "easeOut",
                    }}
                  />
                </g>
              );
            })}
  
            <defs>
              <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
  
            {dots.map((dot, i) => (
              <g key={`points-group-${i}`}>
                <g key={`start-${i}`}>
                  <circle
                    cx={projectPoint(dot.start.lat, dot.start.lng).x}
                    cy={projectPoint(dot.start.lat, dot.start.lng).y}
                    r="2"
                    fill={lineColor}
                  />
                  <circle
                    cx={projectPoint(dot.start.lat, dot.start.lng).x}
                    cy={projectPoint(dot.start.lat, dot.start.lng).y}
                    r="2"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="2"
                      to="6"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
                <g key={`end-${i}`}>
                  <circle
                    cx={projectPoint(dot.end.lat, dot.end.lng).x}
                    cy={projectPoint(dot.end.lat, dot.end.lng).y}
                    r="2"
                    fill={lineColor}
                  />
                  <circle
                    cx={projectPoint(dot.end.lat, dot.end.lng).x}
                    cy={projectPoint(dot.end.lat, dot.end.lng).y}
                    r="2"
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="2"
                      to="6"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </g>
            ))}
          </svg>
        </div>
      </div>
    );
  }
  
