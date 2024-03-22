import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

const BaseHtml = ({ children }: TWithChildren) => (
  <html lang="en">
    <head>
      <title>Hello World</title>
      <script src="https://cdn.tailwindcss.com" />
    </head>
    <body>{children}</body>
  </html>
);

export default function Page(url: string, content: () => JSX.Element) {
  return new Elysia().use(html()).get(url, async () => {
    return <BaseHtml>{content()}</BaseHtml>;
  });
}
