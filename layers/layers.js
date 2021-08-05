var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 가공선'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 강원도 시군구 행정구역'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 공동영업구역'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 광구'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 교통안전특정해역'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> 국가산업단지'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> 국가어항'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> 군립공원'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> 깊은수심항로부'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> 농공단지'
            });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__12, 
                style: style__12,
                interactive: true,
                title: '<img src="styles/legend/_12.png" /> 도립공원'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__13, 
                style: style__13,
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> 무역항'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__14, 
                style: style__14,
                interactive: true,
                title: '<img src="styles/legend/_14.png" /> 바다목장'
            });
var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15.addFeatures(features__15);
var lyr__15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__15, 
                style: style__15,
                interactive: true,
                title: '<img src="styles/legend/_15.png" /> 보호수역'
            });
var format__16 = new ol.format.GeoJSON();
var features__16 = format__16.readFeatures(json__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__16.addFeatures(features__16);
var lyr__16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__16, 
                style: style__16,
                interactive: true,
                title: '<img src="styles/legend/_16.png" /> 부지이용계획도'
            });
var format__17 = new ol.format.GeoJSON();
var features__17 = format__17.readFeatures(json__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__17.addFeatures(features__17);
var lyr__17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__17, 
                style: style__17,
                interactive: true,
                title: '<img src="styles/legend/_17.png" /> 선박안전교통관제구역'
            });
var format__18 = new ol.format.GeoJSON();
var features__18 = format__18.readFeatures(json__18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__18.addFeatures(features__18);
var lyr__18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__18, 
                style: style__18,
                interactive: true,
                title: '<img src="styles/legend/_18.png" /> 소형선항만'
            });
var format__19 = new ol.format.GeoJSON();
var features__19 = format__19.readFeatures(json__19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__19.addFeatures(features__19);
var lyr__19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__19, 
                style: style__19,
                interactive: true,
                title: '<img src="styles/legend/_19.png" /> 습지보호지역'
            });
var format__20 = new ol.format.GeoJSON();
var features__20 = format__20.readFeatures(json__20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__20.addFeatures(features__20);
var lyr__20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__20, 
                style: style__20,
                interactive: true,
                title: '<img src="styles/legend/_20.png" /> 양길항로부'
            });
var format__21 = new ol.format.GeoJSON();
var features__21 = format__21.readFeatures(json__21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__21.addFeatures(features__21);
var lyr__21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__21, 
                style: style__21,
                interactive: true,
                title: '<img src="styles/legend/_21.png" /> 양식장'
            });
var format__22 = new ol.format.GeoJSON();
var features__22 = format__22.readFeatures(json__22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__22.addFeatures(features__22);
var lyr__22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__22, 
                style: style__22,
                interactive: true,
                title: '<img src="styles/legend/_22.png" /> 어업자원보호수역'
            });
var format__23 = new ol.format.GeoJSON();
var features__23 = format__23.readFeatures(json__23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__23.addFeatures(features__23);
var lyr__23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__23, 
                style: style__23,
                interactive: true,
                title: '<img src="styles/legend/_23.png" /> 어업자원수역'
            });
var format__24 = new ol.format.GeoJSON();
var features__24 = format__24.readFeatures(json__24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__24.addFeatures(features__24);
var lyr__24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__24, 
                style: style__24,
                interactive: true,
                title: '<img src="styles/legend/_24.png" /> 어촌어항정보도'
            });
var format__25 = new ol.format.GeoJSON();
var features__25 = format__25.readFeatures(json__25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__25.addFeatures(features__25);
var lyr__25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__25, 
                style: style__25,
                interactive: true,
                title: '<img src="styles/legend/_25.png" /> 어촌연안행정리정보'
            });
var format__26 = new ol.format.GeoJSON();
var features__26 = format__26.readFeatures(json__26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__26.addFeatures(features__26);
var lyr__26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__26, 
                style: style__26,
                interactive: true,
                title: '<img src="styles/legend/_26.png" /> 어항개발계획도'
            });
var format__27 = new ol.format.GeoJSON();
var features__27 = format__27.readFeatures(json__27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__27.addFeatures(features__27);
var lyr__27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__27, 
                style: style__27,
                interactive: true,
                title: '<img src="styles/legend/_27.png" /> 연안항'
            });
var format__28 = new ol.format.GeoJSON();
var features__28 = format__28.readFeatures(json__28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__28.addFeatures(features__28);
var lyr__28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__28, 
                style: style__28,
                interactive: true,
                title: '<img src="styles/legend/_28.png" /> 영해한계선'
            });
var format__29 = new ol.format.GeoJSON();
var features__29 = format__29.readFeatures(json__29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__29.addFeatures(features__29);
var lyr__29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__29, 
                style: style__29,
                interactive: true,
                title: '<img src="styles/legend/_29.png" /> 정박지'
            });
var format___30 = new ol.format.GeoJSON();
var features___30 = format___30.readFeatures(json___30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___30.addFeatures(features___30);
var lyr___30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___30, 
                style: style___30,
                interactive: true,
                title: '<img src="styles/legend/__30.png" /> 조업밀집구역_가을'
            });
var format___31 = new ol.format.GeoJSON();
var features___31 = format___31.readFeatures(json___31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___31.addFeatures(features___31);
var lyr___31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___31, 
                style: style___31,
                interactive: true,
                title: '<img src="styles/legend/__31.png" /> 조업밀집구역_겨울'
            });
var format___32 = new ol.format.GeoJSON();
var features___32 = format___32.readFeatures(json___32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___32.addFeatures(features___32);
var lyr___32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___32, 
                style: style___32,
                interactive: true,
                title: '<img src="styles/legend/__32.png" /> 조업밀집구역_봄'
            });
var format___33 = new ol.format.GeoJSON();
var features___33 = format___33.readFeatures(json___33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___33.addFeatures(features___33);
var lyr___33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___33, 
                style: style___33,
                interactive: true,
                title: '<img src="styles/legend/__33.png" /> 조업밀집구역_여름'
            });
var format__34 = new ol.format.GeoJSON();
var features__34 = format__34.readFeatures(json__34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__34.addFeatures(features__34);
var lyr__34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__34, 
                style: style__34,
                interactive: true,
                title: '<img src="styles/legend/_34.png" /> 조업한계선'
            });
var format__35 = new ol.format.GeoJSON();
var features__35 = format__35.readFeatures(json__35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__35.addFeatures(features__35);
var lyr__35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__35, 
                style: style__35,
                interactive: true,
                title: '<img src="styles/legend/_35.png" /> 지정항로'
            });
var format_2_36 = new ol.format.GeoJSON();
var features_2_36 = format_2_36.readFeatures(json_2_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_36.addFeatures(features_2_36);
var lyr_2_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_36, 
                style: style_2_36,
                interactive: true,
                title: '<img src="styles/legend/2_36.png" /> 취수해역2'
            });
var format__37 = new ol.format.GeoJSON();
var features__37 = format__37.readFeatures(json__37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__37.addFeatures(features__37);
var lyr__37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__37, 
                style: style__37,
                interactive: true,
                title: '<img src="styles/legend/_37.png" /> 취수해역'
            });
var format__38 = new ol.format.GeoJSON();
var features__38 = format__38.readFeatures(json__38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__38.addFeatures(features__38);
var lyr__38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__38, 
                style: style__38,
                interactive: true,
                title: '<img src="styles/legend/_38.png" /> 통항분리경계선'
            });
