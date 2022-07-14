function bodyParser(req, cb) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    body = JSON.parse(body);
    req.body = body;
    cb();
  });
}

module.exports = bodyParser;
