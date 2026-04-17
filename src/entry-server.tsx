import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router";
import App from "./App";

HelmetProvider.canUseDOM = false;

export const render = (url: string) => {
  const appHtml = renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return { appHtml };
};
