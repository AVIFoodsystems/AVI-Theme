# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'avi/theme/version'

Gem::Specification.new do |spec|
  spec.name          = "avi-theme"
  spec.version       = Avi::Theme::VERSION
  spec.authors       = ["Brandon Joyce"]
  spec.email         = ["bjoyce@sonerdy.com"]
  spec.summary       = %q{Asset gem for the AVI theme}
  spec.homepage      = ""
  spec.license       = "AVI"

  spec.files = Dir[
    "app/assets/javascripts/avi_theme.js",
    "vendor/assets/javascripts/bootstrap.js"
  ]
  spec.require_paths = ["lib"]

  spec.add_dependency "railties", "~> 3.1"
  spec.add_development_dependency "bundler", "~> 1.7"
  spec.add_development_dependency "rake", "~> 10.0"
end
