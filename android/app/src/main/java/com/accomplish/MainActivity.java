package com.accomplish;

import android.view.View;

import com.facebook.react.ReactActivity;
import com.reactnativenavigation.controllers.SplashActivity;

import com.imagepicker.permissions.OnImagePickerPermissionsCallback;
import com.facebook.react.modules.core.PermissionListener;

public class MainActivity extends SplashActivity implements OnImagePickerPermissionsCallback {
  private PermissionListener listener;

  @Override
  public void setContentView(View view) {
     setContentView(R.layout.layout_splash);
  }

  @Override
  public void setPermissionListener(PermissionListener listener)
  {
    this.listener = listener;
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults)
  {
    if (listener != null)
    {
      listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  }


}
