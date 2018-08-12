# collective-times

Native Application that displays technical information.

## Build Android App

```
$ react-native bundle --platform android --dev false --entry-file index.js  --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
$ ./gradlew clean assembleDebug
```

## API Info

* [collective-times-api](https://github.com/hypermkt/collective-times-api)
