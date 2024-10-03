// function sleep() {
//   return new Promise((resolve) => setTimeout(resolve, 5000))
// }

const blog = async () => {
  // await sleep()

  const blogs = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  })
  const response = await blogs.json()
  console.log(response)

  return (
    <div>
      <h1>Blog 2 {new Date().toLocaleTimeString()}</h1>
    </div>
  )
}

export default blog
