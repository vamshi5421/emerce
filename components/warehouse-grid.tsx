import { WarehouseCard } from "./warehouse-card"
import type { Warehouse } from "@/types/warehouse"

interface WarehouseGridProps {
  warehouses: Warehouse[]
  showFeatures?: boolean
  maxItems?: number
  className?: string
}

export function WarehouseGrid({ warehouses, showFeatures = false, maxItems, className = "" }: WarehouseGridProps) {
  const displayWarehouses = maxItems ? warehouses.slice(0, maxItems) : warehouses

  return (
    <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ${className}`}>
      {displayWarehouses.map((warehouse) => (
        <WarehouseCard key={warehouse.id} warehouse={warehouse} showFeatures={showFeatures} />
      ))}
    </div>
  )
}
