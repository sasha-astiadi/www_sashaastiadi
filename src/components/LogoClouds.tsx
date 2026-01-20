import Image from 'next/image'

import logoVolkswagen from '@/images/logos/clients/volkswagen.svg'
import logoGoethe from '@/images/logos/clients/goethe.svg'
import logoHere from '@/images/logos/clients/here.svg'
import logoThreefold from '@/images/logos/clients/threefold.svg'
import logoOurworld from '@/images/logos/clients/ourworld.svg'
import logoOurverse from '@/images/logos/clients/ourverse.svg'
import logoMycelium from '@/images/logos/clients/mycelium.svg'
import logoFreezone from '@/images/logos/clients/freezone.svg'
import logoGeomind from '@/images/logos/clients/geomind.svg'
import logoMbweni from '@/images/logos/clients/mbweni.svg'
import logoZictia from '@/images/logos/clients/zictia.svg'
import logoCode from '@/images/logos/clients/code.svg'

const clients = [
  { name: 'Volkswagen', logo: logoVolkswagen, width: 120 },
  { name: 'Goethe Institut', logo: logoGoethe, width: 100 },
  { name: 'HERE Technologies', logo: logoHere, width: 80 },
  { name: 'ThreeFold', logo: logoThreefold, width: 120 },
  { name: 'OurWorld', logo: logoOurworld, width: 100 },
  { name: 'OurVerse', logo: logoOurverse, width: 100 },
  { name: 'Mycelium', logo: logoMycelium, width: 100 },
  { name: 'Freezone', logo: logoFreezone, width: 100 },
  { name: 'Geomind', logo: logoGeomind, width: 100 },
  { name: 'Mbweni', logo: logoMbweni, width: 100 },
  { name: 'Zictia', logo: logoZictia, width: 100 },
  { name: 'Code', logo: logoCode, width: 80 },
]

export default function LogoClouds() {
  return (
    <div className="sm:px-8 mt-16">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl overflow-hidden">
            <div className="flex animate-marquee items-center gap-x-14 py-8">
              {[...clients, ...clients].map((client, index) => (
                <Image
                  key={`${client.name}-${index}`}
                  src={client.logo}
                  alt={client.name}
                  height={30}
                  width={client.width}
                  className="h-[30px] w-auto flex-none opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:invert"
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
