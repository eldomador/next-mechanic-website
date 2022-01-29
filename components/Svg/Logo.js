import * as React from "react";

const Logo = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 283 64"
    style={{
      enableBackground: "new 0 0 283 64",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{".st0{fill:#fff}"}</style>
    <path
      className="st0"
      d="M2.2 22.5V2.9h63.5V61H2.2V22.9c1.2.2 2.5.4 3.7.6.2 0 .4.2.4.4.1 1.1.2 2.3.7 3.4.1.2 0 .4-.2.5-.8.3-1.5.8-2.3 1.2-.3.2-.7.4-1.1.6.3.5.6.9.9 1.3.7 1.2 1.4 2.3 2.1 3.5.2.3.4.3.7.2 1-.5 1.9-1 2.9-1.5.1-.1.4-.1.5 0 .7.5 1.3 1 1.9 1.5.4.3.9.6 1.3.9-.5 1.2-.9 2.3-1.4 3.6l6.3 2.1c.4-1 .7-2.1 1.1-3 .1-.2.4-.5.6-.5h3.8c.1 0 .4.1.4.2.4.9.7 1.8 1.1 2.7.1.2.2.4.2.6 2.1-.7 4.1-1.4 6.2-2.1l-1.2-3c-.2-.5-.1-.7.3-1 .8-.6 1.7-1.2 2.4-1.8.4-.3.6-.4 1.1-.1 1 .6 2 1.1 3 1.6 1.1-1.8 2.2-3.5 3.3-5.2-1.2-.6-2.4-1.3-3.5-1.9.2-1.2.4-2.3.6-3.4.1-.5.2-.7.7-.8 1.2-.2 2.4-.4 3.5-.6-.4-2-.7-3.9-1.1-5.9h-.6c-1 .2-2 .3-3 .5-.3 0-.5.1-.6-.3l-2.1-3.3c.8-.9 1.7-1.9 2.6-2.9l-5.1-3.9c-.5.5-1 1-1.4 1.5-.4.4-.7.8-1.1 1.2.1.2-.1.2-.3.2-1.1-.4-2.2-.8-3.4-1.1-.4-.1-.6-.3-.5-.7V5H19v3.3c0 .3-.1.5-.4.6-1.1.3-2.3.7-3.4 1.1-.4.1-.6.1-.8-.2-.6-.7-1.3-1.4-1.9-2.2-.3-.3-.4-.4-.8-.1-1.2 1-2.5 1.9-3.8 2.9-.3.2-.5.5-.8.7.9.9 1.7 1.8 2.5 2.6.1.1.1.4 0 .5-.6 1-1.3 1.9-1.9 2.8-.2.3-.3.5-.7.4l-3.6-.6c-.3 1.6-.6 3.1-1 4.6-.1.5-.1.8-.2 1.1zm52.9 34c-.4-.7-.8-1.3-1.2-1.9-.1-.2-.4-.4 0-.7.6-.5 1.2-1.1 1.7-1.7.2-.2.4-.3.6-.1l2.4.9c.6-1.3 1.2-2.6 1.8-4-.9-.3-1.6-.6-2.4-.9-.3-.1-.4-.2-.3-.5 0-.7.1-1.5.1-2.2 0-.3.1-.4.4-.5.8-.2 1.6-.5 2.4-.7-.5-1.4-.9-2.7-1.4-4.1-.9.3-1.6.5-2.4.7-.2 0-.5 0-.6-.1-.5-.6-1-1.2-1.5-1.7-.3-.3-.2-.5 0-.7.4-.6.9-1.3 1.3-1.9-1.3-.8-2.6-1.5-4-2.3-.5.7-.9 1.3-1.3 1.9-.2.4-.4.4-.8.3-.7-.2-1.5-.3-2.2-.4-.4 0-.5-.2-.6-.6-.1-.7-.2-1.4-.3-2.2-1.6.2-3.1.4-4.8.6.2.9.4 1.8.5 2.6-.9.5-1.7.9-2.5 1.3-.3.2-.5.1-.7-.1-.6-.5-1.2-1-1.9-1.6-1.1 1.1-2.2 2.1-3.2 3.1.7.6 1.3 1.1 1.9 1.6.3.2.3.5.1.8-.3.6-.6 1.3-.9 2-.1.1-.3.3-.5.3h-2.6V48h2.4c.2 0 .4.1.5.3.3.7.5 1.4.8 2.1.1.3.1.5-.2.7-.7.4-1.3.9-2 1.4 1 1.1 1.9 2.2 2.9 3.4.7-.5 1.4-1 2.1-1.4.1-.1.3-.2.4-.1.8.5 1.7 1 2.5 1.5-.2.8-.4 1.7-.5 2.6 1.6.3 3 .6 4.6.9.2-.7.3-1.4.4-2 .1-.4.3-.7.8-.7.7 0 1.4-.1 2.1-.3.4-.1.6 0 .8.4.3.6.8 1.3 1.2 1.9 1.3-.9 2.7-1.5 4.1-2.2zM44.3 27.8c.7-.2 1.3-.4 1.9-.6.1 0 .3 0 .4.1.4.4.7.9 1.1 1.3.3.3.2.5 0 .7-.3.5-.7.9-1 1.4 1.1.6 2.2 1.2 3.2 1.8.4-.6.6-1.1 1-1.5.1-.1.4-.3.5-.2l1.8.3c.3 0 .4.2.4.5.1.6.2 1.2.4 1.7 1.2-.2 2.4-.3 3.6-.5-.1-.6-.2-1.2-.2-1.8 0-.1.1-.4.2-.4.7-.3 1.3-.6 2-.9.6.4 1.1.9 1.7 1.3.8-.8 1.7-1.6 2.5-2.5-.5-.4-.9-.8-1.4-1.1-.3-.2-.3-.4-.2-.8.2-.4.4-.8.5-1.3.1-.4.3-.5.7-.5h1.9v-3.4h-1.8c-.4 0-.6-.1-.7-.5-.1-.4-.3-.9-.4-1.3-.1-.3-.1-.5.2-.7.5-.3 1-.7 1.5-1-.7-.9-1.4-1.6-2.1-2.4-.2-.2-.4-.2-.6 0-.5.4-1 .8-1.5 1.1-.7-.4-1.3-.7-1.8-1-.1-.1-.3-.3-.2-.5.1-.6.2-1.1.3-1.8-1.2-.2-2.4-.5-3.7-.7-.2.7-.3 1.4-.5 2-.8.1-1.5.3-2.3.3-.1 0-.3-.1-.4-.2-.4-.5-.7-1-1-1.6-1.1.5-2.2 1.1-3.2 1.6.4.7.7 1.3 1.1 2-.5.5-1 .9-1.6 1.4-.1.1-.3.1-.5.1-.6-.2-1.2-.4-1.9-.6-.5 1.1-.9 2.1-1.4 3.2.6.2 1.2.4 1.7.6.4.1.5.3.4.7-.1.4-.1.9-.1 1.4 0 .4-.1.6-.5.7-.6.1-1.2.3-1.8.5 1 1 1.4 2 1.8 3.1z"
    />
    <path
      fill="currentColor"
      d="M2.2 22.5c.1-.3.2-.6.2-1 .3-1.5.6-3 1-4.6l3.6.6c.4.1.5-.1.7-.4.6-1 1.3-1.9 1.9-2.8.1-.1.1-.4 0-.5-.8-.9-1.6-1.7-2.5-2.6.3-.3.6-.5.8-.7 1.3-1 2.5-1.9 3.8-2.9.4-.3.5-.2.8.1.6.7 1.3 1.5 1.9 2.2.2.3.5.3.8.2 1.1-.4 2.2-.8 3.4-1.1.3-.2.4-.4.4-.7V5h6.6v3.2c0 .4.1.6.5.7 1.1.3 2.2.7 3.4 1.1.1 0 .4 0 .5-.1.4-.4.7-.8 1.1-1.2.5-.5.9-1 1.4-1.5 1.7 1.3 3.3 2.5 5.1 3.9-.9 1-1.8 1.9-2.6 2.9l2.1 3.3c.2.3.4.3.6.3 1-.2 2-.3 3-.5h.6c.4 2 .7 3.9 1.1 5.9-1.2.2-2.3.4-3.5.6-.5.1-.6.3-.7.8-.1 1.1-.4 2.3-.6 3.4 1.1.6 2.3 1.2 3.5 1.9-1.1 1.7-2.2 3.4-3.3 5.2-1-.6-2.1-1.1-3-1.6-.4-.3-.7-.2-1.1.1-.8.7-1.6 1.3-2.4 1.8-.4.3-.6.5-.3 1l1.2 3c-2.1.7-4.1 1.4-6.2 2.1-.1-.2-.2-.4-.2-.6-.4-.9-.7-1.8-1.1-2.7-.1-.1-.3-.2-.4-.2h-3.8c-.2 0-.5.3-.6.5-.4 1-.7 2-1.1 3-2.1-.7-4.1-1.4-6.3-2.1.5-1.2 1-2.4 1.4-3.6-.4-.3-.9-.6-1.3-.9-.7-.5-1.3-1-1.9-1.5-.1-.1-.4-.1-.5 0-1 .5-1.9 1-2.9 1.5-.3.2-.5.1-.7-.2-.7-1.2-1.4-2.3-2.1-3.5-.3-.4-.6-.9-.9-1.3.4-.2.8-.4 1.1-.6.7-.4 1.5-.8 2.2-1.2.1-.3.2-.4.1-.6-.5-1.1-.6-2.2-.7-3.4 0-.1-.3-.4-.4-.4-1.2-.2-2.5-.4-3.7-.6v-.4zm20 8.3c2.1 0 3.9-.6 5.5-1.8 1.5-1.2 2.5-2.7 2.9-4.5.4-1.7.1-3.3-.7-4.8-.5-.9-1.2-1.7-2-2.4-2-1.6-4.2-2.2-6.7-1.9-3.1.4-5.4 1.9-6.7 4.7-1.3 2.8-.7 5.9 1.7 8.1 1.7 1.7 3.7 2.5 6 2.6zM55.1 56.5c-1.4.7-2.8 1.3-4.2 2-.4-.7-.8-1.3-1.2-1.9-.2-.4-.4-.5-.8-.4-.7.1-1.4.3-2.1.3-.5 0-.7.3-.8.7-.2.6-.3 1.3-.4 2-1.5-.3-3-.6-4.6-.9.2-.9.4-1.8.5-2.6-.9-.5-1.7-1-2.5-1.5-.1-.1-.3 0-.4.1-.7.5-1.4 1-2.1 1.4-1-1.1-1.9-2.2-2.9-3.4.7-.5 1.3-1 2-1.4.3-.2.3-.4.2-.7-.3-.7-.5-1.4-.8-2.1-.1-.1-.3-.3-.5-.3h-2.4v-4.3h2.6c.2 0 .4-.1.5-.3.3-.6.6-1.3.9-2 .2-.3.2-.6-.1-.8-.6-.5-1.2-1-1.9-1.6 1.1-1.1 2.2-2.1 3.2-3.1.7.6 1.3 1 1.9 1.6.2.2.4.3.7.1.8-.5 1.6-.8 2.5-1.3-.2-.8-.3-1.7-.5-2.6l4.8-.6c.1.8.2 1.5.3 2.2 0 .4.2.5.6.6.7.1 1.5.3 2.2.4.3.1.6.1.8-.3.4-.6.8-1.2 1.3-1.9 1.3.8 2.7 1.5 4 2.3-.5.7-.9 1.3-1.3 1.9-.2.3-.2.5 0 .7.5.6 1 1.2 1.5 1.7.1.1.4.2.6.1.8-.2 1.5-.4 2.4-.7.5 1.4.9 2.7 1.4 4.1-.9.3-1.6.5-2.4.7-.3.1-.4.2-.4.5 0 .7 0 1.5-.1 2.2 0 .3 0 .4.3.5.8.3 1.5.6 2.4.9-.6 1.3-1.2 2.6-1.8 4l-2.4-.9c-.3-.1-.4-.1-.6.1-.5.6-1.1 1.1-1.7 1.7-.3.3-.1.5 0 .7.5.8.9 1.4 1.3 2.1zm-9.2-5c3.3 0 6.1-2 6.4-4.8.1-1.3 0-2.5-.7-3.5-1.1-1.5-2.6-2.4-4.4-2.6-2.6-.3-5.2.9-6.3 3.3-.7 1.5-.7 3.1.2 4.6 1.2 2.1 3 2.9 4.8 3zM44.3 27.8c-.4-1.1-.8-2.1-1.2-3.2.6-.2 1.2-.4 1.8-.5.4-.1.5-.3.5-.7 0-.4 0-.9.1-1.4 0-.4-.1-.6-.4-.7-.6-.2-1.1-.4-1.7-.6.5-1.1.9-2.1 1.4-3.2.6.2 1.3.5 1.9.6.1 0 .4 0 .5-.1.5-.4 1-.9 1.6-1.4-.4-.8-.7-1.4-1.1-2 1-.5 2.1-1 3.2-1.6.4.6.7 1.1 1 1.6.1.1.3.2.4.2.7-.1 1.5-.2 2.3-.3.1-.6.3-1.3.5-2 1.2.2 2.4.5 3.7.7-.1.6-.3 1.2-.3 1.8 0 .2.1.4.2.5.6.4 1.2.7 1.8 1 .5-.3 1-.7 1.5-1.1.2-.2.4-.2.6 0 .7.8 1.3 1.6 2.1 2.4-.5.4-1 .7-1.5 1-.3.2-.3.4-.2.7.2.4.3.8.4 1.3.1.4.3.5.7.5h1.8v3.4H64c-.4 0-.6.1-.7.5-.1.4-.3.9-.5 1.3-.2.3-.1.5.2.8.4.3.9.7 1.4 1.1-.9.8-1.7 1.7-2.5 2.5-.5-.4-1.1-.9-1.7-1.3-.7.3-1.4.6-2 .9-.1.1-.2.3-.2.4.1.6.1 1.2.2 1.8-1.2.2-2.4.3-3.6.5-.1-.6-.3-1.1-.4-1.7 0-.3-.2-.4-.4-.5-.6-.1-1.2-.3-1.8-.3-.2 0-.4.1-.5.2-.3.5-.6 1-1 1.5-1.1-.6-2.1-1.2-3.2-1.8.4-.5.7-1 1-1.4.2-.3.2-.5 0-.7-.4-.4-.8-.9-1.1-1.3-.1-.1-.3-.1-.4-.1-1.2.3-1.8.5-2.5.7zm10-9.1c-.4.1-.8.1-1.2.2-1.7.4-2.9 1.5-3.4 3.1-.5 1.7.2 3.7 2.2 4.8 2.2 1.2 4.7.6 6.2-1.2.8-1 1-2.2.8-3.4-.3-2.1-2.2-3.5-4.6-3.5z"
    />
    <path
      className="st0"
      d="M22.2 30.8c-2.3-.1-4.3-.8-6-2.4-2.4-2.3-3-5.4-1.7-8.1 1.3-2.8 3.7-4.3 6.7-4.7 2.5-.3 4.8.3 6.7 1.9.8.6 1.5 1.4 2 2.4.8 1.5 1.1 3.1.7 4.8-.4 1.8-1.4 3.3-2.9 4.5-1.7 1-3.5 1.5-5.5 1.6zM45.9 51.5c-1.7-.1-3.6-.9-4.8-3-.9-1.5-.9-3.1-.2-4.6 1.1-2.4 3.7-3.7 6.3-3.3 1.9.2 3.4 1.1 4.4 2.6.7 1 .9 2.2.7 3.5-.3 2.9-3.2 4.9-6.4 4.8zM54.3 18.7c2.3 0 4.2 1.4 4.7 3.5.2 1.2 0 2.4-.8 3.4-1.5 1.8-4.1 2.3-6.2 1.2-2-1.1-2.8-3.1-2.2-4.8.5-1.7 1.7-2.7 3.4-3.1.3-.2.7-.2 1.1-.2z"
    />
    <path
      fill="currentColor"
      d="m66.6 31.8 7.3-18.9h2.4l7.4 18.9h-2.4l-1.7-4.6h-9l-1.7 4.6h-2.3zm4.8-7.1h7.2L75 15l-3.6 9.7zM89.2 12.9v16.3h9.7V12.9h2.2v14.4c0 1.7-.2 2.9-.7 3.5s-1.3.9-2.5.9H90c-1.2 0-2-.3-2.5-1-.3-.5-.5-1.7-.5-3.4V12.9h2.2zM113.3 15.4v16.3H111V15.4h-6.1v-2.6h14.4v2.6h-6zM122.9 17.3c0-1.7.2-2.9.7-3.5s1.3-.9 2.5-.9h9.2c1.2 0 2 .3 2.5.9.4.6.6 1.8.6 3.5v10c0 1.7-.2 2.9-.6 3.5s-1.3.9-2.5.9h-9.2c-1.2 0-2.1-.3-2.5-1-.4-.6-.7-1.8-.7-3.5v-9.9zm2.3 11.8h11.1V15.4h-11.1v13.7zM152.9 23.3v-2.7h5.6v2.7h-5.6zM184.5 15.4H175v5.3h8.4c1.2 0 2 .3 2.4.9s.7 1.8.7 3.5v2.1c0 1.7-.2 2.9-.6 3.5s-1.3.9-2.4.9h-7.8c-1.2 0-2-.3-2.5-.9-.4-.6-.7-1.8-.7-3.5v-.5l2.1-.7v3h9.9v-5.7h-8.4c-1.2 0-2-.3-2.5-.9-.4-.6-.6-1.8-.6-3.5v-1.6c0-1.7.2-2.9.6-3.5.4-.6 1.3-.9 2.5-.9h7.1c1.2 0 2 .3 2.5.9.4.6.7 1.7.7 3.2v.4l-1.9.8v-2.8zM193.3 31.8V12.9h12.9v2.5h-10.6v5.3h6.5v2.5h-6.5v6h10.7v2.6h-13zM211.5 31.8V12.9h10.8c1 0 1.7.3 2.2.9.4.6.7 1.5.7 2.8v4.2c0 1.3-.2 2.2-.7 2.8s-1.2.9-2.2.9h-2l6.1 7.4h-3.3l-5.4-7.4h-3.9v7.4l-2.3-.1zm9.9-16.5h-7.6v6.6h7.6c.6 0 .9-.1 1.1-.4s.3-.8.3-1.5v-2.8c0-.7-.1-1.2-.3-1.5-.2-.2-.5-.4-1.1-.4zM233.9 31.8l-4.8-18.9h2.3l3.6 15 3.9-15h1.4l3.8 15 3.6-15h2l-4.8 18.9h-1.6l-3.7-14.3-3.8 14.3h-1.9zM254 31.8V12.9h2.2v18.9H254zM274.5 15.4H265v5.3h8.4c1.2 0 2 .3 2.4.9s.7 1.8.7 3.5v2.1c0 1.7-.2 2.9-.6 3.5-.4.6-1.3.9-2.5.9h-7.8c-1.2 0-2-.3-2.5-.9-.4-.6-.7-1.8-.7-3.5v-.5l2.1-.7v3h9.9v-5.7H266c-1.2 0-2-.3-2.5-.9-.4-.6-.6-1.8-.6-3.5v-1.6c0-1.7.2-2.9.6-3.5.4-.6 1.3-.9 2.5-.9h7.1c1.2 0 2 .3 2.5.9.5.6.7 1.7.7 3.2v.4l-1.9.8.1-2.8zM78.8 51.8V40H81v5l7.4-5h3.1l-8.7 5.7 9.7 6.1h-3.6L81 46.5v5.3h-2.2zM95.5 51.8V40h9.5c.9 0 1.5.2 1.9.5s.6.9.6 1.7V45c0 .8-.2 1.4-.6 1.7-.4.3-1 .5-1.9.5h-1.6l5.2 4.6h-3l-4.7-4.6h-3.2v4.6h-2.2zm8.5-10h-6.3v3.8h6.3c.5 0 .8-.1 1-.2s.3-.5.3-1V43c0-.4-.1-.7-.3-.9-.2-.3-.5-.3-1-.3zM116.5 51.8v-5.1l-6.1-6.6h2.7l4.7 5.1 4.5-5.1h2.6l-6.1 6.6v5.1h-2.3zM138.6 41.8h-8.3v3h7.6c1.1 0 1.9.2 2.3.6.4.4.6 1.1.6 2.2V49c0 1.1-.2 1.8-.6 2.2s-1.1.6-2.3.6h-7.1c-1.1 0-1.9-.2-2.3-.6-.4-.4-.6-1.1-.6-2.2v-.3l2-.4V50h8.9v-3.3h-7.6c-1.1 0-1.9-.2-2.3-.6-.4-.4-.6-1.1-.6-2.2v-1.1c0-1.1.2-1.8.6-2.2.4-.4 1.1-.6 2.3-.6h6.5c1.1 0 1.9.2 2.3.6.4.4.6 1 .6 2v.3l-2 .4v-1.5zM151.5 41.8v10h-2.2v-10h-5.6V40h13.4v1.8h-5.6zM162.6 51.8h-2.2V40.1h2.2v11.7zM166.1 51.8l6.8-11.8h2l7 11.8h-2.4L178 49h-8.1l-1.5 2.8h-2.3zm4.6-4.4h6.3l-3.1-5.6-3.2 5.6zM187.3 42.4c.1.3.1.7.1 1v8.4h-2.1V40h1.7l8.6 7.7c.3.2.5.5.7.7.2.3.5.6.7.9-.1-.3-.1-.7-.1-1.1s-.1-.7-.1-1.1V40h2.1v11.8h-1.5l-8.8-7.8-.8-.8c-.2-.3-.4-.5-.5-.8zM214.8 51.8V40h9.9c.9 0 1.6.2 2 .5s.6.9.6 1.8V45c0 .8-.2 1.4-.6 1.7-.4.3-1.1.5-2 .5H217v4.6h-2.2zm8.9-10H217v3.7h6.7c.5 0 .8-.1 1-.3.2-.2.3-.5.3-.9v-1.5c0-.4-.1-.7-.3-.9-.1-.1-.5-.1-1-.1zM228.3 51.8l6.8-11.8h2l7 11.8h-2.4l-1.5-2.8H232l-1.5 2.8h-2.2zm4.7-4.4h6.3l-3.1-5.6-3.2 5.6zM246.9 51.8v-1.1l8.9-9h-8.1V40h11.6v1l-9 9h9v1.8h-12.4zM252.6 39h1.8l3.5-3.3h-2.7z"
    />
  </svg>
);

export default Logo;