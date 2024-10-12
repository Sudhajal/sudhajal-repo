"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { TextBlock } from "./TextBlock";
import { ImageComponent } from "./ImageComponent";

const WaterService: React.FC = () => {
  const blobVariants = {
    animate: {
      scale: [1, 1.05, 0.95, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const circleVariants = {
    animate: (i: number) => ({
      x: [0, 10, -10, 0],
      y: [0, -10, 10, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2,
      },
    }),
  };

  const circles = [
    { cx: 150, cy: 150, r: 60 },
    { cx: 210, cy: 170, r: 70 },
    { cx: 180, cy: 230, r: 65 },
    { cx: 130, cy: 210, r: 55 },
    { cx: 190, cy: 120, r: 50 },
  ];

  return (
    <div id="waterservice" className="bg-white flex flex-col p-4">
      {/* Main Header Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center text-center text-zinc-800">
        <div className="flex gap-2.5 items-end w-full lg:w-[50%]">
          <div className="flex flex-col justify-center min-w-[240px] w-full lg:w-[547px]">
            <h1 className="text-3xl lg:text-4xl">
              <span>A service may be all what you need (</span>
              <span className="leading-10">Our Motive</span>
              <span>)</span>
            </h1>
            <TextBlock
              content={[
                "Water is not simply a drinkable element; it is also an essential component of our lives. Sudhajal, The Samruddhi Sales Corporation's dedication, has opted to prioritize 'servicing' in this industry.",
                "Pure water does more than quench your thirst—it fuels every function in your body. But the secret isn't just in how much you drink; it's in the quality of the water itself...",
              ]}
            />
            <Link href="#contactform">
              <Button text="Connect Us" />
            </Link>
          </div>
        </div>

        {/* Amoeba Blob Animation */}
        <motion.div
          variants={blobVariants}
          animate="animate"
          className="relative w-full lg:w-1/2 mt-6 lg:mt-0"
          style={{ width: "300px", height: "300px" }}
        >
          <svg viewBox="0 0 300 300" width="300" height="300" className="object-contain">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
              <mask id="blob-mask">
                <g filter="url(#goo)">
                  {circles.map((circle, index) => (
                    <motion.circle
                      key={index}
                      cx={circle.cx}
                      cy={circle.cy}
                      r={circle.r}
                      fill="white"
                      variants={circleVariants}
                      animate="animate"
                      custom={index}
                    />
                  ))}
                </g>
              </mask>
            </defs>
            <g mask="url(#blob-mask)">
              {/* Image stays still */}
              <image
                href="/glass.png"
                x="0"
                y="0"
                width="300"
                height="300"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
            <g filter="url(#goo)" opacity="0.3">
              {circles.map((circle, index) => (
                <motion.circle
                  key={index}
                  cx={circle.cx}
                  cy={circle.cy}
                  r={circle.r}
                  fill="#87CEEB"
                  variants={circleVariants}
                  animate="animate"
                  custom={index}
                />
              ))}
            </g>
          </svg>
        </motion.div>
      </div>

      {/* Water Science Section */}
      <div className="mt-10 flex flex-col lg:flex-row gap-5 items-center">
        <div className="flex justify-center lg:justify-end w-full lg:w-6/12">
          <ImageComponent
            src="/buble.png"
            alt="Water science illustration"
            className="object-contain w-32 lg:w-[153px]"
            width={128}
            height={128}
          />
        </div>
        <div className="flex flex-col w-full lg:w-6/12 mt-6 lg:mt-0">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-col justify-center w-full max-w-[503px] text-left">
              <h2 className="text-2xl lg:text-3xl leading-tight">
                Why to know water science?
              </h2>
              <TextBlock
                content={[
                  "We often trust popular brands because we believe they maintain a certain standard—like offering water with a TDS (Total Dissolved Solids) of 54 or higher, which many associate with a balanced mineral content. You might notice that mineral water at airports is pricier than regular bottles, reflecting the perceived value of those essential nutrients...",
                ]}
              />
              <div className="flex gap-9 justify-center items-center mt-6 lg:mt-9 text-sm tracking-wide">
                <div className="self-stretch">Want to know more about water?</div>
                <Link href="#contactform">
                  <Button text="Connect Us" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterService;
