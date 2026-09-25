"use client";

import { codeLines } from "@/lib/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export default function Hero() {
  useGSAP(() => {
    const headingSplit = SplitText.create(".heading-text", {
      type: "chars, words",
    });
    const paragraphSplit = SplitText.create(".paragraph-text", {
      type: "lines",
      mask: "lines", //masking with overflow hidden container
    });
    gsap.from(headingSplit.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      delay: 1,
      stagger: 0.06,
    });
  }, []);

  useGSAP(() => {
    const linesArray = gsap.utils.toArray<HTMLDivElement>(".code-line");

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });

    linesArray.forEach((line, i) => {
      const split = SplitText.create(line, {
        type: "chars",
        ignore: ".line-number, .indent-space",
      });
      tl.from(split.chars, {
        autoAlpha: 0, //opacity 0 and visibility hidden combined
        duration: 0.01,
        stagger: 0.095,
      });
    });
  }, []);

  return (
    <section id="home" className="mt-20 px-8">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center h-[calc(100vh-5rem)] py-2">
        <div className="flex-1">
          <p className="text-tertiary-purple text-xs font-semibold px-4 py-0.5 bg-tertiary-light-purple border-2 border-tertiary-purple rounded-2xl text-center inline">
            v2.4 Shipped: Next-gen mapping
          </p>
          <h1 className="heading-text font-extrabold text-4xl lg:text-5xl mt-6 mb-6">
            Streamline your local <br />{" "}
            <span className="text-tertiary-purple">development lifecycle</span>
          </h1>
          <p className="paragraph-text text-tertiary-light-grey font-medium text-lg lg:text-2xl">
            Stackflow connects your IDE, container configurations, and team
            pipelines into a single, high-fidelity environment. Spend less time
            debugging and more time writing features.
          </p>
          <div className="flex flex-col gap-2 mt-6 xl:mt-10 sm:flex-row">
            <button className="px-8 py-3 shadow rounded-sm font-semibold bg-black text-white cursor-pointer">
              Get Started for Free
            </button>
            <button className="px-8 py-3 shadow border rounded-sm font-semibold cursor-pointer">
              Read Documentation
            </button>
          </div>
          <div className="hidden lg:block lg:mt-8">
            <div className="lg:flex lg:flex-col text-tertiary-light-grey">
              <p className="font-medium text-[#A1A1AA]">
                INTEGRATING SEAMLESSLY WITH
              </p>
              <div className="flex flex-wrap gap-x-6 items-center font-semibold text-xl text-[#71717A] mt-4">
                <p>Docker</p>
                <p>Kubernetes</p>
                <p>VS Code</p>
                <p>GitHub Actions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-2xl lg:mt-10">
          <div className="w-full max-w-2xl bg-[#3b3b3d] rounded-lg shadow-lg  shadow-[#3b3b3b]">
            <div className="grid grid-cols-3 items-center px-2 py-2 rounded-t-md bg-[#52525B]">
              <div className=" flex items-center px-4 gap-1">
                <div className="inline-flex size-3 rounded-full bg-red-600"></div>
                <div className="inline-flex size-3 rounded-full bg-yellow-600"></div>
                <div className="inline-flex size-3 rounded-full bg-green-600"></div>
              </div>
              <div className="text-center">
                <code className="font-semibold text-[#A1A1AA]">
                  stackflow.config.yaml
                </code>
              </div>
              <div />
            </div>
            <div className="p-3">
              <pre className="whitespace-pre font-mono">
                {codeLines.map((line, i) => (
                  <code key={i} className="code-line block text-[#A1A1AA]">
                    <span className="line-number pr-2 select-none">
                      {i + 1}
                    </span>
                    <span
                      className="indent-space inline-block"
                      style={{ width: `${line.indent * 1.5}ch` }}
                    />
                    {line.tokens.map((token, j) => (
                      <span key={j} className={token.className}>
                        {token.text}
                      </span>
                    ))}
                  </code>
                ))}
              </pre>
            </div>
          </div>
          <div className="block mt-8 lg:hidden">
            <div className="flex flex-col text-tertiary-light-grey">
              <p className="font-light text-[#A1A1AA]">
                INTEGRATING SEAMLESSLY WITH
              </p>
              <div className="flex flex-wrap gap-x-4 items-center font-medium text-xl text-[#71717A] mt-2">
                <p>Docker</p>
                <p>Kubernetes</p>
                <p>VS Code</p>
                <p>GitHub Actions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
