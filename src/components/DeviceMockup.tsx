interface DeviceMockupProps {
  image: string
  alt: string
}

export default function DeviceMockup({ image, alt }: DeviceMockupProps) {
  return (
    <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
      <div className="relative rounded-[2.5rem] border-[14px] border-gray-800 overflow-hidden shadow-xl">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-auto"
        />
      </div>
      {/* Device details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[22px] bg-gray-800 rounded-b-2xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20%] h-[4px] bg-gray-700 rounded-b-lg" />
    </div>
  )
}