ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32631").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Zone_dtude_1 = new ol.format.GeoJSON();
var features_Zone_dtude_1 = format_Zone_dtude_1.readFeatures(json_Zone_dtude_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zone_dtude_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_dtude_1.addFeatures(features_Zone_dtude_1);
var lyr_Zone_dtude_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_dtude_1, 
                style: style_Zone_dtude_1,
                popuplayertitle: 'Zone_d\'étude',
                interactive: false,
                title: '<img src="styles/legend/Zone_dtude_1.png" /> Zone_d\'étude'
            });
var format_Togo_TOGO_2 = new ol.format.GeoJSON();
var features_Togo_TOGO_2 = format_Togo_TOGO_2.readFeatures(json_Togo_TOGO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Togo_TOGO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togo_TOGO_2.addFeatures(features_Togo_TOGO_2);
var lyr_Togo_TOGO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togo_TOGO_2, 
                style: style_Togo_TOGO_2,
                popuplayertitle: 'Togo_TOGO',
                interactive: false,
                title: '<img src="styles/legend/Togo_TOGO_2.png" /> Togo_TOGO'
            });
var format_MesuresdeProtection_3 = new ol.format.GeoJSON();
var features_MesuresdeProtection_3 = format_MesuresdeProtection_3.readFeatures(json_MesuresdeProtection_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_MesuresdeProtection_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MesuresdeProtection_3.addFeatures(features_MesuresdeProtection_3);
var lyr_MesuresdeProtection_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MesuresdeProtection_3, 
                style: style_MesuresdeProtection_3,
                popuplayertitle: 'Mesures de Protection',
                interactive: false,
                title: '<img src="styles/legend/MesuresdeProtection_3.png" /> Mesures de Protection'
            });
var format_TC2025_4 = new ol.format.GeoJSON();
var features_TC2025_4 = format_TC2025_4.readFeatures(json_TC2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2025_4.addFeatures(features_TC2025_4);
var lyr_TC2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2025_4, 
                style: style_TC2025_4,
                popuplayertitle: 'TC 2025',
                interactive: true,
                title: '<img src="styles/legend/TC2025_4.png" /> TC 2025'
            });
var format_TC_2020_5 = new ol.format.GeoJSON();
var features_TC_2020_5 = format_TC_2020_5.readFeatures(json_TC_2020_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC_2020_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC_2020_5.addFeatures(features_TC_2020_5);
var lyr_TC_2020_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC_2020_5, 
                style: style_TC_2020_5,
                popuplayertitle: 'TC_2020',
                interactive: true,
                title: '<img src="styles/legend/TC_2020_5.png" /> TC_2020'
            });
var format_TC_2015_6 = new ol.format.GeoJSON();
var features_TC_2015_6 = format_TC_2015_6.readFeatures(json_TC_2015_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC_2015_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC_2015_6.addFeatures(features_TC_2015_6);
var lyr_TC_2015_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC_2015_6, 
                style: style_TC_2015_6,
                popuplayertitle: 'TC_2015',
                interactive: true,
                title: '<img src="styles/legend/TC_2015_6.png" /> TC_2015'
            });
var format_TC_2005_7 = new ol.format.GeoJSON();
var features_TC_2005_7 = format_TC_2005_7.readFeatures(json_TC_2005_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC_2005_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC_2005_7.addFeatures(features_TC_2005_7);
var lyr_TC_2005_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC_2005_7, 
                style: style_TC_2005_7,
                popuplayertitle: 'TC_2005',
                interactive: true,
                title: '<img src="styles/legend/TC_2005_7.png" /> TC_2005'
            });
var format_TC_2000_8 = new ol.format.GeoJSON();
var features_TC_2000_8 = format_TC_2000_8.readFeatures(json_TC_2000_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC_2000_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC_2000_8.addFeatures(features_TC_2000_8);
var lyr_TC_2000_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC_2000_8, 
                style: style_TC_2000_8,
                popuplayertitle: 'TC_2000',
                interactive: true,
                title: '<img src="styles/legend/TC_2000_8.png" /> TC_2000'
            });
