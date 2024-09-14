"use client";
import { Heading, CheckBox, Input, Img, ChipView } from "../../components";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close";
import MetaLogoProfile from "../../components/MetaLogoProfile";
import UserProfile from "../../components/UserProfile";
import AboutTrademarksSection from "./AboutTrademarksSection";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const additionalTrademarkList = [
  {
    metaLogoText: "Meta Logo",
    companyName: "FACEBOOK INC.",
    userId: "88713620",
    registrationDate: "26th Jan 2020",
    status: "Live/Registered",
    statusDate: "on 26 Jun 2020",
    qrCodeDate: "26 Dec 2027",
    userDescription:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classText: "Class 45",
    classTextAlt: "Class 8",
    classTextAlt2: "Class 8",
    groupText: "...",
  },

  {
    metaLogoText: "Meta Logo",
    companyName: "FACEBOOK INC.",
    userId: "88713620",
    registrationDate: "26th Jan 2020",
    status: "Live/Registered",
    statusDate: "on 26 Jun 2020",
    qrCodeDate: "26 Dec 2027",
    userDescription:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classText: "Class 45",
    classTextAlt: "Class 8",
    classTextAlt2: "Class 8",
    groupText: "...",
  },

  {
    metaLogoText: "Meta Logo",
    companyName: "FACEBOOK INC.",
    userId: "88713620",
    registrationDate: "26th Jan 2020",
    status: "Live/Registered",
    statusDate: "on 26 Jun 2020",
    qrCodeDate: "26 Dec 2027",
    userDescription:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classText: "Class 45",
    classTextAlt: "Class 8",
    classTextAlt2: "Class 8",
    groupText: "...",
  },
  {
    metaLogoText: "Meta Logo",
    companyName: "FACEBOOK INC.",
    userId: "88713620",
    registrationDate: "26th Jan 2020",
    status: "Live/Registered",
    statusDate: "on 26 Jun 2020",
    qrCodeDate: "26 Dec 2027",
    userDescription:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classText: "Class 45",
    classTextAlt: "Class 8",
    classTextAlt2: "Class 8",
    classtextalt2: "Class 8",
    groupText: "...",
  },
  {
    metaLogoText: "Meta Logo",
    companyName: "FACEBOOK INC.",
    userId: "88713620",
    registrationDate: "26th Jan 2020",
    status: "Live/Registered",
    statusDate: "on 26 Jun 2020",
    qrCodeDate: "26 Dec 2027",
    userDescription:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classText: "Class 45",
    classTextAlt: "Class 8",
    classTextAlt2: "Class 8",
    classtextalt2: "Class 8",
    groupText: "...",
  },
  {
    metaLogoText: "Meta Logo",
    companyName: "FACEBOOK INC.",
    userId: "88713620",
    registrationDate: "26th Jan 2020",
    status: "Live/Registered",
    statusDate: "on 26 Jun 2020",
    qrCodeDate: "26 Dec 2027",
    userDescription:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classText: "Class 45",
    classTextAlt: "Class 8",
    classTextAlt2: "Class 8",
    classtextalt2: "Class 8",
    groupText: "...",
  },

  {
    metaLogoText: "Meta Logo",
    companyName: "FACEBOOK INC.",
    userId: "88713620",
    registrationDate: "26th Jan 2020",
    status: "Live/Registered",
    statusDate: "on 26 Jun 2020",
    qrCodeDate: "26 Dec 2027",
    userDescription:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classText: "Class 45",
    classTextAlt: "Class 8",
    classTextAlt2: "Class 8",
    classtextalt2: "Class 8",
    groupText: "...",
  },
];

const companyTrademarkList = [
  {
    metaLogoText: "Meta Logo",
    facebookIncText: "FACEBOOK INC.",
    eightyeightMillText: "88713620",
    dateText: "26th Jan 2020",
    liveRegisteredText: "Live/Registered",
    on26Jun2020Text: "on 26 Jun 2020",
    dateText1: "26 Dec 2027",
    computerservicesText:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classFortyFiveText: "Class 45",
    classEightOneText: "Class 8",
    classEightText: "Class 8",
    groupText: "...",
  },

  {
    metaLogoText: "Meta Logo",
    facebookIncText: "FACEBOOK INC.",
    eightyeightMillText: "88713620",
    dateText: "26th Jan 2020",
    liveRegisteredText: "Live/Registered",
    on26Jun2020Text: "on 26 Jun 2020",
    dateText1: "26 Dec 2027",
    computerservicesText:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classFortyFiveText: "Class 45",
    classEightOneText: "Class 8",
    classEightText: "Class 8",
    groupText: "...",
  },

  {
    metaLogoText: "Meta Logo",
    facebookIncText: "FACEBOOK INC.",
    eightyeightMillText: "88713620",
    dateText: "26th Jan 2020",
    liveRegisteredText: "Live/Registered",
    on26Jun2020Text: "on 26 Jun 2020",
    dateText1: "26 Dec 2027",
    computerservicesText:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classFortyFiveText: "Class 45",
    classEightOneText: "Class 8",
    classEightText: "Class 8",
    groupText: "...",
  },

  {
    metaLogoText: "Meta Logo",
    facebookIncText: "FACEBOOK INC.",
    eightyeightMillText: "88713620",
    dateText: "26th Jan 2020",
    liveRegisteredText: "Live/Registered",
    on26Jun2020Text: "on 26 Jun 2020",
    dateText1: "26 Dec 2027",
    computerservicesText:
      "Computer services, Social Media, Networking, Virtual Communities, Community",
    classFortyFiveText: "Class 45",
    classEightOneText: "Class 8",
    classEightText: "Class 8",
    groupText: "...",
  },
];

