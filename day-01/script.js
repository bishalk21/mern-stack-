const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "React Day 01"
);

const heading2 = React.createElement("h2", { id: "heading2" }, "React Day 01");

console.log(heading1);

const container = React.createElement("div", { className: "container" }, [
  heading1,
  heading2,
]);

console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