var format__39 = new ol.format.GeoJSON();
var features__39 = format__39.readFeatures(json__39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__39.addFeatures(features__39);
var lyr__39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__39, 
                style: style__39,
                interactive: true,
                title: '<img src="styles/legend/_39.png" /> 통항분리구역'
            });
var format__40 = new ol.format.GeoJSON();
var features__40 = format__40.readFeatures(json__40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__40.addFeatures(features__40);
var lyr__40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__40, 
                style: style__40,
                interactive: true,
                title: '<img src="styles/legend/_40.png" /> 특별관리해역'
            });
var format__41 = new ol.format.GeoJSON();
var features__41 = format__41.readFeatures(json__41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__41.addFeatures(features__41);
var lyr__41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__41, 
                style: style__41,
                interactive: true,
                title: '<img src="styles/legend/_41.png" /> 특정금지구역'
            });
var format__42 = new ol.format.GeoJSON();
var features__42 = format__42.readFeatures(json__42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__42.addFeatures(features__42);
var lyr__42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__42, 
                style: style__42,
                interactive: true,
                title: '<img src="styles/legend/_42.png" /> 산업폐기물투기구역'
            });
var format__43 = new ol.format.GeoJSON();
var features__43 = format__43.readFeatures(json__43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__43.addFeatures(features__43);
var lyr__43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__43, 
                style: style__43,
                interactive: true,
                title: '<img src="styles/legend/_43.png" /> 한일중간수역'
            });
var format__44 = new ol.format.GeoJSON();
var features__44 = format__44.readFeatures(json__44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__44.addFeatures(features__44);
var lyr__44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__44, 
                style: style__44,
                interactive: true,
                title: '<img src="styles/legend/_44.png" /> 한중과도수역'
            });
var format__45 = new ol.format.GeoJSON();
var features__45 = format__45.readFeatures(json__45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__45.addFeatures(features__45);
var lyr__45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__45, 
                style: style__45,
                interactive: true,
                title: '<img src="styles/legend/_45.png" /> 한중잠정조치수역'
            });
var format_2_46 = new ol.format.GeoJSON();
var features_2_46 = format_2_46.readFeatures(json_2_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_46.addFeatures(features_2_46);
var lyr_2_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_46, 
                style: style_2_46,
                interactive: true,
                title: '<img src="styles/legend/2_46.png" /> 해상훈련사격구역2'
            });
var format__47 = new ol.format.GeoJSON();
var features__47 = format__47.readFeatures(json__47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__47.addFeatures(features__47);
var lyr__47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__47, 
                style: style__47,
                interactive: true,
                title: '<img src="styles/legend/_47.png" /> 해상훈련사격구역'
            });
var format__48 = new ol.format.GeoJSON();
var features__48 = format__48.readFeatures(json__48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__48.addFeatures(features__48);
var lyr__48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__48, 
                style: style__48,
                interactive: true,
                title: '<img src="styles/legend/_48.png" /> 해양레저활동 허가대상구역'
            });
var format__49 = new ol.format.GeoJSON();
var features__49 = format__49.readFeatures(json__49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__49.addFeatures(features__49);
var lyr__49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__49, 
                style: style__49,
                interactive: true,
                title: '<img src="styles/legend/_49.png" /> 해양환경보전해역'
            });
var format__50 = new ol.format.GeoJSON();
var features__50 = format__50.readFeatures(json__50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__50.addFeatures(features__50);
var lyr__50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__50, 
                style: style__50,
                interactive: true,
                title: '<img src="styles/legend/_50.png" /> 해저광물개발구역'
            });
var format__51 = new ol.format.GeoJSON();
var features__51 = format__51.readFeatures(json__51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__51.addFeatures(features__51);
var lyr__51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__51, 
                style: style__51,
                interactive: true,
                title: '<img src="styles/legend/_51.png" /> 해저수송관'
            });
var format__52 = new ol.format.GeoJSON();
var features__52 = format__52.readFeatures(json__52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__52.addFeatures(features__52);
var lyr__52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__52, 
                style: style__52,
                interactive: true,
                title: '<img src="styles/legend/_52.png" /> 해저케이블'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__15.setVisible(true);lyr__16.setVisible(true);lyr__17.setVisible(true);lyr__18.setVisible(true);lyr__19.setVisible(true);lyr__20.setVisible(true);lyr__21.setVisible(true);lyr__22.setVisible(true);lyr__23.setVisible(true);lyr__24.setVisible(true);lyr__25.setVisible(true);lyr__26.setVisible(true);lyr__27.setVisible(true);lyr__28.setVisible(true);lyr__29.setVisible(true);lyr___30.setVisible(true);lyr___31.setVisible(true);lyr___32.setVisible(true);lyr___33.setVisible(true);lyr__34.setVisible(true);lyr__35.setVisible(true);lyr_2_36.setVisible(true);lyr__37.setVisible(true);lyr__38.setVisible(true);lyr__39.setVisible(true);lyr__40.setVisible(true);lyr__41.setVisible(true);lyr__42.setVisible(true);lyr__43.setVisible(true);lyr__44.setVisible(true);lyr__45.setVisible(true);lyr_2_46.setVisible(true);lyr__47.setVisible(true);lyr__48.setVisible(true);lyr__49.setVisible(true);lyr__50.setVisible(true);lyr__51.setVisible(true);lyr__52.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13,lyr__14,lyr__15,lyr__16,lyr__17,lyr__18,lyr__19,lyr__20,lyr__21,lyr__22,lyr__23,lyr__24,lyr__25,lyr__26,lyr__27,lyr__28,lyr__29,lyr___30,lyr___31,lyr___32,lyr___33,lyr__34,lyr__35,lyr_2_36,lyr__37,lyr__38,lyr__39,lyr__40,lyr__41,lyr__42,lyr__43,lyr__44,lyr__45,lyr_2_46,lyr__47,lyr__48,lyr__49,lyr__50,lyr__51,lyr__52];
