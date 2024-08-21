import React from "react";
import ReactDOM from "react-dom";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const App = () => {
  React.useEffect(() => {
    const sdk = new ChartsEmbedSDK({ baseUrl: "YOUR_CHARTS_EMBED_URL" });
    const chart = sdk.createChart({ chartId: "YOUR_CHART_ID" });
    chart.render(document.getElementById("chart")!);
  }, []);

  return <div id="chart" style={{ width: "100%", height: "500px" }}></div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