var format_TC_1990_9 = new ol.format.GeoJSON();
var features_TC_1990_9 = format_TC_1990_9.readFeatures(json_TC_1990_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC_1990_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC_1990_9.addFeatures(features_TC_1990_9);
var lyr_TC_1990_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC_1990_9, 
                style: style_TC_1990_9,
                popuplayertitle: 'TC_1990',
                interactive: true,
                title: '<img src="styles/legend/TC_1990_9.png" /> TC_1990'
            });
var format_TC_1984_10 = new ol.format.GeoJSON();
var features_TC_1984_10 = format_TC_1984_10.readFeatures(json_TC_1984_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC_1984_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC_1984_10.addFeatures(features_TC_1984_10);
var lyr_TC_1984_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC_1984_10, 
                style: style_TC_1984_10,
                popuplayertitle: 'TC_1984',
                interactive: true,
                title: '<img src="styles/legend/TC_1984_10.png" /> TC_1984'
            });
var format_rates_19841990_11 = new ol.format.GeoJSON();
var features_rates_19841990_11 = format_rates_19841990_11.readFeatures(json_rates_19841990_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_rates_19841990_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rates_19841990_11.addFeatures(features_rates_19841990_11);
var lyr_rates_19841990_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rates_19841990_11, 
                style: style_rates_19841990_11,
                popuplayertitle: 'rates_1984-1990',
                interactive: true,
    title: 'rates_1984-1990<br />\
    <img src="styles/legend/rates_19841990_11_0.png" /> <-0,25 (érosion)<br />\
    <img src="styles/legend/rates_19841990_11_1.png" /> -0,25 - 0,25 (stable)<br />\
    <img src="styles/legend/rates_19841990_11_2.png" /> >0,25 (accretion)<br />' });
var format_rates_19902000_12 = new ol.format.GeoJSON();
var features_rates_19902000_12 = format_rates_19902000_12.readFeatures(json_rates_19902000_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_rates_19902000_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rates_19902000_12.addFeatures(features_rates_19902000_12);
var lyr_rates_19902000_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rates_19902000_12, 
                style: style_rates_19902000_12,
                popuplayertitle: 'rates_1990-2000',
                interactive: true,
    title: 'rates_1990-2000<br />\
    <img src="styles/legend/rates_19902000_12_0.png" /> <-0,25 (érosion)<br />\
    <img src="styles/legend/rates_19902000_12_1.png" /> -0,25 - 0,25 (stable)<br />\
    <img src="styles/legend/rates_19902000_12_2.png" /> >0,25 (accretion)<br />' });
var format_rates_20002005_13 = new ol.format.GeoJSON();
var features_rates_20002005_13 = format_rates_20002005_13.readFeatures(json_rates_20002005_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_rates_20002005_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rates_20002005_13.addFeatures(features_rates_20002005_13);
var lyr_rates_20002005_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rates_20002005_13, 
                style: style_rates_20002005_13,
                popuplayertitle: 'rates_2000-2005',
                interactive: true,
    title: 'rates_2000-2005<br />\
    <img src="styles/legend/rates_20002005_13_0.png" /> <-0,25 (érosion)<br />\
    <img src="styles/legend/rates_20002005_13_1.png" /> -0,25 - 0,25 (stable)<br />\
    <img src="styles/legend/rates_20002005_13_2.png" /> > 0,25 (accretion)<br />' });
var format_rates_20052010_14 = new ol.format.GeoJSON();
var features_rates_20052010_14 = format_rates_20052010_14.readFeatures(json_rates_20052010_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_rates_20052010_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rates_20052010_14.addFeatures(features_rates_20052010_14);
var lyr_rates_20052010_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rates_20052010_14, 
                style: style_rates_20052010_14,
                popuplayertitle: 'rates_2005-2010',
                interactive: true,
    title: 'rates_2005-2010<br />\
    <img src="styles/legend/rates_20052010_14_0.png" /> <-0,25 (érosion)<br />\
    <img src="styles/legend/rates_20052010_14_1.png" /> 0,25 (accretion)<br />\
    <img src="styles/legend/rates_20052010_14_2.png" /> > 0,25 (accretion)<br />' });
