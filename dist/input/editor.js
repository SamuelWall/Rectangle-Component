import {
  RectangleComponent
} from '../../index.js'

export const components = {
  RectangleComponent
}

export const config = {"displayName":"Rectangle Component","logo":"./logo.png","name":"rectangle-component","version":"dev","components":[{"name":"RectangleComponent","displayName":"Rectangle Component","defaultWidth":100,"defaultHeight":50,"props":[{"name":"background","displayName":"Rectangle Color","type":"text","default":"","helpText":"Takes in an RGB or hex color value. For example: (0,15,255) or #0fe45d"},{"name":"borderRadius","displayName":"Roundedness","type":"number","default":1,"control":{"type":"slider","max":25,"min":0}},{"name":"defaultColor","displayName":"Default Color","type":"color","default":"@primary","helpText":"Color defaulted to if input is invalid"}],"childComponents":[{"name":"border","displayName":"Border","props":[{"name":"enabled","type":"boolean","default":false},{"name":"borderWidth","displayName":"Border Thickness","type":"number","default":2,"control":{"type":"slider","max":20,"min":0}},{"name":"borderColor","displayName":"Border Color","type":"text","default":"#000000","helpText":"Takes in an RGB or hex color value. For example: (0,15,255) or #0fe45d"}]}],"resizeY":true}]}