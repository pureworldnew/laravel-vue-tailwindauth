<template>
  <div class="header_area">
    <div class="max-w-full">
      <div
        class="flex md:justify-between py-2.5 2xl:px-64 xl:px-44 mx-auto sm:px-6 lg:px-8 shadow-md"
      >
        <img
          :src="'/img/logo.png'"
          alt="profile Pic"
          height="200"
          width="200"
        />
        <p id="hamburgerbtn" class="md:hidden bg-purple-800">
          menu
        </p>
        <ul class="hidden md:flex md:flex-row self-center" id="mobileMenu">
          <li class="pr-9">
            <a
              class="hover:text-product-red-600 uppercase font-semibold text-base"
              href="#"
              >Home</a
            >
          </li>
          <li class="pr-9">
            <a
              class="hover:text-product-red-600 uppercase font-semibold text-base"
              href="#"
              >All products</a
            >
          </li>
          <li class="pr-9">
            <a
              class="hover:text-product-red-600 uppercase font-semibold text-base"
              href="#"
              >About us</a
            >
          </li>
          <li class="">
            <a
              class="hover:text-product-red-600 uppercase font-semibold text-base"
              href="#"
              >contact us</a
            >
          </li>
        </ul>
      </div>
      <div
        class="bg-category-back-500 md:justify-between 2xl:px-64 xl:px-44 sm:px-6 lg:px-8"
      >
        <div class="flex justify-between py-9">
          <div
            class="text-3xl tracking-wider uppercase text-black font-semibold"
          >
            categories
          </div>
          <div class="flex flex-row justify-center items-center">
            <hr class="pl-3 border-t border-solid w-8 border-red-400" />
            <div class="pl-3 text-custom-red-400 tracking-normal text-sm">
              <a href="">See More</a>
            </div>
            <i class="fas fa-angle-right pl-3 text-custom-red-400"></i>
          </div>
        </div>

        <div
          class="grid gap-10 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 pb-10"
        >
          <div class="flex flex-col" v-for="n in 8" v-bind:key="n">
            <img :src="'/img/' + n + '.png'" class="w-full mb-4" />
            <div class="flex flex-row justify-start items-center mb-3.5">
              <img :src="'/img/disc.png'" class="w-4 h-4 mr-4" />
              <div class="font-semibold text-category-title-600 text-lg">
                Utility Trailer
              </div>
            </div>
            <div class="flex flex-row justify-between">
              <div class="text-sm	text-category-subtitle-600 font-semibold">
                343 Products
              </div>
              <input
                class="bg-custombtn-red-400 text-sm text-white rounded-full w-20"
                type="button"
                value="View all"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="md:justify-between 2xl:px-64 xl:px-44 sm:px-6 lg:px-8">
        <div class="flex justify-between py-9">
          <div
            class="text-3xl tracking-wider uppercase text-black font-semibold"
          >
            latest products
          </div>
          <div class="flex flex-row justify-center items-center">
            <hr class="pl-3 border-t border-solid w-8 border-red-400" />
            <div class="pl-3 text-custom-red-400 tracking-normal text-sm h-7">
              <a href="">View all</a>
            </div>
            <i class="fas fa-angle-right pl-3 text-custom-red-400"></i>
          </div>
        </div>

        <div
          class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 pb-10"
        >
          <div class="flex flex-col" v-for="n in 12" v-bind:key="n">
            <img :src="'/img/product.png'" class="w-full mb-4" />
            <div
              class="flex flex-col justify-start font-semibold text-category-title-600 text-base pb-3"
            >
              <div class="">2020 RawMaxx</div>
              <div class="">12x83 Dump Trailer</div>
            </div>
            <div class="flex flex-row justify-start">
              <input
                class="text-product-red-600 text-xs rounded-full w-24 border-2 h-7 bg-white border-solid border-view-details-600"
                type="button"
                value="View details"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex md:justify-between 2xl:px-64 xl:px-44 sm:px-6 lg:px-8 bg-apply-part py-16"
      >
        <div class="flex flex-col justify-start w-full">
          <div class="flex flex-wrap md:justify-between">
            <div
              class="text-white font-bold text-6xl uppercase font-guurantee pb-8"
            >
              our gurantee
            </div>
            <div class="">
              <input
                type="button"
                class="uppercase bg-white rounded-l-full text-xl text-black p-4 font-semibold tracking-wide"
                value="financing through sheffield"
              />
              <input
                type="button"
                class="uppercase bg-product-red-600 rounded-r-full text-xl text-white p-4 font-semibold tracking-wide"
                value="apply now"
              />
            </div>
          </div>

          <div class="text-2xl font-semibold text-white pb-4">
            Top quality service, guaranteed satisfaction, and peace of mind.
          </div>
          <div class="text-yellow-300 text-2xl pb-4">What We Offer:</div>
          <div class="text-yellow-300 text-2xl pb-8">
            Complete HAULING and TRUCK ACCESSORIES
          </div>

          <input
            type="button"
            value="Read more"
            class="bg-product-red-600 text-white font-semibold text-xs w-24 h-7 rounded-full"
          />
        </div>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:px-64 xl:px-44 sm:px-6 lg:px-8 bg-newsletter-color-400 py-10"
      >
        <div class="flex flex-row flex-nowrap">
          <img :src="'/img/news.png'" alt="Newsletter pic" class="pr-6" />
          <div class="text-sm	text-category-subtitle-600 self-center">
            <div class="text-xl font-bold pb-5">
              Get the latest deals and more.
            </div>
            <div class="text-sm	text-category-subtitle-600 font-semibold">
              New releases, special offers, and more.
            </div>
          </div>
        </div>
        <div
          class="flex flex-row self-center flex-nowrap w-full justify-start lg:justify-end"
        >
          <input
            type="text"
            placeholder="Your email letter"
            class="text-sm p-4 text-category-subtitle-600 h-12 w-3/4"
          />
          <button
            type="submit"
            class="bg-custom-red-400 rounded-r-full flex flex-row flex-nowrap self-center h-12 p-4"
          >
            <i class="fas fa-envelope-square pr-4 text-white font-light"></i>
            <div class="text-white self-center">Sign Up</div>
          </button>
        </div>
      </div>
      <div class="flex flex-col 2xl:px-64 xl:px-44 sm:px-6 lg:px-8">
        <div class="py-8 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 py-9 gap-4">
            <div class="flex flex-col justify-start">
              <div class="uppercase font-bold text-black text-lg mb-6">
                Quick links
              </div>
              <div
                class="uppercase text-sm leading-7 text-footer-color-400 mb-4"
              >
                <i class="fas fa-angle-right text-red-400 pr-2"></i>All
                Inventory
              </div>
              <div
                class="uppercase text-sm leading-7 text-footer-color-400 mb-4"
              >
                <i class="fas fa-angle-right text-red-400 pr-2"></i>design a
                trailer
              </div>
              <div
                class="uppercase text-sm leading-7 text-footer-color-400 mb-4"
              >
                <i class="fas fa-angle-right text-red-400 pr-2"></i>apply for
                credit
              </div>
              <div class="uppercase text-sm leading-7 text-footer-color-400">
                <i class="fas fa-angle-right text-red-400 pr-2"></i>contact us
              </div>
            </div>
            <div class="flex flex-col justify-start">
              <div class="uppercase font-bold text-black text-lg mb-6">
                Open Hours
              </div>
              <div
                class="uppercase text-sm leading-7 text-footer-color-400 mb-4"
              >
                Mon - Fri
              </div>
              <div
                class="uppercase text-sm leading-7 text-footer-color-400 mb-4"
              >
                08:00 AM - 06:00 PM
              </div>
              <div
                class="uppercase text-sm leading-7 text-footer-color-400 mb-4"
              >
                saturday
              </div>
              <div class="uppercase text-sm leading-7 text-footer-color-400">
                08:00 AM - 12:00 PM
              </div>
            </div>
          </div>
          <div class="flex flex-col py-9 2xl:pl-24">
            <div class="uppercase font-bold text-black text-lg mb-6">
              Connect
            </div>
            <div class="flex flex-row flex-nowrap mb-6">
              <i class="fab fa-facebook-f mr-8"></i>
              <i class="fas fa-envelope mr-8"></i>
              <i class="fab fa-twitter mr-8"></i>
            </div>
            <div class="uppercase text-sm leading-7 text-footer-color-400 mb-3">
              trailer dealer website by
            </div>
            <img
              :src="'/img/connect.png'"
              alt="connect image"
              class="mb-2 w-3/4"
            />
            <div class="uppercase text-sm leading-7 text-footer-color-400 mb-4">
              privacy policy
            </div>
          </div>
          <div class="flex flex-col py-9 bg-contact-bc-400 pl-6">
            <div class="uppercase text-lg text-white font-bold mb-6">
              Contact Us
            </div>
            <div class="uppercase text-sm leading-7 text-white mb-4">
              1208 north main seminole, TX 79360
            </div>
            <div class="flex flex-row">
              <div
                class="bg-product-red-600 rounded-full w-20 h-20 flex justify-center items-center mr-6"
              >
                <i class="fa fa-phone text-white" aria-hidden="true"></i>
              </div>
              <div
                class="text-white text-xl font-semibold flex flex-col justify-center items-center"
              >
                <div>(432) 758-2265</div>
                <div>(432) 847-2999</div>
              </div>
            </div>
          </div>
        </div>
        <hr class="w-full pb-6" />
        <div class="self-center pb-11">Copyright 2021. All Rights Reserved</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "landing",
  data: () => ({
    image_src: "/img/logo.png"
  })
};
</script>