var format_rates_20102015_15 = new ol.format.GeoJSON();
var features_rates_20102015_15 = format_rates_20102015_15.readFeatures(json_rates_20102015_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_rates_20102015_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rates_20102015_15.addFeatures(features_rates_20102015_15);
var lyr_rates_20102015_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rates_20102015_15, 
                style: style_rates_20102015_15,
                popuplayertitle: 'rates_2010-2015',
                interactive: true,
    title: 'rates_2010-2015<br />\
    <img src="styles/legend/rates_20102015_15_0.png" /> <0,25 (érosion)<br />\
    <img src="styles/legend/rates_20102015_15_1.png" /> -0, 25 - 0, 25 (stable)<br />\
    <img src="styles/legend/rates_20102015_15_2.png" /> >-0,25 (accretion)<br />' });
var format_rates_20152020_16 = new ol.format.GeoJSON();
var features_rates_20152020_16 = format_rates_20152020_16.readFeatures(json_rates_20152020_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_rates_20152020_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rates_20152020_16.addFeatures(features_rates_20152020_16);
var lyr_rates_20152020_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rates_20152020_16, 
                style: style_rates_20152020_16,
                popuplayertitle: 'rates_2015-2020',
                interactive: true,
    title: 'rates_2015-2020<br />\
    <img src="styles/legend/rates_20152020_16_0.png" /> <-0,25 (érosion)<br />\
    <img src="styles/legend/rates_20152020_16_1.png" /> -0,25- 025 (stable)<br />\
    <img src="styles/legend/rates_20152020_16_2.png" /> >0,25 (accretion)<br />' });
var format_rates_20202025_17 = new ol.format.GeoJSON();
var features_rates_20202025_17 = format_rates_20202025_17.readFeatures(json_rates_20202025_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_rates_20202025_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rates_20202025_17.addFeatures(features_rates_20202025_17);
var lyr_rates_20202025_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rates_20202025_17, 
                style: style_rates_20202025_17,
                popuplayertitle: 'rates_2020-2025',
                interactive: true,
    title: 'rates_2020-2025<br />\
    <img src="styles/legend/rates_20202025_17_0.png" /> <-0,25 (érosion)<br />\
    <img src="styles/legend/rates_20202025_17_1.png" /> -0,25 - 0,25 (stable)<br />\
    <img src="styles/legend/rates_20202025_17_2.png" /> >0,25 (accretion)<br />' });
var format_rates_19842025_18 = new ol.format.GeoJSON();
var features_rates_19842025_18 = format_rates_19842025_18.readFeatures(json_rates_19842025_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_rates_19842025_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rates_19842025_18.addFeatures(features_rates_19842025_18);
var lyr_rates_19842025_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rates_19842025_18, 
                style: style_rates_19842025_18,
                popuplayertitle: 'rates_1984-2025',
                interactive: true,
    title: 'rates_1984-2025<br />\
    <img src="styles/legend/rates_19842025_18_0.png" /> <-0.25 (érosion)<br />\
    <img src="styles/legend/rates_19842025_18_1.png" /> -0.25 - 0.25 (stable)<br />\
    <img src="styles/legend/rates_19842025_18_2.png" /> >0.25 (accretion)(<br />' });
var group_Tauxparpriode = new ol.layer.Group({
                                layers: [lyr_rates_19841990_11,lyr_rates_19902000_12,lyr_rates_20002005_13,lyr_rates_20052010_14,lyr_rates_20102015_15,lyr_rates_20152020_16,lyr_rates_20202025_17,lyr_rates_19842025_18,],
                                fold: 'close',
                                title: 'Taux par période'});
var group_Traitdecte = new ol.layer.Group({
                                layers: [lyr_TC2025_4,lyr_TC_2020_5,lyr_TC_2015_6,lyr_TC_2005_7,lyr_TC_2000_8,lyr_TC_1990_9,lyr_TC_1984_10,],
                                fold: 'close',
                                title: 'Trait de côte'});
var group_Rfrences = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Zone_dtude_1,lyr_Togo_TOGO_2,lyr_MesuresdeProtection_3,],
                                fold: 'close',
                                title: 'Références'});

