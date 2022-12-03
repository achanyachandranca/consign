import Head from "next/head";
import Image from "next/image";
import { Component, useEffect, useState } from "react";
import Input from "../../components/input";


export default function Home() {
  return (
    <section>


      <div className="h-screen flex flex-col items-center justify-center">
        <br/>
        <br/>
        <p>Achanya</p>
        <p>achanya@gmail.com</p>
        <br/>
        <br/>

        <div class="grid grid-cols-2 grid-rows-2 gap-12">
          <div><div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a class="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" href="#">
                Card link
                <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
            </div>
            <div class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                Last updated 5 mins ago
              </p>
            </div>
          </div></div>

          <div><div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a class="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" href="#">
                Card link
                <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
            </div>
            <div class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                Last updated 5 mins ago
              </p>
            </div>
          </div></div>
          <div><div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a class="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" href="#">
                Card link
                <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
            </div>
            <div class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                Last updated 5 mins ago
              </p>
            </div>
          </div></div>
          <div><div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a class="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" href="#">
                Card link
                <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
            </div>
            <div class="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                Last updated 5 mins ago
              </p>
            </div>
          </div></div>
        </div>
      </div>


    </section>
  );
}
