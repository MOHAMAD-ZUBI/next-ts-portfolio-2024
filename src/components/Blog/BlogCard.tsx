"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

interface  Props { 
  post : BlogPost
}
export function BlogCard({post}: Props) {
  const {id, title, author, desc, date, img} = post
  const formattedDate = getFormattedDate(date) 
  return (
    <CardContainer className="inter-var">
      <CardBody className=" bg-primaryText/10 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        
        
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={post.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white mt-2"
        >
          {post.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-gray-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {post.desc}
        </CardItem>
        <div className="w-full h-[1px] bg-gray-300 mt-6"></div>
        
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-primaryText dark:text-white"
          >
            <Link href={`/blog/${id}`}>Check me →</Link>
          </CardItem>
          <div className="flex flex-col ">
          <CardItem
          as="p"
          translateZ="60"
          className="text-gray-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {post.author}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {formattedDate}
        </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
