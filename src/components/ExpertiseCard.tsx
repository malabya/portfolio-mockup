type ExpertiseCardProps = {
  heading: string,
  items: string[],
}

export default function ExpertiseCard({heading, items}: ExpertiseCardProps) {
  return (
    <div className="rounded-lg border border-primary overflow-hidden relative">
      <div className="px-4 py-4 ">
        <div className="text-lg font-extrabold text-primary">
          <ul className="flex flex-col gap-1">
                {items.map((item, index) => (
                  <li key={index} className="mb-2 flex gap-2 items-center before:content-[''] before:w-5 before:h-5 before:bg-[url('/images/arrow.svg')] before:bg-no-repeat before:bg-center">
                    {item}
                  </li>
                ))}
              </ul>
        </div>
      </div>
      <footer className="px-6 py-2 font-metro text-bold text-center text-xl border-t border-primary text-gray-50 uppercase bg-primary">{heading}</footer>
    </div>
  )
}
