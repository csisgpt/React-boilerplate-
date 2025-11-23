import React from "react"
import clsx from "clsx"

export interface FeatureItem {
  title: string
  icon?: React.ReactNode
  description?: string
}

export interface FeatureGridProps {
  features: FeatureItem[]
  className?: string
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  className,
}) => (
  <div
    className={clsx(
      "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
      className
    )}
  >
    {features.map((f, idx) => (
      <div
        key={idx}
        className="rounded-xl border border-neutral bg-base-soft p-5 text-center shadow-sm transition-colors hover:border-neutral-strong"
      >
        {f.icon && (
          <div className="mb-3 text-3xl text-secondary-strong">
            {f.icon}
          </div>
        )}

        <h3 className="mb-2 font-semibold text-text">
          {f.title}
        </h3>

        {f.description && (
          <p className="text-sm leading-relaxed text-text-muted">
            {f.description}
          </p>
        )}
      </div>
    ))}
  </div>
)
