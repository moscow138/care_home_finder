import Image from "next/image"

export default function Home() {
  return (
    <div className="mt-[-15%]">
      <Image  src='/carefinder.png'
      className="carefinder-logo"
      alt="care-Finder logo" 
      width='350'
      height='250'

      />

    </div>
  )
}
