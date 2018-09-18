package com.collective.times.modules;

import android.accounts.Account;
import android.accounts.AccountManager;
import android.os.Bundle;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableNativeMap;

public class AuthenticatorModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext mReactContext = null;

    public AuthenticatorModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactContext = reactContext;
    }

    @Override
    public String getName() {
        return "CollectiveTimesAuthenticator";
    }

    @ReactMethod
    public void addAccountExplicitly (String userName, String password, ReadableMap accountObject, Promise promise) {
        String accountType = accountObject.getString("token_type");
        int expiresIn = accountObject.getInt("expires_in");
        String accessToken = accountObject.getString("access_token");
        String refreshToken = accountObject.getString("refresh_token");

        AccountManager manager = AccountManager.get(mReactContext);
        Account account = new Account(userName, "com.collective.times");

        Bundle userdata = new Bundle();
        userdata.putString("token_type", accountType);
        userdata.putInt("expires_in", expiresIn);
        userdata.putString("access_token", accessToken);
        userdata.putString("refresh_token", refreshToken);

        if(!manager.addAccountExplicitly(account, password, userdata)){
            promise.reject("Account with username already exists!");
            return;
        }

        WritableNativeMap result = new WritableNativeMap();
        result.putString("name", account.name);
        result.putString("type", account.type);

        promise.resolve(result);
    }

    @ReactMethod
    public void getAccessToken (ReadableMap accountObject, Promise promise) {
        AccountManager accountManager = AccountManager.get(mReactContext);
        Account[] accounts = accountManager.getAccountsByType("CollectiveTimes");

        Account account = accounts[0];
        if(account == null) {
            promise.reject("Invalid account");
            return;
        }

        String accessToken = accountManager.getUserData(account, "access_token");
        if(accessToken == null) {
            promise.reject("Invalid account");
            return;
        }

        WritableNativeMap result = new WritableNativeMap();
        result.putString("access_token", accessToken);
        promise.resolve(result);
    }
}
