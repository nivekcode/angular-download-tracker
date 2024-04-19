import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import {DownloadItem} from "../shared/download-item";
import {angularLogo} from "../shared/angular-logo.model";

interface NpmDownloadResponse {
  name: string;
  downloads: {[key: string]: number}
}

@Injectable({
  providedIn: 'root'
})
export class DownloadsService {
  #http = inject(HttpClient);

  public getStats(): Observable<DownloadItem[]> {
    return this.#http.get<NpmDownloadResponse>('https://api.npmjs.org/versions/@angular%2Fcore/last-week').pipe(
      map(response => response.downloads),
      map(downloads => this.getTopTenMostDownloadedVersions(downloads)),
      map(topTenDownloads => {
          const result: DownloadItem[] = [];
          for (const version in topTenDownloads) {
            result.push({
              version,
              downloads: topTenDownloads[version],
              logo: this.resolveLogo(version)
            });
          }
          return result;
        }
      )
    );
  }

  private getTopTenMostDownloadedVersions(downloads: {[key: string]: number}) {
    const entries = Object.entries(downloads);
    const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
    const topTenEntries = sortedEntries.slice(0, 10);
    return Object.fromEntries(topTenEntries);
  }


  private resolveLogo(logo: string): angularLogo {
    const logoMainVersion = logo.split('.')[0];
    return Number(logoMainVersion) >= 17 ? 'angular-new.png' : 'angular-old.png';
  }
}
