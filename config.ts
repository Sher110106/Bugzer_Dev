const config = {
  appName: "Bugzer",
  appDescription:
    "Bugzer is a bug reporting tool that allows you to report bugs and issues in your application.",
  domainName:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "",
};

export default config;
