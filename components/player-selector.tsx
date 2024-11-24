"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ThemeToggle } from './theme-toggle'

const players = ['Virat Kohli'] // We'll only implement Virat Kohli for now

export default function PlayerSelector() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])

  return (
    <div className="w-full md:w-64 border-r bg-background">
      <div className="p-4 flex items-center justify-between">
        <span className="font-semibold">Select Player</span>
        <ThemeToggle />
      </div>
      <ScrollArea className="h-20 md:h-[calc(100vh-60px)]">
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

