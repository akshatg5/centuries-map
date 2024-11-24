"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const players = ['Virat Kohli'] // We'll only implement Virat Kohli for now

export default function PlayerSelector() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])

  return (
    <div className="w-64 border-r bg-muted/50">
      <div className="p-4 font-semibold">Select Player</div>
      <ScrollArea className="h-[calc(100vh-60px)]">
        {players.map((player) => (
          <Button
            key={player}
            variant={selectedPlayer === player ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setSelectedPlayer(player)}
          >
            {player}
          </Button>
        ))}
      </ScrollArea>
    </div>
  )
}

