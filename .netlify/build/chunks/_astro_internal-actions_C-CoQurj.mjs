import { jsxs, jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { Html, Head, Preview, Body, Container, Section, Heading, Text, Hr } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import { g as getActionQueryString, A as ActionError } from './shared_CPAhQ-9r.mjs';
import * as z from 'zod';
import { Resend } from 'resend';
import { d as defineAction } from './server_BbMV6h5P.mjs';

function ContactFormEmail({
  message,
  senderEmail
}) {
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsx(Preview, { children: "New message from your portfolio site" }),
    /* @__PURE__ */ jsx(Tailwind, { children: /* @__PURE__ */ jsx(Body, { className: "bg-gray-100 text-black", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Section, { className: "bg-white borderBlack my-10 px-10 py-4 rounded-md", children: [
      /* @__PURE__ */ jsx(Heading, { className: "leading-tight", children: "You received the following message from the contact form" }),
      /* @__PURE__ */ jsx(Text, { children: message }),
      /* @__PURE__ */ jsx(Hr, {}),
      /* @__PURE__ */ jsxs(Text, { children: [
        "The sender's email is: ",
        senderEmail
      ] })
    ] }) }) }) })
  ] });
}

const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
async function handleAction(param, path, context) {
  {
    const { getAction } = await import('./server_BbMV6h5P.mjs').then(n => n.a);
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
}
toActionProxy();

const resend = new Resend("re_dgZhZqXH_ELondPVQmmZrzRi9PVKHnT6o");
const server = {
  // action declarations
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      message: z.string()
    }),
    handler: async ({ email, message }) => {
      const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "santiagoquirumbay10@gmail.com",
        subject: "Message from contact form",
        replyTo: email,
        react: React__default.createElement(ContactFormEmail, {
          message,
          senderEmail: email
        })
      });
      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message
        });
      }
      return data;
    }
  })
};

export { server };
