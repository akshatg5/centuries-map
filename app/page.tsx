import CenturiesMap from '@/components/centuries-map'
import PlayerSelector from '@/components/player-selector'

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <PlayerSelector />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Cricket Centuries Map</h1>
        <CenturiesMap />
      </main>
    </div>
  )
}

