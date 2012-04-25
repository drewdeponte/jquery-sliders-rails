# -*- encoding: utf-8 -*-
require File.expand_path('../lib/jquery-sliders-rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Andrew De Ponte"]
  gem.email         = ["cyphactor@gmail.com"]
  gem.description   = %q{A gem that provides the jQuery Sliders plugin in Rails 3.1 asset pipeline gem format.}
  gem.summary       = %q{Official jQuery Sliders Rails 3.1 asset pipeline gem.}
  gem.homepage      = "http://github.com/cyphactor/jquery-sliders-rails"

  gem.files         = `git ls-files`.split($\)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "jquery-sliders-rails"
  gem.require_paths = ["lib"]
  gem.version       = Jquery::Sliders::Rails::VERSION
end
