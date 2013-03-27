require 'coffee-script'

module Reco
  class Compiler
    def self.preprocess(source)
      Preprocessor.preprocess source
    end

    def self.compile(source, options = {})
      compiled_javascript = CoffeeScript.compile preprocess(source), :noWrap => true
      identifier = options[:identifier] || 'module.exports'
      identifier = "var #{identifier}" unless identifier.include? '.'
      selected_wrapper = options[:bare] ? bare_wrapper : wrapper

      selected_wrapper % [identifier, compiled_javascript]
    end

    def self.helpers
      @helpers ||= File.read File.join(File.dirname(__FILE__), 'helpers.js')
    end

    def self.wrapper
      @wrapper ||= File.read File.join(File.dirname(__FILE__), 'wrapper.js')
    end

    def self.bare_wrapper
      @bare_wrapper ||= File.read File.join(File.dirname(__FILE__), 'bare_wrapper.js')
    end

  end
end
