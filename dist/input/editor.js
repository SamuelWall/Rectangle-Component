import {
  RectangleComponent
} from '../../index.js'

export const components = {
  RectangleComponent
}

export const config = {"displayName":"Rectangle Component","name":"rectangle-component","version":"dev","components":[{"name":"RectangleComponent","displayName":"Rectangle Component","defaultWidth":100,"defaultHeight":50,"props":[{"name":"height","displayName":"Height","type":"number","default":50},{"name":"width","displayName":"Width","type":"number","default":100},{"name":"background","displayName":"Rectangle Color","type":"text","default":"#ef612d"},{"name":"borderRadius","displayName":"Roundedness","type":"number","default":1,"control":{"type":"slider","max":25,"min":0}},{"name":"borderWidth","displayName":"Border Thickness","type":"number","default":0,"control":{"type":"slider","max":20,"min":0}},{"name":"borderColor","displayName":"Border Color","type":"text","default":"#000000"}],"resizeY":true}]}