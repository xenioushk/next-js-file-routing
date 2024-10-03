import { notFound } from "next/navigation"

interface Props {
  params: { id: string }
}

const SpecificCourse = ({ params }: Props) => {
  if (!parseInt(params.id)) {
    notFound()
  }

  console.log(parseInt(params.id))

  return <div>{params.id}</div>
}

export default SpecificCourse
