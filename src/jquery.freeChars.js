/*
 * jQuery freeChars
 *
 * Matías Lescano | @touteo
 * Licensed under the MIT license
 */
;(function($){
  function FreeChars(el, options){
    this.$el = $(el)
    var config = this.config = $.extend({}, this.defaults, options)

    if( config.limit ){
      if( this.$el.prop('maxlength') ){
        config.maxLength = this.$el.prop('maxlength')
      } else {
        this.$el.prop('maxlength', config.maxLength)
      }
    }

    if( config.onUpdate || config.update ){
      if( this.onUpdate ) this.onUpdate = $.proxy(config.onUpdate, this)
      if( config.update ) config.update.html(config.maxLength)
      this.countTick = $.proxy(this.countTick, this)
    }

    if( config.maxLength ){
      this.updateCount = $.proxy(this.updateCount, this)
      this.$el.on('keyup change cut paste drop', this.updateCount)
    }
  }

  FreeChars.prototype = {
    defaults: {
      maxLength: 140,
      limit: true,
      onUpdate: null,
      update: null
    },

    updateCount: function(e){
      var newValue = this.$el.val()

      if( this.config.limit && this.config.maxLength < newValue.length ){
        this.$el.val(this.value)
        return
      }

      this.value = newValue
      this.count = newValue.length
      if( window.requestAnimationFrame ) {
        requestAnimationFrame(this.countTick)
      } else {
        this.countTick()
      }
    },

    countTick: function(){
      var available = this.config.maxLength - this.count
      if( this.config.update ) this.config.update.html(available)
      if( this.onUpdate ) this.onUpdate(available, this.config.maxLength)
    }
  }

  $.fn.freeChars = function(options){
    return this.each(function(){
      if( !$.data(this, 'plugin_freeChars') ){
        $.data(this, 'plugin_freeChars', new FreeChars(this, options))
      }
    })
  }

  $.fn.freeChars.defaults = FreeChars.prototype.defaults
})(jQuery);