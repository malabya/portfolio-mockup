type BadgeProp = {
  label: string
}

export default function Badge({label} : BadgeProp) {
  return (
    <span className="bg-blue-100 text-primary text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{label}</span>
  )
}
