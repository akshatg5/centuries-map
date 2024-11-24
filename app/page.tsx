import CenturiesMap from '@/components/centuries-map'
import PlayerSelector from '@/components/player-selector'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      <PlayerSelector />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-[1500px] mx-auto">
          <h1 className="text-3xl font-bold mb-6">Cricket Centuries Map</h1>
          <CenturiesMap />
        </div>
      </main>
    </div>
  )
}

