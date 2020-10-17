/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Link from "next/link";

const Footer = (props: { simple?: boolean }) => (
  <div
    className={
      props.simple ? undefined : "bg-white border-t border-b border-gray-700"
    }
  >
    <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        <div className="px-5 py-2">
          <a
            href="http://wiut.uz/"
            className="text-base leading-6 text-black hover:text-gray-700"
          >
            WIUT
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="https://github.com/4bis1"
            className="text-base leading-6 text-black hover:text-gray-700"
          >
            Organisation
          </a>
        </div>
        <div className="px-5 py-2">
            <a href="https://t.me/s/SeventyPlusBIS"
               className="text-base leading-6 text-black hover:text-gray-700">
              News
            </a>
        </div>
      </nav>
      <div className="mt-9 flex justify-center">
        <a
          href="https://github.com/00010023"
          className="text-black hover:text-gray-600"
        >
          <span className="sr-only">GitHub</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://intranet.wiut.uz"
          className="ml-6 text-black hover:text-gray-600"
        >
          <span className="sr-only">Assistant</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 50 50">
            <path d="M25 2C12.317 2 2 12.318 2 25C2 37.682 12.317 48 25 48C33.07553 48 40.186334 43.812904 44.291016 37.5L44.292969 37.5C46.634529 33.898373 48 29.606729 48 25C48 12.318 37.683 2 25 2 z M 28 21C34.061 21 38.210234 24.960516 41.240234 27.853516C41.899234 28.482516 42.491781 29.043531 43.050781 29.519531C42.103026 29.84545 41.222265 30.305755 40.359375 30.789062C40.296338 30.746702 40.244066 30.710888 40.179688 30.667969C38.253484 29.383833 35.738095 28 32 28C28.984934 28 26.416689 29.160021 24.044922 30.613281C23.30148 30.077721 22.557351 29.519925 21.800781 28.945312C20.325781 27.825312 18.831531 26.69275 17.269531 25.71875C20.376531 23.12475 23.577 21 28 21 z M 9 25C10.665 25 12.241813 25.426516 13.757812 26.103516C11.177812 28.353516 8.4927813 30.626328 5.1757812 31.861328C4.5867812 30.166328 4.2101719 28.378531 4.0761719 26.519531C5.0021719 25.996531 7.024 25 9 25 z M 15.666016 27.09375C17.359016 28.08875 18.986844 29.321063 20.589844 30.539062C21.140804 30.957387 21.703206 31.365408 22.261719 31.777344C21.817849 32.07873 21.366805 32.376467 20.931641 32.677734C20.071517 33.273205 19.22411 33.853217 18.376953 34.388672C16.015086 33.041117 13.576332 32 11 32C10.367427 32 9.7942504 32.030996 9.25 32.074219C11.473217 30.727374 13.419045 29.054096 15.3125 27.402344C15.4305 27.299344 15.549016 27.19675 15.666016 27.09375 z M 32 30C34.868609 30 36.734444 30.87503 38.386719 31.910156C36.505867 32.997986 34.519837 34 32 34C29.88499 34 27.881353 33.117704 25.882812 31.861328C27.826888 30.76544 29.808826 30 32 30 z M 45.097656 31.070312C44.903125 31.712892 44.668884 32.337991 44.416016 32.953125C43.69767 32.835638 43.002946 32.484206 42.263672 32.033203C43.181661 31.575928 44.109862 31.210207 45.097656 31.070312 z M 24.003906 33.019531C25.272947 33.871419 26.575347 34.615283 27.925781 35.150391C26.572971 35.878453 25.303045 36.878347 24.083984 37.935547C23.407109 37.520673 22.728098 37.099899 22.041016 36.658203C21.456372 36.282361 20.863352 35.909818 20.271484 35.537109C20.876146 35.134053 21.480706 34.729103 22.068359 34.322266C22.719781 33.871281 23.361887 33.440979 24.003906 33.019531 z M 40.253906 33.142578C41.278114 33.84495 42.325194 34.495192 43.541016 34.804688C43.267798 35.3195 42.973781 35.8202 42.660156 36.308594C42.581472 36.394206 42.403593 36.589831 41.953125 36.990234C41.420079 36.963672 39.889082 36.327743 38.144531 35.580078C37.691472 35.38591 37.217304 35.188669 36.724609 35.001953C37.981013 34.475976 39.113785 33.814655 40.173828 33.189453C40.200831 33.173519 40.226943 33.158481 40.253906 33.142578 z M 11 34C12.683144 34 14.463241 34.639979 16.302734 35.578125C14.617569 36.43281 12.885509 37 11 37C8.5524101 37 6.8987947 35.470196 6.7597656 35.337891C6.6177048 35.08798 6.4835717 34.834247 6.3515625 34.578125C7.2086255 34.319011 8.672039 34 11 34 z M 32 36C33.75 36 35.637163 36.683505 37.355469 37.419922C38.272945 37.813126 39.105482 38.227506 39.912109 38.537109C38.024037 39.759774 35.302502 41 32 41C30.078527 41 28.033111 40.181492 25.914062 39.017578C28.021744 37.305236 30.14436 36 32 36 z M 18.386719 36.732422C19.235156 37.240108 20.093726 37.785559 20.958984 38.341797C21.470881 38.670873 21.990468 38.996403 22.507812 39.324219C21.148803 40.561386 19.867421 41.772958 18.734375 42.644531C17.613021 43.507112 16.645941 43.965066 16.056641 43.990234C13.415908 42.737721 11.077412 40.948822 9.1796875 38.765625C9.7435708 38.900844 10.342459 39 11 39C13.774889 39 16.173027 38.020914 18.386719 36.732422 z M 24.292969 40.419922C26.757437 41.859108 29.303534 43 32 43C33.877818 43 35.587209 42.654621 37.09375 42.136719C33.671682 44.561418 29.504474 46 25 46C22.831788 46 20.742806 45.664695 18.775391 45.050781C19.168199 44.803511 19.559955 44.532907 19.953125 44.230469C21.237354 43.2426 22.558035 41.980088 23.921875 40.740234C24.044169 40.629058 24.170016 40.530033 24.292969 40.419922 z" />{" "}
          </svg>
        </a>
        <a
          href="https://t.me/SeventyPlusBIS"
          className="ml-6 text-black hover:text-gray-600"
        >
          <span className="sr-only">Telegram</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.572266 3.0117188C20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875C19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312L3.2695312 9.9960938C2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672C2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062L6.9472656 14.757812C7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906C8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594C9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812C10.165656 20.007812 10.484625 19.801641 10.640625 19.681641L12.970703 17.710938L15.800781 20.328125C15.909781 20.439125 16.486719 21 17.261719 21C18.228719 21 18.962234 20.195016 19.115234 19.416016C19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625C22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531C21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875C19.533156 7.061875 17.478016 17.378234 17.166016 18.865234L13.029297 15.039062L10.222656 17.416016L11 14.375C11 14.375 16.362547 8.9468594 16.685547 8.6308594C16.945547 8.3778594 17 8.2891719 17 8.2011719C17 8.0841719 16.939781 8 16.800781 8C16.675781 8 16.506016 8.1197812 16.416016 8.1757812C15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391L4.53125 11.636719L6.21875 10.927734C10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z" />
          </svg>
        </a>
      </div>
      <div className="mt-9 flex justify-center text-center">
        <a
          href="https://github.com/genemators/genemators/blob/master/LICENSE"
          className="hover:underline"
        >
          BETA 0.0.1 | MPL-2.0 Licensed | Copyright © 2020 00010023
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
