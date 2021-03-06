
/**
 * @file
 * Layer handler for WMTS layers
 */

/**
 * Openlayer layer handler for WMTS layer
 */
Drupal.openlayers.layer.wmts = function(title, map, options) {

  var layer_options = {
    drupalID: options.drupalID,
    name: title,
    attribution: options.attribution,
    layer: options.layer,
    requestEncoding: options.requestEncoding,
    url: options.url,
    style: options.style,
    matrixSet: options.matrixSet,
    formatSuffix: options.formatSuffix,
    maxExtent: OpenLayers.Bounds.fromArray(options.maxExtent)
  };

  if (options.resolutions) {
    layer_options.resolutions = jQuery.parseJSON('['+options.resolutions+']');
  }

  if (options.serverResolutions) {
    layer_options.serverResolutions = jQuery.parseJSON('['+options.serverResolutions+']');
  }

  return new OpenLayers.Layer.WMTS(layer_options);
};
