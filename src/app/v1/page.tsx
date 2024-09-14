import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Trademark Search Results - Find Information on Trademarks",
  description:
    "Explore detailed trademark information with our comprehensive search results. Find status, class descriptions, and owner details for trademarks like \\'nike\\'.",
  //ogTitle: '...,
};

export default function V1Page() {
  return <Page />;
}
