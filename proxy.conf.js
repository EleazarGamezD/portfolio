const PROXY_CONFIG = {
  "/api": {
    target: "https://mailer-pf.vercel.app",
    secure: false
  }
};

module.exports = PROXY_CONFIG;
