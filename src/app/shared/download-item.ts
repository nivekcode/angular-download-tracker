import {angularLogo} from "./angular-logo.model";

export interface DownloadItem {
  version: string;
  downloads: number;
  logo: angularLogo;
}