export default function V1Page() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `All ` },
    { value: 2, label: `Registered` },
    { value: 3, label: `Pending` },
    { value: 4, label: `Abandoned` },
    { value: 5, label: `Others` },
  ]);

  const [selectedChipOptions, setSelectedChipOptions] = React.useState<
    number[]
  >([]);

  return (
    <div className="flex w-full flex-col gap-[52px] bg-[#fefefe] py-3 sm:gap-[26px]">
      {" "}
      <Header />
      <div className="mb-1 flex flex-col items-center gap-7">
        {/* about trademarks section */}
        <AboutTrademarksSection />

        <div className="mx-auto flex w-full max-w-[1314px] items-start self-stretch md:flex-col md:px-5">
          <div className="flex flex-1 flex-col gap-6 self-center md:self-stretch">
            <div className="flex w-[96%] flex-col gap-4 md:w-full">
              <div>
                <div>
                  <div className="mx-[26px] flex md:mx-0 md:flex-col">
                    <Heading
                      as="h2"
                      className="text-[16px] font-semibold text-[#313131]"
                    >
                      Mark
                    </Heading>
                    <div className="flex w-[58%] flex-wrap justify-between gap-5 px-[108px] md:w-full md:px-5">
                      <Heading
                        as="h3"
                        className="ml-[30px] text-[16px] font-semibold text-[#313131] md:ml-0"
                      >
                        Details
                      </Heading>
                      <Heading
                        as="h4"
                        className="text-[16px] font-semibold text-[#313131]"
                      >
                        Status
                      </Heading>
                    </div>
                    <Heading
                      as="h5"
                      className="text-[16px] font-semibold text-[#313131]"
                    >
                      Class/Description
                    </Heading>
                  </div>

                  <div className="mt-3 h-px bg-[#e6e5e5]" />
                  <div className="h-px border-t-[0.5px] border-solid border-[#e6e5e5] bg-[#e6e5e5]" />
                </div>
              </div>
              <div className="mr-[54px] flex flex-col gap-6 md:mr-0">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {companyTrademarkList.map((d, index) => (
                    <MetaLogoProfile {...d} key={"metaLogoList" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
            <div className="mr-[86px] flex flex-col gap-6 md: mr-0">
              <Suspense fallback={<div>Loading feed...</div>}>
                {additionalTrademarkList.map((d, index) => (
                  <UserProfile {...d} key={"secondList" + index} />
                ))}{" "}
              </Suspense>
            </div>
          </div>
          <div className="mt-3.5 flex w-[24%] flex-col items-end gap-6 md:w-full">
            <div className="flex flex-col items-end gap-1.5 self-stretch">
              <div className="flex w-[90%] flex-col items-start gap-2 rounded-[12px] bg-[#ffffff] p-4 shadow-[0_4.34px_68px_0_#c5c5c53f] md:w-full">
                <Heading
                  as="h6"
                  className="text-[16px] font-bold capitalize text-[#000000]"
                >
                  Status
                </Heading>
                <ChipView
                  options={chipOptions}
                  setOptions={setChipOptions}
                  values={selectedChipOptions}
                  setValues={setSelectedChipOptions}
                  className="mb-3.5 flex flex-wrap gap-x-1.5 gap-y-2 self-stretch"
                >
                  {(option) => (
                    <React.Fragment key={option.index}>
                      {option.isSelected ? (
                        <div
                          onClick={option.toggle}
                          className="flex h-[36px] min-w-[46px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[12px] border border-solid border-[#4380ec] bg-[#eef4ff] px-3.5 text-center text-[14px] font-semibold capitalize text-[#4380ec]"
                        >
                          <span>{option.label}</span>
                        </div>
                      ) : (
                        <div
                          onClick={option.toggle}
                          className="flex h-[36px] min-w-[46px] cursor-pointer flex-row items-center justify-center rounded-[12px] border border-solid border-[#d1d1d1] bg-[#ffffff] px-3.5 text-center text-[14px] font-semi-bold capatilize text-[#1a1a1a]"
                        >
                          <span>{option.label}</span>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                </ChipView>
              </div>

              <Tabs
                className="flex w-[90%] flex-col gap-3 rounded-[12px] bg-[#ffffff] p-4 shadow-[0_4.34px_68px_0_#c5c5c53f] md:w-full"
                selectedTabClassName="!text-[#000000] font-bold"
                selectedTabPanelClassName="! relative tab-panel--selected"
              >
                <TabList className="flex flex-wrap items-start gap-3">
                  <Tab className="mb-1.5 text-[14px] font-medium capitalize text-[#3e3e3e]">
                    Owners
                  </Tab>
                  <Tab className="text-[14px] font-medium capitalize text-[#3e3e3e]">
                    Law Firms
                  </Tab>
                  <Tab className="text-[14px] font-medium capitalize text-[#3e3e3e]">
                    Attorneys
                  </Tab>
                </TabList>
                {[...Array(3)].map((_, index) => (
                  <TabPanel
                    key={`tab-panel${index}`}
                    className="absolute items-center"
                  >
                    <div className="w-full">
                      <div className="flex flex-col gap-4">
                        <Input
                          name="Search View"
                          placeholder={`Search Owners`}
                          value={searchBarValue1}
                          onChange={(e) => setSearchBarValue1(e.target.value)}
                          prefix={
                            <div className="flex h-[16px] w-[16px] items-center justify-center">
                              <Img
                                src="img_search_gray_700_01.svg"
                                width={16}
                                height={16}
                                alt="Search"
                                className="h-[16px] w-[16px]"
                              />
                            </div>
                          }
                          suffix={
                            searchBarValue1?.length > 0 ? (
                              <CloseSVG
                                onClick={() => setSearchBarValue1("")}
                                height={16}
                                width={16}
                              />
                            ) : null
                          }
                          className="flex h-[40px] items-center justify-center gap-2 rounded-[10px] border border-solid border-[#00000019] bg-[#fcfcfe] px-3 text-[14px] font-medium text-[#313131]"
                        />

                        <div className="flex items-start">
                          <div className="flex flex-1 items-start justify-center">
                            <div className="h-[42px] w-[4px] bg-[#ffffff]" />
                            <div className="flex flex-1 flex-col items-start gap-3 self-center">
                              <CheckBox
                                name="Tesla CheckBox"
                                label="Tesla, Inc."
                                id="TeslaCheckBox"
                                className="flex gap-3 text-[14px] font-semibold text-[#4380ec]"
                              />

                              <CheckBox
                                name="LegalForce CheckBox"
                                label="LEGALFORCE RAPC."
                                id="LegalForceCheckBox"
                                className="flex gap-3 text-[14px] font-medium text-[#313131]"
                              />

                              <CheckBox
                                name="SpaceX CheckBox"
                                label="SpaceX Inc."
                                id="SpaceXCheckBox"
                                className="flex gap-3 text-[14px] font-medium text-[#313131]"
                              />

                              <CheckBox
                                name="SpaceX CheckBox One"
                                label="SpaceX Inc."
                                id="SpaceXCheckBoxOne"
                                className="flex gap-3 text-[14px] font-medium text-[#313131]"
                              />
                            </div>
                          </div>
                          <div className="h-[46px] w-[8px] rounded bg-[#d9d9d9]" />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}{" "}
              </Tabs>
            </div>

            <div className="flex w-[90%] flex-col items-start justify-center gap-3 rounded-[10px] bg-[#ffffff] p-5 shadow-[0_4.34px_68px_0_#c5c5c53f] md:w-full">
              <Heading
                as="h6"
                className="text-[16px] font-bold capitalize text-[#000000]"
              >
                Display
              </Heading>
              <div className="flex items-center justify-between gap-5 self-stretch rounded-[10px] bg-[#f1f1f1] px-2 py-1.5">
                <div className="flex w-[56%] justify-center rounded-lg bg-[#ffffff] p-1.5 shadow-[0_2.98px_14px_0_#c5c5c53f]">
                  <Heading
                    size="headings"
                    as="p"
                    className="font-['DM_Sans'] text-[14px] font-bold text-[#000000]"
                  >
                    Grid View
                  </Heading>
                </div>
                <Heading
                  size="headings"
                  as="p"
                  className="mr-[18px] font-['DM_Sans'] text-[14px] font-bold text-[#000000] md: mr-0"
                >
                  List View
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
