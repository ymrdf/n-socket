{
  "targets": [
    {
      "target_name": "socket",
      "sources": [ "src/socket.cc" ],
      "include_dirs": [
        "<!(node -p \"require('node-addon-api').include_dir\")",
        "<!(node -e \"require('nan')\")"
      ],
      "defines": ["NAPI_CPP_EXCEPTIONS"],
      "xcode_settings": {
        "GCC_ENABLE_CPP_EXCEPTIONS": "YES"
      }
    }
  ]
}