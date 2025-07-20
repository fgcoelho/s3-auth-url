/**
 * Class to build a S3URL from a string.
 *
 * Build your S3 URL like this:
 * @link https://endpoint.com/bucket_name?access_key=example&secret_key=example&region=example
 */
class S3Url {
    constructor(url) {
        const urlObj = this.createUrl(url);

        const segments = urlObj.pathname.split("/");

        const name = segments.pop();

        const searchParams = Object.fromEntries(urlObj.searchParams);

        urlObj.search = ""

        urlObj.pathname = segments.join("/");

        const endpoint = urlObj.href;

        if (!name) {
            throw new Error("Missing bucket name");
        }

        this.name = name;
        this.credentials = {
            credentials: {
                accessKeyId: searchParams.access_key,
                secretAccessKey: searchParams.secret_key,
            },
            region: searchParams.region,
            endpoint,
        };

        if (!this.credentials.credentials.accessKeyId) {
            throw new Error("Missing access key");
        }
        if (!this.credentials.credentials.secretAccessKey) {
            throw new Error("Missing secret key");
        }
        if (!this.credentials.region) {
            throw new Error("Missing region");
        }
    }

    createUrl(url) {
        try {
            return new URL(url);
        } catch (error) {
            throw new Error("Invalid Bucket URL");
        }
    }

    getCredentials() {
        return this.credentials;
    }

    getName() {
        return this.name;
    }
}

module.exports = { S3Url }