"use client";

import { CloseSVG } from "../Input/close";
import { Heading, Button, Input, Img } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex items-center ml-[78px] mr-[98px] md:mx-0 bg-[#f8fafe]`}
    >
      <div className="flex w-full items-start justify-between gap-5 md:flex-col">
        <div className="flex w-[62%] items-center justify-center gap-3 self-center md:w-full md:flex-col">
          <div className="flex flex-1 flex-col md:self-stretch">
            <div className="flex w-[34%] flex-wrap justify-between gap-5 md:w-full">
              <Heading
                size="headings"
                as="p"
                className="text-[14px] font-semibold text-[#ffffff]"
              >
                Call Us: 1-877-794-9511
              </Heading>
              <Heading
                size="headings"
                as="p"
                className="text-[14px] font-semibold text-[#ffffff]"
              >
                Email Us
              </Heading>
            </div>
            <div className="relative mt-[-2px] flex items-center gap-12 md:flex-col">
              <Img
                src="img_header_logo.png"
                width={154}
                height={20}
                alt="Header Logo"
                className="h-[20px] w-[154px] object-contain"
              />
              <Input
                name="Search Field"
                placeholder={`Search Trademark Here eg. Mickey Mouse `}
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e.target.value)}
                prefix={
                  <Img
                    src="img_search.svg"
                    width={24}
                    height={24}
                    alt="Search"
                    className="h-[24px] w-[24px]"
                  />
                }
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue("")}
                      height={24}
                      width={24}
                      fillColor="#626262ff"
                    />
                  ) : null
                }
                className="flex h-[50px] flex-grow items-center justify-center gap-2 rounded-[12px] border border-solid border-[#d4d4d4] bg-[#ffffff] px-3 text-[14px] font-medium text-[#626262]"
              />
            </div>
          </div>

          <Button className="flex h-[50px] min-w-[124px] flex-row items-center justify-center self-end rounded-[12px] bg-[#4380ec] px-[34px] text-center text-[16px] font-bold text-[#ffffff] md:self-auto sm:px-5">
            Search
          </Button>
        </div>
        <ul className="flex flex-wrap gap-8">
          <li>
            <Link href="#">
              <Heading
                size="headings"
                as="p"
                className="text-[14px] font-semibold text-[#ffffff]"
              >
                Services
              </Heading>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Heading
                size="headings"
                as="p"
                className="text-[14px] font-semibold text-[#ffffff]"
              >
                Attorneys
              </Heading>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Heading
                size="headings"
                as="p"
                className="text-[14px] font-semibold text-[#ffffff]"
              >
                Support
              </Heading>
            </Link>
          </li>

          <li>
            <Link href="#">
              <Heading
                size="headings"
                as="p"
                className="text-[14px] font-semibold text-[#ffffff]"
              >
                Login
              </Heading>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