lyr__2.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE_1': 'INDCDE_1', 'INDCDE_2': 'INDCDE_2', 'INDCDE_3': 'INDCDE_3', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'ENCLEV': 'ENCLEV', 'ENC_NO': 'ENC_NO', 'GUBUN': 'GUBUN', 'CATCBL': 'CATCBL', 'CONDTN': 'CONDTN', 'CONRAD': 'CONRAD', 'CONVIS': 'CONVIS', 'DATEND': 'DATEND', 'DATSTA': 'DATSTA', 'ICEFAC': 'ICEFAC', 'NOBJNM': 'NOBJNM', 'OBJNAM': 'OBJNAM', 'STATUS': 'STATUS', 'VERCLR': 'VERCLR', 'VERCSA': 'VERCSA', 'VERDAT': 'VERDAT', 'INFORM': 'INFORM', 'NINFOM': 'NINFOM', 'NTXTDS': 'NTXTDS', 'SCAMIN': 'SCAMIN', 'TXTDSC': 'TXTDSC', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', });
lyr__3.set('fieldAliases', {'ADM_SECT_C': 'ADM_SECT_C', 'SGG_NM': 'SGG_NM', 'SGG_OID': 'SGG_OID', 'COL_ADM_SE': 'COL_ADM_SE', 'GID': 'GID', });
lyr__4.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFDE': 'CLFDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', });
lyr__5.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__6.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__7.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'ESTATE_COD': 'ESTATE_COD', 'ESTATE_NAM': 'ESTATE_NAM', 'SIDO_NAME': 'SIDO_NAME', 'SGG_NAME': 'SGG_NAME', 'DEVELOP_ST': 'DEVELOP_ST', 'SALE_STATE': 'SALE_STATE', 'DESIGNATIO': 'DESIGNATIO', 'DESIGNAT_1': 'DESIGNAT_1', 'COMPLET_DA': 'COMPLET_DA', 'LAW': 'LAW', 'BRANCH_OPE': 'BRANCH_OPE', 'LOCATION': 'LOCATION', });
lyr__8.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__9.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'PARK_NAME': 'PARK_NAME', });
lyr__10.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE_1': 'INDCDE_1', 'INDCDE_2': 'INDCDE_2', 'INDCDE_3': 'INDCDE_3', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'ENCLEV': 'ENCLEV', 'ENC_NO': 'ENC_NO', 'GUBUN': 'GUBUN', 'DATEND': 'DATEND', 'DATSTA': 'DATSTA', 'DRVAL1': 'DRVAL1', 'DRVAL2': 'DRVAL2', 'NOBJNM': 'NOBJNM', 'OBJNAM': 'OBJNAM', 'ORIENT': 'ORIENT', 'QUASOU': 'QUASOU', 'RESTRN': 'RESTRN', 'SOUACC': 'SOUACC', 'STATUS': 'STATUS', 'TECSOU': 'TECSOU', 'TRAFIC': 'TRAFIC', 'INFORM': 'INFORM', 'NINFOM': 'NINFOM', 'NTXTDS': 'NTXTDS', 'SCAMIN': 'SCAMIN', 'TXTDSC': 'TXTDSC', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', });
lyr__11.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'ESTATE_COD': 'ESTATE_COD', 'ESTATE_NAM': 'ESTATE_NAM', 'SIDO_NAME': 'SIDO_NAME', 'SGG_NAME': 'SGG_NAME', 'DEVELOP_ST': 'DEVELOP_ST', 'SALE_STATE': 'SALE_STATE', 'DESIGNATIO': 'DESIGNATIO', 'DESIGNAT_1': 'DESIGNAT_1', 'COMPLET_DA': 'COMPLET_DA', 'LAW': 'LAW', 'BRANCH_OPE': 'BRANCH_OPE', 'LOCATION': 'LOCATION', });
lyr__12.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'PARK_NAME': 'PARK_NAME', });
lyr__13.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__14.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', 'LEGEND': 'LEGEND', });
lyr__15.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', });
lyr__16.set('fieldAliases', {'FPUPL_ID': 'FPUPL_ID', 'PORT_ID': 'PORT_ID', 'TY_NM': 'TY_NM', 'FPFC_NM': 'FPFC_NM', 'USAR_NM': 'USAR_NM', 'FPUPL_AR': 'FPUPL_AR', 'BULD_NM': 'BULD_NM', 'DRW_LYR_NM': 'DRW_LYR_NM', 'MAKE_DE': 'MAKE_DE', });
lyr__17.set('fieldAliases', {'OBJNUM': 'OBJNUM', });
lyr__18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'COAST_CD': 'COAST_CD', 'CATE_CD': 'CATE_CD', });
lyr__19.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'GOS_NUM': 'GOS_NUM', 'LAW': 'LAW', 'MNG_OGR': 'MNG_OGR', 'LOC': 'LOC', 'REG_RAMSAR': 'REG_RAMSAR', 'REG_RAM_DA': 'REG_RAM_DA', 'GOS_DAT': 'GOS_DAT', });
lyr__20.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE_1': 'INDCDE_1', 'INDCDE_2': 'INDCDE_2', 'INDCDE_3': 'INDCDE_3', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'ENCLEV': 'ENCLEV', 'ENC_NO': 'ENC_NO', 'GUBUN': 'GUBUN', 'CATTRK': 'CATTRK', 'TRAFIC': 'TRAFIC', 'DATEND': 'DATEND', 'DATSTA': 'DATSTA', 'DRVAL1': 'DRVAL1', 'ORIENT': 'ORIENT', 'QUASOU': 'QUASOU', 'SOUACC': 'SOUACC', 'STATUS': 'STATUS', 'TECSOU': 'TECSOU', 'INFORM': 'INFORM', 'NINFOM': 'NINFOM', 'NTXTDS': 'NTXTDS', 'SCAMIN': 'SCAMIN', 'TXTDSC': 'TXTDSC', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', });
lyr__21.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE_1': 'INDCDE_1', 'INDCDE_2': 'INDCDE_2', 'INDCDE_3': 'INDCDE_3', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'ENCLEV': 'ENCLEV', 'ENC_NO': 'ENC_NO', 'GUBUN': 'GUBUN', 'CATMFA': 'CATMFA', 'DATEND': 'DATEND', 'DATSTA': 'DATSTA', 'EXPSOU': 'EXPSOU', 'PEREND': 'PEREND', 'PERSTA': 'PERSTA', 'QUASOU': 'QUASOU', 'RESTRN': 'RESTRN', 'SOUACC': 'SOUACC', 'STATUS': 'STATUS', 'VALSOU': 'VALSOU', 'VERACC': 'VERACC', 'VERLEN': 'VERLEN', 'WATLEV': 'WATLEV', 'NOBJNM': 'NOBJNM', 'OBJNAM': 'OBJNAM', 'INFORM': 'INFORM', 'NINFOM': 'NINFOM', 'NTXTDS': 'NTXTDS', 'SCAMIN': 'SCAMIN', 'TXTDSC': 'TXTDSC', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', });
lyr__22.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', });
lyr__23.set('fieldAliases', {'GID': 'GID', 'XMIN': 'XMIN', 'YMIN': 'YMIN', 'XMAX': 'XMAX', 'YMAX': 'YMAX', 'OBJECTID': 'OBJECTID', 'FRRSR_NM': 'FRRSR_NM', 'MNCT_NO': 'MNCT_NO', 'MNCT_SCALE': 'MNCT_SCALE', 'ZONE_DESC': 'ZONE_DESC', 'RELREGLTN': 'RELREGLTN', 'RELGOAG': 'RELGOAG', 'REVIYR': 'REVIYR', 'ZONE_NM': 'ZONE_NM', 'ZONE_CRDNT': 'ZONE_CRDNT', 'ID': 'ID', 'CATE_CD': 'CATE_CD', 'ADR_CD': 'ADR_CD', 'ADR_KNM': 'ADR_KNM', 'ORIGIN': 'ORIGIN', 'ORIYR': 'ORIYR', 'ORIORG': 'ORIORG', });
lyr__24.set('fieldAliases', {'GID': 'GID', 'XMIN': 'XMIN', 'YMIN': 'YMIN', 'XMAX': 'XMAX', 'YMAX': 'YMAX', 'ADR_CD': 'ADR_CD', 'ADRES': 'ADRES', 'CATE_CODE': 'CATE_CODE', 'SIDO_NM': 'SIDO_NM', 'RELGOAG': 'RELGOAG', 'WSEA_LIC': 'WSEA_LIC', 'WSEA_TYPE': 'WSEA_TYPE', 'WSEA_WAY': 'WSEA_WAY', 'FARM_TYPE': 'FARM_TYPE', 'LOC_DESC': 'LOC_DESC', 'AREA': 'AREA', 'LICE_SDATE': 'LICE_SDATE', 'LICE_EDATE': 'LICE_EDATE', 'LICE_NUM': 'LICE_NUM', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'REVIYR': 'REVIYR', 'OBJECTID': 'OBJECTID', });
lyr__25.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'FPDPL_PL_I': 'FPDPL_PL_I', 'FPDPL_ID': 'FPDPL_ID', 'GEOM': 'GEOM', 'PORT_ID': 'PORT_ID', 'FPDPL_LYR_': 'FPDPL_LYR_', 'FPDPL_SCTN': 'FPDPL_SCTN', 'FPDPL_SC_1': 'FPDPL_SC_1', 'DRW_LYR_NM': 'DRW_LYR_NM', 'MAKE_DE': 'MAKE_DE', 'SCTN_LT_TE': 'SCTN_LT_TE', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr__26.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'FPDPL_PL_I': 'FPDPL_PL_I', 'FPDPL_ID': 'FPDPL_ID', 'GEOM': 'GEOM', 'PORT_ID': 'PORT_ID', 'FPDPL_LYR_': 'FPDPL_LYR_', 'FPDPL_SCTN': 'FPDPL_SCTN', 'FPDPL_SC_1': 'FPDPL_SC_1', 'DRW_LYR_NM': 'DRW_LYR_NM', 'MAKE_DE': 'MAKE_DE', 'SCTN_LT_TE': 'SCTN_LT_TE', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr__27.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__28.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', });
lyr__29.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE_1': 'INDCDE_1', 'INDCDE_2': 'INDCDE_2', 'INDCDE_3': 'INDCDE_3', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'ENCLEV': 'ENCLEV', 'ENC_NO': 'ENC_NO', 'GUBUN': 'GUBUN', 'CATACH': 'CATACH', 'DATEND': 'DATEND', 'DATSTA': 'DATSTA', 'NOBJNM': 'NOBJNM', 'OBJNAM': 'OBJNAM', 'PEREND': 'PEREND', 'PERSTA': 'PERSTA', 'RESTRN': 'RESTRN', 'STATUS': 'STATUS', 'INFORM': 'INFORM', 'NINFOM': 'NINFOM', 'NTXTDS': 'NTXTDS', 'SCAMAX': 'SCAMAX', 'SCAMIN': 'SCAMIN', 'TXTDSC': 'TXTDSC', 'RECDAT': 'RECDAT', 'RECIND': 'RECIND', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', });
lyr___30.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'AREA_SIZE': 'AREA_SIZE', });
lyr___31.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'AREA_SIZE': 'AREA_SIZE', });
lyr___32.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'AREA_SIZE': 'AREA_SIZE', });
lyr___33.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'AREA_SIZE': 'AREA_SIZE', });
lyr__34.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__35.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_2_36.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', 'JUALGOV': 'JUALGOV', 'ODMAXCH': 'ODMAXCH', });
lyr__37.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', 'JUALGOV': 'JUALGOV', 'ODMAXCH': 'ODMAXCH', });
lyr__38.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE_1': 'INDCDE_1', 'INDCDE_2': 'INDCDE_2', 'INDCDE_3': 'INDCDE_3', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'ENCLEV': 'ENCLEV', 'ENC_NO': 'ENC_NO', 'GUBUN': 'GUBUN', 'CATTSS': 'CATTSS', 'DATEND': 'DATEND', 'DATSTA': 'DATSTA', 'STATUS': 'STATUS', 'INFORM': 'INFORM', 'NINFOM': 'NINFOM', 'NTXTDS': 'NTXTDS', 'SCAMIN': 'SCAMIN', 'TXTDSC': 'TXTDSC', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', });
lyr__39.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE_1': 'INDCDE_1', 'INDCDE_2': 'INDCDE_2', 'INDCDE_3': 'INDCDE_3', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'ENCLEV': 'ENCLEV', 'ENC_NO': 'ENC_NO', 'GUBUN': 'GUBUN', 'CATTSS': 'CATTSS', 'DATEND': 'DATEND', 'DATSTA': 'DATSTA', 'STATUS': 'STATUS', 'INFORM': 'INFORM', 'NINFOM': 'NINFOM', 'NTXTDS': 'NTXTDS', 'SCAMIN': 'SCAMIN', 'TXTDSC': 'TXTDSC', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', });
lyr__40.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'OBJECTID': 'OBJECTID', 'SPL_CDE': 'SPL_CDE', 'SPL_NAM': 'SPL_NAM', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'NAM_KR': 'NAM_KR', 'STA_CDE': 'STA_CDE', });
lyr__41.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__42.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__43.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', });
lyr__44.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', });
lyr__45.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE': 'INDCDE', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'NAME': 'NAME', 'DEFINE': 'DEFINE', 'LAWNAM': 'LAWNAM', 'ARTICE': 'ARTICE', 'REPAPER': 'REPAPER', 'REVDAT': 'REVDAT', 'NOTDAT': 'NOTDAT', 'RELMINI': 'RELMINI', 'CONNUM': 'CONNUM', 'RELFILE': 'RELFILE', 'REFSITE': 'REFSITE', });
lyr_2_46.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__47.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__48.set('fieldAliases', {'CODE': 'CODE', 'GUBUN': 'GUBUN', 'ORIGIN': 'ORIGIN', 'ZN_NAME': 'ZN_NAME', 'LAW': 'LAW', 'ZN_DESC': 'ZN_DESC', 'RSN_SET': 'RSN_SET', 'AREA_DESC': 'AREA_DESC', 'PORT_GUBUN': 'PORT_GUBUN', 'IMG_FILENA': 'IMG_FILENA', });
lyr__49.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__50.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr__51.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE_1': 'INDCDE_1', 'INDCDE_2': 'INDCDE_2', 'INDCDE_3': 'INDCDE_3', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'ENCLEV': 'ENCLEV', 'ENC_NO': 'ENC_NO', 'GUBUN': 'GUBUN', 'BURDEP': 'BURDEP', 'DRVAL1': 'DRVAL1', 'DRVAL2': 'DRVAL2', 'CONDTN': 'CONDTN', 'DATEND': 'DATEND', 'DATSTA': 'DATSTA', 'NOBJNM': 'NOBJNM', 'OBJNAM': 'OBJNAM', 'STATUS': 'STATUS', 'VERLEN': 'VERLEN', 'INFORM': 'INFORM', 'NINFOM': 'NINFOM', 'NTXTDS': 'NTXTDS', 'SCAMIN': 'SCAMIN', 'TXTDSC': 'TXTDSC', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', });
lyr__52.set('fieldAliases', {'OBJNUM': 'OBJNUM', 'PBINST': 'PBINST', 'INDCDE_1': 'INDCDE_1', 'INDCDE_2': 'INDCDE_2', 'INDCDE_3': 'INDCDE_3', 'MNYMD': 'MNYMD', 'CLFCDE': 'CLFCDE', 'ENCLEV': 'ENCLEV', 'ENC_NO': 'ENC_NO', 'GUBUN': 'GUBUN', 'CATCBL': 'CATCBL', 'STATUS': 'STATUS', 'BURDEP': 'BURDEP', 'CONDTN': 'CONDTN', 'DATEND': 'DATEND', 'DATSTA': 'DATSTA', 'DRVAL1': 'DRVAL1', 'DRVAL2': 'DRVAL2', 'NOBJNM': 'NOBJNM', 'OBJNAM': 'OBJNAM', 'INFORM': 'INFORM', 'NINFOM': 'NINFOM', 'NTXTDS': 'NTXTDS', 'SCAMIN': 'SCAMIN', 'TXTDSC': 'TXTDSC', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', });
lyr__2.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE_1': 'TextEdit', 'INDCDE_2': 'TextEdit', 'INDCDE_3': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'ENCLEV': 'TextEdit', 'ENC_NO': 'TextEdit', 'GUBUN': 'TextEdit', 'CATCBL': 'TextEdit', 'CONDTN': 'TextEdit', 'CONRAD': 'TextEdit', 'CONVIS': 'TextEdit', 'DATEND': 'TextEdit', 'DATSTA': 'TextEdit', 'ICEFAC': 'TextEdit', 'NOBJNM': 'TextEdit', 'OBJNAM': 'TextEdit', 'STATUS': 'TextEdit', 'VERCLR': 'TextEdit', 'VERCSA': 'TextEdit', 'VERDAT': 'TextEdit', 'INFORM': 'TextEdit', 'NINFOM': 'TextEdit', 'NTXTDS': 'TextEdit', 'SCAMIN': 'TextEdit', 'TXTDSC': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', });
lyr__3.set('fieldImages', {'ADM_SECT_C': 'TextEdit', 'SGG_NM': 'TextEdit', 'SGG_OID': 'Range', 'COL_ADM_SE': 'TextEdit', 'GID': 'Range', });
lyr__4.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', });
lyr__5.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__6.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__7.set('fieldImages', {'OGR_FID': 'TextEdit', 'ESTATE_COD': 'TextEdit', 'ESTATE_NAM': 'TextEdit', 'SIDO_NAME': 'TextEdit', 'SGG_NAME': 'TextEdit', 'DEVELOP_ST': 'TextEdit', 'SALE_STATE': 'TextEdit', 'DESIGNATIO': 'TextEdit', 'DESIGNAT_1': 'DateTime', 'COMPLET_DA': 'DateTime', 'LAW': 'TextEdit', 'BRANCH_OPE': 'TextEdit', 'LOCATION': 'TextEdit', });
lyr__8.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__9.set('fieldImages', {'OGR_FID': 'TextEdit', 'PARK_NAME': 'TextEdit', });
lyr__10.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE_1': 'TextEdit', 'INDCDE_2': 'TextEdit', 'INDCDE_3': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'ENCLEV': 'TextEdit', 'ENC_NO': 'TextEdit', 'GUBUN': 'TextEdit', 'DATEND': 'TextEdit', 'DATSTA': 'TextEdit', 'DRVAL1': 'TextEdit', 'DRVAL2': 'TextEdit', 'NOBJNM': 'TextEdit', 'OBJNAM': 'TextEdit', 'ORIENT': 'TextEdit', 'QUASOU': 'TextEdit', 'RESTRN': 'TextEdit', 'SOUACC': 'TextEdit', 'STATUS': 'TextEdit', 'TECSOU': 'TextEdit', 'TRAFIC': 'TextEdit', 'INFORM': 'TextEdit', 'NINFOM': 'TextEdit', 'NTXTDS': 'TextEdit', 'SCAMIN': 'TextEdit', 'TXTDSC': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', });
lyr__11.set('fieldImages', {'OGR_FID': 'TextEdit', 'ESTATE_COD': 'TextEdit', 'ESTATE_NAM': 'TextEdit', 'SIDO_NAME': 'TextEdit', 'SGG_NAME': 'TextEdit', 'DEVELOP_ST': 'TextEdit', 'SALE_STATE': 'TextEdit', 'DESIGNATIO': 'TextEdit', 'DESIGNAT_1': 'DateTime', 'COMPLET_DA': 'DateTime', 'LAW': 'TextEdit', 'BRANCH_OPE': 'TextEdit', 'LOCATION': 'TextEdit', });
lyr__12.set('fieldImages', {'OGR_FID': 'TextEdit', 'PARK_NAME': 'TextEdit', });
lyr__13.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__14.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', 'LEGEND': 'TextEdit', });
lyr__15.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', });
lyr__16.set('fieldImages', {'FPUPL_ID': 'TextEdit', 'PORT_ID': 'TextEdit', 'TY_NM': 'TextEdit', 'FPFC_NM': 'TextEdit', 'USAR_NM': 'TextEdit', 'FPUPL_AR': 'TextEdit', 'BULD_NM': 'TextEdit', 'DRW_LYR_NM': 'TextEdit', 'MAKE_DE': 'DateTime', });
lyr__17.set('fieldImages', {'OBJNUM': 'TextEdit', });
lyr__18.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'COAST_CD': 'TextEdit', 'CATE_CD': 'TextEdit', });
lyr__19.set('fieldImages', {'OGR_FID': 'TextEdit', 'GOS_NUM': 'TextEdit', 'LAW': 'TextEdit', 'MNG_OGR': 'TextEdit', 'LOC': 'TextEdit', 'REG_RAMSAR': 'TextEdit', 'REG_RAM_DA': 'TextEdit', 'GOS_DAT': 'TextEdit', });
lyr__20.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE_1': 'TextEdit', 'INDCDE_2': 'TextEdit', 'INDCDE_3': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'ENCLEV': 'TextEdit', 'ENC_NO': 'TextEdit', 'GUBUN': 'TextEdit', 'CATTRK': 'TextEdit', 'TRAFIC': 'TextEdit', 'DATEND': 'TextEdit', 'DATSTA': 'TextEdit', 'DRVAL1': 'TextEdit', 'ORIENT': 'TextEdit', 'QUASOU': 'TextEdit', 'SOUACC': 'TextEdit', 'STATUS': 'TextEdit', 'TECSOU': 'TextEdit', 'INFORM': 'TextEdit', 'NINFOM': 'TextEdit', 'NTXTDS': 'TextEdit', 'SCAMIN': 'TextEdit', 'TXTDSC': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', });
lyr__21.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE_1': 'TextEdit', 'INDCDE_2': 'TextEdit', 'INDCDE_3': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'ENCLEV': 'TextEdit', 'ENC_NO': 'TextEdit', 'GUBUN': 'TextEdit', 'CATMFA': 'TextEdit', 'DATEND': 'TextEdit', 'DATSTA': 'TextEdit', 'EXPSOU': 'TextEdit', 'PEREND': 'TextEdit', 'PERSTA': 'TextEdit', 'QUASOU': 'TextEdit', 'RESTRN': 'TextEdit', 'SOUACC': 'TextEdit', 'STATUS': 'TextEdit', 'VALSOU': 'TextEdit', 'VERACC': 'TextEdit', 'VERLEN': 'TextEdit', 'WATLEV': 'TextEdit', 'NOBJNM': 'TextEdit', 'OBJNAM': 'TextEdit', 'INFORM': 'TextEdit', 'NINFOM': 'TextEdit', 'NTXTDS': 'TextEdit', 'SCAMIN': 'TextEdit', 'TXTDSC': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', });
lyr__22.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', });
lyr__23.set('fieldImages', {'GID': 'TextEdit', 'XMIN': 'TextEdit', 'YMIN': 'TextEdit', 'XMAX': 'TextEdit', 'YMAX': 'TextEdit', 'OBJECTID': 'TextEdit', 'FRRSR_NM': 'TextEdit', 'MNCT_NO': 'TextEdit', 'MNCT_SCALE': 'TextEdit', 'ZONE_DESC': 'TextEdit', 'RELREGLTN': 'TextEdit', 'RELGOAG': 'TextEdit', 'REVIYR': 'TextEdit', 'ZONE_NM': 'TextEdit', 'ZONE_CRDNT': 'TextEdit', 'ID': 'TextEdit', 'CATE_CD': 'TextEdit', 'ADR_CD': 'TextEdit', 'ADR_KNM': 'TextEdit', 'ORIGIN': 'TextEdit', 'ORIYR': 'TextEdit', 'ORIORG': 'TextEdit', });
lyr__24.set('fieldImages', {'GID': 'TextEdit', 'XMIN': 'TextEdit', 'YMIN': 'TextEdit', 'XMAX': 'TextEdit', 'YMAX': 'TextEdit', 'ADR_CD': 'TextEdit', 'ADRES': 'TextEdit', 'CATE_CODE': 'TextEdit', 'SIDO_NM': 'TextEdit', 'RELGOAG': 'TextEdit', 'WSEA_LIC': 'TextEdit', 'WSEA_TYPE': 'TextEdit', 'WSEA_WAY': 'TextEdit', 'FARM_TYPE': 'TextEdit', 'LOC_DESC': 'TextEdit', 'AREA': 'TextEdit', 'LICE_SDATE': 'TextEdit', 'LICE_EDATE': 'TextEdit', 'LICE_NUM': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'REVIYR': 'TextEdit', 'OBJECTID': 'TextEdit', });
lyr__25.set('fieldImages', {'OGR_FID': 'TextEdit', 'FPDPL_PL_I': 'Range', 'FPDPL_ID': 'TextEdit', 'GEOM': 'TextEdit', 'PORT_ID': 'TextEdit', 'FPDPL_LYR_': 'TextEdit', 'FPDPL_SCTN': 'TextEdit', 'FPDPL_SC_1': 'TextEdit', 'DRW_LYR_NM': 'TextEdit', 'MAKE_DE': 'DateTime', 'SCTN_LT_TE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', });
lyr__26.set('fieldImages', {'OGR_FID': 'TextEdit', 'FPDPL_PL_I': 'Range', 'FPDPL_ID': 'TextEdit', 'GEOM': 'TextEdit', 'PORT_ID': 'TextEdit', 'FPDPL_LYR_': 'TextEdit', 'FPDPL_SCTN': 'TextEdit', 'FPDPL_SC_1': 'TextEdit', 'DRW_LYR_NM': 'TextEdit', 'MAKE_DE': 'DateTime', 'SCTN_LT_TE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', });
lyr__27.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__28.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', });
lyr__29.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE_1': 'TextEdit', 'INDCDE_2': 'TextEdit', 'INDCDE_3': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'ENCLEV': 'TextEdit', 'ENC_NO': 'TextEdit', 'GUBUN': 'TextEdit', 'CATACH': 'TextEdit', 'DATEND': 'TextEdit', 'DATSTA': 'TextEdit', 'NOBJNM': 'TextEdit', 'OBJNAM': 'TextEdit', 'PEREND': 'TextEdit', 'PERSTA': 'TextEdit', 'RESTRN': 'TextEdit', 'STATUS': 'TextEdit', 'INFORM': 'TextEdit', 'NINFOM': 'TextEdit', 'NTXTDS': 'TextEdit', 'SCAMAX': 'TextEdit', 'SCAMIN': 'TextEdit', 'TXTDSC': 'TextEdit', 'RECDAT': 'TextEdit', 'RECIND': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', });
lyr___30.set('fieldImages', {'OGR_FID': 'TextEdit', 'AREA_SIZE': 'TextEdit', });
lyr___31.set('fieldImages', {'OGR_FID': 'TextEdit', 'AREA_SIZE': 'TextEdit', });
lyr___32.set('fieldImages', {'OGR_FID': 'TextEdit', 'AREA_SIZE': 'TextEdit', });
lyr___33.set('fieldImages', {'OGR_FID': 'TextEdit', 'AREA_SIZE': 'TextEdit', });
lyr__34.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__35.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr_2_36.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', 'JUALGOV': 'TextEdit', 'ODMAXCH': 'TextEdit', });
lyr__37.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', 'JUALGOV': 'TextEdit', 'ODMAXCH': 'TextEdit', });
lyr__38.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE_1': 'TextEdit', 'INDCDE_2': 'TextEdit', 'INDCDE_3': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'ENCLEV': 'TextEdit', 'ENC_NO': 'TextEdit', 'GUBUN': 'TextEdit', 'CATTSS': 'TextEdit', 'DATEND': 'TextEdit', 'DATSTA': 'TextEdit', 'STATUS': 'TextEdit', 'INFORM': 'TextEdit', 'NINFOM': 'TextEdit', 'NTXTDS': 'TextEdit', 'SCAMIN': 'TextEdit', 'TXTDSC': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', });
lyr__39.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE_1': 'TextEdit', 'INDCDE_2': 'TextEdit', 'INDCDE_3': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'ENCLEV': 'TextEdit', 'ENC_NO': 'TextEdit', 'GUBUN': 'TextEdit', 'CATTSS': 'TextEdit', 'DATEND': 'TextEdit', 'DATSTA': 'TextEdit', 'STATUS': 'TextEdit', 'INFORM': 'TextEdit', 'NINFOM': 'TextEdit', 'NTXTDS': 'TextEdit', 'SCAMIN': 'TextEdit', 'TXTDSC': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', });
lyr__40.set('fieldImages', {'OGR_FID': 'TextEdit', 'OBJECTID': 'Range', 'SPL_CDE': 'TextEdit', 'SPL_NAM': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'NAM_KR': 'TextEdit', 'STA_CDE': 'TextEdit', });
lyr__41.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__42.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__43.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', });
lyr__44.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', });
lyr__45.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'NAME': 'TextEdit', 'DEFINE': 'TextEdit', 'LAWNAM': 'TextEdit', 'ARTICE': 'TextEdit', 'REPAPER': 'TextEdit', 'REVDAT': 'TextEdit', 'NOTDAT': 'TextEdit', 'RELMINI': 'TextEdit', 'CONNUM': 'TextEdit', 'RELFILE': 'TextEdit', 'REFSITE': 'TextEdit', });
lyr_2_46.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__47.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__48.set('fieldImages', {'CODE': 'TextEdit', 'GUBUN': 'TextEdit', 'ORIGIN': 'TextEdit', 'ZN_NAME': 'TextEdit', 'LAW': 'TextEdit', 'ZN_DESC': 'TextEdit', 'RSN_SET': 'TextEdit', 'AREA_DESC': 'TextEdit', 'PORT_GUBUN': 'TextEdit', 'IMG_FILENA': 'TextEdit', });
lyr__49.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__50.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr__51.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE_1': 'TextEdit', 'INDCDE_2': 'TextEdit', 'INDCDE_3': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'ENCLEV': 'TextEdit', 'ENC_NO': 'TextEdit', 'GUBUN': 'TextEdit', 'BURDEP': 'TextEdit', 'DRVAL1': 'TextEdit', 'DRVAL2': 'TextEdit', 'CONDTN': 'TextEdit', 'DATEND': 'TextEdit', 'DATSTA': 'TextEdit', 'NOBJNM': 'TextEdit', 'OBJNAM': 'TextEdit', 'STATUS': 'TextEdit', 'VERLEN': 'TextEdit', 'INFORM': 'TextEdit', 'NINFOM': 'TextEdit', 'NTXTDS': 'TextEdit', 'SCAMIN': 'Range', 'TXTDSC': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', });
lyr__52.set('fieldImages', {'OBJNUM': 'TextEdit', 'PBINST': 'TextEdit', 'INDCDE_1': 'TextEdit', 'INDCDE_2': 'TextEdit', 'INDCDE_3': 'TextEdit', 'MNYMD': 'TextEdit', 'CLFCDE': 'TextEdit', 'ENCLEV': 'TextEdit', 'ENC_NO': 'TextEdit', 'GUBUN': 'TextEdit', 'CATCBL': 'TextEdit', 'STATUS': 'TextEdit', 'BURDEP': 'TextEdit', 'CONDTN': 'TextEdit', 'DATEND': 'TextEdit', 'DATSTA': 'TextEdit', 'DRVAL1': 'TextEdit', 'DRVAL2': 'TextEdit', 'NOBJNM': 'TextEdit', 'OBJNAM': 'TextEdit', 'INFORM': 'TextEdit', 'NINFOM': 'TextEdit', 'NTXTDS': 'TextEdit', 'SCAMIN': 'Range', 'TXTDSC': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', });
lyr__2.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE_1': 'no label', 'INDCDE_2': 'no label', 'INDCDE_3': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'ENCLEV': 'no label', 'ENC_NO': 'no label', 'GUBUN': 'no label', 'CATCBL': 'no label', 'CONDTN': 'no label', 'CONRAD': 'no label', 'CONVIS': 'no label', 'DATEND': 'no label', 'DATSTA': 'no label', 'ICEFAC': 'no label', 'NOBJNM': 'no label', 'OBJNAM': 'no label', 'STATUS': 'no label', 'VERCLR': 'no label', 'VERCSA': 'no label', 'VERDAT': 'no label', 'INFORM': 'no label', 'NINFOM': 'no label', 'NTXTDS': 'no label', 'SCAMIN': 'no label', 'TXTDSC': 'no label', 'SORDAT': 'no label', 'SORIND': 'no label', });
lyr__3.set('fieldLabels', {'ADM_SECT_C': 'no label', 'SGG_NM': 'no label', 'SGG_OID': 'no label', 'COL_ADM_SE': 'no label', 'GID': 'no label', });
lyr__4.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', });
lyr__5.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__6.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__7.set('fieldLabels', {'OGR_FID': 'no label', 'ESTATE_COD': 'no label', 'ESTATE_NAM': 'no label', 'SIDO_NAME': 'no label', 'SGG_NAME': 'no label', 'DEVELOP_ST': 'no label', 'SALE_STATE': 'no label', 'DESIGNATIO': 'no label', 'DESIGNAT_1': 'no label', 'COMPLET_DA': 'no label', 'LAW': 'no label', 'BRANCH_OPE': 'no label', 'LOCATION': 'no label', });
lyr__8.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__9.set('fieldLabels', {'OGR_FID': 'no label', 'PARK_NAME': 'no label', });
lyr__10.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE_1': 'no label', 'INDCDE_2': 'no label', 'INDCDE_3': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'ENCLEV': 'no label', 'ENC_NO': 'no label', 'GUBUN': 'no label', 'DATEND': 'no label', 'DATSTA': 'no label', 'DRVAL1': 'no label', 'DRVAL2': 'no label', 'NOBJNM': 'no label', 'OBJNAM': 'no label', 'ORIENT': 'no label', 'QUASOU': 'no label', 'RESTRN': 'no label', 'SOUACC': 'no label', 'STATUS': 'no label', 'TECSOU': 'no label', 'TRAFIC': 'no label', 'INFORM': 'no label', 'NINFOM': 'no label', 'NTXTDS': 'no label', 'SCAMIN': 'no label', 'TXTDSC': 'no label', 'SORDAT': 'no label', 'SORIND': 'no label', });
lyr__11.set('fieldLabels', {'OGR_FID': 'no label', 'ESTATE_COD': 'no label', 'ESTATE_NAM': 'no label', 'SIDO_NAME': 'no label', 'SGG_NAME': 'no label', 'DEVELOP_ST': 'no label', 'SALE_STATE': 'no label', 'DESIGNATIO': 'no label', 'DESIGNAT_1': 'no label', 'COMPLET_DA': 'no label', 'LAW': 'no label', 'BRANCH_OPE': 'no label', 'LOCATION': 'no label', });
lyr__12.set('fieldLabels', {'OGR_FID': 'no label', 'PARK_NAME': 'no label', });
lyr__13.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__14.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', 'LEGEND': 'no label', });
lyr__15.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', });
lyr__16.set('fieldLabels', {'FPUPL_ID': 'no label', 'PORT_ID': 'no label', 'TY_NM': 'no label', 'FPFC_NM': 'no label', 'USAR_NM': 'no label', 'FPUPL_AR': 'no label', 'BULD_NM': 'no label', 'DRW_LYR_NM': 'no label', 'MAKE_DE': 'no label', });
lyr__17.set('fieldLabels', {'OBJNUM': 'no label', });
lyr__18.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'COAST_CD': 'no label', 'CATE_CD': 'no label', });
lyr__19.set('fieldLabels', {'OGR_FID': 'no label', 'GOS_NUM': 'no label', 'LAW': 'no label', 'MNG_OGR': 'no label', 'LOC': 'no label', 'REG_RAMSAR': 'no label', 'REG_RAM_DA': 'no label', 'GOS_DAT': 'no label', });
lyr__20.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE_1': 'no label', 'INDCDE_2': 'no label', 'INDCDE_3': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'ENCLEV': 'no label', 'ENC_NO': 'no label', 'GUBUN': 'no label', 'CATTRK': 'no label', 'TRAFIC': 'no label', 'DATEND': 'no label', 'DATSTA': 'no label', 'DRVAL1': 'no label', 'ORIENT': 'no label', 'QUASOU': 'no label', 'SOUACC': 'no label', 'STATUS': 'no label', 'TECSOU': 'no label', 'INFORM': 'no label', 'NINFOM': 'no label', 'NTXTDS': 'no label', 'SCAMIN': 'no label', 'TXTDSC': 'no label', 'SORDAT': 'no label', 'SORIND': 'no label', });
lyr__21.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE_1': 'no label', 'INDCDE_2': 'no label', 'INDCDE_3': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'ENCLEV': 'no label', 'ENC_NO': 'no label', 'GUBUN': 'no label', 'CATMFA': 'no label', 'DATEND': 'no label', 'DATSTA': 'no label', 'EXPSOU': 'no label', 'PEREND': 'no label', 'PERSTA': 'no label', 'QUASOU': 'no label', 'RESTRN': 'no label', 'SOUACC': 'no label', 'STATUS': 'no label', 'VALSOU': 'no label', 'VERACC': 'no label', 'VERLEN': 'no label', 'WATLEV': 'no label', 'NOBJNM': 'no label', 'OBJNAM': 'no label', 'INFORM': 'no label', 'NINFOM': 'no label', 'NTXTDS': 'no label', 'SCAMIN': 'no label', 'TXTDSC': 'no label', 'SORDAT': 'no label', 'SORIND': 'no label', });
lyr__22.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', });
lyr__23.set('fieldLabels', {'GID': 'no label', 'XMIN': 'no label', 'YMIN': 'no label', 'XMAX': 'no label', 'YMAX': 'no label', 'OBJECTID': 'no label', 'FRRSR_NM': 'no label', 'MNCT_NO': 'no label', 'MNCT_SCALE': 'no label', 'ZONE_DESC': 'no label', 'RELREGLTN': 'no label', 'RELGOAG': 'no label', 'REVIYR': 'no label', 'ZONE_NM': 'no label', 'ZONE_CRDNT': 'no label', 'ID': 'no label', 'CATE_CD': 'no label', 'ADR_CD': 'no label', 'ADR_KNM': 'no label', 'ORIGIN': 'no label', 'ORIYR': 'no label', 'ORIORG': 'no label', });
lyr__24.set('fieldLabels', {'GID': 'no label', 'XMIN': 'no label', 'YMIN': 'no label', 'XMAX': 'no label', 'YMAX': 'no label', 'ADR_CD': 'no label', 'ADRES': 'no label', 'CATE_CODE': 'no label', 'SIDO_NM': 'no label', 'RELGOAG': 'no label', 'WSEA_LIC': 'no label', 'WSEA_TYPE': 'no label', 'WSEA_WAY': 'no label', 'FARM_TYPE': 'no label', 'LOC_DESC': 'no label', 'AREA': 'no label', 'LICE_SDATE': 'no label', 'LICE_EDATE': 'no label', 'LICE_NUM': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'REVIYR': 'no label', 'OBJECTID': 'no label', });
lyr__25.set('fieldLabels', {'OGR_FID': 'no label', 'FPDPL_PL_I': 'no label', 'FPDPL_ID': 'no label', 'GEOM': 'no label', 'PORT_ID': 'no label', 'FPDPL_LYR_': 'no label', 'FPDPL_SCTN': 'no label', 'FPDPL_SC_1': 'no label', 'DRW_LYR_NM': 'no label', 'MAKE_DE': 'no label', 'SCTN_LT_TE': 'no label', 'SHAPE_LENG': 'no label', });
lyr__26.set('fieldLabels', {'OGR_FID': 'no label', 'FPDPL_PL_I': 'no label', 'FPDPL_ID': 'no label', 'GEOM': 'no label', 'PORT_ID': 'no label', 'FPDPL_LYR_': 'no label', 'FPDPL_SCTN': 'no label', 'FPDPL_SC_1': 'no label', 'DRW_LYR_NM': 'no label', 'MAKE_DE': 'no label', 'SCTN_LT_TE': 'no label', 'SHAPE_LENG': 'no label', });
lyr__27.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__28.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', });
lyr__29.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE_1': 'no label', 'INDCDE_2': 'no label', 'INDCDE_3': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'ENCLEV': 'no label', 'ENC_NO': 'no label', 'GUBUN': 'no label', 'CATACH': 'no label', 'DATEND': 'no label', 'DATSTA': 'no label', 'NOBJNM': 'no label', 'OBJNAM': 'no label', 'PEREND': 'no label', 'PERSTA': 'no label', 'RESTRN': 'no label', 'STATUS': 'no label', 'INFORM': 'no label', 'NINFOM': 'no label', 'NTXTDS': 'no label', 'SCAMAX': 'no label', 'SCAMIN': 'no label', 'TXTDSC': 'no label', 'RECDAT': 'no label', 'RECIND': 'no label', 'SORDAT': 'no label', 'SORIND': 'no label', });
lyr___30.set('fieldLabels', {'OGR_FID': 'no label', 'AREA_SIZE': 'no label', });
lyr___31.set('fieldLabels', {'OGR_FID': 'no label', 'AREA_SIZE': 'no label', });
lyr___32.set('fieldLabels', {'OGR_FID': 'no label', 'AREA_SIZE': 'no label', });
lyr___33.set('fieldLabels', {'OGR_FID': 'no label', 'AREA_SIZE': 'no label', });
lyr__34.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__35.set('fieldLabels', {'OBJECTID': 'no label', });
lyr_2_36.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', 'JUALGOV': 'no label', 'ODMAXCH': 'no label', });
lyr__37.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', 'JUALGOV': 'no label', 'ODMAXCH': 'no label', });
lyr__38.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE_1': 'no label', 'INDCDE_2': 'no label', 'INDCDE_3': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'ENCLEV': 'no label', 'ENC_NO': 'no label', 'GUBUN': 'no label', 'CATTSS': 'no label', 'DATEND': 'no label', 'DATSTA': 'no label', 'STATUS': 'no label', 'INFORM': 'no label', 'NINFOM': 'no label', 'NTXTDS': 'no label', 'SCAMIN': 'no label', 'TXTDSC': 'no label', 'SORDAT': 'no label', 'SORIND': 'no label', });
lyr__39.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE_1': 'no label', 'INDCDE_2': 'no label', 'INDCDE_3': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'ENCLEV': 'no label', 'ENC_NO': 'no label', 'GUBUN': 'no label', 'CATTSS': 'no label', 'DATEND': 'no label', 'DATSTA': 'no label', 'STATUS': 'no label', 'INFORM': 'no label', 'NINFOM': 'no label', 'NTXTDS': 'no label', 'SCAMIN': 'no label', 'TXTDSC': 'no label', 'SORDAT': 'no label', 'SORIND': 'no label', });
lyr__40.set('fieldLabels', {'OGR_FID': 'no label', 'OBJECTID': 'no label', 'SPL_CDE': 'no label', 'SPL_NAM': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'NAM_KR': 'no label', 'STA_CDE': 'no label', });
lyr__41.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__42.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__43.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', });
lyr__44.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', });
lyr__45.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'NAME': 'no label', 'DEFINE': 'no label', 'LAWNAM': 'no label', 'ARTICE': 'no label', 'REPAPER': 'no label', 'REVDAT': 'no label', 'NOTDAT': 'no label', 'RELMINI': 'no label', 'CONNUM': 'no label', 'RELFILE': 'no label', 'REFSITE': 'no label', });
lyr_2_46.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__47.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__48.set('fieldLabels', {'CODE': 'no label', 'GUBUN': 'no label', 'ORIGIN': 'no label', 'ZN_NAME': 'no label', 'LAW': 'no label', 'ZN_DESC': 'no label', 'RSN_SET': 'no label', 'AREA_DESC': 'no label', 'PORT_GUBUN': 'no label', 'IMG_FILENA': 'no label', });
lyr__49.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__50.set('fieldLabels', {'OBJECTID': 'no label', });
lyr__51.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE_1': 'no label', 'INDCDE_2': 'no label', 'INDCDE_3': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'ENCLEV': 'no label', 'ENC_NO': 'no label', 'GUBUN': 'no label', 'BURDEP': 'no label', 'DRVAL1': 'no label', 'DRVAL2': 'no label', 'CONDTN': 'no label', 'DATEND': 'no label', 'DATSTA': 'no label', 'NOBJNM': 'no label', 'OBJNAM': 'no label', 'STATUS': 'no label', 'VERLEN': 'no label', 'INFORM': 'no label', 'NINFOM': 'no label', 'NTXTDS': 'no label', 'SCAMIN': 'no label', 'TXTDSC': 'no label', 'SORDAT': 'no label', 'SORIND': 'no label', });
lyr__52.set('fieldLabels', {'OBJNUM': 'no label', 'PBINST': 'no label', 'INDCDE_1': 'no label', 'INDCDE_2': 'no label', 'INDCDE_3': 'no label', 'MNYMD': 'no label', 'CLFCDE': 'no label', 'ENCLEV': 'no label', 'ENC_NO': 'no label', 'GUBUN': 'no label', 'CATCBL': 'no label', 'STATUS': 'no label', 'BURDEP': 'no label', 'CONDTN': 'no label', 'DATEND': 'no label', 'DATSTA': 'no label', 'DRVAL1': 'no label', 'DRVAL2': 'no label', 'NOBJNM': 'no label', 'OBJNAM': 'no label', 'INFORM': 'no label', 'NINFOM': 'no label', 'NTXTDS': 'no label', 'SCAMIN': 'no label', 'TXTDSC': 'no label', 'SORDAT': 'no label', 'SORIND': 'no label', });
lyr__52.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});