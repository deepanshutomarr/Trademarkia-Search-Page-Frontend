import { Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  metaLogoText?: React.ReactNode;
  companyName?: React.ReactNode;
  userId?: React.ReactNode;
  registrationDate?: React.ReactNode;
  status?: React.ReactNode;
  statusDate?: React.ReactNode;
  qrCodeDate?: React.ReactNode;
  userDescription?: React.ReactNode;
  classText?: React.ReactNode;
  classTextAlt?: React.ReactNode;
  classtextalt2?: React.ReactNode;
  groupText?: React.ReactNode;
}

export default function UserProfile({
  metaLogoText = "Meta Logo",
  companyName = "FACEBOOK INC.",
  userId = "88713620",
  registrationDate = "26th Jan 2020",
  status = "Live/Registered",
  statusDate,
  qrCodeDate = "26 Dec 2027",
  userDescription = "Computer services, Social Media, Networking, Virtual Communities, Community",
  classText = "Class 45",
  classTextAlt = "Class 8",
  classtextalt2 = "Class 8",
  groupText = "...",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center flex-1 container-xs`}
    >
      <div className="flex w-[40%] items-start justify-between gap-5">
        <div className="flex w-[42%] justify-center self-center rounded-[10px] bg-[#ffffff] p-7 shadow-[0_4.34px_108px_0_#9797973f] sm:p-5">
          <Img
            src="img_television.svg"
            width={54}
            height={60}
            alt="Television Image"
            className="h-[60px] w-[54%] object-contain"
          />
        </div>
        <div className="flex w-[44%] flex-col gap-7 sm:gap-7">
          <div className="flex flex-col items-start gap-1 sm: gap-1">
            <Heading
              as="h6"
              className="text-[16px] font-bold text-[#1a1a1a] sm:text-[13px]"
            >
              {metaLogoText}
            </Heading>
            <Heading
              size="texts"
              as="p"
              className="text-[14px] font-normal text-[#1a1a1a]"
            >
              {companyName}
            </Heading>
          </div>
          <div className="flex flex-col items-start gap-0.5 sm: gap-0.5">
            <Heading
              size="headings"
              as="p"
              className="text-[14px] font-semibold text-[#1a1a1a]"
            >
              {userId}
            </Heading>
            <Heading
              size="textxs"
              as="p"
              className="text-[12px] font-medium capitalize text-[#1a1a1a]"
            >
              {registrationDate}
            </Heading>
          </div>
        </div>{" "}
      </div>
      <div className="flex flex-1 items-start justify-center gap-[45px]">
        <div className="flex w-[28%] flex-col gap-12 self-center sm: gap-12">
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-center gap-1.5 self-stretch">
              <div className="h-[8px] w-[8px] rounded bg-[#128807]" />
              <Heading
                as="h6"
                className="text-[16px] font-bold text-[#41b65c] sm:text-[13px]"
              >
                (status)
              </Heading>
            </div>
            <Heading
              size="textxs"
              as="p"
              className="font-['Gilroy'] text-[12px] font-medium text-[#1alala]"
            >
              <span className="font-normal">on</span>

              <span>&nbsp;</span>
              <span className="font-bold">26 Jun 2020</span>
            </Heading>
          </div>

          <div className="flex items-center">
            <Img
              src="img_qrcode.svg"
              width={16}
              height={16}
              alt="Qr Code Image"
              className="h-[16px] w-[16px]"
            />
            <Heading
              size="headingxs"
              as="p"
              className="ml-1 text-[12px] font-bold text-[#1a1a1a]"
            >
              {qrCodeDate}
            </Heading>
          </div>
        </div>

        <div className="mt-2 flex w-[60%] flex-col gap-4 sm:gap-4">
          <Heading
            size="texts"
            as="p"
            className="text-[14px] font-medium leading-[21px] text-[#1d1c1d]"
          >
            {userDescription}
          </Heading>
          <div className="flex justify-center gap-1">
            <div className="flex items-center gap-1">
              <Img
                src="img_group_1000007778.svg"
                width={20}
                height={22}
                alt="Class 45 Image"
                className="h-[22px]"
              />
              <Heading
                size="headingxs"
                as="p"
                className="text-[12px] font-bold text-[#3a3a3a]"
              >
                {classText}
              </Heading>
            </div>

            <div className="flex items-center gap-1">
              <Img
                src="img_group_1000007778.svg"
                width={20}
                height={22}
                alt="Class 8 Image"
                className="h-[22px]"
              />
              <Heading
                size="headingxs"
                as="p"
                className="text-[12px] font-bold text-[#3a3a3a]"
              >
                {classTextAlt}
              </Heading>
            </div>

            <div className="flex flex-1 items-center gap-[9px] px-1.5">
              <div className="flex items-center gap-1">
                <Img
                  src="img_group_1000007778.svg"
                  width={20}
                  height={22}
                  alt="Class 8 Subimage"
                  className="h-[22px]"
                />
                <Heading
                  size="headingxs"
                  as="p"
                  className="text-[12px] font-bold text-[#3a3a3a]"
                >
                  {classtextalt2}
                </Heading>
              </div>
              <Heading
                size="headingxs"
                as="p"
                className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] bg-[#eaeaea] text-center text-[12px] font-bold text-[#000000] sm:w-[20px]"
              >
                {groupText}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
