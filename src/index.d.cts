export type S3AuthUrlSearchParams = {
  access_key: string;
  secret_key: string;
  region: string;
};

/**
 * Class to build a S3 URL from a string.
 *
 * Build your string url like this:
 * @link https://endpoint.com/bucket_name?access_key=example&secret_key=example&region=example
 */
export class S3Url {
  private credentials: {
    credentials: {
      accessKeyId: string;
      secretAccessKey: string;
    };
    region: string;
    endpoint: string;
  };

  private name: string;

  constructor(url: string);

  private createUrl(url: string): URL;

  public getCredentials(): {
    credentials: {
      accessKeyId: string;
      secretAccessKey: string;
    };
    region: string;
    endpoint: string;
  };

  public getName(): string;
}
