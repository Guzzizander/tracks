var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'MapOSM', 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var	RasterICGC = L.tileLayer('https://geoserveis.icgc.cat/icc_mapesmultibase/noutm/wmts/topo/GRID3857/{z}/{x}/{y}.jpeg', {
    id: 'MapRasterICGC', 
    attribution: '&copy; <a href="https://creativecommons.org/licenses/by/4.0/deed.ca">ICGC under CC BY 4.0</a> contributors'
});

var RasterIGN = L.tileLayer.wms('http://www.ign.es/wms-inspire/mapa-raster', {
    layers: 'mtn_rasterizado',
    format: 'image/png',
    transparent: false,
    continuousWorld : true,
    attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});

var BaseIGN=L.tileLayer.wms('http://www.ign.es/wms-inspire/ign-base', {
    layers: 'IGNBaseTodo',
    format: 'image/png',
    transparent: false,
    continuousWorld : true,
    attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});

var OrtofotoIGN = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
    layers:'OI.OrthoimageCoverage',
    format: 'image/png',
    transparent: false,
    continuousWorld : true,
    attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});

var otmUrl = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{
    continuousWorld : true,
    attribution : "<a href='http://opentopomap.org/'>OpenTopoMap</a>"
});