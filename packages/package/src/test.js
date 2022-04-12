process.on("SIGTERM", () => {
  console.log("outer: sigterm");
  process.exit(0);
});


process.on("SIGINT", () => {
  console.log("outer: SIGINT");
  process.exit(0);
});


setTimeout(() => { }, 60000);