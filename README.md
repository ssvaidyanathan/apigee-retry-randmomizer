# apigee-retry-randmomizer

1. Install [apigeecli](https://github.com/apigee/apigeecli?tab=readme-ov-file#installation)
2. Install [gcloud](https://cloud.google.com/sdk/docs/install)
3. Install [jq](https://jqlang.github.io/jq/download/)
4. Set the following variables
```sh
export PROJECT_ID=<apigee-project>
export APIGEE_ENV=<apigee-env>
export APIGEE_HOST=<apigee-host>
export TOKEN=$(gcloud auth print-access-token)
```

5. Run the following command to upload the property file
```sh
apigeecli resources create --name=target-lookup --respath=./target-lookup.properties --type=properties --env=$APIGEE_ENV --org=$PROJECT_ID --token=$TOKEN
```

6. Deploy the proxy
```sh
REV=$(apigeecli apis create bundle -f apiproxy -n apigee-retry-randmomizer --org "$PROJECT_ID" --token "$TOKEN" --disable-check | jq ."revision" -r)
apigeecli apis deploy --wait --name apigee-retry-randmomizer --ovr --rev "$REV" --org "$PROJECT_ID" --env "$APIGEE_ENV" --token "$TOKEN"
```

7. Test commands using cURL
```sh
curl https://$APIGEE_HOST/apigee-retry-randomizer
```