lyr_OSMStandard_0.setVisible(true);lyr_Zone_dtude_1.setVisible(true);lyr_Togo_TOGO_2.setVisible(true);lyr_MesuresdeProtection_3.setVisible(false);lyr_TC2025_4.setVisible(true);lyr_TC_2020_5.setVisible(true);lyr_TC_2015_6.setVisible(true);lyr_TC_2005_7.setVisible(true);lyr_TC_2000_8.setVisible(true);lyr_TC_1990_9.setVisible(true);lyr_TC_1984_10.setVisible(true);lyr_rates_19841990_11.setVisible(true);lyr_rates_19902000_12.setVisible(true);lyr_rates_20002005_13.setVisible(true);lyr_rates_20052010_14.setVisible(true);lyr_rates_20102015_15.setVisible(true);lyr_rates_20152020_16.setVisible(true);lyr_rates_20202025_17.setVisible(true);lyr_rates_19842025_18.setVisible(true);
var layersList = [group_Rfrences,group_Traitdecte,group_Tauxparpriode];
lyr_Zone_dtude_1.set('fieldAliases', {'fid_': 'fid_', 'region_id': 'region_id', 'region_nom': 'region_nom', 'prefecture': 'prefecture', 'prefectu_1': 'prefectu_1', 'commune_id': 'commune_id', 'commune_no': 'commune_no', 'canton_id': 'canton_id', 'canton_nom': 'canton_nom', 'canton_n_1': 'canton_n_1', 'grand_lome': 'grand_lome', 'Duplicata': 'Duplicata', });
lyr_Togo_TOGO_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'geom_Lengt': 'geom_Lengt', 'geom_Area': 'geom_Area', });
lyr_MesuresdeProtection_3.set('fieldAliases', {'Id': 'Id', 'type': 'type', 'état': 'état', 'Date_de_r': 'Date_de_r', });
lyr_TC2025_4.set('fieldAliases', {'Id': 'Id', 'YEAR': 'YEAR', 'date_': 'date_', });
lyr_TC_2020_5.set('fieldAliases', {'Id': 'Id', 'year': 'year', });
lyr_TC_2015_6.set('fieldAliases', {'Id': 'Id', 'year': 'year', });
lyr_TC_2005_7.set('fieldAliases', {'Id': 'Id', 'year': 'year', });
lyr_TC_2000_8.set('fieldAliases', {'Id': 'Id', 'year': 'Year', });
lyr_TC_1990_9.set('fieldAliases', {'Id': 'Id', 'year': 'Year', });
lyr_TC_1984_10.set('fieldAliases', {'Id': 'Id', 'year': 'Year', });
lyr_rates_19841990_11.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_rates_19902000_12.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_rates_20002005_13.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_rates_20052010_14.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_rates_20102015_15.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_rates_20152020_16.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_rates_20202025_17.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_rates_19842025_18.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Zone_dtude_1.set('fieldImages', {'fid_': 'TextEdit', 'region_id': 'TextEdit', 'region_nom': 'TextEdit', 'prefecture': 'TextEdit', 'prefectu_1': 'TextEdit', 'commune_id': 'TextEdit', 'commune_no': 'TextEdit', 'canton_id': 'TextEdit', 'canton_nom': 'TextEdit', 'canton_n_1': 'TextEdit', 'grand_lome': 'TextEdit', 'Duplicata': 'TextEdit', });
lyr_Togo_TOGO_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'geom_Lengt': 'TextEdit', 'geom_Area': 'TextEdit', });
lyr_MesuresdeProtection_3.set('fieldImages', {'Id': 'Range', 'type': 'TextEdit', 'état': 'TextEdit', 'Date_de_r': 'DateTime', });
lyr_TC2025_4.set('fieldImages', {'Id': '', 'YEAR': '', 'date_': '', });
lyr_TC_2020_5.set('fieldImages', {'Id': '', 'year': '', });
lyr_TC_2015_6.set('fieldImages', {'Id': '', 'year': '', });
lyr_TC_2005_7.set('fieldImages', {'Id': 'Range', 'year': 'TextEdit', });
lyr_TC_2000_8.set('fieldImages', {'Id': 'Hidden', 'year': 'TextEdit', });
lyr_TC_1990_9.set('fieldImages', {'Id': 'Hidden', 'year': 'TextEdit', });
lyr_TC_1984_10.set('fieldImages', {'Id': 'Hidden', 'year': 'TextEdit', });
lyr_rates_19841990_11.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'TextEdit', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'Range', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_rates_19902000_12.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'TextEdit', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_rates_20002005_13.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_rates_20052010_14.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'Range', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_rates_20102015_15.set('fieldImages', {'ObjectID': 'Range', 'BaselineID': 'Range', 'TransOrder': 'Range', 'TransEdit': 'Range', 'TransectId': 'Range', 'ShrCount': 'Range', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LSE': 'TextEdit', 'LCI': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', });
lyr_rates_20152020_16.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'JsonEdit', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_rates_20202025_17.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_rates_19842025_18.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Range', 'LR2': 'Hidden', 'LCI': 'Hidden', 'LSE': 'Range', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_Zone_dtude_1.set('fieldLabels', {'fid_': 'no label', 'region_id': 'no label', 'region_nom': 'no label', 'prefecture': 'no label', 'prefectu_1': 'no label', 'commune_id': 'no label', 'commune_no': 'no label', 'canton_id': 'no label', 'canton_nom': 'inline label - always visible', 'canton_n_1': 'no label', 'grand_lome': 'no label', 'Duplicata': 'no label', });
lyr_Togo_TOGO_2.set('fieldLabels', {'OBJECTID': 'no label', 'geom_Lengt': 'no label', 'geom_Area': 'no label', });
lyr_MesuresdeProtection_3.set('fieldLabels', {'Id': 'hidden field', 'type': 'no label', 'état': 'no label', 'Date_de_r': 'no label', });
lyr_TC2025_4.set('fieldLabels', {'Id': 'no label', 'YEAR': 'no label', 'date_': 'no label', });
lyr_TC_2020_5.set('fieldLabels', {'Id': 'no label', 'year': 'inline label - always visible', });
lyr_TC_2015_6.set('fieldLabels', {'Id': 'no label', 'year': 'inline label - always visible', });
lyr_TC_2005_7.set('fieldLabels', {'Id': 'header label - visible with data', 'year': 'inline label - always visible', });
lyr_TC_2000_8.set('fieldLabels', {'year': 'inline label - visible with data', });
lyr_TC_1990_9.set('fieldLabels', {'year': 'no label', });
lyr_TC_1984_10.set('fieldLabels', {'year': 'inline label - always visible', });
lyr_rates_19841990_11.set('fieldLabels', {'LRR': 'hidden field', 'EPR': 'inline label - always visible', 'NSM': 'inline label - always visible', });
lyr_rates_19902000_12.set('fieldLabels', {'EPR': 'inline label - always visible', 'NSM': 'inline label - always visible', 'WCI': 'inline label - always visible', });
lyr_rates_20002005_13.set('fieldLabels', {'EPR': 'hidden field', 'NSM': 'hidden field', });
lyr_rates_20052010_14.set('fieldLabels', {'EPR': 'inline label - always visible', 'NSM': 'inline label - always visible', 'WLR': 'hidden field', 'WR2': 'hidden field', 'WCI': 'hidden field', 'WSE': 'hidden field', 'TCD': 'no label', });
lyr_rates_20102015_15.set('fieldLabels', {'ObjectID': 'hidden field', 'BaselineID': 'hidden field', 'TransOrder': 'hidden field', 'TransEdit': 'hidden field', 'TransectId': 'hidden field', 'ShrCount': 'hidden field', 'LRR': 'hidden field', 'LR2': 'hidden field', 'LSE': 'hidden field', 'LCI': 'hidden field', 'EPR': 'inline label - always visible', 'EPRunc': 'header label - always visible', 'NSM': 'inline label - always visible', 'SCE': 'inline label - always visible', 'WLR': 'hidden field', 'WR2': 'hidden field', 'WCI': 'hidden field', 'WSE': 'hidden field', 'TCD': 'hidden field', });
lyr_rates_20152020_16.set('fieldLabels', {'EPR': 'inline label - always visible', 'NSM': 'inline label - always visible', 'WCI': 'no label', });
lyr_rates_20202025_17.set('fieldLabels', {'EPR': 'inline label - always visible', 'NSM': 'inline label - always visible', });
lyr_rates_19842025_18.set('fieldLabels', {'LRR': 'header label - always visible', 'LSE': 'no label', 'EPR': 'inline label - always visible', 'NSM': 'no label', });
lyr_rates_19842025_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});