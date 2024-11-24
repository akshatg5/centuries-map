import CenturiesMap from "@/components/centuries-map";
import PlayerSelector from "@/components/player-selector";
import { CodeIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      <PlayerSelector />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold mb-6">Cricket Centuries Map</h1>
            <div>
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
          </div>
          <CenturiesMap />
        </div>
      </main>
    </div>
  );
}
