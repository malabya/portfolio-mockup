import Image from "next/image"
import Cta from "./Cta"
import Heading from "./Heading"
import Badges from "./Badges"

type ProjectCardProps = {
  name: string,
  description: string,
  owner?: string,
  image_url?: string,
  href: string,
  tags: string[],
}

export default function ProjectCard({ name, description, owner, image_url, href, tags }: ProjectCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-gray-300">
      {
        image_url && (
          <header className="w-full px-0 py-0 mb-4 border-b border-gray-300">
            <Image
              src={image_url}
              alt={name}
              width={600}
              height={400}
              className="w-full"
            />
          </header>
        )
      }
      <div className="px-4 pt-2 pb-8">
        <Badges badges={tags} />
        <Heading as="h4">
          <Cta href={href} variant="wrapper">{name}</Cta>
        </Heading>
        {
          owner && (
            <div className="text-primary text-sm mb-1 font-metro">
              <span className="font-bold">Employer: </span>
              <span>{owner}</span>
            </div>
          )
        }
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </article>
  )
}
