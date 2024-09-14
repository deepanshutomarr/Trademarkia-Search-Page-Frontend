import { Button, Img, Heading } from "../../components";
import React from "react";

export default function AboutTrademarksSection() {
  return (
    <>
      {/* about trademarks section */}

      <div className="flex self-stretch px-7 sm:px-5">
        <div className="mx-auto flex w-full max-w-|w-[1382px] flex-col gap-[18px]">
          <div className="ml-2.5 flex flex-col items-start gap-[18px] md:ml-0">
            <Heading
              as="h1"
              className="ml-1.5 text-[16px] font-bold text-[#4b5563] md:m1-0"
            >
              About 159 Trademarks found for "nike”
            </Heading>
            <div className="h-[2px] self-stretch bg-[#e6e5e5]" />
          </div>
          <div className="mx-4 flex items-start md: mx-0 md: flex-col">
            <div className="flex w-full items-center">
              <Heading as="h2" className="text-[16px] font-bold text-[#4b5563]">
                Also try searching for{" "}
              </Heading>
              <Button className="ml-6 flex_h-[34px] min-w-[58px] flex-row items-center justify-center rounded-[10px] border border-solid border-[#e7760e] bg-[#fef7f0] px-[13px] text-center text-[12px] font-bold text-[#e7760e]">
                nike*
              </Button>
              <div className="ml-3.5 flex w-[8%] justify-center rounded-[10px] border border-solid border-[#e7760e] bg-[#fef7f0] p-1.5">
                <Heading
                  size="headingxs"
                  as="h3"
                  className="text-[12px] font-bold text-[#e7760e]"
                >
                  *ike
                </Heading>
              </div>
            </div>
            <div className="flex w-full items-center justify-end self-center pl-14 pr-[84px] md:px-5">
              <Button
                leftIcon={
                  <img
                    src="img_filteralt.svg"
                    width={20}
                    height={20}
                    alt="Filter Alt"
                    className="h-[20px] w-[20px]"
                  />
                }
                className="flex h-[42px] min-w-[94px] flex-row items-center justify-center gap-1 rounded-1g border border-solid border-[#c7c7c7] bg-[#ffffff] px-[21px] text-center text-[12px] font-medium text-[12px] font-medium text -[#575757] sm:px-5"
              >
                Filter
              </Button>
              <Button className="ml-[22px] flex h-[32px] w-[32px] items-center justify-center rounded-[16px] border border-solid border-[#c7c7c7] bg-[#ffffff] px-1">
                <img src="img_search_gray_700.svg" width={20} height={20} />
              </Button>
              <Button className="ml-5 flex h-[32px] w-[32px] items-center justify-center rounded-[16px] border border-solid border-[#c7c7c7] bg-[#ffffff] px-1">
                <img src="img_sort.svg" width={20} height={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
