import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

export interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TreeNode[];
  defaultExpanded?: string[];
  onSelect?: (node: TreeNode) => void;
  className?: string;
}

/**
 * Accessible tree view component.
 */
export function TreeView({
  data,
  defaultExpanded = [],
  onSelect,
  className = '',
  ...rest
}: TreeViewProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(defaultExpanded));

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderNodes = (nodes: TreeNode[], level = 0) => (
    <ul role={level === 0 ? 'tree' : 'group'} className={level > 0 ? 'ml-4' : ''}>
      <AnimatePresence initial={false}>
        {nodes.map((node) => {
          const isExpanded = expanded.has(node.id);
          const hasChildren = !!node.children?.length;
          return (
            <li key={node.id} role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
              <div
                className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-1"
                onClick={() => {
                  if (hasChildren) toggle(node.id);
                  else onSelect?.(node);
                }}
              >
                {hasChildren && (
                  <motion.span
                    className="mr-1 inline-block"
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                  >
                    ▶
                  </motion.span>
                )}
                <span>{node.label}</span>
              </div>
              {hasChildren && isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {renderNodes(node.children!, level + 1)}
                </motion.div>
              )}
            </li>
          );
        })}
      </AnimatePresence>
    </ul>
  );

  return (
    <div className={className} {...rest}>
      {renderNodes(data)}
    </div>
  );
}

TreeView.displayName = 'TreeView';
