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
      <h1 className="text-4xl md:text-5xl my-8 max-w-6xl">Sudhajal - Water Purification Services for business and household</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center text-center text-zinc-800">
        <div className="flex gap-2.5 items-end w-full lg:w-[70%] my-12">
          <div className="flex flex-col justify-center min-w-[240px] w-full lg:w-[547px]">
            <h2 className="text-3xl lg:text-4xl">
              <span>A Service That Meets Your Needs (</span>
              <span className="leading-10">Our Motive</span>
              <span>)</span>
            </h2>
            <TextBlock
              content={[
                "Water is more than just a drinkable element—it's the essence of life itself. At Sudhajal, a trusted venture of Samruddhi Sales Corporation, we are dedicated to prioritizing 'service' in the water purification industry.",
               "Pure water doesn’t just quench your thirst; it powers every vital function in your body. The true secret to well-being lies not just in how much water you consume, but in the quality of that water. With advanced purification systems at home, you ensure that every sip and every meal enriches your health, delivering nourishment in ways you might not even realize.",
               "At Sudhajal, we are committed to ensuring access to safe, clean, and high-quality water through reliable services and solutions, because your health deserves nothing less."
              ]}
            />
            <Link href="https://www.instagram.com/direct/t/17846334732309544">
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
        <div className="flex justify-center  w-full lg:w-6/12">
          <ImageComponent
            src="/buble.png"
            alt="Water science illustration Sudhajal"
            className="object-contain w- lg:w-[140px]"
            width={128}
            height={128}
          />
        </div>
        <div className="flex flex-col w-full lg:w-2/3 mt-6 lg:mt-0">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-col justify-center w-full max-w-[503px] text-left">
              <h2 className="text-2xl lg:text-3xl leading-tight">
              Why Understanding Water Science Matters
              </h2>
              <TextBlock
                content={[
                  "We often trust popular brands, assuming they maintain high standards, such as providing water with a TDS (Total Dissolved Solids) level of 54 or higher. This TDS level is often associated with a balanced mineral content that supports overall health. For instance, the higher price of mineral water at airports reflects the perceived value of these essential nutrients.",
                  "But water is more than just a thirst-quencher—it's a vital element carrying essential minerals bound to H₂O by ionized bonds, directly impacting your body’s overall function. The right TDS balance is crucial, as it can mean the difference between optimal health and potential deficiencies.",
                  
                ]}
              />
              <div className="flex gap-9 justify-center items-center mt-6 lg:mt-9 text-sm tracking-wide">
                <div className="self-stretch">Want to know more about water science?</div>
                <Link href="https://www.instagram.com/direct/t/17846334732309544">
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
