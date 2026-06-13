import React, { useCallback, useMemo } from 'react';
import ReactFlow, { Background, MarkerType, Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Coins, Flag, Sparkles } from 'lucide-react';

/* Custom node — glassy pill with icon + label */
const NodeChip = ({ data }) => {
  const Icon = data.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: data.delay || 0, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative group select-none"
    >
      <Handle type="target" position={Position.Left} style={{ opacity: 0, background: 'transparent', border: 'none' }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0, background: 'transparent', border: 'none' }} />
      <div
        className="absolute inset-0 rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
        style={{ background: data.glow }}
      />
      <div
        className="relative flex items-center gap-2.5 rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-md px-4 py-2.5 shadow-2xl"
        style={{ boxShadow: `0 8px 40px -8px ${data.glow}` }}
      >
        <span
          className="h-7 w-7 grid place-items-center rounded-lg"
          style={{ background: data.iconBg, color: data.iconColor }}
        >
          <Icon size={14} strokeWidth={2.4} />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-medium">
            {data.kind}
          </span>
          <span className="text-[13px] text-white font-medium font-display">
            {data.label}
          </span>
        </div>
        {data.score && (
          <span className="ml-1 text-[10px] font-mono text-cyan-300 bg-cyan-400/10 border border-cyan-400/30 rounded-md px-1.5 py-0.5">
            {data.score}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const nodeTypes = { chip: NodeChip };

const NODES = [
  { id: 'innovation', label: 'OICE Protocol', kind: 'Innovation', icon: Lightbulb, glow: 'rgba(34,211,238,0.45)', iconBg: 'rgba(34,211,238,0.15)', iconColor: '#22d3ee', x: 40,  y: 140, delay: 0.0 },
  { id: 'c1',  label: 'Smart contract',  kind: 'Engineering',  icon: Users, glow: 'rgba(59,130,246,0.4)', iconBg: 'rgba(59,130,246,0.15)', iconColor: '#60a5fa', score: '94', x: 320, y: 30,  delay: 0.2 },
  { id: 'c2',  label: 'AI evaluator',    kind: 'Research',     icon: Users, glow: 'rgba(139,92,246,0.4)', iconBg: 'rgba(139,92,246,0.15)', iconColor: '#a78bfa', score: '88', x: 320, y: 140, delay: 0.35 },
  { id: 'c3',  label: 'DNA graph view',  kind: 'Design',       icon: Users, glow: 'rgba(236,72,153,0.4)', iconBg: 'rgba(236,72,153,0.15)', iconColor: '#f472b6', score: '91', x: 320, y: 250, delay: 0.5 },
  { id: 'fund',label: '12.4 ETH locked', kind: 'Funding',      icon: Coins, glow: 'rgba(250,204,21,0.4)', iconBg: 'rgba(250,204,21,0.15)', iconColor: '#facc15', x: 620, y: 80,  delay: 0.7 },
  { id: 'm1',  label: 'Milestone 2/4',   kind: 'Milestone',    icon: Flag, glow: 'rgba(16,185,129,0.4)', iconBg: 'rgba(16,185,129,0.15)', iconColor: '#34d399', x: 620, y: 200, delay: 0.85 },
  { id: 'rew', label: 'Rewards routed',  kind: 'Distribution', icon: Sparkles, glow: 'rgba(34,211,238,0.5)', iconBg: 'rgba(34,211,238,0.15)', iconColor: '#22d3ee', x: 900, y: 140, delay: 1.05 },
];

const EDGES = [
  { source: 'innovation', target: 'c1', color: '#22d3ee' },
  { source: 'innovation', target: 'c2', color: '#8b5cf6' },
  { source: 'innovation', target: 'c3', color: '#ec4899' },
  { source: 'c1', target: 'fund', color: '#3b82f6' },
  { source: 'c2', target: 'fund', color: '#8b5cf6' },
  { source: 'c3', target: 'm1', color: '#ec4899' },
  { source: 'c2', target: 'm1', color: '#a78bfa' },
  { source: 'fund', target: 'rew', color: '#facc15' },
  { source: 'm1', target: 'rew', color: '#34d399' },
];

export default function DNAGraph() {
  const nodes = useMemo(
    () => NODES.map((n) => ({
      id: n.id,
      type: 'chip',
      position: { x: n.x, y: n.y },
      data: { ...n },
      draggable: false,
      selectable: false,
    })),
    []
  );

  const edges = useMemo(
    () => EDGES.map((e, i) => ({
      id: `e-${i}`,
      source: e.source,
      target: e.target,
      type: 'smoothstep',
      animated: true,
      style: { stroke: e.color, strokeOpacity: 0.7 },
      markerEnd: { type: MarkerType.ArrowClosed, color: e.color, width: 14, height: 14 },
    })),
    []
  );

  const proOptions = useMemo(() => ({ hideAttribution: true }), []);
  const noop = useCallback(() => {}, []);

  return (
    <div className="relative w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        fitView
        fitViewOptions={{ padding: 0.18 }}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        onInit={noop}
      >
        <Background color="#1f1f23" gap={28} size={1} />
      </ReactFlow>
    </div>
  );
}
