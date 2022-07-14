/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <>

    <div className="container mx-auto px-4 ">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:w-1/3">

          <article className="overflow-hidden rounded-lg shadow-lg bg-white">
            <Link href={`/post/${post.slug}`}>
              <img alt="Placeholder" className="block h-auto w-full cursor-pointer" src={post.featuredImage.url} />
            </Link>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg text-limit">
                {post.title}
              </h1>
              <div className="text-grey-darker text-sm">
                <div className="font-medium text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
              </div>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <p className="text-limit">
                {post.excerpt}
              </p>
            </footer>
            <div className="pb-3">
              <div className="text-center">
                <Link href={`/post/${post.slug}`}>
                  <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-sky-900 text-sm font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
                </Link>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>

  </>
);

export default PostCard;
