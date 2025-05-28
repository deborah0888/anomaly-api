const path = require("path");
const { spawn } = require("child_process");

exports.detectAnomaly = (req, res) => {
  const imagePath = req.file.path;
  const category = req.body.category; // screws, transistors, bottle_caps

  const scriptPath = path.join(
    __dirname,
    "../../ml-model/scripts/inference.py"
  );

  const pythonProcess = spawn("python", [scriptPath, imagePath, category]);

  let result = "";
  let error = "";

  pythonProcess.stdout.on("data", (data) => {
    result += data.toString();
  });

  pythonProcess.stderr.on("data", (data) => {
    error += data.toString();
  });

  pythonProcess.on("close", (code) => {
    if (code !== 0 || error) {
      return res
        .status(500)
        .json({ error: "Inference failed", details: error });
    }
    return res.json({ prediction: result.trim() });
  });
};
