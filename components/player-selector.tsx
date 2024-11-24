"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "./theme-toggle";
import { CodeIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const players = ["Virat Kohli"]; // We'll only implement Virat Kohli for now

export default function PlayerSelector() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

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
            variant={selectedPlayer === player ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setSelectedPlayer(player)}
          >
            {player}
          </Button>
        ))}
      </ScrollArea>
      <div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/akshatg5"
              className="text-gray-600 hover:text-gray-800"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/akshat-girdhar-56a848206/"
              className="text-gray-600 hover:text-gray-800"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href="https://akshatgirdhar-portfolio.vercel.app/"
              className="text-gray-600 hover:text-gray-800"
            >
              <CodeIcon className="h-6 w-6" />
            </a>
            <div>
              <Link
                href="https://www.buymeacoffee.com/akshatg5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png"
                  alt="Buy Me A Coffee"
                  width={217}
                  height={60}
                  className="w-[120px] h-[30px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
