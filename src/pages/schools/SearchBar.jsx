"use client";
import React from "react";

function SearchBar() {
  return (
    <section className="flex flex-wrap gap-4 self-start mt-10 text-lg text-gray-800 max-md:mt-10">
      <label htmlFor="city-search" className="grow my-auto">
        Введіть назву міста:
      </label>
      <input
        id="city-search"
        type="text"
        className="flex shrink-0 max-w-full bg-emerald-50 border border-teal-500 border-solid h-[52px] rounded-[30px] w-[460px] px-4"
        placeholder="Введіть назву міста"
      />
    </section>
  );
}

export default SearchBar;
