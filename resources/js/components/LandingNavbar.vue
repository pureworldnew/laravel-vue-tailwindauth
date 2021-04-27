<template>
  <div
    cla
    ss="flex md:justify-between py-2.5 2xl:px-64 xl:px-44 mx-auto sm:px-6 lg:px-8 shadow-md"
  >
    <img :src="'/img/logo.png'" alt="profile Pic" height="200" width="200" />
    <p id="hamburgerbtn" class="md:hidden bg-purple-800">menu</p>
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
</template>
