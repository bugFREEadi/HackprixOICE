import React, { useCallback, useMemo } from 'react';
import ReactFlow, { Background, MarkerType, Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Coins, Flag, Sparkles } from 'lucide-react';

const NodeChip = ({ data }) => {
  const Icon = data.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: data.delay || 0, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative group select-none"
    >
      {/* invisible React Flow handles */}
      <Handle type="target" position={Position.Left}  style={{ background: 'transparent', border: 'none', width: 1, height: 1 }} />
      <Handle type="source" position={Position.Right} style={{ background: 'transparent', border: 'none', width: 1, height: 1 }} />

      <div
        className="absolute inset-0 rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
        style={{ background: data.glow }}
      />
      <div
        className="relative flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-ink/75 backdrop-blur-md px-4 py-2.5 shadow-2xl"
        style={{ boxShadow: `0 8px 40px -8px ${data.glow}` }}
      >
        <span
          className="h-7 w-7 grid place-items-center rounded-lg"
          style={{ background: data.iconBg, color: data.iconColor }}
        >
          <Icon size={14} strokeWidth={2.4} />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-[0.18em] text-bone/40 font-medium">
            {data.kind}
          </span>
          <span className="text-[13px] text-white font-medium font-display">
            {data.label}
          </span>
        </div>
        {data.score && (
          <span
            className="ml-1 text-[10px] font-mono bg-orange/10 border border-orange/30 text-orange rounded-md px-1.5 py-0.5"
          >
            {data.score}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const nodeTypes = { chip: NodeChip };

const NODES = [
  { id: 'innovation', label: 'OICE Protocol', kind: 'Innovation', icon: Lightbulb,
    glow: 'rgba(238,105,46,0.45)', iconBg: 'rgba(238,105,46,0.15)', iconColor: '#ee692e',
    x: 40,  y: 140, delay: 0.0 },
  { id: 'c1', label: 'Smart contract', kind: 'Engineering', icon: Users,
    glow: 'rgba(222,210,196,0.35)', iconBg: 'rgba(222,210,196,0.15)', iconColor: '#ded2c4', score: '94',
    x: 320, y: 30,  delay: 0.2 },
  { id: 'c2', label: 'AI evaluator', kind: 'Research', icon: Users,
    glow: 'rgba(235,130,153,0.4)', iconBg: 'rgba(235,130,153,0.15)', iconColor: '#eb8299', score: '88',
    x: 320, y: 140, delay: 0.35 },
  { id: 'c3', label: 'DNA graph view', kind: 'Design', icon: Users,
    glow: 'rgba(133,190,157,0.4)', iconBg: 'rgba(133,190,157,0.15)', iconColor: '#85be9d', score: '91',
    x: 320, y: 250, delay: 0.5 },
  { id: 'fund', label: '12.4 ETH locked', kind: 'Funding', icon: Coins,
    glow: 'rgba(238,105,46,0.45)', iconBg: 'rgba(238,105,46,0.15)', iconColor: '#ee692e',
    x: 620, y: 80,  delay: 0.7 },
  { id: 'm1', label: 'Milestone 2/4', kind: 'Milestone', icon: Flag,
    glow: 'rgba(133,190,157,0.45)', iconBg: 'rgba(133,190,157,0.15)', iconColor: '#85be9d',
    x: 620, y: 200, delay: 0.85 },
  { id: 'rew', label: 'Rewards routed', kind: 'Distribution', icon: Sparkles,
    glow: 'rgba(235,130,153,0.5)', iconBg: 'rgba(235,130,153,0.15)', iconColor: '#eb8299',
    x: 900, y: 140, delay: 1.05 },
];

const EDGES = [
  { source: 'innovation', target: 'c1', color: '#ded2c4' },
  { source: 'innovation', target: 'c2', color: '#eb8299' },
  { source: 'innovation', target: 'c3', color: '#85be9d' },
  { source: 'c1', target: 'fund', color: '#ee692e' },
  { source: 'c2', target: 'fund', color: '#eb8299' },
  { source: 'c3', target: 'm1', color: '#85be9d' },
  { source: 'c2', target: 'm1', color: '#eb8299' },
  { source: 'fund', target: 'rew', color: '#ee692e' },
  { source: 'm1', target: 'rew', color: '#85be9d' },
];

export default function DNAGraph() {
  const nodes = useMemo(
    () => NODES.map((n) => ({
      id: n.id, type: 'chip', position: { x: n.x, y: n.y },
      data: { ...n }, draggable: false, selectable: false,
    })),
    []
  );

  const edges = useMemo(
    () => EDGES.map((e, i) => ({
      id: `e-${i}`, source: e.source, target: e.target, type: 'smoothstep', animated: true,
      style: { stroke: e.color, strokeOpacity: 0.65 },
      markerEnd: { type: MarkerType.ArrowClosed, color: e.color, width: 14, height: 14 },
    })),
    []
  );

  const proOptions = useMemo(() => ({ hideAttribution: true }), []);
  const noop = useCallback(() => {}, []);

  return (
    <div className="relative w-full h-full">
      <ReactFlow
        nodes={nodes} edges={edges} nodeTypes={nodeTypes} proOptions={proOptions}
        fitView fitViewOptions={{ padding: 0.18 }}
        zoomOnScroll={false} zoomOnPinch={false} zoomOnDoubleClick={false}
        panOnScroll={false} panOnDrag={false} nodesDraggable={false}
        nodesConnectable={false} elementsSelectable={false} onInit={noop}
      >
        <Background color="#1f1d1b" gap={28} size={1} />
      </ReactFlow>
    </div>
  );
}
