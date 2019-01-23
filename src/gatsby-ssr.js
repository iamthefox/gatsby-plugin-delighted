import React from "react";

const getSnippet = organisationKey => {
  return `
    !function(e,t,r,n,a){if(!e[a]){for(var i=e[a]=[],c=0;c<r.length;c++){var s=r[c];i[s]=i[s]||function(e){return function(){var t=Array.prototype.slice.call(arguments);i.push([e,t])}}(s)}i.SNIPPET_VERSION="1.0.1";var o=t.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://d2yyd1h5u9mauk.cloudfront.net/integrations/web/v1/library/"+n+"/"+a+".js";var u=t.getElementsByTagName("script")[0];u.parentNode.insertBefore(o,u)}}(window,document,["survey","reset","config","init","set","get","event","identify","track","page","screen","group","alias"],"${organisationKey}","delighted");
  `;
};

exports.onRenderBody = ({ setHeadComponents }, { organisationKey }) => {
  const snippet = getSnippet(organisationKey);

  return setHeadComponents([
    <script
      key="delighted-widget"
      dangerouslySetInnerHTML={{ __html: snippet }}
    />
  ]);
};
