interface DeviceMockupProps {
  image: string
  alt: string
}

export default function DeviceMockup({ image, alt }: DeviceMockupProps) {
  return (
    <div className="relative mx-auto" style={{ width: '268.75px', height: '582.5px' }}>
      <div className="relative rounded-[1.25rem] border-[7px] border-gray-800 overflow-hidden shadow-xl w-full h-full">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover"
          style={{ imageRendering: 'auto' }}
        />
      </div>
      {/* Device details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20%] h-[11px] bg-gray-800 rounded-b-2xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[10%] h-[2px] bg-gray-700 rounded-b-lg" />
    </div>
  )
}