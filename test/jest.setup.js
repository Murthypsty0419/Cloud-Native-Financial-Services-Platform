if (!process.env.AWS_REGION) {
  process.env.AWS_REGION = 'us-east-1';
}

if (!process.env.AWS_ACCESS_KEY_ID) {
  process.env.AWS_ACCESS_KEY_ID = 'test-access-key-id';
}

if (!process.env.AWS_SECRET_ACCESS_KEY) {
  process.env.AWS_SECRET_ACCESS_KEY = 'test-secret-access-key';
}

if (!process.env.AWS_EC2_METADATA_DISABLED) {
  process.env.AWS_EC2_METADATA_DISABLED = 'true';
}
