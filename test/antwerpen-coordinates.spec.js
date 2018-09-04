const sinon = require("sinon");

const {CoordinateService} = require('../dist/antwerpen/coordinate/coordinate.service');

describe('antwerpen', () => {
    describe('coordinate', () => {
        const dummyParkResult = {
            "results": [
                {
                    "layerId": 21,
                    "layerName": "park",
                    "displayFieldName": "NAAM",
                    "value": "STADSPARK",
                    "attributes": {
                        "OBJECTID": "2405",
                        "STRAAT": "QUINTEN MATSIJSLEI",
                        "DISTRICT": "ANTWERPEN",
                        "POSTCODE": "2018",
                        "TYPE": "park",
                        "CLUSTER": "Cluster Noord",
                        "NAAM": "STADSPARK",
                        "SHAPE": "Polygon",
                        "GISID": "GT002948",
                        "SHAPE.area": "115234,391022",
                        "SHAPE.len": "1510,363849",
                        "BEHEER": "SB",
                        "EIGENDOM": "Null",
                        "AFDELING_SB_GB": "Antwerpen Centrum"
                    },
                    "geometryType": "esriGeometryPolygon",
                    "geometry": {
                        "rings": [
                            [
                                [
                                    4.4157293107486284, 51.213926197454541
                                ],
                                [
                                    4.4157386507523917, 51.21387634664805
                                ],
                                [
                                    4.4157479937805384, 51.213830872296917
                                ]
                            ]
                        ],
                        "spatialReference": {
                            "wkid": 4326,
                            "latestWkid": 4326
                        }
                    }
                }
            ]
        }
        const dummyBicycleRouteResult = {
            "results": [
                {
                    "layerId": 6,
                    "layerName": "fietspad",
                    "displayFieldName": "STRAAT",
                    "value": "ITALIELEI",
                    "attributes": {
                        "STRAAT": "ITALIELEI",
                        "objectsleutel": "FTP 002554",
                        "straatcode": "20007216",
                        "postcode_links": "2000",
                        "postcode_rechts": "2000",
                        "DISTRICT": "ANTWERPEN",
                        "object_sleutel_straatas": "WGSO2000002554",
                        "wegnummer": "N1",
                        "wegklasse": "hoofdweg",
                        "beginknoop": "WGKO2000005719",
                        "eindknoop": "WGKO2000005832",
                        "wegbevoegdheid": "gewest Nweg",
                        "van_zijstr": "ITALI‰LEI 4",
                        "tot_zijstr": "KORTE WINKELSTRAAT",
                        "l_aardbeschrijving": "enkel",
                        "l_type_nub": "vrijliggend",
                        "l_materiaal": "beton",
                        "l_breedte": "140",
                        "l_tussenst": "niet overrijdbaar",
                        "l_tussen": "160",
                        "r_aardbeschrijving": "enkel",
                        "r_type_nub": "vrijliggend",
                        "r_materiaal": "beton",
                        "r_breedte": "140",
                        "r_tussenst": "niet overrijdbaar",
                        "r_tussen": "640",
                        "label": "enkel beide zijden",
                        "shape": "Polyline",
                        "ObjectID": "407",
                        "shape.len": "2246,250689"
                    },
                    "geometryType": "esriGeometryPolyline",
                    "geometry": {
                        "paths": [
                            [
                                [
                                    4.4167853940453936, 51.220671585044826
                                ],
                                [
                                    4.4168755739820709, 51.220896724956141
                                ]
                            ],
                            [
                                [
                                    4.4161915368535301, 51.22068351319092
                                ],
                                [
                                    4.4162467185925696, 51.22082616340645
                                ]
                            ],
                            [
                                [
                                    4.4143851559795557, 51.226162220313206
                                ],
                                [
                                    4.4143151943969228, 51.226330644794658
                                ]
                            ]
                        ],
                        "spatialReference": {
                            "wkid": 4326,
                            "latestWkid": 4326
                        }
                    }
                }
            ]
        }
        const dummyStreetResult = {
            "displayFieldName": "HUISNR",
            "fieldAliases": {
                "HUISNR": "huisnr",
                "STRAATNMID": "straatnmid",
                "STRAATNM": "straatnm",
                "HNRLABEL": "hnrlabel",
                "OBJECTID": "ObjectID",
                "ID": "ID",
                "APPTNR": "APPTNR",
                "BUSNR": "BUSNR",
                "NISCODE": "NISCODE",
                "GEMEENTE": "GEMEENTE",
                "POSTCODE": "POSTCODE",
                "HERKOMST": "HERKOMST"
            },
            "geometryType": "esriGeometryPoint",
            "spatialReference": {
                "wkid": 4326,
                "latestWkid": 4326
            },
            "fields": [],
            "features": [
                {
                    "attributes": {
                        "HUISNR": "6",
                        "STRAATNMID": 2124,
                        "STRAATNM": "Noorderplaats",
                        "HNRLABEL": "6",
                        "OBJECTID": 42975,
                        "ID": 2004281641,
                        "APPTNR": " ",
                        "BUSNR": " ",
                        "NISCODE": "11002",
                        "GEMEENTE": "Antwerpen",
                        "POSTCODE": "2000",
                        "HERKOMST": "manueleAanduidingVanIngangVanGebouw"
                    },
                    "geometry": {
                        "x": 4.4136837928344992,
                        "y": 51.230604244600464
                    }
                }
            ]
        }
        const dummyReverseGeocode = [
            {
                "straatnmid": 599,
                "straatnm": "De Braekeleerstraat",
                "huisnr": "21",
                "postcode": "2018",
                "district": "Antwerpen",
                "herkomst": "afgeleidVanGebouw",
                "districtcode": "AN",
                "xy": {
                    "x": 51.2002337110138,
                    "y": 4.39354940380986
                },
                "distance": 14.306
            }, {
                "straatnmid": 599,
                "straatnm": "De Braekeleerstraat",
                "huisnr": "22",
                "postcode": "2018",
                "district": "Antwerpen",
                "herkomst": "afgeleidVanGebouw",
                "districtcode": "AN",
                "xy": {
                    "x": 51.200482258162424,
                    "y": 4.3934738555119957
                },
                "distance": 14.381
            }
        ];

        const queryTestUrl = 'http://example.com/location/within';

        describe('createService', () => {
            var coordinateService;
            const config = {
                queryUrl: queryTestUrl
            };
            // @ts-ignore
            const service = new CoordinateService(config);

            beforeEach(() => {
                coordinateService = sinon.mock(service);
            })

            afterEach(() => {
                coordinateService.restore();
            })

            it('should return a park location with the correct properties', (done) => {
                coordinateService.expects("getPointWithin").resolves(dummyParkResult);

                const lng = "123";
                const lat = "321";

                service.getLocation(lng, lat).then((result) => {
                    expect(result).not.toBeNull();
                    expect(result.id).toEqual(dummyParkResult.results[0].attributes.OBJECTID);
                    expect(result.street).toEqual(dummyParkResult.results[0].attributes.STRAAT);
                    expect(result.postal).toEqual(dummyParkResult.results[0].attributes.POSTCODE);
                    expect(result.locationType).toEqual("park");
                    expect(result.polygons).not.toBeNull();
                    expect(result.polygons.length).toEqual(dummyParkResult.results[0].geometry.rings.length);
                    expect(result.polygons[0].length).toEqual(dummyParkResult.results[0].geometry.rings[0].length);

                    done();
                })
            });

            it('should return an address when no park is found', (done) => {
                var stub = sinon.stub(service, 'getPointWithin');
                stub.onFirstCall().resolves();

                coordinateService.expects("reverseGeocode").resolves(dummyReverseGeocode);

                const lng = "123";
                const lat = "321";

                service.getLocation(lng, lat).then((result) => {
                    expect(result).not.toBeNull();
                    expect(result.id).toEqual(dummyReverseGeocode[0].straatnmid.toString());
                    expect(result.street).toEqual(dummyReverseGeocode[0].straatnm);
                    expect(result.postal).toEqual(dummyReverseGeocode[0].postcode);
                    expect(result.locationType).toEqual("street");

                    stub.restore();
                    done();
                })
            })

            it('should return a bicycle route location when no park and street was found + correct properties', (done) => {
                var stub = sinon.stub(service, 'getPointWithin');
                stub.onFirstCall().resolves();

                coordinateService.expects("reverseGeocode").resolves();
                coordinateService.expects("getPointNearby").resolves(dummyBicycleRouteResult);

                const lng = "123";
                const lat = "321";

                service.getLocation(lng, lat).then((result) => {
                    expect(result).not.toBeNull();
                    expect(result.id).toEqual(dummyBicycleRouteResult.results[0].attributes.ObjectID.toString());
                    expect(result.street).toEqual(dummyBicycleRouteResult.results[0].attributes.STRAAT);
                    expect(result.postal).toEqual(dummyBicycleRouteResult.results[0].attributes.postcode_links);
                    expect(result.locationType).toEqual("bicycleroute");

                    stub.restore();
                    done();
                })
            });

            it('should return a street route location when no park, address or bicycle route was found + correct properties', (done) => {
                var stub = sinon.stub(service, 'getPointWithin');
                stub.resolves();

                var stub2 = sinon.stub(service, 'reverseGeocode');
                stub2.resolves();

                var stub3 = sinon.stub(service, 'getPointNearby');
                stub3.onFirstCall().resolves();
                stub3.onSecondCall().resolves(dummyStreetResult);

                const lng = "123";
                const lat = "321";

                service.getLocation(lng, lat).then((result) => {
                    expect(result).not.toBeNull();
                    expect(result.id).toEqual(dummyStreetResult.features[0].attributes.OBJECTID.toString());
                    expect(result.street).toEqual(dummyStreetResult.features[0].attributes.STRAATNM);
                    expect(result.postal).toEqual(dummyStreetResult.features[0].attributes.POSTCODE);
                    expect(result.locationType).toEqual("street");

                    stub.restore();
                    stub2.restore();
                    stub3.restore();
                    done();
                })
            });

            it('should return a street route location from reversegeocode when no park, bicycle route or street was found + correct properties', (done) => {
                var stub = sinon.stub(service, 'getPointWithin');
                stub.resolves();

                var stub2 = sinon.stub(service, 'getPointNearby');
                stub2.onFirstCall().resolves();
                stub2.onSecondCall().resolves();

                var stub3 = sinon.stub(service, 'reverseGeocode');
                stub3.onFirstCall().resolves();
                stub3.onSecondCall().resolves(dummyReverseGeocode);


                const lng = "123";
                const lat = "321";

                service.getLocation(lng, lat).then((result) => {
                    expect(result).not.toBeNull();
                    expect(result.id).toEqual(dummyReverseGeocode[0].straatnmid.toString());
                    expect(result.street).toEqual(dummyReverseGeocode[0].straatnm);
                    expect(result.postal).toEqual(dummyReverseGeocode[0].postcode);
                    expect(result.locationType).toEqual("street");

                    stub.restore();
                    stub2.restore();
                    stub3.restore();
                    done();
                })
            });

            it('should return no result when nothing was found', (done) => {
                var stub = sinon.stub(service, 'getPointWithin');
                stub.resolves();

                var stub2 = sinon.stub(service, 'getPointNearby');
                stub2.resolves();

                var stub3 = sinon.stub(service, 'reverseGeocode');
                stub3.resolves();

                const lng = "123";
                const lat = "321";

                service.getLocation(lng, lat).then((result) => {
                    expect(result).toBeUndefined();

                    stub.restore();
                    stub2.restore();
                    stub3.restore();

                    done();
                })
            });
        });
    });
});