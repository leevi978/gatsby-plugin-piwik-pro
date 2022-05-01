const PiwikPro = require("@piwikpro/react-piwik-pro").default;
const { PageViews } = require("@piwikpro/react-piwik-pro");

exports.onClientEntry = (_, pluginOptions) => {
    pluginOptions.enabled &&
        PiwikPro.initialize(pluginOptions.siteId, pluginOptions.containerUrl);
};

exports.onRouteUpdate = ({ location, prevLocation }, pluginOptions) => {
    pluginOptions.enabled && PageViews.trackPageView(location);
};
