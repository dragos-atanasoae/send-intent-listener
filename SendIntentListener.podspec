
  Pod::Spec.new do |s|
    s.name = 'SendIntentListener'
    s.version = '0.0.1'
    s.summary = 'This Capacitor plugin can be used in Ionic applications for receiving data from Intent.SEND_ACTION (works only for intent type "text/plain") '
    s.license = 'MIT'
    s.homepage = 'https://github.com/dragos-atanasoae/send-intent-listener.git'
    s.author = 'Dragos Atanasoae'
    s.source = { :git => 'https://github.com/dragos-atanasoae/send-intent-listener.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end