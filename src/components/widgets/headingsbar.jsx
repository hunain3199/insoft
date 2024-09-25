import React from 'react'

const HeadingsBar = ({
    heading,subHeading,paragraph
}) => {
  return (
    <section className="container space-y-2 items-center justify-center overflow-hidden py-5 md:py-4 lg:py-8 text-center flex flex-col">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <h3 className="text-center text-[24px] sm:text-[28px] font-semibold text-[#000] md:text-[28px] lg:text-[40px]">
            {
                heading
            }
          </h3>
          <h4 className="mt-2 text-center sm:max-w-[795px] max-w-[280px] text-[14px] font-semibold text-[#2555BB] md:text-xl">
           {
             subHeading
           }
          </h4>
          <p className="my-2 max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px] text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
      {
        paragraph
      }
          </p>
        </div>

    </section>
  )
}

export default HeadingsBar