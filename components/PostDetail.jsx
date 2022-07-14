/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import { grpahCMSImageLoader } from '../util';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
      if (obj.code) {
        modifiedText = (<code className="max-w-4xl p-4 text-cyan-300 bg-slate-700 rounded-lg shadow-md code" key={index}>{text}</code>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="rounded-lg shadow-sm"
          />
        );
      case 'block-quote':
        return (
          <div className="max-w-4xl p-4  bg-gray-700 rounded-lg shadow-md" key={index}>
            <div className="mb-2">
              <div className="h-3 text-5xl text-left text-lime-300">“</div>
              <p className="px-4 text-md text-center text-lime-300">
                {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
              </p>
              <div className="h-3 text-5xl text-right text-lime-300">”</div>
            </div>
          </div>
        );
      case 'code-block':
        return (
          <pre key={index}>
            <code className="max-w-4xl p-4 text-cyan-300 bg-slate-700 rounded-lg shadow-md code mb-2">
              {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
            </code>
          </pre>
        );
      case 'iframe':
        return (
          <div className="rounded-lg bg-black" key={index}>
            <iframe
              className="w-full aspect-video mb-2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src={obj.url}
            />
          </div>
        );
      default:
        return modifiedText;
    }
  };

  const _title = `${post.title} | ThanathipDev`;

  console.log(post);
  return (
    <>
      <NextSeo
        title={_title}
        description={post.excerpt}
        canonical="
        https:// www.thanathip.com/"
        openGraph={{
          url: `https:// www.thanathip.com/post/${post.slug}`,
          title: _title,
          description: 'Open Graph Description',
          images: [
            {
              url: post.featuredImage.url,
              width: 800,
              height: 600,
              alt: post.title,
              type: 'image/jpeg',
            },
          ],
          site_name: _title,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <Image
          loader={grpahCMSImageLoader}
          alt={post.title}
          width={1280}
          height={720}
          unoptimized
          className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg  mb-6 overflow-hidden"
          src={post.featuredImage.url}
        />
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <Image
                loader={grpahCMSImageLoader}
                alt={post.author.name}
                height="30px"
                width="30px"
                unoptimized
                className="align-middle rounded-full"
                src={post.photo ? post.photo.url : 'https://icons-for-free.com/download-icon-business+costume+male+man+office+user+icon-1320196264882354682_512.png'}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>

    </>
  );
};

export default PostDetail;
