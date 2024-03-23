import { useEffect } from "react";
import scriptSrc from "../bitraSkript";

const useBitraScript = (url, selector = "body", async = true) => {
  useEffect(() => {
    const element = document.querySelector(selector);
    const script = document.createElement("script");

    script.setAttribute("data-b24-forms", "inline/28/zo9fqm");
    script.setAttribute("data-skip-moving", "true");
    script.async = async;
    script.src = url;

    element.appendChild(script);
    // script.text = `
    //     (function(w,d,u){
    //       var s=d.createElement('script');
    //       s.async=true;s.src=u+'?'+(Date.now()/180000|0);
    //       var h=d.getElementsByTagName('script')[0];
    //       h.parentNode.insertBefore(s,h);})
    //       (window,document,'https://cdn-ru.bitrix24.ru/b27062060/crm/form/loader_28.js');
    //   `;

    // document.body.appendChild(script);

    return () => {
      element.removeChild(script);
    };
  }, [url]);
};

export default useBitraScript;
