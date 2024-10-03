import React from "react"
import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h1>Course Not found</h1>
      <Link href="/" className="text-red-500">
        Go to Home
      </Link>
    </div>
  )
}

export default NotFound
