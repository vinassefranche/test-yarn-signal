process.on("SIGTERM", () => {
  console.log("outer: sigterm");
  process.exit(0);
});

setTimeout(() => { }, 60000);
