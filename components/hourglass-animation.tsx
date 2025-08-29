"use client"

export function HourglassAnimation() {
  return (
    <div className="relative w-6 h-6 mr-2">
      <div className="absolute inset-0 animate-spin">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black"
        >
          <path
            d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"
            fill="currentColor"
          />
          <path d="M8 4h8v2.5l-4 4-4-4V4z" fill="white" className="animate-pulse" />
        </svg>
      </div>
    </div>
  )
}
