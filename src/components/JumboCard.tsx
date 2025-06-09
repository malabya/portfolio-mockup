import Image from "next/image"
import Heading from "./Heading"

type JumboCardProps = {
  heading: string
  subheading: string
  description: string
  items: string[]
  image: string
}

export default function JumboCard({ heading, subheading, description, items, image }: JumboCardProps) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 border rounded-4xl border-gray-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <Heading as="h3" subheading={subheading} heading={heading} />
              <p className="my-6 text-lg/8 text-gray-900">
                {description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 lg:max-w-none">
                {items.map((item) => (
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <span aria-hidden="true" className="absolute top-1 left-1 size-5 bg-[url('/images/arrow.svg')] bg-no-repeat bg-center" />
                    </dt>{' '}
                    <dd className="inline">{item}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt={subheading}
            src={image}
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
