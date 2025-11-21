import { parse } from 'path';
import { resolve } from 'path';
import { existsSync } from 'fs';
import { join } from 'path';

const parseConfig = (filePath) => {
  if (!existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const config = require(filePath);
  if (typeof config!== 'object' || config === null) {
    throw new Error(`Invalid configuration file: ${filePath}`);
  }

  return config;
};

const resolveConfigPath = (configPath, defaultPath) => {
  if (existsSync(configPath)) {
    return configPath;
  }

  return resolve(defaultPath);
};

const getAbsolutePath = (filePath, baseDir) => {
  return join(baseDir, filePath);
};

export { parseConfig, resolveConfigPath, getAbsolutePath };