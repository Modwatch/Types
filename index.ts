export interface Modlist {
  username: string;
  password?: string;
  roles?: Roles[];
  scopes?: Roles[];
  game: Game;
  timestamp: Date;
  plugins: ModFile;
  modlist?: ModFile;
  ini?: ModFile;
  prefsini?: ModFile;
  enb?: string;
  tag?: string;
  score?: number;
  files?: {
    [key: string]: number;
  };
}
export interface UploadProfileRequest {
  username: string;
  password?: string;
  game: Game;
  timestamp: Date;
  plugins: ModFile;
  modlist?: ModFile;
  ini?: ModFile;
  prefsini?: ModFile;
  enb?: string;
  tag?: string;
  score?: number;
}
export type Game =
  | "skyrim"
  | "skyrimse"
  | "fallout4"
  | "skyrimvr"
  | "fallout4vr";
export type FileName =
  | "plugins"
  | "modlist"
  | "ini"
  | "prefsini"
  | "enblocal"
  | "skse";
export type FileTypes = string[];
export type ModFile = string[];
export type Roles = "admin";
