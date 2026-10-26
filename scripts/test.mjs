import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";

const files = readdirSync("tests").filter((file) => /\.test\.tsx?$/.test(file)).map((file) => `tests/${file}`);
const result = spawnSync(process.execPath, ["--import", "tsx", "--test", ...files], {
  stdio: "inherit",
  env: { ...process.env, TSX_TSCONFIG_PATH: "tests/tsconfig.json" },
});
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
