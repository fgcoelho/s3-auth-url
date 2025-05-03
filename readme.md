# S3 Url

### Installation
```bash
npm install s3-auth-url

pnpm install s3-auth-url

yarn install s3-auth-url
```

### How this works

Create a S3 url as you would do with your SQL database:

```
https://{endpoint}/{bucket_name} \
    ?access_key={value} \
    &secret_key={value} \
    &region={value}
```

And the class `S3Url` will turn the URL into usable credentials by providing two methods: `getCredentials` and `getName`.

### Usage

```ts
import { S3Url } from 's3-auth-url'
import { S3Client } from "@aws-sdk/client-s3";

const url = new S3Url(process.env.S3_BUCKET_URL)

const client = new S3Client(url.getCredentials())

const fetchObjectCommand = new GetObjectCommand({
	Bucket: url.getName(),
	Key: p,
});
```