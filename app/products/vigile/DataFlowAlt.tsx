"use client";
import React, { useState, useEffect, useRef } from "react";
import "./DataFlowAlt.css";

const DataFlowAlt = ({ domain = "example.com" }) => {
  const [nodes, setNodes] = useState<any>([]);
  const [connections, setConnections] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isScanning, setIsScanning] = useState(true);
  const containerRef = useRef(null);

  const breachTypes = [
    {
      id: "password",
      label: "Password Breaches",
      icon: "🔒",
      count: 12,
      risk: "high",
      color: "#ef4444",
    },
    {
      id: "cookies",
      label: "Cookie Exposure",
      icon: "🍪",
      count: 8,
      risk: "medium",
      color: "#f59e0b",
    },
    {
      id: "autofill",
      label: "Autofill Data",
      icon: "📝",
      count: 5,
      risk: "low",
      color: "#10b981",
    },
    {
      id: "malware",
      label: "Malware",
      icon: "🦠",
      count: 3,
      risk: "high",
      color: "#ef4444",
    },
    {
      id: "phishing",
      label: "Phishing",
      icon: "🎣",
      count: 7,
      risk: "medium",
      color: "#f59e0b",
    },
    {
      id: "office",
      label: "Office 365",
      icon: "📊",
      count: 2,
      risk: "low",
      color: "#3b82f6",
    },
    {
      id: "email",
      label: "Email Security",
      icon: "📧",
      count: 4,
      risk: "medium",
      color: "#8b5cf6",
    },
  ];

  useEffect(() => {
    // Initialize nodes in circular layout
    const centerX = 400;
    const centerY = 300;
    const radius = 180;

    const initialNodes = [
      {
        id: "domain",
        label: domain,
        icon: "🌐",
        x: centerX,
        y: centerY,
        isCenter: true,
        risk: "critical",
        count: 41,
        color: "#1f2937",
      },
      ...breachTypes.map((type, index) => {
        const angle = (index * 2 * Math.PI) / breachTypes.length;
        return {
          ...type,
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
          isCenter: false,
        };
      }),
    ];

    setNodes(initialNodes);

    // Create connections
    const initialConnections = breachTypes.map((_, index) => ({
      id: `conn-${index}`,
      from: "domain",
      to: breachTypes[index].id,
      strength: Math.random() * 0.8 + 0.2,
    }));

    setConnections(initialConnections);

    // Simulate scanning animation
    const scanInterval = setInterval(() => {
      setNodes((prev) =>
        prev.map((node) => {
          if (node.isCenter) {
            return {
              ...node,
              count: Math.max(
                0,
                node.count + Math.floor(Math.random() * 3) - 1,
              ),
            };
          }
          return node;
        }),
      );
    }, 2000);

    return () => clearInterval(scanInterval);
  }, [domain]);

  const handleNodeClick = (nodeId) => {
    setSelectedNode(nodeId === selectedNode ? null : nodeId);
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case "high":
        return "#ef4444";
      case "medium":
        return "#f59e0b";
      case "low":
        return "#10b981";
      case "critical":
        return "#dc2626";
      default:
        return "#6b7280";
    }
  };

  const getConnectionPath = (from, to) => {
    const fromNode = nodes.find((n) => n.id === from);
    const toNode = nodes.find((n) => n.id === to);

    if (!fromNode || !toNode) return "";

    const midX = (fromNode.x + toNode.x) / 2;
    const midY = (fromNode.y + toNode.y) / 2 - 30;

    return `M ${fromNode.x} ${fromNode.y} Q ${midX} ${midY} ${toNode.x} ${toNode.y}`;
  };

  return (
    <div className="breach-detection-container">
      <div className="header">
        <h2>Domain Security Analysis</h2>
        <div className="scan-status">
          <span
            className={`scan-indicator ${isScanning ? "active" : ""}`}
          ></span>
          {isScanning ? "Scanning..." : "Scan Complete"}
        </div>
      </div>

      <div className="nodes-canvas" ref={containerRef}>
        <svg width="800" height="600" className="connections-svg">
          {connections.map((conn) => {
            const fromNode = nodes.find((n) => n.id === conn.from);
            const toNode = nodes.find((n) => n.id === conn.to);

            if (!fromNode || !toNode) return null;

            return (
              <g key={conn.id}>
                <path
                  d={getConnectionPath(conn.from, conn.to)}
                  stroke={toNode.color}
                  strokeWidth={2 + conn.strength * 3}
                  fill="none"
                  opacity={0.6}
                  className="connection-line"
                />
                <circle
                  cx={fromNode.x}
                  cy={fromNode.y}
                  r="4"
                  fill={fromNode.color}
                  className="connection-dot"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {nodes.map((node) => (
          <div
            key={node.id}
            className={`node ${node.isCenter ? "center-node" : "breach-node"} ${
              selectedNode === node.id ? "selected" : ""
            }`}
            style={{
              left: node.x - (node.isCenter ? 60 : 40),
              top: node.y - (node.isCenter ? 60 : 40),
              borderColor: getRiskColor(node.risk),
              backgroundColor: node.isCenter ? "#ffffff" : `${node.color}20`,
            }}
            onClick={() => handleNodeClick(node.id)}
          >
            <div className="node-icon">{node.icon}</div>
            <div className="node-label">{node.label}</div>
            {node.count !== undefined && (
              <div className="node-count">{node.count}</div>
            )}
            {node.isCenter && <div className="scanning-ring"></div>}
          </div>
        ))}
      </div>

      {selectedNode && (
        <div className="node-details">
          <h3>Node Details</h3>
          {(() => {
            const node = nodes.find((n) => n.id === selectedNode);
            if (!node) return null;

            return (
              <div>
                <p>
                  <strong>Type:</strong> {node.label}
                </p>
                <p>
                  <strong>Risk Level:</strong>{" "}
                  <span style={{ color: getRiskColor(node.risk) }}>
                    {node.risk}
                  </span>
                </p>
                {node.count !== undefined && (
                  <p>
                    <strong>Detected Issues:</strong> {node.count}
                  </p>
                )}
                <p>
                  <strong>Status:</strong>{" "}
                  {node.risk === "high" ? "Action Required" : "Monitoring"}
                </p>
              </div>
            );
          })()}
        </div>
      )}

      <div className="controls">
        <button onClick={() => setIsScanning(!isScanning)}>
          {isScanning ? "Stop Scan" : "Start Scan"}
        </button>
        <button onClick={() => setSelectedNode(null)}>Clear Selection</button>
      </div>
    </div>
  );
};

export default DataFlowAlt;
