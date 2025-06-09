import Image from "next/image"
import Link from "next/link"

type ExpertiseCardProps = {
  icon: string,
  heading: string,
  url: string,
}

export default function ExpertiseCard({ icon, heading, url }: ExpertiseCardProps) {
  return (
    <div className="rounded-lg flex flex-col justify-between gap-0 border border-gray-100 shadow-lg overflow-hidden relative px-2 py-4 hover:shadow-xl transition-all duration-200">
      <Image
        src={icon}
        alt={heading}
        width={50}
        height={50}
        className="mx-auto mb-3"
      />
      <Link href={url} target="_blank" className="absolute inset-0">
      </Link>
      <footer className="font-metro text-bold text-center text-l uppercase text-gray-900">
        {heading}
      </footer>
    </div>
  )
}
