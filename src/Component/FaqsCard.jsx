import React from 'react'

function FaqsCard({title="",details=""}) {
  return (
    <details className="group w-96 pb-2 mb-5 border rounded-xl  border-gray-600">
    <summary className="uppercase  rounded-xl group-open:text-white py-2 mb-2 px-5  group-open:bg-primary flex justify-between items-center cursor-pointer font-bold">
      <span>{title}</span>
      <span className=" group-open:hidden">
        <i className="ri-add-circle-line"></i>
      </span>
      <span className=" hidden group-open:inline">-</span>
    </summary>
    <span className="px-1 w-inherit ">
     { details}
    </span>
  </details>
  )
}

export default FaqsCard
